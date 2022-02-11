import Link from "next/link";
import Layout from "@/components/Layout";
import { API_URL } from "@/config/index";
import BookItems from "@/components/BookItems";

export default function Home(books) {
  return (
    <Layout>
      <h1>Latest Releases</h1>
      {books.length === 0 && <h3>No Result Available</h3>}

      {books.map((book) => (
        <BookItems key={book.id} book={book} />
      ))}

      {books.length > 0 && (
        <Link href="/books">
          <a className="btn-secondary">View All Books</a>
        </Link>
      )}
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/api/books`);
  const books = await res.json();
  console.log(books)
  return {
    props: { books: books.slice(0, 3) },
    revalidate: 1,
  };
}
