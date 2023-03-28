import Link from "next/link"
import styles from '../styles/CaseStudy.module.css';

export default function CaseStudy({
    title,
    slug,
    datePublished,
    coverPhoto,
    id }){
    return (
        <div className="{styles.card}">
            <Link href={`/posts/${slug}`}>
            <div className="{styles.imgContainer}"> 
                <img src={coverPhoto.url} alt='herro'/>
            </div>
            </Link>
            <div className={styles.text}>
                <h2>{title}</h2>
                <div className={styles.details}>
                    <div className={styles.author}>
                           
                    </div>
                </div>

            </div>
        </div>
    )
}