import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/Logo.png';
import './Menu.css';
import Button from '../Button';

function Menu() {
    return (
        <header className="Menu">
            <nav>
                <Link to="/">
                    <img className="Logo" src={Logo} alt='Logo Zedflix' />
                </Link>
                <Button className="ButtonLink" to="/cadastro/video">
                    Novo vídeo
                </Button>
            </nav>
        </header>
    );
}

export default Menu;