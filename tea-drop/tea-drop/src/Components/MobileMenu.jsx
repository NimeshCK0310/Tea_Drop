import React from 'react';
export default function MobileMenu({ open }) {
  
  if (!open) return null;

  return (
    <div className="md:hidden border-b">
      <nav className="px-4 pb-4 space-y-2">
        <a className="block py-2" href="#">Teas</a>
        <a className="block py-2" href="#">Tea Accessories</a>
        <a className="block py-2" href="#">Gifts</a>
        <a className="block py-2" href="#">Explore</a>
        <a className="block py-2" href="#">Wholesale</a>
      </nav>
    </div>
  );
}
