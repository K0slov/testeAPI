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
    
    return (  
        <ul className="ul">
            {data.map(card => 
            <li key={card.id}>
                <div className="group">
                    <div className="double">
                        <Card />
                    </div>
                </div> 
            </li>
        )}
        </ul>
    )

}