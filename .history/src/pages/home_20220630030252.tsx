import axios from "axios";
import { useEffect, useState } from "react";
import { CardsGroup } from "../components/CardsGroup/cardsGroup";

interface Data {
    userId: number
    id: number
    title: string
    body: string
}

export default function Home() {
    const [data, setData] = useState<Data[]>([] as Data[]);
    
    useEffect(() =>{
        axios.get<Data[]>('https://jsonplaceholder.typicode.com/posts')
          .then(({ data }) => {
            setData(data)
          })
      }, [])
    
    return(
        <><h1 style={{display: "flex", alignItems: "center", flexDirection: "column", color: "#fd8402", cursor: "default" }}> Teste de chamada de API </h1>
        <ul>
            {data.slice(0, 4).map(card => 
            <li className='li' key={card.id}>
            
            <CardsGroup />
            </li>
        )}
        </ul>
            {/* <Conteudo /> */}
            {/* <Card /> */}
        </>
    )
}