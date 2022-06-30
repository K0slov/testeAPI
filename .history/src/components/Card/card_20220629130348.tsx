import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Artigo } from '../../pages/artigo';
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
        <Link className='ul' to={`/artigo`}>
            <div className='card'>
                <a className="click" href={``} target='_blank'>
                <ul>
                    {data.slice(0, 1).map((data: Data) => (
                        <li className="li" key={data.title}>

                            <span className="spanTitle">{data.title}</span>

                        </li>
                    ))}
                </ul>
                </a>
            </div>
        </Link>
        </>
        
    );
}
              
 