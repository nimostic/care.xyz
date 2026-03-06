export default function CTA() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-7xl mx-auto bg-teal-600 rounded-[3rem] p-12 text-center text-white relative overflow-hidden">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Experience Better Care?</h2>
        <p className="mb-10 opacity-90 text-lg">Join 2000+ families or start your career as a verified caregiver.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-teal-600 px-10 py-4 rounded-2xl font-bold hover:bg-slate-900 hover:text-white transition-all">Find a Caregiver</button>
          <button className="bg-teal-700 text-white px-10 py-4 rounded-2xl font-bold border border-teal-500 hover:bg-teal-800 transition-all">Join as Caregiver</button>
        </div>
      </div>
    </section>
  );
}