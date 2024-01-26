import Hero from "@/components/Hero";
import Hero2 from "@/components/Hero2";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";


export default function Home() {
  return (
    <main className="w-[calc(100vw-64px)] md:w-[calc(100vw-80px)] overflow-x-hidden bg-primary_dark_bg relative h-full">
      <nav className="sticky bg-primary_dark_bg z-50 top-0" >
      <Navbar />
      </nav>
      <Hero />
      <Hero2 />
    </main>
  );
}
