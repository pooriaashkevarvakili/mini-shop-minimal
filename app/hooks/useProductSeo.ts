"use client";

import { useEffect } from "react";

type Product = {
  name: string;
  description?: string;
  category: string;
  image: string | { src: string };
};

export function useProductSeo(product: Product | undefined) {
  useEffect(() => {
    if (!product) {
      document.title = "محصول یافت نشد | فروشگاه";
      return;
    }

    const imageSrc =
      typeof product.image === "string" ? product.image : product.image.src;

    const title = `${product.name} | فروشگاه`;
    const description =
      product.description ||
      `خرید ${product.name} با بهترین قیمت و ارسال سریع`;

    document.title = title;

    const setMeta = (
      attr: "name" | "property",
      key: string,
      content: string
    ) => {
      let el = document.head.querySelector<HTMLMetaElement>(
        `meta[${attr}="${key}"]`
      );
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    const setLink = (rel: string, href: string) => {
      let el = document.head.querySelector<HTMLLinkElement>(
        `link[rel="${rel}"]`
      );
      if (!el) {
        el = document.createElement("link");
        el.setAttribute("rel", rel);
        document.head.appendChild(el);
      }
      el.setAttribute("href", href);
    };

    setMeta("name", "description", description);
    setMeta(
      "name",
      "keywords",
      `${product.name}, ${product.category}, خرید, فروشگاه, آنلاین`
    );
    setMeta("name", "robots", "index, follow");

    setMeta("property", "og:title", product.name);
    setMeta("property", "og:description", description);
    setMeta("property", "og:image", imageSrc);
    setMeta("property", "og:type", "website");
    setMeta("property", "og:locale", "fa_IR");
    setMeta("property", "og:url", window.location.href);

    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", product.name);
    setMeta("name", "twitter:description", description);
    setMeta("name", "twitter:image", imageSrc);

    setLink("canonical", window.location.href);
  }, [product]);
}