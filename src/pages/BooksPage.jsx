import React, { useEffect, useState } from "react";
import { fetchBooks } from "../api/booksApi";
import BookList from "../components/BookList";
import SearchBar from "../components/SearchBar";
import CreateBookButton from "../components/CreateBookButton";
import kaplanLogo from '../assets/KaplanLogo.gif';
import { FiBook, FiGrid, FiMenu } from "react-icons/fi";
import "../styles/books.css";

const BooksPage = () => {
    const [books, setBooks] = useState([]);
    const [filtered, setFiltered] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [sidebarOpen, setSidebarOpen] = useState(false);

    useEffect(() => {
        (async () => {
            try {
                const books = await fetchBooks();
                setBooks(books.items);
                setFiltered(books.items);
            } catch (e) {
                console.error(e);
            }
        })();
    }, []);

    useEffect(() => {
        if (searchTerm) {
            const filteredBooks = books.filter((book) =>
                book.volumeInfo.title.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setFiltered(filteredBooks);
        } else {
            setFiltered(books);
        }
    }, [searchTerm, books]);

    const handleSidebarToggle = () => {
        setSidebarOpen(prev => !prev);
    };

    return (
        <div className="books-app">
            <div className={`sidebar ${sidebarOpen ? "open" : "close"}`}>
            <div className="sidebar-icon-wrapper" onClick={handleSidebarToggle}>
                    <FiMenu className="sidebar-icon" />
                    <span className="sidebar-text">Menu</span>
                </div>
                <div className="sidebar-icon-wrapper" onClick={handleSidebarToggle}>
                    <FiGrid className="sidebar-icon" />
                    <span className="sidebar-text">Content Management</span>
                </div>
                <div className="sidebar-icon-wrapper" onClick={handleSidebarToggle}>
                    <FiBook className="sidebar-icon" />
                    <span className="sidebar-text">Courses</span>
                </div>
               
            </div>

            <section className="books-page">
                <header className="header">
                    <img src={kaplanLogo} className="logo" alt="Kaplan Logo" />
                </header>
                <main className="main-content">
                    <section className="heading-section">
                        <h1>Books</h1>
                        <CreateBookButton />
                    </section>
                    <SearchBar searchTerm={searchTerm} onSearch={setSearchTerm} />
                    <BookList books={filtered} />
                </main>
            </section>
        </div>
    );
};

export default BooksPage;
