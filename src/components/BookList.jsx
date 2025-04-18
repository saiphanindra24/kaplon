import BookCard from "./BookCard";

const BookList = ({ books }) => (
    <>
        <h2 className="book-list-heading">All Books</h2>
        <section className="book-grid">
            {books.map((book) => (
                <BookCard key={book.id} book={book} />
            ))}
        </section>
    </>
);

export default BookList;