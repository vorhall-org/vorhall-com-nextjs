import Link from 'next/link';
import styles from './nav.module.scss';

export default function Nav({ items }) {
  return (
    <nav>
      <ul>
        {items.map((item) => {
          return (
            <li
              className={styles.item}
              key={item.link}
            >
              <Link href={item.link}>
                {item.text}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  )
};
