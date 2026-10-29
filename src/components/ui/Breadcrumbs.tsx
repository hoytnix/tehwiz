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
      className={`flex items-center gap-2 text-xs text-muted ${className}`}
    >
      {allItems.map((item, idx) => {
        const isLast = idx === allItems.length - 1;

        return (
          <React.Fragment key={idx}>
            {idx > 0 && <span className="text-edge select-none">/</span>}
            
            {item.href && !isLast ? (
              <Link
                href={item.href}
                className="hover:text-bone text-muted transition-colors flex items-center gap-1 cursor-pointer"
              >
                <span>{item.label}</span>
              </Link>
            ) : (
              <span className={`flex items-center gap-1 ${isLast ? 'text-bone' : 'text-muted'}`}>
                <span>{item.label}</span>
              </span>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
};
