import { Footer } from "./components/Footer/footer"
import { Header } from "./components/Header/header"


function App() {
  return (
    <div style={{height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
      <Header />
      <Footer />
    </div>  
  )
}

export default App
