import "./globals.css";
import { Orbitron, Inter, JetBrains_Mono } from "next/font/google";

const orbitron = Orbitron({ subsets: ["latin"], weight: ["600", "800"], variable: "--font-display" });
const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-body" });
const mono = JetBrains_Mono({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-mono" });

export const metadata = {
  title: "Syndicate Edition — Tournament of Strategies",
  description: "Asteroid mining blind-bid tournament",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${orbitron.variable} ${inter.variable} ${mono.variable}`}>
      <body>
        <nav className="nav">
          <a href="/" className="brand">
            <span className="brand-icon">🚀</span> SYNDICATE
          </a>
          <div className="nav-links">
            <a href="/team">Build Fleet</a>
            <a href="/leaderboard">Leaderboard</a>
            <a href="/admin">Admin</a>
          </div>
        </nav>
        <main className="container">{children}</main>
      </body>
    </html>
  );
}