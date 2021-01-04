import './Contact.css'

const Contact = () => (
    <div className='contact'>
        <strong className='contactTitle'>Contato</strong>

        <div className='contactContent'>
            <span className='contactBiggerText'>Quer falar comigo? Envie uma mensagem para um dos contatos abaixo</span>

            <div className='contactContentList'>
                <span className='contactText'>WhatsApp: (48) 9 9868-1410</span>
                <span className='contactText'>Instagram: @gustavo_kimura_</span>
                <span className='contactText'>Email: gustavokimuraf@gmail.com</span>
            </div>
        </div>
    </div>
)

export default Contact