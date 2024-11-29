import React from "react";
import Image from "next/image";

const TechnologiesSection = () => {
  return (
    <div className="flex items-center px-20 py-16 bg-[#073256]" id="tecnologias">
      {/* Lado Esquerdo - Título e Subtítulo */}
      <div className="w-1/2 text-white">
        <h2 className="text-4xl font-bold leading-[60px]">
          Construído com as melhores ferramentas do mercado
        </h2>
        <p className="text-lg leading-7 mt-4">
          Desde frameworks modernos até algoritmos avançados de inteligência artificial, cada tecnologia foi escolhida para oferecer a melhor experiência aos usuários.
        </p>
      </div>

      {/* Lado Direito - Imagem com Tecnologias */}
      <div className="w-1/2 flex justify-center">
        <Image
          src="/assets/ferramentas.png"
          alt="Tecnologias"
          width={380}
          height={250}
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default TechnologiesSection;
