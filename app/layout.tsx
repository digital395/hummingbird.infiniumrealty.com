import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Premium 3 BHK Apartments Off Avinashi Road, Coimbatore | Infinium Realty",
  description: "Discover premium 3 BHK apartments off Avinashi Road, Coimbatore, near Reeds World School. Starting at ₹1.10 Cr*. Enquire now!",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`h-full antialiased`}>
      <head>
        <script async src="https://www.googletagmanager.com/gtm.js?id=GTM-K7D3GJ6W"/>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date()); 
            `,
          }}/>
      </head>
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
