import home from "../assets/home.png";

export default function Home() {
  return (
    <>
      <div className="relative w-full">
    
        <img src={home} className="w-full h-[100vh] object-cover" alt="home" />

        <div className="absolute inset-0 bg-black/20"></div>

       
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center px-4">
          <h1 className="text-white text-4xl md:text-5xl leading-snug font-sans font-semibold ">
            Your Blood Can Bring Smile <br /> In Other Person Face
          </h1>

          <p className="text-white text-lg md:text-xl mt-6 max-w-3xl mx-auto opacity-90">
            Your blood has the power to bring a smile to someone in need. Just
            one donation can make a world of difference and give someone a
            second chance at life.
          </p>

          <button className="mt-8 bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-md text-lg font-semibold shadow-lg transition duration-300">
            Donate Now
          </button>
        </div>
      </div>
    </>
  );
}
