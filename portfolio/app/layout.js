import "./globals.css";

export const metadata = {
  title: "Portfolio",
  description: "Portfolio Pessoal",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
