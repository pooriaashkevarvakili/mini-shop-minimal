"use client"
import React from 'react';
import { Form, Input, Button, Typography } from 'antd';
import {
  FiUser,
  FiMail,
  FiLock,
} from 'react-icons/fi';
import * as Yup from 'yup';
import { useFormik } from 'formik';

const { Title, Text, Link } = Typography;

const validationSchema = Yup.object({
  fullName: Yup.string()
    .min(3, 'نام باید حداقل ۳ کاراکتر باشد')
    .required('نام و نام خانوادگی الزامی است'),

  email: Yup.string()
    .email('ایمیل معتبر وارد کنید')
    .required('ایمیل الزامی است'),

  password: Yup.string()
    .min(6, 'رمز عبور باید حداقل ۶ کاراکتر باشد')
    .required('رمز عبور الزامی است'),

  confirmPassword: Yup.string()
    .oneOf(
      [Yup.ref('password')],
      'رمز عبور و تکرار آن یکسان نیستند'
    )
    .required('تکرار رمز عبور الزامی است'),
});

const SignupForm: React.FC = () => {
  const formik = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      password: '',
      confirmPassword: '',
    },

    validationSchema,

    onSubmit: async (values, { setSubmitting }) => {
      try {
        console.log('Form values:', values);

        // API call
        // await signup(values);

        alert('حساب کاربری با موفقیت ایجاد شد!');
      } catch (error) {
        console.error(error);
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <div
      dir="rtl"
      className="min-h-screen bg-[#fafafa] flex items-center justify-center p-4"
    >
      <div className="w-full max-w-md">

        {/* Logo */}
        <div className="flex justify-center mb-6">
          <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
            <span className="text-white text-xl font-bold">
              م
            </span>
          </div>
        </div>

        {/* Title */}
        <div className="text-center mb-8">
          <Title
            level={2}
            className="!mb-2 !text-gray-900"
          >
            ایجاد حساب
          </Title>

          <Text className="text-gray-500 text-sm">
            در چند ثانیه شروع کنید
          </Text>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">

          <Form
            layout="vertical"
            onFinish={() => formik.handleSubmit()}
          >

            {/* Full Name */}
            <Form.Item
              label={
                <span className="text-sm text-gray-600">
                  نام و نام خانوادگی
                </span>
              }
              validateStatus={
                formik.touched.fullName &&
                formik.errors.fullName
                  ? 'error'
                  : ''
              }
              help={
                formik.touched.fullName &&
                formik.errors.fullName
                  ? formik.errors.fullName
                  : null
              }
            >
              <Input
                name="fullName"
                size="large"
                placeholder="علی احمدی"
                value={formik.values.fullName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="rounded-xl"
                prefix={
                  <FiUser className="text-gray-400" size={18} />
                }
              />
            </Form.Item>

            {/* Email */}
            <Form.Item
              label={
                <span className="text-sm text-gray-600">
                  ایمیل
                </span>
              }
              validateStatus={
                formik.touched.email &&
                formik.errors.email
                  ? 'error'
                  : ''
              }
              help={
                formik.touched.email &&
                formik.errors.email
                  ? formik.errors.email
                  : null
              }
            >
              <Input
                name="email"
                type="email"
                size="large"
                placeholder="ali@example.com"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="rounded-xl"
                prefix={
                  <FiMail className="text-gray-400" size={18} />
                }
              />
            </Form.Item>

            {/* Password */}
            <Form.Item
              label={
                <span className="text-sm text-gray-600">
                  رمز عبور
                </span>
              }
              validateStatus={
                formik.touched.password &&
                formik.errors.password
                  ? 'error'
                  : ''
              }
              help={
                formik.touched.password &&
                formik.errors.password
                  ? formik.errors.password
                  : null
              }
            >
              <Input.Password
                name="password"
                size="large"
                placeholder="••••••••"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="rounded-xl"
                prefix={
                  <FiLock className="text-gray-400" size={18} />
                }
              />
            </Form.Item>

            {/* Confirm Password */}
            <Form.Item
              label={
                <span className="text-sm text-gray-600">
                  تکرار رمز عبور
                </span>
              }
              validateStatus={
                formik.touched.confirmPassword &&
                formik.errors.confirmPassword
                  ? 'error'
                  : ''
              }
              help={
                formik.touched.confirmPassword &&
                formik.errors.confirmPassword
                  ? formik.errors.confirmPassword
                  : null
              }
            >
              <Input.Password
                name="confirmPassword"
                size="large"
                placeholder="••••••••"
                value={formik.values.confirmPassword}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="rounded-xl"
                prefix={
                  <FiLock className="text-gray-400" size={18} />
                }
              />
            </Form.Item>

            {/* Submit Button */}
            <Form.Item className="mb-4">
              <Button
                type="primary"
                htmlType="submit"
                size="large"
                block
                loading={formik.isSubmitting}
                className="!bg-black hover:!bg-gray-800 !rounded-xl !h-12 !font-medium !border-none"
              >
                ایجاد حساب رایگان
              </Button>
            </Form.Item>

            {/* Terms */}
            <div className="text-center">
              <Text className="text-xs text-gray-400">
                با ثبت‌نام، شرایط استفاده را می‌پذیرید.
              </Text>
            </div>

          </Form>
        </div>

        {/* Login Link */}
        <div className="text-center mt-6">
          <Text className="text-sm text-gray-600">
            قبلاً ثبت‌نام کرده‌اید؟{' '}

            <Link
              href="/login"
              className="!text-black !font-medium"
            >
              وارد شوید
            </Link>
          </Text>
        </div>

      </div>
    </div>
  );
};

export default SignupForm;