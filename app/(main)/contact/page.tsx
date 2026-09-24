
import {
  FiMail,
  FiMapPin,
  FiPhone,
  FiClock,
} from "react-icons/fi";

const Contact = () => {
  return (
    <main
      dir="rtl"
      className="min-h-screen bg-white font-sans text-[#222]"
    >
      <section className="border-b border-[#f1f1f1] px-6 py-8 md:px-[8%]">
        <div className="ml-auto max-w-[540px] text-right">
          <h1 className="text-[38px] font-extrabold leading-tight text-[#171717] md:text-[48px]">
            خوشحال می‌شویم
          </h1>

          <h2 className="mb-4 text-[36px] font-extrabold leading-tight text-[#aaa] md:text-[44px]">
            <span className="ml-2">•</span>
            بشنویم
          </h2>

          <p className="text-[14px] leading-8 text-[#777] md:text-[15px]">
            سوال دارید؟ پیشنهاد دارید؟ یا فقط می‌خواهید سلام بدهید؟
            پیام‌تان را بفرستید.
          </p>
        </div>
      </section>

      <section className="min-h-[calc(100vh-253px)] bg-[#fafafa] px-6 py-12 md:px-[9%] md:py-[65px]">
        <div
          className="
            mx-auto
            grid
            max-w-[880px]
            grid-cols-1
            items-start
            gap-12
            md:grid-cols-[360px_1fr]
            md:gap-[65px]
          "
        >
          
          <div className="order-1 space-y-7 md:order-1">
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
              <span dir="ltr">۰۲۱-۱۲۳۴۵۶۷۸</span>
            </ContactItem>

            <ContactItem
              icon={<FiMail size={20} strokeWidth={1.8} />}
              title="ایمیل"
            >
              <span dir="ltr">hello@minimalshop.ir</span>
            </ContactItem>

            <ContactItem
              icon={<FiClock size={20} strokeWidth={1.8} />}
              title="ساعات کاری"
            >
              شنبه تا پنجشنبه، ۹ تا ۱۸
            </ContactItem>
          </div>

        
          <div className="order-2 rounded-[15px] bg-white p-6 md:order-2 md:p-8">
            <form className="space-y-0">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-right text-[13px] font-medium text-[#555]">
                    نام و نام‌خانوادگی <span>*</span>
                  </label>

                  <input
                    type="text"
                    placeholder="علی احمدی"
                    className="
                      h-[46px]
                      w-full
                      rounded-xl
                      border
                      border-[#ddd]
                      bg-white
                      px-4
                      text-right
                      text-sm
                      outline-none
                      transition
                      placeholder:text-[#aaa]
                      focus:border-[#999]
                      focus:ring-2
                      focus:ring-black/5
                    "
                  />
                </div>

                <div>
                  <label className="mb-2 block text-right text-[13px] font-medium text-[#555]">
                    ایمیل <span>*</span>
                  </label>

                  <input
                    type="email"
                    dir="ltr"
                    placeholder="ali@example.com"
                    className="
                      h-[46px]
                      w-full
                      rounded-xl
                      border
                      border-[#ddd]
                      bg-white
                      px-4
                      text-left
                      text-sm
                      outline-none
                      transition
                      placeholder:text-[#aaa]
                      focus:border-[#999]
                      focus:ring-2
                      focus:ring-black/5
                    "
                  />
                </div>
              </div>

              <div className="mt-5">
                <label className="mb-2 block text-right text-[13px] font-medium text-[#555]">
                  موضوع
                </label>

                <input
                  type="text"
                  placeholder="سوال درباره محصول..."
                  className="
                    h-[46px]
                    w-full
                    rounded-xl
                    border
                    border-[#ddd]
                    bg-white
                    px-4
                    text-right
                    text-sm
                    outline-none
                    transition
                    placeholder:text-[#aaa]
                    focus:border-[#999]
                    focus:ring-2
                    focus:ring-black/5
                  "
                />
              </div>

              <div className="mt-5">
                <label className="mb-2 block text-right text-[13px] font-medium text-[#555]">
                  پیام <span>*</span>
                </label>

                <textarea
                  placeholder="پیام خود را اینجا بنویسید..."
                  className="
                    h-[126px]
                    w-full
                    resize-none
                    rounded-xl
                    border
                    border-[#ddd]
                    bg-white
                    px-4
                    py-3
                    text-right
                    text-sm
                    outline-none
                    transition
                    placeholder:text-[#aaa]
                    focus:border-[#999]
                    focus:ring-2
                    focus:ring-black/5
                  "
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="
                  mt-7
                  h-[52px]
                  w-full
                  rounded-xl
                  bg-[#24211f]
                  text-base
                  font-semibold
                  text-white
                  transition
                  hover:bg-[#111]
                  active:scale-[0.99]
                "
              >
                ارسال پیام
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

interface ContactItemProps {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}

const ContactItem = ({
  icon,
  title,
  children,
}: ContactItemProps) => {
  return (
    <div className="flex w-full items-start gap-4">
      <div
        className="
          flex
          h-10
          w-10
          shrink-0
          items-center
          justify-center
          rounded-xl
          bg-[#f5f5f5]
          text-[#555]
        "
      >
        {icon}
      </div>

      <div className="min-w-0 flex-1 pt-0.5 text-right">
        <p className="mb-1 text-[12px] text-[#aaa]">
          {title}
        </p>

        <div className="break-words text-[14px] font-medium leading-7 text-[#333]">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Contact;
