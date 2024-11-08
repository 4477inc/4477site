import type { Metadata } from 'next'
 
// These styles apply to every route in the application
import '../globals.css'
 
export const metadata: Metadata = {
  title: '4477',
}

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
