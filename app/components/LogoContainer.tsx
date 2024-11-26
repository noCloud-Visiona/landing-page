import React from 'react';
import Image from 'next/image';

const LogoContainer = () => {
  return (
    <div className="px-20">
      {/* Divider Top */}
      <div className="border-t border-[#E5E7EB] mb-4"></div>

      {/* Container de Logos */}
      <div className="flex justify-between items-center">
        {/* Logo CPS */}
        <div className="flex justify-center items-center w-1/3">
          <a href="http://www.fatec.sp.gov.br/" target="_blank" rel="noopener noreferrer">
            <Image src="/assets/logos/cps_logo.png" alt="Logo CPS" width={60} height={80} />
          </a>
        </div>

        {/* Logo FATEC */}
        <div className="flex justify-center items-center w-1/3">
          <a href="https://fatecsjc-prd.azurewebsites.net/" target="_blank" rel="noopener noreferrer">
            <Image src="/assets/logos/fatec_logo.png" alt="Logo FATEC" width={70} height={80} />
          </a>
        </div>

        {/* Logo Visiona */}
        <div className="flex justify-center items-center w-1/3">
          <a href="https://visionaespacial.com/" target="_blank" rel="noopener noreferrer">
            <Image src="/assets/logos/visiona_logo.png" alt="Logo Visiona" width={100} height={80} />
          </a>
        </div>
      </div>

      {/* Divider Bottom */}
      <div className="border-b border-[#E5E7EB] mt-4"></div>
    </div>
  );
};

export default LogoContainer;
