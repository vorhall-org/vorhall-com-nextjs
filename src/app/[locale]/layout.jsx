import '../styles/index.css'
import { Inter } from 'next/font/google'
import {useLocale} from 'next-intl';
import {notFound} from 'next/navigation';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Vorhall',
  description: 'Our claim will go here',
  robots: 'noindex',
}

export default function RootLayout({ children, params }) {
  const locale = useLocale();
 
  // Show a 404 error if the user requests an unknown locale
  if (params.locale !== locale) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
