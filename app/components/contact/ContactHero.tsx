const ContactHero = () => {
  return (
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
  );
};

export default ContactHero;