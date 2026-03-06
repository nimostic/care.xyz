export default function HowItWorks() {
  const steps = [
    {
      title: "Search Caregiver",
      desc: "Find verified caregivers near your location based on your needs.",
    },
    {
      title: "Book Service",
      desc: "Choose time, date, and caregiving service easily.",
    },
    {
      title: "Receive Care",
      desc: "Your loved one receives professional and trusted care.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold text-gray-900">
            How Care.xyz Works
          </h2>
          <p className="mt-4 text-gray-600">
            Booking care services takes just a few simple steps.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {steps.map((step, i) => (
            <div key={i} className="text-center">

              <div className="w-14 h-14 mx-auto rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold mb-4">
                {i + 1}
              </div>

              <h3 className="font-semibold text-gray-900 text-lg">
                {step.title}
              </h3>

              <p className="text-gray-600 mt-2 text-sm">
                {step.desc}
              </p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}