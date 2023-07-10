import styles from './page.module.css';
import { getDictionary } from '../../get-dictionary';
import LocaleSwitcher from '../components/locale-switcher/locale-switcher';

export default async function Home({params: { locale }}) {
  const dictionary = await getDictionary(locale);

  return (
    <main className={styles.main}>
      <hr />
      <h1>Home page</h1>
      <p>Current locale: {locale}</p>
      <hr />
      <LocaleSwitcher />
    </main>
  )
}
