import React from "react";
import './Header.css'

import { Link } from 'react-scroll'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebookF, faLinkedinIn, faYoutube } from "@fortawesome/free-brands-svg-icons";

import logo from '../../img/logo/logo-transparent.png';

class Header extends React.Component {
    constructor(props) {
        super(props);

        this.headerHeight = React.createRef();
        this.navigationDuration = 1000 /* milliseconds */;

        this.state = {
            headerHeight: 0
        }
    }

    componentDidMount() {
        this.setState({
            headerHeight: this.headerHeight.current.clientHeight
        })
    }

    render() {
        return (
            <div className='header' style={{
                backgroundColor: `rgba(0, 0, 0, ${this.props.headerOpacity})`,
                padding: `${this.props.headerPadding}px`
            }} ref={this.headerHeight}>
                <Link
                    activeClass="active"
                    to="home"
                    smooth={true}
                    duration={this.navigationDuration}>

                    <img className='headerLogo' src={logo} alt='Kimura Dev - Header Logo'/>
                </Link>

                <div className='headerActions'>
                    <div className='headerSiteActions'>
                        <Link
                            activeClass="active"
                            to="home"
                            smooth={true}
                            duration={this.navigationDuration}>

                            <button>Home</button>
                        </Link>

                        <Link
                            activeClass="active"
                            to="about"
                            smooth={true}
                            duration={this.navigationDuration}
                            offset={-this.state.headerHeight}>

                            <button>Sobre</button>
                        </Link>

                        <Link
                            activeClass="active"
                            to="habilities"
                            smooth={true}
                            duration={this.navigationDuration}
                            offset={-this.state.headerHeight}>

                            <button>Habilidades</button>
                        </Link>

                        <Link
                            activeClass="active"
                            to="portfolio"
                            smooth={true}
                            duration={this.navigationDuration}
                            offset={-this.state.headerHeight}>

                            <button>Portfólio</button>
                        </Link>

                        <Link
                            activeClass="active"
                            to="contact"
                            smooth={true}
                            duration={this.navigationDuration}
                            offset={-this.state.headerHeight}>

                            <button>Contato</button>
                        </Link>
                    </div>

                    <div className='headerSocialMediaActions'>
                        <button>
                            <a href='https://www.instagram.com/gustavo_kimura_/' target="_blank" rel='noreferrer'>
                                <FontAwesomeIcon icon={faInstagram}/>
                            </a>
                        </button>

                        <button>
                            <a href='https://www.facebook.com/gustavo.kimura.146' target="_blank" rel='noreferrer'>
                                <FontAwesomeIcon icon={faFacebookF}/>
                            </a>
                        </button>

                        <button>
                            <a href='https://www.linkedin.com/in/gustavo-kimura-florentino/' target="_blank"
                               rel='noreferrer'>
                                <FontAwesomeIcon icon={faLinkedinIn}/>
                            </a>
                        </button>

                        <button>
                            <a href='https://www.youtube.com/channel/UCTm1VF82ZpX6HzX35z7e_9A' target="_blank"
                               rel='noreferrer'>
                                <FontAwesomeIcon icon={faYoutube}/>
                            </a>
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header