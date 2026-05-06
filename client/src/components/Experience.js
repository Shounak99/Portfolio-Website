import React from "react";
import PageTransition from "./PageTransition";
function Experience() {
  const [experience, setExperience] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/api/experience`)
      .then((response) => response.json())
      .then((data) => {
        setExperience(data);
        setLoading(false);
      })

      .catch((error) => {
        console.error("Error fetching experience:", error);
        setLoading(false);
      });
  }, []);
  if (loading)
    return <p className="text-[#a0a0a0] text-center py-32">Loading...</p>;
  return (
    <PageTransition>
      <section className="max-w-4xl mx-auto py-16 px-4 md:px-8">
        <p className="text-[#e05c3a] text-xs tracking-widest uppercase mb-4">
          EXPERIENCE
        </p>
        <h2 className="text-3xl font-bold text-white mb-8">Work Experience</h2>
        <div className="space-y-6">
          {experience.map((job, index) => (
            <div
              key={index}
              className="bg-[#1a1a1a] border border-[#2a2a2a] rounded p-6"
            >
              <h3 className="text-xl font-bold text-white">{job.company}</h3>
              <p className="text-[#a0a0a0] text-sm mb-4">
                {job.type} · {job.location}
              </p>
              {job.roles.map((role, i) => (
                <div key={i} className="flex justify-between mb-1">
                  <span className="text-white text-sm">{role.title}</span>
                  <span className="text-[#e05c3a] text-xs">
                    {role.from} - {role.to}
                  </span>
                </div>
              ))}
              {job.description && (
                <p className="text-[#a0a0a0] text-sm mt-4">{job.description}</p>
              )}
            </div>
          ))}
        </div>
      </section>
    </PageTransition>
  );
}
export default Experience;
