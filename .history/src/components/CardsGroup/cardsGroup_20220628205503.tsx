import { Card } from '../Card/card'
import './style.css'
import InfiniteScroll from 'react-infinite-scroll-component'
import { useEffect, useState } from 'react';
import axios from 'axios';

var InfiniteScroll = require('react-infinite-scroll-component')
  
  .InfiniteScroll;
export function CardsGroup() {
   
    return (
      

         <InfiniteScroll
             pageStart={0}
             loadMore={Card}
             hasMore={true || false}
             loader={<div className="loader" key={0}>Loading ...</div>}
         >
     {<div className="group">
              <div className="double">
                  <Card />
              </div>
          </div> } 
 </InfiniteScroll>
            
)
}