import { Footer } from "./components/Footer/footer"
import { Header } from "./components/Header/header"


function App() {
  return (
    <div style={{height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', flex: 1}}>
      <Header />
      <Footer />
    </div>  
  )
}

export default App
