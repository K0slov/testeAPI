import axios from 'axios';
import { useEffect, useState } from 'react';
import './style.css'

const url = "https://jsonplaceholder.typicode.com/posts"

export function Card() {   
    const [data, setData] = useState([])
    
     useEffect(() => {
     axios.get(url)
     .then(response => {
         console.log(response.data)

    setData(response.data)
     })
     .catch((err) => {
       console.error("deu ruim, erro: " + err);
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
            </a>
            )}
        </div>
    )
}