import './Portfolio.css'

const Portfolio = () => (
    <div className='portfolio'>
        <strong className='portfolioTitle'>Portfólio</strong>

        <div className='portfolioContent'>
            <div className='portfolioRadioSelector'>
                <input defaultChecked type="radio" value="all" name="portfolioViewType"/>
                <label className='portfolioText' htmlFor='all'>Todos</label>

                <input type="radio" value="apps" name="apps"/>
                <label className='portfolioText' htmlFor='all'>Aplicativos</label>

                <input type="radio" value="sites" name="sites"/>
                <label className='portfolioText' htmlFor='all'>Sites</label>
            </div>

            <div className='portfolioList'>
                <div className='portfolioPortfolioView'>
                    <span><a href='https://google.com.br'>Google</a></span>
                </div>

                <div className='portfolioPortfolioView'>
                    <span><a href='https://google.com.br'>Google</a></span>
                </div>

                <div className='portfolioPortfolioView'>
                    <span><a href='https://google.com.br'>Google</a></span>
                </div>

                <div className='portfolioPortfolioView'>
                    <span><a href='https://google.com.br'>Google</a></span>
                </div>

                <div className='portfolioPortfolioView'>
                    <span><a href='https://google.com.br'>Google</a></span>
                </div>

                <div className='portfolioPortfolioView'>
                    <span><a href='https://google.com.br'>Google</a></span>
                </div>
            </div>
        </div>
    </div>
)

export default Portfolio