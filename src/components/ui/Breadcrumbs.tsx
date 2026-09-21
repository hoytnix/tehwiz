import React from 'react';
import Link from 'next/link';

export interface BreadcrumbItem {
  label: string;
  href?: string;
  icon?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, className = '' }) => {
  const allItems: BreadcrumbItem[] = [
    { label: 'Home', href: '/', icon: 'home' },
    ...items
  ];

  return (
    <nav 
      aria-label="Breadcrumb"
      className={`flex items-center gap-2 text-xs font-mono text-slate-400 ${className}`}
    >
      {allItems.map((item, idx) => {
        const isLast = idx === allItems.length - 1;

        return (
          <React.Fragment key={idx}>
            {idx > 0 && <span className="text-slate-600 select-none">/</span>}
            
            {item.href && !isLast ? (
              <Link
                href={item.href}
                className="hover:text-white text-slate-400 transition-colors flex items-center gap-1 cursor-pointer"
              >
                {item.icon && (
                  <span className="material-icons text-[13px] text-indigo-400">{item.icon}</span>
                )}
                <span>{item.label}</span>
              </Link>
            ) : (
              <span className={`flex items-center gap-1 font-semibold ${isLast ? 'text-indigo-300' : 'text-slate-300'}`}>
                {item.icon && (
                  <span className="material-icons text-[13px] text-indigo-400">{item.icon}</span>
                )}
                <span>{item.label}</span>
              </span>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
};
