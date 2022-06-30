import axios from 'axios'
import { useEffect, useState } from 'react'
import { api } from '../../service/api'
import './style.css'

interface Data {
    userId: number
    id: number
    title: string
    body: string
}

export function Conteudo() {
    const [data, setData] = useState<Data[]>([] as Data[]);

    useEffect(() =>{
        axios.get<Data[]>('https://jsonplaceholder.typicode.com/posts')
        .then(({data}) => {
            setData(data)
        })
    })
    return (
        <div className="caixa">
            <h1 className="titulo-da-caixa"> titulo ficticio </h1>
            <p className="texto-da-caixa"> texto ficticio texto ficticio texto ficticio texto ficticio texto ficticio texto ficticio texto ficticio texto ficticio texto ficticio texto ficticio texto ficticio texto ficticio texto ficticio texto ficticio texto ficticio texto ficticio texto ficticio texto ficticio texto ficticio texto ficticio texto ficticio texto ficticio texto ficticio texto ficticio texto ficticio texto ficticio texto ficticio texto ficticio texto ficticio texto ficticio texto ficticio texto ficticio texto ficticio texto ficticio texto ficticio texto ficticio texto ficticio texto ficticio texto ficticio texto ficticio texto ficticio texto ficticio texto ficticio texto ficticio texto ficticio texto ficticio texto ficticio texto ficticio texto ficticio texto ficticio texto ficticio texto ficticio texto ficticio texto ficticio texto ficticio texto ficticio texto ficticio texto ficticio texto ficticio texto ficticio texto ficticio texto ficticio texto ficticio texto ficticio texto ficticio texto ficticio texto ficticio texto ficticio texto ficticio texto ficticio texto ficticio texto ficticio texto ficticio texto ficticio texto ficticio texto ficticio texto ficticio texto ficticio texto ficticio texto ficticio texto ficticio texto ficticio </p>
        </div>
    )
}