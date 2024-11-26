import React from "react";
import Image from "next/image";

const AboutSection = () => {
  return (
    <div className="px-20 py-16">
      {/* Título Principal */}
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold leading-[60px] text-[#111827]">
          Sobre nosso aplicativo
        </h2>
        <p className="text-lg leading-7 text-[#374151] mt-4">
          Nossa solução combina inteligência artificial e computação em nuvem
          para facilitar o mapeamento e a análise de imagens satelitais. Veja
          como nosso app pode transformar suas análises.
        </p>
      </div>

      {/* Primeira Linha de Ícones, Títulos e Subtítulos */}
      <div className="flex justify-between my-12 py-6">
        <div className="flex flex-col items-center text-center w-1/3">
          <Image src="/assets/icons/about_1.png" alt="Ícone 1" width={32} height={32} />
          <h3 className="text-2xl font-bold leading-[40px] text-[#111827] mt-4">
            Download Flexível
          </h3>
          <p className="text-base leading-6 text-[#374151]">
            Baixe imagens processadas no formato TIFF e máscaras vetoriais para
            análises detalhadas.
          </p>
        </div>
        <div className="flex flex-col items-center text-center w-1/3">
          <Image src="/assets/icons/about_2.png" alt="Ícone 2" width={32} height={32} />
          <h3 className="text-2xl font-bold leading-[40px] text-[#111827] mt-4">
            Automatizado
          </h3>
          <p className="text-base leading-6 text-[#374151]">
            Com nosso software, você pode escolher a imagem da sua propriedade e
            remover as nuvens automaticamente.
          </p>
        </div>
        <div className="flex flex-col items-center text-center w-1/3">
          <Image src="/assets/icons/about_3.png" alt="Ícone 3" width={32} height={32} />
          <h3 className="text-2xl font-bold leading-[40px] text-[#111827] mt-4">
            Interface Intuitiva
          </h3>
          <p className="text-base leading-6 text-[#374151]">
            Uma interface amigável e baseada em mapas, fácil de navegar e
            interagir.
          </p>
        </div>
      </div>

      {/* Segunda Linha de Ícones, Títulos e Subtítulos */}
      <div className="flex justify-between my-12 py-6">
        <div className="flex flex-col items-center text-center w-1/3">
          <Image src="/assets/icons/about_4.png" alt="Ícone 4" width={32} height={32} />
          <h3 className="text-2xl font-bold leading-[40px] text-[#111827] mt-4">
            Acessível em Qualquer Lugar
          </h3>
          <p className="text-base leading-6 text-[#374151]">
            Nossa aplicação em nuvem permite acesso rápido e seguro em qualquer
            dispositivo.
          </p>
        </div>
        <div className="flex flex-col items-center text-center w-1/3">
          <Image src="/assets/icons/about_5.png" alt="Ícone 5" width={32} height={32} />
          <h3 className="text-2xl font-bold leading-[40px] text-[#111827] mt-4">
            Alta Precisão
          </h3>
          <p className="text-base leading-6 text-[#374151]">
            Utilizamos modelos avançados de Deep Learning para garantir máxima
            precisão nas máscaras geradas.
          </p>
        </div>
        <div className="flex flex-col items-center text-center w-1/3">
          <Image src="/assets/icons/about_6.png" alt="Ícone 6" width={32} height={32} />
          <h3 className="text-2xl font-bold leading-[40px] text-[#111827] mt-4">
            Camadas Precisas
          </h3>
          <p className="text-base leading-6 text-[#374151]">
            Visualize diferentes camadas: sem nuvens, com nuvens ou sombras.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
