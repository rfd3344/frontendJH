
function getUrlPara()
{
  let url = document.location.toString();
  let arrUrl = url.split("?");
  let para = arrUrl[1];
  if( !para ) return null;
  let res = {};
  para = para.split("&")
  para.map( item =>{
    let temp = item.split("=")
    res[ temp[0] ] = temp[1]
  })
  return res;
}

function setUrlPara( Para={} )
{
  let res = '?';
  for (let key in Para) {
    res = res.concat( key + '=' + Para[key] + '&' )
  }
  res = res.slice(0, -1);
  return res;
}

export { getUrlPara,setUrlPara }
