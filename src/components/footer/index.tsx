import logoImage from 'public/cabrita-logo.svg';
import Image from 'next/image';
import Link from 'next/link';
import { AiFillGithub } from 'react-icons/ai';

export function Footer() {
  return (
    <footer className='w-full h-36  bg-slate-900 border-t border-sky-600 text-slate-500 shadow-lg shadow-blue-600'>
      <div className='max-w-screen-xl  pt-8 mx-auto flex  justify-center items-center  h-28 sm:justify-center'>
        <AiFillGithub color='#838e9c' size={40} />
        <Link href='/'> By: Trícia Souza © 2023 </Link>
      </div>
    </footer>
  );
}
