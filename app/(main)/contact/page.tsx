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
          <ContactInfo />
          <ContactForm />
        </div>
      </section>
    </main>
  );
};

export default Contact;