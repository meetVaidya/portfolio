// import { GeistSans } from 'geist/font/sans';
import Navbar from './components/Navbar';
import { GeistMono } from 'geist/font/mono';

import "./globals.css";


export const metadata = {
    title: "Meet Vaidya",
    description: "",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={GeistMono.className}><Navbar />{children}</body>
        </html>
    );
}
