import './Home.css';
import photo from '../assets/1708337133689.jpg'
import rocket from '../assets/rocket.png'
import setting from '../assets/setting.png'
import gmail from '../assets/gmail.png'
import instagram from '../assets/instagram.png'
import linkedin from '../assets/linkedin.png'
import github from '../assets/github.png'


const Home = () => {
    return (
        <div id='home' className="home">
            <div className='v_name'>
                <h1>I'm <br></br> Muthukumar</h1><br></br>
                <p>Aspiring Web Developer <img src={rocket} width={30} height={30}></img> <img src={setting} width={30} height={30}></img></p>
                <div className='social'>
                    <a href='mailto:muthukumarm.2903@gmail.com' target='_blank'><img src={gmail} width={30} height={30}></img></a>
                    <a href='https://www.instagram.com/_.itzz_muthu._/' target='_blank'><img src={instagram} width={30} height={30}></img></a>
                    <a href='https://www.linkedin.com/in/muthukumar29/' target='_blank'><img src={linkedin} width={30} height={30}></img></a>
                    <a href='https://github.com/muthukumar-29' target='_blank'><img src={github} width={30} height={30}></img></a>
                </div>
            </div>
            <div className='photo'>
                <img src={photo} width={400} height={500}></img>
            </div>
        </div>
    )
}

export default Home;