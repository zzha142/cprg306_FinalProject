import { Inter } from "next/font/google";
import "./globals.css";
import { AuthContextProvider } from "./login/_utils/auth-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Browsing Amazing Games",
  description: "Find the games to play",
};

// This is the layout for the entire app
// zz: add "h-screen" to the main element
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthContextProvider>
          <main className="h-screen">{children}</main>
        </AuthContextProvider>
      </body>
    </html>
  );
}
