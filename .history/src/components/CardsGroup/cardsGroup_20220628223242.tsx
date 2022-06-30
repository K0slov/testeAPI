import { Card } from '../Card/card'
import './style.css'
import InfiniteScroll from 'react-infinite-scroll-component';
import { useEffect, useState } from 'react';
import axios from 'axios';

export function CardsGroup() {
   
    return (      

        <div className="group">
              <div className="double">
                  <Card />
              </div>
          </div> 
    )
}