import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-20 bg-transparent">
      {/* Seção Esquerda */}
      <div className="flex space-x-6">
        <Link href="/">
          <p className="text-[#505F98] hover:text-opacity-80 font-Inter text-m leading-6 cursor-pointer">
            Home
          </p>
        </Link>
        <Link href="/sobre">
          <p className="text-[#505F98] hover:text-opacity-80 font-Inter text-m leading-6 cursor-pointer">
            Sobre
          </p>
        </Link>
        <Link href="/contato">
          <p className="text-[#505F98] hover:text-opacity-80 font-Inter text-m leading-6 cursor-pointer">
            Contato
          </p>
        </Link>
      </div>

      {/* Seção Central (Logo) */}
      <div>
        <Link href="/">
          <Image 
            src="/assets/logos/noCloud_logo.png" 
            alt="Logo" 
            width={100} 
            height={40} 
            className="cursor-pointer"
            priority
          />
        </Link>
      </div>

      {/* Seção Direita (Botão) */}
      <div>
        <button
          className="bg-[#073256] text-white rounded font-Inter hover:opacity-90 transition"
          style={{ width: '160px', height: '35px', lineHeight: '25px' }}
        >
          Acesse Agora
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
