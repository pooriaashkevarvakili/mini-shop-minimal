import {
  FiMail,
  FiMapPin,
  FiPhone,
  FiClock,
} from "react-icons/fi";

import ContactItem from "./ContactItem";

const ContactInfo = () => {
  return (
    <div
      className="
        rounded-[18px]
        border
        border-[#eee]
        bg-white
        p-5
        shadow-[0_2px_20px_rgba(0,0,0,0.04)]
        md:p-6
      "
    >
      {/* Header */}
      <div className="mb-5 text-right">
        <h3 className="text-lg font-bold text-[#24211f]">
          اطلاعات تماس
        </h3>

        <p className="mt-1 text-[13px] leading-6 text-[#999]">
          از راه‌های زیر با ما در ارتباط باشید.
        </p>
      </div>

      {/* 4 Cards */}
      <div
        className="
          grid
          grid-cols-1
          gap-3
          sm:grid-cols-2
          lg:grid-cols-4
        "
      >
        <ContactItem
          icon={<FiMapPin size={18} strokeWidth={1.8} />}
          title="آدرس"
        >
          تهران، خیابان ولیعصر، پلاک ۱۲۳
        </ContactItem>

        <ContactItem
          icon={<FiPhone size={18} strokeWidth={1.8} />}
          title="تلفن"
        >
          <a
            href="tel:+982112345678"
            dir="ltr"
            className="inline-block transition-colors hover:text-black"
          >
            ۰۲۱-۱۲۳۴۵۶۷۸
          </a>
        </ContactItem>

        <ContactItem
          icon={<FiMail size={18} strokeWidth={1.8} />}
          title="ایمیل"
        >
          <a
            href="mailto:hello@minimalshop.ir"
            dir="ltr"
            className="inline-block transition-colors hover:text-black"
          >
            hello@minimalshop.ir
          </a>
        </ContactItem>

        <ContactItem
          icon={<FiClock size={18} strokeWidth={1.8} />}
          title="ساعات کاری"
        >
          شنبه تا پنجشنبه، ۹ تا ۱۸
        </ContactItem>
      </div>
    </div>
  );
};

export default ContactInfo;