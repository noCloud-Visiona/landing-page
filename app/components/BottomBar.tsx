import React from 'react';
import Image from 'next/image';

const BottomBar = () => {
  return (
    <div className="w-full h-[220px] bg-[#073256] text-white flex py-10 flex-col justify-between">
      {/* Conteúdo Principal */}
      <div className="flex justify-between items-center px-20 py-6">
        {/* Lado Esquerdo */}
        <div className="text-lg font-medium">
          © 2024 - noCloud ☁️
        </div>

        {/* Lado Direito */}
        <div>
          <a
            href="https://github.com/noCloud-Visiona/documentation"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#111B47] px-6 py-2 text-white rounded-md text-lg"
          >
            Acesse Agora
          </a>
        </div>
      </div>

      {/* Linha Separadora */}
      <hr className="border-t border-white mx-20" />

      {/* Links e Ícone */}
      <div className="flex justify-between items-center px-20 py-4">
        {/* Links de Navegação */}
        <div className="flex space-x-6 text-sm">
          <a href="#inicio" className="hover:underline">
            Início
          </a>
          <a href="#sobre" className="hover:underline">
            Sobre
          </a>
          <a href="#tecnologias" className="hover:underline">
            Tecnologias
          </a>
          <a
            href="#github"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            GitHub
          </a>
        </div>

        {/* Ícone do GitHub */}
        <div>
          <a
            href="https://github.com/noCloud-Visiona/documentation"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/assets/icons/github_2.png"
              alt="GitHub Icon"
              width={30}
              height={30}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default BottomBar;