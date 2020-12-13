import Header from './header/Header';
import Home from './home/Home';
import Services from "./services/Services";
import About from "./about/About";
import Portfolio from "./portfolio/Portfolio";

const AppContainer = () => (
    <div className='app'>
        <Header/>
        <Home/>
        <About/>
        <Services/>
        <Portfolio/>
    </div>
)

export default AppContainer