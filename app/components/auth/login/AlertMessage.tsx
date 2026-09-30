interface AlertMessageProps {
  type: "error" | "success";
  message: string;
}

export default function AlertMessage({ type, message }: AlertMessageProps) {
  const styles =
    type === "error"
      ? "bg-red-50 border-red-200 text-red-600"
      : "bg-green-50 border-green-200 text-green-600";

  return (
    <div className={`rounded-xl border text-sm p-3 ${styles}`}>
      {message}
    </div>
  );
}