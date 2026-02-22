import React from "react";
import "./App.css";
import { Toaster } from 'sonner';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { HowItWorks } from './components/HowItWorks';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Pricing } from './components/Pricing';
import { Gallery } from './components/Gallery';
import { Testimonials } from './components/Testimonials';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';
import { RegistrationPopup } from './components/RegistrationPopup';
import { Newsletter } from './components/Newsletter';
import { Partnerships } from './components/Partnerships';
import { SocialVideos } from './components/SocialVideos';
import { FAQ } from './components/FAQ';
import { ScrollToTop } from './components/ScrollToTop';

function App() {
    return (
        <div className="App">
            <RegistrationPopup />
            <Header />

            <main>
                <Hero />
                <Services />
                <HowItWorks />
                <WhyChooseUs />
                <Pricing />
                <Newsletter />
                <Partnerships />
                <Testimonials />
                <Gallery />
                <SocialVideos />
                <FAQ />
                <ContactForm />
            </main>

            <Footer />
            <ScrollToTop />
            <Toaster position="top-right" richColors />
        </div>
    );
}

export default App;
