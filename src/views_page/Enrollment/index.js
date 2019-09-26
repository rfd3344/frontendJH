
import React from 'react';
import myvar from 'utilis/myvar';
import AxiosMethod from 'utilis/AxiosMethod';
import ErrorsBlock from 'components/ErrorsBlock';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subjects: null,
      errors: null,
      success: null
    };
  }
  componentDidMount(){
    AxiosMethod('post', '/course/list', {limit:999, page:1} ).then( res =>{
      if( res.status>=200 && res.status<300 ){
        this.setState({  subjects: res.data });
      }
    }).catch( error => {
      this.setState({  errors: error.response.data.message });
    })
  }
  handleSubmit =(e)=>{
    e.preventDefault();
    let data = { courses:[] };
    const temp = new FormData(e.target);
    for (let [key, value] of temp.entries()) {
      if(key=='courses')  data[key].push(value)
      else  data[key] = value
    }
    AxiosMethod('post', '/student', data ).then( res =>{
      if( res.status>=200 && res.status<300 ){
        let promises = [];
        for( let item of data.courses ){
          promises.push( this.registerCourse( item, res.data.student.id ) )
        }
        Promise.all(promises).then( res => {
            this.setState({ success: 'Success, thanks' });
        }).catch( error => {
          this.setState({  errors:error.response.data.message });
        })
      }
    }).catch( error => {
      console.log('errors happen');
      this.setState({  errors: error.response.data.message });
    })
  }
  registerCourse( course_id, student_id  ){
    let post_temp = {
      student_id: student_id.toString(),
      course_id: course_id,
      status: '0',
      notes: '11'
    }
    return AxiosMethod('post', '/enrolment/', post_temp ).then( res =>{
      if( res.status>=200 && res.status<300 ){
        return true
      }
    })
  }
  render(){
    return (
      <section class="row justify-content-center UserForms" >
        <div class="col align-self-center">
          <h1> 报名表 </h1> <br/>
          <form class="form-horizontal" onSubmit={this.handleSubmit} >
            <h1> Personal Info </h1>
            <div class="form-group row">
              <label class="col-2"> Name: </label>
              <div class="col-10">
                <input class="form-control" type="text" name="name" />
              </div>
            </div>
            <div class="form-group row">
              <label class="col-2"> Email: </label>
              <div class="col-10">
                <input class="form-control" type="email" name="email"/>
              </div>
            </div>
            <div class="form-group row">
              <label class="col-2"> subject: </label>
              <div class="col-10">
                <input class="form-control" type="text" name="subject"/>
              </div>
            </div>
            <div class="form-group row">
              <label class="col-2"> Phone No: </label>
              <div class="col-10">
                <input class="form-control" type="text" name="phone_no" />
              </div>
            </div>
            <div class="form-group row">
              <label class="col-2"> student ID </label>
              <div class="col-10">
                <input class="form-control" type="text" name="student_id"/>
              </div>
            </div>
            <div class="form-group row">
              <label class="col-2"> wechat ID </label>
              <div class="col-10">
                <input class="form-control" type="text" name="wechat_id"/>
              </div>
            </div>
            <h1> Courses registration  </h1>
            <div class="form-check">
              <label> Courses: </label>
              { this.state.subjects&&this.state.subjects.rows.map( item=>(
                  <label><input type="checkbox" name="courses" value={item.id}/>
                    {item.code}: {item.name} </label>
                ))
              }
            </div>
            <ErrorsBlock message={this.state.errors } />
            {this.state.success&& <p class="alert alert-success">
              <strong> Success: </strong>
              {this.state.success} </p>
            }
            <div id="Actions" class="row justify-content-around">
              <button class="btn btn-default" type="submit"> Submit </button>
            </div>
          </form>
        </div>
      </section>
    )
  }
}
