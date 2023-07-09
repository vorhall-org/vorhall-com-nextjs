import styles from './page.module.css'
import {useTranslations} from 'next-intl';
import Link from 'next/link';

export default function Home() {
  const t = useTranslations('Index');

  return (
    <main className={styles.main}>
      <p>{t('title')}</p>
      <ul>
        <li>
          <Link href="/de">Deutsch</Link>
        </li>
        <li>
          <Link href="/en">English</Link>
        </li>
      </ul>
    </main>
  )
}
