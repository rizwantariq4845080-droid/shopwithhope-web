import { categories, featuredLaptops, site, whatsappLink } from "@/lib/site";

const trustItems = [
  {
    title: "Imported branded",
    text: "Dell · HP · Lenovo · Microsoft",
  },
  {
    title: "30-day check warranty",
    text: "Buy with confidence",
  },
  {
    title: "Nationwide delivery",
    text: "Lahore pickup available",
  },
  {
    title: "WhatsApp support",
    text: site.whatsappDisplay,
  },
] as const;

const finderOptions = [
  { label: "Office & study", message: "Hi, I need a laptop for office and study. Please share options." },
  { label: "Business / EliteBook", message: "Hi, I need a business laptop (EliteBook / Latitude / ThinkPad)." },
  { label: "Premium thin", message: "Hi, I want a premium thin laptop (XPS / Surface / Dragonfly)." },
  { label: "Under budget", message: "Hi, please share laptops under my budget. My budget is: " },
] as const;

export default function Home() {
  return (
    <div className="flex min-h-full flex-col bg-background">
      <div className="bg-[#07161b] px-4 py-2 text-center text-xs text-teal-50/85 md:text-sm">
        Prices change with stock — WhatsApp to confirm. {site.whatsappDisplay}
      </div>

      <header className="sticky top-0 z-20 border-b border-line bg-surface/95 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-5 py-4 md:px-8">
          <a href="/" className="font-[family-name:var(--font-display)] text-lg font-semibold tracking-tight text-foreground md:text-xl">
            {site.name}
          </a>
          <nav className="hidden items-center gap-7 text-sm font-medium text-muted md:flex">
            <a href="#brands" className="hover:text-brand">
              Brands
            </a>
            <a href="#stock" className="hover:text-brand">
              Stock
            </a>
            <a href="#finder" className="hover:text-brand">
              Finder
            </a>
            <a href="#contact" className="hover:text-brand">
              Contact
            </a>
          </nav>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[#25D366] px-4 py-2 text-sm font-semibold text-[#052e16] transition hover:brightness-110"
          >
            WhatsApp
          </a>
        </div>
      </header>

      <main className="flex-1">
        <section className="px-5 py-8 md:px-8 md:py-12">
          <div className="mx-auto grid max-w-6xl gap-5 lg:grid-cols-[1.4fr_0.9fr]">
            <div className="hero-glow shop-grid relative overflow-hidden rounded-[1.5rem] px-7 py-10 text-white md:px-10 md:py-14">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-teal-100/80">
                Gulberg III · Lahore
              </p>
              <h1 className="mt-4 max-w-xl font-[family-name:var(--font-display)] text-4xl font-semibold leading-[1.08] tracking-tight md:text-6xl">
                {site.name}
              </h1>
              <p className="mt-4 max-w-lg text-base text-teal-50/85 md:text-lg">
                Imported branded laptops for work, study and business — Dell, HP, Lenovo & Microsoft. Real stock, WhatsApp for price.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={whatsappLink("Hi, I want current laptop stock and prices.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[#074d59] transition hover:bg-teal-50"
                >
                  Chat on WhatsApp
                </a>
                <a
                  href="#stock"
                  className="inline-flex rounded-full border border-white/35 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Shop stock →
                </a>
              </div>
            </div>

            <div className="grid gap-3">
              {categories.slice(0, 4).map((category) => (
                <a
                  key={category.name}
                  href={category.href}
                  className="flex items-center justify-between border border-line bg-surface px-5 py-5 transition hover:border-brand"
                >
                  <div>
                    <h2 className="font-[family-name:var(--font-display)] text-lg font-semibold text-foreground">
                      {category.name}
                    </h2>
                    <p className="mt-1 text-sm text-muted">{category.description}</p>
                  </div>
                  <span className="text-brand">→</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-line bg-surface px-5 py-8 md:px-8">
          <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {trustItems.map((item) => (
              <div key={item.title}>
                <p className="font-[family-name:var(--font-display)] text-sm font-semibold text-foreground">
                  {item.title}
                </p>
                <p className="mt-1 text-sm text-muted">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="brands" className="px-5 py-14 md:px-8 md:py-16">
          <div className="mx-auto max-w-6xl">
            <h2 className="font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight md:text-4xl">
              Shop by brand
            </h2>
            <p className="mt-3 max-w-2xl text-muted">
              Same style as top laptop shops — clear brand paths, WhatsApp to confirm live stock.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {categories.map((category) => (
                <a
                  key={category.name}
                  href={category.href}
                  className="border border-line bg-surface px-5 py-6 transition hover:border-brand hover:shadow-sm"
                >
                  <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold">
                    {category.name}
                  </h3>
                  <p className="mt-2 text-sm text-muted">{category.description}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section id="finder" className="bg-[#07161b] px-5 py-14 text-white md:px-8 md:py-16">
          <div className="mx-auto max-w-6xl">
            <h2 className="font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight md:text-4xl">
              Not sure which laptop?
            </h2>
            <p className="mt-3 max-w-2xl text-teal-50/75">
              Pick your need — we&apos;ll reply on WhatsApp with matching imported stock.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {finderOptions.map((option) => (
                <a
                  key={option.label}
                  href={whatsappLink(option.message)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-white/15 bg-white/5 px-5 py-5 text-sm font-semibold transition hover:border-teal-200/40 hover:bg-white/10"
                >
                  {option.label}
                </a>
              ))}
            </div>
          </div>
        </section>

        <section id="stock" className="px-5 py-14 md:px-8 md:py-16">
          <div className="mx-auto max-w-6xl">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <h2 className="font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight md:text-4xl">
                  Featured stock
                </h2>
                <p className="mt-3 max-w-2xl text-muted">
                  Specs first, like Galaxy/MasterLap listings — tap WhatsApp for live price.
                </p>
              </div>
              <a
                href={whatsappLink("Please share your full current laptop stock list.")}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-brand hover:text-brand-dark"
              >
                Ask for full stock →
              </a>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {featuredLaptops.map((laptop) => (
                <article
                  key={laptop.model}
                  className="flex flex-col border border-line bg-surface p-5 transition hover:border-brand"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">
                    {laptop.brand}
                  </p>
                  <h3 className="mt-2 font-[family-name:var(--font-display)] text-xl font-semibold leading-snug">
                    {laptop.model}
                  </h3>
                  <p className="mt-2 text-sm text-muted">{laptop.highlight}</p>
                  <p className="mt-4 flex-1 text-sm font-medium leading-relaxed text-foreground">
                    {laptop.specs}
                  </p>
                  <a
                    href={whatsappLink(
                      `Hi, I want price for ${laptop.brand} ${laptop.model} (${laptop.specs})`,
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex justify-center rounded-full bg-brand px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-dark"
                  >
                    WhatsApp for price
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="accessories" className="border-y border-line bg-surface px-5 py-14 md:px-8 md:py-16">
          <div className="mx-auto max-w-6xl">
            <h2 className="font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight md:text-4xl">
              Accessories
            </h2>
            <p className="mt-3 max-w-2xl text-muted">
              Chargers, bags, stands, hubs, mouse & keyboards — like Mega Zone accessories, focused on laptops.
            </p>
            <a
              href={whatsappLink("Hi, I need laptop accessories. Please share options.")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex rounded-full border border-brand px-6 py-3 text-sm font-semibold text-brand transition hover:bg-brand hover:text-white"
            >
              Ask for accessories
            </a>
          </div>
        </section>

        <section id="contact" className="px-5 py-14 md:px-8 md:py-16">
          <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
            <div>
              <h2 className="font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight md:text-4xl">
                Visit or WhatsApp
              </h2>
              <dl className="mt-8 space-y-4 text-sm">
                <div>
                  <dt className="font-semibold">Address</dt>
                  <dd className="mt-1 text-muted">{site.address}</dd>
                </div>
                <div>
                  <dt className="font-semibold">WhatsApp</dt>
                  <dd className="mt-1 text-muted">
                    {site.whatsappDisplay}
                    <br />
                    {site.whatsappAlt}
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold">Hours</dt>
                  <dd className="mt-1 text-muted">{site.hours}</dd>
                </div>
                <div>
                  <dt className="font-semibold">Email</dt>
                  <dd className="mt-1 text-muted">{site.email}</dd>
                </div>
              </dl>
            </div>
            <div className="flex flex-col justify-center border border-line bg-surface p-8">
              <p className="font-[family-name:var(--font-display)] text-2xl font-semibold">
                Confirm price before order
              </p>
              <p className="mt-3 text-muted">
                Same as MasterLap-style shops — stock moves fast, WhatsApp for exact price and availability.
              </p>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center justify-center rounded-full bg-[#25D366] px-6 py-3.5 text-sm font-semibold text-[#052e16] transition hover:brightness-110"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-line bg-[#07161b] px-5 py-8 text-teal-50/70 md:px-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <p className="font-[family-name:var(--font-display)] text-sm font-semibold text-white">
            {site.name}
          </p>
          <p className="text-sm">
            © 2026 {site.name}. Imported branded laptops · Gulberg Lahore · {site.domain}
          </p>
        </div>
      </footer>

      <a
        href={whatsappLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-30 inline-flex h-14 items-center rounded-full bg-[#25D366] px-5 text-sm font-semibold text-[#052e16] shadow-lg shadow-black/20 transition hover:brightness-110 md:bottom-8 md:right-8"
      >
        WhatsApp
      </a>
    </div>
  );
}
