'use client';

import React, { useState } from 'react';
import { Form, Input, Button, Divider, message } from 'antd';
import { GoogleOutlined, LockOutlined, MailOutlined } from '@ant-design/icons';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const onFinish = async (values: { email: string; password: string }) => {
    setLoading(true);
    console.log('Login values:', values);

    // تست: هر ایمیل و رمزی وارد کنید – وارد می‌شوید!
    setTimeout(() => {
      message.success('ورود با موفقیت انجام شد!');
      setLoading(false);
      // بعد از لاگین موفق:
      // router.push('/dashboard');
    }, 800);
  };

  return (
    <div
      className="min-h-screen bg-[#fafafa] flex items-center justify-center p-4"
      dir="rtl"
    >
      <div className="w-full max-w-[420px]">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <div className="w-14 h-14 bg-black rounded-2xl flex items-center justify-center shadow-lg">
            <span className="text-white text-2xl font-bold">م</span>
          </div>
        </div>

        {/* Title */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">ورود به حساب</h1>
          <p className="text-gray-500 text-sm">خوش برگشتید !</p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          {/* Test Banner */}
          <div className="bg-amber-50 border border-amber-200 text-amber-700 text-sm rounded-xl px-4 py-3 mb-6 text-center">
            تست: هر ایمیل و رمزی وارد کنید – وارد می‌شوید!
          </div>

          <Form
            name="login"
            layout="vertical"
            onFinish={onFinish}
            requiredMark={false}
            size="large"
          >
            {/* Email */}
            <Form.Item
              name="email"
              label={<span className="text-gray-700 font-medium">ایمیل</span>}
              rules={[
                { required: true, message: 'لطفاً ایمیل را وارد کنید' },
                { type: 'email', message: 'ایمیل معتبر نیست' },
              ]}
            >
              <Input
                placeholder="ali@example.com"
                prefix={<MailOutlined className="text-gray-400" />}
                className="rounded-xl h-12"
              />
            </Form.Item>

            {/* Password */}
            <Form.Item
              name="password"
              label={
                <div className="flex justify-between w-full items-center">
                  <span className="text-gray-700 font-medium">رمز عبور</span>
                  <Link
                    href="/forgot-password"
                    className="text-sm text-gray-500 hover:text-black transition"
                  >
                    فراموشی رمز
                  </Link>
                </div>
              }
              rules={[{ required: true, message: 'لطفاً رمز عبور را وارد کنید' }]}
            >
              <Input.Password
                placeholder="••••••••"
                prefix={<LockOutlined className="text-gray-400" />}
                className="rounded-xl h-12"
              />
            </Form.Item>

            {/* Submit Button */}
            <Form.Item className="mb-6">
              <Button
                type="primary"
                htmlType="submit"
                loading={loading}
                block
                className="h-12 rounded-xl bg-black hover:!bg-gray-800 border-none font-medium text-base"
              >
                ورود
              </Button>
            </Form.Item>
          </Form>

          {/* Divider */}
          <Divider plain className="text-gray-400 text-sm my-6">
            یا ورود با
          </Divider>

          {/* Google Button */}
          <Button
            block
            size="large"
            icon={<GoogleOutlined style={{ fontSize: 18 }} />}
            className="h-12 rounded-xl border-gray-200 hover:border-gray-400 hover:bg-gray-50 flex items-center justify-center gap-2 font-medium"
            onClick={() => message.info('ورود با گوگل (دمو)')}
          >
            ورود با Google
          </Button>
        </div>

        {/* Sign up link */}
        <div className="text-center mt-8 text-sm text-gray-600">
          حساب ندارید؟{' '}
          <Link
            href="/signup"
            className="text-black font-medium hover:underline"
          >
            ثبت‌نام کنید
          </Link>
        </div>
      </div>
    </div>
  );
}