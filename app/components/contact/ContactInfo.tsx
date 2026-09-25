import {
  FiMail,
  FiMapPin,
  FiPhone,
  FiClock,
} from "react-icons/fi";
import ContactItem from "./ContactItem";

const ContactInfo = () => {
  return (
    <div className="order-1 space-y-4 md:order-1">
      <div className="mb-6 text-right">
        <h3 className="text-lg font-bold text-[#24211f]">
          اطلاعات تماس
        </h3>
        <p className="mt-1 text-[13px] text-[#999]">
          از راه‌های زیر با ما در ارتباط باشید.
        </p>
      </div>

      <ContactItem
        icon={<FiMapPin size={20} strokeWidth={1.8} />}
        title="آدرس"
      >
        تهران، خیابان ولیعصر، پلاک ۱۲۳
      </ContactItem>

      <ContactItem
        icon={<FiPhone size={20} strokeWidth={1.8} />}
        title="تلفن"
      >
        <a
          href="tel:+982112345678"
          dir="ltr"
          className="inline-block transition-colors duration-200 hover:text-black"
        >
          ۰۲۱-۱۲۳۴۵۶۷۸
        </a>
      </ContactItem>

      <ContactItem
        icon={<FiMail size={20} strokeWidth={1.8} />}
        title="ایمیل"
      >
        <a
          href="mailto:hello@minimalshop.ir"
          dir="ltr"
          className="inline-block transition-colors duration-200 hover:text-black"
        >
          hello@minimalshop.ir
        </a>
      </ContactItem>

      <ContactItem
        icon={<FiClock size={20} strokeWidth={1.8} />}
        title="ساعات کاری"
      >
        شنبه تا پنجشنبه، ۹ تا ۱۸
      </ContactItem>
    </div>
  );
};

export default ContactInfo;