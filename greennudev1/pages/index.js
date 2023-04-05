import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { GraphQLClient, gql } from 'graphql-request'
import About from './about'
import {motion as m} from 'framer-motion'

const graphcms = new GraphQLClient('https://api-eu-west-2.hygraph.com/v2/clfr4umtu0rz701uifg1v0rj2/master')

const QUERY = gql`
  {
    abouts {
      aboutMainText
      aboutImage{
        url
      }
    }
  }
`;

export async function getStaticProps(){
  const { abouts } = await graphcms.request(QUERY);
  return{
    props: {
      abouts,
    },
    revalidate:  10,
  };
}

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
      <m.div
      initial={{ y:'100%' }}
      animate={{ y: '0%' }}
      transition={{duration: 0.75, ease: 'easeOut'}}
      exit={{opacity: 1}}
      className='text-gray-900 absolute top-0 left-0 w-full h-full bg-blue-200 lg:px-48 z-0'
      >
      <Head>
        <title>Fentiman</title>
        <meta name="description" content="Fashion PR" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main >
      <div className='my-96 flex-col'>
      <h1 className='text-6xl text-center lg:text-7xl font-PT font-bold text-red-600'>LA FENTIMAN</h1>
      <h2 className='text-m text-center font-Inter'>FASHION PR</h2>
        <img className='bg-blue-50 absolute max-h-96 ' src='/imageOne.jpg' alt="herro" />
        </div>
        <div className='flex justify-between h-100 bg-slate-600 text-white text-2xl'>
      <div>
        <h2>FASHION PR</h2>
        <h2>2023</h2>
      </div>
      <div>
        <h3>Scottish designs to make you happy</h3>
        <h3>Finding your way into the press</h3>
        <h3>click for cool</h3>
      </div>
        </div>
        {/* {abouts.map((about) => (
          <About aboutImage={about.aboutImage} text={about.aboutMainText}/>
        ))} */}
      </main>
    </m.div>
  )
}
