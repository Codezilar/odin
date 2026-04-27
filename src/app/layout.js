import "./globals.css";

export const metadata = {
  title: "ODIN | Signals, Solana, Teams, Momentum",
  description: "The home of Odin: degen trading, Solana-native projects, web3 team building, signals, trends, and execution.",
  icons: {
    icon: "/image.jpg",
    shortcut: "/image.jpg",
    apple: "/image.jpg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
