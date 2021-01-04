import ParallaxStars from "../parallax-stars/ParallaxStars";

import './Home.css'

const Home = () => (
    <div className='home'>
        <ParallaxStars>
            <div className='homeContent'>
                <div className='homeTexts'>
                    <span className='homeBiggerText'>GUSTAVO KIMURA</span>
                    <br/>
                    <br/>
                    <span className='homeText'>FREELANCER</span>
                    <br/>
                    <span className='homeText'>DESENVOLVEDOR WEB E MOBILE</span>
                </div>
            </div>
        </ParallaxStars>
    </div>
)

export default Home