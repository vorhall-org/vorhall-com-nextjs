'use client'

import Link from 'next/link';
import styles from './nav.module.scss';
import { useState } from 'react';
import clsx from 'clsx';
import Image from 'next/image';
import openIcon from '../../../public/icons/menu.svg';
import closeIcon from '../../../public/icons/close.svg';

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
  const menuListId = 'menu-list';

  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>LOGO</div>

      <button
        className={
          clsx(
            styles.menuButton,
            menuOpen ? styles.menuButtonOpen : styles.menuButtonClosed
          )
        }
        aria-expanded={menuOpen}
        aria-controls={menuListId}
        onClick={handleMenuClick}
      >

        <span className={styles.menuButtonHiddenText}>
          {
            menuOpen
              ? strings.closeNavigation
              : strings.openNavigation
          }
        </span>

        <Image
          priority
          className={styles.menuButtonIcon}
          aria-hidden
          role="presentation"
          src={menuOpen ? closeIcon : openIcon}
          alt=""
        />
      </button>

      <ul
        className={
          clsx(
            styles.list,
            menuOpen ? styles.listMobile : ''
          )
        }
        id={menuListId}
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
