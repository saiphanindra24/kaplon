export const fetchBooks = async () => {
    const response = await fetch("https://www.googleapis.com/books/v1/volumes?q=kaplan%20test%20prep");
    if (!response.ok) throw new Error("Failed to fetch books");
    return response.json();
  };