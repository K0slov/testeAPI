import image from '../../assets/logoLaranja.png'
import { NavigationArrow } from 'phosphor-react'
import { Link } from 'react-router-dom'
import './style.css'

export default function Footer() {
    return (
        <footer> 
            <Link to={'/'}>
                <img src={image} />
            </Link>
            <a className='adressLink' href='https://www.google.com/maps/dir/-20.165736,-40.2578957/imob+integrada/@-23.8194615,-49.2158798,6z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x9527473fa16aca85:0xaacb5a64ef59b145!2m2!1d-48.5090423!2d-27.5352896' target='_blank'>
                <div className='adress'>
                    <span>Rod. José Carlos Daux</span>
                    <span>nº 5500 - sala 324</span>
                    <span>Saco Grande, Florianópolis</span>
                </div>
                <NavigationArrow size={32} />
            </a>
        </footer>
    )
}