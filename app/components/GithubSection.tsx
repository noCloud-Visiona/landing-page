import React from 'react';
import Image from 'next/image';

const GitHubSection = () => {
  return (
    <div className="flex px-20 py-5 items-center space-x-12" id='github'>
      {/* Seção Esquerda */}
      <div className="w-1/2">
        <h1 className="font-bold text-[48px] leading-[60px]">
          Conheça nosso repositório no GitHub
        </h1>
        <p className="font-normal text-[18px] leading-[28px] mt-4">
          Nosso repositório no GitHub está disponível para que você explore o código por trás do nosso aplicativo. Acompanhe de perto o desenvolvimento de uma solução que transforma a análise.
        </p>
        <div className="mt-6">
          <a
            href="https://github.com/noCloud-Visiona/documentation"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/assets/github.png"
              alt="GitHub Link"
              width={150}
              height={50}
            />
          </a>
        </div>
      </div>

      {/* Seção Direita */}
      <div className="w-1/2 flex justify-center">
        <div className="transform rotate-15">
          <Image
            src="/assets/desktop.png"
            alt="Desktop Image"
            width={570}
            height={320}
          />
        </div>
      </div>
    </div>
  );
};

export default GitHubSection;
