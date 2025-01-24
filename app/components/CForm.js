"use client";
import { useState } from "react";
import { collection, addDoc } from "firebase/firestore"; // Firestore imports
import Swal from "sweetalert2";
import { db } from "../firebase"; // Your Firebase configuration
import { Mail } from "lucide-react";

export default function CForm() {
  const [name, setName] = useState(""); // Name input
  const [phone, setPhone] = useState(""); // Phone input
  const [email, setEmail] = useState(""); // Email input

  const validateForm = () => {
    // Check if fields are filled
    if (!name || !phone || !email) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "All fields are required!",
      });
      return false;
    }

    // Validate phone number (10 digits)
    if (phone.length !== 10 || isNaN(phone)) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Phone number must be exactly 10 digits!",
      });
      return false;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Please enter a valid email address!",
      });
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return; // If validation fails, stop execution

    // Prepare data for Firestore
    const requestData = {
      name,
      phone,
      email,
      timestamp: new Date(), // Add a timestamp
    };

    try {
      // Save data to Firestore
      await addDoc(collection(db, "callbacks"), requestData);

      // Show success alert
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Your request has been submitted successfully!",
      });

      // Reset form fields
      setName("");
      setPhone("");
      setEmail("");
    } catch (error) {
      // Show error alert
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Something went wrong. Please try again later.",
      });
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full md:mx-14 bg-white border-4 border-lightOrange p-6 rounded-lg shadow-lg flex flex-col items-center font-Helvetica"
    >
      <h2 className="text-4xl font-Helvetica font-bold mb-4 text-gray-800">Get expert help</h2>

      {/* Name Input */}
      <div className="mb-4 w-full">
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          className="w-full p-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-lightOrange"
          required
        />
      </div>

      {/* Phone Input */}
      <div className="mb-4 w-full flex items-center">
        <span className="p-3 bg-gray-100 border border-r-0 rounded-l-md text-gray-600">
          +91
        </span>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Enter your Mobile no"
          className="w-full p-3 border rounded-r-md shadow-sm focus:outline-none focus:ring-2 focus:ring-lightOrange"
          required
        />
      </div>

      {/* Email Input */}
      <div className="mb-4 w-full flex items-center">
        <span className="p-3 bg-gray-100 border border-r-0 rounded-l-md text-gray-600">
          <Mail />
        </span>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email address"
          className="w-full p-3 border rounded-r-md shadow-sm focus:outline-none focus:ring-2 focus:ring-lightOrange"
          required
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-gradient-to-r from-[#FC8E06] to-[#FEBC3E] text-white py-3 rounded-md hover:bg-orange-500 transition-colors"
      >
        Request a call back
      </button>
    </form>
  );
}
