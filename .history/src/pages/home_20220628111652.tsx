import { CardsGroup } from "../components/CardsGroup/cardsGroup";

export function Home() {
    return(
        <>
            <h1 style={{display: "flex", alignItems: "center", flexDirection: "column-reverse" }}> Teste de chamada de API </h1>
            <CardsGroup />
        </>
    )
}