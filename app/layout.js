import "./globals.css";

export const metadata = {
  title: "IEEE Basic Next Challenge",
  description: "Aplicación básica en Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
