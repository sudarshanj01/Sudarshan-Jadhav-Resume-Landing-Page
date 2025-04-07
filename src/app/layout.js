import { 
  Geist, 
  Geist_Mono,
  Inter,
  Playfair_Display,
  Montserrat,
  Raleway
} from "next/font/google";
import "./globals.css";

// Primary sans-serif font
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// Monospace font for code snippets or technical sections
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Clean, modern sans-serif that's highly readable
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

// Elegant serif font for headings or featured text
const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

// Versatile sans-serif with many weight options
const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

// Modern, elegant sans-serif with distinctive character
const raleway = Raleway({
  variable: "--font-raleway", 
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Portfolio Sudarshan Jadhav",
  description: "Software Engineer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`
          ${geistSans.variable} 
          ${geistMono.variable} 
          ${inter.variable} 
          ${playfair.variable}
          ${montserrat.variable}
          ${raleway.variable}
          font-sans antialiased
        `}
      >
        {children}
      </body>
    </html>
  );
}