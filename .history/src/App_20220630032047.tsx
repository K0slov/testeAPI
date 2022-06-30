import { Footer } from "./components/Footer/footer"
import { Header } from "./components/Header/header"
import { BrowserRouter } from "react-router-dom"
import Router from "./router"

export default function App() {
  return (
    <>
    <BrowserRouter>
      <Header />
        <Router />
      <Footer /> 
    </BrowserRouter>
    </>
  )
}
