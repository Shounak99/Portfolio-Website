import { useState } from "react";
import { useEffect } from "react";

function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [selectedBlog, setSelectedBlog] = useState(null);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/api/blogs`)
      .then((res) => res.json())
      .then((data) => setBlogs(data))
      .catch((error) => console.log("Error fetching blogs:", error));
  }, []);

  if (selectedBlog) {
    return (
      <section className="max-w-2xl mx-auto py-16 px-4 md:px-8">
        <button
          className="border border-[#e05c3a] text-[#e05c3a] hover:bg-[#e05c3a] hover:text-black px-6 py-2 text-sm tracking-widest uppercase transition-all duration-300 mt-4"
          onClick={() => setSelectedBlog(null)}
        >
          Back
        </button>
        <h2 className="text-2xl font-bold text-white mb-4">
          {selectedBlog.title}
        </h2>
        <p className="text-[#a0a0a0] leading-relaxed">{selectedBlog.content}</p>
      </section>
    );
  }
  return (
    <section className="max-w-2xl mx-auto py-16 px-4 md:px-8">
      <h2 className="text-2xl font-bold text-white mb-4">Blog</h2>
      {blogs.map((blog) => (
        <div
          className="bg-[#1a1a1a] border border-[#2a2a2a] hover:border-[#e05c3a] transition-all duration-300 rounded-lg p-6 mb-4 cursor-pointer"
          key={blog.id}
          onClick={() => setSelectedBlog(blog)}
        >
          <h3 className="text-3xl font-bold text-white mb-6">{blog.title}</h3>
        </div>
      ))}
    </section>
  );
}
export default Blog;
