import React from "react";

function Logo({ variant = "horizontal" }) {
  const src = variant === "vertical" ? "/logo-vertical.png" : "/logo.png";
  const alt = "有限会社 東京トータルコンサルティング";
  return (
    <img
      src={src}
      alt={alt}
      className={variant === "vertical" ? "h-14 w-auto" : "h-9 w-auto"}
      loading="lazy"
    />
  );
}

function SectionTitle({ kicker, title, lead }) {
  return (
    <header className="mb-8">
      {kicker ? (
        <div className="text-sm tracking-[0.3em] uppercase text-amber-300 mb-2">
          {kicker}
        </div>
      ) : null}
      <h2 className="text-2xl sm:text-3xl font-semibold text-slate-100">
        {title}
      </h2>
      {lead ? (
        <p className="mt-3 text-slate-200/90 text-sm sm:text-base leading-relaxed max-w-3xl">
          {lead}
        </p>
      ) : null}
    </header>
  );
}

function Card({ icon, title, body }) {
  return (
    <div className="group rounded-xl border border-white/10 bg-white/5 backdrop-blur p-5 hover:bg-white/10 transition">
      <div className="mb-4 h-10 w-10 flex items-center justify-center rounded-lg border border-amber-300/40 bg-amber-300/10 text-amber-200">
        {icon}
      </div>
      <div className="font-medium text-slate-100">{title}</div>
      <div className="mt-2 text-sm text-slate-200/90 leading-relaxed">
        {body}
      </div>
    </div>
  );
}

const Icons = {
  shield: (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
      <path
        d="M12 3 5 6v7c0 5 3 8 7 9 4-1 7-4 7-9V6l-7-3Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M9.5 12.2 11 14l3.6-4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  lineChart: (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
      <path
        d="M4 19h16"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M7 15 11 11l3 3 5-6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 15v4M11 11v8M14 14v5M19 9v10"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  ),
  document: (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
      <path
        d="M7 3h8l4 4v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M15 3v5h5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M8 13h8M8 17h8M8 9h4"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  ),
  home: (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
      <path
        d="M3 10 12 3l9 7v11a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-6H9v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V10Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  ),
  compass: (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
      <path
        d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M14.8 9.2 13 14l-4.8 1.8L11 11z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
      <path
        d="M12 12h0"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  ),
  heartCheck: (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
      <path
        d="M12 21s-8-4.5-8-11a4.5 4.5 0 0 1 8-2.3A4.5 4.5 0 0 1 20 10c0 6.5-8 11-8 11Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M9.5 11.5 11 13l3.6-4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  network: (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
      <path
        d="M12 3v4m0 10v4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M5 12h4m6 0h4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M8 4 12 8l4-4M8 20l4-4 4 4"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
    </svg>
  ),
  flag: (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
      <path
        d="M6 21V4h7l1 2h4v10h-7l-1-2H6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M8 12h4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  ),
};

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <header className="border-b border-white/10 bg-slate-950/80 backdrop-blur sticky top-0 z-50">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex h-16 items-center justify-between gap-6">
            <Logo />
            <div className="hidden sm:flex items-center gap-4 text-xs text-slate-200/80">
              <span>平日 9:00-18:00</span>
              <span className="h-4 w-px bg-white/15" />
              <a
                href="tel:0336351875"
                className="rounded-lg border border-white/10 px-3 py-1 text-slate-100 hover:bg-white/10 transition"
              >
                03-3635-1875
              </a>
              <a
                href="https://qr-official.line.me/gs/M_sog7070i_BW.png?oat_content=qr"
                className="rounded-lg border border-amber-300/30 bg-amber-300/10 px-3 py-1 text-amber-100 hover:bg-amber-300/15 transition"
                target="_blank"
                rel="noreferrer"
              >
                LINE公式QR
              </a>
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section className="bg-gradient-to-b from-slate-950 via-slate-950 to-slate-950 pb-16 pt-10">
          <div className="mx-auto max-w-6xl px-4">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
              <div>
                <div className="text-sm tracking-[0.3em] uppercase text-amber-300 mb-3">
                  TOTAL LIFE CONSULTING
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-100 leading-tight">
                  保険・相続・不動産を横断し、
                  <span className="text-amber-200">
                    本当の安心を手に入れる
                  </span>
                </h1>
                <p className="mt-5 text-sm sm:text-base text-slate-200/90 leading-relaxed max-w-xl">
                  予防・防衛・緩和・立て直し。お金の課題は、単体の対策では解決しません。
                  保険、資産形成、相続、任意後見、不動産まで横断して設計し、安心を形にしていきます。
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href="https://qr-official.line.me/gs/M_sog7070i_BW.png?oat_content=qr"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-xl border border-amber-300/40 bg-amber-300/10 px-5 py-3 text-sm text-amber-50 hover:bg-amber-300/15 transition"
                  >
                    公式LINEで相談する
                  </a>
                  <a
                    href="#access"
                    className="rounded-xl border border-white/10 px-5 py-3 text-sm text-slate-100 hover:bg-white/10 transition"
                  >
                    アクセスを見る
                  </a>
                </div>
              </div>

              <div className="flex flex-col items-center gap-6">
                <Logo variant="vertical" />
                <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur p-6 w-full">
                  <div className="text-sm text-amber-200 mb-3">
                    OUR MISSION
                  </div>
                  <div className="text-slate-100 font-medium text-lg">
                    知識と考え方で、人生と未来を豊かにする。
                  </div>
                  <div className="mt-3 text-sm text-slate-200/85 leading-relaxed">
                    安心は偶然生まれません。正しく見立て、選択肢を比較し、実行まで支援すること。
                    これが私たちの仕事です。
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 選ばれる理由 */}
        <section className="py-14">
          <div className="mx-auto max-w-6xl px-4">
            <SectionTitle
              kicker="FEATURES"
              title="選ばれる理由"
              lead="『保険だけ』『相続だけ』ではなく、必要な領域を横断して考えることで、抜け漏れや二重対策を防ぎます。"
            />

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              <Card
                icon={Icons.compass}
                title="総合設計"
                body="保険・相続・不動産・事業承継・資産形成を一体で整理。長期的に効く設計にします。"
              />
              <Card
                icon={Icons.heartCheck}
                title="安心設計"
                body="価格だけでなく、必要保障と将来の選択肢を重視。納得できる安心を作ります。"
              />
              <Card
                icon={Icons.network}
                title="専門家連携"
                body="必要に応じて、各領域の専門家連携を前提に設計。『うまく連携できない』を解消します。"
              />
              <Card
                icon={Icons.flag}
                title="実行支援"
                body="計画を立てて終わりにせず、実行まで伴走。手続きの負担を減らします。"
              />
            </div>
          </div>
        </section>

        {/* 相談できること */}
        <section className="py-14">
          <div className="mx-auto max-w-6xl px-4">
            <SectionTitle
              kicker="SERVICES"
              title="相談できること"
              lead="短期の改善、長期の積み上げ、最終的な引き継ぎまで。今の状況から次の一手を一緒に作ります。"
            />

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              <Card
                icon={Icons.shield}
                title="保険相談・事業承継"
                body="法人保険・保障設計・事業承継の設計を一貫してサポート。必要な保障の形を作ります。"
              />
              <Card
                icon={Icons.lineChart}
                title="資産形成・老後資金"
                body="時間軸を見据えて、積み上げ方と守り方を設計。継続できる資産形成を考えます。"
              />
              <Card
                icon={Icons.document}
                title="遺言・相続・任意後見"
                body="残したい想いを形に。『争いになりにくい形』に整えるための設計と整理を支援します。"
              />
              <Card
                icon={Icons.home}
                title="不動産・資産承継"
                body="不動産を含めた資産全体の見える化。承継・活用・出口まで視野に入れて整理します。"
              />
            </div>
          </div>
        </section>

        {/* 私たちが大切にしていること */}
        <section className="py-14">
          <div className="mx-auto max-w-6xl px-4">
            <SectionTitle
              kicker="VALUES"
              title="私たちが大切にしていること"
              lead="社員みんなで同じ方向を向けるように、行動指針を明文化しています。"
            />

            <div className="grid gap-5 md:grid-cols-3">
              <Card
                icon={Icons.flag}
                title="まじめに、ちゃんと。"
                body="あたりまえのことを丁寧に。準備と確認を徹底し、安心を積み上げます。"
              />
              <Card
                icon={Icons.compass}
                title="知識と考え方を届ける。"
                body="情報だけでなく、判断の軸を共有します。選べるようになることを重視します。"
              />
              <Card
                icon={Icons.network}
                title="共に成長する。"
                body="お客様の変化に合わせて、私たちもアップデートを続けます。"
              />
            </div>
          </div>
        </section>

        {/* お問い合わせ */}
        <section className="py-14">
          <div className="mx-auto max-w-6xl px-4">
            <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
              <div>
                <SectionTitle
                  kicker="CONTACT"
                  title="お問い合わせ・ご相談"
                  lead="まずはLINE公式アカウントからお気軽にどうぞ。ZOOM等でのオンライン相談にも対応します。"
                />
                <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur p-6">
                  <div className="flex flex-col gap-4">
                    <a
                      href="https://qr-official.line.me/gs/M_sog7070i_BW.png?oat_content=qr"
                      target="_blank"
                      rel="noreferrer"
                      className="text-center rounded-xl border border-amber-300/40 bg-amber-300/10 px-5 py-3 text-sm text-amber-50 hover:bg-amber-300/15 transition"
                    >
                      LINE公式QRを表示
                    </a>
                    <a
                      href="tel:0336351875"
                      className="text-center rounded-xl border border-white/10 px-5 py-3 text-sm text-slate-100 hover:bg-white/10 transition"
                    >
                      03-3635-1875 に電話する
                    </a>
                  </div>
                </div>
              </div>

              <div className="justify-self-center rounded-xl border border-white/10 bg-white/5 backdrop-blur p-6">
                <div className="text-sm text-amber-200 mb-3">
                  LINE公式QRコード
                </div>
                <img
                  src="https://qr-official.line.me/gs/M_sog7070i_BW.png?oat_content=qr"
                  alt="LINE公式アカウント QRコード"
                  className="rounded-lg border border-white/10 bg-white/5 w-64 h-auto"
                  loading="lazy"
                />
                <div className="mt-4 text-xs text-slate-200/85 leading-relaxed">
                  スキャンして、チャットでご相談内容を送ってください。
                  日程調整を含めてご案内します。
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* アクセス */}
        <section id="access" className="pb-16">
          <div className="mx-auto max-w-6xl px-4">
            <SectionTitle kicker="ACCESS" title="アクセス" />

            <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
              <div>
                <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur p-6">
                  <div className="font-medium text-slate-100">
                    有限会社 東京トータルコンサルティング
                  </div>
                  <div className="mt-2 text-sm text-slate-200/90 leading-relaxed">
                    東京都墨田区立川1-2-8 赤津ビル1F <br />
                    森下駅 A5出口 徒歩1分
                  </div>

                  <div className="mt-4 flex flex-wrap gap-3">
                    <a
                      href="tel:0336351875"
                      className="rounded-xl border border-white/10 px-5 py-3 text-sm text-slate-100 hover:bg-white/10 transition"
                    >
                      03-3635-1875
                    </a>
                    <a
                      href="https://maps.google.com/?q=東京都墨田区立川1-2-8%20赤津ビル1F"
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-xl border border-amber-300/40 bg-amber-300/10 px-5 py-3 text-sm text-amber-50 hover:bg-amber-300/15 transition"
                    >
                      Google Mapで開く
                    </a>
                  </div>
                </div>

                <div className="mt-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur p-6">
                  <div className="text-sm text-amber-200 mb-2">
                    簡易アクセスマップ
                  </div>
                  <div className="w-full h-40 rounded-lg border border-white/10 bg-slate-900 flex items-center justify-center">
                    <span className="text-xs text-slate-200/60">
                      （ここに小さなマップ画像）
                    </span>
                  </div>
                  <div className="mt-3 text-xs text-slate-200/85 leading-relaxed">
                    ※マップ画像は `public/map.png` などに配置し、ここをその画像に差し替えてください。
                  </div>
                </div>
              </div>

              <div className="justify-self-center">
                <Logo variant="vertical" />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-slate-950 pb-10 pt-8">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <Logo />
            <div className="text-xs text-slate-200/75">
              © {new Date().getFullYear()} Tokyo Total Consulting Co., Ltd.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
