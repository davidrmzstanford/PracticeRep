import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header>
      <div>
        <Link href="/">
          <div>
            <Image
              src="/D.jpg"
              alt="Adaltas Logo"
              width={25}
              height={25}
            />
            <span>
              Web Technologies
            </span>
          </div>
        </Link>
        <nav>
          <Link href="/articles">
            <span>Articles</span>
          </Link>
          <Link href="/about">
            <span>About</span>
          </Link>
          <Link href="/contacts">
            <span>Contact</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}