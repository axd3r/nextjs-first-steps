'use client';

import Link from "next/link";
import style from './ActiveLink.module.css';
import { usePathname } from "next/navigation";

interface Props {
  path: string;
  text: string;
}

const ActiveLink = ({ path, text }: Props) => {
  const pathName = usePathname();
  const isActive = pathName === path || pathName.startsWith(path + '/');

  return (
    <Link
      href={path}
      className={`relative transition-colors duration-200 hover:text-blue-400 mr-2 
                  ${isActive ? 'text-blue-500 after:w-full' : 'text-white after:w-0'}
                  after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-blue-400 after:transition-all after:duration-300`}
    >
      {text}
    </Link>

  );
};

export default ActiveLink;
