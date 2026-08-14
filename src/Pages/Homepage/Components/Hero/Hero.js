import './Hero.css';

function Hero(){
    return(
        <section className='hero-container'>
            <img src='/assets/images/img-1.jpg' alt=''/>

            <div className='hero-content'>
                <div className='hero-text-prom'>
                    <div className='d-flex-column gap-5'>
                        <span className='hero-text-span'>Desarrollador web</span>
                        <h1 className='hero-h1 margin-bottom-20'>Desarrollemos el sitio web que tu negocio necesita</h1>
                        <p className='text margin-bottom-20'>Sitios y aplicaciones web diseñados para destacar tu negocio, mejorar su presencia en Google y ofrecer una experiencia rápida y profesional.</p>

                        <div className='d-flex gap-10'>
                            <a href='/' title='' className='button-link button-link-1'>
                                <p className='button-link-text'>Ver servicios</p>
                            </a>

                            <a href='/' title='' className='button-link button-link-2'>
                                <p className='button-link-text'>Contactar</p>
                            </a>
                        </div>
                    </div>

                    <div className='hero-text-info'>
                        <p className='text'>- Proyectos personalizados</p>
                        <p className='text'>- Optimización SEO</p>
                        <p className='text'>- Alto rendimiento</p>
                        <p className='text'>- Mantenimiento y soporte</p>
                    </div>
                </div>

                <div>
                    <ul className='h-social-nets'>
                        <li>
                            <a href='https://www.instagram.com/leosoplapuco/' title='leosoplapuco ! Instagram'>
                                <i class="fa-brands fa-instagram"></i>
                            </a>
                        </li>
                        <li>
                            <a href='t.me/leosoplapuco' title='leosoplapuco | Telegram'>
                                <i class="fa-brands fa-telegram"></i>
                            </a>
                        </li>
                        <li>
                            <a href='mailto:contacto@leosoplapuco.com' title='leosoplapuco | Correo'>
                                <i class="fa-solid fa-envelope"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Hero;
