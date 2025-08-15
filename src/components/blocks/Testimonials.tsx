"use client";

import React from 'react'
import { motion } from 'framer-motion'
import { CardStackDemo } from '@/components/sm-blocks/Multi-card'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const Testimonials = () => {
  return (
    <section className="text-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          // @ts-expect-error Next.js export * warning
          variants={fadeUp}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Testimonials
          </h2>
          <div className="h-1 w-20 bg-blue-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.15 }
            }
          }}
          className="grid md:grid-cols-2"
        >
          {[1, 2].map((_, i) => (
            // @ts-expect-error Next.js export * warning
            <motion.div key={i} variants={fadeUp}>
              <CardStackDemo />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}

export default Testimonials
