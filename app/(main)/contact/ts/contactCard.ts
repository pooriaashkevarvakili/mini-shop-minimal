import "server-only";

import { cacheLife, cacheTag } from "next/cache";
import { contactType } from "../type/ContactType";

export type ContactResponse = {
  message: string;
  data: contactType[];
};

export async function ContactList(): Promise<ContactResponse> {
  "use cache";

  cacheLife("hours");
  cacheTag("contact-section");

  const url = `${process.env.NEXT_PUBLIC_API_URL}/contact/contactFormList`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(
      `Failed to fetch contact section: ${response.status} ${response.statusText}`
    );
  }

  const data = (await response.json()) as ContactResponse;

  console.log("Contact API Response:", data);

  return data;
}