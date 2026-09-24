'use client'
import React from "react";
import { Button } from "antd";

const MembershipBanner: React.FC = () => {
  const handleRegister = () => {
    console.log("Register clicked");
    
  };

  return (
    <section
      dir="rtl"
      className="w-full bg-white px-4 py-10 sm:px-6 lg:px-8"
    >
      <div className="mx-auto w-full max-w-[1152px]">
        <div
          className="
            flex
            min-h-[292px]
            w-full
            flex-col
            items-center
            justify-center
            rounded-[23px]
            bg-[#24211f]
            px-6
            py-10
            text-center
            sm:px-10
            md:px-16
          "
        >
          <h2
            className="
              m-0
              text-[25px]
              font-bold
              leading-[1.8]
              text-white
              sm:text-[27px]
              md:text-[29px]
            "
          >
            عضو خانواده مینیمال شاپ شوید
          </h2>

          <p
            className="
              mt-2
              max-w-[520px]
              text-[14px]
              font-normal
              leading-7
              text-[#a9a5a2]
              sm:text-[15px]
            "
          >
            با ثبت‌نام از تخفیف‌های ویژه و اطلاع‌رسانی محصولات جدید مطلع
            شوید.
          </p>

          <Button
            type="default"
            onClick={handleRegister}
            className="
              mt-7
              !h-[48px]
              !min-w-[150px]
              !rounded-[12px]
              !border-0
              !bg-white
              !px-7
              !text-[15px]
              !font-bold
              !text-[#24211f]
              shadow-none
              transition-all
              duration-200
              hover:!bg-[#f1f1f1]
              hover:!text-[#24211f]
              active:!bg-[#e7e7e7]
            "
          >
            ثبت‌نام رایگان
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MembershipBanner;