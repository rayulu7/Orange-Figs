import React, { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';

export const TermsOfService = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-[#fffaf6] py-12 px-4 font-sans text-[#1C0A08]">
            <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-orange-100">
                <a href="#" className="inline-flex items-center gap-2 text-orange-600 font-bold mb-8 hover:text-orange-700 transition-colors">
                    <ArrowLeft size={20} />
                    Back to Home
                </a>
                
                <h1 className="text-3xl md:text-5xl font-black mb-6 text-orange-500" style={{ fontFamily: "'AndesRounded', sans-serif" }}>Terms of Service</h1>
                <p className="text-gray-500 mb-8 font-medium">Last updated: {new Date().toLocaleDateString()}</p>

                <div className="space-y-8 text-gray-700 leading-relaxed font-medium">
                    <section>
                        <h2 className="text-xl font-bold mb-4 text-[#1C0A08]" style={{ fontFamily: "'AndesRounded', sans-serif" }}>1. Acceptance of Terms</h2>
                        <p>By registering your child for Orange Figs classes, summer camps, or masterclasses, you agree to abide by these Terms of Service. These terms govern your use of our services and participation in our culinary programs.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold mb-4 text-[#1C0A08]" style={{ fontFamily: "'AndesRounded', sans-serif" }}>2. Registration and Eligibility</h2>
                        <p>Our programs are designed for children across various age groups (e.g., Little Chefs, Junior Culinary, Teen Masterclass). Parents or legal guardians must complete the registration process and provide accurate information, notably regarding age requirements and medical/allergy disclosures.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold mb-4 text-[#1C0A08]" style={{ fontFamily: "'AndesRounded', sans-serif" }}>3. Safety and Conduct</h2>
                        <p>We maintain strict professional standards and a child-centered approach. However, working in a kitchen environment involves inherent risks. We provide necessary safety gear and instructions. Any child displaying disruptive behavior that endangers themselves or others may be asked to leave the session, and refunds will not be provided in such instances.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold mb-4 text-[#1C0A08]" style={{ fontFamily: "'AndesRounded', sans-serif" }}>4. Medical and Allergy Information</h2>
                        <p>It is the strict responsibility of the parent or guardian to inform Orange Figs of any food allergies, dietary restrictions, or medical conditions during registration. While we take utmost care to prevent cross-contamination, our facilities process a wide variety of ingredients.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold mb-4 text-[#1C0A08]" style={{ fontFamily: "'AndesRounded', sans-serif" }}>5. Cancellations and Refunds</h2>
                        <p>Cancellations must be made within the specified timeframe prior to the start of a class or camp. Refunds or credits will be issued according to our cancellation policy, which will be provided at the time of booking. Missed classes without prior notice are non-refundable.</p>
                    </section>
                </div>
            </div>
        </div>
    );
};
