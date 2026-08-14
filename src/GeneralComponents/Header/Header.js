import { useEffect, useState } from 'react';

import './Header.css';

function Header() {
    const [isDark, setIsDark] = useState(false);
    const applyTheme = (theme) => {
        document.body.classList.remove('theme-light', 'theme-dark');
        
        if (theme === 'dark') {
            document.body.classList.add('theme-dark');
            setIsDark(true);
        } else {
            document.body.classList.add('theme-light');
            setIsDark(false);
        }

        localStorage.setItem('theme', theme);

        const themeButton = document.querySelector('.theme-button');
        if (themeButton) {
            if (theme === 'dark') {
                themeButton.classList.add('active');
            } else {
                themeButton.classList.remove('active');
            }
        }
    };

    const toggleTheme = () => {
        const currentTheme = localStorage.getItem('theme') || 'light';
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        applyTheme(newTheme);
    };

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') || 'light';
        applyTheme(savedTheme);

        const themeButton = document.querySelector('.theme-button');
        if (themeButton) {
            themeButton.addEventListener('click', toggleTheme);
        }

        return () => {
            if (themeButton) {
                themeButton.removeEventListener('click', toggleTheme);
            }
        };
    }, []);

    return (
        <header>
            <div className='header'>
                <div className='header-left'>
                    <a href='https://leosoplapuco.com/' title='leosoplapuco | Desarrollador web' className='header-logo'>
                        <h2 className='header-logo-text'>leosoplapuco</h2>
                    </a>

                    <nav className='menu-container'>
                        <ul className='menu'>
                            <li>
                                <a href='/' title='' className='menu-link menu-link-1'>
                                    <h2>Inicio</h2>
                                </a>
                            </li>
                            <li>
                                <a href='/' title='' className='menu-link menu-link-2'>
                                    <h2>Servicios</h2>
                                </a>
                            </li>
                            <li>
                                <a href='/' title='' className='menu-link menu-link-3'>
                                    <h2>Portafolio</h2>
                                </a>
                            </li>
                            <li>
                                <a href='/' title='' className='menu-link menu-link-4'>
                                    <h2>Sobre mi</h2>
                                </a>
                            </li>
                            <li>
                                <a href='/' title='' className='menu-link menu-link-5'>
                                    <h2>Contacto</h2>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className='header-right'>
                    <button type='button' className='theme-button'>
                        <span className="material-symbols-outlined">dark_mode</span>
                        <span className="material-symbols-outlined">light_mode</span>
                    </button>
                </div>
            </div>
        </header>
    );
}

export default Header;
