import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const features = [
  {
    title: 'Adaptive Height',
    text: 'Seamlessly adjusts to your posture with smart height presets and whisper-quiet motion.',
  },
  {
    title: 'Cable Zen',
    text: 'Integrated cable channels and magnetic clips keep your workspace pristine and tangle-free.',
  },
  {
    title: 'Focus Lighting',
    text: 'Edge LED glow with ambient modes that match your mood and reduce eye strain.',
  },
  {
    title: 'Pro Connectivity',
    text: 'Front-facing USB-C, wireless charging pad, and quick-swap module bay for future upgrades.',
  },
]

export default function ScrollShowcase() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] })

  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2])

  return (
    <section id="experience" ref={ref} className="relative bg-slate-950 text-white">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 py-24 md:grid-cols-2 md:py-32">
        <div className="sticky top-24 h-[60vh] rounded-2xl border border-blue-500/20 bg-gradient-to-br from-slate-900 to-slate-800 p-4 shadow-xl">
          <motion.div style={{ rotate, scale }} className="flex h-full items-center justify-center">
            {/* Placeholder 3D product silhouette. Replace with your actual 3D viewer if needed. */}
            <div className="relative aspect-square w-full max-w-md rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-300/10">
              <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-white/10" />
              <div className="absolute inset-6 rounded-lg border border-blue-400/20" />
              <div className="absolute -inset-1 -z-0 animate-pulse rounded-xl bg-blue-500/10 blur-2xl" />
              <svg viewBox="0 0 200 200" className="absolute inset-0 m-auto h-48 w-48 text-blue-400/70">
                <path d="M100 10 L170 60 L170 140 L100 190 L30 140 L30 60 Z" fill="currentColor" />
              </svg>
            </div>
          </motion.div>
        </div>

        <div className="space-y-10">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Interactive Product Tour</h2>
            <p className="mt-3 text-blue-200/80">Scroll to rotate and zoom. Sections below highlight core capabilities with subtle motion.</p>
          </div>

          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-xl border border-blue-500/20 bg-white/5 p-6 backdrop-blur-sm"
            >
              <div className="flex items-start gap-4">
                <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white">{i + 1}</div>
                <div>
                  <h3 className="text-xl font-semibold">{f.title}</h3>
                  <p className="mt-1 text-blue-200/80">{f.text}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
