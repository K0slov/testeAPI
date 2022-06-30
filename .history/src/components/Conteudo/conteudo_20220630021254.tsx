import axios from 'axios'
import { useEffect, useState } from 'react'
import {  useParams } from 'react-router-dom'
import './style.css'



export function Conteudo() {
    const params = useParams() 

        console.log(params.id)
    return (
        <div className="caixa">
            <h1 className="titulo-da-caixa"> djdjdj </h1>
            <p className="texto-da-caixa"> texto ficticio texto ficticio texto ficticio texto ficticio texto ficticio texto ficticio texto ficticio texto ficticio texto ficticio texto ficticio texto ficticio texto ficticio texto ficticio texto ficticio texto ficticio texto ficticio texto ficticio texto ficticio texto ficticio texto ficticio texto ficticio texto ficticio texto ficticio texto ficticio texto ficticio texto ficticio texto ficticio texto ficticio texto ficticio texto ficticio texto ficticio texto ficticio texto ficticio texto ficticio texto ficticio texto ficticio texto ficticio texto ficticio texto ficticio texto ficticio texto ficticio texto ficticio texto ficticio texto ficticio texto ficticio texto ficticio texto ficticio texto ficticio texto ficticio texto ficticio texto ficticio texto ficticio texto ficticio texto ficticio texto ficticio texto ficticio texto ficticio texto ficticio texto ficticio texto ficticio texto ficticio texto ficticio texto ficticio texto ficticio texto ficticio texto ficticio texto ficticio texto ficticio texto ficticio texto ficticio texto ficticio texto ficticio texto ficticio texto ficticio texto ficticio texto ficticio texto ficticio texto ficticio texto ficticio texto ficticio texto ficticio texto ficticio </p>
        </div>
    )
}