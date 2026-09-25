"use client";

import { Button, Typography, Space, Divider } from "antd";
import { HomeOutlined, QuestionCircleOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";
import Link from "next/link";

const { Title, Text } = Typography;

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-[#fafafa] flex flex-col items-center justify-center relative overflow-hidden px-4">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0">
        <span className="text-[28vw] md:text-[320px] font-bold text-gray-200 leading-none tracking-tighter">
          404
        </span>
      </div>

      <div className="relative z-10 flex flex-col items-center text-center max-w-lg w-full">
        <div className="mb-10">
          <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center shadow-lg">
            <span className="text-white text-3xl font-medium select-none">م</span>
          </div>
        </div>

        <Title level={2} className="!mb-3 !text-gray-900 !font-bold">
          این صفحه پیدا نشد
        </Title>

        <Text className="text-gray-500 text-base leading-relaxed mb-10 block">
          صفحه‌ای که دنبالش می‌گردید وجود ندارد، حذف شده، یا
          <br />
          آدرسش تغییر کرده.
        </Text>

        <Space size="middle" className="mb-12">
          <Button
            size="large"
            className="!h-11 !px-6 !rounded-xl !border-gray-300 !text-gray-700 hover:!border-gray-400 hover:!text-gray-900"
            onClick={() => router.back()}
          >
            صفحه قبلی
          </Button>

          <Button
            type="primary"
            size="large"
            className="!h-11 !px-6 !rounded-xl !bg-black !border-black hover:!bg-gray-800 hover:!border-gray-800"
            icon={<HomeOutlined />}
            onClick={() => router.push("/")}
          >
            برگشت به خانه
          </Button>
        </Space>

        <div className="w-full max-w-xs">
          <Divider className="!my-6 !border-gray-200" />

          <Text className="text-gray-400 text-sm block mb-4">
            شاید دنبال اینا بودید؟
          </Text>

          <div className="flex flex-wrap justify-center gap-x-5 gap-y-2">
            <Link href="/" className="text-gray-600 hover:text-black transition-colors">
              خانه
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-black transition-colors">
              درباره ما
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-black transition-colors">
              تماس
            </Link>
           
          </div>
        </div>
      </div>

      <div className="fixed bottom-6 left-6 z-20">
        <Button
          type="primary"
          shape="circle"
          size="large"
          className="!bg-black !border-black hover:!bg-gray-800 shadow-lg"
          icon={<QuestionCircleOutlined className="text-lg" />}
          onClick={() => {
            alert("پشتیبانی / راهنما");
          }}
        />
      </div>
    </div>
  );
}