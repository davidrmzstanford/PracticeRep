// components/Header.js

import Link from 'next/link';

function Header() {
  return (
    <header>
      <h1>Lab 4 GR3 TEAM 4</h1>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contacts">Contacts</Link>
      </nav>
    </header>
  );
}

export default Header;
