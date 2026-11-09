import './Services.css';

function Services(){
    return(
        <section className='block-container'>
            <div className='block-content'>
                <div className='block-title-container'>
                    <h3 className='block-title'>Servicios</h3>
                </div>

                <ul className='hp-ser-container'>
                    <li>
                        <a href='/' title=''>
                            <div>
                                <p className='hp-ser-title'>Diseño</p>
                            </div>
                            <div>
                                <p className='text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body</p>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Services;
