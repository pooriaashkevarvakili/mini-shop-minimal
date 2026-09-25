import type { ReactNode } from "react";

interface ContactItemProps {
  icon: ReactNode;
  title: string;
  children: ReactNode;
}

const ContactItem = ({
  icon,
  title,
  children,
}: ContactItemProps) => {
  return (
    <div
      className="
        group
        flex
        w-full
        items-start
        gap-4
        rounded-2xl
        border
        border-transparent
        p-3
        transition-all
        duration-200
        hover:border-[#eee]
        hover:bg-[#fafafa]
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
          bg-[#f5f5f5]
          text-[#666]
          transition-all
          duration-200
          group-hover:bg-[#24211f]
          group-hover:text-white
        "
      >
        {icon}
      </div>

      <div className="min-w-0 flex-1 pt-1 text-right">
        <p className="mb-1 text-[12px] font-medium tracking-wide text-[#aaa]">
          {title}
        </p>

        <div className="break-words text-[14px] font-medium leading-7 text-[#333]">
          {children}
        </div>
      </div>
    </div>
  );
};

export default ContactItem;