import { useEffect, useState } from 'react';
import { api } from '../../service/api';
import './style.css'

interface Data {
    userId: number
    id: number
    title: string
    body: string
}
export default function Card() {
  const [data, setData] = useState<Data[]>([] as Data[]);
  
    useEffect(() =>{
        setData(data);
    })
    return (
        <li className="click">
            <a className="click" href='#' target='_blank'>
                <div className='titulo'>
                    <span className="spanTitle">{}</span>
                </div>
            </a>
        </li>
            )
              
 } 