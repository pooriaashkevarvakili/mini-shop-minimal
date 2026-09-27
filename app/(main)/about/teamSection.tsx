import { teamSection } from "./ts/teamSection";

export default async function TeamSectionFront() {
  const response = await teamSection();


  const teamMembers = response.data ?? [];


  return (
    <section
      className="w-full bg-[#fafafa] py-16 px-4"
      dir="rtl"
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-right mb-14">
          <span className="text-gray-400 text-sm font-medium mb-2 block">
            تیم
          </span>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            افرادی که پشت این کار هستند
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 md:gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="flex flex-col items-center text-center group"
            >
              <div className="relative mb-5">
                <div className="w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden ring-4 ring-white shadow-md transition-transform duration-300 group-hover:scale-105">
                  <img
                    src={member.img}
                    alt={member.name ?? "عضو تیم"}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-1">
                {member.name ?? "بدون نام"}
              </h3>

              <span className="text-gray-500 text-sm">
                {member.role ?? "عضو تیم"}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}