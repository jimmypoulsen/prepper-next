import { Inter, Readex_Pro } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const readex_pro = Readex_Pro({
  subsets: ["latin"],
  variable: "--font-readex-pro",
  display: "swap",
});

export const metadata = {
  title: "Prepper Tjeklisten",
  description: "Forbered dig til en krise med Prepper Tjeklisten.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${readex_pro.variable}`}>
      <body>
        <main id="app">
          {children}
        </main>
      </body>
    </html>
  );
}
