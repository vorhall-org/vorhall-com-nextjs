import styles from './page.module.css';
import { getDictionary } from '../../get-dictionary';
import LocaleSwitcher from './components/locale-switcher/locale-switcher';

export default async function Home({params: { locale }}) {
  const dictionary = (await getDictionary(locale)).Index

  return (
    <main className={styles.main}>
      <p>{dictionary.title}</p>
      <hr />
      <p>Current locale: {locale}</p>
      <hr />
      <LocaleSwitcher />
    </main>
  )
}
