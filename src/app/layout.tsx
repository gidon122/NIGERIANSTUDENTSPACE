// app/layout.tsx
import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="font-sans antialiased">
      <body>{children}</body>
    </html>
  );
}