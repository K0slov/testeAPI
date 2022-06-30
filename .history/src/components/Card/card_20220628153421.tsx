import axios from 'axios';
import { JSXElementConstructor, ReactElement, ReactFragment, ReactPortal, useEffect, useState } from 'react';
import './style.css'

const url = "https://jsonplaceholder.typicode.com/posts"

export function Card() {   
    const [data, setData] = useState<any>([])
    
     useEffect(() => {
     axios.get('https://jsonplaceholder.typicode.com/posts')
     .then(response => {
         console.log(response.data)
     })
     .catch((err) => {
       console.error("ops! ocorreu um erro : " + err);
     });
 }, []);
    return (
        <div className="card">{
            data.map((Data: { 
                userId: number
                id: number
                title: string
                body: string 
            }) =>
            <a className="click" href='#' target='_blank'>
                <div className='titulo'>
                    <h2>{Data.title}</h2>
                </div>
                <div className='conteudo'>
                    <p className='conteudoText'>{Data.body}</p>
                </div>
            </a>
            )}
        </div>
    )
}