import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { GraphQLClient, gql } from 'graphql-request'
import CaseStudy from '@/components/CaseStudy'
import About from './about'

const graphcms = new GraphQLClient('https://api-eu-west-2.hygraph.com/v2/clfr4umtu0rz701uifg1v0rj2/master')

const QUERY = gql`
  {
    abouts {
      aboutImage {
        url
      }
       aboutMainText
     }
      caseStudys {
         title,
       slug,
       coverPhoto{
          url
        }
       content{
         html
       }
     }
  }
`;

export async function getStaticProps(){
  const { caseStudys } = await graphcms.request(QUERY);
  return{
    props: {
      caseStudys,
    },
    revalidate:  10,
  };
}

const inter = Inter({ subsets: ['latin'] })

export default function Home({about}) {

  return (
    <>
      <Head>
        <title>Green Nude</title>
        <meta name="description" content="Fashion PR" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        {abouts.map((about) => (
          <CaseStudy image={aboutImage.url} />
        ))}

      </main>
    </>
  )
}
