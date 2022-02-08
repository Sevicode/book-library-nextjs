import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout'



export default function Home() {
  return (
    <Layout>
      <h1>Latest Releases</h1>
  
     
    </Layout>
  )
}

export async function getStaticProps() {
  const res = await fetch(`${API_URL/api/books}`)
  const books = await res.json()
  return {
    props: {books: books.slice(0, 7)},
    revalidate: 1,
  }
   

  
}