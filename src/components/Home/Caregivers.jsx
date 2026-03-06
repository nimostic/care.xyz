export default function Caregivers() {
  const caregivers = [
    { name: "Sarah Ahmed", role: "Babysitter", rating: "4.9" },
    { name: "Rahim Uddin", role: "Elderly Care", rating: "4.8" },
    { name: "Fatema Noor", role: "Patient Care", rating: "4.7" },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">
            Featured Caregivers
          </h2>
          <p className="text-gray-600 mt-3">
            Meet some of our trusted and experienced caregivers.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {caregivers.map((caregiver, i) => (
            <div
              key={i}
              className="bg-white border rounded-xl p-6 text-center shadow-sm hover:shadow-md transition"
            >

              <div className="w-16 h-16 rounded-full bg-gray-200 mx-auto mb-4"></div>

              <h3 className="font-semibold text-gray-900">
                {caregiver.name}
              </h3>

              <p className="text-sm text-gray-500">
                {caregiver.role}
              </p>

              <p className="text-yellow-500 mt-2">
                ⭐ {caregiver.rating}
              </p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}