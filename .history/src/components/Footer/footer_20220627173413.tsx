import './style.modeule.css'
import image from '../../assets/logoLaranja.png'

export function Footer() {
    return (
        <footer> 
            <img src={image} />
            <div className='adress'>
                <span>Endereço ficticio</span>
                <span>Número ficticio</span>
                <span>Resto ficticio</span>
            </div>
        </footer>
    )
}