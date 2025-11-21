import { motion } from 'framer-motion'

const items = [
  {
    title: 'Precision Controls',
    text: 'Fine-tune height and presets with tactile dials and responsive haptics.',
  },
  {
    title: 'Dual Brain',
    text: 'On-device intelligence plus cloud sync to learn your daily rhythm.',
  },
  {
    title: 'Sustainably Built',
    text: 'Recycled aluminum chassis and modular parts for long-term serviceability.',
  },
]

export default function Features() {
  return (
    <section id="features" className="relative overflow-hidden bg-slate-950 py-24 text-white md:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_circle_at_20%_10%,rgba(37,99,235,0.15),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(500px_circle_at_80%_80%,rgba(37,99,235,0.12),transparent_60%)]" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mb-12 max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Why ElevateDeskBuddy</h2>
          <p className="mt-3 text-blue-200/80">Designed to keep you in flow. Every detail supports focus, comfort, and creativity.</p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {items.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-blue-500/20 bg-gradient-to-br from-slate-900 to-slate-800 p-6 shadow-xl"
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-blue-500/10 blur-2xl transition group-hover:bg-blue-400/20" />
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="mt-2 text-blue-200/80">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
