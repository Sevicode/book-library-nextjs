import Layout from "@/components/Layout";
import { API_URL } from "@/config/index";
export default function BookPage({ book }) {
  return (
    <Layout>
      <h1>{book.name}</h1>
    </Layout>
  );
}

export async function getServerSideProps({ query: { slug } }) {
  const res = await fetch(`${API_URL}/api/events?slug=${slug}`);
  const books = await res.json();

  return {
    props: {
      book: books[0],
    },
  };
}
