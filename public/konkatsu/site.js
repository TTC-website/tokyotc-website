const pages = {
  readme: {
    title: "初めての方へ",
    lead: "そんなお悩み・不安を、コンカツトーキョーTTCがしっかりサポート。パートナー探し・ご成婚へ導きます！",
    html: `
      <div class="two-list">
        <ul class="worry-list">
          <li>テレワークが増え、外に出ることがほとんどなくなってしまった。</li>
          <li>コミュニケーションの取り方がわからない。</li>
          <li>自分に自信がない。</li>
          <li>年齢や趣味が近い女性と出会いたい。</li>
        </ul>
        <ul class="worry-list">
          <li>会社と自宅の往復だけで、出会いの場所がない。</li>
          <li>ずっと実家暮らしなので、自分で生活出来るのか不安。</li>
          <li>子どもも欲しいので、なるべく早く結婚したい。</li>
          <li>真面目で、共働きも認めてくれる男性と結婚したい。</li>
        </ul>
      </div>
      <section class="section">
        <h2>コンカツトーキョーTTCを初めて利用される方へ</h2>
        <div class="media-block">
          <img src="../assets/konkatsu/hero-02.png" alt="">
          <div>
            <h3>当相談所について</h3>
            <p>マッチングアプリをお使いの方も多いと思いますが、当相談所のような仲人型の結婚相談所を利用することによって、理想のお相手に早く・確実に会える可能性が高まります。</p>
            <p>また、カウンセラーのアドバイスを受けていただくことによって、会員さまの理想や考えがまとまりやすくなります。それによって、お一人での婚活では出会えないようなお相手にたどり着けるようになります。</p>
          </div>
        </div>
      </section>
      <section class="section">
        <h2>メッセージ</h2>
        <p>穏やかでありながらも、家族とともに新しい楽しみや感動を見つけ、それを分かち合えるパートナーシップを築いていただきたいです。</p>
        <p>成婚するのは大変幸せなことですが、もっと幸せなことは、結婚してから積み重ねていく日々の小さな出来事だったりします。</p>
        <p>まずは、あなたが日々幸せだと思うことを教えてください。是非一緒に、その幸せを大切にしてくれるパートナーを探しましょう。</p>
        <h3>心がけていること</h3>
        <p>会員さまのプライバシーは厳守しますので、安心してご相談ください。</p>
      </section>
    `
  },
  feature: {
    title: "選ばれる理由",
    lead: "コンカツトーキョーTTCが皆さまに選ばれる理由をご紹介します。",
    html: `
      <section class="section">
        <div class="reason-block" id="01">
          <img src="../assets/konkatsu/reason-01.png" alt="">
          <div>
            <h2>専門スキルを持つカウンセラーに相談できる</h2>
            <p>基礎心理カウンセラーの資格を持つカウンセラーが、じっくり丁寧に会員さまのご希望・お悩みをヒアリングさせていただきます。</p>
            <p>会員さまの大切にされている価値観や、気づいていない魅力を引き出します。</p>
          </div>
        </div>
        <div class="reason-block" id="02">
          <img src="../assets/konkatsu/reason-02.png" alt="">
          <div>
            <h2>幸せな夫婦になるための秘訣を伝授</h2>
            <p>これまで保険代理店・ファイナンシャルプランナーとして、数百組のご夫婦のお話を伺ってまいりました。</p>
            <p>幸せな夫婦には共通点があり、その視点からお相手探しのアドバイスをさせていただきます。</p>
          </div>
        </div>
        <div class="reason-block" id="03">
          <img src="../assets/konkatsu/reason-03.png" alt="">
          <div>
            <h2>ご成婚後の生活に関するご相談まで可能</h2>
            <p>ご成婚後の生活に関するお悩みも、末永くサポートいたします。</p>
            <p>お家探し、ファイナンシャル・プランニングも専門家がお手伝いいたします。</p>
          </div>
        </div>
      </section>
    `
  },
  plan: {
    title: "プラン・料金のご案内",
    lead: "コンカツトーキョーTTCのメニュー・料金をご案内します。",
    html: `
      <section class="section">
        <div class="plan-block">
          <img src="../assets/konkatsu/plan.jpg" alt="スタンダードプラン">
          <div>
            <h2>スタンダードプラン</h2>
            <p>全ての会員さまに提供する、サポートプランです。</p>
            <h3>サポート詳細</h3>
            <ul class="check-list">
              <li>定期的なカウンセリング</li>
              <li>都度相談（LINE・電話・メール等）</li>
              <li>会員プロフィール作成</li>
              <li>お相手探し</li>
              <li>お見合いのセッティング</li>
              <li>お見合い結果の取次</li>
              <li>交際から成婚までのフォロー</li>
              <li>有料オプション：ヘアスタイリストによるセットと写真撮影</li>
            </ul>
          </div>
        </div>
        <table class="price-table">
          <tr><th>入会金</th><td>66,000円</td></tr>
          <tr><th>登録料</th><td>33,000円</td></tr>
          <tr><th>活動サポート費</th><td>0円</td></tr>
          <tr><th>月会費</th><td>11,000円</td></tr>
          <tr><th>お見合料</th><td>0円／回</td></tr>
          <tr><th>ご成婚料</th><td>220,000円</td></tr>
        </table>
      </section>
    `
  },
  greeting: {
    title: "メインカウンセラー紹介",
    lead: "会員さまのお気持ちに寄り添いながら、活動の一歩一歩をサポートします。",
    html: `
      <section class="section">
        <div class="counselor-grid">
          <img src="../assets/konkatsu/counselor-eiko-page.jpg" alt="小西 詠子">
          <div>
            <h2>小西 詠子（こにし えいこ）</h2>
            <p>メインカウンセラーの小西 詠子です。</p>
            <h3>経歴</h3>
            <ul>
              <li>東京都江東区で生まれ、小学校から社会人になるまで札幌市で過ごす。</li>
              <li>就職した会社で社内結婚し、退職と同時に東京へ転居。</li>
              <li>夫とともに保険代理店を開業し、数百組のご夫婦からファイナンシャルプランのご相談を受ける。</li>
              <li>お客さまやそのお子さまからお相手探しを相談されることが増え、これまでの経験を活かせるのでは、と思い開業。</li>
            </ul>
            <h3>趣味・好きなこと</h3>
            <p>旅行が好きです。特に、行き先やホテルを選んで旅のスケジュールを立てている時間が一番楽しいです。</p>
          </div>
        </div>
        <div class="counselor-grid">
          <img src="../assets/konkatsu/counselor-yuu.jpg" alt="カウンセラー YUU">
          <div>
            <h2>カウンセラーのYUUです</h2>
            <h3>経歴</h3>
            <p>フィリピン生まれ岡山県育ち、社会人4年目まで岡山県で過ごす。小学5年生から大学4年生まで陸上漬けの日々を送りました。</p>
            <p>自身がトランスジェンダーFTM（女性から男性）として31歳の頃に性別適合手術を受け、性別を変更。兼ねてからお付き合いをしていた女性と31歳の頃に入籍しました。</p>
            <p>男性・女性ともお付き合いした経験や苦悩を乗り越え結婚に至った経験を活かして、成婚まで全力でサポートさせていただきます。</p>
            <h3>趣味・好きなこと</h3>
            <p>旅行、映画鑑賞、SUP、筋トレ、愛犬と遊ぶこと。</p>
          </div>
        </div>
      </section>
      <section class="section">
        <h2>ごあいさつ</h2>
        <h3>婚活をお考えの皆さまへ</h3>
        <p>基礎心理カウンセラーの資格を持ったカウンセラーが、親切丁寧にヒアリングいたしますので、安心してご相談いただけます。</p>
        <p>いつでも相談できる安心感を提供いたします。また、ご自分に自信がないときや決断が必要なときは、背中を押してあげられる存在でありたい、と考えております。</p>
        <p>会員さまのプライバシーは厳守しますので、安心してご相談ください。</p>
        <h3>私が結婚相談所を始めた理由</h3>
        <p>たくさんの情報があふれる時代だからこそ、信頼できる人とのつながりや温かさが背中を後押ししてくれることがあります。</p>
        <p>これまでも、お客さまとのつながりを大切にしてきた自分だからこそ、画面や文字からだけでは伝わらない温かみをこのお仕事に活かせるのではと思って開業を決めました。</p>
        <h3>メインカウンセラーの想い</h3>
        <p>成婚するのは大変幸せなことですが、もっと幸せなことは、結婚してから積み重ねていく日々の小さな出来事だったりします。</p>
        <p>まずは、あなたが日々幸せだと思うことを教えてください。是非一緒に、その幸せを大切にしてくれるパートナーを探しましょう。</p>
        <p>穏やかでありながらも、家族とともに新しい楽しみや感動を見つけ、それを分かち合えるパートナーシップを築いていただきたいです。</p>
      </section>
    `
  },
  flow: {
    title: "ご登録・結婚までの流れ",
    lead: "ご登録からご結婚までの流れをご紹介します。",
    html: `
      <section class="section">
        ${[
          ["無料カウンセリング", "無料相談フォーム・お電話からお問合せいただきましたら、無料カウンセリングを行います。カウンセリング場所はお客さまのご要望に合わせ、オンライン相談をご希望の方は、ZOOM・LINEでの対応も可能です。", "contact.jpg"],
          ["ご入会手続き・プロフィール作成", "ご入会を決断いただきましたら、ご入会手続き・プロフィール作成を行います。必要書類（身分証明書・独身証明書・収入証明書など）は、無料カウンセリング時にご説明いたします。", "plan.jpg"],
          ["お相手探し・ご紹介・お見合い", "IBJSシステムをご利用いただき、いつでもお相手をお探しいただけます。ご希望をヒアリングし、あなたにあったお相手をご紹介いたします。", "hero-01.png"],
          ["交際スタートからプロポーズ", "お見合いが成立し、お互いの了承のもと交際スタートします。交際期間を経てプロポーズをしていただきます。その際もサポートしますのでご安心ください。", "hero-02.png"],
          ["ご成婚・退会", "おめでとうございます！ご成婚が決まりましたら、退会となります。これからお二人で幸せな家庭を築いてください。", "reason-03.png"]
        ].map((step, index) => `
          <div class="flow-step">
            <img src="../assets/konkatsu/${step[2]}" alt="">
            <div>
              <h2>${index + 1}. ${step[0]}</h2>
              <p>${step[1]}</p>
            </div>
          </div>
        `).join("")}
      </section>
    `
  },
  data: {
    title: "会員データ",
    lead: "IBJでは、どのような方々が婚活をしているのか、入会者数・成婚者数・年齢層・エリアなどのデータをまとめました。",
    html: `
      <div class="lead-box">会員数 <strong>104,673</strong> 名<br>（2025年11月現在）</div>
      <section class="section">
        <p>コンカツトーキョーTTCは、日本全国にある4,500社以上の結婚相談所が加盟する、日本最大級の結婚相談所ネットワーク「IBJ」の正規加盟店です。</p>
        <p>安心安全のお見合いを毎月79,600件以上ご提供する「IBJ」では、入会者数・成婚者数・年齢層などのデータを公開しています。</p>
      </section>
      <section class="section">
        <h2>業界No.1* 成婚者数</h2>
        <p>IBJに登録する会員の内、2024年は15,374名がご成婚退会されています。</p>
        <div class="data-cards">
          <div class="data-card"><span>2022年</span><strong>12,437名</strong></div>
          <div class="data-card"><span>2023年</span><strong>13,516名</strong></div>
          <div class="data-card"><span>2024年</span><strong>15,374名</strong></div>
        </div>
        <p>※ IBJのシステム内での成婚者のみ。日本マーケティングリサーチ機構調べ。</p>
      </section>
      <section class="section">
        <h2>新規入会者数</h2>
        <p>毎月平均で約6,200名の会員が入会しています。</p>
        <div class="lead-box">2025年6月の新規入会者数 <strong>6,026</strong> 名</div>
      </section>
      <section class="section">
        <h2>男性会員の年齢層</h2>
        <p>男性会員の年齢は、30代後半がボリュームゾーン。生活が安定しており、信頼してお相手を紹介しあえる方々が多いのが特徴です。</p>
        <table class="data-table">
          <tr><th>～29才</th><td>6.6％</td></tr><tr><th>30才～34才</th><td>17.8％</td></tr><tr><th>35才～39才</th><td>23.1％</td></tr><tr><th>40才～44才</th><td>18.4％</td></tr><tr><th>45才～49才</th><td>13.9％</td></tr><tr><th>50代以上</th><td>20.2％</td></tr>
        </table>
      </section>
      <section class="section">
        <h2>女性会員の年齢層</h2>
        <p>女性会員の年齢も、30代後半がボリュームゾーン。真剣に結婚を考える年齢層が多いのが特徴です。</p>
        <table class="data-table">
          <tr><th>～29才</th><td>13.4％</td></tr><tr><th>30才～34才</th><td>26.1％</td></tr><tr><th>35才～39才</th><td>27.1％</td></tr><tr><th>40才～44才</th><td>15.5％</td></tr><tr><th>45才～49才</th><td>7.8％</td></tr><tr><th>50代以上</th><td>10.1％</td></tr>
        </table>
      </section>
      <section class="section">
        <h2>男性会員の年収</h2>
        <p>男性の公開年収は、400～799万円がボリュームゾーン。結婚相手を探すためのデータベースとして良質です。</p>
        <table class="data-table">
          <tr><th>～399万</th><td>14.1％</td></tr><tr><th>400～599万</th><td>39.2％</td></tr><tr><th>600～799万</th><td>25.3％</td></tr><tr><th>800～999万</th><td>10.0％</td></tr><tr><th>1000万～</th><td>11.4％</td></tr>
        </table>
      </section>
    `
  },
  faq: {
    title: "婚活よくあるご質問",
    lead: "コンカツトーキョーTTCによく寄せられる、婚活に関するご質問をご紹介します。",
    html: `
      <section class="section">
        ${[
          ["まずはプランの内容について、直接お話をお聞きしたいのですが、どうすればいいですか？", "無料カウンセリングを行っております。まずは、当相談所公式LINEへお気軽にご連絡ください。"],
          ["無料相談で強引な勧誘はされませんか？", "ご入会の意思確認は、後日行わせていただいております。その場で無理な入会を勧めることはいたしません。"],
          ["無料相談の場所はどこでも大丈夫ですか？", "当相談所へお越しください。可能な限り対面をお願いしておりますが、遠方の方やお時間が取れない方はオンラインも承っております。"],
          ["忙しくて時間が取れなくても大丈夫？", "お時間を作っていただく必要がございます。よりよい活動を進めていただくためにも、打ち合わせやご報告のお時間は必ず頂戴しております。"],
          ["入会審査はありますか？", "書類の提出をお願いしております。本人確認書類等は必ずご提出いただいております。詳細は遠慮なくお尋ねください。"],
          ["離婚歴がありますが、入会できますか？", "可能です。活動するにあたり、離婚された際の状況などお伺いすることもございます。"],
          ["支払方法について教えてください。", "口座振替、クレジットカード払いに対応しています。詳細は初回の無料カウンセリングにてご案内いたします。"],
          ["会社を辞めて独立したばかりで、収入が安定していません。入会に支障はありますか？", "入会いただくことは可能ですが、活動を進めるのが困難と思われる場合には時期をみていただくなど、個別にご相談させていただきます。"],
          ["人見知りなのでパーティーやイベントに参加するのが不安です。サポートしてくれますか？", "可能な限りサポートいたします。当日までのアドバイスのほか、提携美容室のご紹介も可能です。"]
        ].map(item => `
          <article class="faq-item">
            <h3>${item[0]}</h3>
            <div><p>${item[1]}</p></div>
          </article>
        `).join("")}
      </section>
    `
  },
  access: {
    title: "概要情報",
    lead: "コンカツトーキョーTTCの概要情報とアクセスについてご案内いたします。",
    html: `
      <section class="section">
        <h2>概要</h2>
        <table class="profile-table">
          <tr><th>名称</th><td>コンカツトーキョーTTC</td></tr>
          <tr><th>代表者</th><td>小西 詠子</td></tr>
          <tr><th>住所</th><td>〒130-0023 東京都墨田区立川1-2-8 赤津ビル1階</td></tr>
          <tr><th>電話番号</th><td>03-6240-2851</td></tr>
          <tr><th>FAX番号</th><td>03-6240-2852</td></tr>
          <tr><th>受付時間</th><td>10:00～18:00</td></tr>
          <tr><th>定休日</th><td>土曜・日曜・祝日</td></tr>
        </table>
      </section>
      <section class="section">
        <h2>沿革</h2>
        <p>2023年7月 結婚相談所を開業</p>
      </section>
      <section class="section">
        <h2>アクセス</h2>
        <p>都営新宿線/大江戸線 森下駅A5出口から徒歩1分</p>
        <iframe class="map" title="コンカツトーキョーTTC アクセスマップ" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.4738584104934!2d139.79660487629823!3d35.68995512949388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018893a086c7257%3A0x60ecaee2addd4674!2z44CSMTMwLTAwMjMg5p2x5Lqs6YO95aKo55Sw5Yy656uL5bed77yR5LiB55uu77yS4oiS77yYIOi1pOa0peODk-ODqyAx6ZqO!5e0!3m2!1sja!2sjp!4v1694062312740!5m2!1sja!2sjp" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </section>
    `
  }
};

const nav = [
  ["../", "トップページ", "home"],
  ["../readme/", "初めての方へ", "readme"],
  ["../feature/", "選ばれる理由", "feature"],
  ["../plan/", "プラン・料金", "plan"],
  ["../greeting/", "カウンセラー紹介", "greeting"],
  ["../flow/", "ご結婚までの流れ", "flow"],
  ["../data/", "会員データ", "data"],
  ["../faq/", "Q & A", "faq"]
];

function renderPage() {
  const key = document.body.dataset.page;
  const page = pages[key];
  document.title = `${page.title} - コンカツトーキョーTTC`;
  document.body.innerHTML = `
    <header class="site-header">
      <div class="utility">
        <p>墨田区・江東区で婚活なら結婚相談所</p>
        <p>受付時間 10:00～18:00（土曜・日曜・祝日を除く）</p>
      </div>
      <div class="header-main">
        <a class="brand" href="../">
          <span>墨田区・江東区で婚活なら結婚相談所</span>
          <strong>コンカツトーキョーTTC</strong>
          <address>〒130-0023 東京都墨田区立川1-2-8 赤津ビル1階<br>都営新宿線/大江戸線 森下駅A5出口から徒歩1分</address>
        </a>
        <div class="header-contact">
          <a class="header-phone" href="tel:0362402851">03-6240-2851</a>
          <div class="header-actions">
            <a class="button line" href="https://lin.ee/RCDWfjc">公式LINEからもどうぞ</a>
          </div>
          <div class="header-actions">
            <a class="button male" href="https://lin.ee/RCDWfjc">男性の無料相談はこちら</a>
            <a class="button female" href="https://lin.ee/RCDWfjc">女性の無料相談はこちら</a>
          </div>
        </div>
      </div>
      <div class="global-wrap">
        <nav class="global-nav" aria-label="メインナビゲーション">
          ${nav.map(item => `<a class="${item[2] === key ? "is-active" : ""}" href="${item[0]}">${item[1]}</a>`).join("")}
        </nav>
      </div>
    </header>
    <main>
      <section class="page-hero">
        <div class="page-hero-inner">
          <h1>${page.title}</h1>
          <div class="breadcrumbs"><a href="../">トップページ</a> &gt; ${page.title}</div>
        </div>
      </section>
      <div class="page-shell">
        <aside class="sidebar">
          <div class="side-box">
            <h2>無料相談はこちら</h2>
            <div class="side-box-body">
              <img src="../assets/konkatsu/contact.jpg" alt="">
              <p>お電話でのお問合せはこちら</p>
              <a class="side-phone" href="tel:0362402851">03-6240-2851</a>
              <p>フォームでのお問合せ・ご相談は24時間受け付けております。お気軽にご連絡ください。</p>
              <a class="button male" href="https://lin.ee/RCDWfjc">男性の無料相談へ</a>
              <a class="button female" href="https://lin.ee/RCDWfjc">女性の無料相談へ</a>
            </div>
          </div>
          <div class="side-box">
            <h2>Menu</h2>
            <ul class="side-menu">
              ${nav.map(item => `<li><a class="${item[2] === key ? "is-active" : ""}" href="${item[0]}">${item[1]}</a></li>`).join("")}
              <li><a href="../access/">概要情報</a></li>
            </ul>
          </div>
        </aside>
        <article class="content">
          <div class="lead-box">${page.lead}</div>
          ${page.html}
          <section class="cta-panel">
            <h2>どうぞお気軽にお問合せください</h2>
            <p>墨田区・江東区を中心に東京都周辺で婚活をお考えの方、結婚相談所をお探しの方は、ぜひお気軽にお問合せ・ご相談ください。</p>
            <a class="side-phone" href="tel:0362402851">03-6240-2851</a>
            <p>受付時間：10:00～18:00 / 定休日：土曜・日曜・祝日</p>
            <div class="cta-actions">
              <a class="button male" href="https://lin.ee/RCDWfjc">男性向け 無料相談フォーム</a>
              <a class="button female" href="https://lin.ee/RCDWfjc">女性向け 無料相談フォーム</a>
            </div>
          </section>
        </article>
      </div>
    </main>
    <footer class="site-footer">
      <div class="site-footer-inner">
        <div>
          <p>墨田区・江東区で婚活なら結婚相談所 コンカツトーキョーTTC</p>
          <p>〒130-0023 東京都墨田区立川1-2-8 赤津ビル1階</p>
        </div>
        <nav>
          ${nav.map(item => `<a href="${item[0]}">${item[1]}</a>`).join("")}
          <a href="../access/">概要情報</a>
        </nav>
      </div>
    </footer>
  `;
}

renderPage();
