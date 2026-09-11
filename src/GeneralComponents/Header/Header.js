import { useState, useEffect } from 'react';

import './Header.css';

function Header() {
    // Estados para los datos del JSON
    const [navbarData, setNavbarData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Estados para los menús
    const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Estado para el item activo del menú móvil (guarda el id del item con sub-menu)
    const [activeMenuItem, setActiveMenuItem] = useState(null);

    // Fetch de los datos
    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await fetch('./assets/json/Header.json');

                if (!response.ok) {
                    throw new Error('Error al cargar los datos');
                }

                const data = await response.json();
                setNavbarData(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    // Toggle del submenú de servicios (desktop)
    const toggleSubMenu = () => {
        setIsSubMenuOpen(!isSubMenuOpen);
    };

    // Toggle del menú móvil
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        // Al cerrar el menú, reseteamos el item activo
        if (isMenuOpen) {
            setActiveMenuItem(null);
        }
    };

    // Manejar click en un item del menú móvil (sin toggle)
    const handleMenuItemClick = (itemId) => {
        setActiveMenuItem(itemId);
    };

    // Obtener el submenú activo para renderizar sus opciones
    const getActiveSubMenu = () => {
        if (!activeMenuItem || !navbarData) return null;
        const menuData = navbarData.navbar[1].menu;
        const activeItem = menuData.find(item => item.id === activeMenuItem);
        return activeItem && activeItem['sub-menu'] ? activeItem['sub-menu'] : null;
    };

    // Si está cargando o hay error, mostramos un header básico
    if (loading) {
        return (
            <header>
                <div className='header'>
                    <a className='header-logo' href='/'>
                        <p className='header-logo-text'>leosoplapuco</p>
                    </a>
                    <p>Cargando...</p>
                </div>
            </header>
        );
    }

    if (error) {
        return (
            <header>
                <div className='header'>
                    <a className='header-logo' href='/'>
                        <p className='header-logo-text'>leosoplapuco</p>
                    </a>
                    <p>Error: {error}</p>
                </div>
            </header>
        );
    }

    // Extraemos los datos
    const centerData = navbarData.navbar[0].center;
    const navData = navbarData.navbar[0].nav;
    const menuData = navbarData.navbar[1].menu;

    // Separamos los items del centro
    const serviciosItem = centerData.find(item => item.lista);
    const portafolioItem = centerData.find(item => !item.lista);

    // Submenú activo actual
    const activeSubMenu = getActiveSubMenu();

    return (
        <header>
            <div className='header'>
                <a className='header-logo' href='/'>
                    <p className='header-logo-text'>leosoplapuco</p>
                </a>

                <ul className='header-center'>
                    {serviciosItem && (
                        <li>
                            <button
                                type='button'
                                className='hc-button hc-button-1'
                                onClick={toggleSubMenu}
                            >
                                <h2>{serviciosItem.item}</h2>
                                <span className="material-symbols-outlined">keyboard_arrow_down</span>
                            </button>

                            <div className={`header-center-sub-menu-container ${isSubMenuOpen ? 'active' : ''}`}>
                                <div className='header-center-sub-menu'>
                                    {serviciosItem.lista.map((subItem) => (
                                        <div
                                            key={subItem.id}
                                            className={`header-center-sub-menu-tag header-center-sub-menu-tag-${subItem.id}`}
                                        >
                                            <div className='d-flex-center-left margin-bottom-20 gap-5'>
                                                <span className="material-symbols-outlined">
                                                    {subItem.titulo === 'Web' ? 'code' : 'cloud'}
                                                </span>
                                                <p className='header-center-sub-menu-tag-title'>{subItem.titulo}</p>
                                            </div>

                                            <ul>
                                                {subItem.lista.map((link, index) => (
                                                    <li key={index}>
                                                        <a href={link.link} className=''>
                                                            <p>{link.item}</p>
                                                        </a>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </li>
                    )}

                    {portafolioItem && (
                        <li>
                            <a href={portafolioItem.link} className='menu-link menu-link-6'>
                                <h2>{portafolioItem.item}</h2>
                            </a>
                        </li>
                    )}
                </ul>

                <div className='header-right'>
                    <nav className='menu-container'>
                        <ul className='menu'>
                            {navData.map((item) => (
                                <li key={item.id}>
                                    <a href={item['item-link']} className={`menu-link menu-link-${item.id}`}>
                                        <h2>{item.item}</h2>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <button
                        type='button'
                        className={`menu-button ${isMenuOpen ? 'active' : ''}`}
                        onClick={toggleMenu}
                    >
                        <div className='menu-button-bars'></div>
                    </button>
                </div>

                <div className={`header-menu-content-container ${isMenuOpen ? 'active' : ''}`}>
                    <div className='header-menu-content'>
                        {/* Columna izquierda: items principales */}
                        <ul className='d-flex-column'>
                            {menuData.map((item) => (
                                <li key={item.id}>
                                    {item['sub-menu'] ? (
                                        <button
                                            type='button'
                                            className={`${activeMenuItem === item.id ? 'active' : ''}`}
                                            onClick={() => handleMenuItemClick(item.id)}
                                        >
                                            <p>{item.item}</p>
                                            <span className="material-symbols-outlined">chevron_right</span>
                                        </button>
                                    ) : (
                                        <a href={item.link} className=''>
                                            <p>{item.item}</p>
                                        </a>
                                    )}
                                </li>
                            ))}

                            <button type='button' className='theme-button'>
                                <p>Tema oscuro</p>
                            </button>
                        </ul>

                        {/* Columna derecha: submenú del item activo */}
                        <div className='header-menu-content-list'>
                            {activeSubMenu ? (
                                <ul>
                                    {activeSubMenu.map((subItem) => (
                                        <li key={subItem.id}>
                                            <a href={subItem.link} title=''>
                                                <div className='d-flex-center-left gap-5'>
                                                    <span className="material-symbols-outlined">
                                                        {subItem.item.toLowerCase().includes('hosting') ? 'cloud' :
                                                         subItem.item.toLowerCase().includes('dominio') ? 'language' :
                                                         subItem.item.toLowerCase().includes('ssl') ? 'lock' :
                                                         subItem.item.toLowerCase().includes('vps') ? 'dns' :
                                                         subItem.item.toLowerCase().includes('seo') ? 'leaderboard' :
                                                         subItem.item.toLowerCase().includes('asesor') ? 'videocam' :
                                                         subItem.item.toLowerCase().includes('google') ? 'public' :
                                                         'code'}
                                                    </span>
                                                    <p>{subItem.item}</p>
                                                </div>

                                                <p>{subItem.resume}</p>
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <p className='header-menu-content-list-empty'>
                                    Selecciona una opción para ver más
                                </p>
                            )}
                        </div>

                        <div className='header-menu-content-images'>
                            <img
                                src='https://img.magnific.com/free-photo/rear-view-programmer-working-all-night-long_1098-18697.jpg?semt=ais_hybrid&w=740&q=80'
                                alt=''
                            />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
