import api from "../../../axios/axios";

export type ContactFormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const ContactFormApi = async (data: ContactFormData) => {
  const response = await api.post("/contact", data);

  return response;
};

export default ContactFormApi;