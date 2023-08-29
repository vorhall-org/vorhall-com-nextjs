'use client'

import styles from './nav-button.module.scss';
import { useState } from 'react';

export default function MenuButton({ strings }) {

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
  )
};
