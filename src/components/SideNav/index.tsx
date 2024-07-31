'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

// constants
import { LINKS } from '@/constants/router';

export default function SideNav() {
  const pathname = usePathname();

  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2">
      <div className="flex grow flex-row space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        {LINKS.map((link) => {
          const isActive = pathname === link.href;
          const baseClass =
            'flex h-[48px] grow items-center justify-center gap-2 rounded-md p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3';
          const activeClass = 'bg-sky-100 text-blue-600';
          const inActiveClass = 'bg-gray-50';
          const linkClasses = `${baseClass} ${isActive ? activeClass : inActiveClass}`;

          return (
            <Link key={link.name} href={link.href} className={linkClasses}>
              <p>{link.name}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
