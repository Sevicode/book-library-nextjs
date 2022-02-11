import Layout from "@/components/Layout";
import EventItem from "@/components/EventItem";
import { API_URL } from "@/config/index";
export default function BooksPage({ books }) {
  return (
    <Layout>
      <h1>Events</h1>
      {books.length === 0 && <h3>No books to show</h3>}

      {books.map((book) => (
        <EventItem key={book.id} book={book} />
      ))}
    </Layout>
  );
}
