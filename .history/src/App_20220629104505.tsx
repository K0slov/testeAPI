import { Footer } from "./components/Footer/footer"
import { Header } from "./components/Header/header"
import { Home } from "./pages/home"
import { BrowserRouter } from "react-router-dom"

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Home />
      </BrowserRouter>
      <Footer /> 
    </>
  )
}

export default App
