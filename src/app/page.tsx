import Image from "next/image";
import Countdown from "@/components/Countdown";
import CopyCA from "@/components/CopyCA";
import MobileNav from "@/components/MobileNav";
import { IconHeart, IconDollar, IconLink, IconActivity, IconImage, IconBolt, IconUsers, IconFile, IconTool, IconExternalLink, IconRefresh, IconCreditCard, IconX, IconTelegram, PawLogo } from "@/components/Icons";
import { CONFIG, PLACEHOLDER_WALLETS } from "@/lib/config";

const GALLERY = [
  { src: "/images/gallery-1.jpeg", alt: "Pit bull on trampoline", span: true },
  { src: "/images/gallery-5.jpeg", alt: "Pit bull smiling" },
  { src: "/images/gallery-8.jpeg", alt: "Pit bull portrait" },
  { src: "/images/gallery-2.jpeg", alt: "Pit bull in car" },
  { src: "/images/gallery-4.jpeg", alt: "Pit bull happy" },
  { src: "/images/gallery-3.jpeg", alt: "Pit bull looking right" },
  { src: "/images/gallery-7.jpeg", alt: "Blue-eyed puppy" },
];

const PHASES = [
  { n: "Phase 1", title: "Foundation", active: true, items: ["Token launch on Pump.fun", "Website + live donation tracker", "Community launch (X + Telegram)", "First shelter partnership"] },
  { n: "Phase 2", title: "Growth", items: ["CoinGecko + CMC listing", "Community voting on rescues", "Holder-gated governance", "Charity partnerships"] },
  { n: "Phase 3", title: "Impact", items: ["Rescue Wall — community stories", "Monthly transparency reports", "Multi-shelter donation network", "Rescue event sponsorships"] },
  { n: "Phase 4", title: "Legacy", items: ["Rescue NFT collection", "Merch (all proceeds to rescues)", "National expansion", "Annual impact report"] },
];

export default function Home() {
  return (
    <>
      {/* ── NAV ── */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-cream/85 backdrop-blur-xl border-b border-[rgba(74,44,26,0.1)]">
        <div className="max-w-[1280px] mx-auto px-[clamp(1.25rem,4vw,3rem)] h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <PawLogo className="w-8 h-8" />
            <span className="font-display text-2xl text-espresso tracking-tight"><span className="text-sienna">$</span>RESCUE</span>
          </a>
          <nav className="hidden md:flex items-center gap-7">
            {["Mission", "Tracker", "Gallery", "Roadmap"].map((l) => (
              <a key={l} href={`#${l.toLowerCase()}`} className="text-[0.8rem] font-medium text-olive hover:text-espresso transition-colors">{l}</a>
            ))}
            <a href={CONFIG.links.x} target="_blank" rel="noopener noreferrer" className="text-olive hover:text-sienna transition-colors"><IconX className="w-4 h-4" /></a>
            <a href={CONFIG.links.telegram} target="_blank" rel="noopener noreferrer" className="text-olive hover:text-sienna transition-colors"><IconTelegram className="w-4 h-4" /></a>
          </nav>
          <MobileNav />
        </div>
      </header>

      <main>
        {/* ── HERO — full bleed background photo ── */}
        <section className="relative min-h-screen flex items-end overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/images/hero.jpeg" alt="$RESCUE mascot" fill className="object-cover object-[center_15%]" priority />
            <div className="absolute inset-0 bg-gradient-to-b from-cream/30 via-cream/10 via-[55%] to-cream" />
            <div className="absolute inset-0 bg-gradient-to-r from-cream/95 via-cream/70 via-[45%] to-transparent" />
          </div>
          <div className="relative z-10 w-full max-w-[1280px] mx-auto px-[clamp(1.25rem,4vw,3rem)] pb-[clamp(3rem,8vh,6rem)] pt-32">
            <div className="max-w-xl">
              <div className="flex items-center gap-2.5 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-sienna animate-blink" />
                <span className="font-mono text-[0.65rem] font-semibold text-sienna tracking-[0.18em] uppercase">Pre-Launch</span>
              </div>
              <h1 className="font-display text-[clamp(3rem,7vw,5rem)] leading-[0.95] tracking-tight text-espresso mb-6">
                Every buy<br /><em className="text-sienna italic">saves a life.</em>
              </h1>
              <p className="text-[1.05rem] text-olive leading-[1.75] max-w-[440px] mb-8">{CONFIG.description}</p>
              <Countdown />
              <div className="flex flex-wrap gap-3 mt-8 mb-6">
                <a href="#buy" className="inline-flex items-center gap-2 px-7 py-3.5 bg-brown text-cream font-semibold text-[0.85rem] hover:bg-espresso transition-all hover:-translate-y-px">
                  <IconDollar className="w-4 h-4" />Buy $RESCUE
                </a>
                <a href="#mission" className="inline-flex items-center gap-2 px-7 py-3.5 border-[1.5px] border-[rgba(74,44,26,0.2)] text-brown font-semibold text-[0.85rem] hover:border-brown transition-all">
                  Read the Mission
                </a>
              </div>
              <CopyCA />
            </div>
          </div>
        </section>

        {/* ── TICKER ── */}
        <div className="border-y border-[rgba(74,44,26,0.1)] py-3 overflow-hidden bg-cream-deep">
          <div className="flex animate-slide whitespace-nowrap">
            {Array.from({ length: 18 }).map((_, i) => (
              <span key={i} className="mx-8 font-mono text-[0.65rem] font-medium text-olive-light tracking-[0.12em] uppercase">
                $RESCUE &bull; SOLANA &bull; PIT BULL RESCUE &bull; ON-CHAIN CHARITY
              </span>
            ))}
          </div>
        </div>

        {/* ── MISSION ── */}
        <section id="mission" className="py-[clamp(4.5rem,10vh,7rem)] px-[clamp(1.25rem,4vw,3rem)]">
          <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-[clamp(2.5rem,5vw,5rem)] items-start">
            <div className="grid grid-cols-[5fr_4fr] gap-[3px]">
              <div className="row-span-2 overflow-hidden"><Image src="/images/gallery-3.jpeg" alt="Pit bull" width={500} height={667} className="w-full h-full object-cover aspect-[3/4] hover:scale-[1.03] transition-transform duration-[4s]" /></div>
              <div className="overflow-hidden"><Image src="/images/gallery-7.jpeg" alt="Puppy" width={400} height={400} className="w-full h-full object-cover aspect-square hover:scale-[1.03] transition-transform duration-[4s]" /></div>
              <div className="overflow-hidden"><Image src="/images/gallery-6.jpeg" alt="Pit bull" width={400} height={400} className="w-full h-full object-cover aspect-square hover:scale-[1.03] transition-transform duration-[4s]" /></div>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-5">
                <IconHeart className="w-3.5 h-3.5 text-sienna" />
                <span className="font-mono text-[0.6rem] font-semibold text-sienna tracking-[0.2em] uppercase">Our Mission</span>
              </div>
              <h2 className="font-display text-[clamp(2rem,4.5vw,3.25rem)] leading-[1.1] text-espresso mb-6">
                Pit bulls get overlooked.<br /><em className="text-sienna italic">We&apos;re changing that.</em>
              </h2>
              <div className="space-y-5 text-brown-light text-[0.95rem] leading-[1.85]">
                <p>Every year, hundreds of thousands of pit bulls are abandoned or put down. Not because they&apos;re dangerous — because the world made up its mind before it ever met them.</p>
                <p><strong className="text-sienna font-bold">$RESCUE</strong> puts money where it matters. A percentage of every transaction goes to a public donation wallet, verifiable on the Solana blockchain. Vet bills, foster supplies, transport, shelter partnerships.</p>
                <p>No vague promises. No hidden wallets. On-chain math and dogs that need homes.</p>
              </div>
              <div className="grid grid-cols-3 gap-6 mt-10 pt-8 border-t border-[rgba(74,44,26,0.1)]">
                {[{ v: "100%", l: "On-chain transparent" }, { v: "0", l: "Hidden wallets" }, { v: "24/7", l: "Live tracking" }].map(({ v, l }) => (
                  <div key={l}><span className="font-display text-2xl text-espresso">{v}</span><span className="text-[0.7rem] text-olive mt-0.5 block">{l}</span></div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── HOW IT WORKS ── */}
        <section className="py-[clamp(4.5rem,10vh,7rem)] px-[clamp(1.25rem,4vw,3rem)] bg-cream-deep">
          <div className="max-w-[1200px] mx-auto">
            <div className="flex items-center gap-2 mb-5"><IconTool className="w-3.5 h-3.5 text-sienna" /><span className="font-mono text-[0.6rem] font-semibold text-sienna tracking-[0.2em] uppercase">How It Works</span></div>
            <h2 className="font-display text-[clamp(2rem,4.5vw,3.25rem)] leading-[1.1] text-espresso mb-[clamp(2rem,4vw,3.5rem)]">Buy. Track. <em className="text-sienna italic">Rescue.</em></h2>
            <div className="grid sm:grid-cols-3 gap-px bg-[rgba(74,44,26,0.1)]">
              {[
                { Icon: IconDollar, title: "Buy $RESCUE", desc: "Every transaction automatically routes a percentage to the rescue donation wallet. No extra steps." },
                { Icon: IconLink, title: "Track on-chain", desc: "Every donation is publicly visible on the Solana blockchain. Verify on Solscan anytime. No trust needed." },
                { Icon: IconHeart, title: "Dogs get saved", desc: "Funds go to real pit bull rescues. Vet bills, foster care, transport costs, and shelter partnerships across the country." },
              ].map(({ Icon, title, desc }) => (
                <div key={title} className="bg-cream-deep p-[clamp(2rem,4vw,3rem)]">
                  <div className="w-12 h-12 border-[1.5px] border-[rgba(74,44,26,0.2)] flex items-center justify-center mb-6">
                    <Icon className="w-[22px] h-[22px] text-sienna" />
                  </div>
                  <h3 className="font-display text-[1.3rem] text-espresso mb-2.5">{title}</h3>
                  <p className="text-[0.875rem] text-olive leading-[1.75]">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TRACKER + FEED + LEADERBOARD ── */}
        <section id="tracker" className="py-[clamp(4.5rem,10vh,7rem)] px-[clamp(1.25rem,4vw,3rem)]">
          <div className="max-w-[1200px] mx-auto">
            <div className="flex items-center gap-2 mb-5"><IconActivity className="w-3.5 h-3.5 text-sienna" /><span className="font-mono text-[0.6rem] font-semibold text-sienna tracking-[0.2em] uppercase">Live On-Chain</span></div>
            <h2 className="font-display text-[clamp(2rem,4.5vw,3.25rem)] leading-[1.1] text-espresso mb-3">Donation <em className="text-sienna italic">Tracker</em></h2>
            <p className="text-olive text-[0.9rem] mb-[clamp(2.5rem,5vw,4rem)]">Every donation is publicly verifiable on the Solana blockchain.</p>

            {/* Big counter */}
            <div className="border border-[rgba(74,44,26,0.1)] p-[clamp(2.5rem,6vw,4rem)] text-center mb-8">
              <p className="font-display text-[clamp(3.5rem,10vw,6rem)] text-espresso tracking-tight tabular-nums">0.00<span className="font-mono text-[0.3em] text-olive font-medium ml-2 tracking-normal">SOL</span></p>
              <p className="font-mono text-[0.65rem] text-olive tracking-[0.15em] uppercase mt-3">Total Raised</p>
            </div>

            {/* Milestones */}
            <div className="border-t border-[rgba(74,44,26,0.1)]">
              {CONFIG.milestones.map((m, i) => (
                <div key={i} className="grid grid-cols-[1fr_auto] gap-4 items-center py-4 border-b border-[rgba(74,44,26,0.1)]">
                  <span className="text-[0.9rem] font-medium text-espresso">{m.label}</span>
                  <span className="font-mono text-[0.7rem] text-olive font-medium">{m.target} SOL</span>
                  <div className="col-span-2 h-[3px] bg-cream-dark"><div className="h-full bg-sienna transition-all duration-1000" style={{ width: "0%" }} /></div>
                </div>
              ))}
            </div>

            {/* Feed + Leaderboard */}
            <div className="grid md:grid-cols-2 gap-6 mt-12">
              {/* Activity Feed */}
              <div className="border border-[rgba(74,44,26,0.1)] overflow-hidden">
                <div className="flex items-center justify-between px-5 py-4 border-b border-[rgba(74,44,26,0.1)] bg-cream-deep">
                  <h3 className="font-display text-[1.1rem] text-espresso">Activity Feed</h3>
                  <span className="font-mono text-[0.6rem] font-semibold text-sienna tracking-[0.1em] uppercase flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-sienna animate-blink" /> Live
                  </span>
                </div>
                <div className="p-8 text-center">
                  <IconActivity className="w-10 h-10 text-cream-dark mx-auto mb-4" />
                  <p className="text-[0.8rem] text-olive-light leading-relaxed">Activity will appear here once<br />the token is live on Solana.</p>
                  <span className="inline-block mt-4 font-mono text-[0.6rem] font-semibold text-sienna tracking-[0.1em] uppercase border border-sienna/25 px-3 py-1.5">Awaiting Launch</span>
                </div>
              </div>

              {/* Leaderboard */}
              <div className="border border-[rgba(74,44,26,0.1)] overflow-hidden">
                <div className="flex items-center justify-between px-5 py-4 border-b border-[rgba(74,44,26,0.1)] bg-cream-deep">
                  <h3 className="font-display text-[1.1rem] text-espresso">Top Holders</h3>
                  <span className="font-mono text-[0.6rem] text-olive tracking-[0.08em]">TOP 20</span>
                </div>
                <div className="max-h-80 overflow-y-auto">
                  {PLACEHOLDER_WALLETS.map((w, i) => (
                    <div key={i} className="grid grid-cols-[40px_1fr_auto] gap-3 items-center px-5 py-2.5 border-b border-[rgba(74,44,26,0.06)] text-[0.8rem]">
                      <span className="font-mono text-[0.7rem] text-olive font-semibold text-center">{String(i + 1).padStart(2, "0")}</span>
                      <span className="font-mono text-[0.7rem] text-espresso font-medium">{w}</span>
                      <span className="font-mono text-[0.65rem] text-olive-light">--</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── BUY WIDGET ── */}
        <section id="buy" className="py-[clamp(4.5rem,10vh,7rem)] px-[clamp(1.25rem,4vw,3rem)] bg-cream-deep">
          <div className="max-w-[800px] mx-auto">
            <div className="flex items-center gap-2 mb-5"><IconCreditCard className="w-3.5 h-3.5 text-sienna" /><span className="font-mono text-[0.6rem] font-semibold text-sienna tracking-[0.2em] uppercase">Buy $RESCUE</span></div>
            <h2 className="font-display text-[clamp(2rem,4.5vw,3.25rem)] leading-[1.1] text-espresso mb-8">Get <em className="text-sienna italic">$RESCUE</em></h2>
            <div className="border border-[rgba(74,44,26,0.1)] p-[clamp(2rem,4vw,3rem)] text-center bg-cream">
              <IconRefresh className="w-12 h-12 text-sienna mx-auto mb-6" />
              <h3 className="font-display text-[1.5rem] text-espresso mb-3">Jupiter Swap</h3>
              <p className="text-[0.85rem] text-olive leading-[1.7] mb-8 max-w-[360px] mx-auto">Swap any Solana token for $RESCUE directly through Jupiter. Contract address will be available at launch.</p>
              <span className="inline-flex items-center gap-2 px-7 py-3.5 bg-sienna/40 text-cream/60 font-semibold text-[0.85rem] cursor-not-allowed">
                <IconExternalLink className="w-4 h-4" />Available at Launch
              </span>
            </div>
          </div>
        </section>

        {/* ── GALLERY ── */}
        <section id="gallery" className="py-[clamp(4.5rem,10vh,7rem)] px-[clamp(1.25rem,4vw,3rem)]">
          <div className="max-w-[1200px] mx-auto">
            <div className="flex items-center gap-2 mb-5"><IconImage className="w-3.5 h-3.5 text-sienna" /><span className="font-mono text-[0.6rem] font-semibold text-sienna tracking-[0.2em] uppercase">The Family</span></div>
            <h2 className="font-display text-[clamp(2rem,4.5vw,3.25rem)] leading-[1.1] text-espresso mb-[clamp(2rem,4vw,3.5rem)]">These are the faces <em className="text-sienna italic">we fight for.</em></h2>
            <div className="grid grid-cols-2 sm:grid-cols-[repeat(12,1fr)] gap-[3px]">
              {GALLERY.map((p, i) => (
                <div key={i} className={`overflow-hidden cursor-pointer group ${p.span ? "col-span-2 sm:col-span-7 sm:row-span-2" : i < 3 ? "sm:col-span-5" : "sm:col-span-3"}`}>
                  <div className={`relative ${p.span ? "aspect-[4/3]" : i < 3 ? "aspect-[5/4]" : "aspect-square"}`}>
                    <Image src={p.src} alt={p.alt} fill className="object-cover group-hover:scale-[1.04] transition-transform duration-700" sizes={p.span ? "(max-width:640px) 100vw, 58vw" : "(max-width:640px) 50vw, 25vw"} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── RESCUE STORIES ── */}
        <section className="py-[clamp(4.5rem,10vh,7rem)] px-[clamp(1.25rem,4vw,3rem)] bg-cream-deep">
          <div className="max-w-[1200px] mx-auto">
            <div className="flex items-center gap-2 mb-5"><IconFile className="w-3.5 h-3.5 text-sienna" /><span className="font-mono text-[0.6rem] font-semibold text-sienna tracking-[0.2em] uppercase">Real Impact</span></div>
            <h2 className="font-display text-[clamp(2rem,4.5vw,3.25rem)] leading-[1.1] text-espresso mb-[clamp(2rem,4vw,3.5rem)]">Rescue <em className="text-sienna italic">Stories</em></h2>
            <div className="grid sm:grid-cols-3 gap-px bg-[rgba(74,44,26,0.1)]">
              <div className="bg-cream-deep p-[clamp(1.5rem,3vw,2.5rem)]">
                <IconHeart className="w-8 h-8 text-sienna mb-5" />
                <span className="inline-block font-mono text-[0.55rem] font-semibold text-sienna tracking-[0.1em] uppercase border border-sienna/25 px-2 py-1 mb-4">Pending</span>
                <h3 className="font-display text-[1.15rem] text-espresso mb-3">First rescue incoming</h3>
                <p className="text-[0.85rem] text-olive leading-[1.7]">Our first documented rescue story drops once the community funds its first sponsored rescue. Real dogs, real receipts, real impact.</p>
              </div>
              {[1, 2].map((n) => (
                <div key={n} className="bg-cream-deep flex flex-col items-center justify-center p-12 text-center">
                  <IconHeart className="w-9 h-9 text-cream-dark mb-4" />
                  <p className="text-[0.8rem] text-olive-light leading-relaxed">Your contribution could fund<br />the next rescue story</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── ROADMAP ── */}
        <section id="roadmap" className="py-[clamp(4.5rem,10vh,7rem)] px-[clamp(1.25rem,4vw,3rem)]">
          <div className="max-w-[1200px] mx-auto">
            <div className="flex items-center gap-2 mb-5"><IconBolt className="w-3.5 h-3.5 text-sienna" /><span className="font-mono text-[0.6rem] font-semibold text-sienna tracking-[0.2em] uppercase">The Plan</span></div>
            <h2 className="font-display text-[clamp(2rem,4.5vw,3.25rem)] leading-[1.1] text-espresso mb-[clamp(2rem,4vw,3.5rem)]">Roadmap</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[rgba(74,44,26,0.1)]">
              {PHASES.map((p) => (
                <div key={p.n} className={`p-[clamp(1.5rem,3vw,2.25rem)] ${p.active ? "bg-sienna/[0.04] border-l-[3px] border-sienna" : "bg-cream"}`}>
                  <div className="flex items-center gap-2.5 mb-4">
                    {p.active && <span className="w-1.5 h-1.5 rounded-full bg-sienna animate-blink" />}
                    <span className={`font-mono text-[0.55rem] font-semibold tracking-[0.15em] uppercase ${p.active ? "text-sienna" : "text-olive"}`}>{p.n}</span>
                  </div>
                  <h3 className="font-display text-[1.3rem] text-espresso mb-4">{p.title}</h3>
                  <ul className="space-y-0">
                    {p.items.map((item, i) => (
                      <li key={i} className="text-[0.8rem] text-olive py-[0.4rem] border-b border-[rgba(74,44,26,0.06)] last:border-0 leading-relaxed">{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-[clamp(5rem,12vh,8rem)] px-8 text-center border-t border-[rgba(74,44,26,0.1)]">
          <div className="max-w-[800px] mx-auto">
            <div className="flex items-center gap-2 justify-center mb-5"><IconUsers className="w-3.5 h-3.5 text-sienna" /><span className="font-mono text-[0.6rem] font-semibold text-sienna tracking-[0.2em] uppercase">Join the Pack</span></div>
            <h2 className="font-display text-[clamp(2rem,4.5vw,3.25rem)] leading-[1.1] text-espresso mb-4">Be part of <em className="text-sienna italic">this.</em></h2>
            <p className="text-olive text-[0.95rem] max-w-[400px] mx-auto mb-10 leading-[1.7]">Follow for updates, rescue stories, and the launch announcement.</p>
            <div className="flex gap-3 justify-center flex-wrap">
              <a href={CONFIG.links.x} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-brown text-cream font-semibold text-[0.85rem] hover:bg-espresso transition-all hover:-translate-y-px">
                <IconX className="w-4 h-4" />Follow on X
              </a>
              <a href={CONFIG.links.telegram} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2.5 px-7 py-3.5 border-[1.5px] border-[rgba(74,44,26,0.2)] text-brown font-semibold text-[0.85rem] hover:border-brown transition-all">
                <IconTelegram className="w-4 h-4" />Join Telegram
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* ── FOOTER ── */}
      <footer className="bg-espresso text-cream/70 pt-[clamp(3rem,6vw,5rem)] pb-8 px-[clamp(1.25rem,4vw,3rem)]">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[clamp(2rem,4vw,4rem)]">
          <div>
            <div className="font-display text-[1.75rem] text-cream mb-4"><span className="text-sienna">$</span>RESCUE</div>
            <p className="text-[0.8rem] leading-[1.7] opacity-60 max-w-[280px]">A community-driven charity token on Solana, funding real pit bull rescues across America.</p>
            <div className="flex gap-3 mt-6">
              <a href={CONFIG.links.x} target="_blank" rel="noopener noreferrer" className="w-9 h-9 border border-cream/15 flex items-center justify-center hover:border-cream/40 hover:bg-cream/5 transition-all">
                <IconX className="w-4 h-4 text-cream/60" />
              </a>
              <a href={CONFIG.links.telegram} target="_blank" rel="noopener noreferrer" className="w-9 h-9 border border-cream/15 flex items-center justify-center hover:border-cream/40 hover:bg-cream/5 transition-all">
                <IconTelegram className="w-4 h-4 text-cream/60" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-mono text-[0.6rem] font-semibold tracking-[0.15em] uppercase text-cream/40 mb-5">Quick Links</h4>
            <ul className="space-y-2.5">{["Mission", "Donation Tracker", "Gallery", "Roadmap"].map((l) => (<li key={l}><a href={`#${l.toLowerCase().replace(/ /g, "")}`} className="text-[0.8rem] text-cream/60 hover:text-cream transition-colors">{l}</a></li>))}</ul>
          </div>
          <div>
            <h4 className="font-mono text-[0.6rem] font-semibold tracking-[0.15em] uppercase text-cream/40 mb-5">Resources</h4>
            <ul className="space-y-2.5">{["Solscan", "DexScreener", "Jupiter", "Pump.fun"].map((l) => (<li key={l}><a href="#" className="text-[0.8rem] text-cream/60 hover:text-cream transition-colors">{l}</a></li>))}</ul>
          </div>
          <div>
            <h4 className="font-mono text-[0.6rem] font-semibold tracking-[0.15em] uppercase text-cream/40 mb-5">Community</h4>
            <ul className="space-y-2.5">{[{ l: "Twitter / X", h: CONFIG.links.x }, { l: "Telegram", h: CONFIG.links.telegram }, { l: "CoinGecko", h: "#" }, { l: "CMC", h: "#" }].map(({ l, h }) => (<li key={l}><a href={h} target={h.startsWith("http") ? "_blank" : undefined} rel={h.startsWith("http") ? "noopener noreferrer" : undefined} className="text-[0.8rem] text-cream/60 hover:text-cream transition-colors">{l}</a></li>))}</ul>
          </div>
        </div>
        <div className="max-w-[1200px] mx-auto mt-12 pt-6 border-t border-cream/[0.08] flex justify-between flex-wrap gap-4">
          <p className="text-[0.65rem] opacity-40 leading-relaxed">$RESCUE is a community-driven charity token. Not financial advice. Crypto carries risk. All donations verifiable on-chain. DYOR.</p>
          <span className="font-mono text-[0.6rem] opacity-30">Built on Solana</span>
        </div>
      </footer>
    </>
  );
}
