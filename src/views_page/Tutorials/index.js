import React from 'react';
import './style.less';

import { getUrlPara, setUrlPara } from 'utilis/UrlPara';
import AxiosMethod from 'utilis/AxiosMethod';
import myvar from 'utilis/myvar';

import CourseFilter from './CourseFilter'
import CourseBlock from './CourseBlock'
import ErrorsBlock from 'components/ErrorsBlock';
import Pagination from 'components/Pagination';

export default class BlockName extends React.Component {
	constructor(props) {
		super(props);
		let UrlPara = getUrlPara() ? getUrlPara() : {}
		UrlPara.page = UrlPara.page || 1
		UrlPara.limit = 6
		this.state = {
			courseList: null,
			institutionList: null,
			universityList: null,
			subjectList: null,
			totalPage: null,
			UrlPara : UrlPara,
			errors: null
		}
	}
	componentDidMount(){
		AxiosMethod('get', '/course/list'+ setUrlPara( this.state.UrlPara ) ).then( res =>{
			if( res.status>=200 && res.status<300 ){
				this.setState({
					courseList: res.data,
					totalPage: Math.ceil(res.data.count/this.state.UrlPara.limit)
				});
			}
		}).catch( error => {
			this.setState({	errors: error.response.data.message });
		})
		AxiosMethod('get', '/institution/list').then( res =>{
			if( res.status>=200 && res.status<300 ){
				this.setState({
					institutionList: res.data
				});
			}
		}).catch( error => {
			this.setState({	errors: error.response.data.message });
		})
		AxiosMethod('get', '/university/list').then( res =>{
			if( res.status>=200 && res.status<300 ){
				this.setState({
					universityList: res.data
				});
			}
		}).catch( error => {
			this.setState({	errors: error.response.data.message });
		})
		AxiosMethod('get', '/subject/list').then( res =>{
			if( res.status>=200 && res.status<300 ){
				this.setState({
					subjectList: res.data
				});
			}
		}).catch( error => {
			this.setState({	errors: error.response.data.message });
		})
	}

	render(){
		return (
			<section id="Tutorials">
				<CourseFilter
					institutionList={this.state.institutionList}
					universityList={this.state.universityList}
					subjectList={this.state.subjectList}
				/>
				<div class="container pt-5">
					<div class="row">
						{ this.state.courseList&&this.state.courseList.rows.map( item => (
								<div class="col-md-4"> <CourseBlock data={item} /> </div>
							))
						}
					</div>
					<ErrorsBlock message={this.state.errors } />
					{ this.state.totalPage>1 &&
						<Pagination total={this.state.totalPage}/>
					}
				</div>

			</section>
		)
	}
}
