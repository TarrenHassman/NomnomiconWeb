import './App.css'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { MockupShowcase } from './components/MockupShowcase'
import { CompendiumShowcase } from './components/CompendiumShowcase'
import { Footer } from './components/Footer'
import { SiAppstore, SiGoogleplay } from 'react-icons/si'

const appStoreUrl = import.meta.env.VITE_APP_STORE_URL || 'https://apps.apple.com/search?term=Nomnomicon'

function App() {
  return (
    <div className="min-h-screen bg-nom-bg text-nom-brown font-sans selection:bg-nom-green selection:text-white">
      <Header />

      <main className="max-w-6xl mx-auto px-6">
        <Hero />
       
        <MockupShowcase />
        <section className="relative z-30 -mt-36 pb-12" aria-labelledby="showcase-download-heading">
          <div className="mx-auto max-w-3xl rounded-4xl border border-white/70 bg-white/70 px-7 py-8 text-center shadow-2xl shadow-nom-brown/15 backdrop-blur-xl md:px-14 md:py-10">
            <h2 id="showcase-download-heading" className="mb-4 text-2xl font-bold md:text-3xl">
              Your next food adventure starts here.
            </h2>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href={appStoreUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="Open NomNomicon on the App Store"
                className="group inline-flex items-center gap-4 rounded-2xl border border-white/80 bg-white/65 px-5 py-4 text-left shadow-md shadow-nom-brown/10 transition hover:-translate-y-1 hover:bg-white/90 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-nom-brown"
              >
                <span className="grid size-14 shrink-0 place-items-center rounded-xl bg-nom-bg text-[#1769e0]">
                  <SiAppstore aria-hidden="true" size={34} />
                </span>
                <span>
                  <span className="block text-sm text-nom-brown/65">Download on the</span>
                  <span className="block text-lg font-bold">App Store</span>
                </span>
              </a>
              <div
                aria-label="Google Play, coming soon"
                className="inline-flex cursor-default items-center gap-4 rounded-2xl border border-white/60 bg-white/35 px-5 py-4 text-left opacity-75"
              >
                <span className="grid size-14 shrink-0 place-items-center rounded-xl bg-white/60 text-[#34a853]">
                  <SiGoogleplay aria-hidden="true" size={32} />
                </span>
                <span>
                  <span className="block text-sm text-nom-brown/65">Coming soon</span>
                  <span className="block text-lg font-bold">Google Play</span>
                </span>
              </div>
            </div>
          </div>
        </section>
        <CompendiumShowcase />

          <section className="relative z-20 pt-4 pb-20" aria-labelledby="download-heading">
          <div className="mx-auto max-w-3xl rounded-4xl border border-white/70 bg-white/55 px-7 py-12 text-center shadow-2xl shadow-nom-brown/10 backdrop-blur-xl md:px-14 md:py-16">
            <h2 id="download-heading" className="mb-4 text-3xl font-bold md:text-5xl">
              Your next food adventure starts here.
            </h2>
            <p className="mb-8 text-nom-brown/70">
              Find NomNomicon on your app store.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href={appStoreUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="Open NomNomicon on the App Store"
                className="group inline-flex items-center gap-4 rounded-2xl border border-white/80 bg-white/65 px-5 py-4 text-left shadow-md shadow-nom-brown/10 transition hover:-translate-y-1 hover:bg-white/90 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-nom-brown"
              >
                <span className="grid size-14 shrink-0 place-items-center rounded-xl bg-nom-bg text-[#1769e0]">
                  <SiAppstore aria-hidden="true" size={34} />
                </span>
                <span>
                  <span className="block text-sm text-nom-brown/65">Download on the</span>
                  <span className="block text-lg font-bold">App Store</span>
                </span>
              </a>
              <div
                aria-label="Google Play, coming soon"
                className="inline-flex cursor-default items-center gap-4 rounded-2xl border border-white/60 bg-white/35 px-5 py-4 text-left opacity-75"
              >
                <span className="grid size-14 shrink-0 place-items-center rounded-xl bg-white/60 text-[#34a853]">
                  <SiGoogleplay aria-hidden="true" size={32} />
                </span>
                <span>
                  <span className="block text-sm text-nom-brown/65">Coming soon</span>
                  <span className="block text-lg font-bold">Google Play</span>
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default App
