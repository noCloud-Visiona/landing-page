import React from "react";
import Image from "next/image";

const MainContent = () => {
  return (
    <div className="relative" id="inicio">
      <div className="flex justify-between items-center px-20 py-10">
        {/* Seção Esquerda */}
        <div className="w-3/5">
          <h1 className="text-[48px] font-bold leading-[72px] text-[#111827]">
            Remova nuvens e <br />
            sombras de suas imagens <br />
            no catálogo do INPE
          </h1>
          <p className="text-[18px] font-normal leading-7 text-[#505F98] mt-4">
            Descubra como nossa solução de inteligência artificial remove nuvens e
            sombras de imagens capturadas pelo satélite CBERS4A, proporcionando
            análises mais claras e eficientes.
          </p>
          <div className="flex space-x-4 mt-6">
            <div>
              <a href="#sobre" className="bg-[#073256] text-white px-6 py-2 rounded-md font-semibold text-lg hover:opacity-90 transition">
                Como funciona?
              </a>
            </div>
            <div>
              <button className="flex items-center bg-[#FFF] text-[#073256] px-6 py-2 rounded-md font-semibold text-lg hover:opacity-90 transition">
                <Image
                  src="/assets/play_icon.png"
                  alt="Ícone de Play"
                  width={20}
                  height={20}
                  className="mr-2"
                />
                Ver Vídeo
              </button>
            </div>
          </div>
        </div>

        {/* Seção Direita */}
        <div className="w-2/5 flex justify-center">
          <Image
            src="/assets/mobile_mockup.png"
            alt="Mobile Mockup"
            width={320}
            height={640}
            className="object-contain"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default MainContent;
