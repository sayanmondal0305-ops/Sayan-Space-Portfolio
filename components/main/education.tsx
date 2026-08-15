import { EDUCATION } from "@/constants";

export const Education = () => {
  return (
    <section
      id="education"
      className="flex flex-col items-center justify-center py-20"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        Education
      </h1>
      <div className="h-full w-full grid grid-cols-1 md:grid-cols-2 gap-10 px-10 max-w-[1100px]">
        {EDUCATION.map((edu) => (
          <div
            key={edu.title}
            className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] bg-[#03001427] backdrop-blur-sm p-6"
          >
            <div className="flex flex-row items-center justify-between gap-2">
              <h2 className="text-xl font-semibold text-white">{edu.title}</h2>
              <span className="Welcome-box px-[10px] py-[4px] border border-[#7042f88b] text-[12px] whitespace-nowrap">
                <span className="Welcome-text">{edu.years}</span>
              </span>
            </div>
            <p className="mt-2 text-sm text-[#b49bff]">{edu.institution}</p>
            <p className="mt-3 text-gray-300">{edu.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
