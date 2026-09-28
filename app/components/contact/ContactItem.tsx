import { ReactNode } from "react";

interface ContactItemProps {
  icon: ReactNode;
  title: string;
  children: ReactNode;
}

const ContactItem = ({ icon, title, children }: ContactItemProps) => {
  return (
    <div
      className="
        flex
        items-start
        gap-4
        rounded-2xl
        border
        border-[#eee]
        bg-white
        p-4
        shadow-[0_2px_15px_rgba(0,0,0,0.025)]
        transition-all
        duration-300
        hover:-translate-y-0.5
        hover:border-[#ddd]
        hover:shadow-[0_8px_25px_rgba(0,0,0,0.06)]
      "
    >
      <div
        className="
          flex
          h-11
          w-11
          shrink-0
          items-center
          justify-center
          rounded-xl
          bg-[#f7f7f7]
          text-[#24211f]
        "
      >
        {icon}
      </div>

      <div className="min-w-0 flex-1 text-right">
        <p className="mb-1 text-[12px] font-medium text-[#999]">
          {title}
        </p>

        <div className="text-[13px] font-medium leading-6 text-[#333]">
          {children}
        </div>
      </div>
    </div>
  );
};

export default ContactItem;