import Navbar from '../components/Navbar.tsx';

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="p-6">
        <h1 className="text-2xl font-bold text-center">
          Bem-vindo ao nosso site!
        </h1>
      </main>
    </div>
  );
}
