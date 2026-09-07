import { useState } from 'react';

import './Header.css';

function Header(){
    const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
    const toggleSubMenu = () => {
        setIsSubMenuOpen(!isSubMenuOpen);
    };

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return(
        <header>
            <div className='header'>
                <a className='header-logo' href='/'>
                    <p className='header-logo-text'>leosoplapuco</p>
                </a>

                <ul className='header-center'>
                    <li>
                        <button type='button' className='hc-button hc-button-1' onClick={toggleSubMenu}>
                            <h2>Servicios</h2>
                            <span class="material-symbols-outlined">keyboard_arrow_down</span>
                        </button>

                        <div className={`header-center-sub-menu-container ${isSubMenuOpen ? 'active' : ''}`}>
                            <div className='header-center-sub-menu'>
                                <div className='header-center-sub-menu-tag header-center-sub-menu-tag-1'>
                                    <div className='d-flex-center-left margin-bottom-20 gap-5'>
                                        <span class="material-symbols-outlined">code</span>
                                        <p className='header-center-sub-menu-tag-title'>Web</p>
                                    </div>

                                    <ul>
                                        <li>
                                            <a href='/' className=''>
                                                <p>Diseño y desarrollo web</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href='/' className=''>
                                                <p>SEO</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href='/' className=''>
                                                <p>Tu negocio en Google</p>
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                                <div className='header-center-sub-menu-tag header-center-sub-menu-tag-2'>
                                    <div className='d-flex-center-left margin-bottom-20 gap-5'>
                                        <span class="material-symbols-outlined">cloud</span>
                                        <p className='header-center-sub-menu-tag-title'>Cloud</p>
                                    </div>

                                    <ul>
                                        <li>
                                            <a href='/' className=''>
                                                <p>Hosting y dominio</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href='/' className=''>
                                                <p>VPS</p>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <a href='/' className='menu-link menu-link-6'>
                            <h2>Portafolio</h2>
                        </a>
                    </li>
                </ul>

                <div className='header-right'>
                    <nav className='menu-container'>
                        <ul className='menu'>
                            <li>
                                <a href='/' className='menu-link menu-link-1'>
                                    <h2>Inicio</h2>
                                </a>
                            </li>
                            <li>
                                <a href='/' className='menu-link menu-link-2'>
                                    <h2>Sobre mi</h2>
                                </a>
                            </li>
                            <li>
                                <a href='/' className='menu-link menu-link-3'>
                                    <h2>Clientes</h2>
                                </a>
                            </li>
                            <li>
                                <a href='/' className='menu-link menu-link-4'>
                                    <h2>Soporte técnico</h2>
                                </a>
                            </li>
                            <li>
                                <a href='/' className='menu-link menu-link-5'>
                                    <h2>Contacto</h2>
                                </a>
                            </li>
                        </ul>
                    </nav>

                    <button type='button' className={`menu-button ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
                        <div className='menu-button-bars'></div>
                    </button>
                </div>

                <div className={`header-menu-content-container ${isMenuOpen ? 'active' : ''}`}>
                    {/* <div className=''>leosoplapuco</div> */}

                    <div className='header-menu-content'>
                        <ul className='d-flex-column'>
                            <li>
                                <a href='/' className=''>
                                    <p>Inicio</p>
                                </a>
                            </li>
                            <li>
                                <button type='button' className=''>
                                    <p>Servicios</p>
                                    <span class="material-symbols-outlined">chevron_right</span>
                                </button>
                            </li>
                            <li>
                                <button type='button' className=''>
                                    <p>Soluciones web</p>
                                    <span class="material-symbols-outlined">chevron_right</span>
                                </button>
                            </li>
                            <li>
                                <button type='button' className=''>
                                    <p>Portafolio</p>
                                    <span class="material-symbols-outlined">chevron_right</span>
                                </button>
                            </li>
                            <li>
                                <button type='button' className=''>
                                    <p>Sobre mi</p>
                                    <span class="material-symbols-outlined">chevron_right</span>
                                </button>
                            </li>
                            <li>
                                <button type='button' className=''>
                                    <p>Contacto</p>
                                    <span class="material-symbols-outlined">chevron_right</span>
                                </button>
                            </li>

                            <button type='button' className='theme-button'>
                                <p>Tema oscuro</p>
                            </button>
                        </ul>

                        <div className='header-menu-content-list'>
                            {/* <ul>
                                <li>
                                    <a href='/' title=''>
                                        <div className='d-flex-center-left gap-5'>
                                            <span class="material-symbols-outlined">code</span>
                                            <p>Desarrollo web</p>
                                        </div>

                                        <p>Haz crecer tu negocio dandole un sitio en internet</p>
                                    </a>

                                    <a href='/' title=''>
                                        <div className='d-flex-center-left gap-5'>
                                            <span class="material-symbols-outlined">leaderboard</span>
                                            <p>SEO</p>
                                        </div>

                                        <p>Haz crecer tu negocio dandole un sitio en internet</p>
                                    </a>
                                </li>

                                <li>
                                    <a href='/' title=''>
                                        <div className='d-flex-center-left gap-5'>
                                            <span class="material-symbols-outlined">videocam</span>
                                            <p>Asesoría</p>
                                        </div>

                                        <p>Haz crecer tu negocio dandole un sitio en internet</p>
                                    </a>

                                    <a href='/' title=''>
                                        <div className='d-flex-center-left gap-5'>
                                            <i class="fa-brands fa-google"></i>
                                            <p>Tu negocio en Google</p>
                                        </div>

                                        <p>Haz crecer tu negocio dandole un sitio en internet</p>
                                    </a>
                                </li>
                            </ul> */}

                            <ul>
                                <li>
                                    <a href='/' title=''>
                                        <div className='d-flex-center-left gap-5'>
                                            <span class="material-symbols-outlined">cloud</span>
                                            <p>Hosting web</p>
                                        </div>

                                        <p>Haz crecer tu negocio dandole un sitio en internet</p>
                                    </a>
                                    <a href='/' title=''>
                                        <div className='d-flex-center-left gap-5'>
                                            <span class="material-symbols-outlined">language</span>
                                            <p>Dominio</p>
                                        </div>

                                        <p>Haz crecer tu negocio dandole un sitio en internet</p>
                                    </a>
                                    <a href='/' title=''>
                                        <div className='d-flex-center-left gap-5'>
                                            <span class="material-symbols-outlined">lock</span>
                                            <p>Certificación SSL</p>
                                        </div>

                                        <p>Haz crecer tu negocio dandole un sitio en internet</p>
                                    </a>
                                </li>

                                <li>
                                    <a href='/' title=''>
                                        <div className='d-flex-center-left gap-5'>
                                            <span class="material-symbols-outlined">dns</span>
                                            <p>Servidor VPS</p>
                                        </div>

                                        <p>Haz crecer tu negocio dandole un sitio en internet</p>
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className='header-menu-content-images'>
                            <img src='https://img.magnific.com/free-photo/rear-view-programmer-working-all-night-long_1098-18697.jpg?semt=ais_hybrid&w=740&q=80' alt=''/>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;
