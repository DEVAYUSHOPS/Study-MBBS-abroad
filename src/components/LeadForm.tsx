'use client'

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";

type FormData = {
  name: string;
  email: string;
  phone: string;
  country: string;
};

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  phone: yup.string().required("Phone number is required"),
  country: yup.string().required("Country preference is required"),
});

const LeadForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({ resolver: yupResolver(schema) });
  const [submitted, setSubmitted] = useState(false);



  const onSubmit = async (data: FormData) => {
    const response = await fetch("/api/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (response.ok) setSubmitted(true);
  };

  return (
    <section id="lead-form" className="py-10 px-6 bg-white shadow-md rounded max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-center mb-4">Get More Info</h2>
      {submitted ? (
        <p className="text-green-500">Thank you! We will contact you soon.</p>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <input className="w-full p-2 border" placeholder="Name" {...register("name")} />
          <p className="text-red-500">{errors.name?.message}</p>
          <input className="w-full p-2 border" placeholder="Email" {...register("email")} />
          <p className="text-red-500">{errors.email?.message}</p>
          <input className="w-full p-2 border" placeholder="Phone" {...register("phone")} />
          <p className="text-red-500">{errors.phone?.message}</p>
          <select className="w-full p-2 border" {...register("country")}>
            <option value="">Select a country</option>
            {["Russia", "Uzbekistan", "Kazakhstan", "Philippines", "Georgia", "Kyrgyzstan", "Egypt"].map(country => (
              <option key={country} value={country}>{country}</option>
            ))}
          </select>
          <p className="text-red-500">{errors.country?.message}</p>
          <button className="w-full p-2 bg-blue-600 text-white" type="submit">Submit</button>
        </form>
      )}
    </section>
  );
};

export default LeadForm;
