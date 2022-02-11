import Layout from "@/components/Layout";
import BookItems from "@/components/BookItems";
export default function BooksPage({ books }) {
  return (
    <Layout>
      <h1>All Books</h1>
      {books.length === 0 && <h3>No books to show</h3>}

      {books.map((book) => (
        <BookItems key={book.id} book={book} />
      ))}
    </Layout>
  );
}
