import './style.css'
import image from '../../assets/logoLaranja.png'
import { WhatsappLogo } from "phosphor-react";
import { useState } from 'react';
import { SelectBar } from '../SelectBar/selectBar';

export function Header() {
    const [navbar, setNavbar] = useState(true)
    const showSidebar = () => setNavbar(!navbar)
    
    return(
        <header className='header'> 
            <img className='img' src={image} />

            <nav className="menu">
                <a className="menu-item" href=" ">HYPERLINK</a>
                <a className="menu-item" onClick={showSidebar}>DROPDOWN</a>
                <nav className={navbar ? 'nav-menu active' : 'nav-menu'}>
                    <ul className='nav-menu-items' onClick={showSidebar}>
                    {navbar && <SelectBar />}
                    </ul>
                </nav>
            </nav>

            <a className="wppLink" href="https://wa.me/+5527988569001" target="_blank">
                <div className="wpp">
                    <WhatsappLogo className="icon" size={24} color="#34af23" />
                    <p className="number">(27) 98856-9001</p>
                </div>
            </a>
        </header>
    )
}   