import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { UserCircleIcon } from '@heroicons/react/24/outline'; 
import { useContext } from 'react';
import UserContext from './UserContext'

export default function Header() {
  const {profile, login, logout} = useContext(UserContext)
  return (
    <header className="bg-blue-600 text-white py-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center px-6">
        <Link href="/">
          <div className="flex items-center space-x-2 cursor-pointer">
            <Image
              src="/D.jpg"
              alt="Logo"
              width={25}
              height={25}
            />
            <span className="font-bold text-xl">
              Web Technologies
            </span>
          </div>
        </Link>
        <nav className="space-x-4">
          <Link href="/articles">
            <span className="hover:underline cursor-pointer">Articles</span>
          </Link>
          <Link href="/about">
            <span className="hover:underline cursor-pointer">About</span>
          </Link>
          <Link href="/contacts">
            <span className="hover:underline cursor-pointer">Contact</span>
          </Link>
          {profile && (
            <div className="flex items-center space-x-1 cursor-pointer">
              <UserCircleIcon className="h-6 w-6" />
              <span>{profile.username}</span>
            </div>
          )}
        </nav>
        <li className="py-1 px-2 text-slate-800 hover:text-slate-500">
          { profile ?
            <button onClick= {() => logout()} className="flex gap-2 [&_svg]:h-6 [&_svg]:w-6">
              Log out
            </button>
            :
            <button onClick={() => login()} className="flex gap-2 [&_svg]:h-6 [&_svg]:w-6">
              Log in
            </button>
          }
        </li>
      </div>
    </header>
  );
}