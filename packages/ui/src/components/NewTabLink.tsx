import * as React from 'react';

export interface NewTabLinkProps {
   children: React.ReactNode;
   href: string;
}

export const NewTabLink = ({ children, href }: NewTabLinkProps) => {
   return (
      <a target="_blank" rel="noreferrer" href={href}>
         {children}
      </a>
   );
};
