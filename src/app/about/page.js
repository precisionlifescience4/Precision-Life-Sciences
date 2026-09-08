'use client';
import { motion } from 'framer-motion';

export default function About() {
  const fadeUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
  };

  return (
    <main className="max-w-5xl mx-auto px-4 py-16">
      <motion.h1 {...fadeUp} className="text-4xl font-bold text-navy mb-6">
        About Precision Life Sciences
      </motion.h1>
      <motion.p {...fadeUp} transition={{ delay: 0.1 }} className="text-gray-600 mb-6 leading-relaxed">
        Precision Life Sciences is a life-sciences company focused on practical molecular diagnostics.
        Its flagship Mugen-Plex portfolio includes real-time PCR assays for HBV, HCV, HIV, Influenza A&B and CCHF.
        Capabilities include molecular assay development, diagnostic product development, laboratory implementation
        guidance, product support and local technical assistance.
      </motion.p>

      <motion.h2 {...fadeUp} className="text-2xl font-bold text-navy mt-10 mb-4">Why Choose Us</motion.h2>
      <div className="grid md:grid-cols-2 gap-4 text-gray-600">
        {[
          'A clear five-assay product portfolio',
          'Consistent kit presentation & colour coding',
          'Complete control sets',
          'Locally developed solutions',
          'Accessible technical support',
          'Collaboration with KMU, BQ Pharma & DGST',
        ].map((item, i) => (
          <motion.div
            key={item}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            whileHover={{ scale: 1.02 }}
            className="bg-graybg p-4 rounded-lg"
          >
            {item}
          </motion.div>
        ))}
      </div>

      <motion.h2 {...fadeUp} className="text-2xl font-bold text-navy mt-10 mb-4">Who We Serve</motion.h2>
      <motion.p {...fadeUp} className="text-gray-600 leading-relaxed">
        Clinical and research laboratories, hospitals, diagnostic centres, universities, public-health programmes,
        research institutes, distributors and outbreak-response organisations.
      </motion.p>

      <motion.div {...fadeUp} className="flex items-center gap-8 mt-12 flex-wrap opacity-80">
        <span className="text-sm text-gray-500">Developed with & Funded by:</span>
        <span className="font-bold text-navy">KMU</span>
        <span className="font-bold text-navy">BQ Pharma</span>
        <span className="font-bold text-navy">DGST</span>
      </motion.div>
    </main>
  );
}