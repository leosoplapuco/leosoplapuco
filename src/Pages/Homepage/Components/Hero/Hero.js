import './Hero.css';

function Hero(){
    return(
        <section className='hero-container'>
            <div className='hero-content'>
                <div>
                    <ul className='h-social-nets'>
                        <li>
                            <a href='/'>
                                <i class="fa-brands fa-instagram"></i>
                            </a>
                        </li>
                        <li>
                            <a href='/'>
                                <i class="fa-brands fa-telegram"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Hero;
