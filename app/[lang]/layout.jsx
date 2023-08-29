import './layout.scss';
import { Inter } from 'next/font/google';
import { i18n } from '../../i18n-config';
import Nav from '../components/nav/nav';
import navData from '../nav-data';
import LocaleSwitcher from '../components/locale-switcher/locale-switcher';
import { getDictionary } from '../../get-dictionary';

const inter = Inter({ subsets: ['latin'] })

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }))
}

export const metadata = {
  title: 'Vorhall',
  description: 'Our claim will go here',

  // TODO: remove on launch ;)
  robots: 'noindex',
}

export default async function RootLayout({ children, params }) {
  const navItems = await navData(params.lang);
  const dictionary = await getDictionary(params.lang);

  return (
    <html lang={params.lang}>
      <body className={inter.className}>
        <Nav
          strings={dictionary.navigation}
          items={navItems} />
        {children}
        <hr />
        <p>Current locale: {params.lang}</p>
        <hr />
        <LocaleSwitcher />
      </body>
    </html>
  )
}
