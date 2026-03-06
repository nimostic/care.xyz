export default function Testimonials() {
  const reviews = [
    {
      name: "Ayesha Rahman",
      text: "Care.xyz helped me find a reliable babysitter within minutes.",
    },
    {
      name: "Mahmud Hasan",
      text: "Great platform for elderly care. The caregiver was very professional.",
    },
    {
      name: "Nusrat Jahan",
      text: "Easy booking and trustworthy service. Highly recommended.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">
            What Families Say
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <div
              key={i}
              className="border rounded-xl p-6 bg-gray-50"
            >
              <p className="text-gray-600 text-sm">
                &quot;{review.text}&quot;
              </p>

              <p className="mt-4 font-semibold text-gray-900">
                {review.name}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}