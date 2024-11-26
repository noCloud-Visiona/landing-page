import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-white shadow-md">
      {/* Seção Esquerda */}
      <div className="flex space-x-6">
        <Link href="/">
          <a className="text-gray-800 hover:text-gray-600 font-medium">Home</a>
        </Link>
        <Link href="/sobre">
          <a className="text-gray-800 hover:text-gray-600 font-medium">Sobre</a>
        </Link>
        <Link href="/contato">
          <a className="text-gray-800 hover:text-gray-600 font-medium">Contato</a>
        </Link>
      </div>

      {/* Seção Central (Logo) */}
      <div className="font-bold text-xl text-blue-600">
      public\assets\noCloud_logo.png
      </div>

      {/* Seção Direita (Botão) */}
      <div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
          Acesse Agora
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
