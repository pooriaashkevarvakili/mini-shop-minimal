import Link from "next/link";

type NavbarMobileProps = {
  closeMenu: () => void;
};

export default function NavbarMobile({
  closeMenu,
}: NavbarMobileProps) {
  return (
    <nav className="px-4 py-4 space-y-1">

      <Link
        href="/"
        onClick={closeMenu}
        className="block px-4 py-3 rounded-xl bg-gray-100 text-gray-900 font-medium"
      >
        خانه
      </Link>

      <Link
        href="/about"
        onClick={closeMenu}
        className="block px-4 py-3 rounded-xl text-gray-700 hover:bg-gray-50 font-medium transition-colors"
      >
        درباره ما
      </Link>

      <Link
        href="/contact"
        onClick={closeMenu}
        className="block px-4 py-3 rounded-xl text-gray-700 hover:bg-gray-50 font-medium transition-colors"
      >
        تماس
      </Link>

      <Link
        href="/faq"
        onClick={closeMenu}
        className="block px-4 py-3 rounded-xl text-gray-700 hover:bg-gray-50 font-medium transition-colors"
      >
        سوالات
      </Link>

      <Link
        href="/news"
        onClick={closeMenu}
        className="block px-4 py-3 rounded-xl text-gray-700 hover:bg-gray-50 font-medium transition-colors"
      >
        اخبار
      </Link>

      <Link
        href="/shop"
        onClick={closeMenu}
        className="block px-4 py-3 rounded-xl text-gray-700 hover:bg-gray-50 font-medium transition-colors"
      >
        فروشگاه
      </Link>

      <div className="border-t border-gray-100 my-3" />

      <div className="flex flex-col gap-2 pt-1">

        <Link
          href="/login"
          onClick={closeMenu}
          className="block text-center px-4 py-3 rounded-xl border border-gray-300 text-gray-800 font-medium hover:bg-gray-50 transition-colors"
        >
          ورود
        </Link>

        <Link
          href="/signup"
          onClick={closeMenu}
          className="block text-center px-4 py-3 rounded-xl bg-black text-white font-medium hover:bg-gray-800 transition-colors"
        >
          ثبت‌نام
        </Link>

      </div>
    </nav>
  );
}