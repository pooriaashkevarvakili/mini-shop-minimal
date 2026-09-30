"use client";

import React from "react";

interface AlertMessageProps {
  type: "error" | "success";
  message: string;
}

const AlertMessage: React.FC<AlertMessageProps> = ({
  type,
  message,
}) => {
  if (!message) return null;

  const styles =
    type === "error"
      ? {
          container: "border-red-200 bg-red-50",
          text: "text-red-600",
        }
      : {
          container: "border-green-200 bg-green-50",
          text: "text-green-600",
        };

  return (
    <div
      className={`mb-5 rounded-xl border px-4 py-3 ${styles.container}`}
    >
      <p className={`text-sm text-center ${styles.text}`}>
        {message}
      </p>
    </div>
  );
};

export default AlertMessage;