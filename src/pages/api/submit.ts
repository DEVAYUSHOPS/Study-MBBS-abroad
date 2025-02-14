import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { name, email, phone, country } = req.body;

    if (!name || !email || !phone || !country) {
      return res.status(400).json({ error: "All fields are required" });
    }

    console.log("Form Data:", { name, email, phone, country });

    return res.status(200).json({ message: "Form submitted successfully" });
  }

  return res.status(405).json({ error: "Method Not Allowed" });
}
