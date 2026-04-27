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
  title: "ODIN | Signals, Solana, Teams, Momentum",
  description: "The home of Odin: degen trading, Solana-native projects, web3 team building, signals, trends, and execution.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} ${syne.variable}`}>{children}</body>
    </html>
  );
}
