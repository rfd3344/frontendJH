
import React from 'react';
import { getUrlPara, setUrlPara } from 'utilis/UrlPara';

const Pagination =( { total } )=>{
  if(total<=1) return 0;
  let UrlPara = getUrlPara() ? getUrlPara() : {} ;
  let current = UrlPara.page ? parseInt(UrlPara.page) : 1
  total = parseInt(total)
  let DisplayNo = 6, start=1, end=total; // display 7 numbers
  if(DisplayNo>total) DisplayNo = total;
  let rows = [];
  if(current-DisplayNo/2<1) end=DisplayNo;
  else if(current+DisplayNo/2>total) start=total-DisplayNo+1;
  else{
    start = current - Math.floor(DisplayNo/2)
    end = current + Math.floor(DisplayNo/2)
  }
  for(let i=start; i<=end; i++ ) rows.push(i)
  let calcUrlPara = page =>{
    switch(page){
      case 'pre':
        if(current>1){
          UrlPara.page = current - 1
          return setUrlPara( UrlPara )
        }
      case 'next':
        if(current<total){
          UrlPara.page = current + 1
          return setUrlPara( UrlPara )
        }
      default:
        UrlPara.page = page
        return setUrlPara( UrlPara )
    }
  }
  return (
    <div>
      <nav id="Pagination" aria-label="Page navigation">
        <ul class="pagination">
          { current!=1&&
            <li><a href={calcUrlPara('pre')} >&laquo;</a></li>
          }
          { rows.map( item=>(
              <li class="page-item" class={item==current&&'active'}>
                <a class="page-link" href={calcUrlPara(item)}>{item}</a>
              </li>
            ))
          }
          { current!=total&&
            <li><a href={calcUrlPara('next')} >&raquo;</a></li>
          }
        </ul>
      </nav>
    </div>
  )};
export default Pagination
