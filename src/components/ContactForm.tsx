import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Card, CardContent, CardHeader } from "./ui/card";
import { ArrowLeft, Mail, Send, User } from "lucide-react";
import { toast } from "sonner@2.0.3";
import emailjs from "@emailjs/browser";

interface ContactFormProps {
  onBack: () => void;
  hideBackButton?: boolean;
}

interface FormData {
  fullName: string;
  email: string;
  question: string;
}

export function ContactForm({ onBack, hideBackButton = false }: ContactFormProps) {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    question: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  // --- UPDATED handleSubmit with EmailJS ---
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.fullName || !formData.email || !formData.question) {
      toast.error("Please fill in all fields");
      return;
    }

    setIsSubmitting(true);

    try {
      const templateParams = {
        fullName: formData.fullName,
        email: formData.email,
        question: formData.question,
      };

      await emailjs.send(
        "YOUR_SERVICE_ID",   // replace with your EmailJS Service ID
        "YOUR_TEMPLATE_ID",  // replace with your EmailJS Template ID
        templateParams,
        "YOUR_PUBLIC_KEY"    // replace with your EmailJS Public Key
      );

      toast.success("Your message has been sent to Atlanta Wild management!");
      
      setFormData({ fullName: "", email: "", question: "" });
      setTimeout(() => onBack(), 1500);

    } catch (error) {
      console.error(error);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };
  // ---------------------------------------------

  return (
    <div className="py-12 px-6 md:px-12 lg:px-20">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          {!hideBackButton && (
            <Button
              onClick={onBack}
              variant="ghost"
              className="mb-6 text-gray-600 hover:text-black flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Homepage
            </Button>
          )}
          
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl mb-4 text-white">
              Join the <span style={{ color: '#C8102E' }}>Wild Side</span>
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Have a question or want to get in touch with the Atlanta Wild team? 
              We'd love to hear from you.
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-1">
            <Card className="h-fit bg-white/5 border-white/10">
              <CardHeader>
                <h3 className="text-xl text-white">
                  Get in Touch
                </h3>
                <p className="text-white/70">
                  Multiple ways to reach our team
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <div 
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: '#C8102E' }}
                  >
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-white">Email</p>
                    <p className="text-sm text-white/70">mia@atlantawild.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div 
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: '#C8102E' }}
                  >
                    <User className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-white">Phone Number</p>
                    <p className="text-sm text-white/70">954-111-WILD</p>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-white/5 rounded-lg">
                  <p className="text-sm text-white/70">
                    <strong className="text-white">Response Time:</strong> We typically respond to inquiries within 24-48 hours during business days.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <Card className="bg-white/5 border-white/10">
              <CardHeader>
                <h3 className="text-xl text-white">
                  Send us a Message
                </h3>
                <p className="text-white/70">
                  Fill out the form below and we'll get back to you soon
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="fullName" className="text-white">Full Name *</Label>
                    <Input
                      id="fullName"
                      type="text"
                      placeholder="Enter your full name"
                      value={formData.fullName}
                      onChange={(e) => handleInputChange("fullName", e.target.value)}
                      className="h-12"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-white">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email address"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className="h-12"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="question" className="text-white">Your Question or Message *</Label>
                    <Textarea
                      id="question"
                      placeholder="Tell us how we can help you..."
                      value={formData.question}
                      onChange={(e) => handleInputChange("question", e.target.value)}
                      className="min-h-32 resize-none"
                      required
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-1 h-12 text-white font-semibold flex items-center justify-center gap-2"
                      style={{ backgroundColor: '#C8102E' }}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Send Message
                        </>
                      )}
                    </Button>
                    
                    {!hideBackButton && (
                      <Button
                        type="button"
                        variant="outline"
                        onClick={onBack}
                        className="h-12 px-8"
                      >
                        Cancel
                      </Button>
                    )}
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
