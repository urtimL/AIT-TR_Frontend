export interface CounterState {
    value: number;
}

export interface SandwicState {
    ingredients: string;
}

interface Book {
    isbn: string;
    title: string;
    year: number;
    author: string;
}

export interface BooksState {
    books: Book[];
}
