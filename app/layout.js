import "./globals.css";

export const metadata = {
  title: "$SPSN (South Park Sucks Now) | Solana",
  description: "South Park Sucks Now",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">{children}</body>
    </html>
  );
}
