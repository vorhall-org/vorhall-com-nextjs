import Link from 'next/link';

export default function Nav({ items }) {
  return (
    <nav>
      <ul>
        {items.map((item) => {
          return (
            <li key={item.link}>
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
