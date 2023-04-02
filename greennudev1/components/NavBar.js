import Link from "next/link"

export default function NavBar(){
    return(
        <>      
         <nav className="text-2xl font-medium">
            <ul className="flex gap-12">
<Link rel="stylesheet" href="/" >
    <li>Home</li>
    </Link>
    <Link rel="stylesheet" href="/about" >
    <li>About</li>
    </Link>
    <Link rel="stylesheet" href="/contact" >
    <li>Contact</li>
    </Link>
            </ul>

        </nav>
        </> 
    )
}