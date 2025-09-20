import { Navigation } from "../Navigation";
import { ContactForm } from "../ContactForm";

export function ContactPage() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-black to-[#C8102E] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-white mb-4">Contact Us</h1>
        </div>
      </div>
      
      {/* Contact Content */}
      <div className="bg-black">
        <ContactForm onBack={() => {}} hideBackButton />
      </div>
    </div>
  );
}