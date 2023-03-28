import Link from "next/link"
import styles from '../styles/About.module.css';

export default function About({
    aboutMainText,
    aboutImage,
    slug
     }){
    return (
        <div className="{styles.card}">
            <Link href={`/about/${slug}`}>
            <div className="{styles.imgContainer}"> 
                <img src={aboutImage.url} alt='herro'/>
            </div>
            </Link>
            <div className={styles.text}>
                <h2>{aboutMainText}</h2>        
                    
                </div>

            
        </div>
    )
}