import { useParams, Link } from "react-router-dom";
import blog1 from "../assets/blog1.png";
import blog2 from "../assets/blog2.png";
import blog3 from "../assets/blog3.png";

export default function BlogDetails() {
  const { id } = useParams();

  const blogs = [
    {
      id: 1,
      title: "The Importance of Blood Donation",
      content:
        "Blood donation is a noble act that saves millions of lives every year. A single donation can help patients suffering from cancer, accidents, surgeries, and many life-threatening diseases. Donating blood improves heart health, boosts mental well-being, and helps the community grow stronger.",
      image: blog1,
      author: "Dr. Ananya Sharma",
      date: "Aug 10, 2025",
    },
    {
      id: 2,
      title: "How to Prepare for Blood Donation",
      content:
        "Before donating blood, make sure you are well-rested, hydrated, and have eaten a healthy meal. Avoid alcohol, heavy workouts, and fasting before your donation. Bring a valid ID, and after donation, take rest, stay hydrated, and avoid heavy lifting for the next 24 hours.",
      image: blog2,
      author: "Dr. Rohan Patel",
      date: "Aug 15, 2025",
    },
    {
      id: 3,
      title: "Stories of Hope & Recovery",
      content:
        "Blood donation gives people a second chance at life. From accident survivors to cancer patients, your contribution truly matters. Meet inspiring heroes who made this possible and understand how your small act can create a big impact on someone's life.",
      image: blog3,
      author: "Dr. Meera Kapoor",
      date: "Aug 20, 2025",
    },
  ];

  const blog = blogs.find((b) => b.id === parseInt(id));

  if (!blog) {
    return (
      <div className="text-center text-red-600 text-xl mt-10">
        Blog not found!
      </div>
    );
  }

  return (
    <section className="relative min-h-screen w-full py-16 px-6 sm:px-12 lg:px-32 
      bg-gradient-to-r from-red-100 via-white to-red-100 flex justify-center items-center">
      <div className="bg-white/30 backdrop-blur-lg border border-white/40 rounded-2xl shadow-xl max-w-3xl w-full p-8">
        {/* Blog Image */}
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-64 sm:h-80 object-cover rounded-xl shadow-md mb-6"
        />

        {/* Blog Title */}
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
          {blog.title}
        </h1>

        {/* Author & Date */}
        <div className="flex justify-between items-center mt-2 text-gray-600 text-sm">
          <span>👩‍⚕️ {blog.author}</span>
          <span>📅 {blog.date}</span>
        </div>

        {/* Blog Content */}
        <p className="mt-6 text-gray-700 text-base leading-relaxed">
          {blog.content}
        </p>

        {/* Back Button */}
        <div className="mt-8 text-center">
          <Link
            to="/#blog"
            className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg 
            shadow-md transition duration-300 text-lg"
          >
            ← Back to Blogs
          </Link>
        </div>
      </div>
    </section>
  );
}
