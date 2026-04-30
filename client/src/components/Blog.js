import { useState } from "react";
import { useEffect } from "react";

function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [selectedBlog, setSelectedBlog] = useState(null);

  useEffect(() => {
    fetch("https://shounak-portfolio-backend.onrender.com/api/blogs")
      .then((res) => res.json())
      .then((data) => setBlogs(data))
      .catch((error) => console.log("Error fetching blogs:", error));
  }, []);

  if (selectedBlog) {
    return (
      <section className="max-w-2xl mx-auto py-16 px-8">
        <button
          className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => setSelectedBlog(null)}
        >
          Back
        </button>
        <h2 className="text-2xl font-bold text-white mb-4">
          {selectedBlog.title}
        </h2>
        <p className="text-gray-300">{selectedBlog.content}</p>
      </section>
    );
  }
  return (
    <section className="max-w-2xl mx-auto py-16 px-8">
      <h2 className="text-2xl font-bold text-white mb-4">Blog</h2>
      {blogs.map((blog) => (
        <div
          className="bg-gray-800 border border-gray-600 text-white rounded p-2 w-full mb-4 cursor-pointer hover:bg-gray-700"
          key={blog.id}
          onClick={() => setSelectedBlog(blog)}
        >
          <h3 className="text-xl font-bold text-white mb-2">{blog.title}</h3>
        </div>
      ))}
    </section>
  );
}
export default Blog;
