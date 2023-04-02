import Link from "next/link"
import styles from '../styles/About.module.css'


export default function About({
    aboutImage,
    text,
     }){
    return (
        <div className={styles.card}>
            
                <img className={styles.imageOne}  src={aboutImage.url} alt='herro'/>
            <h1>{text}</h1>
                </div>
    )
}