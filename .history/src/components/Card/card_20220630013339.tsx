import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css'

interface Data {
    userId: number
    id: number
    title: string
    body: string
}
interface Icard {
    id: number
}
export function Card({id}:Icard) {
  const [data, setData] = useState<Data>();
  
    useEffect(() =>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
          .then(post => {
             setData(post);
          })
      }, [])

    return (
        
        <>
        <Link className='ul' to={`/artigo`}>
            <div className='card' key={id}>
                <a className="click" href={``} target='_blank'>
                <ul>
                    {/* {data((data: Data) => ( */}
                        <li className="li" key={data.title}>
                            <span className="spanTitle">{data.title}</span>
                        </li>
                    {/* ))} */}
                </ul>
                </a>
            </div>
        </Link>
        </>
        
    );
}
              
 