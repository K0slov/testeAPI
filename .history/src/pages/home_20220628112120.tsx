import { CardsGroup } from "../components/CardsGroup/cardsGroup";

export function Home() {
    return(
        <>
            <h1 style={{display: "flex", alignItems: "center", flexDirection: "column-reverse", color: "#fd8402", cursor: "unset" }}> Teste de chamada de API </h1>
            <CardsGroup />
        </>
    )
}