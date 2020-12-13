import Header from './header/Header';
import Home from './home/Home';
import Services from "./services/Services";
import About from "./about/About";
import Portfolio from "./portfolio/Portfolio";
import Contact from "./contact/Contact";
import Footer from "./footer/Footer";

const AppContainer = () => (
    <div className='app'>
        <Header/>
        <Home/>
        <About/>
        <Services/>
        <Portfolio/>
        <Contact/>
        <Footer/>
    </div>
)

export default AppContainer