
import type { Metadata } from "next";

import ContactHero from "../../components/contact/ContactHero";
import ContactInfo from "../../components/contact/ContactInfo";
import ContactForm from "../../components/contact/ContactForm";

export const metadata: Metadata = {
  title: "تماس با ما | مینیمال شاپ",

  description:
    "برای پرسش، پیشنهاد یا دریافت اطلاعات بیشتر درباره محصولات مینیمال شاپ با ما در ارتباط باشید.",

  keywords: [
    "تماس با ما",
    "ارتباط با ما",
    "مینیمال شاپ",
    "پشتیبانی",
    "فروشگاه مینیمال",
  ],

  alternates: {
    canonical: "https://minimalshop.ir/contact",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  openGraph: {
    type: "website",
    locale: "fa_IR",
    url: "https://minimalshop.ir/contact",
    siteName: "مینیمال شاپ",
    title: "تماس با ما | مینیمال شاپ",
    description:
      "برای پرسش، پیشنهاد یا دریافت اطلاعات بیشتر درباره محصولات مینیمال شاپ با ما در ارتباط باشید.",
    images: [
      {
        url: "https://minimalshop.ir/images/og-contact.jpg",
        width: 1200,
        height: 630,
        alt: "تماس با مینیمال شاپ",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "تماس با ما | مینیمال شاپ",
    description:
      "برای پرسش، پیشنهاد یا دریافت اطلاعات بیشتر درباره محصولات مینیمال شاپ با ما در ارتباط باشید.",
    images: ["https://minimalshop.ir/images/og-contact.jpg"],
  },
};

const Contact = () => {
  return (
    <main
      dir="rtl"
      className="min-h-screen bg-white font-sans text-[#222]"
    >
      <ContactHero />

      <section
        className="
          bg-[#fafafa]
          px-4
          py-10
          sm:px-6
          md:px-8
          md:py-14
          lg:px-10
          xl:px-12
        "
      >
        <div className="mx-auto w-full max-w-[1600px]">
          {/* Contact Form */}
          <div className="w-full">
            <ContactForm />
          </div>

          {/* Contact Info */}
          <div className="mt-8 w-full md:mt-10">
            <ContactInfo />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
