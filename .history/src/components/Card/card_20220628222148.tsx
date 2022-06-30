import axios from 'axios';
import { Component, useEffect, useState } from 'react';
import { api } from '../../service/api';
import './style.css'

export class Card extends Component {

    state= {
        artigos: [],
    }

    async componentDidMount() {
        const response = await api.get('')

        this.setState({ artigos: response.data})
    }
    render() {
        const { artigos } = this.state
        
        return (
            <div className="card">{
                             artigos.map((data =>(
                                <li key={data}>
                                    <a className="click" href='#' target='_blank'>
                                        <div className='titulo'>
                                            <span className="spanTitle">{}</span>
                                        </div>
                                    </a>
                                </li>
                             ))}
                         </div>
        )
}
// const url = "https://jsonplaceholder.typicode.com/posts"

// export function Card() {   
//     const [data, setData] = useState([])
    
//      useEffect(() => {
//      axios.get(url)
//      .then(response => {
//          console.log(response.data)

//     setData(response.data)
//      })
//      .catch((err) => {
//        console.error("deu ruim, erro: " + err);
//      });
//  }, []);
//     return (
//         <div className="card">{
//             data.map((Data: { 
//                 userId: number
//                 id: number
//                 title: string
//                 body: string 
//             }) =>
//             <a className="click" href='#' target='_blank'>
//                 <div className='titulo'>
//                     <span className="spanTitle">{Data.title}</span>
//                 </div>
//             </a>
//             )}
//         </div>
//     )
// }