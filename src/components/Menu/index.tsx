import React from 'react';
import Logo from '../../assets/img/Logo.png';
import './Menu.css';
import Button from '../Button';

function Menu() {
    return (
        <header className="Menu">
            <nav>
                <a href="/">
                    <img className="Logo" src={Logo} alt='Logo Zedflix' />
                </a>
                <Button className="ButtonLink" href="/">
                    Novo vídeo
                </Button>
            </nav>
        </header>
    );
}

export default Menu;