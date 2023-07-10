import '../styles/index.css';
import { Inter } from 'next/font/google';
import { i18n } from '../../i18n-config';
import Nav from '../components/nav/nav';
import navData from '../nav-data';

const inter = Inter({ subsets: ['latin'] })

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }))
}

export const metadata = {
  title: 'Vorhall',
  description: 'Our claim will go here',
  robots: 'noindex',
}

export default async function RootLayout({ children, params }) {
  const navItems = await navData(params.locale);

  return (
    <html lang={params.locale}>
      <body className={inter.className}>
        <Nav items={navItems} />
        {children}
      </body>
    </html>
  )
}
