import React from "react";

function Skills() {
  const [skillList, setSkillList] = React.useState([]);
  React.useEffect(() => {
    fetch("https://shounak-portfolio-backend.onrender.com/api/skills")
      .then((response) => response.json())
      .then((data) => setSkillList(data))
      .catch((error) => console.error("Error fetching skills:", error));
  }, []);
  return (
    <section className="max-w-4xl mx-auto py-16 px-8">
      <h2 className="text-3xl font-bold text-white mb-8">Skills</h2>
      <div className="flex flex-wrap gap-3 mt-4">
        {skillList.map((skill, index) => (
          <span
            className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm"
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
