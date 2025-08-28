import CheckIcon from "./CheckIcon";
import doctors from "../assets/doctors.jpg";
import dr1 from "../assets/dr1.png"; 

export default function About() {
  const features = [
    "Good Services",
    "24h Service",
    "Help People",
    "Health Check",
    "Hygiene Tools",
    "Blood Bank",
  ];

  const donatePoints = [
    "One donation can save up to three lives.",
    "Blood cannot be manufactured; it only comes from donors.",
    "Every two seconds, someone needs blood.",
  ];

  return (
    <>
      <section id="about" className="bg-gradient-to-r from-red-200 via-white to-red-150 py-16">
        {/* First Block */}
        <div className="flex flex-col lg:flex-row items-center justify-between px-8 gap-10">
          {/* Left Content */}
          <div className="lg:w-1/2 space-y-5 text-center lg:text-left leading-snug">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900">
              WELCOME TO BLOOD DONOR <span /> ORGANIZATION
            </h1>

            <p className="text-gray-600 text-base sm:text-lg md:text-xl leading-relaxed max-w-xl mx-auto lg:mx-0">
              Welcome to our Blood donor organization where every drop counts.
              We are dedicated to saving lives by connecting generous donors with those in need.
              Join us in making a difference one donation at a time.
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 mt-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckIcon className="w-6 h-6 text-red-500" />
                  <span className="text-gray-700 text-base sm:text-lg">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            <button className="mt-6 px-4 py-2 border-2 border-red-500 text-red-500 font-semibold rounded-lg hover:bg-red-500 hover:text-white transition-all duration-300">
              Explore More
            </button>
          </div>

          {/* Right Image */}
          <div className="lg:w-1/2 flex justify-center">
            <img
              src={doctors}
              alt="Blood donation"
              className="w-full max-w-md rounded-lg shadow-lg border-4 transform transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>

       

        {/* Second Block  */}
        <div className="flex flex-col lg:flex-row items-center justify-between px-8 gap-10 mt-12">
          {/* Left Image */}
          <div className="lg:w-1/2 flex justify-center">
            <img
              src={dr1}
              alt="Why Donate Blood"
              className="w-72 h-72 object-cover rounded-full shadow-lg bg-gray-300 border-2 border-black transform transition-transform duration-500 hover:scale-105"
            />
          </div>

          {/* Right Content */}
          <div className="lg:w-1/2 space-y-5 text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Why Donate Blood?
            </h2>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
              Donating blood is a simple act of kindness that saves lives. Your
              small contribution can make a big difference for patients in need.
            </p>

            <ul className="space-y-3 text-left">
              {donatePoints.map((point, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <CheckIcon className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700 text-base sm:text-lg">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
