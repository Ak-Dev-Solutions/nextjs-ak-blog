import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "next-themes"; // ✅ Import this

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ak Blog",
  description: "Learn more about Ak Blog and our mission.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
        <body className={inter.className}>
          <Navbar />
          {children}
        </body>
      </ThemeProvider>
    </html>
  );
}
