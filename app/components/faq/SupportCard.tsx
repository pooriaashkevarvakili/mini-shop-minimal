
import React from 'react';
import { Button } from 'antd';
import Link from 'next/link';

const SupportCard: React.FC = () => {
  return (
    <div className="flex justify-center items-center  bg-gray-50 p-4">
      <div className="bg-gray-100 rounded-2xl px-10 py-12 max-w-md w-full text-center shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-3 leading-relaxed">
          هنوز پاسختان را پیدا نکردید؟
        </h2>

        <p className="text-gray-500 text-sm mb-8 leading-relaxed">
          تیم پشتیبانی در روزهای کاری کنار شماست.
        </p>

    <Link
          href="/contact"
          className="inline-flex items-center justify-center bg-gray-900 border border-gray-900 hover:bg-gray-800 hover:border-gray-800 text-white rounded-full px-8 h-11 font-medium transition-colors"
        >
          تماس با ما
        </Link>
      </div>
    </div>
  );
};

export default SupportCard;