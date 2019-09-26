
import { getUrlPara, setUrlPara } from 'utilis/UrlPara';

function calcUrlPara( newValue={} ){
  let UrlPara = getUrlPara() ? getUrlPara() : {}
  for( let key in newValue){
    UrlPara[key] =  newValue[key]
  }
  return setUrlPara( UrlPara )
}

export { calcUrlPara }
