import { Link } from "react-router-dom";
import blog1 from "../assets/blog1.png";
import blog2 from "../assets/blog2.png";
import blog3 from "../assets/blog3.png";
import image from "../assets/image.png";

export default function Blog() {
  const blogs = [
    {
      id: 1,
      title: "The Importance of Blood Donation",
      description:
        "Learn why donating blood can save lives and how a single donation can impact multiple patients.",
      content:
        "Blood donation is a noble act that saves millions of lives every year. A single donation can help patients suffering from cancer, accidents, surgeries, and many life-threatening diseases...",
      image: blog1,
      author: "Dr. Ananya Sharma",
      date: "Aug 10, 2025",
    },
    {
      id: 2,
      title: "How to Prepare for Blood Donation",
      description:
        "Tips and guidelines to ensure a safe and smooth blood donation experience.",
      content:
        "Before donating blood, make sure you are well-rested, hydrated, and have eaten a healthy meal. Avoid alcohol, heavy workouts, and fasting before your donation...",
      image: blog2,
      author: "Dr. Rohan Patel",
      date: "Aug 15, 2025",
    },
    {
      id: 3,
      title: "Stories of Hope & Recovery",
      description:
        "Real-life stories of patients whose lives were saved through blood donation.",
      content:
        "Blood donation gives people a second chance at life. From accident survivors to cancer patients, your contribution truly matters. Meet inspiring heroes who made this possible...",
      image: blog3,
      author: "Dr. Meera Kapoor",
      date: "Aug 20, 2025",
    },
  ];

  return (
    <section
      id="blog"
      className="relative min-h-screen w-full py-16 px-5 sm:px-10 lg:px-20 
      bg-gradient-to-r from-red-100 via-white to-red-100 overflow-hidden"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/40 backdrop-blur-md"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Our Latest Blogs
          </h1>
          <p className="text-gray-600 mt-3 text-base sm:text-lg max-w-2xl mx-auto">
            Stay informed with the latest updates, stories, and tips about blood
            donation and saving lives.
          </p>
        </div>

        {/* Blog Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="relative bg-white/30 backdrop-blur-xl border border-white/40 
              rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 
              hover:scale-[1.03] flex flex-col overflow-hidden"
            >
              {/* Blog Image */}
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-52 sm:h-56 object-cover rounded-t-2xl transition-transform duration-500 hover:scale-105"
              />

              {/* Blog Content */}
              <div className="p-5 flex flex-col flex-1">
                <h2 className="text-lg sm:text-xl font-semibold text-gray-800">
                  {blog.title}
                </h2>
                <p className="text-gray-700 mt-3 text-sm leading-relaxed flex-1">
                  {blog.description}
                </p>

                {/* Author & Date */}
                <div className="flex justify-between items-center mt-4 text-xs sm:text-sm text-gray-600">
                  <span>👩‍⚕️ {blog.author}</span>
                  <span>📅 {blog.date}</span>
                </div>

                {/* Read More Button */}
                <Link
                  to={`/blog/${blog.id}`}
                  className="mt-5 bg-red-500 hover:bg-red-600 text-white 
                  px-5 py-2 rounded-lg text-sm font-semibold 
                  shadow-md transition duration-300 text-center"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
