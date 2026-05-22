"use client";
import { Cormorant, Montserrat, Sawarabi_Mincho } from "next/font/google";
import content from "../data/content.json";

const display = Cormorant({ subsets: ["latin"], weight: ["400", "500", "600", "700"], style: ["normal", "italic"], variable: "--font-display" });
const body = Montserrat({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"], variable: "--font-body" });
const accent = Sawarabi_Mincho({ subsets: ["latin"], weight: ["400"], variable: "--font-accent" });

const TEAL = "#134E4A";
const TEAL_DEEP = "#042F2E";
const PEARL = "#FAFAF7";
const SAKURA = "#FBCFE8";
const CORAL = "#FB7185";
const INK = "#1C1917";
const STONE = "#78716C";
const COPPER = "#9A3412";

const HERO_PHOTO = "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=1800&q=80&auto=format&fit=crop";

export default function Page() {
  const c = content as any;
  return (
    <main className={`${display.variable} ${body.variable} ${accent.variable} min-h-screen`} style={{ backgroundColor: PEARL, color: INK, fontFamily: "var(--font-body)" }}>
      <style jsx global>{`
        @keyframes drift { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes blossom { 0%, 100% { transform: rotate(-2deg); } 50% { transform: rotate(2deg); } }
        .drift { animation: drift 1.2s cubic-bezier(0.16, 1, 0.3, 1) both; }
        .blossom { animation: blossom 8s ease-in-out infinite; }
        .display-text { font-family: var(--font-display); }
        .accent-text { font-family: var(--font-accent); }
        .body-text { font-family: var(--font-body); }
      `}</style>

      <header style={{ backgroundColor: PEARL, borderBottom: `1px solid ${TEAL}20` }}>
        <div className="text-center py-2.5 text-[10px] uppercase tracking-[0.5em]" style={{ backgroundColor: TEAL_DEEP, color: PEARL, fontWeight: 500 }}>
          鮨  ·  GLENDALE  ·  VICTORY BLVD  ·  SUSHI · OMAKASE
        </div>
        <nav className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div>
            <div className="display-text text-3xl leading-none tracking-tight" style={{ color: TEAL_DEEP, fontWeight: 500, fontStyle: "italic" }}>Sushi Nishi Ya</div>
            <div className="accent-text text-sm tracking-widest mt-0.5" style={{ color: CORAL }}>寿司 西や · since the counter opened</div>
          </div>
          <div className="hidden md:flex items-center gap-9 text-[11px] uppercase tracking-[0.3em]" style={{ color: TEAL_DEEP, fontWeight: 500 }}>
            <a href="#about">Counter</a>
            <a href="#menu">献立 · Menu</a>
            <a href="#reviews">Reviews</a>
            <a href="#visit">Visit</a>
          </div>
          <a href={c.hero.ctaLink} className="display-text px-6 py-2.5 text-base italic" style={{ color: PEARL, backgroundColor: TEAL_DEEP, fontWeight: 500 }}>Reserve →</a>
        </nav>
      </header>

      <section className="py-20 md:py-28 relative" style={{ backgroundColor: PEARL }}>
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-14 items-center">
          <div className="md:col-span-7 drift">
            <div className="text-[10px] uppercase tracking-[0.6em] mb-6 flex items-center gap-3" style={{ color: CORAL, fontWeight: 500 }}>
              <span style={{ width: 24, height: 1, backgroundColor: CORAL, display: "inline-block" }} />
              {c.hero.eyebrow}
            </div>
            <h1 className="display-text text-6xl md:text-9xl leading-[0.95] mb-3 tracking-tight" style={{ color: TEAL_DEEP, fontWeight: 500 }}>
              <span style={{ fontStyle: "italic" }}>The </span>
              {c.hero.heading}
            </h1>
            <div className="accent-text text-3xl mb-8" style={{ color: CORAL }}>江戸前 · edomae · made one piece at a time.</div>
            <p className="text-lg leading-[1.85] max-w-xl mb-10" style={{ color: INK, fontWeight: 400 }}>{c.hero.subheading}</p>
            <div className="flex flex-wrap items-center gap-8">
              <a href={c.hero.ctaLink} className="display-text px-9 py-4 text-lg italic inline-flex items-center gap-3" style={{ backgroundColor: TEAL_DEEP, color: PEARL, fontWeight: 500 }}>{c.hero.ctaText} ⟶</a>
              <div>
                <div className="display-text text-3xl italic" style={{ color: CORAL, fontWeight: 600 }}>★ 4.6 · 115</div>
                <div className="text-[10px] uppercase tracking-widest mt-1" style={{ color: STONE, fontWeight: 500 }}>reviews · victory blvd</div>
              </div>
            </div>
          </div>
          <div className="md:col-span-5 drift">
            <div className="relative">
              <div className="overflow-hidden" style={{ aspectRatio: "3/4", borderRadius: 4 }}>
                <div className="w-full h-full" style={{ backgroundImage: `url("${HERO_PHOTO}")`, backgroundSize: "cover", backgroundPosition: "center", filter: "saturate(0.92)" }} />
              </div>
              <div className="absolute -bottom-5 -left-5 px-8 py-5 blossom" style={{ backgroundColor: SAKURA, borderRadius: 4 }}>
                <div className="accent-text text-xl" style={{ color: TEAL_DEEP }}>本日のおすすめ</div>
                <div className="display-text text-2xl italic mt-1" style={{ color: TEAL_DEEP, fontWeight: 600 }}>today's recommendation</div>
              </div>
              <div className="absolute -top-4 -right-4 w-20 h-20 flex items-center justify-center" style={{ backgroundColor: CORAL, borderRadius: 999 }}>
                <span className="accent-text text-2xl" style={{ color: PEARL }}>鮨</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-24" style={{ backgroundColor: TEAL_DEEP, color: PEARL }}>
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-5">
            <div className="text-[10px] uppercase tracking-[0.6em] mb-4" style={{ color: SAKURA, fontWeight: 500 }}>· {c.about.label} ·</div>
            <h2 className="display-text text-5xl md:text-7xl leading-[1.0] tracking-tight" style={{ color: PEARL, fontWeight: 500 }}>
              <span style={{ fontStyle: "italic" }}>The </span>{c.about.heading}
            </h2>
            <div className="accent-text text-2xl mt-5" style={{ color: CORAL }}>板前 · itamae · the counter cuts.</div>
          </div>
          <div className="md:col-span-7">
            <div className="space-y-6 text-lg leading-[1.85]" style={{ color: PEARL, opacity: 0.95 }}>
              {c.about.paragraphs.map((p: string, i: number) => <p key={i}>{p}</p>)}
            </div>
          </div>
        </div>
      </section>

      <section id="menu" className="py-24" style={{ backgroundColor: PEARL }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="text-[10px] uppercase tracking-[0.6em] mb-3" style={{ color: CORAL, fontWeight: 500 }}>· 献立 · MENU ·</div>
            <h2 className="display-text text-5xl md:text-7xl leading-tight tracking-tight" style={{ color: TEAL_DEEP, fontWeight: 500 }}>
              <span style={{ fontStyle: "italic" }}>From the </span>counter.
            </h2>
          </div>
          <div className="space-y-1">
            {c.services.map((s: any, i: number) => (
              <article key={i} className="py-8 grid md:grid-cols-12 gap-6 items-baseline" style={{ borderBottom: `1px solid ${TEAL}25` }}>
                <div className="md:col-span-1 accent-text text-2xl" style={{ color: CORAL }}>{i + 1}</div>
                <div className="md:col-span-7">
                  <div className="display-text text-2xl md:text-3xl italic leading-tight mb-2" style={{ color: TEAL_DEEP, fontWeight: 500 }}>{s.title}</div>
                  <div className="text-sm leading-[1.7]" style={{ color: STONE, fontWeight: 400 }}>{s.description}</div>
                </div>
                <div className="md:col-span-4 display-text text-2xl text-right italic" style={{ color: COPPER, fontWeight: 600 }}>{s.price}</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-24" style={{ backgroundColor: SAKURA }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="text-[10px] uppercase tracking-[0.6em] mb-3" style={{ color: TEAL_DEEP, fontWeight: 500 }}>· 115 reviews ·</div>
            <h2 className="display-text text-5xl md:text-7xl leading-tight tracking-tight" style={{ color: TEAL_DEEP, fontWeight: 500 }}>
              <span style={{ fontStyle: "italic" }}>The </span>regulars.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {c.reviews.map((r: any, i: number) => (
              <figure key={i} className="p-10" style={{ backgroundColor: PEARL, borderRadius: 4 }}>
                <div className="accent-text text-3xl mb-3" style={{ color: CORAL }}>「</div>
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: r.rating }).map((_, j) => <span key={j} style={{ color: CORAL, fontSize: 22 }}>★</span>)}
                </div>
                <blockquote className="text-base leading-[1.85] mb-7 italic" style={{ color: INK, fontFamily: "var(--font-display)" }}>{r.text}</blockquote>
                <figcaption style={{ borderTop: `1px solid ${TEAL}30`, paddingTop: 16 }}>
                  <div className="display-text text-xl italic" style={{ color: TEAL_DEEP, fontWeight: 600 }}>{r.name}</div>
                  <div className="text-[10px] uppercase tracking-widest mt-1" style={{ color: STONE, fontWeight: 500 }}>{r.context}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section id="visit" className="py-24" style={{ backgroundColor: PEARL }}>
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-start">
          <div>
            <div className="text-[10px] uppercase tracking-[0.6em] mb-4" style={{ color: CORAL, fontWeight: 500 }}>· お越しください · visit ·</div>
            <h2 className="display-text text-5xl md:text-7xl leading-[0.95] mb-3 tracking-tight" style={{ color: TEAL_DEEP, fontWeight: 500 }}>
              <span style={{ fontStyle: "italic" }}>Come </span>sit at the counter.
            </h2>
            <div className="accent-text text-3xl mb-10" style={{ color: CORAL }}>victory boulevard · glendale.</div>
            <dl className="space-y-7 mb-10">
              <div>
                <dt className="text-[10px] uppercase tracking-[0.4em] mb-2" style={{ color: CORAL, fontWeight: 600 }}>所在地 · Address</dt>
                <dd className="text-xl" style={{ color: INK }}>{c.contact.address}</dd>
              </div>
              <div>
                <dt className="text-[10px] uppercase tracking-[0.4em] mb-2" style={{ color: CORAL, fontWeight: 600 }}>電話 · Reserve</dt>
                <dd className="display-text text-4xl italic"><a href={`tel:${c.contact.phone.replace(/\D/g, "")}`} style={{ color: TEAL_DEEP, fontWeight: 600 }}>{c.contact.phone}</a></dd>
              </div>
              <div>
                <dt className="text-[10px] uppercase tracking-[0.4em] mb-3" style={{ color: CORAL, fontWeight: 600 }}>営業時間 · Hours</dt>
                <dd>
                  <table className="text-base" style={{ color: INK }}>
                    <tbody>
                      {Object.entries(c.contact.hours).map(([day, hours]) => (
                        <tr key={day} style={{ borderBottom: `1px solid ${TEAL}20` }}>
                          <td className="pr-10 py-2 text-xs uppercase tracking-widest font-medium" style={{ color: TEAL_DEEP }}>{day}</td>
                          <td className="py-2 italic font-display" style={{ fontFamily: "var(--font-display)", fontSize: 18 }}>{String(hours)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </dd>
              </div>
            </dl>
          </div>
          <div className="overflow-hidden" style={{ border: `1px solid ${TEAL_DEEP}`, borderRadius: 4, minHeight: 500 }}>
            <iframe src={`https://maps.google.com/maps?output=embed&q=${encodeURIComponent(c.contact.mapEmbedQuery || c.contact.address)}`} width="100%" height="580" style={{ border: 0, filter: "saturate(0.85)" }} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </div>
        </div>
      </section>

      <footer className="py-14 text-center" style={{ backgroundColor: TEAL_DEEP }}>
        <div className="display-text text-4xl italic mb-2" style={{ color: PEARL, fontWeight: 500 }}>Sushi Nishi Ya</div>
        <div className="accent-text text-2xl" style={{ color: CORAL }}>· 寿司 · 板前 · victory blvd · glendale ·</div>
        <div className="text-[10px] uppercase tracking-[0.5em] mt-5 opacity-60" style={{ color: PEARL, fontWeight: 500 }}>© {new Date().getFullYear()} sushi nishi ya · victory blvd · glendale</div>
      </footer>
    </main>
  );
}
