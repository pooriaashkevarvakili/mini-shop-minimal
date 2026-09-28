import {
  FiMail,
  FiMapPin,
  FiPhone,
  FiClock,
} from "react-icons/fi";

import ContactItem from "../../components/contact/ContactItem";
import { ContactResponse,ContactList } from "./ts/contactCard";

export default async function ContactInfo() {
  const { data } = await ContactList();

  const contact = data?.[0];

  if (!contact) {
    return null;
  }

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
      <div className="mb-5 text-right">
        <h3 className="text-lg font-bold text-[#24211f]">
          اطلاعات تماس
        </h3>

        <p className="mt-1 text-[13px] leading-6 text-[#999]">
          از راه‌های زیر با ما در ارتباط باشید.
        </p>
      </div>

      <div
        className="
          grid
          grid-cols-1
          gap-3
          sm:grid-cols-2
          lg:grid-cols-4
        "
      >
        {/* آدرس */}
        {contact.address && (
          <ContactItem
            icon={
              <FiMapPin
                size={18}
                strokeWidth={1.8}
              />
            }
            title="آدرس"
          >
            {contact.address}
          </ContactItem>
        )}

        {contact.mobile && (
          <ContactItem
            icon={
              <FiPhone
                size={18}
                strokeWidth={1.8}
              />
            }
            title="تلفن"
          >
            <a
              href={`tel:${contact.mobile}`}
              dir="ltr"
              className="inline-block transition-colors hover:text-black"
            >
              {contact.mobile}
            </a>
          </ContactItem>
        )}

        {contact.email && (
          <ContactItem
            icon={
              <FiMail
                size={18}
                strokeWidth={1.8}
              />
            }
            title="ایمیل"
          >
            <a
              href={`mailto:${contact.email}`}
              dir="ltr"
              className="inline-block transition-colors hover:text-black"
            >
              {contact.email}
            </a>
          </ContactItem>
        )}

        {contact.time && (
          <ContactItem
            icon={
              <FiClock
                size={18}
                strokeWidth={1.8}
              />
            }
            title="ساعات کاری"
          >
            {contact.time}
          </ContactItem>
        )}
      </div>
    </div>
  );
}