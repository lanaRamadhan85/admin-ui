import React, { useState, useEffect } from "react";
import "./App.css";
import PostCard from "./PostCard";
import { getPosts } from "./Services";

function Exercise() {
  // useState untuk menyimpan data post yang diperoleh dari API
  const [posts, setPosts] = useState([]);

  // useEffect agar pengambilan data dilakukan ketika component pertama kali ditampilkan
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getPosts();
        if (data) {
          setPosts(data);
        }
      } catch (error) {
        console.error("[Component] Gagal menampilkan data post:", error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6 text-blue-600">
        Post Cards
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {posts.map((post) => (
          <PostCard key={post.id} title={post.title} body={post.body} />
        ))}
      </div>
    </div>
  );
}

export default Exercise;
