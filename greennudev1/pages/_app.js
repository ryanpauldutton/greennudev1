import '@/styles/globals.css'
import NavBar from '@/components/NavBar'


export default function App({ Component, pageProps }) {

  return(
    <div className='py-4 px-6 font-interLight'>
    <NavBar />
   <Component {...pageProps} />
  </div>
  );
}