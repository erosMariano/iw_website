import Header from "@/components/home/header";
import Hero from "@/components/home/hero";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b flex items-center flex-col from-[#24D4FD] to-[#00BFF5]">
      <Header />
      <Hero />
    </main>
  );
}
