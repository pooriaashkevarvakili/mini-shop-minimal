const ContactHero = () => {
  return (
    <section className="border-b border-[#f1f1f1] px-6 py-10 md:px-[8%] md:py-12">
      <div className="ml-auto max-w-[540px] text-right">
        <p className="mb-3 text-[13px] text-[#999]">تماس با ما</p>

        <h1 className="text-[38px] font-extrabold leading-[1.15] text-[#171717] md:text-[48px]">
          خوشحال می‌شویم
        </h1>

        <h2 className="mb-5 text-[36px] font-extrabold leading-[1.15] text-[#aaa] md:text-[44px]">
          بشنویم<span className="text-[#171717]">.</span>
        </h2>

        <p className="text-[14px] leading-8 text-[#777] md:text-[15px]">
          سوال دارید؟ پیشنهاد دارید؟ یا فقط می‌خواهید سلام بدهید؟
          <br />
          پیام‌تان را بفرستید.
        </p>
      </div>
    </section>
  );
};

export default ContactHero;