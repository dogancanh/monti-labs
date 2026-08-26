'use client';

import { useState } from 'react';

// U+FE0E (text presentation selector) forces iOS Safari to render these arrows
// as plain glyphs instead of colour emoji.
const ARROW_UR = '↗︎'; // ↗
const ARROW_DOWN = '↓︎'; // ↓
const COPY_MARK = '©︎'; // ©

const copy = {
  tr: {
    nav: ['Ürünler', 'Çözümler', 'Biz kimiz'],
    badge: 'DIGITAL PRODUCTS · BUSINESS SYSTEMS',
    titleA: 'Fikirleri',
    titleB: 'çalışan sistemlere',
    titleC: 'dönüştürüyoruz.',
    intro:
      'Kendi dijital ürünlerimizi ve şirketlere özel web, mobil, SaaS ve otomasyon çözümlerini tasarlıyor, geliştiriyor ve büyütüyoruz.',
    primary: 'Görüşme planla',
    secondary: 'Ürünleri keşfet',
    workLabel: 'MONTI LABS SEÇKİSİ',
    workTitle: 'Gerçek problemler. Çalışan ürünler.',
    work: [
      ['Stüdyoların QR ile kişisel bakım planı gönderdiği, adımları ve hatırlatmaları otomatik takip eden B2B SaaS.', 'PROJEYİ İNCELE'],
      ['İstenmeyen arama ve mesajları telefona ulaşmadan eleyen iPhone uygulaması.', 'YAKINDA'],
      ['Bir showroomu uçtan uca dijital mağazaya dönüştüren e-ticaret deneyimi.', 'CANLI SİTE'],
    ],
    nextShift: 'NEXT SHIFT · Yeni sürüm yakında',
    solutionsLabel: 'NE GELİŞTİRİYORUZ',
    solutionsTitle: 'İhtiyaca göre teknoloji. Her işte ürün aklı.',
    solutionsIntro:
      'Hazır bir kalıba değil, çözülmesi gereken probleme bakıyoruz. Sonuç; kullanışlı, ölçeklenebilir ve işinize gerçekten oturan bir dijital sistem.',
    solutions: [
      ['01', 'Web & SaaS', 'Operasyonu tek yerde toplayan platformlar, paneller ve ölçeklenebilir B2B ürünler.'],
      ['02', 'Mobil ürünler', 'Fikirden mağaza yayınına; hızlı, sezgisel ve kalıcı mobil deneyimler.'],
      ['03', 'Otomasyon', 'Tekrarlanan işleri ortadan kaldıran, sistemleri birbirine bağlayan akışlar.'],
      ['04', 'İç operasyon araçları', 'Ekibinizin çalışma biçimine özel CRM, yönetim paneli ve operasyon araçları.'],
    ],
    principleKicker: 'THE MONTI WAY',
    principleTitle: 'Sadece teslim etmiyoruz. Sahipleniyoruz.',
    principleText:
      'Ürün stratejisini, operasyonu ve teknolojiyi aynı masada çözüyoruz. Çünkü iyi yazılım yalnızca çalışmaz; işi ileri taşır.',
    aboutLabel: 'BİZ KİMİZ',
    aboutTitle: 'İki kurucu. Tek ürün zihniyeti.',
    aboutText:
      'Monti Labs; ürün geliştirmeyi, mühendisliği ve iş süreçlerini birlikte düşünen iki yazılım mühendisi tarafından kuruldu.',
    founderRole: 'CO-FOUNDER',
    contactLabel: 'YENİ BİR ŞEY BAŞLATALIM',
    contactTitle: 'Aklınızdaki işi çalışan bir ürüne dönüştürelim.',
    contactText: 'Kısaca ihtiyacınızı anlatın. En doğru ilk adımla size dönelim.',
    name: 'ADINIZ',
    email: 'İŞ E-POSTANIZ',
    company: 'ŞİRKET',
    message: 'NE GELİŞTİRMEK İSTİYORSUNUZ?',
    send: 'Talebi gönder',
    formNote: 'Genellikle 1–2 iş günü içinde dönüş yaparız.',
    footerLine: 'Digital products. Built with intent.',
    language: 'EN',
  },
  en: {
    nav: ['Products', 'Solutions', 'About'],
    badge: 'DIGITAL PRODUCTS · BUSINESS SYSTEMS',
    titleA: 'We turn ideas',
    titleB: 'into systems',
    titleC: 'that work.',
    intro:
      'We design, build and grow our own digital products — and bespoke web, mobile, SaaS and automation solutions for ambitious companies.',
    primary: 'Start a conversation',
    secondary: 'Explore our work',
    workLabel: 'SELECTED BY MONTI LABS',
    workTitle: 'Real problems. Working products.',
    work: [
      ['B2B SaaS for studios to deliver personal aftercare plans by QR and automate every step and reminder — no customer account required.', 'VIEW PROJECT'],
      ['An iPhone app that filters unwanted calls and texts before they reach you.', 'COMING SOON'],
      ['An end-to-end digital storefront built from the showroom up.', 'LIVE SITE'],
    ],
    nextShift: 'NEXT SHIFT · New release coming soon',
    solutionsLabel: 'WHAT WE BUILD',
    solutionsTitle: 'The right technology. A product mindset, every time.',
    solutionsIntro:
      'We start with the problem, not a predefined stack. The result is a useful, scalable digital system that fits the way your business actually works.',
    solutions: [
      ['01', 'Web & SaaS', 'Scalable B2B products, platforms and dashboards that bring operations into one place.'],
      ['02', 'Mobile products', 'Fast, intuitive mobile experiences — from first idea to store release.'],
      ['03', 'Automation', 'Connected workflows that remove repetitive work and operational drag.'],
      ['04', 'Internal tools', 'Purpose-built CRM, dashboards and operation tools shaped around your team.'],
    ],
    principleKicker: 'THE MONTI WAY',
    principleTitle: 'We do not just deliver. We take ownership.',
    principleText:
      'We solve product strategy, operations and technology at the same table. Because good software does more than run — it moves the business forward.',
    aboutLabel: 'WHO WE ARE',
    aboutTitle: 'Two founders. One product mindset.',
    aboutText:
      'Monti Labs was founded by two software engineers who think about product, engineering and business operations as one system.',
    founderRole: 'CO-FOUNDER',
    contactLabel: 'START SOMETHING NEW',
    contactTitle: 'Let’s turn what you have in mind into a working product.',
    contactText: 'Tell us what you need. We will come back with the clearest first step.',
    name: 'YOUR NAME',
    email: 'WORK EMAIL',
    company: 'COMPANY',
    message: 'WHAT WOULD YOU LIKE TO BUILD?',
    send: 'Send inquiry',
    formNote: 'We usually respond within 1–2 business days.',
    footerLine: 'Digital products. Built with intent.',
    language: 'TR',
  },
};

export default function Home() {
  const [language, setLanguage] = useState<'tr' | 'en'>('tr');
  const text = copy[language];

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`Monti Labs proje talebi — ${form.get('company') || form.get('name')}`);
    const body = encodeURIComponent(
      `Ad: ${form.get('name')}\nE-posta: ${form.get('email')}\nŞirket: ${form.get('company')}\n\nProje:\n${form.get('message')}`,
    );
    window.location.href = `mailto:hello@montilabs.co?subject=${subject}&body=${body}`;
  };

  return (
    <main className="site-shell">
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Monti Labs ana sayfa">
          <img src="/monti-logo-horizontal.png" alt="Monti Labs" />
        </a>

        <nav className="main-nav" aria-label="Ana menü">
          <a href="#work">{text.nav[0]}</a>
          <a href="#solutions">{text.nav[1]}</a>
          <a href="#about">{text.nav[2]}</a>
        </nav>

        <button
          className="language-button"
          onClick={() => setLanguage(language === 'tr' ? 'en' : 'tr')}
          type="button"
          aria-label="Dili değiştir"
        >
          {text.language}
        </button>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span />{text.badge}</p>
          <h1>
            <span>{text.titleA}</span>
            <span className="title-accent">{text.titleB}</span>
            <span>{text.titleC}</span>
          </h1>
          <div className="hero-footer">
            <p>{text.intro}</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#contact">
                {text.primary}<span aria-hidden="true">{ARROW_UR}</span>
              </a>
              <a className="text-link" href="#work">
                {text.secondary}<span aria-hidden="true">{ARROW_DOWN}</span>
              </a>
            </div>
          </div>
        </div>

        <div className="hero-art" aria-hidden="true">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="orbit-core">
            <span>BUILD</span>
            <img src="/monti-mark-cobalt.png" alt="" />
            <span>SHIP</span>
          </div>
          <p className="orbit-note note-one">PRODUCTS</p>
          <p className="orbit-note note-two">SYSTEMS</p>
          <p className="orbit-note note-three">SCALE</p>
        </div>
      </section>

      <section className="work-preview" id="work">
        <div className="section-heading">
          <p>{text.workLabel}</p>
          <h2>{text.workTitle}</h2>
        </div>
        <div className="work-rail" aria-label="Seçilmiş projeler">
          <div className="work-track">
            {[0, 1].map((setIndex) => (
              <div className="work-set" aria-hidden={setIndex === 1 || undefined} key={setIndex}>
                <a
                  className="project-card project-inkstay"
                  href="https://inkstay.app"
                  target="_blank"
                  rel="noreferrer"
                  tabIndex={setIndex === 1 ? -1 : undefined}
                >
                  <div className="project-meta"><span>01</span><span>B2B SaaS</span></div>
                  <img className="project-logo project-logo-inkstay" src="/inkstay-logo.png" alt="" aria-hidden="true" />
                  <div className="project-content">
                    <h3>Inkstay</h3>
                    <p>{text.work[0][0]}</p>
                  </div>
                  <span className="project-action">{text.work[0][1]}</span>
                  <span className="card-arrow" aria-hidden="true">{ARROW_UR}</span>
                </a>
                <article className="project-card project-guardi">
                  <div className="project-meta"><span>02</span><span>iOS Product</span></div>
                  <div className="project-content">
                    <h3>Guardi</h3>
                    <p>{text.work[1][0]}</p>
                  </div>
                  <span className="project-action">{text.work[1][1]}</span>
                  <span className="card-arrow" aria-hidden="true">{ARROW_UR}</span>
                </article>
                <a
                  className="project-card project-ecce"
                  href="https://eccehome.com.tr/magaza"
                  target="_blank"
                  rel="noreferrer"
                  tabIndex={setIndex === 1 ? -1 : undefined}
                >
                  <div className="project-meta"><span>03</span><span>Commerce</span></div>
                  <div className="project-content">
                    <h3>Ecce Home</h3>
                    <p>{text.work[2][0]}</p>
                  </div>
                  <span className="project-action">{text.work[2][1]}</span>
                  <span className="card-arrow" aria-hidden="true">{ARROW_UR}</span>
                </a>
              </div>
            ))}
          </div>
        </div>
        <div className="next-shift"><span className="live-dot" />{text.nextShift}</div>
      </section>

      <section className="solutions" id="solutions">
        <div className="solutions-intro">
          <p className="section-kicker">{text.solutionsLabel}</p>
          <h2>{text.solutionsTitle}</h2>
          <p>{text.solutionsIntro}</p>
        </div>
        <div className="solution-list">
          {text.solutions.map(([number, title, description]) => (
            <article className="solution-row" key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{description}</p>
              <i aria-hidden="true">{ARROW_UR}</i>
            </article>
          ))}
        </div>
      </section>

      <section className="principle">
        <div className="principle-orbit" aria-hidden="true"><img src="/monti-mark-cream.png" alt="" /></div>
        <div className="principle-copy">
          <p>{text.principleKicker}</p>
          <h2>{text.principleTitle}</h2>
          <div><span>01 — 04</span><p>{text.principleText}</p></div>
        </div>
        <div className="marquee" aria-hidden="true">
          <span>THINK / BUILD / SHIP / LEARN /&nbsp;</span>
          <span>THINK / BUILD / SHIP / LEARN /&nbsp;</span>
        </div>
      </section>

      <section className="about" id="about">
        <p className="section-kicker">{text.aboutLabel}</p>
        <div className="about-copy">
          <h2>{text.aboutTitle}</h2>
          <p>{text.aboutText}</p>
        </div>
        <div className="founders">
          <article>
            <div className="founder-photo">
              <img src="/ismail-semih-pehlivan.png" alt="İsmail Semih Pehlivan" />
            </div>
            <div><h3>İsmail Semih Pehlivan</h3><p>{text.founderRole}</p></div>
          </article>
          <article>
            <div className="founder-photo">
              <img src="/dogancan-hirdavatcioglu.png" alt="Doğancan Hırdavatçıoğlu" />
            </div>
            <div><h3>Doğancan Hırdavatçıoğlu</h3><p>{text.founderRole}</p></div>
          </article>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="contact-copy">
          <p className="section-kicker">{text.contactLabel}</p>
          <h2>{text.contactTitle}</h2>
          <p>{text.contactText}</p>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="field-grid">
            <label><span>{text.name}</span><input name="name" autoComplete="name" required /></label>
            <label><span>{text.email}</span><input name="email" type="email" autoComplete="email" required /></label>
          </div>
          <label><span>{text.company}</span><input name="company" autoComplete="organization" /></label>
          <label><span>{text.message}</span><textarea name="message" rows={4} required /></label>
          <div className="form-footer">
            <button className="button form-submit" type="submit">{text.send}<span aria-hidden="true">{ARROW_UR}</span></button>
            <small>{text.formNote}</small>
          </div>
        </form>
      </section>

      <footer className="site-footer">
        <a className="wordmark footer-wordmark" href="#top" aria-label="Monti Labs ana sayfa"><img src="/monti-mark-cream.png" alt="" /><span>Monti Labs</span></a>
        <p>{text.footerLine}</p>
        <div><span>{COPY_MARK} {new Date().getFullYear()}</span><a href="mailto:hello@montilabs.co">hello@montilabs.co <span aria-hidden="true">{ARROW_UR}</span></a></div>
      </footer>

    </main>
  );
}
