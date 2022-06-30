import { Card } from '../Card/card'
import './style.css'
import { useEffect, useState } from 'react'
import axios from 'axios'

interface Data {
    userId: number
    id: number
    title: string
    body: string
}
export function CardsGroup() {
    const [data, setData] = useState<Data[]>([] as Data[]);
    
    useEffect(() =>{
        axios.get<Data[]>('https://jsonplaceholder.typicode.com/posts')
          .then(({ data }) => {
            setData(data)
          })
      }, [])
    {data.map(card => {
    return (  
        <ul className="ul">
            <li>
                <div className="group">
                    <div className="double">
                        <Card key={card.id} />
                    </div>
                </div> 
            </li>
        </ul>
    )
})}
}