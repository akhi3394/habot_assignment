import React from 'react';
import Header from '../components/Header';
import SearchSection from '../components/SearchSection';
import LocationButtons from '../components/LocationButtons';
import BuyerSupplierSection from '../components/BuyerSupplierSection';
import HowItWorksSection from '../components/HowItWorksSection';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
      <Header />
      <SearchSection />
      <LocationButtons />
      <BuyerSupplierSection />
      <HowItWorksSection />
      <Footer />
    </div>
  );
};

export default Home;
