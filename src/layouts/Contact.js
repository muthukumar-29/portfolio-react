import './Contact.css'
import person from '../assets/man.png'
import gmail from '../assets/gmail.png'
import phone from '../assets/phone-call.png'
import instagram from '../assets/instagram.png'
import linkedin from '../assets/linkedin.png'
import github from '../assets/github.png'
import facebook from '../assets/facebook.png'

const Contact = () => {
    return (
        <div id="contact" className="contact">
            <h1>Contact</h1>
            <div className='footer'>
                <div className='info'>
                    <img src={person} width={30} height={30}></img><span>Muthukumar M</span>
                </div>
                <div className='info'>
                    <img src={gmail} width={30} height={30}></img><span>muthukumarm.2903@gmail.com</span>
                </div>
                <div className='info'>
                    <img src={phone} width={30} height={30}></img><span>6379443875</span>
                </div>
            </div>
            <br></br><br></br>
            <div className='media'>
                <a href='https://www.instagram.com/_.itzz_muthu._/' target='_blank'><img src={instagram} width={30} height={30}></img></a>
                <a href='https://www.linkedin.com/in/muthukumar29/' target='_blank'><img src={linkedin} width={30} height={30}></img></a>
                <a href='https://github.com/muthukumar-29' target='_blank'><img src={github} width={30} height={30}></img></a>
                <a href='https://www.facebook.com/profile.php?id=100034553657550' target='_blank'><img src={facebook} width={30} height={30}></img></a>
            </div>
            <br></br><br></br>
            <div className='copyright'>
                © 2024, Muthukumar M,<br></br> All Right Reserved
            </div>
        </div>
    )
}

export default Contact;