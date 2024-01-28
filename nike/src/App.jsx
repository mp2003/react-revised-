import React, { useState } from "react";
import {
  Hero,
  PopularProducts,
  SuperQuality,
  Services,
  SpecialOffer,
  CustomerReviews,
  Suscribe,
  Footer,
} from "./sections";
import Nav from "./components/Nav";

const App = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <main className={`relative ${isMenuOpen ? "blur-filter" : ""}`}>
      <section className="z-1">
        <Nav toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
      </section>
      <section className="xl:padding-1 wide:padding-r padding-b">
        <Hero />
      </section>
      <section className="padding">
        <PopularProducts />
      </section>
      <section className="padding">
        <SuperQuality />
      </section>{" "}
      <section className="padding-x padding-y">
        <Services />
      </section>{" "}
      <section className="bg-pale-blue padding">
        <SpecialOffer />
      </section>
      <section className="padding-x sm:py-32 p-16 w-full">
        <CustomerReviews />
      </section>{" "}
      <section className="padding">
        <Suscribe />
      </section>{" "}
      <section className="bg-black padding-x padding-t pb-8">
        <Footer />
      </section>
    </main>
  );
};

export default App;
