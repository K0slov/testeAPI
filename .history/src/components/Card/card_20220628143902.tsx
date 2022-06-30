import axios from 'axios';
import { useEffect, useState } from 'react';
import Api from '../../API/api';
import './style.css'

const url = "https://jsonplaceholder.typicode.com/posts"

export function Card() {   
    axios.get(url)
    .then(response => {
        console.log(response)
    })
    .catch(error => console.error(error))
    
    return (
        <div className="card">
            <a className="click" href='#' target='_blank'>
                <div className='titulo'>
                    <h2>{}</h2>
                </div>
                <div className='conteudo'>
                    <p className='conteudoText'>Tu não és para mim senão um garoto inteiramente igual a cem mil outros garotos. E eu não tenho necessidade de ti. E tu não tens também necessidade de mim. Não passo a teus olhos de uma raposa igual a cem mil outras raposas. Mas, se tu me cativas, nós teremos necessidade um do outro. Serás pra mim o único no mundo. E eu serei para ti a única no mundo…</p>
                </div>
            </a>
        </div>
    )
}