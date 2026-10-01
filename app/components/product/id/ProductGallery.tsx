interface Props {
  src: string;
  alt: string;
  priority?: boolean;
}

export default function ProductGallery({
  src,
  alt,
  priority = false,
}: Props) {
  const imageSrc =
    src.startsWith("http://") ||
    src.startsWith("https://") ||
    src.startsWith("/")
      ? src
      : `/${src}`;

  return (
    <div className="sticky top-6">
      <div className="relative overflow-hidden rounded-3xl border border-gray-100 bg-white">
        <div className="relative aspect-square w-full">
          <img
            src={imageSrc}
            alt={alt}
            className="h-full w-full object-contain p-8 sm:p-12"
            loading={priority ? "eager" : "lazy"}
            decoding="async"
          />
        </div>
      </div>

      <p className="mt-3 text-center text-xs text-gray-400">
        تصویر محصول
      </p>
    </div>
  );
}