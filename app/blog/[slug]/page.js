"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase";

export default function BlogPage() {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;

    const fetchBlog = async () => {
      try {
        const docRef = doc(db, "blogs", slug);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setBlog(docSnap.data());
        } else {
          console.error("Blog not found!");
        }
      } catch (error) {
        console.error("Error fetching blog:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [slug]);

  if (loading) return <p className="text-center text-gray-600">Loading...</p>;
  if (!blog) return <p className="text-center text-red-500">Blog not found</p>;

  return (
    <div className="w-full mx-auto py-12 px-20 bg-white shadow-lg rounded-lg">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-4">{blog.title}</h1>
      <div className="prose prose-lg text-gray-700 leading-relaxed">{blog.content}</div>
      <div className="mt-6 flex flex-wrap gap-2">
        {blog.tags?.map((tag, index) => (
          <span key={index} className="bg-blue-100 text-blue-600 text-sm px-3 py-1 rounded-full">
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
}
