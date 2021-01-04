import Header from './header/Header';
import Home from './home/Home';
import Habilities from "./habilities/Habilities";
import About from "./about/About";
import Portfolio from "./portfolio/Portfolio";
import Contact from "./contact/Contact";
import Footer from "./footer/Footer";

const AppContainer = ({ headerOpacity, headerPadding }) => (
    <div className='app'>
        <Header
            headerOpacity={headerOpacity}
            headerPadding={headerPadding}
        />

        <Home/>
        <About/>
        <Habilities/>
        <Portfolio/>
        <Contact/>
        <Footer/>
    </div>
)

export default AppContainer