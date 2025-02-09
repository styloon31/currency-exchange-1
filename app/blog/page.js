"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

export default function BlogList() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "blogs"));
        const blogList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setBlogs(blogList);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading)
    return <p className="text-center text-gray-600 text-lg">Loading blogs...</p>;

  return (
    <div className="max-w-5xl mx-auto py-12 px-6 bg-gray-900 min-h-screen ">
      <h1 className="text-4xl font-extrabold text-cyan-400 mb-8 text-center uppercase tracking-wide">
        Blog Posts
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-700 hover:border-cyan-400 transition-all hover:shadow-cyan-500/50"
          >
            <h2 className="text-2xl font-semibold text-cyan-300">{blog.title}</h2>
            <p className="text-gray-400 mt-2 text-sm">By {blog.author}</p>
            <p className="text-gray-300 mt-4 line-clamp-3">
              {blog.content.substring(0, 120)}...
            </p>
            <Link href={`/blog/${blog.id}`}>
              <span className="inline-block mt-4 px-4 py-2 bg-cyan-500 text-gray-900 font-bold rounded-lg hover:bg-cyan-400 transition-all cursor-pointer">
                Read More
              </span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
