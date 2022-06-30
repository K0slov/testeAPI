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
  const [post, setPost] = useState<any>({} as Data);
  
    useEffect(() =>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
          .then(({data}) => {
             setPost(data);
             console.log(data)
          })
      }, [])

    return (
        
        <>
        <Link className='ul' to={`/artigo`}>
            <div className='card' key={id}>
                <a className="click" href={``} target='_blank'>
                <ul>
                    {/* {data((data: Data) => ( */}
                        <li className="li" key={post.title}>
                            <span className="spanTitle">{post.title}</span>
                        </li>
                    {/* ))} */}
                </ul>
                </a>
            </div>
        </Link>
        </>
        
    );
}
              
 