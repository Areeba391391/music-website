"use client";
import React, { useState, FormEvent } from "react";
import { motion } from "motion/react";
import { AuroraBackground } from "@/components/ui/aurora-background";

function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Submitted:", { email, message });
  };

  return (
    <div className="min-h-screen relative  ">
      {/* Aurora Background */}
      <AuroraBackground>
        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="relative flex flex-col gap-4 items-center justify-center px-4 pt-34 pb-20"
        >
          <div className="max-w-2xl mx-auto p-6 relative z-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-lg">
            <h1 className="text-3xl  text-center font-bold mb-6 text-white drop-shadow-lg">
              Contact Us
            </h1>
            <p className="text-gray-200 text-center text-sm px-15 mb-8 leading-relaxed">
              We’re here to help with any questions about our courses, programs, or events.  
              Reach out and let us know how we can assist you on your musical journey.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4 px-15">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="rounded-lg border border-white/30 focus:ring-2 focus:ring-teal-400 w-full h-[40px] p-4 bg-white/10 text-white placeholder:text-gray-400 backdrop-blur-sm transition-all duration-300 focus:scale-[1.02]"
                required
              />
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Your message"
                className="rounded-lg border border-white/30 focus:ring-2 focus:ring-teal-400 w-full h-[60px] p-4 bg-white/10 text-white placeholder:text-gray-400 backdrop-blur-sm transition-all duration-300 focus:scale-[1.02]"
                rows={2}
                required
              ></textarea>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="px-7 py-2 rounded-lg bg-teal-500 text-white font-semibold shadow-md hover:shadow-teal-500/50 hover:scale-105 transition-transform duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      </AuroraBackground>
    </div>
  );
}

export default Contact;
