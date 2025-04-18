import React from "react";

const BookCard = ({ book }) => {
    if (!book?.volumeInfo) return null;

  const {
    title = "Untitled",
    authors = [],
    publisher = "Unknown",
    publishedDate = "N/A",
  } = book.volumeInfo;
    return (
  <article className="book-card">
    <h3>{title}</h3>
    <p><strong>Authors:</strong> {authors.join(',')}</p>
    <p><strong>Publisher:</strong> {publisher}</p>
    <p><strong>Published Date:</strong> {publishedDate}</p>
  </article>
);
}

export default BookCard;
