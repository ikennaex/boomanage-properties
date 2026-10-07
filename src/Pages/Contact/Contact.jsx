import React, { useState } from "react";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";

const Contact = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const sendEmail = async (e) => {
    e.preventDefault();

    setIsSubmitting(true);
    setSuccess(false);
    setError("");

    try {
      const response = await fetch(
        "https://formspree.io/f/meaeelbj",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: fullName,
            email: email,
            message: message,
          }),
        }
      );

      if (response.ok) {
        setSuccess(true);

        setFullName("");
        setEmail("");
        setMessage("");
      } else {
        setError(
          "Something went wrong. Please try again."
        );
      }
    } catch (err) {
      console.error(err);

      setError(
        "Unable to send your message. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-[#f9fafb] py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <h2 className="text-4xl font-extrabold text-center text-customBlue mb-6">
          Contact Boomanage Properties
        </h2>

        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Reach out to our team of seasoned professionals for real estate
          consultations, project discussions, or general inquiries.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* Contact Information */}
          <div className="bg-white rounded-3xl shadow-lg p-8 space-y-6">

            <h3 className="text-2xl font-bold text-customBlue">
              Let’s Talk
            </h3>

            <p className="text-gray-700">
              Connect with us today and let our experts guide you through
              your real estate journey.
            </p>

            <div className="space-y-4 text-gray-800 text-[15px]">

              {/* Address */}
              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-customYellow text-xl" />
                <span>
                  Maryland Mall, Maryland, Lagos
                </span>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-customYellow text-xl" />

                <a
                  href="mailto:info@boomanageproperties.com"
                  className="hover:text-customBlue transition"
                >
                  info@boomanageproperties.com
                </a>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-customYellow text-xl" />

                <span>
                  +2348139096910, +2348123173582
                </span>
              </div>

            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-3xl shadow-lg p-8">

            <form
              onSubmit={sendEmail}
              className="space-y-6"
            >

              {/* Full Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="John Doe"
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-customYellow disabled:opacity-50"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-customYellow disabled:opacity-50"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>

                <textarea
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows="5"
                  placeholder="Tell us what you need help with..."
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-customYellow disabled:opacity-50"
                />
              </div>

              {/* Success Message */}
              {success && (
                <p className="text-sm font-medium text-green-600">
                  Your message has been sent successfully. We’ll get back
                  to you shortly.
                </p>
              )}

              {/* Error Message */}
              {error && (
                <p className="text-sm font-medium text-red-600">
                  {error}
                </p>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-customBlue text-white font-semibold px-6 py-3 rounded-xl hover:bg-[#033042] transition-all w-full disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>

            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;