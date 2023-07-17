import styles from './page.module.css';
import LocaleSwitcher from '../components/locale-switcher/locale-switcher';

export default async function Home({params: { lang }}) {
  return (
    <main className={styles.main}>
      <hr />
      <h1>Home page</h1>
      <p>Current locale: {lang}</p>
      <hr />
      <LocaleSwitcher />
    </main>
  )
}
