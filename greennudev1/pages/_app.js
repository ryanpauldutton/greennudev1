import '@/styles/globals.css'
import NavBar from '@/components/NavBar'
import { AnimatePresence } from 'framer-motion';


export default function App({ Component, pageProps,router }) {

  return(
    <div className='py-4 px-6 flex-col font-Inter'>
    <NavBar />
    <AnimatePresence initial={false} >
   <Component key={router.pathname} {...pageProps} />
   </AnimatePresence>
  </div>
  );
}