import './About.css'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import React from "react";

const About = () => (
    <div className='about'>
        <div className='aboutTitleSquare'>
            <strong className='aboutTitle'>Sobre</strong>
        </div>

        <div className='aboutContent'>
            <div className='aboutSubContent'>
                <div className='aboutImage'/>

                <div className='aboutHeartbeats'>
                    <span className='aboutHeartbeatsText'>❤</span>

                    <Carousel className='aboutHeartbeatsCarousel' infiniteLoop autoPlay swipeable={true} showArrows={false} showStatus={false} showThumbs={false} showIndicators={false}>
                        <div>
                            <img className='aboutHeartbeat' src="http://www.attekita.com/wp-content/uploads/2019/08/icon-unity.png"/>
                            <span className='aboutHeartbeatName'>Unity Engine</span>
                        </div>

                        <div>
                            <img className='aboutHeartbeat' src="http://www.attekita.com/wp-content/uploads/2019/08/icon-php.png"/>
                            <span className='aboutHeartbeatName'>PHP</span>
                        </div>

                        <div>
                            <img className='aboutHeartbeat' src="http://www.attekita.com/wp-content/uploads/2019/08/icon-javascript.png"/>
                            <span className='aboutHeartbeatName'>Javascript</span>
                        </div>
                    </Carousel>
                </div>
            </div>

            <div className='aboutTextsContent'>
                <span className='aboutMyNameText'>Olá! Me chamo Gustavo Kimura.</span>

                <span className='aboutText'>
                    Sou programador, analista e desenvolvedor de sistemas, sites e aplicativos móveis há mais de 3 anos, atuando diretamente no mercado.
                    <br/><br/>
                    Tive a gloriosa chance de trabalhar em equipes de desenvolvimento com excelentes profissionais, em empresas muito bem instaladas na região de Santa Catarina.
                    <br/><br/>
                    Formado em Análise e Desenvolvimento de Sistemas pelo Instituto Federal de Santa Catarina, obtive diversos conhecimentos acerca da área de programação, o que me concedeu a oportunidade de participar de um projeto de intercâmbio na Universidade de Deusto (Espanha).
                    <br/><br/>
                    Sou uma pessoa flexível e adaptativa, gosto de questionar, raciocinar e procurar caminhos lógicos para resolver problemas. Me divirto aprendendo novas tecnologias e, com isso, sempre estou atualizado no mundo de desenvolvimento de sistemas.
                    <br/><br/>
                    Na criação de sistemas, sites e aplicativos móveis, busco sempre manter um padrão que vise a facilidade de manutenção e adição de novas funcionalidades ao produto criado, utilizando técnicas que foram e que continuam sendo aprendidas ao longo de minha jornada na carreira.
                </span>
            </div>
        </div>
    </div>
)

export default About