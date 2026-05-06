import React from "react";

function Skills() {
  const [skillList, setSkillList] = React.useState([]);
  React.useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/api/skills`)
      .then((response) => response.json())
      .then((data) => setSkillList(data))
      .catch((error) => console.error("Error fetching skills:", error));
  }, []);
  return (
    <section className="max-w-4xl mx-auto py-16 px-4 md:px-8">
      <p className="text-[#e05c3a] text-xs tracking-widest uppercase mb-4">
        EXPERTISE
      </p>
      <h2 className="text-3xl font-bold text-white mb-8">Skills</h2>
      <div className="flex flex-wrap gap-3 mt-4">
        {skillList.map((skill, index) => (
          <span
            className="bg-[#1a1a1a] border border-[#2a2a2a] hover:border-[#e05c3a] text-[#a0a0a0] px-4 md:px-8 py-2 rounded-full text-sm transition-all duration-3000"
            key={index}
          >
            <strong>{skill.name}:</strong> {skill.level}
          </span>
        ))}
      </div>
    </section>
  );
}
export default Skills;
