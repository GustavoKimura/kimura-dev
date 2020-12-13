import './Header.css'

const Header = () => (
    <div className='header'>
        <span style={{'color': 'white'}}>Uma imagem aqui.</span>

        <div className='headerActions'>
            <button>Home</button>
            <button>Sobre</button>
            <button>Serviços</button>
            <button>Portfólio</button>
            <button>Contato</button>
        </div>
    </div>
)

export default Header