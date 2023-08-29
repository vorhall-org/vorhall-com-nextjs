'use client'

import Link from 'next/link';
import styles from './nav.module.scss';
import { useState } from 'react';
import clsx from 'clsx';
import NavButton from '../nav-button/nav-button';

export default function Nav({ items, strings }) {

  // ------------------
  // Render
  // ------------------

  return (
    <nav className={styles.nav}>
      <NavButton strings={strings} />
      <ul
        className={
          clsx(
            styles.list,
            true ? styles.listVisible : ''
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
