import axios from 'axios';
import { useEffect, useState } from 'react';
import './style.css'

export interface Data {
    userId: number
    id: number
    title: string
    body: string
}
export function Card() {
  const [data, setData] = useState<Data[]>([] as Data[]);
  
    useEffect(() =>{
        axios.get<Data[]>('https://jsonplaceholder.typicode.com/posts')
          .then(({ data }) => {
            setData(data)
          })
      }, [])

    return (
        <>
        <div className='card'>
            <ul>
            {data.slice(0, 4).map((data: Data) => (
                <li className="li" key={data.title}>
                    <a className="click" href={`https://jsonplaceholder.typicode.com/posts/${data.id}`} target='_blank'>

                        <span className="spanTitle">{data.title}</span>

                    </a>
                </li>
            ))}
            </ul>
        </div>
        </>
    );
}
              
 