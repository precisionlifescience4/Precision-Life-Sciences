import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { supabase } from '@/lib/supabase';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Precision Life Sciences | Mugen-Plex Molecular Diagnostics',
  description: 'Precision Life Sciences develops molecular diagnostic products for laboratory use, featuring the Mugen-Plex real-time PCR assay portfolio: HBV, HCV, HIV, Influenza A&B, and CCHF.',
};

export default async function RootLayout({ children }) {
  const { data: settings } = await supabase.from('settings').select('*').eq('id', 1).single();

  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar settings={settings} />
        {children}
        <Footer />
      </body>
    </html>
  );
}