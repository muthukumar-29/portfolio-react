import './Skills.css'
import C from '../assets/letter-c.png'
import java from '../assets/java.png'
import php from '../assets/php.png'
import html from '../assets/html.png'
import css from '../assets/css-3.png'
import js from '../assets/js.png'
import laravel from '../assets/laravel.png'
import react from '../assets/react.png'
import mysql from '../assets/mysql.png'

const Skills = () =>{
    return(
        <div id='skills' className="skills">
            <h1>Skills</h1>
            <div className="imgs">
                <img src={C} width={50} height={50}></img>
                <img src={java} width={50} height={50}></img>
                <img src={html} width={50} height={50}></img>
                <img src={css} width={50} height={50}></img>
                <img src={react} width={50} height={50}></img>
                <img src={js} width={50} height={50}></img>
                <img src={php} width={50} height={50}></img>
                <img src={laravel} width={50} height={50}></img>
                <img src={mysql} width={50} height={50}></img>
            </div>
        </div>
    )
}

export default Skills;