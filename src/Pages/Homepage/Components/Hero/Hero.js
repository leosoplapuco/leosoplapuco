import './Hero.css';

function Hero(){
    return(
        <section className='hero-container'>
            <div className='hero-content'>
                <span className='hero-content-span'>Desarrollador web</span>
                <h1 className='hero-h1'>leosoplapuco</h1>
                <p className='text-white text-center'>Impulsa tu negocio en internet con un sitio web a medida</p>

                <div className='d-flex-center-center gap-10 margin-top-20'>
                    <a href='/sobre-mi/' className='button-link button-link-3'>
                        <span class="material-symbols-outlined">person</span>
                        <p className='button-link-text'>Sobre mí</p>
                    </a>
                    <a href='mailto:leonardosoplapuco@gmail.com' className='button-link button-link-2'>
                        <span class="material-symbols-outlined">mail</span>
                        <p className='button-link-text'>Contactar</p>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Hero;
