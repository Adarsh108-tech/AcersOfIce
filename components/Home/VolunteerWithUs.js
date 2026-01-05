"use client";

import Image from "next/image";

export default function VolunteerWithUs() {
  return (
    <section className="w-full py-20 px-6 md:px-16 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">

        {/* Left Side - Image */}
        <div className="md:w-1/2 w-full">
          <Image
            src="/volunteers.jpeg" // replace with your image path
            alt="Volunteer With Us"
            width={600}
            height={400}
            className="rounded-xl shadow-lg object-cover w-full h-full"
          />
        </div>

        {/* Right Side - Text and Button */}
        <div className="md:w-1/2 w-full flex flex-col gap-6">
          <h2 className="text-3xl font-bold text-[#24A9FC]">
            Volunteer With Us: Be Part of the Change
          </h2>

          <p className="text-gray-800 text-lg">
            Are you passionate about climate action, community development, or the great outdoors? 
            Join us as a volunteer and become part of a growing movement bringing water security and 
            resilience to some of the most remote and awe-inspiring places on Earth.
          </p>

          <button className="bg-[#4CAF50] w-28 text-white font-semibold px-4 py-2 text-sm rounded-lg hover:bg-[#24A9FC] transition">
            Apply Now
          </button>
        </div>

      </div>
    </section>
  );
}
