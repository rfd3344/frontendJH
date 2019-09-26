import axios from 'axios';
import myvar from 'utilis/myvar';

const AxiosMethod = (method, api, data={}, config={ headers:{}} ) => {
  config.headers.Authorization = sessionStorage.token
  api = myvar.API_URL + api;
  if( method =='get')  return axios.get( api, config)
  if( method =='post')  return axios.post( api, data,config )
}

export default AxiosMethod;
