import { Eye, Globe, ShieldCheck } from "lucide-react"; // Importing icons

export default function OurValues() {
  const values = [
    {
      icon: <Eye className="w-8 h-8 text-darkBlue" />, // Lucide-react icon
      title: "Illuminate Journeys with Trust and Transparency",
      description:
        "Striving for compliance with RBI guidelines, we illuminate the path of financial transactions with a beacon of transparency, ensuring every step is clear and secure.",
    },
    {
      icon: <Globe className="w-8 h-8 text-darkBlue" />, // Lucide-react icon
      title: "Bridge Dreams and Destinations Across the Globe",
      description:
        "With a global vision, we connect dreams to destinations, providing uncomplicated financial services that enable seamless international travels and studies.",
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-darkBlue" />, // Lucide-react icon
      title: "Craft Effortless Experiences: Seamless and Reliable",
      description:
        "Our commitment is to offer effortlessly smooth financial interactions. We strive to be the epitome of reliability, presenting a seamless experience that empowers and simplifies your monetary endeavors.",
    },
  ];

  return (
    <section className="w-screen h-fit md:h-dvh bg-white py-10 flex items-center justify-center">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <h2 className="text-3xl md:text-5xl font-bold font-Helvetica text-center mb-10">
          Our Values
        </h2>

        {/* Values Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-20">
          {values.map((value, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center text-center p-6 bg-white border border-blue-300 rounded-xl shadow shadow-black/30"
            >
              {/* Icon */}
              <div className="w-20 h-20 flex items-center justify-center rounded-full bg-gray-100 mb-4">
                {value.icon}
              </div>
              {/* Title */}
              <h3 className="text-3xl font-semibold text-gray-800 mb-3">
                {value.title}
              </h3>
              {/* Description */}
              <p className="text-gray-600 text-lg leading-relaxed mt-10">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
