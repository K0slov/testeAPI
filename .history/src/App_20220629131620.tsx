import { Footer } from "./components/Footer/footer"
import { Header } from "./components/Header/header"
import { Home } from "./pages/home"
import { BrowserRouter } from "react-router-dom"
import { Router } from "./router"

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <Footer /> 
    </>
  )
}

export default App
