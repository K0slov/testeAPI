import Card from '../Card/card'
import { useEffect, useState } from 'react'
import axios from 'axios'
import './style.css'

interface Data {
    userId: number
    id: number
    title: string
    body: string
}

export default function CardsGroup() {
    const [data, setData] = useState<Data[]>([] as Data[]);
    
    useEffect(() =>{
        axios.get<Data[]>('https://jsonplaceholder.typicode.com/posts')
          .then(({ data }) => {
            setData(data)
          })
      }, [])
    
    return (  
        <ul className="ul">
            {data.map(card => 
            <li className='li' key={card.id}>
                <div className="group">
                    <div className="double">
                        <Card id={card.id} />
                    </div>
                </div> 
            </li>
        )}
        </ul>
    )

}