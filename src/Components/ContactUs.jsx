import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

export default function ContactUs() {
  return (
    <>
      <section
        id="contact"
        className="w-full bg-gradient-to-r from-red-100 via-white to-red-100 py-16 px-6 md:px-16"
      >
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Contact Us
            </h2>
            <p className="text-gray-600 mt-3 text-lg max-w-2xl mx-auto">
              Have questions, need help, or want to donate blood?  
              Get in touch with us — we’d love to hear from you.
            </p>
          </div>

          {/* Contact Container */}
          <div className="flex flex-col md:flex-row bg-white rounded-2xl shadow-lg overflow-hidden">
            
            {/* Left Side - Contact Info */}
            <div className="md:w-1/2 bg-gradient-to-br from-red-500 to-red-400 p-8 text-white space-y-6 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-semibold">Get In Touch</h3>
                <p className="text-red-100 mt-2 leading-relaxed">
                  We're always here to answer your queries and help you connect.
                </p>

                <div className="space-y-5 mt-6">
                  <div className="flex items-center space-x-3">
                    <PhoneIcon />
                    <span>+91 98765 43210</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <EmailIcon />
                    <span>support@blooddonor.org</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <LocationOnIcon />
                    <span>123 Blood Bank Street, New Delhi, India</span>
                  </div>
                </div>
              </div>

              {/* Social Icons */}
              <div className="flex space-x-5 mt-6">
                <a href="#" className="hover:text-gray-200 transition">
                  <FacebookIcon fontSize="large" />
                </a>
                <a href="#" className="hover:text-gray-200 transition">
                  <TwitterIcon fontSize="large" />
                </a>
                <a href="#" className="hover:text-gray-200 transition">
                  <InstagramIcon fontSize="large" />
                </a>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="md:w-1/2 p-8">
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
                  className="w-full bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 transition-all duration-300 font-medium"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
