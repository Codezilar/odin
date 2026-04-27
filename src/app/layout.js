import "./globals.css";
import { Space_Grotesk, Syne } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-body",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata = {
  title: "ODIN | Degen Space and Craft",
  description: "A premium web3 home for space, wins, and digital craftsmanship.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} ${syne.variable}`}>{children}</body>
    </html>
  );
}
