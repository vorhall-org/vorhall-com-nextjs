'use client'

import Link from 'next/link';
import styles from './nav.module.scss';
import { useState } from 'react';
import clsx from 'clsx';

export default function Nav({ items, strings }) {

  // ------------------
  // State
  // ------------------

  const [menuOpen, setMenuOpen] = useState(false);

  // ------------------
  // Event Handlers
  // ------------------

  function handleMenuClick() {
    setMenuOpen(!menuOpen);
  }

  // ------------------
  // Render
  // ------------------

  return (
    <nav className={styles.nav}>

      <button
        className={styles.menuButton}
        aria-expanded={menuOpen}
        aria-controls="menu-list"
        onClick={handleMenuClick}
      >

        <span className={styles.menuButtonHiddenText}>{strings.menuButton}</span>

        <span
          className={styles.menuButtonIcon}
          aria-hidden
          role="presentation"
        >X</span>

      </button>


      <ul
        className={
          clsx(
            styles.list,
            menuOpen ? styles.listVisible : ''
          )
        }
        id="menu-list"
        role="menu"
      >
        {items.map((item) => {
          return (
            <li
              className={styles.item}
              key={item.link}
              role="presentation"
            >
              <Link
                className={styles.link}
                href={item.link}
                role="menuitem"
              >
                {item.text}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  )
};
