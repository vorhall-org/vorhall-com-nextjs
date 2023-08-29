'use client'

import Link from 'next/link';
import styles from './nav.module.scss';
import { useState, useEffect } from 'react';
import clsx from 'clsx';
import Image from 'next/image';
import openIcon from '../../../public/icons/menu.svg';
import closeIcon from '../../../public/icons/close.svg';

export default function Nav({ items, strings }) {
  const menuListId = 'menu-list';

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

  // event handler to listen to window clicks
  const handleWindowClick = (evt) => {

    if (!menuOpen) {
      return;
    }

    const evtPaths = evt.composedPath();
    let ulFound = false;

    evtPaths.forEach((elem) => {
      const isUl = elem.id === menuListId;
      const isMenuButton = elem.getAttribute && elem.getAttribute('aria-controls') === menuListId;

      if (isUl || isMenuButton) {
        ulFound = true;
      }
    });

    if (!ulFound) {
      setMenuOpen(false);
    }
  }

  // ------------------
  // Effects
  // ------------------

  // listen to window clicks
  useEffect(() => {
    const onWindowClick = (evt) => handleWindowClick(evt);
    const onEscape = (evt) => {
      if (evt.key === 'Escape') {
        setMenuOpen(false);
      }
    }

    window.addEventListener('click', onWindowClick);
    window.addEventListener('keydown', onEscape);

    return () => {
      window.removeEventListener('click', onWindowClick);
      window.removeEventListener('keydown', onEscape);
    }
  })

  // ------------------
  // Render
  // ------------------

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
