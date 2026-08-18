import './Header.css';

function Header(){
    return(
        <header>
            <div className='header'>
                <a className='header-logo' href='/'>
                    <p className='header-logo-text'>leosoplapuco</p>
                </a>

                <ul className='header-center'>
                    <li>
                        <button type='button' className='hc-button hc-button-1'>
                            <h2>Servicios</h2>
                            <span class="material-symbols-outlined">keyboard_arrow_down</span>
                        </button>

                        <div className='header-center-sub-menu-container'>
                            <div className='header-center-sub-menu'>
                                <div className='header-center-sub-menu-tag header-center-sub-menu-tag-1'>
                                    <div className='d-flex-center-left margin-bottom-20 gap-5'>
                                        <span class="material-symbols-outlined">code</span>
                                        <p className='header-center-sub-menu-tag-title'>Web</p>
                                    </div>

                                    <ul>
                                        <li>
                                            <a href='/' className=''>
                                                <p>Diseño y desarrollo</p>
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

                    <button type='button' className='menu-button'>
                        <div className='menu-button-bars'></div>
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header;
