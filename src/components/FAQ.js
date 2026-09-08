'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    q: 'What is included in a Mugen-Plex kit?',
    a: 'Each Mugen-Plex kit includes PCR reagent, primer, a positive control and a negative control — a complete, ready-to-use presentation for real-time PCR testing.',
  },
  {
    q: 'Which assays are currently available?',
    a: 'Five real-time PCR assays: HBV, HCV, HIV, Influenza A&B, and CCHF — each colour-coded for easy identification while sharing the same kit structure.',
  },
  {
    q: 'Are these products approved for clinical diagnostic use?',
    a: 'Products are currently presented for research use only. Final regulatory wording and clinical-use approval will be confirmed and published once available.',
  },
  {
    q: 'Do you provide technical support for laboratories?',
    a: 'Yes — we offer laboratory implementation guidance, product support and local technical assistance for all Mugen-Plex assays.',
  },
  {
    q: 'How can I request pricing or place an order?',
    a: 'Reach out via the Contact page, WhatsApp, or email — our team will respond with pricing and ordering details for your laboratory.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section className="max-w-3xl mx-auto px-4 py-20">
      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="text-3xl font-extrabold text-navy text-center mb-10"
      >
        Frequently Asked Questions
      </motion.h2>

      <div className="space-y-3">
        {faqs.map((item, i) => (
          <motion.div
            key={item.q}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.5, ease: 'easeOut' }}
            className="border border-gray-200 rounded-xl overflow-hidden"
          >
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full flex justify-between items-center text-left px-5 py-4 font-semibold text-navy bg-graybg hover:bg-gray-100 transition-colors"
            >
              {item.q}
              <span className={`text-cyan text-xl transition-transform ${open === i ? 'rotate-45' : ''}`}>+</span>
            </button>
            <AnimatePresence>
              {open === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="px-5 py-4 text-gray-600 text-sm leading-relaxed">{item.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
}