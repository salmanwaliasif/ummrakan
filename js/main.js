/* Umm Rakan Premium Services — shared script.
   Handles English/Arabic, shared header/footer, and every WhatsApp link.
   To change the WhatsApp number, edit PHONE below (country code + number, digits only). */
(function () {
  'use strict';
  var PHONE = '96896552936';
  var DISPLAY = '+968 9655 2936';
  var INSTAGRAM = 'https://www.instagram.com/umrakan9411';

  var NAV = [
    ['index.html', 'nHome'], ['services.html', 'nServices'], ['projects.html', 'nProjects'],
    ['about.html', 'nAbout'], ['contact.html', 'nContact']
  ];

  var SVC_IMG = ['pergola', 'carshade', 'windows', 'glass', 'laser', 'slats'];
  var GALLERY = ['g_laser2', 'g_night', 'g_facade', 'g_repair', 'g_laser3', 'g_slats2', 'g_laser4', 'carshade', 'pergola', 'glass', 'laser', 'windows'];

  var T = {
    en: {
      brand: 'Umm Rakan', brandSub: 'Premium Services', legal: 'Umm Rakan for Premium Services',
      nHome: 'Home', nServices: 'Services', nProjects: 'Projects', nAbout: 'About', nContact: 'Contact',
      chat: 'Chat on WhatsApp', quote: 'Get a quote on WhatsApp', askThis: 'Ask about this', menu: 'Menu',
      heroEyebrow: 'Aluminum · UPVC · Steel · Glass',
      heroTitle: 'Premium aluminum, glass and steel work for your <em>home</em>.',
      heroLede: 'Pergolas, car shades, windows, glass and laser-cut screens, made to your measurements and installed by our team.',
      seeServices: 'See our services', sendTo: 'Send photos and measurements to',
      pause: 'Pause video', play: 'Play video',
      t1: 'Aluminum & UPVC', t2: 'Pergolas & car shades', t3: 'Laser-cut screens', t4: 'Made to your measurements',
      svEyebrow: 'What we build', svTitle: 'Six services. One WhatsApp number.',
      svLead: 'Tap any service and your message opens in WhatsApp already written. Add your photos and we reply with a quote.',
      allServices: 'All services in detail', allProjects: 'See all projects',
      pjEyebrow: 'Recent work', pjTitle: 'Built and installed in Oman',
      hwEyebrow: 'How it works', hwTitle: 'From message to installation',
      s1t: 'Message us', s1d: 'Pick a service and tell us where the work is.',
      s2t: 'Share photos and sizes', s2d: 'A few photos and rough measurements are enough to start.',
      s3t: 'Get your quote', s3d: 'We reply on WhatsApp with the price and what happens next.',
      s4t: 'We build and install', s4d: 'Fabrication, delivery and fitting by our own team.',
      finTitle: 'Tell us what you want to build.', finText: 'One message with a photo is all it takes to start.',
      // services page
      spTitle: 'Our services', spLead: 'Aluminum, UPVC, steel and glass work for homes in Oman. Every service starts with a WhatsApp message.',
      // projects page
      ppTitle: 'Our projects', ppLead: 'Villas, entrances and gardens we have fitted. Tap a photo to enlarge it.',
      close: 'Close',
      // about page
      abEyebrow: 'About us', ctEyebrow: 'Get in touch', abTitle: 'About Umm Rakan', abLead: 'Premium aluminum and UPVC solutions for homeowners in Oman.',
      abP1: 'Umm Rakan Premium Services makes and installs the outdoor and architectural elements that finish a home: pergolas, car shades, windows and doors, glass work, laser-cut screens and wood-look roof panels.',
      abP2: 'We work with aluminum, UPVC, steel and glass, and fit each job to your measurements. You talk to us directly on WhatsApp, share photos of the space and get a clear quote.',
      v1t: 'Made to measure', v1d: 'Each job is sized to your opening, wall or driveway.',
      v2t: 'Quality materials', v2d: 'Aluminum, UPVC, steel and glass chosen to handle the Omani sun.',
      v3t: 'Direct contact', v3d: 'One WhatsApp number for questions, photos and quotes.',
      fqEyebrow: 'Questions', fqTitle: 'Before you message us',
      // contact page
      ctTitle: 'Contact us', ctLead: 'WhatsApp is the fastest way to reach us. Fill in the form and your message opens ready to send.',
      fService: 'What do you need?', fLoc: 'Your area or city', fNote: 'Details (size, colour, anything useful)',
      fSend: 'Send on WhatsApp', fHint: 'WhatsApp opens with your message ready. Attach photos in the chat.',
      phLoc: 'e.g. Muscat', phNote: 'Tell us what you need...', other: 'Something else',
      ctWa: 'WhatsApp and calls', ctWaText: 'Send your photos and measurements and we reply with a quote.',
      msgGeneral: 'Hello Umm Rakan, I would like a quote. Can you help me?',
      msgService: function (s) { return 'Hello Umm Rakan, I am interested in: ' + s + '. Can you send me a quote?'; },
      msgForm: function (s, l, n) { return 'Hello Umm Rakan, I would like a quote.\nService: ' + s + (l ? '\nLocation: ' + l : '') + (n ? '\nDetails: ' + n : ''); },
      services: [
        { n: 'Pergolas', d: 'Aluminum and steel pergolas with wood-look slats for gardens, entrances and terraces.',
          f: ['Slatted or solid roofing', 'Wood-look and dark finishes', 'Built to your space'] },
        { n: 'Car shades', d: 'Strong, clean-lined shades that protect your cars from the sun and match your house.',
          f: ['Single and double parking', 'Slatted side screens', 'Steel and aluminum frames'] },
        { n: 'Aluminum & UPVC windows and doors', d: 'Sliding doors and windows in aluminum and UPVC, fitted to the opening.',
          f: ['Sliding and fixed panels', 'Aluminum and UPVC options', 'Measured and fitted on site'] },
        { n: 'Glass work', d: 'Tinted glass façades, balcony glazing and replacement of damaged panes.',
          f: ['Tinted façade glass', 'Balcony and rail glazing', 'Replacement of cracked glass'] },
        { n: 'Laser-cut screens', d: 'Decorative aluminum panels with geometric Arabic patterns for façades and privacy.',
          f: ['Geometric and Islamic patterns', 'Privacy and shade for windows', 'Full-height façade panels'] },
        { n: 'Slats & roof panels', d: 'Wood-look roof panels, ceiling slats and cladding with a warm timber finish.',
          f: ['3D wood-look roof panels', 'Ceiling and wall slats', 'Low-maintenance finish'] }
      ],
      faq: [
        ['How do I get a price?', 'Message us on WhatsApp with a few photos of the space and rough measurements. We reply with a quote.'],
        ['Do you work with both aluminum and UPVC?', 'Yes. We supply and install windows and doors in aluminum and UPVC, along with steel and glass work.'],
        ['Can I choose the colour and finish?', 'Yes. Tell us what you like in the chat. Wood-look finishes are popular for pergolas and roof panels.'],
        ['Which areas do you cover?', 'We work with homeowners in Oman. Send your location on WhatsApp and we will confirm.']
      ],
      altWork: 'Completed project'
    },
    ar: {
      brand: 'أم راكان', brandSub: 'للخدمات المميزة', legal: 'أم راكان للخدمات المميزة',
      nHome: 'الرئيسية', nServices: 'الخدمات', nProjects: 'الأعمال', nAbout: 'من نحن', nContact: 'تواصل معنا',
      chat: 'تواصل عبر واتساب', quote: 'اطلب عرض سعر عبر واتساب', askThis: 'اسأل عن هذه الخدمة', menu: 'القائمة',
      heroEyebrow: 'ألمنيوم · يو بي في سي · حديد · زجاج',
      heroTitle: 'أعمال ألمنيوم وزجاج وحديد بمستوى راقٍ <em>لمنزلك</em>.',
      heroLede: 'برجولات ومظلات سيارات ونوافذ وأعمال زجاج وقواطع مفرغة بالليزر، تُصنع حسب مقاساتك ويركّبها فريقنا.',
      seeServices: 'تصفح خدماتنا', sendTo: 'أرسل الصور والمقاسات على',
      pause: 'إيقاف الفيديو', play: 'تشغيل الفيديو',
      t1: 'ألمنيوم ويو بي في سي', t2: 'برجولات ومظلات سيارات', t3: 'قواطع مفرغة بالليزر', t4: 'حسب مقاساتك',
      svEyebrow: 'ماذا نصنع', svTitle: 'ست خدمات. رقم واتساب واحد.',
      svLead: 'اضغط على أي خدمة وستفتح رسالتك في واتساب جاهزة. أضف صورك وسنرد عليك بعرض سعر.',
      allServices: 'كل الخدمات بالتفصيل', allProjects: 'عرض كل الأعمال',
      pjEyebrow: 'أعمال حديثة', pjTitle: 'نُفّذت وركّبت في عُمان',
      hwEyebrow: 'كيف نعمل', hwTitle: 'من الرسالة إلى التركيب',
      s1t: 'راسلنا', s1d: 'اختر الخدمة وأخبرنا بموقع العمل.',
      s2t: 'أرسل الصور والمقاسات', s2d: 'بضع صور ومقاسات تقريبية تكفي للبدء.',
      s3t: 'استلم عرض السعر', s3d: 'نرد عليك في واتساب بالسعر والخطوة التالية.',
      s4t: 'نصنع ونركّب', s4d: 'تصنيع وتوصيل وتركيب بواسطة فريقنا.',
      finTitle: 'أخبرنا ماذا تريد أن نبني.', finText: 'رسالة واحدة مع صورة تكفي للبدء.',
      spTitle: 'خدماتنا', spLead: 'أعمال الألمنيوم واليو بي في سي والحديد والزجاج للمنازل في عُمان. كل خدمة تبدأ برسالة واتساب.',
      ppTitle: 'أعمالنا', ppLead: 'فلل ومداخل وحدائق قمنا بتجهيزها. اضغط على الصورة لتكبيرها.',
      close: 'إغلاق',
      abEyebrow: 'من نحن', ctEyebrow: 'تواصل', abTitle: 'عن أم راكان', abLead: 'حلول ألمنيوم ويو بي في سي راقية لأصحاب المنازل في عُمان.',
      abP1: 'أم راكان للخدمات المميزة تصنع وتركّب العناصر الخارجية والمعمارية التي تكمل المنزل: برجولات، مظلات سيارات، نوافذ وأبواب، أعمال زجاج، قواطع مفرغة بالليزر وألواح أسقف بمظهر الخشب.',
      abP2: 'نعمل بالألمنيوم واليو بي في سي والحديد والزجاج، ونجهّز كل عمل حسب مقاساتك. تتواصل معنا مباشرة عبر واتساب، وترسل صور المكان، وتستلم عرض سعر واضحاً.',
      v1t: 'حسب المقاس', v1d: 'كل عمل يُصنع على قياس الفتحة أو الجدار أو المدخل.',
      v2t: 'خامات عالية الجودة', v2d: 'ألمنيوم ويو بي في سي وحديد وزجاج مناسبة لشمس عُمان.',
      v3t: 'تواصل مباشر', v3d: 'رقم واتساب واحد للأسئلة والصور وعروض الأسعار.',
      fqEyebrow: 'أسئلة', fqTitle: 'قبل أن تراسلنا',
      ctTitle: 'تواصل معنا', ctLead: 'واتساب هو أسرع طريقة للوصول إلينا. املأ النموذج وستفتح رسالتك جاهزة للإرسال.',
      fService: 'ماذا تحتاج؟', fLoc: 'منطقتك أو مدينتك', fNote: 'تفاصيل (المقاس، اللون، أي معلومة مفيدة)',
      fSend: 'أرسل عبر واتساب', fHint: 'يفتح واتساب برسالتك جاهزة. أرفق الصور داخل المحادثة.',
      phLoc: 'مثال: مسقط', phNote: 'اكتب ما تحتاجه...', other: 'شيء آخر',
      ctWa: 'واتساب والاتصال', ctWaText: 'أرسل صورك ومقاساتك وسنرد عليك بعرض سعر.',
      msgGeneral: 'مرحباً أم راكان، أرغب في الحصول على عرض سعر. هل يمكنكم مساعدتي؟',
      msgService: function (s) { return 'مرحباً أم راكان، أنا مهتم بخدمة: ' + s + '. هل يمكنكم إرسال عرض سعر؟'; },
      msgForm: function (s, l, n) { return 'مرحباً أم راكان، أرغب في الحصول على عرض سعر.\nالخدمة: ' + s + (l ? '\nالموقع: ' + l : '') + (n ? '\nالتفاصيل: ' + n : ''); },
      services: [
        { n: 'برجولات', d: 'برجولات ألمنيوم وحديد بشرائح بمظهر الخشب للحدائق والمداخل والتراسات.',
          f: ['سقف شرائح أو سقف مصمت', 'تشطيبات بمظهر الخشب وألوان داكنة', 'تُصنع حسب مساحتك'] },
        { n: 'مظلات سيارات', d: 'مظلات متينة بخطوط نظيفة تحمي سياراتك من الشمس وتتناسب مع منزلك.',
          f: ['موقف سيارة أو سيارتين', 'جوانب بشرائح', 'هياكل حديد وألمنيوم'] },
        { n: 'نوافذ وأبواب ألمنيوم ويو بي في سي', d: 'أبواب منزلقة ونوافذ من الألمنيوم واليو بي في سي، تُركّب على قياس الفتحة.',
          f: ['أبواب منزلقة وألواح ثابتة', 'خيارات ألمنيوم ويو بي في سي', 'قياس وتركيب في الموقع'] },
        { n: 'أعمال الزجاج', d: 'واجهات زجاج ملوّن وزجاج للشرفات واستبدال الزجاج المكسور.',
          f: ['زجاج واجهات ملوّن', 'زجاج الشرفات والدرابزين', 'استبدال الزجاج المتشقق'] },
        { n: 'قواطع مفرغة بالليزر', d: 'ألواح ألمنيوم زخرفية بنقوش هندسية عربية للواجهات والخصوصية.',
          f: ['نقوش هندسية وإسلامية', 'خصوصية وظل للنوافذ', 'ألواح واجهات بكامل الارتفاع'] },
        { n: 'شرائح وألواح أسقف', d: 'ألواح أسقف وشرائح وكسوة بمظهر الخشب الدافئ.',
          f: ['ألواح أسقف ثلاثية الأبعاد بمظهر الخشب', 'شرائح للأسقف والجدران', 'تشطيب قليل الصيانة'] }
      ],
      faq: [
        ['كيف أحصل على السعر؟', 'راسلنا على واتساب مع بضع صور للمكان ومقاسات تقريبية، وسنرد عليك بعرض سعر.'],
        ['هل تعملون بالألمنيوم واليو بي في سي معاً؟', 'نعم. نوفّر ونركّب النوافذ والأبواب بالألمنيوم واليو بي في سي، إضافة إلى أعمال الحديد والزجاج.'],
        ['هل يمكنني اختيار اللون والتشطيب؟', 'نعم. أخبرنا بما يعجبك في المحادثة. تشطيبات الخشب مطلوبة كثيراً للبرجولات وألواح الأسقف.'],
        ['ما المناطق التي تغطونها؟', 'نعمل مع أصحاب المنازل في سلطنة عُمان. أرسل موقعك على واتساب وسنؤكد لك.']
      ],
      altWork: 'عمل منفّذ'
    }
  };

  var WA_ICON = '<svg viewBox="0 0 32 32" aria-hidden="true"><path fill="currentColor" d="M16.04 3C9.4 3 4 8.4 4 15.04c0 2.12.55 4.18 1.6 6L4 29l8.14-1.56a12 12 0 0 0 3.9.66h.01C22.7 28.1 28 22.7 28 16.06 28 9.4 22.68 3 16.04 3Zm0 22.1c-1.2 0-2.37-.32-3.4-.92l-.24-.15-4.83.93.96-4.7-.16-.25a9.9 9.9 0 0 1-1.52-5.27c0-5.5 4.47-9.97 9.98-9.97 5.5 0 9.98 4.47 9.98 9.97 0 5.5-4.48 10.36-10.77 10.36Zm5.47-7.46c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.5-1.78-1.67-2.08-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.22 3.08.15.2 2.1 3.2 5.08 4.48.71.3 1.26.49 1.7.63.71.23 1.36.2 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z"/></svg>';

  var lang = 'en';
  try {
    var saved = localStorage.getItem('ur-lang');
    if (saved === 'ar' || saved === 'en') lang = saved;
    else if ((navigator.language || '').toLowerCase().indexOf('ar') === 0) lang = 'ar';
  } catch (e) {
    if ((navigator.language || '').toLowerCase().indexOf('ar') === 0) lang = 'ar';
  }
  var chosen = 0;
  var page = document.body.getAttribute('data-page') || 'home';

  function $(s, r) { return (r || document).querySelector(s); }
  function $$(s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); }
  function wa(msg) { return 'https://wa.me/' + PHONE + '?text=' + encodeURIComponent(msg); }
  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;'); }
  function waLink(cls, msg, label) {
    return '<a class="btn btn-wa ' + cls + '" target="_blank" rel="noopener" href="' + wa(msg) + '">' + WA_ICON + '<span>' + label + '</span></a>';
  }

  /* ---------- shared chrome ---------- */
  function buildChrome() {
    var cur = location.pathname.split('/').pop() || 'index.html';
    if (cur.indexOf('.') === -1) cur += '.html';
    var header = document.createElement('header');
    header.className = 'site-header bleed';
    header.innerHTML =
      '<div class="bar">' +
        '<a class="brand" href="index.html"><span class="tile"><img src="img/logo-mark.png" alt="" width="54" height="34"></span>' +
        '<span><b data-i18n="brand"></b><small data-i18n="brandSub"></small></span></a>' +
        '<nav class="main" id="mainNav" aria-label="Main">' +
        NAV.map(function (n) { return '<a href="' + n[0] + '" data-i18n="' + n[1] + '"' + (cur === n[0] ? ' aria-current="page"' : '') + '></a>'; }).join('') +
        '</nav>' +
        '<div class="tools"><button class="lang" id="langBtn" type="button"></button>' +
        '<a class="btn btn-wa btn-sm" data-wa="general" target="_blank" rel="noopener" href="#">' + WA_ICON + '<span data-i18n="chat"></span></a>' +
        '<button class="burger" id="burger" type="button" aria-expanded="false" aria-controls="mainNav" aria-label="Menu">&#9776;</button></div>' +
      '</div>';
    document.body.insertBefore(header, document.body.firstChild);

    var footer = document.createElement('footer');
    footer.className = 'site bleed';
    footer.innerHTML =
      '<div class="in"><span>&copy; ' + new Date().getFullYear() + ' <span data-i18n="legal"></span></span>' +
      '<nav>' + NAV.map(function (n) { return '<a href="' + n[0] + '" data-i18n="' + n[1] + '"></a>'; }).join('') +
      '<a href="' + INSTAGRAM + '" target="_blank" rel="noopener">Instagram</a></nav></div>';
    document.body.appendChild(footer);

    var fab = document.createElement('a');
    fab.className = 'fab'; fab.target = '_blank'; fab.rel = 'noopener'; fab.setAttribute('data-wa', 'general');
    fab.setAttribute('aria-label', 'WhatsApp'); fab.href = '#';
    fab.innerHTML = WA_ICON + '<span data-i18n="chat"></span>';
    document.body.appendChild(fab);

    $('#burger').addEventListener('click', function () {
      var nav = $('#mainNav'); var open = nav.classList.toggle('open');
      this.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    document.addEventListener('click', function (e) {
      var nav = $('#mainNav'), bb = $('#burger');
      if (nav.classList.contains('open') && !nav.contains(e.target) && !bb.contains(e.target)) { nav.classList.remove('open'); bb.setAttribute('aria-expanded', 'false'); }
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') { $('#mainNav').classList.remove('open'); $('#burger').setAttribute('aria-expanded', 'false'); }
    });
    $('#langBtn').addEventListener('click', function () {
      lang = lang === 'ar' ? 'en' : 'ar';
      try { localStorage.setItem('ur-lang', lang); } catch (e) {}
      render();
    });
  }

  /* ---------- page sections ---------- */
  function renderServiceCards(sel) {
    var el = $(sel); if (!el) return; var t = T[lang];
    el.innerHTML = t.services.map(function (s, i) {
      return '<article class="card"><div class="ph"><img src="img/' + SVC_IMG[i] + '.jpg" alt="' + esc(s.n) + '" width="1000" height="750"></div>' +
        '<div class="tx"><h3>' + s.n + '</h3><p>' + s.d + '</p>' + waLink('btn-sm', t.msgService(s.n), t.askThis) + '</div></article>';
    }).join('');
  }
  function renderServiceDetail() {
    var el = $('#services-detail'); if (!el) return; var t = T[lang];
    el.innerHTML = t.services.map(function (s, i) {
      return '<article class="svc" id="' + SVC_IMG[i] + '"><div class="ph"><img src="img/' + SVC_IMG[i] + '.jpg" alt="' + esc(s.n) + '" width="1000" height="750"></div>' +
        '<div><h2>' + s.n + '</h2><p>' + s.d + '</p><ul>' + s.f.map(function (f) { return '<li>' + f + '</li>'; }).join('') + '</ul>' +
        waLink('', t.msgService(s.n), t.askThis) + '</div></article>';
    }).join('');
  }
  function renderGallery(sel, count) {
    var el = $(sel); if (!el) return; var t = T[lang];
    el.innerHTML = GALLERY.slice(0, count).map(function (n) {
      return '<button type="button" data-src="img/' + n + '.jpg"><img src="img/' + n + '.jpg" alt="' + esc(t.altWork) + '"></button>';
    }).join('');
  }
  function renderSteps() {
    var el = $('#steps'); if (!el) return; var t = T[lang];
    el.innerHTML = [1, 2, 3, 4].map(function (i) { return '<li><div><b>' + t['s' + i + 't'] + '</b><span>' + t['s' + i + 'd'] + '</span></div></li>'; }).join('');
  }
  function renderFaq() {
    var el = $('#faqList'); if (!el) return; var t = T[lang];
    el.innerHTML = t.faq.map(function (q) { return '<details><summary>' + q[0] + '</summary><p>' + q[1] + '</p></details>'; }).join('');
  }
  function serviceNames() { var t = T[lang]; return t.services.map(function (s) { return s.n; }).concat([t.other]); }
  function renderChips() {
    var el = $('#chips'); if (!el) return;
    el.innerHTML = serviceNames().map(function (n, i) {
      return '<label class="chip"><input type="radio" name="svc" value="' + i + '"' + (i === chosen ? ' checked' : '') + '><span>' + n + '</span></label>';
    }).join('');
    $$('#chips input').forEach(function (r) { r.addEventListener('change', function () { chosen = +r.value; }); });
    var t = T[lang];
    if ($('#loc')) $('#loc').placeholder = t.phLoc;
    if ($('#note')) $('#note').placeholder = t.phNote;
  }

  /* ---------- render ---------- */
  function render() {
    var t = T[lang];
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    $$('[data-i18n]').forEach(function (el) {
      var v = t[el.getAttribute('data-i18n')];
      if (typeof v === 'string') { if (v.indexOf('<em>') > -1) el.innerHTML = v; else el.textContent = v; }
    });
    $$('[data-i18n-title]').forEach(function (el) { document.title = t[el.getAttribute('data-i18n-title')] + ' | ' + t.legal; });
    $$('[data-wa="general"]').forEach(function (a) { a.href = wa(t.msgGeneral); });
    $('#langBtn').textContent = lang === 'ar' ? 'English' : 'العربية';
    $('#langBtn').setAttribute('aria-label', lang === 'ar' ? 'Switch to English' : 'التبديل إلى العربية');
    $('#burger').setAttribute('aria-label', t.menu);
    renderServiceCards('#services-grid');
    renderServiceDetail();
    renderGallery('#gal', +(($('#gal') || {}).getAttribute ? $('#gal').getAttribute('data-count') || 12 : 12));
    renderSteps(); renderFaq(); renderChips();
    var vb = $('#vidBtn'); if (vb) vb.textContent = isPlaying() ? t.pause : t.play;
  }

  /* ---------- video cover ---------- */
  function vid() { return $('#heroVideo'); }
  function isPlaying() { var v = vid(); return v && !v.paused; }
  function setupVideo() {
    var v = vid(); if (!v) return;
    var reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
    v.muted = true;
    if (reduce) { v.pause(); v.removeAttribute('autoplay'); }
    else { var p = v.play(); if (p && p.catch) p.catch(function () {}); }
    var b = $('#vidBtn');
    if (b) b.addEventListener('click', function () {
      if (v.paused) { v.play(); } else { v.pause(); }
      b.textContent = v.paused ? T[lang].play : T[lang].pause;
    });
    v.addEventListener('error', function () { v.style.display = 'none'; if (b) b.hidden = true; }, true);
  }

  /* ---------- forms and lightbox ---------- */
  function setupForm() {
    var f = $('#quoteForm'); if (!f) return;
    f.addEventListener('submit', function (e) {
      e.preventDefault(); var t = T[lang];
      var url = wa(t.msgForm(serviceNames()[chosen], $('#loc').value.trim(), $('#note').value.trim()));
      var w = null; try { w = window.open(url, '_blank', 'noopener'); } catch (err) {}
      if (!w) location.href = url;
    });
  }
  function setupLightbox() {
    var g = $('#gal'), d = $('#lb'); if (!g || !d) return;
    g.addEventListener('click', function (e) {
      var b = e.target.closest('button'); if (!b) return;
      $('#lbImg').src = b.getAttribute('data-src');
      if (d.showModal) d.showModal(); else d.setAttribute('open', '');
    });
    d.addEventListener('click', function (e) { if (e.target === d) d.close(); });
  }

  buildChrome();
  render();
  setupVideo();
  setupForm();
  setupLightbox();
  document.documentElement.setAttribute('data-ready', '1');
})();
