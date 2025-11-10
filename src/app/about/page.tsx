// app/page.tsx
import type { Metadata } from 'next'
import Hero from '@/components/Hero';
// import About from '@/components/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Giới thiệu về tôi',
  description: ' Lê Đức Minh Quân - Fullstack Developer',
}

export default function About() {
  return (
    <main className="bg-gray-50 min-h-screen">
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Hero />
        {/* <About /> */}
        <Experience />
        <Projects />
        <Contact />
      </div>
      <Footer />
    </main>
  );
}