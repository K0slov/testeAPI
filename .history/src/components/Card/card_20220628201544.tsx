import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import './style.css'

const url = "https://jsonplaceholder.typicode.com/posts"

export function Card() {  
    const lastRef = useRef(null);
    const [isLoading, setIsLoading] = useState(false); 
    const [data, setData] = useState({
        itens: [],
        page: 0,
        totalPages: 1,
    })
    
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
            data.itens.map((Data: { 
                userId: number
                id: number
                title: string
                body: string 
            }) =>
            <a className="click" href='#' target='_blank'>
                <div className='titulo'>
                    <span className="spanTitle">{Data.title}</span>
                </div>
            </a>
            )}
            {!!data.itens.length && <div ref={lastRef} />}
            {isLoading && <p>Loading...</p>}
        </div>
    )
}