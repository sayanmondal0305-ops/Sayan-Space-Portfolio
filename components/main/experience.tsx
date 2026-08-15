import { EXPERIENCE } from "@/constants";

export const Experience = () => {
  return (
    <section
      id="experience"
      className="flex flex-col items-center justify-center py-20"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        Experience
      </h1>
      <div className="w-full flex flex-col gap-10 px-10 max-w-[900px]">
        {EXPERIENCE.map((exp) => (
          <div
            key={exp.role}
            className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] bg-[#03001427] backdrop-blur-sm p-6"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
              <h2 className="text-2xl font-semibold text-white">{exp.role}</h2>
              <span className="Welcome-box px-[10px] py-[4px] border border-[#7042f88b] text-[12px]">
                <span className="Welcome-text">{exp.years}</span>
              </span>
            </div>
            {exp.sub && (
              <p className="mt-1 text-sm text-[#b49bff]">{exp.sub}</p>
            )}
            <ul className="mt-4 flex flex-col gap-2">
              {exp.points.map((point) => (
                <li key={point} className="text-gray-300 flex gap-2">
                  <span className="text-[#b49bff] mt-1 select-none">▸</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};
