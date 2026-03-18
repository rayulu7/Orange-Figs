import React, { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';

export const PrivacyPolicy = () => {
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
                
                <h1 className="text-3xl md:text-5xl font-black mb-6 text-orange-500" style={{ fontFamily: "'AndesRounded', sans-serif" }}>Privacy Policy</h1>
                <p className="text-gray-500 mb-8 font-medium">Last updated: {new Date().toLocaleDateString()}</p>

                <div className="space-y-8 text-gray-700 leading-relaxed font-medium">
                    <section>
                        <h2 className="text-xl font-bold mb-4 text-[#1C0A08]" style={{ fontFamily: "'AndesRounded', sans-serif" }}>1. Information We Collect</h2>
                        <p>At Orange Figs, we are committed to protecting the privacy of our "Little Chefs" and their families. We collect information you provide directly to us when registering for our Birthday Celebrations, Kids Cooking Club, Summer Camps, and Masterclasses. This may include parent/guardian names, contact details, children's names, ages, allergy information, and payment details.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold mb-4 text-[#1C0A08]" style={{ fontFamily: "'AndesRounded', sans-serif" }}>2. How We Use Your Information</h2>
                        <p>We use the information we collect to:</p>
                        <ul className="list-disc pl-6 mt-2 space-y-2">
                            <li>Process registrations for our culinary programs and events.</li>
                            <li>Ensure the safety of all children, particularly regarding food allergies and health conditions.</li>
                            <li>Communicate with parents regarding schedule changes, new classes, and gallery updates.</li>
                            <li>Provide customer support and respond to your inquiries.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold mb-4 text-[#1C0A08]" style={{ fontFamily: "'AndesRounded', sans-serif" }}>3. Photography and Media</h2>
                        <p>During our classes and events, we may take photographs or videos of the children learning and enjoying themselves for our Gallery and promotional materials. We will always seek explicit consent from parents or guardians before sharing any media containing identifiable images of your children.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold mb-4 text-[#1C0A08]" style={{ fontFamily: "'AndesRounded', sans-serif" }}>4. Data Security</h2>
                        <p>We implement appropriate technical and organizational security measures to protect your personal data from unauthorized access, alteration, or disclosure. Registration records and sensitive information are stored securely and only accessed by authorized Orange Figs staff.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold mb-4 text-[#1C0A08]" style={{ fontFamily: "'AndesRounded', sans-serif" }}>5. Contact Us</h2>
                        <p>If you have any questions about this Privacy Policy or our data practices, please contact us using the details provided in our website footer or through our Parents Portal.</p>
                    </section>
                </div>
            </div>
        </div>
    );
};
