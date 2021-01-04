import React from "react";

import './ParallaxStars.css'

class ParallaxStars extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            stars1: this.randomStars(),
            stars2: this.randomStars(),
            stars3: this.randomStars()
        }
    }

    randomStars() {
        let boxShadowStarsString = ""

        for(let i = 0; i < 200; i++) {
            const x = Math.floor(Math.random() * window.screen.width)
            const y = Math.floor(Math.random() * 4000);

            boxShadowStarsString += `${x}px ${y}px #FFF,`
        }

        return boxShadowStarsString.slice(0, -1)
    }

    render () {
        return (
            <div className='parallax-stars'>
                <div className='background'>
                    <div className='stars1' style={{boxShadow: this.state.stars1}}/>
                    <div className='stars2' style={{boxShadow: this.state.stars2}}/>
                    <div className='stars3' style={{boxShadow: this.state.stars3}}/>
                </div>

                <div className='content'>{this.props.children}</div>
            </div>
        )
    }
}

export default ParallaxStars