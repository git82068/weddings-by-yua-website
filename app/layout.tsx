import type { Metadata } from "next";
import "./globals.css";
import { Inter, Playfair_Display, Cormorant_Garamond, Poppins } from "next/font/google";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const cormorant = Cormorant_Garamond({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Weddings by Yua | Premium Wedding Photography & Videography",
  description: "Capture your special day with elegance. Professional wedding photography and videography services that tell your unique love story.",
  keywords: "wedding photography, wedding videography, wedding photographer, wedding videographer, wedding films",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${cormorant.variable} ${poppins.variable}`}>
      <body className="font-sans">
        {children}
      </body>
    </html>
  );
}

