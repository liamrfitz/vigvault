import './globals.css';

export const metadata = {
  title: 'VigVault',
  description: 'Beat the books.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
