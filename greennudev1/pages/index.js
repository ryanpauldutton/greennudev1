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
    <>
      <Head>
        <title>Fentiman</title>
        <meta name="description" content="Fashion PR" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main >
      <div className='my-96 flex-col'>
      <h1 className='text-6xl text-center lg:text-right lg:text-9xl'>LA FENTIMAN</h1>
      <h2 className='text-2xl text-center lg:text-left lg:text-7xl'>FASHION PR</h2>
        <img className='bg-blue-50 absolute max-h-96 ' src='/imageOne.jpg' alt="herro" />
        </div>
        <div className='flex justify-between h-100 bg-slate-600 text-white text-2xl'>
      <div>
        <h2>herro</h2>
        <h2>There</h2>
        <h2>Friend</h2>
      </div>
      <div>
        <h3>Other Thoughts</h3>
      </div>
        </div>
        {/* {abouts.map((about) => (
          <About aboutImage={about.aboutImage} text={about.aboutMainText}/>
        ))} */}
      </main>
    </>
  )
}
