import './style.modeule.css'
import image from '../../assets/logoLaranja.png'
import { NavigationArrow } from 'phosphor-react'

export function Footer() {
    return (
        <footer> 
            <img src={image} />
            <a href=''>
                <div className='adress'>
                    <span>Endereço ficticio</span>
                    <span>Número ficticio</span>
                    <span>Resto ficticio</span>
                </div>
            </a>    
            <NavigationArrow size={32} />
        </footer>
    )
}