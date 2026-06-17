const companyLogo = "/logo-horizontal.png";
const officialLineQr = "https://qr-official.line.me/gs/M_sog7070i_BW.png?oat_content=qr";
const googleMapUrl = "https://maps.app.goo.gl/WudMb6uoqz1r4xkBA";

const services = [
  {
    icon: "insurance",
    title: "保険相談・事業承継",
    text: "万一への備え、事業保障、役員退職金、福利厚生、事業承継まで、法人・個人を問わずお客様の安心を守る設計を行います。",
    href: "/insurance/",
    image: "/luxury-motion/service-insurance.jpg",
  },
  {
    icon: "asset",
    title: "資産形成・老後資金",
    text: "将来のキャッシュフローを見える化し、保険・積立・資産運用を含めて現実的に整理します。",
    href: "/asset/",
    image: "/luxury-motion/service-asset.jpg",
  },
  {
    icon: "will",
    title: "遺言・相続・任意後見",
    text: "争族防止、認知症対策、親の資産管理など、家族が困らない準備をサポートします。",
    href: "/inheritance/",
    image: "/luxury-motion/service-inheritance.jpg",
  },
  {
    icon: "realestate",
    title: "不動産・資産承継",
    text: "不動産を含む資産全体を把握し、売却・活用・承継の方向性を一緒に考えます。",
    href: "/property/",
    image: "/luxury-motion/service-property.jpg",
  },
  {
    icon: "asset",
    title: "体験メニュー",
    text: "旅、学び、味わい、出会った空気。身体で覚えた景色を、人生や仕事の基準に変える体験資産の目録です。",
    href: "/experience/",
    image: "/luxury-motion/service-experience.jpg",
  },
  {
    icon: "event",
    title: "イベント",
    text: "TTC 日本酒の会をはじめ、セミナーや体験の催しを通じて、人とのつながりや学びの場をつくっています。",
    href: "/events/",
    image: "/luxury-motion/service-events.jpg",
  },
];

const heroServiceTickets = [
  ["保険相談", "INSURANCE", "/insurance/"],
  ["資産形成", "ASSET", "/asset/"],
  ["遺言・相続", "SUCCESSION", "/inheritance/"],
  ["不動産承継", "REAL ESTATE", "/property/"],
  ["体験メニュー", "EXPERIENCE", "/experience/"],
  ["イベント", "EVENT", "/events/"],
];

const strengths = [
  "保険だけで終わらない総合相談",
  "お客様一人ひとりに寄り添う実務感覚",
  "相続・任意後見・不動産まで横断的に整理",
  "公式LINE・オンライン相談にも対応",
];

const flow = [
  ["01", "初回相談", "現在のお悩みや将来への不安を丁寧に伺います。"],
  ["02", "見える化", "家計・会社・資産・相続の課題を整理します。"],
  ["03", "ご提案", "保険・相続・不動産を横断して解決策を設計します。"],
  ["04", "実行支援", "専門家連携も含めて、実行まで伴走します。"],
];

const values = [
  {
    title: "まじめに、ちゃんと。",
    text: "目先の提案ではなく、お客様の幸せを実現するために、誠実に向き合い、丁寧に考え抜きます。",
  },
  {
    title: "知識と考え方を届ける。",
    text: "商品を売る前に、お客様の選択肢が広がる知識と、明日から豊かになれる考え方を提供します。",
  },
  {
    title: "共に成長する。",
    text: "保険のプロフェッショナルであり続けながら、新しい価値観を学び、お客様と共に成長します。",
  },
];

const whyReasons = [
  ["total", "総合設計", "法人・個人を問わず全体像から設計", "/luxury-motion/why-total.jpg"],
  ["peace", "安心設計", "相続・介護・認知症対策まで配慮", "/luxury-motion/why-peace.jpg"],
  ["network", "専門家連携", "司法書士・税理士等との連携も視野に", "/luxury-motion/why-network.jpg"],
  ["action", "実行支援", "相談で終わらず手続きまで伴走", "/luxury-motion/why-action.jpg"],
];

function ServiceIcon({ type }) {
  const common = "h-8 w-8";

  if (type === "insurance") {
    return (
      <svg className={common} viewBox="0 0 64 64" fill="none" aria-hidden="true">
        <path d="M32 6L52 14V29C52 42.5 43.8 53.6 32 58C20.2 53.6 12 42.5 12 29V14L32 6Z" stroke="currentColor" strokeWidth="4" strokeLinejoin="round" />
        <path d="M22 32L29 39L43 24" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (type === "asset") {
    return (
      <svg className={common} viewBox="0 0 64 64" fill="none" aria-hidden="true">
        <path d="M10 48H54" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
        <path d="M16 42L27 31L36 38L50 20" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M47 20H50V23" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M18 54C23.5 54 28 51.8 28 49C28 46.2 23.5 44 18 44C12.5 44 8 46.2 8 49C8 51.8 12.5 54 18 54Z" fill="currentColor" opacity="0.22" />
        <path d="M46 54C51.5 54 56 51.8 56 49C56 46.2 51.5 44 46 44C40.5 44 36 46.2 36 49C36 51.8 40.5 54 46 54Z" fill="currentColor" opacity="0.22" />
      </svg>
    );
  }

  if (type === "sake") {
    return (
      <svg className={common} viewBox="0 0 64 64" fill="none" aria-hidden="true">
        <path d="M28 7H36V15L38 19C41 23 42 27 42 32V50C42 53 40 55 37 55H27C24 55 22 53 22 50V32C22 27 23 23 26 19L28 15V7Z" stroke="currentColor" strokeWidth="4" strokeLinejoin="round" />
        <path d="M26 7H38" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
        <path d="M22 38H42" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      </svg>
    );
  }

  if (type === "event") {
    return (
      <svg className={common} viewBox="0 0 64 64" fill="none" aria-hidden="true">
        <rect x="10" y="14" width="44" height="42" rx="5" stroke="currentColor" strokeWidth="4" />
        <path d="M10 26H54" stroke="currentColor" strokeWidth="4" />
        <path d="M22 8V18" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
        <path d="M42 8V18" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
        <path d="M22 38L28 44L42 31" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (type === "will") {
    return (
      <svg className={common} viewBox="0 0 64 64" fill="none" aria-hidden="true">
        <path d="M18 8H42L50 16V56H18V8Z" stroke="currentColor" strokeWidth="4" strokeLinejoin="round" />
        <path d="M42 8V17H50" stroke="currentColor" strokeWidth="4" strokeLinejoin="round" />
        <path d="M25 27H40" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
        <path d="M25 37H36" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
        <path d="M37 50L51 36L55 40L41 54H37V50Z" fill="currentColor" opacity="0.85" />
      </svg>
    );
  }

  return (
    <svg className={common} viewBox="0 0 64 64" fill="none" aria-hidden="true">
      <path d="M10 30L32 12L54 30" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16 28V54H48V28" stroke="currentColor" strokeWidth="4" strokeLinejoin="round" />
      <path d="M27 54V40H37V54" stroke="currentColor" strokeWidth="4" strokeLinejoin="round" />
      <path d="M22 32H30" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      <path d="M38 32H42" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
}

function WhyIcon({ type }) {
  const common = "h-8 w-8";

  if (type === "total") {
    return (
      <svg className={common} viewBox="0 0 64 64" fill="none" aria-hidden="true">
        <path d="M32 8C18.7 8 8 18.7 8 32C8 45.3 18.7 56 32 56C45.3 56 56 45.3 56 32C56 18.7 45.3 8 32 8Z" stroke="currentColor" strokeWidth="4" />
        <path d="M32 15V32L43 43" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M17 35C22 31 27 29 32 29C37 29 42 31 47 35" stroke="currentColor" strokeWidth="4" strokeLinecap="round" opacity="0.45" />
      </svg>
    );
  }

  if (type === "peace") {
    return (
      <svg className={common} viewBox="0 0 64 64" fill="none" aria-hidden="true">
        <path d="M32 8C21.5 8 13 16.5 13 27C13 42 32 56 32 56C32 56 51 42 51 27C51 16.5 42.5 8 32 8Z" stroke="currentColor" strokeWidth="4" strokeLinejoin="round" />
        <path d="M23 29L30 36L42 24" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (type === "network") {
    return (
      <svg className={common} viewBox="0 0 64 64" fill="none" aria-hidden="true">
        <path d="M32 12V28" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
        <path d="M20 40L32 28L44 40" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="32" cy="12" r="7" stroke="currentColor" strokeWidth="4" />
        <circle cx="18" cy="44" r="8" stroke="currentColor" strokeWidth="4" />
        <circle cx="46" cy="44" r="8" stroke="currentColor" strokeWidth="4" />
      </svg>
    );
  }

  return (
    <svg className={common} viewBox="0 0 64 64" fill="none" aria-hidden="true">
      <path d="M14 50H50" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      <path d="M20 50V14H42L38 24L46 34H20" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M27 41L32 46L42 36" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Logo({ size = "header" }) {
  const height = size === "footer" ? "h-12 md:h-14" : "h-10 md:h-12";
  return (
    <img
      src={companyLogo}
      alt="Tokyo Total Consulting"
      className={`${height} w-auto object-contain drop-shadow-[0_2px_8px_rgba(0,0,0,0.28)]`}
    />
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#F7F3EA] text-slate-900">
      <header className="sticky top-0 z-50 border-b border-white/40 bg-[#0B1F3A]/95 text-white backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
          <Logo />
          <nav className="hidden items-center gap-8 text-sm text-white/85 md:flex">
            <a href="#concept" className="hover:text-[#D8B46A]">私たちについて</a>
            <a href="#service" className="hover:text-[#D8B46A]">相談できること</a>
            <a href="#flow" className="hover:text-[#D8B46A]">相談の流れ</a>
            <a href="/experience/" className="hover:text-[#D8B46A]">体験メニュー</a>
            <a href="#contact" className="rounded-full bg-[#D8B46A] px-5 py-2 font-semibold text-[#0B1F3A] hover:bg-[#e5c77d]">公式LINEで相談</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero-luxury relative min-h-[760px] overflow-hidden bg-[#050b16] text-white md:min-h-[820px]">
          <img
            src="/salon/archive-lounge-photo-web.jpg"
            alt=""
            aria-hidden="true"
            className="hero-luxury-photo absolute inset-0 h-full w-full object-cover"
          />
          <div className="hero-luxury-veil absolute inset-0" />
          <div className="luxury-gold-lines absolute inset-0" aria-hidden="true" />
          <div className="luxury-spotlight luxury-spotlight-left absolute" aria-hidden="true" />
          <div className="luxury-spotlight luxury-spotlight-right absolute" aria-hidden="true" />

          <div className="relative mx-auto grid min-h-[760px] max-w-7xl items-center gap-12 px-5 py-20 md:min-h-[820px] md:grid-cols-[0.95fr_1.05fr] md:px-8">
            <div className="luxury-reveal">
              <div className="luxury-pill mb-6 inline-flex items-center gap-2 rounded-full border border-[#D8B46A]/45 bg-black/30 px-4 py-2 text-sm text-white/90 backdrop-blur-md">
                <span className="text-[#D8B46A]">Luxury Motion Test</span>
                お客様のための総合相談パートナー
              </div>
              <p className="mb-4 text-sm font-semibold tracking-[0.34em] text-[#F1D58A]">TOTAL LIFE CONSULTING</p>
              <h2 className="luxury-title max-w-3xl text-5xl font-semibold leading-tight md:text-7xl">
                保険・相続・不動産を横断し、
                <span className="luxury-title-gold text-[#D8B46A]">本当の安心</span>を手に入れる。
              </h2>
              <p className="mt-7 max-w-2xl text-lg leading-9 text-white/86">
                私たちは、保険を売るだけの会社ではありません。お客様が、将来のお金・相続・資産形成・事業承継に不安を残さないための、総合相談パートナーです。
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a href="#contact" className="luxury-button luxury-button-primary inline-flex items-center justify-center gap-2 rounded-full bg-[#D8B46A] px-7 py-4 font-semibold text-[#0B1F3A] shadow-xl shadow-black/20 transition hover:translate-y-[-1px] hover:bg-[#e5c77d]">
                  公式LINEで相談する <span>→</span>
                </a>
                <a href="#service" className="luxury-button-outline inline-flex items-center justify-center rounded-full border border-white/35 px-7 py-4 font-semibold text-white transition hover:bg-white/10">
                  相談内容を見る
                </a>
              </div>
              <div className="luxury-marquee mt-12 overflow-hidden border-y border-[#D8B46A]/30 py-3 text-xs font-semibold tracking-[0.28em] text-[#F1D58A]">
                <div>
                  <span>INSURANCE</span>
                  <span>SUCCESSION</span>
                  <span>REAL ESTATE</span>
                  <span>ASSET DESIGN</span>
                  <span>PRIVATE CONSULTING</span>
                  <span>INSURANCE</span>
                  <span>SUCCESSION</span>
                  <span>REAL ESTATE</span>
                </div>
              </div>
            </div>

            <div className="luxury-reveal luxury-reveal-delay relative">
              <div className="luxury-stage">
                <div className="luxury-stage-ring" aria-hidden="true" />
                <div className="luxury-frame luxury-hero-card rounded-[2rem] border border-[#D8B46A]/35 bg-white/12 p-4 shadow-2xl backdrop-blur-xl">
                  <div className="rounded-[1.5rem] bg-[#F7F3EA]/95 p-6 text-slate-900">
                    <div className="luxury-gradient-panel mb-5 min-h-[22rem] rounded-[1.25rem] bg-gradient-to-br from-slate-900 via-[#0B1F3A] to-[#D8B46A] p-6 text-white">
                      <div className="flex min-h-[19rem] flex-col justify-between rounded-2xl border border-[#D8B46A]/50 bg-black/30 p-5 backdrop-blur-sm">
                        <div className="flex items-center gap-3">
                          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#D8B46A] text-[#0B1F3A] font-semibold shadow-lg shadow-[#D8B46A]/30">
                            総
                          </div>
                          <div>
                            <p className="text-xs tracking-[0.2em] text-[#F1D58A]">PRIVATE CONSULTING</p>
                            <p className="font-semibold">お客様の未来を守る設計</p>
                          </div>
                        </div>
                        <div>
                          <p className="mb-2 text-4xl font-semibold text-white">Total Life Design</p>
                          <p className="text-sm leading-7 text-white/78">保険・相続・不動産・老後資金をひとつの地図にして、次の一手を明確にします。</p>
                        </div>
                      </div>
                    </div>
                    <div className="grid gap-3 sm:grid-cols-2">
                      {strengths.map((item) => (
                        <div key={item} className="luxury-mini-card flex items-start gap-2 rounded-2xl bg-white p-4 text-sm shadow-sm">
                          <span className="mt-0.5 shrink-0 text-[#B28A36]">✓</span>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="luxury-service-tickets" aria-label="相談できること">
                  {heroServiceTickets.map(([title, label, href], index) => (
                    <a
                      key={title}
                      href={href}
                      className="luxury-floating-ticket luxury-service-ticket"
                      style={{ "--ticket-index": index }}
                    >
                      <p>{label}</p>
                      <strong>{title}</strong>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="luxury-ribbon" aria-hidden="true">
          <span>Tokyo Total Consulting</span>
          <span>Private Wealth Design</span>
          <span>Legacy Planning</span>
          <span>Tokyo Total Consulting</span>
          <span>Private Wealth Design</span>
        </div>

        <section id="concept" className="luxury-mission-section mx-auto max-w-7xl px-5 py-20 md:px-8">
          <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:items-end">
            <div className="luxury-reveal">
              <p className="mb-3 text-sm font-semibold tracking-[0.26em] text-[#B28A36]">OUR MISSION</p>
              <h3 className="text-3xl font-semibold leading-tight text-[#0B1F3A] md:text-5xl">
                知識と考え方で、人生と未来を豊かにする。
              </h3>
            </div>
            <div className="luxury-mission-card luxury-card luxury-reveal luxury-reveal-delay rounded-[2rem] bg-white p-8 shadow-sm md:p-10">
              <p className="text-lg leading-9 text-slate-700">
                所得の多寡だけで幸せが決まるのではなく、知識と考え方によって、人生の選択肢は広がります。私たちは、お客様の価値観を大切にしながら、今すぐ明日から豊かになれる「考え方」と「解決策」を提供します。
              </p>
            </div>
          </div>
        </section>

        <section className="luxury-why-section bg-white py-20">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <p className="mb-3 text-sm font-semibold tracking-[0.26em] text-[#B28A36]">WHY CHOOSE US</p>
                <h3 className="text-3xl font-semibold text-[#0B1F3A] md:text-5xl">選ばれる理由</h3>
              </div>
              <p className="max-w-xl leading-8 text-slate-600">
                単一の商品ではなく、お客様の人生・家族・資産を一体で見て、必要な専門家と連携しながら解決まで伴走します。
              </p>
            </div>
            <div className="grid gap-5 md:grid-cols-4">
              {whyReasons.map(([icon, title, text, image]) => (
                <div key={title} className="luxury-why-card luxury-card rounded-[1.5rem] border border-slate-100 bg-[#F7F3EA] p-4">
                  <figure className="luxury-why-media">
                    <img src={image} alt="" loading="lazy" />
                    <span className="luxury-why-icon"><WhyIcon type={icon} /></span>
                  </figure>
                  <div className="p-2 pt-5">
                    <h4 className="mb-3 text-xl font-semibold text-[#0B1F3A]">{title}</h4>
                    <p className="leading-7 text-slate-600">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="service" className="mx-auto max-w-7xl px-5 py-20 md:px-8">
          <div className="mb-12 text-center">
            <p className="mb-3 text-sm font-semibold tracking-[0.26em] text-[#B28A36]">SERVICE</p>
            <h3 className="text-3xl font-semibold text-[#0B1F3A] md:text-5xl">相談できること</h3>
            <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-600">
              漠然とした不安を、見える課題に変える。保険・相続・不動産・資産形成を横断して、今必要な一手を一緒に考えます。
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {services.map((service) => (
              <div key={service.title} className="luxury-service-card luxury-card group flex flex-col rounded-[2rem] bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                <figure className="luxury-service-media">
                  <img src={service.image} alt="" loading="lazy" />
                  <span className="luxury-service-icon"><ServiceIcon type={service.icon} /></span>
                </figure>
                <div className="flex flex-1 flex-col p-3 pt-6">
                {service.tag ? (
                  <p className="mt-5 text-xs font-semibold tracking-[0.22em] text-[#B28A36]">{service.tag}</p>
                ) : null}
                <h4 className={`mb-4 text-2xl font-semibold text-[#0B1F3A] ${service.tag ? "mt-1" : "mt-0"}`}>{service.title}</h4>
                <p className="leading-8 text-slate-600">{service.text}</p>
                {service.href ? (
                  <a
                    href={service.href}
                    className="mt-6 inline-flex items-center gap-2 self-start rounded-full border border-[#B28A36] px-5 py-2 text-sm font-semibold text-[#B28A36] transition hover:bg-[#B28A36] hover:text-[#0B1F3A]"
                  >
                    詳しく見る <span>→</span>
                  </a>
                ) : null}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="flow" className="luxury-flow-section bg-[#0B1F3A] py-20 text-white">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <div className="mb-12">
              <p className="mb-3 text-sm font-semibold tracking-[0.26em] text-[#D8B46A]">CONSULTING FLOW</p>
              <h3 className="text-3xl font-semibold md:text-5xl">ご相談の流れ</h3>
            </div>
            <div className="luxury-flow-grid grid gap-5 md:grid-cols-4">
              {flow.map(([num, title, text]) => (
                <div key={num} className="luxury-flow-card luxury-dark-card rounded-[1.5rem] border border-white/15 bg-white/10 p-6 backdrop-blur">
                  <div className="luxury-flow-card-head">
                    <p className="luxury-flow-num">{num}</p>
                    <span>STEP {num}</span>
                  </div>
                  <div className="luxury-flow-dot" aria-hidden="true" />
                  <h4 className="mb-3 mt-10 text-xl font-semibold">{title}</h4>
                  <p className="leading-7 text-white/75">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <div className="mb-12 text-center">
              <p className="mb-3 text-sm font-semibold tracking-[0.26em] text-[#B28A36]">CONSULTATION SALON</p>
              <h3 className="text-3xl font-semibold text-[#0B1F3A] md:text-5xl">相談に来るというより、<br className="hidden sm:block" />お話をしに来る気持ちで。</h3>
              <p className="mx-auto mt-5 max-w-3xl leading-8 text-slate-600">
                大切なお金やご家族のことは、すぐに結論を出すよりも、まず落ち着いて状況やお気持ちを整理することが大切です。森下駅から徒歩1分、ゆったりとした空間でお話を伺います。
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-center">
              <figure className="luxury-image overflow-hidden rounded-[2rem] shadow-sm">
                <img
                  src="/salon/archive-lounge-photo-web.jpg"
                  alt="東京トータルコンサルティングの相談サロンの様子"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </figure>

              <div className="flex flex-col gap-6">
                <div className="luxury-card rounded-[2rem] bg-[#F7F3EA] p-8 shadow-sm">
                  <p className="mb-4 text-sm font-semibold tracking-[0.2em] text-[#B28A36]">CUSTOMER'S VOICE</p>
                  <blockquote className="leading-8 text-slate-700">
                    「小西さんの話は初めて聞くことばかりで面白いです。お金のことでわからないことが出てきたら、すぐ小西さんに聞くようにしています。」
                  </blockquote>
                  <div className="mt-5 flex items-center gap-3">
                    <img
                      src="/salon/customer-maeda.jpg"
                      alt="前田珠里さん"
                      className="h-12 w-12 rounded-full object-cover"
                      loading="lazy"
                    />
                    <div>
                      <p className="text-sm font-semibold text-[#0B1F3A]">前田 珠里さん</p>
                      <p className="text-xs text-slate-500">不動産業 / 20代</p>
                    </div>
                  </div>
                </div>
                <a
                  href="/salon/"
                  className="inline-flex items-center justify-center gap-2 self-start rounded-full bg-[#0B1F3A] px-7 py-4 font-semibold text-white transition hover:bg-[#183B68]"
                >
                  サロンの様子をもっと見る <span>→</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="luxury-values-section mx-auto max-w-7xl px-5 py-20 md:px-8">
          <div className="luxury-values-heading mb-12 text-center">
            <p className="mb-3 text-sm font-semibold tracking-[0.26em] text-[#B28A36]">OUR VALUES</p>
            <h3 className="text-3xl font-semibold text-[#0B1F3A] md:text-5xl">私たちが大切にしていること</h3>
            <p className="mx-auto mt-5 max-w-3xl leading-8 text-slate-600">
              東京トータルコンサルティングの原点は、商品ではなく、お客様の幸せに向き合う姿勢です。社員一人ひとりが同じ判断軸を持てるよう、私たちは次の価値観を大切にしています。
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {values.map((value, index) => (
              <div key={value.title} className="luxury-value-card luxury-card rounded-[2rem] bg-white p-8 shadow-sm">
                <p className="luxury-value-number mb-6 text-4xl font-semibold text-[#D8B46A]">0{index + 1}</p>
                <h4 className="mb-4 text-2xl font-semibold text-[#0B1F3A]">{value.title}</h4>
                <p className="leading-8 text-slate-600">{value.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="bg-white py-20">
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <div className="mb-12 text-center">
              <p className="mb-3 text-sm font-semibold tracking-[0.26em] text-[#B28A36]">CONTACT</p>
              <h3 className="text-3xl font-semibold text-[#0B1F3A] md:text-5xl">まずは公式LINEからご相談ください</h3>
              <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-600">
                ご相談予約・オンライン相談・お問い合わせは、公式LINEからスムーズにご連絡いただけます。初回は現状整理から、わかりやすくお話しします。
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-center">
              <div className="luxury-card rounded-[2rem] bg-[#F7F3EA] p-8 text-center shadow-sm">
                <p className="mb-4 text-sm font-semibold tracking-[0.2em] text-[#B28A36]">OFFICIAL LINE</p>
                <div className="mx-auto flex max-w-xs justify-center rounded-[2rem] bg-white p-5 shadow-sm">
                  <img src={officialLineQr} alt="東京トータルコンサルティング公式LINE QRコード" className="h-52 w-52 object-contain" />
                </div>
                <p className="mt-5 text-sm leading-7 text-slate-600">
                  スマートフォンでQRコードを読み取り、友だち追加してご相談ください。
                </p>
              </div>

              <div className="luxury-dark-card rounded-[2rem] bg-[#0B1F3A] p-8 text-white shadow-xl md:p-10">
                <p className="mb-3 text-sm font-semibold tracking-[0.22em] text-[#D8B46A]">RESERVATION</p>
                <h4 className="text-2xl font-semibold md:text-3xl">相談の第一歩を、もっと気軽に。</h4>
                <p className="mt-5 leading-8 text-white/75">
                  公式LINEでは、相談予約・オンライン面談の調整・資料のやり取りまで、スムーズに進められます。お電話でのご連絡も可能です。
                </p>
                <div className="mt-8 grid grid-cols-2 gap-3">
                  <a href="https://lin.ee/tT6CaJn" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-1 whitespace-nowrap rounded-full bg-[#D8B46A] px-3 py-3 text-sm font-semibold text-[#0B1F3A] transition hover:bg-[#e5c77d]">
                    公式LINE <span>→</span>
                  </a>
                  <a href="tel:0120900984" className="flex items-center justify-center whitespace-nowrap rounded-full border border-white/25 px-3 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
                    0120-900-984
                  </a>
                </div>
                <div className="mt-8 rounded-2xl bg-white/10 p-4 text-sm leading-7 text-white/70">
                  <p className="mb-2 text-xs font-semibold tracking-[0.22em] text-[#D8B46A]">会社所在地</p>
                  <p>東京都墨田区立川1-2-8 赤津ビル1F / 森下駅 A5出口 徒歩1分</p>
                  <div className="mt-4 flex justify-center">
                    <a href={googleMapUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-full border border-white/25 px-4 py-2 text-xs font-semibold text-white transition hover:bg-white/10">
                      Google Mapで開く
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#071529] px-5 py-10 text-white md:px-8">
        <div className="mx-auto max-w-7xl">
          <div>
            <Logo size="footer" />
            <p className="mt-4 text-sm font-semibold tracking-[0.08em] text-white/80">有限会社 東京トータルコンサルティング</p>
            <p className="mt-3 text-sm text-white/60">生命保険代理業 / 損害保険代理業 / ファイナンシャルプランニング / 遺言書作成サポート</p>
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-4 text-sm text-white/60">
            <a href="/privacy/#sec01" className="hover:text-white">勧誘方針</a>
            <a href="/privacy/#sec02" className="hover:text-white">個人情報の安全管理にかかる基本方針</a>
            <a href="/privacy/#sec03" className="hover:text-white">プライバシーポリシー</a>
            <a href="/privacy/#sec04" className="hover:text-white">個人情報の安全管理に関する規定</a>
            <a href="/privacy/#sec05" className="hover:text-white">顧客本位の業務運営に関する方針（FD宣言）</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
