// import './Header.css';

// function Header(){
//     return(
//         <header>
//             <div className='header'>
//                 <div className='header-left'>
//                     <a href='/' className='header-logo'>
//                         <h2 className='header-logo-text'>leosoplapuco</h2>
//                     </a>

//                     <nav className='menu-container'>
//                         <ul className='menu'>
//                             <li>
//                                 <a href='/' title='' className='menu-link menu-link-1'>
//                                     <h2>Inicio</h2>
//                                 </a>
//                             </li>
//                             <li>
//                                 <a href='/' title='' className='menu-link menu-link-2'>
//                                     <h2>Servicios</h2>
//                                 </a>
//                             </li>
//                             <li>
//                                 <a href='/' title='' className='menu-link menu-link-3'>
//                                     <h2>Portafolio</h2>
//                                 </a>
//                             </li>
//                             <li>
//                                 <a href='/' title='' className='menu-link menu-link-4'>
//                                     <h2>Sobre mi</h2>
//                                 </a>
//                             </li>
//                             <li>
//                                 <a href='/' title='' className='menu-link menu-link-5'>
//                                     <h2>Contacto</h2>
//                                 </a>
//                             </li>
//                         </ul>
//                     </nav>
//                 </div>
//                 <div className='header-right'>
//                     <div className='theme-button'>
//                         <span className='theme-button-tag theme-button-light'></span>
//                         <span className='theme-button-tag theme-button-gray'></span>
//                         <span className='theme-button-tag theme-button-dark'></span>

//                         <span className='theme-button-indicator'></span>
//                     </div>
//                 </div>
//             </div>
//         </header>
//     )
// }

// export default Header;

import './Header.css';
import { useEffect } from 'react';

function Header() {
    // Función para aplicar el tema
    const applyTheme = (theme) => {
        // Remover todas las clases de tema
        document.body.classList.remove('theme-light', 'theme-gray', 'theme-dark');
        
        // Agregar la clase del tema seleccionado
        if (theme === 'light') {
            document.body.classList.add('theme-light');
        } else if (theme === 'gray') {
            document.body.classList.add('theme-gray');
        } else if (theme === 'dark') {
            document.body.classList.add('theme-dark');
        }
        
        // Guardar en localStorage
        localStorage.setItem('theme', theme);
        
        // Actualizar el indicador del botón
        updateIndicator(theme);
    };

    // Función para actualizar el indicador visual
    const updateIndicator = (theme) => {
        const indicator = document.querySelector('.theme-button-indicator');
        const buttons = document.querySelectorAll('.theme-button-tag');
        
        // Remover la clase active de todos los botones
        buttons.forEach(btn => btn.classList.remove('active'));
        
        // Agregar clase active al botón correspondiente
        if (theme === 'light') {
            buttons[0].classList.add('active');
        } else if (theme === 'gray') {
            buttons[1].classList.add('active');
        } else if (theme === 'dark') {
            buttons[2].classList.add('active');
        }
    };

    // Cargar el tema guardado al montar el componente
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') || 'light';
        applyTheme(savedTheme);
        
        // Agregar event listeners a los botones
        const lightButton = document.querySelector('.theme-button-light');
        const grayButton = document.querySelector('.theme-button-gray');
        const darkButton = document.querySelector('.theme-button-dark');
        
        if (lightButton) {
            lightButton.addEventListener('click', () => applyTheme('light'));
        }
        if (grayButton) {
            grayButton.addEventListener('click', () => applyTheme('gray'));
        }
        if (darkButton) {
            darkButton.addEventListener('click', () => applyTheme('dark'));
        }

        // Cleanup de event listeners
        return () => {
            if (lightButton) {
                lightButton.removeEventListener('click', () => applyTheme('light'));
            }
            if (grayButton) {
                grayButton.removeEventListener('click', () => applyTheme('gray'));
            }
            if (darkButton) {
                darkButton.removeEventListener('click', () => applyTheme('dark'));
            }
        };
    }, []);

    return (
        <header>
            <div className='header'>
                <div className='header-left'>
                    <a href='/' className='header-logo'>
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
                    <div className='theme-button'>
                        <span className='theme-button-tag theme-button-light' title='Tema claro'></span>
                        <span className='theme-button-tag theme-button-gray' title='Tema gris'></span>
                        <span className='theme-button-tag theme-button-dark' title='Tema oscuro'></span>
                        <span className='theme-button-indicator'></span>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
