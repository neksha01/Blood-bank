import CheckIcon from "./CheckIcon";
import doctors from '../assets/doctors.jpg'

export default function About(){
    const features = [
    "Good Services",
    "24h Service",
    "Help People",
    "Health Check",
    "Hygiene Tools",
    "Blood Bank",
  ];
    return(
        <>
      <div className="flex flex-col lg:flex-row  items-center justify-between px-8 lg:py-16 bg-white mt-10 gap-10 bg-gradient-to-r from-red-100 via-white to-red-100">
        <div className="lg:w-1/2 space-y-4 text-center lg:text-left leading-snug">

            <h1 className="text-lg md:text-2xl font-semibold text-gray-900 ">WELCOME TO BLOOD DONOR<span/> ORGANIZATION</h1>

            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">Welcome to our Blood donor organization where every drop counts.We are dedicated to saving lives by connecting generous donors with those in need.Join us in making a difference one donation at a time.</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 mt-6">
                {
                    features.map((feature,index)=>(
                        <div key={index} className="flex items-center space-x-3">
                            <CheckIcon className="w-6 h-6 text-red-500"/>
                            <span className="text-gray-700text-base">{feature}</span>
                        </div>
                    ))
                }

            </div>

            <button className="mt-6 px-3 py-2 border-2 border-red-500 text-red-500 font-medium rounded-lg hover:bg-red-500 hover:text-white transition-all duration-300">
          Explore More
        </button>
        </div>
        <div className="lg:w-1/2 flex justify-center">
         <img
          src={doctors}
          alt="Blood donation"
          className=" w-full max-w-md rounded-lg shadow-lg border-4 transform transition-transform duration-500 hover:scale-105"
        />
        </div>
      </div>
        </>
    )
}