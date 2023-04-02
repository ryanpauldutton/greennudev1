import { motion as m } from "framer-motion"
import Link from "next/link"

export default function Contact(){

    return(
        <>
        <div className="my-96 p-1 text-black">
            <h1>Let's Talk</h1>
        </div>
        <div className="flex gap-40">
            <div className="lg:text-2xl text-base">
                <h4>Find Me</h4>
            </div>
            <div className="lg:text-6xl text-2xl underline">
                <ul>
                    <li>Instagram</li>
                    <li>Linkedin</li>
                    <Link rel="stylesheet" href="/"><li>Email</li></Link>
                </ul>
            </div>
        </div>
        </>
    )   
}