"use client";

import { useContactForm } from "./useContactForm";
import FormField from "./FormField";

const ContactForm = () => {
  const {
    form,
    errors,
    loading,
    success,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useContactForm();

  return (
    <div
      dir="rtl"
      className="
        order-2
        rounded-[18px]
        border
        border-[#eee]
        bg-white
        p-6
        shadow-[0_2px_20px_rgba(0,0,0,0.04)]
        md:p-7
        lg:p-8
      "
    >
      <div className="mb-6 text-right">
        <h3 className="text-lg font-bold text-[#24211f]">
          ارسال پیام
        </h3>

        <p className="mt-1 text-[13px] leading-6 text-[#999]">
          فرم زیر را پر کنید، در اسرع وقت پاسخ می‌دهیم.
        </p>
      </div>

      {success && (
        <div
          role="status"
          className="
            mb-5
            rounded-xl
            border
            border-green-200
            bg-green-50
            px-4
            py-3
            text-right
            text-[13px]
            font-medium
            leading-6
            text-green-700
          "
        >
          ✓ پیام شما با موفقیت ارسال شد. به‌زودی با شما تماس
          می‌گیریم.
        </div>
      )}

      <form
        className="space-y-5"
        onSubmit={handleSubmit}
        noValidate
      >
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <FormField
            id="name"
            name="name"
            label="نام و نام‌خانوادگی"
            required
            autoComplete="name"
            placeholder="علی احمدی"
            value={form.name}
            error={errors.name}
            disabled={loading}
            onChange={handleChange}
            onBlur={handleBlur}
          />

          <FormField
            id="email"
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            dir="ltr"
            align="left"
            label="ایمیل"
            required
            placeholder="ali@example.com"
            value={form.email}
            error={errors.email}
            disabled={loading}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>

        <FormField
          id="subject"
          name="subject"
          label="موضوع"
          required
          placeholder="سوال درباره محصول..."
          value={form.subject}
          error={errors.subject}
          disabled={loading}
          onChange={handleChange}
          onBlur={handleBlur}
        />

        <FormField
          as="textarea"
          id="message"
          name="message"
          label="پیام"
          required
          placeholder="پیام خود را اینجا بنویسید..."
          value={form.message}
          error={errors.message}
          disabled={loading}
          onChange={handleChange}
          onBlur={handleBlur}
        />

        <button
          type="submit"
          disabled={loading}
          className="
            flex
            h-[52px]
            w-full
            items-center
            justify-center
            gap-2
            rounded-xl
            bg-[#24211f]
            text-base
            font-semibold
            text-white
            transition-all
            duration-300
            hover:bg-[#111]
            hover:shadow-[0_8px_20px_rgba(36,33,31,0.25)]
            active:scale-[0.98]
            focus:outline-none
            focus:ring-4
            focus:ring-[#24211f]/20
            disabled:cursor-not-allowed
            disabled:opacity-70
          "
        >
          {loading ? (
            <>
              <span
                className="
                  h-4
                  w-4
                  animate-spin
                  rounded-full
                  border-2
                  border-white/30
                  border-t-white
                "
              />

              در حال ارسال...
            </>
          ) : (
            "ارسال پیام"
          )}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;