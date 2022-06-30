import './style.module.css'
import image from '../../assets/logoLaranja.png'
import { WhatsappLogo } from "phosphor-react";

export function Header() {
    return(
        <header className='header'> 
            <img src={image} />

            <nav className="menu">
                <a className="menu-item" href=" ">HYPERLINK</a>
                <a className="menu-item" href=" ">DROPDOWN</a>
            </nav>

            <a className="wppLink" href="">
                <div className="wpp">
                    <WhatsappLogo className="icon" size={24} color="#34af23" />
                    <p className="number">(27) 98856-9001</p>
                </div>
            </a>
        </header>
    )
}   