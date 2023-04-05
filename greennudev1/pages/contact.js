import { motion as m } from "framer-motion"
import Link from "next/link"
import {container, item } from '/animate.js'

export default function Contact(){

    return(
        <m.main 
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: 0.75, ease: 'easeOut'}}
        className="text-gray-900 absolute top-0 left-0 w-full h-full bg-red-400 lg:px-48 z-0">
        <div className="overflow-hidden my-96 p-1 text-black">
            <m.h1 animate={{ y: 0 }}
            initial={{y:'100%'}}
            transition={{delay: 0.5, duration: 0.5}}
            className="text-6xl text-left lg:text-9xl font-PT font-bold text-white">LET'S TALK</m.h1>
        </div>
        <div className="flex gap-40">
            <div className="lg:text-2xl text-base">
                <h4>Find Me</h4>
            </div>
            <div className="lg:text-6xl text-2xl underline">
                <m.ul variants={container}
                initial='hidden'
                animate='show' >
                    <div className="overflow-hidden"><Link className="pb-2" rel="stylesheet" href="/"><m.li variants={item}>Instagram</m.li></Link></div>
                    <div className="overflow-hidden"><Link className="pb-2" rel="stylesheet" href="/"><m.li variants={item}>LinkedIn</m.li></Link></div>
                    <div className="overflow-hidden"><Link className="pb-2" rel="stylesheet" href="/"><m.li variants={item}>Email</m.li></Link></div>
                </m.ul>
            </div>
        </div>
        </m.main>
    )   
}