import { useState } from "react";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

export default function ContactUs() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Who can donate blood?",
      answer:
        "Anyone aged 18–65, weighing at least 50 kg, and in good health can donate blood.",
    },
    {
      question: "How often can I donate blood?",
      answer:
        "You can donate whole blood once every 3 months. Platelet donation frequency is different.",
    },
    {
      question: "Is donating blood safe?",
      answer:
        "Yes, donating blood is completely safe. All equipment used is sterile and discarded after one use.",
    },
    {
      question: "Do I need to fast before donating blood?",
      answer:
        "No fasting is required. In fact, we recommend eating a healthy meal before donating.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="contact"
      className="w-full bg-gradient-to-r from-red-100 via-white to-red-100 py-16 px-6 md:px-12 lg:px-20"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Contact Us
          </h2>
          <p className="text-gray-600 mt-3 text-lg max-w-2xl mx-auto">
            Have questions, want to donate blood, or need help?  
            We’re here to assist you 24/7.
          </p>
        </div>

        {/* Contact Container */}
        <div className="flex flex-col md:flex-row rounded-2xl shadow-2xl backdrop-blur-lg overflow-hidden border border-gray-200 bg-white/70">
          {/* Left Side - Contact Info */}
          <div className="md:w-1/2 bg-gradient-to-br from-red-500 to-red-400 p-8 text-white flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-semibold">Get In Touch</h3>
              <p className="text-red-100 mt-2 leading-relaxed">
                We’d love to hear from you! Connect with us anytime.
              </p>

              <div className="space-y-6 mt-6">
                <div className="flex items-center space-x-3 hover:translate-x-2 transition-transform duration-300">
                  <PhoneIcon fontSize="medium" />
                  <span className="text-lg">+91 98765 43210</span>
                </div>
                <div className="flex items-center space-x-3 hover:translate-x-2 transition-transform duration-300">
                  <EmailIcon fontSize="medium" />
                  <span className="text-lg">support@blooddonor.org</span>
                </div>
                <div className="flex items-center space-x-3 hover:translate-x-2 transition-transform duration-300">
                  <LocationOnIcon fontSize="medium" />
                  <span className="text-lg">
                    123 Blood Bank Street, New Delhi, India
                  </span>
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex space-x-6 mt-8">
              <a href="#" className="hover:scale-110 transition-transform duration-300">
                <FacebookIcon fontSize="large" />
              </a>
              <a href="#" className="hover:scale-110 transition-transform duration-300">
                <TwitterIcon fontSize="large" />
              </a>
              <a href="#" className="hover:scale-110 transition-transform duration-300">
                <InstagramIcon fontSize="large" />
              </a>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="md:w-1/2 p-8 bg-white">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Send Us a Message
            </h3>
            <form className="space-y-5">
              <div>
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
                />
              </div>
              <div>
                <textarea
                  rows="4"
                  placeholder="Your Message"
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 transition-all duration-300 font-medium shadow-md"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16 max-w-3xl mx-auto">
          <h3 className="text-2xl font-semibold text-gray-800 text-center mb-6">
            Frequently Asked Questions
          </h3>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white/70 backdrop-blur-md rounded-lg shadow-md border border-gray-200"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center p-4 text-left text-gray-800 font-medium"
                >
                  {faq.question}
                  <span className="text-red-500 text-xl">
                    {openIndex === index ? "−" : "+"}
                  </span>
                </button>
                {openIndex === index && (
                  <div className="px-4 pb-4 text-gray-600 text-sm sm:text-base">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
