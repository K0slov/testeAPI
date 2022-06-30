import './style.modeule.css'
import image from '../../assets/logoLaranja.png'

export function Footer() {
    return (
        <footer> 
            <img src={image} />
            <div className='adress'>
                <span>teste1</span>
                <span>teste2</span>
                <span>teste3</span>
            </div>
        </footer>
    )
}