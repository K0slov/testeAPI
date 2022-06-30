import axios from 'axios'
import { useEffect, useState } from 'react'
import {  useParams } from 'react-router-dom'
import './style.css'

interface Data {
    userId: number
    id: number
    title: string
    body: string
}

export default function Conteudo() {
    const [post, setPost] = useState<any>({} as Data);
    const params = useParams() 
    
      useEffect(() =>{
          axios.get(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
            .then(({data}) => {
               setPost(data);
            })
        }, [])
  
    return (

        <div className="caixa" >
            <h1 className="titulo-da-caixa"> {post.title} </h1>
            <p className="texto-da-caixa"> {post.body} </p>
        </div>
    )
}