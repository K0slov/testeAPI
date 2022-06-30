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
        <ul className="click">
            {data.map((data : Data) => (
            <li key={data.id}>
                <a className="click" href='#' target='_blank'>
                    <div className='titulo'>
                        <span className="spanTitle">{data.title}</span>
                    </div>
                </a>
            </li>
            ))}
        </ul>
    );
}
              
 