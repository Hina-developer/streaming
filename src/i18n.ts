export type Lang = 'en' | 'ar';
export type Theme = 'dark' | 'light';

export interface Translation {
  nav: {
    home: string;
    pricing: string;
    devices: string;
    content: string;
    reviews: string;
    faq: string;
    contact: string;
    liveChat: string;
    getTrial: string;
  };
  flashSale: string;
  hero: {
    badge: string;
    title1: string;
    titleHighlight: string;
    title2: string;
    subtitle: string;
    ctaWhatsapp: string;
    ctaTrial: string;
    stats: { channels: string; movies: string; series: string; quality: string; devices: string };
  };
  pricing: {
    title: string;
    subtitle: string;
    before: string;
    now: string;
    perYear: string;
    popular: string;
    save: string;
    cta: string;
    features: { trial: string; liveTv: string; movies: string; devices: string; quality: string };
    securePayment: string;
    plans: { name: string; before: number; now: number; years: string }[];
  };
  devices: {
    title: string;
    subtitle: string;
    items: { name: string; desc: string }[];
  };
  showcase: {
    title: string;
    subtitle: string;
    movies: string;
    sports: string;
    series: string;
    sportsItems: string[];
    movieTitles: string[];
    seriesTitles: string[];
  };
  testimonials: {
    title: string;
    subtitle: string;
    items: { name: string; role: string; text: string }[];
  };
  faq: {
    title: string;
    subtitle: string;
    items: { q: string; a: string }[];
  };
  contact: {
    title: string;
    subtitle: string;
    whatsapp: string;
    email: string;
    hours: string;
    hoursValue: string;
  };
  footer: {
    about: string;
    aboutText: string;
    quickLinks: string;
    legal: string;
    terms: string;
    privacy: string;
    refund: string;
    copyright: string;
    rights: string;
  };
  whatsapp: {
    title: string;
    status: string;
    greeting: string;
    greeting2: string;
    placeholder: string;
    send: string;
    openChat: string;
    minimize: string;
  };
}

export const translations: Record<Lang, Translation> = {
  en: {
    nav: {
      home: 'Home',
      pricing: 'Pricing',
      devices: 'Devices',
      content: 'Content',
      reviews: 'Reviews',
      faq: 'FAQ',
      contact: 'Contact',
      liveChat: 'Live Chat',
      getTrial: 'Free Trial',
    },
    flashSale: 'Flash Sale - 50% OFF',
    hero: {
      badge: 'Trusted by 50,000+ subscribers worldwide',
      title1: 'Exclusive & Unbeatable',
      titleHighlight: 'TV Streaming',
      title2: 'Packages',
      subtitle: 'Your Gateway to Global Entertainment',
      ctaWhatsapp: 'Message on WhatsApp',
      ctaTrial: 'Get Free Trial',
      stats: {
        channels: '9,000+ Channels',
        movies: '57,000+ Movies',
        series: '6,000+ Series',
        quality: '4K Quality',
        devices: 'Multi-Device',
      },
    },
    pricing: {
      title: 'Choose Your Plan',
      subtitle: 'Transparent pricing in Saudi Riyal. No hidden fees, cancel anytime.',
      before: 'Before',
      now: 'Now',
      perYear: '/year',
      popular: 'Most Popular',
      save: 'Save 50%',
      cta: 'Subscribe Now',
      features: {
        trial: '1 Hour Free Trial',
        liveTv: 'Live TV Channels',
        movies: 'Movies & Series',
        devices: '3 Devices Simultaneously',
        quality: '4K / HD Streaming',
      },
      securePayment: 'Secure Payment',
      plans: [
        { name: '1 Year', before: 750, now: 375, years: '1 year' },
        { name: '3 Years', before: 1725, now: 860, years: '3 years' },
        { name: '5 Years', before: 2625, now: 1310, years: '5 years' },
      ],
    },
    devices: {
      title: 'Watch on Any Device',
      subtitle: 'Stream seamlessly across all your favorite screens and platforms.',
      items: [
        { name: 'Smart TV', desc: 'Samsung, LG, Sony & more' },
        { name: 'Android', desc: 'Phones, tablets & TV boxes' },
        { name: 'iOS / Apple', desc: 'iPhone, iPad & Apple TV' },
        { name: 'Fire TV', desc: 'Amazon Fire Stick & Cube' },
        { name: 'Roku', desc: 'All Roku devices' },
        { name: 'Mag / IPTV Boxes', desc: 'Mag, Formuler & more' },
      ],
    },
    showcase: {
      title: 'Endless Entertainment',
      subtitle: 'From blockbuster movies to live sports — everything you love, all in one place.',
      movies: 'Trending Movies',
      sports: 'Live Sports',
      series: 'Popular Series',
      sportsItems: ['Bundesliga', 'Champions League', 'Premier League', 'La Liga', 'NBA', 'NFL'],
      movieTitles: ['Neon Horizon', 'The Last Protocol', 'Crimson Sky', 'Echoes of Tomorrow', 'Nightfall', 'The Observer'],
      seriesTitles: ['Dark Protocol', 'City of Echoes', 'The Frontier', 'Last Light', 'Kingdom Rise', 'Silent Order'],
    },
    testimonials: {
      title: 'What Our Subscribers Say',
      subtitle: 'Join thousands of happy customers enjoying premium streaming.',
      items: [
        { name: 'Ahmed Al-Rashid', role: 'Riyadh, KSA', text: 'The best IPTV service I have ever used. 4K quality is crystal clear and the channel selection is incredible. Highly recommended!' },
        { name: 'Sara Mohammed', role: 'Jeddah, KSA', text: 'Amazing value for money. I get all my favorite sports channels and movies in one place. The free trial convinced me instantly.' },
        { name: 'Khalid Omar', role: 'Dammam, KSA', text: 'Setup was super easy on my Smart TV. Customer support via WhatsApp is fast and helpful. 5 stars from me!' },
        { name: 'Fatima Hassan', role: 'Mecca, KSA', text: 'I love that I can watch on 3 devices at once. My kids watch cartoons while I enjoy my series. Perfect family package.' },
        { name: 'Yousef Ali', role: 'Medina, KSA', text: 'The 3-year plan is an absolute steal. Quality never drops, even during live sports. This is the future of TV.' },
        { name: 'Nora Abdullah', role: 'Khobar, KSA', text: 'Tried 3 other providers before — none compare to 4K Streaming TV. The movie library alone is worth every riyal.' },
      ],
    },
    faq: {
      title: 'Frequently Asked Questions',
      subtitle: 'Everything you need to know before getting started.',
      items: [
        { q: 'How do I get a free trial?', a: 'Simply click the "Get Free Trial" button and message us on WhatsApp. We will set up your 1-hour free trial within minutes so you can test the service before subscribing.' },
        { q: 'Which devices are supported?', a: 'Our service works on Smart TVs (Samsung, LG, Sony), Android devices, iOS / Apple TV, Amazon Fire TV, Roku, Mag boxes, and most IPTV-compatible devices.' },
        { q: 'How many devices can I use simultaneously?', a: 'Each subscription supports up to 3 devices streaming at the same time, so your whole family can enjoy different content simultaneously.' },
        { q: 'What quality can I expect?', a: 'We offer full 4K Ultra HD streaming for supported channels and content, with HD fallback for all other content. A stable 15 Mbps connection is recommended for 4K.' },
        { q: 'How do I pay for my subscription?', a: 'We accept Visa, MasterCard, American Express, and Discover. All payments are processed securely. You can also contact us on WhatsApp for alternative payment methods.' },
        { q: 'Can I cancel my subscription?', a: 'Yes, you can cancel anytime. We offer 1, 3, and 5-year plans with upfront pricing — no recurring charges or hidden fees.' },
      ],
    },
    contact: {
      title: 'Get in Touch',
      subtitle: 'Have questions? Our team is available 24/7 on WhatsApp.',
      whatsapp: 'WhatsApp Us',
      email: 'Email Support',
      hours: 'Support Hours',
      hoursValue: '24/7 — Always Available',
    },
    footer: {
      about: '4K Streaming TV',
      aboutText: 'Your gateway to global entertainment. 9,000+ channels, 57,000+ movies, and 6,000+ series in stunning 4K quality.',
      quickLinks: 'Quick Links',
      legal: 'Legal',
      terms: 'Terms of Service',
      privacy: 'Privacy Policy',
      refund: 'Refund Policy',
      copyright: '© 2026 4K Streaming TV. All rights reserved.',
      rights: 'All rights reserved.',
    },
    whatsapp: {
      title: '4K Streaming TV Support',
      status: 'Online — Typically replies instantly',
      greeting: 'Hi there! 👋 Welcome to 4K Streaming TV.',
      greeting2: 'How can we help you today? Click below to start a chat on WhatsApp.',
      placeholder: 'Type your message...',
      send: 'Send',
      openChat: 'Open WhatsApp Chat',
      minimize: 'Minimize',
    },
  },
  ar: {
    nav: {
      home: 'الرئيسية',
      pricing: 'الأسعار',
      devices: 'الأجهزة',
      content: 'المحتوى',
      reviews: 'التقييمات',
      faq: 'الأسئلة الشائعة',
      contact: 'تواصل معنا',
      liveChat: 'دردشة مباشرة',
      getTrial: 'تجربة مجانية',
    },
    flashSale: 'تخفيضات سريعة - خصم 50%',
    hero: {
      badge: 'موثوق به من أكثر من 50,000 مشترك حول العالم',
      title1: 'باقات بث تلفزيوني',
      titleHighlight: 'حصرية ولا تُقهر',
      title2: '',
      subtitle: 'بوابتك إلى الترفيه العالمي',
      ctaWhatsapp: 'راسلنا على واتساب',
      ctaTrial: 'احصل على تجربة مجانية',
      stats: {
        channels: '+9,000 قناة',
        movies: '+57,000 فيلم',
        series: '+6,000 مسلسل',
        quality: 'جودة 4K',
        devices: 'متعدد الأجهزة',
      },
    },
    pricing: {
      title: 'اختر باقتك',
      subtitle: 'أسعار شفافة بالريال السعودي. بدون رسوم خفية، إلغاء في أي وقت.',
      before: 'قبل',
      now: 'الآن',
      perYear: '/سنة',
      popular: 'الأكثر شعبية',
      save: 'وفّر 50%',
      cta: 'اشترك الآن',
      features: {
        trial: 'تجربة مجانية لمدة ساعة',
        liveTv: 'قنوات تلفزيونية مباشرة',
        movies: 'أفلام ومسلسلات',
        devices: '3 أجهزة في وقت واحد',
        quality: 'بث 4K / HD',
      },
      securePayment: 'دفع آمن',
      plans: [
        { name: 'سنة واحدة', before: 750, now: 375, years: 'سنة واحدة' },
        { name: '3 سنوات', before: 1725, now: 860, years: '3 سنوات' },
        { name: '5 سنوات', before: 2625, now: 1310, years: '5 سنوات' },
      ],
    },
    devices: {
      title: 'شاهد على أي جهاز',
      subtitle: 'بث سلس عبر جميع شاشاتك ومنصاتك المفضلة.',
      items: [
        { name: 'تلفزيون ذكي', desc: 'سامسونج، LG، سوني والمزيد' },
        { name: 'أندرويد', desc: 'هواتف، أجهزة لوحية و TV' },
        { name: 'iOS / آبل', desc: 'آيفون، آيباد و Apple TV' },
        { name: 'Fire TV', desc: 'أمازون فاير ستيك وكيوب' },
        { name: 'Roku', desc: 'جميع أجهزة Roku' },
        { name: 'Mag / أجهزة IPTV', desc: 'Mag، Formuler والمزيد' },
      ],
    },
    showcase: {
      title: 'ترفيه لا نهائي',
      subtitle: 'من الأفلام البلوكباستر إلى الرياضة المباشرة — كل ما تحبه في مكان واحد.',
      movies: 'أفلام رائجة',
      sports: 'رياضة مباشرة',
      series: 'مسلسلات شائعة',
      sportsItems: ['الدوري الألماني', 'دوري الأبطال', 'الدوري الإنجليزي', 'الدوري الإسباني', 'الدوري الأمريكي', 'كرة القدم الأمريكية'],
      movieTitles: ['الأفق النيون', 'البروتوكول الأخير', 'السماء القرمزية', 'أصداء الغد', 'الغسق', 'المراقب'],
      seriesTitles: ['البروتوكول المظلم', 'مدينة الأصداء', 'الحدود', 'الضوء الأخير', 'صعود المملكة', 'النظام الصامت'],
    },
    testimonials: {
      title: 'ماذا يقول مشتركونا',
      subtitle: 'انضم إلى آلاف العملاء السعداء الذين يستمتعون بالبث المتميز.',
      items: [
        { name: 'أحمد الراشد', role: 'الرياض، السعودية', text: 'أفضل خدمة IPTV استخدمتها على الإطلاق. جودة 4K واضحة تماماً واختيار القنوات لا يصدق. أنصح به بشدة!' },
        { name: 'سارة محمد', role: 'جدة، السعودية', text: 'قيمة رائعة مقابل المال. أحصل على جميع قنواتي الرياضية المفضلة والأفلام في مكان واحد. التجربة المجانية أقنعتني فوراً.' },
        { name: 'خالد عمر', role: 'الدمام، السعودية', text: 'كانت الإعداد سهلة جداً على تلفزيوني الذكي. دعم العملاء عبر واتساب سريع ومفيد. 5 نجوم مني!' },
        { name: 'فاطمة حسن', role: 'مكة، السعودية', text: 'أحب أنه يمكنني المشاهدة على 3 أجهزة في وقت واحد. أطفالي يشاهدون الرسوم بينما أستمتع بمسلسلاتي. باقة عائلية مثالية.' },
        { name: 'يوسف علي', role: 'المدينة، السعودية', text: 'باقة 3 سنوات صفقة رائعة. الجودة لا تنخفض أبداً، حتى خلال الرياضة المباشرة. هذا هو مستقبل التلفزيون.' },
        { name: 'نورة عبدالله', role: 'الخبر، السعودية', text: 'جربت 3 مزودين آخرين قبل — لا شيء يقارن مع 4K Streaming TV. مكتبة الأفلام وحدها تستحق كل ريال.' },
      ],
    },
    faq: {
      title: 'الأسئلة الشائعة',
      subtitle: 'كل ما تحتاج معرفته قبل البدء.',
      items: [
        { q: 'كيف أحصل على تجربة مجانية؟', a: 'ما عليك سوى الضغط على زر "احصل على تجربة مجانية" ومراسلتنا على واتساب. سنقوم بإعداد تجربتك المجانية لمدة ساعة خلال دقائق حتى تتمكن من اختبار الخدمة قبل الاشتراك.' },
        { q: 'ما الأجهزة المدعومة؟', a: 'خدمتنا تعمل على التلفزيونات الذكية (سامسونج، LG، سوني)، أجهزة أندرويد، iOS / Apple TV، Amazon Fire TV، Roku، أجهزة Mag، ومعظم الأجهزة المتوافقة مع IPTV.' },
        { q: 'كم عدد الأجهزة التي يمكنني استخدامها في وقت واحد؟', a: 'يدعم كل اشتراك ما يصل إلى 3 أجهزة بث في نفس الوقت، بحيث يمكن لعائلتك بأكملها الاستمتاع لمحتوى مختلف في وقت واحد.' },
        { q: 'ما الجودة التي يمكنني توقعها؟', a: 'نقدم بث 4K Ultra HD كامل للقنوات والمحتوى المدعوم، مع HD احتياطي لجميع المحتوى الآخر. يُوصى باتصال 15 ميجابت/ثابت لـ 4K.' },
        { q: 'كيف أدفع اشتراكي؟', a: 'نقبل Visa وMasterCard وAmerican Express وDiscover. تتم معالجة جميع المدفوعات بشكل آمن. يمكنك أيضاً التواصل معنا على واتساب لطرق دفع بديلة.' },
        { q: 'هل يمكنني إلغاء اشتراكي؟', a: 'نعم، يمكنك الإلغاء في أي وقت. نقدم خطط لمدة 1 و3 و5 سنوات بأسعار مقدمة — لا توجد رسوم متكررة أو رسوم خفية.' },
      ],
    },
    contact: {
      title: 'تواصل معنا',
      subtitle: 'لديك أسئلة؟ فريقنا متاح 24/7 على واتساب.',
      whatsapp: 'راسلنا على واتساب',
      email: 'دعم البريد الإلكتروني',
      hours: 'ساعات الدعم',
      hoursValue: '24/7 — متاح دائماً',
    },
    footer: {
      about: '4K Streaming TV',
      aboutText: 'بوابتك إلى الترفيه العالمي. أكثر من 9,000 قناة و57,000 فيلم و6,000 مسلسل بجودة 4K مذهلة.',
      quickLinks: 'روابط سريعة',
      legal: 'قانوني',
      terms: 'شروط الخدمة',
      privacy: 'سياسة الخصوصية',
      refund: 'سياسة الاسترداد',
      copyright: '© 2026 4K Streaming TV. جميع الحقوق محفوظة.',
      rights: 'جميع الحقوق محفوظة.',
    },
    whatsapp: {
      title: 'دعم 4K Streaming TV',
      status: 'متصل — يرد عادة فوراً',
      greeting: 'مرحباً! 👋 أهلاً بك في 4K Streaming TV.',
      greeting2: 'كيف يمكننا مساعدتك اليوم؟ اضغط أدناه لبدء محادثة على واتساب.',
      placeholder: 'اكتب رسالتك...',
      send: 'إرسال',
      openChat: 'فتح محادثة واتساب',
      minimize: 'تصغير',
    },
  },
};
