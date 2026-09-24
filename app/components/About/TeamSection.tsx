import React from 'react';
import Sara from '../../../public/sara.avif'
import Image, { StaticImageData } from "next/image";
import Reza from '../../../public/rezaa.avif'
import Nilufar from '../../../public/nilufarr.avif'
interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string|StaticImageData;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'نیلوفر احمدی',
    role: 'مسئول تجربه کاربری',
    image:Nilufar  },
  {
    id: 2,
    name: 'رضا کریمی',
    role: 'طراح محصول',
    image:Reza  },
  {
    id: 3,
    name: 'سارا موسوی',
    role: 'بنیان‌گذار و مدیر',
    image:Sara  },
];

const TeamSection: React.FC = () => {
  return (
    <section
      className="w-full bg-[#fafafa] py-16 px-4"
      dir="rtl"
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-right mb-14">
          <span className="text-gray-400 text-sm font-medium mb-2 block">
            تیم
          </span>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-0">
            افرادی که پشت این کار هستند
          </h2>
        </div>

        {/* Team Members */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 md:gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="flex flex-col items-center text-center group"
            >
              {/* Avatar */}
              <div className="relative mb-5">
                <div className="w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden ring-4 ring-white shadow-md transition-transform duration-300 group-hover:scale-105">
                  <Image
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Name */}
              <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-1">
                {member.name}
              </h3>

              {/* Role */}
              <span className="text-gray-500 text-sm">
                {member.role}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;