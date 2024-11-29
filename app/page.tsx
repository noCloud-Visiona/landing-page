/* Importação de Componentes */
import Navbar from "./components/Navbar";
import MainContent from "./components/MainContent";
import LogoContainer from "./components/LogoContainer";
import AboutSection from "./components/AboutSection";
import TechnologiesSection from "./components/TechnologiesSection";

/* Importação de Módulos */
import Image from "next/image";
import { Inter } from "next/font/google";
import GitHubSection from "./components/GithubSection";
import BottomBar from "./components/BottomBar";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Home() {
  return (
    <div className={`${inter.className} min-h-screen bg-gray-50 relative`}>
      {/* Imagem no Topo */}
      <Image
        src="/assets/main_bg.png"
        alt="Background"
        width={969}
        height={1024}
        className="absolute top-0 right-0 w-[969px] h-[1024px] -z-10 object-cover"
        priority
      />

      {/* Nav */}
      <Navbar />

      {/* Main Content */}
      <MainContent />
      <LogoContainer />
      <AboutSection />
      <TechnologiesSection />
      <GitHubSection />

      {/* Bottom Bar */}
      <BottomBar />
    </div>
  );
}
