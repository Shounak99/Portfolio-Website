import React, { useState, useEffect } from "react";
function Education() {
  const [education, setEducation] = useState([]);
  const [loading, setLoading] = useState(true);
  React.useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/api/education`)
      .then((response) => response.json())
      .then((data) => {
        setEducation(data);
        setLoading(false);
      });
  }, []);
  if (loading) {
    return <p className="text-[#a0a0a0] text-center py-32">Loading...</p>;
  }
  return (
    <section className="max-w-4xl mx-auto py-16 px-4 md:px-8">
      <p className="text-[#e05c3a] text-xs tracking-widest uppercase mb-4">
        EDUCATION
      </p>
      <h2 className="text-3xl font-bold text-white mb-8">
        Academic Background
      </h2>
      <div className="space-y-6">
        {education.map((edu, index) => (
          <div
            key={index}
            className="bg-[#1a1a1a] border border-[#2a2a2a] rounded p-6"
          >
            <h3 className="text-xl font-bold text-white">{edu.institution}</h3>
            <p className="text-[#a0a0a0] text-sm mb-4">{edu.degree}</p>
            <div className="flex justify-between mb-1">
              <span className="bg-[#e05c3a] bg-opacity-10 border border-[#e05c3a] text-[#e05c3a] text-xs px-3 py-1 rounded-full font-semibold">
                {edu.grade}
              </span>
              <span className="text-[#e05c3a] text-xs">
                {edu.from} - {edu.to}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;
