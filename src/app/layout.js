import localFont from 'next/font/local';
import Sidebar from './components/Sidebar'; // Import the Sidebar component
import './globals.css';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});

const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata = {
  title: 'Planet Nine App',
  description: 'Planet Nine',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="flex">
          {/* Conditionally render Sidebar based on authentication */}
          <Sidebar />

          <div className="flex-1 p-4">
            {/* Page Content */}
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
