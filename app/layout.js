import { Inter, Readex_Pro } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Image from "next/image";

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
          <footer className="flex flex-col items-center gap-2 justify-center text-sm text-gray-500 mt-6 p-6">
            <p>
              {new Date().getFullYear()} Prepper Tjeklisten
            </p>

            <div className="flex justify-center gap-2">
              <a
                href="https://github.com/jimmypoulsen/prepper-next"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-500 hover:text-orange-700 transition-colors"
              >
                <Image
                  src="/github-mark.svg"
                  alt="GitHub"
                  width={24}
                  height={24}
                />
              </a>

              <a
                href="https://x.com/jimmypoulsen_"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-500 hover:text-orange-700 transition-colors"
              >
                <Image
                  src="/x-mark.svg"
                  alt="X"
                  width={24}
                  height={24}
                />
              </a>
            </div>
          </footer>
          <SpeedInsights />
        </main>
      </body>
    </html>
  );
}
