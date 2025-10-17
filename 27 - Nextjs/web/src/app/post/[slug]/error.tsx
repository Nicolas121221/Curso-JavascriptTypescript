"use client";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MainContainer } from "@/components/MainContainer";

export default function Error() {
  return (
    <>
      <Header />
      <MainContainer>
        <section className="text-center text-xl h-[85vh] content-center">
          404: page not found
        </section>
      </MainContainer>
      <Footer />
    </>
  );
}
