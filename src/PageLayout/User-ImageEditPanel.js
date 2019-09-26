import React from 'react';
import { Tooltip, FormGroup,ControlLabel,FormControl } from 'react-bootstrap';
import AxiosMethod from 'utilis/AxiosMethod';
import ToggleModel from 'components/ToggleModel'
import ErrorsBlock from 'components/ErrorsBlock'
import Cropper from 'react-cropper';
import Pagination from 'components/Pagination';

export default class BlockName extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: '',
      preview: null,
      src: '/assets/img/avatar_default.jpg'
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    e.preventDefault();
    let files;
    if (e.dataTransfer) {
      files = e.dataTransfer.files;
    } else if (e.target) {
      files = e.target.files;
    }
    const reader = new FileReader();
    reader.onload = () => {
      this.setState({ src: reader.result });
    };
    reader.readAsDataURL(files[0]);
  }

  handleSubmitAvatar =(post_info)=>{
    if (typeof this.cropper.getCroppedCanvas() === 'undefined') {
      return;
    }
    this.cropper.getCroppedCanvas().toBlob(async blob => {
      let filename = this.state.src.name;
      const formData = new FormData();
      formData.append('avatar', blob, filename);

      let api='/student/info';
      AxiosMethod('post', api, formData ).then( res =>{
        if( res.status>=200 && res.status<300 ) {
          this.props.CloseModel();
          location.reload();
        }
      }).catch( error=> {
        this.setState({ errors:error.message });
      })
    })
  }
  render(){
    return (
      <ToggleModel data={this.props.data} CloseModel={this.props.CloseModel} processPOST={this.handleSubmitAvatar}>
        <div style={{ width: '100%' }}>
          <div class="image-upload">
            <label class="btn btn-default btn-sm center-block btn-file" type="button">
              上传图片
              <input type="file" onChange={this.onChange} />
            </label>
          </div>
          <Cropper
            style={{ height: 200, width: '100%' }}
            aspectRatio={1 / 1}
            preview=".img-preview"
            guides={false}
            src={this.state.src}
            ref={cropper => { this.cropper = cropper; }}
          />
        </div>
        <ErrorsBlock message={this.state.errors } />
        { this.state.totalPage&&
          <Pagination current={this.state.courseFilter.page}
            total={this.state.totalPage}
            changePage={this.handlePagechange.bind(this)} />
        }
      </ToggleModel>
    );
  }
}
