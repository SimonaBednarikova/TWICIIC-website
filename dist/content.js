/* TWICIIC website content — one object, keyed by language (en / de / sk).
   Every string on the site lives here. `acc` holds the Twin City Accelerator page copy (shipped unchanged). */
(function () {
  var W = 'Vienna', B = 'Bratislava';
  var en = {
    meta: { locale: 'en-GB', code: 'en', langName: 'English', skip: 'Skip to content', months: 'months' },
    nav: {
      programme: 'Home', accelerator: 'Accelerator', about: 'Team & Research', partners: 'Partners', research: 'Research', portfolio: 'Participants', events: 'Events',
      cta: 'Join our network', menu: 'Menu', close: 'Close', langLabel: 'Language', aboutLabel: 'Team & Research',
      accLabel: 'Twin City Accelerator', accOverview: 'Twin City Accelerator', readiness: 'Learn & check your readiness to scale',
      accDesc: { overview: 'Programme, timeline and how to apply', readiness: 'Free content and a 2-minute self-check' },
      aboutDesc: { partners: 'Six organisations, two cities', research: 'What we are learning', portfolio: 'Ventures we support' },
      sections: 'Sections'
    },
    home: {
      hero: {
        eyebrow: 'Twin City Impact Innovation Champion · Vienna – Bratislava',
        h1: 'Grow your impact venture across two capitals.',
        sub: 'TWICIIC turns Vienna and Bratislava into one home market for impact-oriented scale-ups, SMEs and NGOs.',
        cta1: 'Explore the Accelerator', cta2: 'Join our network',
        note: 'An Interreg Slovakia–Austria project. Free to join, open on both sides of the border.',
        media: 'Hero visual: the two cities, 55 km apart', km: 'km', vie: W, ba: B
      },
      cities: {
        eyebrow: 'Two capitals · 55 kilometres',
        h2: 'The closest capitals in Europe. Two ecosystems with a lot to gain from each other.',
        lead: 'Vienna and Bratislava are closer to each other than any other two capitals on the continent – and their impact-innovation scenes are ready to grow closer too.',
        vie: { title: W, body: 'An established impact scene with strong support structures, investors and international networks.' },
        ba: { title: B, body: 'A dynamic, entrepreneurial scene with fast-growing ventures, strong talent and a drive to build.' },
        change: { title: 'Stronger together.', body: 'Founders on both sides share the same needs: cross-border know-how, investment readiness and simply knowing who is doing what an hour away. Meet them together and two neighbouring markets become one region of three million people.' },
        stats: [
          { kind: 'num', n: 55, pre: '', post: ' km', display: '55 km', l: 'between the two capitals' },
          { kind: 'num', n: 3, pre: '~', post: ' million', display: '~3 million', l: 'people in one region' },
          { kind: 'arrow', a: '2', b: '1', display: '2 → 1', l: 'ecosystems becoming one network' },
          { kind: 'range', a: '2025', n: 2028, from: 2025, display: '2025 – 2028', l: 'three years to connect them' }
        ],
        media: 'Map: the Vienna – Bratislava corridor', danube: 'Danube', km: '55 km'
      },
      pulse: {
        eyebrow: 'Twin City Pulse', h2: 'Be the pulse of the Twin City.',
        body: 'TWICIIC is here to connect the two ecosystems, and everyone in them. Join the network and become part of Twin City Pulse, the growing community of people building impact across Vienna and Bratislava.',
        cta: 'Join our network', sub: 'Free. Open to both cities. Continues beyond 2028.'
      },
      sw: {
        h: 'Where do you fit in?',
        items: [
          { n: '01', title: "I'm building a venture", body: 'An impact-oriented scale-up, SME or NGO ready to grow into a second market.', cta: 'Explore the Accelerator', href: '#accelerator' },
          { n: '02', title: 'I work in the ecosystem or for a city', body: 'A hub, university, investor, city department or municipal company.', cta: 'Meet our partners', href: '#partners' },
          { n: '03', title: 'I want to understand both markets', body: 'Research and findings from both sides of the border.', cta: 'Read the research', href: '#research' }
        ]
      },
      acc: {
        eyebrow: 'Twin City Accelerator', h2: 'One programme. Two cities. Three ways in.',
        what: { title: 'What it is', body: 'A free cross-border accelerator for impact-driven ventures that want to operate in both Vienna and Bratislava, from first curiosity to the first customers on the other side.' },
        get: { title: 'What support you get', body: 'Practical business training, a mixed Vienna–Bratislava cohort, mentoring from people who have scaled, and hands-on support for your first steps into the second market.' },
        who: { title: 'Who delivers it', body: 'CB ESPRI, Relevant Ventures and Impact Slovakia run the programme, backed by the Vienna Business Agency, the City of Bratislava and ZSI.' },
        forLabel: 'Who it’s for',
        stages: [
          { n: '01', title: 'Start here', forText: 'Open to anyone curious about the Twin City ecosystem', body: 'Open online sessions on building and growing impact ventures across the border. No application, no cost. Come once or come every time.', cta: 'See upcoming sessions', href: '#events' },
          { n: '02', title: 'Cross-border Masterclass', forText: 'For ventures with a serious plan to enter the other city', body: 'Eleven weeks from April to June 2027, one mixed cohort of 10 companies from Vienna and Bratislava, built around a week at ViennaUP. The core of the accelerator: you leave with a concrete expansion plan and partners across the border.', cta: 'How the masterclass works', href: '#accelerator' },
          { n: '03', title: 'Scale-up support', forText: 'For selected ventures from the masterclass', body: 'Up to six months of individual support to execute your first cross-border steps: pilots, partners, customers and financing.', cta: 'How selection works', href: '#support' }
        ],
        cta1: 'Apply to the Accelerator', cta2: 'Am I ready to scale? 2-minute check'
      },
      events: {
        eyebrow: 'Events', h2: "Discover what's coming up.",
        lead: "Online sessions, meetups, Demo Days and study visits in both cities. Most are free. Come and meet the people you'll be working with.",
        all: 'See all events'
      },
      team: {
        eyebrow: "Who's behind it", h2: 'Discover the unique cohort of partners working behind TWICIIC.',
        body: 'Six organisations, two cities, one team: a research centre, two city agencies, a venture studio, an accelerator operator and an impact network. Meet the people who run the programme, the research and the network.',
        cta1: 'Meet the partners', cta2: 'Discover our team', media: 'The TWICIIC partner consortium at its meeting in Bratislava, June 2026.'
      },
      nl: { h2: 'Stay in the loop.', body: "One email a month: new sessions, open calls and what we're learning. No noise.", ph: 'your@email.com', cta: 'Subscribe', done: 'Almost there – please check your inbox and confirm your subscription.', err: 'Something went wrong. Please try again in a moment.', sending: 'Sending…', consent: 'By subscribing, you agree to receive the TWICIIC newsletter. You can unsubscribe at any time.', privacy: 'Privacy policy', label: 'Email address', namePh: 'Your name', orgPh: 'Company / organisation' }
    },
    par: {
      hero: { eyebrow: 'Team & Research · Partners', h1: 'Six partners. Two cities. One team.', sub: 'TWICIIC is run by six organisations from Vienna and Bratislava, combining complementary strengths from both sides of the border.' },
      list: [
        { name: 'ZSI – Centre for Social Innovation', city: W, side: 'vie', alt: 'l', role: 'Lead partner', body: 'Coordinates the project and leads the research that maps both ecosystems.', logo: 'assets/partners/zsi-c.png' },
        { name: 'Capital City of Bratislava', city: B, side: 'ba', alt: 'r', role: 'Municipal anchor, Slovakia', body: 'Opens the city and its municipal companies to pilots, peer learning and the network.', logo: 'assets/partners/bratislava-c.png' },
        { name: 'Vienna Business Agency', city: W, side: 'vie', alt: 'l', role: 'Ecosystem networks lead', body: 'Strengthens and promotes Vienna as a business location and leads the ecosystem networks: meetups, study visits and the cooperation between the two cities.', logo: 'assets/partners/vienna-business-agency-c.png' },
        { name: 'Relevant Ventures', city: W, side: 'vie', alt: 'r', role: 'Communication & entrepreneurial support', body: "Delivers entrepreneurial support in the accelerator and runs the project's communication.", logo: 'assets/partners/relevant.svg' },
        { name: 'CB ESPRI', city: B, side: 'ba', alt: 'l', role: 'Impact Investment Fund', body: 'CB ESPRI is a management company managing investment funds. It combines financial returns with positive social impact. Its flagship fund supports investments creating measurable social impact in Slovakia.', logo: 'assets/partners/cb-espri.svg' },
        { name: 'Impact Slovakia', city: B, side: 'ba', alt: 'r', role: 'Venture scouting & support, Slovakia', body: 'Finds and supports the Slovak ventures and connects the programme to the Slovak impact scene.', logo: 'assets/partners/impact-slovakia-c.png' }
      ],
      link: { web: 'Website', li: 'LinkedIn' },
      team: {
        eyebrow: 'The team', h2: 'The people behind TWICIIC.', body: 'Seventeen people from six organisations in Vienna and Bratislava: researchers, city agencies, investors and venture builders who run the programme together.',
        caption: 'The TWICIIC partner consortium at its meeting in Bratislava, June 2026.', li: 'View LinkedIn profile',
        groups: [
          { name: 'Programme', members: [{ name: 'Name', role: 'Programme lead', org: 'CB ESPRI · Bratislava' }, { name: 'Name', role: 'Entrepreneurial support', org: 'Relevant Ventures · Vienna' }] },
          { name: 'Research', members: [{ name: 'Name', role: 'Research lead', org: 'ZSI · Vienna' }, { name: 'Name', role: 'Researcher', org: 'ZSI · Vienna' }] },
          { name: 'Ecosystem & cities', members: [{ name: 'Name', role: 'Ecosystem networks', org: 'Vienna Business Agency · Vienna' }, { name: 'Name', role: 'City cooperation', org: 'City of Bratislava · Bratislava' }] },
          { name: 'Communication', members: [{ name: 'Name', role: 'Communication', org: 'Relevant Ventures · Vienna' }, { name: 'Name', role: 'Venture scouting', org: 'Impact Slovakia · Bratislava' }] }
        ]
      },
      fund: {
        eyebrow: 'How TWICIIC is funded', h2: 'Co-funded by the European Union.',
        body: 'This project is co-funded by the Interreg Slovakia–Austria 2021–2027 programme from the European Regional Development Fund (ERDF).',
        rows: [
          { k: 'Programme', v: 'Interreg Slovakia–Austria 2021–2027', sub: '' },
          { k: 'Fund', v: 'European Regional Development Fund (ERDF)', sub: '' },
          { k: 'Project ID', v: 'NFP404101C337', sub: '' },
          { k: 'Duration', v: 'October 2025 – September 2028', sub: '36 months', n: 36, pre: '', post: ' months' },
          { k: 'Budget', v: '€1,574,443', sub: 'of which €1,259,554 from the ERDF · 80%', n: 1574443, pre: '€', post: '' }
        ],
        unit: 'Interreg Slovakia–Austria brand unit'
      },
      cta: { h2: 'Want to work with us?', body: 'Co-host a session, refer a venture, pilot with a city or join the network.', b2: 'Join our network' }
    },
    res: {
      hero: { eyebrow: 'Research', h1: "What we're learning about the Twin City.", sub: 'Before we accelerate, we map. Our research team is documenting both ecosystems so that founders, cities and partners work from the same picture.' },
      prog: { eyebrow: 'In the making', h2: 'Two reports, both in progress.' },
      lbl: { method: "How we're doing it", when: 'When' },
      reports: [
        { n: '01', side: 'vie', type: 'Report · in progress', title: 'Mapping the Twin City impact ecosystem', body: 'Who supports impact ventures in Vienna and in Bratislava, and how well the two sides know each other: hubs, investors, universities, support programmes, municipal players.', method: 'Desk research, interviews with ecosystem actors on both sides, focus groups in each city.', when: 'First findings in 2026', cta: "Get notified when it's out" },
        { n: '02', side: 'ba', type: 'Report · in progress', title: 'What impact founders need to cross the border', body: 'A needs analysis with founders, SMEs and NGOs: investment readiness, cross-border know-how, legal and market entry, impact measurement.', method: 'Founder interviews and a validation workshop with founders and ecosystem players. The results feed directly into what the accelerator teaches.', when: 'Findings in 2026', cta: 'Take part in the research' }
      ],
      know: { eyebrow: 'What we already know', h2: 'Four things the first conversations made clear.' },
      k: [
        { n: '01', text: 'Both cities have active impact scenes that are only starting to connect across the border.' },
        { n: '02', text: 'Each side brings its own strengths: Vienna its established support structures, Bratislava its entrepreneurial speed.' },
        { n: '03', text: 'Neither side has a reliable picture of who does what 55 km away.' },
        { n: '04', text: 'The gaps founders name first are investment readiness and cross-border know-how.' }
      ],
      themesH: 'Themes we cover',
      themes: [{ text: 'Cross-border expansion' }, { text: 'Impact measurement' }, { text: 'Finance & investment readiness' }, { text: 'Cities & public innovation' }, { text: 'Ecosystem mapping' }]
    },
    por: {
      hero: { eyebrow: 'Team & Research · Participants', h1: 'The ventures of the Twin City.', sub: "Every venture that goes through the Twin City Accelerator will be here: what they do, where they're from, and where they're going." },
      empty: { label: 'First cohort in preparation', h2: 'The first cohort is in preparation.', body: "We're selecting the ventures that will form the first cross-border cohort of the Twin City Accelerator. Their profiles appear here the moment they start.", cta1: 'Find out how to join the first cohort', cta2: 'Stay tuned', note: 'Applications are open to impact-oriented scale-ups, SMEs and NGOs from Vienna and Bratislava.' },
      soon: "What you'll find here",
      g: { logo: 'Venture logo', name: 'Venture name', meta: 'Sector · City · Stage', body: 'One line on what the venture does, verb first.', example: 'Example entry' },
      cta: { h2: 'Want to be on this page?', b1: 'Apply to the Accelerator' }
    },
    ev: {
      hero: { eyebrow: 'Events', h1: "What's on in the Twin City.", sub: 'Sessions, meetups, Demo Days and study visits in Vienna, Bratislava and online.' },
      f: { up: 'Upcoming', past: 'Past', vie: W, ba: B, on: 'Online', inPerson: 'In person', tags: 'Filter by type', where: 'Filter by place', clear: 'Clear filters' },
      types: { launch: 'Launch event', session: 'Online session', meetup: 'Meetup', demo: 'Demo Day', visit: 'Study visit', round: 'Roundtable' },
      upH: 'Upcoming',
      items: [
        { id: 'e0', typeKey: 'launch', locKey: 'ba', type: 'Launch event', loc: B, date: '22 October 2026', title: "Twin City Accelerator launch at The Spot's Startup Party", body: "We're officially launching the Twin City Accelerator at The Spot's Startup Party, \u201cA Little Startup Party Never Killed Nobody\u201d. Thursday from 18:00 at The Spot, Bottova 2/A. Hear what's coming for impact ventures in Vienna and Bratislava, meet the team and the startup community, and stay for the music. Theme: Gatsby glamour meets casino night. Dress code: a little elegance, a little play. When you register, choose the free Twin City Accelerator Guest ticket. The organisers approve every registration.", cta: 'Register on Luma', cover: 'assets/events/startup-party-the-spot.jpg', coverAlt: 'Startup Party poster: A Little Party Never Killed Nobody, 22.10.2026, 18:00, The Spot', href: 'https://luma.com/m5ci9dts' },
        { id: 'e1', draft: true, typeKey: 'session', locKey: 'on', type: 'Online session', loc: 'Online', date: 'Date to be announced', title: 'Building an impact venture for two markets', body: "The first open session: what changes when your home market becomes two capitals, and how to find out whether it's worth it for you.", cta: 'Save my seat' },
        { id: 'e2', draft: true, typeKey: 'meetup', locKey: 'vie', type: 'Meetup', loc: W, date: 'Date to be announced', title: 'Twin City Pulse: meet the Vienna scene', body: "An evening with Vienna's impact founders, hubs and investors, and the Bratislava people who came to meet them.", cta: 'Save my seat' },
        { id: 'e3', draft: true, typeKey: 'meetup', locKey: 'ba', type: 'Meetup', loc: B, date: 'Date to be announced', title: 'Twin City Pulse: meet the Bratislava scene', body: 'The same evening, the other way round.', cta: 'Save my seat' },
        { id: 'e4', draft: true, typeKey: 'round', locKey: 'vie', type: 'Roundtable', loc: W, date: 'Date to be announced', title: 'Cities as partners: what municipal companies need from impact ventures', body: 'For city departments, municipal companies and the ventures that want to pilot with them.', cta: 'Request an invitation' }
      ],
      none: 'No events match these filters yet.',
      past: { h2: 'Past events', body: 'Every event stays on this page after it happens, with photos, the recording and what came out of it.', ghost: 'Recap · coming soon', none: 'No past events yet. Recaps will appear here after our first events.' },
      newsH: 'News',
      news: [
        { date: 'October 2025', tag: 'Project', title: 'TWICIIC kicks off: six partners, two cities, one plan', body: 'The consortium met for the first time to set the plan for three years of connecting Vienna and Bratislava.' },
        { date: '2026', tag: 'Accelerator', title: 'The Twin City Accelerator: how the first year works', body: 'Open sessions first, the masterclass next, scale-up support for the ventures that make the strongest case.' },
        { date: '2026', tag: 'Research', title: 'Mapping both ecosystems has begun', body: "Our researchers are interviewing hubs, investors and founders on both sides of the border. Here's what we're asking." }
      ],
      more: 'Read more',
      nl: { h2: 'Never miss a date.', body: 'One email a month with every upcoming session and project updates.', cta: 'Subscribe' }
    },
    ft: {
      about: 'TWICIIC – Twin City Impact Innovation Champion – connects the innovation ecosystems of Vienna and Bratislava. Through a cross-border accelerator, ecosystem events and city partnerships, it helps impact-oriented scale-ups, SMEs and NGOs grow in both markets.',
      navH: 'Navigate', touchH: 'Stay in touch', touchBody: 'Newsletter, once a month.', touchCta: 'Subscribe', li: 'LinkedIn', contact: 'Contact us',
      liEyebrow: 'Follow us on LinkedIn', liText: 'Track our latest updates — open calls, workshops and cohort updates, posted regularly.',
      partners: 'Partners', fundH: 'Funding', fundLine: 'Co-funded by the European Union', fundProg: 'Interreg Slovakia–Austria 2021–2027', fundRegion: 'Slovakia – Austria',
      fundLong: 'This project is co-financed by the Interreg Slovakia–Austria 2021–2027 Programme from the European Regional Development Fund (ERDF).',
      copyright: '© 2026 TWICIIC. All rights reserved.',
      cookie: { label: 'Cookie consent', text: 'With your consent, we use Google Analytics cookies to understand how the website is used, and share this data with Google, including for advertising. You can change your choice at any time under “Cookie settings”.', more: 'Privacy policy', accept: 'Accept all', reject: 'Necessary only', settings: 'Cookie settings' },
      legal: [{ text: 'Privacy', href: '#privacy' }, { text: 'Imprint', href: '#imprint' }, { text: 'Accessibility', href: '#accessibility' }]
    }
  };

  var de = {
    meta: { locale: 'de-AT', code: 'de', langName: 'Deutsch', skip: 'Zum Inhalt springen', months: 'Monate' },
    nav: {
      programme: 'Start', accelerator: 'Accelerator', about: 'Team & Forschung', partners: 'Partner', research: 'Forschung', portfolio: 'Teilnehmende', events: 'Events',
      cta: 'Netzwerk beitreten', menu: 'Menü', close: 'Schließen', langLabel: 'Sprache', aboutLabel: 'Team & Forschung',
      accLabel: 'Twin City Accelerator', accOverview: 'Twin City Accelerator', readiness: 'Lernen & Bereitschaft zur Skalierung prüfen',
      accDesc: { overview: 'Programm, Zeitplan und Bewerbung', readiness: 'Kostenlose Inhalte und 2-Minuten-Check' },
      aboutDesc: { partners: 'Sechs Organisationen, zwei Städte', research: 'Was wir lernen', portfolio: 'Ventures, die wir begleiten' },
      sections: 'Abschnitte'
    },
    home: {
      hero: {
        eyebrow: 'Twin City Impact Innovation Champion · Wien – Bratislava',
        h1: 'Lassen Sie Ihr Impact-Venture in zwei Hauptstädten wachsen.',
        sub: 'TWICIIC macht Wien und Bratislava zu einem Heimmarkt für wirkungsorientierte Scale-ups, KMU und NGOs.',
        cta1: 'Zum Accelerator', cta2: 'Netzwerk beitreten',
        note: 'Ein Projekt von Interreg Slowakei–Österreich. Kostenlos, offen auf beiden Seiten der Grenze.',
        media: 'Hero-Visual: die zwei Städte, 55 km voneinander entfernt', km: 'km', vie: 'Wien', ba: B
      },
      cities: {
        eyebrow: 'Zwei Hauptstädte · 55 Kilometer',
        h2: 'Die nächsten Hauptstädte Europas. Zwei Ökosysteme, die viel voneinander gewinnen können.',
        lead: 'Wien und Bratislava liegen näher beieinander als jedes andere Hauptstadtpaar auf dem Kontinent – und ihre Impact-Innovationsszenen sind bereit, enger zusammenzuwachsen.',
        vie: { title: 'Wien', body: 'Eine etablierte Impact-Szene mit starken Unterstützungsstrukturen, Investor:innen und internationalen Netzwerken.' },
        ba: { title: B, body: 'Eine dynamische, unternehmerische Szene mit schnell wachsenden Ventures, starken Talenten und viel Gestaltungswillen.' },
        change: { title: 'Gemeinsam stärker.', body: 'Gründer:innen auf beiden Seiten haben dieselben Bedürfnisse: grenzüberschreitendes Know-how, Investment Readiness und schlicht zu wissen, wer eine Stunde entfernt was tut. Gehen wir sie gemeinsam an, werden aus zwei Nachbarmärkten eine Region mit drei Millionen Menschen.' },
        stats: [
          { kind: 'num', n: 55, pre: '', post: ' km', display: '55 km', l: 'zwischen den beiden Hauptstädten' },
          { kind: 'num', n: 3, pre: '~', post: ' Millionen', display: '~3 Millionen', l: 'Menschen in einer Region' },
          { kind: 'arrow', a: '2', b: '1', display: '2 → 1', l: 'Ökosysteme werden ein Netzwerk' },
          { kind: 'range', a: '2025', n: 2028, from: 2025, display: '2025 – 2028', l: 'drei Jahre, um sie zu verbinden' }
        ],
        media: 'Karte: der Korridor Wien – Bratislava', danube: 'Donau', km: '55 km'
      },
      pulse: {
        eyebrow: 'Twin City Pulse', h2: 'Werden Sie zum Puls der Twin City.',
        body: 'TWICIIC ist da, um die beiden Ökosysteme zu verbinden – und alle, die sie ausmachen. Treten Sie dem Netzwerk bei und werden Sie Teil von Twin City Pulse – der wachsenden Community, die Impact in Wien und Bratislava aufbaut.',
        cta: 'Netzwerk beitreten', sub: 'Kostenlos. Offen für beide Städte. Läuft über 2028 hinaus.'
      },
      sw: {
        h: 'Wo passen Sie hin?',
        items: [
          { n: '01', title: 'Ich baue ein Venture auf', body: 'Ein wirkungsorientiertes Scale-up, KMU oder eine NGO, bereit für den zweiten Markt.', cta: 'Zum Accelerator', href: '#accelerator' },
          { n: '02', title: 'Ich arbeite im Ökosystem oder für eine Stadt', body: 'Ein Hub, eine Universität, Investor:in, Stadtabteilung oder ein kommunales Unternehmen.', cta: 'Unsere Partner', href: '#partners' },
          { n: '03', title: 'Ich will beide Märkte verstehen', body: 'Forschung und Erkenntnisse von beiden Seiten der Grenze.', cta: 'Zur Forschung', href: '#research' }
        ]
      },
      acc: {
        eyebrow: 'Twin City Accelerator', h2: 'Ein Programm. Zwei Städte. Drei Wege hinein.',
        what: { title: 'Was es ist', body: 'Ein kostenloser grenzüberschreitender Accelerator für wirkungsorientierte Ventures, die in Wien und Bratislava tätig sein wollen – von der ersten Neugier bis zu den ersten Kund:innen auf der anderen Seite.' },
        get: { title: 'Welche Unterstützung Sie bekommen', body: 'Praxisnahes Business-Training, eine gemischte Wien–Bratislava-Kohorte, Mentoring von Menschen, die selbst skaliert haben, und konkrete Unterstützung bei Ihren ersten Schritten in den zweiten Markt.' },
        who: { title: 'Wer es umsetzt', body: 'CB ESPRI, Relevant Ventures und Impact Slovakia führen das Programm durch – getragen von der Wirtschaftsagentur Wien, der Stadt Bratislava und dem ZSI.' },
        forLabel: 'Für wen',
        stages: [
          { n: '01', title: 'Hier starten', forText: 'Offen für alle, die das Twin-City-Ökosystem kennenlernen wollen', body: 'Offene Online-Sessions zum Aufbau und Wachstum von Impact-Ventures über die Grenze. Keine Bewerbung, keine Kosten. Kommen Sie einmal oder jedes Mal.', cta: 'Kommende Sessions ansehen', href: '#events' },
          { n: '02', title: 'Cross-border Masterclass', forText: 'Für Ventures mit einem ernsthaften Plan für die andere Stadt', body: 'Elf Wochen von April bis Juni 2027, eine gemischte Kohorte mit 10 Unternehmen aus Wien und Bratislava, aufgebaut rund um eine Woche bei ViennaUP. Das Herz des Accelerators: Sie gehen mit einem konkreten Expansionsplan und Partnern jenseits der Grenze nach Hause.', cta: 'So funktioniert die Masterclass', href: '#accelerator' },
          { n: '03', title: 'Scale-up-Support', forText: 'Für ausgewählte Ventures aus der Masterclass', body: 'Bis zu sechs Monate individuelle Unterstützung für Ihre ersten grenzüberschreitenden Schritte: Pilotprojekte, Partner, Kund:innen und Finanzierung.', cta: 'So läuft die Auswahl', href: '#support' }
        ],
        cta1: 'Für den Accelerator bewerben', cta2: 'Bin ich bereit zu skalieren? 2-Minuten-Check'
      },
      events: {
        eyebrow: 'Events', h2: 'Entdecken Sie, was ansteht.',
        lead: 'Online-Sessions, Meetups, Demo Days und Studienbesuche in beiden Städten. Die meisten kostenlos. Kommen Sie vorbei und lernen Sie die Menschen kennen, mit denen Sie arbeiten werden.',
        all: 'Alle Events'
      },
      team: {
        eyebrow: 'Wer dahintersteht', h2: 'Entdecken Sie das einzigartige Partnerteam hinter TWICIIC.',
        body: 'Sechs Organisationen, zwei Städte, ein Team: ein Forschungszentrum, zwei Stadtagenturen, ein Venture Studio, ein Accelerator-Betreiber und ein Impact-Netzwerk. Lernen Sie die Menschen kennen, die Programm, Forschung und Netzwerk tragen.',
        cta1: 'Partner kennenlernen', cta2: 'Unser Team entdecken', media: 'Das TWICIIC-Partnerkonsortium beim Treffen in Bratislava, Juni 2026.'
      },
      nl: { h2: 'Bleiben Sie auf dem Laufenden.', body: 'Eine E-Mail pro Monat: neue Sessions, offene Calls und was wir lernen. Kein Rauschen.', ph: 'ihre@email.com', cta: 'Abonnieren', done: 'Fast geschafft – bitte bestätigen Sie die Anmeldung in Ihrem Postfach.', err: 'Etwas ist schiefgelaufen. Bitte versuchen Sie es gleich noch einmal.', sending: 'Wird gesendet…', consent: 'Mit der Anmeldung stimmen Sie zu, den TWICIIC-Newsletter zu erhalten. Sie können sich jederzeit abmelden.', privacy: 'Datenschutz', label: 'E-Mail-Adresse', namePh: 'Ihr Name', orgPh: 'Unternehmen / Organisation' }
    },
    par: {
      hero: { eyebrow: 'Team & Forschung · Partner', h1: 'Sechs Partner. Zwei Städte. Ein Team.', sub: 'TWICIIC wird von sechs Organisationen aus Wien und Bratislava getragen, die ihre sich ergänzenden Stärken von beiden Seiten der Grenze bündeln.' },
      list: [
        { name: 'ZSI – Zentrum für Soziale Innovation', city: 'Wien', side: 'vie', alt: 'l', role: 'Lead-Partner', body: 'Koordiniert das Projekt und leitet die Forschung, die beide Ökosysteme kartiert.', logo: 'assets/partners/zsi-c.png' },
        { name: 'Hauptstadt Bratislava', city: B, side: 'ba', alt: 'r', role: 'Kommunaler Anker, Slowakei', body: 'Öffnet die Stadt und ihre kommunalen Unternehmen für Pilotprojekte, Peer-Learning und das Netzwerk.', logo: 'assets/partners/bratislava-c.png' },
        { name: 'Wirtschaftsagentur Wien', city: 'Wien', side: 'vie', alt: 'l', role: 'Leitung Ökosystem-Netzwerke', body: 'Stärkt und bewirbt Wien als Wirtschaftsstandort und leitet die Ökosystem-Netzwerke: Meetups, Studienbesuche und die Kooperation der beiden Städte.', logo: 'assets/partners/vienna-business-agency-c.png' },
        { name: 'Relevant Ventures', city: 'Wien', side: 'vie', alt: 'r', role: 'Kommunikation & Gründungsunterstützung', body: 'Liefert die unternehmerische Unterstützung im Accelerator und verantwortet die Projektkommunikation.', logo: 'assets/partners/relevant.svg' },
        { name: 'CB ESPRI', city: B, side: 'ba', alt: 'l', role: 'Impact-Investmentfonds', body: 'CB ESPRI ist eine Verwaltungsgesellschaft für Investmentfonds. Sie verbindet finanzielle Rendite mit positiver sozialer Wirkung. Ihr Flaggschiff-Fonds unterstützt Investitionen mit messbarer sozialer Wirkung in der Slowakei.', logo: 'assets/partners/cb-espri.svg' },
        { name: 'Impact Slovakia', city: B, side: 'ba', alt: 'r', role: 'Venture-Scouting & Support, Slowakei', body: 'Findet und begleitet die slowakischen Ventures und verbindet das Programm mit der slowakischen Impact-Szene.', logo: 'assets/partners/impact-slovakia-c.png' }
      ],
      link: { web: 'Website', li: 'LinkedIn' },
      team: {
        eyebrow: 'Das Team', h2: 'Die Menschen hinter TWICIIC.', body: 'Siebzehn Menschen aus sechs Organisationen in Wien und Bratislava: Forschende, Stadtagenturen, Investoren und Venture Builder, die das Programm gemeinsam umsetzen.',
        caption: 'Das TWICIIC-Partnerkonsortium beim Treffen in Bratislava, Juni 2026.', li: 'LinkedIn-Profil ansehen',
        groups: [
          { name: 'Programm', members: [{ name: 'Name', role: 'Programmleitung', org: 'CB ESPRI · Bratislava' }, { name: 'Name', role: 'Gründungsunterstützung', org: 'Relevant Ventures · Wien' }] },
          { name: 'Forschung', members: [{ name: 'Name', role: 'Forschungsleitung', org: 'ZSI · Wien' }, { name: 'Name', role: 'Forschung', org: 'ZSI · Wien' }] },
          { name: 'Ökosystem & Städte', members: [{ name: 'Name', role: 'Ökosystem-Netzwerke', org: 'Wirtschaftsagentur Wien · Wien' }, { name: 'Name', role: 'Städtekooperation', org: 'Stadt Bratislava · Bratislava' }] },
          { name: 'Kommunikation', members: [{ name: 'Name', role: 'Kommunikation', org: 'Relevant Ventures · Wien' }, { name: 'Name', role: 'Venture-Scouting', org: 'Impact Slovakia · Bratislava' }] }
        ]
      },
      fund: {
        eyebrow: 'So wird TWICIIC finanziert', h2: 'Kofinanziert von der Europäischen Union.',
        body: 'Dieses Projekt wird vom Programm Interreg Slowakei–Österreich 2021–2027 aus dem Europäischen Fonds für regionale Entwicklung (EFRE) kofinanziert.',
        rows: [
          { k: 'Programm', v: 'Interreg Slowakei–Österreich 2021–2027', sub: '' },
          { k: 'Fonds', v: 'Europäischer Fonds für regionale Entwicklung (EFRE)', sub: '' },
          { k: 'Projekt-ID', v: 'NFP404101C337', sub: '' },
          { k: 'Laufzeit', v: 'Oktober 2025 – September 2028', sub: '36 Monate', n: 36, pre: '', post: ' Monate' },
          { k: 'Budget', v: '1.574.443 €', sub: 'davon 1.259.554 € aus dem EFRE · 80 %', n: 1574443, pre: '', post: ' €' }
        ],
        unit: 'Interreg Slowakei–Österreich Markenelement'
      },
      cta: { h2: 'Wollen Sie mit uns arbeiten?', body: 'Eine Session co-hosten, ein Venture empfehlen, mit einer Stadt pilotieren oder dem Netzwerk beitreten.', b2: 'Netzwerk beitreten' }
    },
    res: {
      hero: { eyebrow: 'Forschung', h1: 'Was wir über die Twin City lernen.', sub: 'Bevor wir beschleunigen, kartieren wir. Unser Forschungsteam dokumentiert beide Ökosysteme, damit Gründer:innen, Städte und Partner vom selben Bild ausgehen.' },
      prog: { eyebrow: 'In Arbeit', h2: 'Zwei Berichte, beide in Arbeit.' },
      lbl: { method: 'So gehen wir vor', when: 'Wann' },
      reports: [
        { n: '01', side: 'vie', type: 'Bericht · in Arbeit', title: 'Das Impact-Ökosystem der Twin City kartieren', body: 'Wer Impact-Ventures in Wien und in Bratislava unterstützt – und wie gut sich beide Seiten kennen: Hubs, Investor:innen, Universitäten, Förderprogramme, kommunale Akteure.', method: 'Desk Research, Interviews mit Ökosystem-Akteur:innen auf beiden Seiten, Fokusgruppen in jeder Stadt.', when: 'Erste Ergebnisse 2026', cta: 'Benachrichtigen, wenn er erscheint' },
        { n: '02', side: 'ba', type: 'Bericht · in Arbeit', title: 'Was Impact-Gründer:innen brauchen, um die Grenze zu überschreiten', body: 'Eine Bedarfsanalyse mit Gründer:innen, KMU und NGOs: Investment Readiness, grenzüberschreitendes Know-how, Recht und Markteintritt, Wirkungsmessung.', method: 'Gründer:innen-Interviews und ein Validierungsworkshop mit Gründer:innen und Ökosystem-Akteur:innen. Die Ergebnisse fließen direkt in die Inhalte des Accelerators ein.', when: 'Ergebnisse 2026', cta: 'An der Forschung teilnehmen' }
      ],
      know: { eyebrow: 'Was wir schon wissen', h2: 'Vier Dinge, die die ersten Gespräche klar gemacht haben.' },
      k: [
        { n: '01', text: 'Beide Städte haben aktive Impact-Szenen, die sich über die Grenze hinweg erst zu vernetzen beginnen.' },
        { n: '02', text: 'Jede Seite bringt eigene Stärken mit: Wien seine etablierten Unterstützungsstrukturen, Bratislava seine unternehmerische Dynamik.' },
        { n: '03', text: 'Keine Seite hat ein verlässliches Bild davon, wer 55 km entfernt was tut.' },
        { n: '04', text: 'Die Lücken, die Gründer:innen zuerst nennen: Investment Readiness und grenzüberschreitendes Know-how.' }
      ],
      themesH: 'Unsere Themen',
      themes: [{ text: 'Grenzüberschreitende Expansion' }, { text: 'Wirkungsmessung' }, { text: 'Finanzierung & Investment Readiness' }, { text: 'Städte & öffentliche Innovation' }, { text: 'Ökosystem-Mapping' }]
    },
    por: {
      hero: { eyebrow: 'Team & Forschung · Teilnehmende', h1: 'Die Ventures der Twin City.', sub: 'Jedes Venture, das den Twin City Accelerator durchläuft, wird hier stehen: was es tut, woher es kommt und wohin es will.' },
      empty: { label: 'Erste Kohorte in Vorbereitung', h2: 'Die erste Kohorte ist in Vorbereitung.', body: 'Wir wählen gerade die Ventures aus, die die erste grenzüberschreitende Kohorte des Twin City Accelerators bilden. Ihre Profile erscheinen hier, sobald sie starten.', cta1: 'So kommen Sie in die erste Kohorte', cta2: 'Dranbleiben', note: 'Bewerben können sich wirkungsorientierte Scale-ups, KMU und NGOs aus Wien und Bratislava.' },
      soon: 'Was Sie hier finden werden',
      g: { logo: 'Venture-Logo', name: 'Name des Ventures', meta: 'Sektor · Stadt · Phase', body: 'Eine Zeile dazu, was das Venture tut – Verb zuerst.', example: 'Beispieleintrag' },
      cta: { h2: 'Wollen Sie auf diese Seite?', b1: 'Für den Accelerator bewerben' }
    },
    ev: {
      hero: { eyebrow: 'Events', h1: 'Was in der Twin City läuft.', sub: 'Sessions, Meetups, Demo Days und Studienbesuche in Wien, Bratislava und online.' },
      f: { up: 'Kommend', past: 'Vergangen', vie: 'Wien', ba: B, on: 'Online', inPerson: 'Vor Ort', tags: 'Nach Format filtern', where: 'Nach Ort filtern', clear: 'Filter zurücksetzen' },
      types: { launch: 'Launch-Event', session: 'Online-Session', meetup: 'Meetup', demo: 'Demo Day', visit: 'Studienbesuch', round: 'Roundtable' },
      upH: 'Kommende Events',
      items: [
        { id: 'e0', typeKey: 'launch', locKey: 'ba', type: 'Launch-Event', loc: B, date: '22. Oktober 2026', title: 'Launch des Twin City Accelerator auf der Startup Party im The Spot', body: 'Wir starten den Twin City Accelerator offiziell auf der Startup Party im The Spot, \u201eA Little Startup Party Never Killed Nobody\u201c. Donnerstag ab 18:00 Uhr im The Spot, Bottova 2/A. Erfahren Sie, was auf Impact-Ventures in Wien und Bratislava zukommt, lernen Sie das Team und die Startup-Community kennen und bleiben Sie für die Musik. Motto: Gatsby-Glamour trifft Casino-Abend. Dresscode: ein bisschen Eleganz, ein bisschen Spiel. Wählen Sie bei der Anmeldung das kostenlose Ticket „Twin City Accelerator Guest“. Die Veranstalter bestätigen jede Anmeldung.', cta: 'Auf Luma anmelden', cover: 'assets/events/startup-party-the-spot.jpg', coverAlt: 'Plakat der Startup Party: A Little Party Never Killed Nobody, 22.10.2026, 18:00, The Spot', href: 'https://luma.com/m5ci9dts' },
        { id: 'e1', draft: true, typeKey: 'session', locKey: 'on', type: 'Online-Session', loc: 'Online', date: 'Termin folgt', title: 'Ein Impact-Venture für zwei Märkte aufbauen', body: 'Die erste offene Session: Was sich ändert, wenn Ihr Heimmarkt zwei Hauptstädte umfasst – und wie Sie herausfinden, ob es sich für Sie lohnt.', cta: 'Platz sichern' },
        { id: 'e2', draft: true, typeKey: 'meetup', locKey: 'vie', type: 'Meetup', loc: 'Wien', date: 'Termin folgt', title: 'Twin City Pulse: die Szene in Wien kennenlernen', body: 'Ein Abend mit Wiens Impact-Gründer:innen, Hubs und Investor:innen – und den Menschen aus Bratislava, die gekommen sind, um sie zu treffen.', cta: 'Platz sichern' },
        { id: 'e3', draft: true, typeKey: 'meetup', locKey: 'ba', type: 'Meetup', loc: B, date: 'Termin folgt', title: 'Twin City Pulse: die Szene in Bratislava kennenlernen', body: 'Derselbe Abend, andersherum.', cta: 'Platz sichern' },
        { id: 'e4', draft: true, typeKey: 'round', locKey: 'vie', type: 'Roundtable', loc: 'Wien', date: 'Termin folgt', title: 'Städte als Partner: Was kommunale Unternehmen von Impact-Ventures brauchen', body: 'Für Stadtabteilungen, kommunale Unternehmen und die Ventures, die mit ihnen pilotieren wollen.', cta: 'Einladung anfragen' }
      ],
      none: 'Noch keine Events für diese Filter.',
      past: { h2: 'Vergangene Events', body: 'Jedes Event bleibt nach dem Termin auf dieser Seite – mit Fotos, Aufzeichnung und dem, was dabei herausgekommen ist.', ghost: 'Rückblick · demnächst', none: 'Noch keine vergangenen Events. Rückblicke erscheinen hier nach unseren ersten Events.' },
      newsH: 'News',
      news: [
        { date: 'Oktober 2025', tag: 'Projekt', title: 'TWICIIC startet: sechs Partner, zwei Städte, ein Plan', body: 'Das Konsortium hat sich zum ersten Mal getroffen, um den Plan für drei Jahre Verbindung zwischen Wien und Bratislava festzulegen.' },
        { date: '2026', tag: 'Accelerator', title: 'Der Twin City Accelerator: So funktioniert das erste Jahr', body: 'Zuerst offene Sessions, dann die Masterclass, Scale-up-Support für die Ventures mit dem stärksten Case.' },
        { date: '2026', tag: 'Forschung', title: 'Die Kartierung beider Ökosysteme hat begonnen', body: 'Unsere Forscher:innen interviewen Hubs, Investor:innen und Gründer:innen auf beiden Seiten der Grenze. Das fragen wir.' }
      ],
      more: 'Weiterlesen',
      nl: { h2: 'Keinen Termin verpassen.', body: 'Eine E-Mail pro Monat mit allen kommenden Sessions und Neuigkeiten aus dem Projekt.', cta: 'Abonnieren' }
    },
    ft: {
      about: 'TWICIIC – Twin City Impact Innovation Champion – verbindet die Innovationsökosysteme von Wien und Bratislava. Mit einem grenzüberschreitenden Accelerator, Ökosystem-Events und Städtepartnerschaften hilft es wirkungsorientierten Scale-ups, KMU und NGOs, in beiden Märkten zu wachsen.',
      navH: 'Navigation', touchH: 'In Kontakt bleiben', touchBody: 'Newsletter, einmal im Monat.', touchCta: 'Abonnieren', li: 'LinkedIn', contact: 'Kontakt',
      liEyebrow: 'Folgen Sie uns auf LinkedIn', liText: 'Bleiben Sie auf dem Laufenden – offene Calls, Workshops und Neuigkeiten aus der Kohorte, regelmäßig gepostet.',
      partners: 'Partner', fundH: 'Förderung', fundLine: 'Kofinanziert von der Europäischen Union', fundProg: 'Interreg Slowakei–Österreich 2021–2027', fundRegion: 'Slowakei – Österreich',
      fundLong: 'Dieses Projekt wird vom Programm Interreg Slowakei–Österreich 2021–2027 aus dem Europäischen Fonds für regionale Entwicklung (EFRE) kofinanziert.',
      copyright: '© 2026 TWICIIC. Alle Rechte vorbehalten.',
      cookie: { label: 'Cookie-Einwilligung', text: 'Mit Ihrer Zustimmung verwenden wir Cookies von Google Analytics, um zu verstehen, wie die Website genutzt wird, und teilen diese Daten mit Google, auch für Werbezwecke. Sie können Ihre Wahl jederzeit unter „Cookie-Einstellungen“ ändern.', more: 'Datenschutz', accept: 'Alle akzeptieren', reject: 'Nur notwendige', settings: 'Cookie-Einstellungen' },
      legal: [{ text: 'Datenschutz', href: '#privacy' }, { text: 'Impressum', href: '#imprint' }, { text: 'Barrierefreiheit', href: '#accessibility' }]
    }
  };

  var sk = {
    meta: { locale: 'sk-SK', code: 'sk', langName: 'Slovenčina', skip: 'Preskočiť na obsah', months: 'mesiacov' },
    nav: {
      programme: 'Domov', accelerator: 'Akcelerátor', about: 'Tím a výskum', partners: 'Partneri', research: 'Výskum', portfolio: 'Účastníci', events: 'Podujatia',
      cta: 'Pridajte sa k sieti', menu: 'Menu', close: 'Zavrieť', langLabel: 'Jazyk', aboutLabel: 'Tím a výskum',
      accLabel: 'Twin City Accelerator', accOverview: 'Twin City Accelerator', readiness: 'Učte sa a overte si pripravenosť na škálovanie',
      accDesc: { overview: 'Program, časový plán a prihlásenie', readiness: 'Bezplatný obsah a 2-minútový test' },
      aboutDesc: { partners: 'Šesť organizácií, dve mestá', research: 'Čo sa učíme', portfolio: 'Podniky, ktoré podporujeme' },
      sections: 'Sekcie'
    },
    home: {
      hero: {
        eyebrow: 'Twin City Impact Innovation Champion · Viedeň – Bratislava',
        h1: 'Posuňte svoj impaktový biznis za hranice jedného mesta.',
        sub: 'TWICIIC robí z Viedne a Bratislavy jeden domáci trh pre impaktovo orientované scale-upy, MSP a neziskové organizácie.',
        cta1: 'Objavte akcelerátor', cta2: 'Pridajte sa k sieti',
        note: 'Projekt Interreg Slovensko–Rakúsko. Zapojenie je bezplatné a otvorené na oboch stranách hranice.',
        media: 'Hlavný vizuál: dve mestá vzdialené 55 km', km: 'km', vie: 'Viedeň', ba: B
      },
      cities: {
        eyebrow: 'Dve hlavné mestá · 55 kilometrov',
        h2: 'Najbližšie hlavné mestá v Európe. Dva ekosystémy, ktoré si navzájom môžu veľa dať.',
        lead: 'Viedeň a Bratislava sú si bližšie než ktorékoľvek iné dve hlavné mestá na kontinente – a ich impaktové inovačné scény sú pripravené zblížiť sa tiež.',
        vie: { title: 'Viedeň', body: 'Etablovaná impaktová scéna so silnými podpornými štruktúrami, investormi a medzinárodnými sieťami.' },
        ba: { title: B, body: 'Dynamická, podnikavá scéna s rýchlo rastúcimi podnikmi, silnými talentmi a chuťou tvoriť.' },
        change: { title: 'Spolu sme silnejší.', body: 'Zakladatelia na oboch stranách majú rovnaké potreby: cezhraničné know-how, investičnú pripravenosť a jednoducho prehľad o tom, kto čo robí hodinu cesty od nich. Keď ich riešime spoločne, z dvoch susedných trhov vznikne jeden región s tromi miliónmi ľudí.' },
        stats: [
          { kind: 'num', n: 55, pre: '', post: ' km', display: '55 km', l: 'medzi oboma hlavnými mestami' },
          { kind: 'num', n: 3, pre: '~', post: ' milióny', display: '~3 milióny', l: 'ľudí v jednom regióne' },
          { kind: 'arrow', a: '2', b: '1', display: '2 → 1', l: 'ekosystémy sa stávajú jednou sieťou' },
          { kind: 'range', a: '2025', n: 2028, from: 2025, display: '2025 – 2028', l: 'tri roky na ich prepojenie' }
        ],
        media: 'Mapa: koridor Viedeň – Bratislava', danube: 'Dunaj', km: '55 km'
      },
      pulse: {
        eyebrow: 'Twin City Pulse', h2: 'Buďte v centre diania.',
        body: 'TWICIIC je tu na to, aby prepojil dva ekosystémy a všetkých, ktorí ich tvoria. Pridajte sa k sieti a staňte sa súčasťou Twin City Pulse – rastúcej komunity ľudí, ktorí vo Viedni a v Bratislave prinášajú pozitívnu zmenu.',
        cta: 'Pridajte sa k sieti', sub: 'Zadarmo. Otvorené pre obe mestá. Pokračuje aj po roku 2028.'
      },
      sw: {
        h: 'V akom ste štádiu?',
        items: [
          { n: '01', title: 'Budujem podnik', body: 'Impaktovo orientovaný scale-up, MSP alebo nezisková organizácia pripravená rásť na druhom trhu.', cta: 'Objavte akcelerátor', href: '#accelerator' },
          { n: '02', title: 'Pracujem v ekosystéme alebo pre mesto', body: 'Hub, univerzita, investor, mestský odbor alebo mestský podnik.', cta: 'Naši partneri', href: '#partners' },
          { n: '03', title: 'Chcem porozumieť obom trhom', body: 'Výskum a zistenia z oboch strán hranice.', cta: 'Prečítajte si výskum', href: '#research' }
        ]
      },
      acc: {
        eyebrow: 'Twin City Accelerator', h2: 'Jeden program. Dve mestá. Tri spôsoby, ako sa zapojiť.',
        what: { title: 'Čo to je', body: 'Bezplatný cezhraničný akcelerátor pre impaktové podniky, ktoré chcú pôsobiť vo Viedni aj v Bratislave – od prvej zvedavosti po prvých zákazníkov na druhej strane.' },
        get: { title: 'Akú podporu získate', body: 'Praktické biznis tréningy, zmiešaná kohorta Viedeň–Bratislava, mentoring od ľudí, ktorí už škálovali, a konkrétna podpora pri prvých krokoch na druhý trh.' },
        who: { title: 'Kto ho realizuje', body: 'Program vedú CB ESPRI, Relevant Ventures a Impact Slovakia s podporou Vienna Business Agency, hlavného mesta Bratislavy a ZSI.' },
        forLabel: 'Pre koho',
        stages: [
          { n: '01', title: 'Začnite tu', forText: 'Pre každého, kto chce spoznať ekosystém Twin City', body: 'Otvorené online stretnutia o budovaní a raste impaktových podnikov cez hranicu. Bez prihlášky, bez poplatkov. Príďte raz alebo pravidelne.', cta: 'Pozrite si nadchádzajúce stretnutia', href: '#events' },
          { n: '02', title: 'Cezhraničný masterclass', forText: 'Pre podniky s vážnym plánom vstúpiť do druhého mesta', body: 'Jedenásť týždňov od apríla do júna 2027, jedna zmiešaná kohorta 10 firiem z Viedne a Bratislavy, postavená okolo týždňa na ViennaUP. Jadro akcelerátora: odchádzate s konkrétnym plánom expanzie a partnermi za hranicou.', cta: 'Ako funguje masterclass', href: '#accelerator' },
          { n: '03', title: 'Podpora pre scale-upy', forText: 'Pre vybrané podniky z masterclassu', body: 'Až šesť mesiacov individuálnej podpory pri realizácii prvých cezhraničných krokov: pilotné projekty, partneri, zákazníci a financovanie.', cta: 'Ako prebieha výber', href: '#support' }
        ],
        cta1: 'Prihláste sa do akcelerátora', cta2: 'Sme pripravení škálovať? 2-minútový test'
      },
      events: {
        eyebrow: 'Podujatia', h2: 'Zistite, čo sa chystá.',
        lead: 'Online stretnutia, meetupy, Demo Days a študijné návštevy v oboch mestách. Väčšina je zadarmo. Príďte a zoznámte sa s ľuďmi, s ktorými budete spolupracovať.',
        all: 'Všetky podujatia'
      },
      team: {
        eyebrow: 'Kto za tým stojí', h2: 'Spoznajte jedinečné partnerské konzorcium, ktoré stojí za TWICIIC.',
        body: 'Šesť organizácií, dve mestá, jeden tím: výskumné centrum, dve mestské agentúry, venture štúdio, prevádzkovateľ akcelerátora a impaktová sieť. Zoznámte sa s ľuďmi, ktorí vedú program, výskum a sieť.',
        cta1: 'Spoznajte partnerov', cta2: 'Objavte náš tím', media: 'Partnerské konzorcium TWICIIC na stretnutí v Bratislave, jún 2026.'
      },
      nl: { h2: 'Zostaňte v obraze.', body: 'Jeden e-mail mesačne: nové stretnutia, otvorené výzvy a to, čo sa učíme. Bez šumu.', ph: 'vas@email.com', cta: 'Prihlásiť sa na odber', done: 'Už len krok – potvrďte, prosím, odber vo svojej e-mailovej schránke.', err: 'Niečo sa pokazilo. Skúste to, prosím, o chvíľu znova.', sending: 'Odosielam…', consent: 'Prihlásením súhlasíte so zasielaním newslettera TWICIIC. Odhlásiť sa môžete kedykoľvek.', privacy: 'Ochrana osobných údajov', label: 'E-mailová adresa', namePh: 'Vaše meno', orgPh: 'Firma / organizácia' }
    },
    par: {
      hero: { eyebrow: 'Tím a výskum · Partneri', h1: 'Šesť partnerov. Dve mestá. Jeden tím.', sub: 'TWICIIC vedie šesť organizácií z Viedne a Bratislavy, ktoré spájajú svoje vzájomne sa dopĺňajúce silné stránky z oboch strán hranice.' },
      list: [
        { name: 'ZSI – Centrum pre sociálne inovácie', city: 'Viedeň', side: 'vie', alt: 'l', role: 'Vedúci partner', body: 'Koordinuje projekt a vedie výskum, ktorý mapuje oba ekosystémy.', logo: 'assets/partners/zsi-c.png' },
        { name: 'Hlavné mesto SR Bratislava', city: B, side: 'ba', alt: 'r', role: 'Mestský partner, Slovensko', body: 'Otvára mesto a jeho mestské podniky pilotným projektom, vzájomnému učeniu a sieti.', logo: 'assets/partners/bratislava-c.png' },
        { name: 'Vienna Business Agency', city: 'Viedeň', side: 'vie', alt: 'l', role: 'Vedenie ekosystémových sietí', body: 'Posilňuje a propaguje Viedeň ako podnikateľskú lokalitu a vedie ekosystémové siete: meetupy, študijné návštevy a spoluprácu oboch miest.', logo: 'assets/partners/vienna-business-agency-c.png' },
        { name: 'Relevant Ventures', city: 'Viedeň', side: 'vie', alt: 'r', role: 'Komunikácia a podnikateľská podpora', body: 'Poskytuje podnikateľskú podporu v akcelerátore a vedie komunikáciu projektu.', logo: 'assets/partners/relevant.svg' },
        { name: 'CB ESPRI', city: B, side: 'ba', alt: 'l', role: 'Impaktový investičný fond', body: 'CB ESPRI je správcovská spoločnosť, ktorá spravuje investičné fondy. Spája finančný výnos s pozitívnym sociálnym dopadom. Jej hlavný fond podporuje investície s merateľným sociálnym dopadom na Slovensku.', logo: 'assets/partners/cb-espri.svg' },
        { name: 'Impact Slovakia', city: B, side: 'ba', alt: 'r', role: 'Vyhľadávanie a podpora podnikov, Slovensko', body: 'Vyhľadáva a podporuje slovenské podniky a prepája program so slovenskou impaktovou scénou.', logo: 'assets/partners/impact-slovakia-c.png' }
      ],
      link: { web: 'Web', li: 'LinkedIn' },
      team: {
        eyebrow: 'Tím', h2: 'Ľudia, ktorí stoja za TWICIIC.', body: 'Sedemnásť ľudí zo šiestich organizácií vo Viedni a v Bratislave: výskumníci, mestské agentúry, investori a venture builderi, ktorí program realizujú spoločne.',
        caption: 'Partnerské konzorcium TWICIIC na stretnutí v Bratislave, jún 2026.', li: 'Zobraziť profil na LinkedIn',
        groups: [
          { name: 'Program', members: [{ name: 'Meno', role: 'Vedenie programu', org: 'CB ESPRI · Bratislava' }, { name: 'Meno', role: 'Podnikateľská podpora', org: 'Relevant Ventures · Viedeň' }] },
          { name: 'Výskum', members: [{ name: 'Meno', role: 'Vedenie výskumu', org: 'ZSI · Viedeň' }, { name: 'Meno', role: 'Výskum', org: 'ZSI · Viedeň' }] },
          { name: 'Ekosystém a mestá', members: [{ name: 'Meno', role: 'Ekosystémové siete', org: 'Vienna Business Agency · Viedeň' }, { name: 'Meno', role: 'Spolupráca miest', org: 'Hlavné mesto Bratislava · Bratislava' }] },
          { name: 'Komunikácia', members: [{ name: 'Meno', role: 'Komunikácia', org: 'Relevant Ventures · Viedeň' }, { name: 'Meno', role: 'Vyhľadávanie podnikov', org: 'Impact Slovakia · Bratislava' }] }
        ]
      },
      fund: {
        eyebrow: 'Ako je TWICIIC financovaný', h2: 'Spolufinancované Európskou úniou.',
        body: 'Tento projekt je spolufinancovaný programom Interreg Slovensko–Rakúsko 2021–2027 z Európskeho fondu regionálneho rozvoja (EFRR).',
        rows: [
          { k: 'Program', v: 'Interreg Slovensko–Rakúsko 2021–2027', sub: '' },
          { k: 'Fond', v: 'Európsky fond regionálneho rozvoja (EFRR)', sub: '' },
          { k: 'ID projektu', v: 'NFP404101C337', sub: '' },
          { k: 'Trvanie', v: 'október 2025 – september 2028', sub: '36 mesiacov', n: 36, pre: '', post: ' mesiacov' },
          { k: 'Rozpočet', v: '1 574 443 €', sub: 'z toho 1 259 554 € z EFRR · 80 %', n: 1574443, pre: '', post: ' €' }
        ],
        unit: 'Značka programu Interreg Slovensko–Rakúsko'
      },
      cta: { h2: 'Chcete s nami spolupracovať?', body: 'Spoluorganizujte stretnutie, odporučte podnik, spustite pilotný projekt s mestom alebo sa pridajte k sieti.', b2: 'Pridajte sa k sieti' }
    },
    res: {
      hero: { eyebrow: 'Výskum', h1: 'Čo zisťujeme o Twin City.', sub: 'Skôr než akcelerujeme, mapujeme. Náš výskumný tím dokumentuje oba ekosystémy, aby zakladatelia, mestá a partneri vychádzali z rovnakých poznatkov.' },
      prog: { eyebrow: 'Vzniká', h2: 'Dve správy, obe v príprave.' },
      lbl: { method: 'Ako postupujeme', when: 'Kedy' },
      reports: [
        { n: '01', side: 'vie', type: 'Správa · v príprave', title: 'Mapovanie impaktového ekosystému Twin City', body: 'Kto podporuje impaktové podniky vo Viedni a v Bratislave a ako dobre sa obe strany poznajú: huby, investori, univerzity, podporné programy, mestskí aktéri.', method: 'Desk research, rozhovory s aktérmi ekosystému na oboch stranách, fokusové skupiny v každom meste.', when: 'Prvé zistenia v roku 2026', cta: 'Upozorniť ma na zverejnenie' },
        { n: '02', side: 'ba', type: 'Správa · v príprave', title: 'Čo impaktoví zakladatelia potrebujú, aby prekročili hranicu', body: 'Analýza potrieb so zakladateľmi, MSP a neziskovými organizáciami: investičná pripravenosť, cezhraničné know-how, právo a vstup na trh, meranie impaktu.', method: 'Rozhovory so zakladateľmi a validačný workshop so zakladateľmi a aktérmi ekosystému. Výsledky priamo formujú, čo akcelerátor učí.', when: 'Zistenia v roku 2026', cta: 'Zapojte sa do výskumu' }
      ],
      know: { eyebrow: 'Čo už vieme', h2: 'Štyri veci, ktoré ukázali už prvé rozhovory.' },
      k: [
        { n: '01', text: 'Obe mestá majú aktívne impaktové scény, ktoré sa cez hranicu ešte len začínajú prepájať.' },
        { n: '02', text: 'Každá strana prináša vlastné silné stránky: Viedeň etablované podporné štruktúry, Bratislava podnikateľskú dynamiku.' },
        { n: '03', text: 'Ani jedna strana nemá spoľahlivý prehľad o tom, kto čo robí 55 km od nich.' },
        { n: '04', text: 'Medzery, ktoré zakladatelia menujú ako prvé: investičná pripravenosť a cezhraničné know-how.' }
      ],
      themesH: 'Témy, ktorým sa venujeme',
      themes: [{ text: 'Cezhraničná expanzia' }, { text: 'Meranie impaktu' }, { text: 'Financie a investičná pripravenosť' }, { text: 'Mestá a verejné inovácie' }, { text: 'Mapovanie ekosystému' }]
    },
    por: {
      hero: { eyebrow: 'Tím a výskum · Účastníci', h1: 'Podniky Twin City.', sub: 'Nájdete tu každý podnik, ktorý prejde programom Twin City Accelerator: čo robí, odkiaľ je a kam smeruje.' },
      empty: { label: 'Prvá kohorta sa pripravuje', h2: 'Prvá kohorta sa pripravuje.', body: 'Vyberáme podniky, ktoré vytvoria prvú cezhraničnú kohortu Twin City Accelerator. Ich profily tu zverejníme hneď, ako odštartujú.', cta1: 'Ako sa dostať do prvej kohorty', cta2: 'Zostať v kontakte', note: 'Prihlásiť sa môžu impaktovo orientované scale-upy, MSP a neziskové organizácie z Viedne a Bratislavy.' },
      soon: 'Čo tu nájdete',
      g: { logo: 'Logo podniku', name: 'Názov podniku', meta: 'Sektor · Mesto · Fáza', body: 'Jedna veta o tom, čo podnik robí – sloveso na začiatku.', example: 'Ukážkový záznam' },
      cta: { h2: 'Chcete byť na tejto stránke?', b1: 'Prihláste sa do akcelerátora' }
    },
    ev: {
      hero: { eyebrow: 'Podujatia', h1: 'Čo sa deje v Twin City.', sub: 'Stretnutia, meetupy, Demo Days a študijné návštevy vo Viedni, v Bratislave a online.' },
      f: { up: 'Nadchádzajúce', past: 'Minulé', vie: 'Viedeň', ba: B, on: 'Online', inPerson: 'Prezenčne', tags: 'Filtrovať podľa typu', where: 'Filtrovať podľa miesta', clear: 'Zrušiť filtre' },
      types: { launch: 'Launch event', session: 'Online stretnutie', meetup: 'Meetup', demo: 'Demo Day', visit: 'Študijná návšteva', round: 'Okrúhly stôl' },
      upH: 'Nadchádzajúce',
      items: [
        { id: 'e0', typeKey: 'launch', locKey: 'ba', type: 'Launch event', loc: B, date: '22. októbra 2026', title: 'Spúšťame Twin City Accelerator na Startup Party v The Spot', body: 'Twin City Accelerator oficiálne spúšťame na Startup Party v The Spot, \u201eA Little Startup Party Never Killed Nobody\u201c. Vo štvrtok od 18:00 v The Spot na Bottovej 2/A. Príďte si vypočuť, čo čaká impaktové podniky vo Viedni a v Bratislave, spoznajte náš tím a startupovú komunitu a zostaňte aj na hudbu. Téma: Gatsbyho glamour v kasínovom štýle. Dress code: trochu elegancie, trochu hry. Pri registrácii si vyberte bezplatnú vstupenku „Twin City Accelerator Guest“. Každú registráciu schvaľujú organizátori.', cta: 'Registrovať sa na Luma', cover: 'assets/events/startup-party-the-spot.jpg', coverAlt: 'Plagát Startup Party: A Little Party Never Killed Nobody, 22.10.2026, 18:00, The Spot', href: 'https://luma.com/m5ci9dts' },
        { id: 'e1', draft: true, typeKey: 'session', locKey: 'on', type: 'Online stretnutie', loc: 'Online', date: 'Termín upresníme', title: 'Ako budovať impaktový podnik pre dva trhy', body: 'Prvé otvorené stretnutie: čo sa zmení, keď sa váš domáci trh rozšíri na dve hlavné mestá, a ako zistiť, či sa vám to oplatí.', cta: 'Rezervovať miesto' },
        { id: 'e2', draft: true, typeKey: 'meetup', locKey: 'vie', type: 'Meetup', loc: 'Viedeň', date: 'Termín upresníme', title: 'Twin City Pulse: spoznajte viedenskú scénu', body: 'Večer s viedenskými impaktovými zakladateľmi, hubmi a investormi – a s ľuďmi z Bratislavy, ktorí ich prišli stretnúť.', cta: 'Rezervovať miesto' },
        { id: 'e3', draft: true, typeKey: 'meetup', locKey: 'ba', type: 'Meetup', loc: B, date: 'Termín upresníme', title: 'Twin City Pulse: spoznajte bratislavskú scénu', body: 'Ten istý večer, len naopak.', cta: 'Rezervovať miesto' },
        { id: 'e4', draft: true, typeKey: 'round', locKey: 'vie', type: 'Okrúhly stôl', loc: 'Viedeň', date: 'Termín upresníme', title: 'Mestá ako partneri: čo mestské podniky potrebujú od impaktových podnikov', body: 'Pre mestské odbory, mestské podniky a podniky, ktoré s nimi chcú pilotovať.', cta: 'Požiadať o pozvánku' }
      ],
      none: 'Týmto filtrom zatiaľ nezodpovedá žiadne podujatie.',
      past: { h2: 'Minulé podujatia', body: 'Každé podujatie tu zostáva aj po skončení – s fotkami, nahrávkou a tým, čo z neho vzišlo.', ghost: 'Zhrnutie · už čoskoro', none: 'Zatiaľ žiadne minulé podujatia. Zhrnutia sa tu objavia po našich prvých podujatiach.' },
      newsH: 'Novinky',
      news: [
        { date: 'október 2025', tag: 'Projekt', title: 'TWICIIC štartuje: šesť partnerov, dve mestá, jeden plán', body: 'Konzorcium sa stretlo po prvý raz, aby nastavilo plán na tri roky prepájania Viedne a Bratislavy.' },
        { date: '2026', tag: 'Akcelerátor', title: 'Twin City Accelerator: ako funguje prvý rok', body: 'Najprv otvorené stretnutia, potom masterclass a podpora pre scale-upy s najpresvedčivejším plánom.' },
        { date: '2026', tag: 'Výskum', title: 'Mapovanie oboch ekosystémov sa začalo', body: 'Naši výskumníci vedú rozhovory s hubmi, investormi a zakladateľmi na oboch stranách hranice. Toto sa pýtame.' }
      ],
      more: 'Čítať ďalej',
      nl: { h2: 'Nezmeškajte žiadny termín.', body: 'Jeden e-mail mesačne so všetkými nadchádzajúcimi stretnutiami a najnovšími správami.', cta: 'Prihlásiť sa na odber' }
    },
    ft: {
      about: 'TWICIIC – Twin City Impact Innovation Champion – prepája inovačné ekosystémy Viedne a Bratislavy. Prostredníctvom cezhraničného akcelerátora, ekosystémových podujatí a partnerstiev miest pomáha impaktovo orientovaným scale-upom, MSP a neziskovým organizáciám rásť na oboch trhoch.',
      navH: 'Navigácia', touchH: 'Zostaňme v kontakte', touchBody: 'Newsletter, raz mesačne.', touchCta: 'Prihlásiť sa na odber', li: 'LinkedIn', contact: 'Kontaktujte nás',
      liEyebrow: 'Sledujte nás na LinkedIn', liText: 'Otvorené výzvy, workshopy a novinky z kohorty pravidelne zverejňujeme na LinkedIn.',
      partners: 'Partneri', fundH: 'Financovanie', fundLine: 'Spolufinancované Európskou úniou', fundProg: 'Interreg Slovensko–Rakúsko 2021–2027', fundRegion: 'Slovensko – Rakúsko',
      fundLong: 'Tento projekt je spolufinancovaný programom Interreg Slovensko–Rakúsko 2021–2027 z Európskeho fondu regionálneho rozvoja (EFRR).',
      copyright: '© 2026 TWICIIC. Všetky práva vyhradené.',
      cookie: { label: 'Súhlas s cookies', text: 'S vaším súhlasom používame cookies služby Google Analytics, aby sme pochopili, ako sa stránka používa, a tieto údaje zdieľame so spoločnosťou Google, a to aj na reklamné účely. Voľbu môžete kedykoľvek zmeniť v „Nastavenia cookies“.', more: 'Ochrana osobných údajov', accept: 'Prijať všetky', reject: 'Len nevyhnutné', settings: 'Nastavenia cookies' },
      legal: [{ text: 'Ochrana osobných údajov', href: '#privacy' }, { text: 'Impresum', href: '#imprint' }, { text: 'Prístupnosť', href: '#accessibility' }]
    }
  };

  /* ---- Twin City Accelerator page copy (unchanged from the Accelerator design) ---- */
  var acc = {
    en: {
      nav: { home: 'Home', programme: 'Programme', readiness: 'Readiness check', partners: 'Partners', apply: 'Apply', menu: 'Menu', close: 'Close' },
      hero: { eyebrow: 'TWICIIC · Interreg Slovakia–Austria', title: 'Twin City Accelerator', sub: 'Cross-border growth programme for impact ventures scaling between Slovakia and Austria.', body: 'An 11-week programme for impact scale-ups ready to expand between Bratislava and Vienna. One cohort of 10 companies (5 from Slovakia, 5 from Austria), built around a week at ViennaUP in May.', apps: 'Applications', appsDate: '18 January – 26 February 2027', readiness: 'Check your readiness to scale', starts: 'Programme starts', dateTbc: 'Date to be announced', startDate: '12 April 2027', cities: 'Vienna ↔ Bratislava', months: '11 weeks', vienna: 'Vienna' },
      fit: {
        yesTitle: 'This programme is for organisations that:',
        yes: [{ text: 'are impact-oriented,' }, { text: 'are already commercially active, ideally with recurring revenue,' }, { text: 'see a second market (SK or AT) as a realistic step within 12 months,' }, { text: 'can work in English,' }, { text: 'are open to working with a twin company from across the border,' }, { text: 'can attend all programme blocks, including the full week in Vienna in May.' }],
        noTitle: 'It may not be the right fit yet if:',
        no: [{ text: 'you are still only at idea stage,' }, { text: 'you are not yet commercially active or have no recurring revenue,' }, { text: 'you do not have a clear impact ambition,' }, { text: 'you are not considering cross-border growth,' }, { text: 'you cannot attend the full ViennaUP week (10–14 May 2027),' }, { text: 'you cannot commit time to workshops and follow-up work.' }]
      },
      programme: {
        eyebrow: 'Programme overview', title: 'Your path through the programme',
        c1: { label: 'Stage 1 · Free & online', title: 'Check your readiness to scale', short: 'Free online content, case studies, readiness check', long: 'Introductory content, founder stories and a self-assessment tool to help you understand whether the accelerator is the right fit.', button: 'Am I ready to scale?' },
        c2: { label: 'Stage 2 · Core programme', title: 'Accelerate', short: '11-week cohort programme (April–June 2027) built around ViennaUP, with in-person sessions, online modules and Demo Day in Vienna', long: 'A structured cohort programme focused on the cross-border decision, investability, go-to-market, impact and company setup across the border.' },
        c3: { label: 'Stage 3 · Follow-on support', title: 'Receive additional support', short: 'Up to 6 months of follow-on support for selected ventures ready for market entry, investment or partnerships', long: 'Bespoke support for selected accelerator graduates and partner-nominated ventures, including expert coaching, introductions and individual action plans.', button: 'Get in touch' }
      },
      benefits: {
        eyebrow: 'What you get', title: 'What you get by applying', lead: 'By joining the accelerator, you can work on:',
        items: [{ n: '01', text: 'Cross-border growth strategy: should you cross the Danube?' }, { n: '02', text: 'Investor-ready cross-border pitch deck and data room' }, { n: '03', text: 'A week at ViennaUP: coffeehouse sessions with VCs, corporates and institutions' }, { n: '04', text: 'Demo Day within ViennaUP' }, { n: '05', text: 'Go-to-market plan for Slovakia or Austria, incl. selling to cities and public buyers' }, { n: '06', text: 'Impact measurement' }, { n: '07', text: 'Company setup, legal, tax and employment rules across the border' }, { n: '08', text: 'A twin company from across the border to work through market entry together' }, { n: '09', text: 'Senior mentors and sector experts from Vienna and Bratislava' }],
        caption: 'Cohort workshops take place in both cities.'
      },
      timeline: {
        eyebrow: 'Timeline', title: 'Accelerator programme timeline', notSure: 'Not sure yet?', consult: 'Book a free consultation', lead: 'The accelerator runs for 11 weeks, from April to June 2027. It is built around ViennaUP in May: the programme prepares you for a week in Vienna with investors, city representatives and the Austrian ecosystem, and then helps you turn it into concrete cross-border traction.',
        i1: { title: 'Applications & selection', meta: '18 Jan – 26 Feb · Results 5 Mar', desc: 'Online application form, short intake calls, twin pairing proposed' }, i2: { title: 'Module 1 – Should You Cross the Danube?', meta: '12–16 Apr · In person · Bratislava', desc: 'Opening: cohort kick-off, founder story, case study, meet your twin and mentor, your ViennaUP plan' }, i3: { title: 'Module 2 – Investability', meta: '26 Apr – 7 May · Online', desc: 'Cross-border pitch and data room, investor meeting prep for ViennaUP' }, i4: { title: 'Module 3 – ViennaUP week', meta: '10–14 May · In person · Vienna', desc: 'Coffeehouse sessions with VCs, corporates and institutions, Demo Day, field visits' }, i5: { title: 'Module 4 – Go-to-market', meta: '18–28 May · Online', desc: 'ViennaUP follow-up, AT vs SK customers, selling to cities and public buyers' }, i6: { title: 'Module 5 – Impact', meta: '31 May – 11 Jun · Online', desc: 'Why and how to measure your impact' }, i7: { title: 'Module 6 – Setting Off Across the Danube', meta: '21–25 Jun · Bratislava / hybrid · TBC', desc: 'Closing: company setup, legal, tax and employment across the border, implementation plans' }
      },
      howto: {
        eyebrow: 'How to apply', title: 'Key dates for the 2027 cohort', consult: 'Book a free consultation',
        steps: [{ when: 'Oct – Nov 2026', title: 'Launch events', desc: '22 Oct, Bratislava (The Spot) · 4 Nov, Vienna (Invest Austria Conference)' }, { when: 'Now – Feb 2027', title: 'Free consultation', desc: 'Not sure yet? Book a free one-hour consultation with the programme team.' }, { when: '18 Jan – 26 Feb 2027', title: 'Applications open', desc: 'Apply through the online form. No other documents needed.' }, { when: '5 Mar 2027', title: 'Selection results', desc: 'Selected ventures are notified and paired with their twin.' }]
      },
      support: { eyebrow: 'Follow-on support', title: 'Take your growth to the next level', body: 'For selected high-potential ventures, the accelerator offers up to six months of tailored follow-on support focused on turning cross-border ambition into concrete next steps. Whether you are preparing for market entry, investor conversations or strategic partnerships, we work with you individually to define your next milestone and connect you with the right expertise. Ventures can express interest at the end of the accelerator or be nominated by a project partner.', ready: 'Ready to move further?' },
      partners: {
        eyebrow: 'Consortium', title: "Who's behind the accelerator?", lead: 'The accelerator is developed by CB ESPRI, Relevant Ventures and TWICIIC project partners, connecting the Bratislava and Vienna impact ecosystems.',
        list: [
          { name: 'CB ESPRI', logo: 'assets/partners/cb-espri.svg', role: 'Accelerator development', city: 'Bratislava', variant: 'bratislava' }, { name: 'Relevant Ventures', logo: 'assets/partners/relevant.svg', role: 'Accelerator development', city: 'Vienna', variant: 'vienna' }, { name: 'Capital City of Bratislava', logo: 'assets/partners/bratislava-c.png', role: 'TWICIIC project partner', city: 'Bratislava', variant: 'bratislava' }, { name: 'Vienna Business Agency', logo: 'assets/partners/vienna-business-agency-c.png', role: 'TWICIIC project partner', city: 'Vienna', variant: 'vienna' }, { name: 'Impact Slovakia', logo: 'assets/partners/impact-slovakia-c.png', role: 'TWICIIC project partner', city: 'Bratislava', variant: 'bratislava' }, { name: 'ZSI — Centre for Social Innovation', logo: 'assets/partners/zsi-c.png', role: 'TWICIIC project partner', city: 'Vienna', variant: 'vienna' }
        ]
      },
      cta: { title: 'Ready to scale across the border?' },
      interreg: { eyebrow: 'Funding', title: 'Co-funded by the European Union through Interreg Slovakia–Austria', p1: 'TWICIIC — Twin City Impact Innovation Champion is a cross-border project co-financed by the Interreg Slovakia–Austria 2021–2027 Programme from the European Regional Development Fund (ERDF), running from November 2025 to September 2028.', p2: 'The main goal of TWICIIC is to strengthen impact innovation capacities in the region and between the cities of public and private innovation drivers. The project accelerates purpose-driven scale-ups in the Vienna–Bratislava region — enterprises with an impact mission that have moved beyond the prototype stage, are already on the market and are actively pursuing cross-border growth. TWICIIC provides structured peer learning, access to cross-border investor networks, and a joint Accelerator programme connecting the impact innovation ecosystems of both cities.', projects: 'Interreg projects', photoAlt: 'European Parliament in Brussels with the flags of the EU member states', caption: 'Interreg Slovakia–Austria 2021–2027 · ERDF' }
    },
    de: {
      nav: { home: 'Start', programme: 'Programm', readiness: 'Readiness-Check', partners: 'Partner', apply: 'Bewerben', menu: 'Menü', close: 'Schließen' },
      hero: { eyebrow: 'TWICIIC · Interreg Slowakei–Österreich', title: 'Twin City Accelerator', sub: 'Grenzüberschreitendes Wachstumsprogramm für Impact-Ventures, die zwischen der Slowakei und Österreich skalieren.', body: 'Ein 11-wöchiges Programm für Impact-Scale-ups, die zwischen Bratislava und Wien expandieren wollen. Eine Kohorte mit 10 Unternehmen (5 aus der Slowakei, 5 aus Österreich), aufgebaut rund um eine Woche bei ViennaUP im Mai.', apps: 'Bewerbung', appsDate: '18. Jänner – 26. Februar 2027', readiness: 'Bereitschaft zur Skalierung prüfen', starts: 'Programmstart', dateTbc: 'Termin wird bekannt gegeben', startDate: '12. April 2027', cities: 'Wien ↔ Bratislava', months: '11 Wochen', vienna: 'Wien' },
      fit: {
        yesTitle: 'Dieses Programm ist für Organisationen, die:',
        yes: [{ text: 'wirkungsorientiert sind,' }, { text: 'bereits kommerziell aktiv sind, idealerweise mit wiederkehrenden Umsätzen,' }, { text: 'einen zweiten Markt (SK oder AT) innerhalb von 12 Monaten als realistischen Schritt sehen,' }, { text: 'auf Englisch arbeiten können,' }, { text: 'offen dafür sind, mit einem Twin-Unternehmen von der anderen Seite der Grenze zu arbeiten,' }, { text: 'an allen Programmblöcken teilnehmen können, einschließlich der ganzen Woche in Wien im Mai.' }],
        noTitle: 'Es passt vielleicht noch nicht, wenn:',
        no: [{ text: 'Sie noch in der Ideenphase sind,' }, { text: 'Sie noch nicht kommerziell aktiv sind oder keine wiederkehrenden Umsätze haben,' }, { text: 'Sie keine klare Impact-Ambition haben,' }, { text: 'Sie kein grenzüberschreitendes Wachstum anstreben,' }, { text: 'Sie nicht an der gesamten ViennaUP-Woche (10.–14. Mai 2027) teilnehmen können,' }, { text: 'Sie keine Zeit für Workshops und Nacharbeit einplanen können.' }]
      },
      programme: {
        eyebrow: 'Programmüberblick', title: 'Ihr Weg durch das Programm',
        c1: { label: 'Phase 1 · Kostenlos & online', title: 'Bereitschaft zur Skalierung prüfen', short: 'Kostenlose Online-Inhalte, Fallstudien, Readiness-Check', long: 'Einführende Inhalte, Gründer:innen-Geschichten und ein Selbsttest, der zeigt, ob der Accelerator zu Ihnen passt.', button: 'Bin ich bereit zu skalieren?' },
        c2: { label: 'Phase 2 · Kernprogramm', title: 'Beschleunigen', short: '11-wöchiges Kohortenprogramm (April–Juni 2027) rund um ViennaUP, mit Präsenz-Sessions, Online-Modulen und Demo Day in Wien', long: 'Ein strukturiertes Kohortenprogramm mit Fokus auf die Entscheidung für den Schritt über die Grenze, Investierbarkeit, Go-to-Market, Impact und Unternehmensaufbau jenseits der Grenze.' },
        c3: { label: 'Phase 3 · Anschlussunterstützung', title: 'Zusätzliche Unterstützung erhalten', short: 'Bis zu 6 Monate Anschlussunterstützung für ausgewählte Ventures, die bereit für Markteintritt, Investment oder Partnerschaften sind', long: 'Maßgeschneiderte Unterstützung für ausgewählte Absolvent:innen des Accelerators und von Projektpartnern nominierte Ventures – mit Expert:innen-Coaching, Introductions und individuellen Aktionsplänen.', button: 'Kontakt aufnehmen' }
      },
      benefits: {
        eyebrow: 'Was Sie bekommen', title: 'Was Sie mit Ihrer Bewerbung gewinnen', lead: 'Im Accelerator arbeiten Sie an:',
        items: [{ n: '01', text: 'Grenzüberschreitende Wachstumsstrategie: Sollten Sie die Donau überqueren?' }, { n: '02', text: 'Investorenreifes grenzüberschreitendes Pitch Deck und Datenraum' }, { n: '03', text: 'Eine Woche bei ViennaUP: Kaffeehaus-Sessions mit VCs, Corporates und Institutionen' }, { n: '04', text: 'Demo Day im Rahmen von ViennaUP' }, { n: '05', text: 'Go-to-Market-Plan für die Slowakei oder Österreich, inkl. Verkauf an Städte und öffentliche Auftraggeber' }, { n: '06', text: 'Impact-Messung' }, { n: '07', text: 'Unternehmensgründung, Recht, Steuern und Arbeitsrecht über die Grenze hinweg' }, { n: '08', text: 'Ein Twin-Unternehmen von der anderen Seite der Grenze, mit dem Sie den Markteintritt gemeinsam erarbeiten' }, { n: '09', text: 'Erfahrene Mentor:innen und Branchenexpert:innen aus Wien und Bratislava' }],
        caption: 'Die Kohorten-Workshops finden in beiden Städten statt.'
      },
      timeline: {
        eyebrow: 'Zeitplan', title: 'Zeitplan des Accelerator-Programms', notSure: 'Noch unsicher?', consult: 'Kostenlose Beratung buchen', lead: 'Der Accelerator läuft 11 Wochen, von April bis Juni 2027, und ist rund um ViennaUP im Mai aufgebaut: Das Programm bereitet Sie auf eine Woche in Wien mit Investor:innen, Vertreter:innen der Stadt und dem österreichischen Ökosystem vor und hilft Ihnen danach, daraus konkrete grenzüberschreitende Traktion zu machen.',
        i1: { title: 'Bewerbung & Auswahl', meta: '18. Jän – 26. Feb · Ergebnisse 5. März', desc: 'Online-Bewerbungsformular, kurze Intake-Gespräche, Vorschlag für das Twin-Pairing' }, i2: { title: 'Modul 1 – Sollten Sie die Donau überqueren?', meta: '12.–16. Apr · Vor Ort · Bratislava', desc: 'Auftakt: Kohorten-Kick-off, Gründer:innen-Story, Fallstudie, Kennenlernen von Twin und Mentor:in, Ihr ViennaUP-Plan' }, i3: { title: 'Modul 2 – Investierbarkeit', meta: '26. Apr – 7. Mai · Online', desc: 'Grenzüberschreitender Pitch und Datenraum, Vorbereitung auf Investorengespräche bei ViennaUP' }, i4: { title: 'Modul 3 – ViennaUP-Woche', meta: '10.–14. Mai · Vor Ort · Wien', desc: 'Kaffeehaus-Sessions mit VCs, Corporates und Institutionen, Demo Day, Exkursionen' }, i5: { title: 'Modul 4 – Go-to-Market', meta: '18.–28. Mai · Online', desc: 'ViennaUP-Follow-up, Kund:innen in AT und SK im Vergleich, Verkauf an Städte und öffentliche Auftraggeber' }, i6: { title: 'Modul 5 – Impact', meta: '31. Mai – 11. Juni · Online', desc: 'Warum und wie Sie Ihren Impact messen' }, i7: { title: 'Modul 6 – Aufbruch über die Donau', meta: '21.–25. Juni · Bratislava / hybrid · tbc', desc: 'Abschluss: Unternehmensgründung, Recht, Steuern und Arbeitsrecht über die Grenze hinweg, Umsetzungspläne' }
      },
      howto: {
        eyebrow: 'Bewerbung', title: 'Wichtige Termine für die Kohorte 2027', consult: 'Kostenlose Beratung buchen',
        steps: [{ when: 'Okt – Nov 2026', title: 'Launch-Events', desc: '22. Okt, Bratislava (The Spot) · 4. Nov, Wien (Invest Austria Conference)' }, { when: 'Ab sofort – Feb 2027', title: 'Kostenlose Beratung', desc: 'Noch unsicher? Buchen Sie eine kostenlose einstündige Beratung mit dem Programmteam.' }, { when: '18. Jän – 26. Feb 2027', title: 'Bewerbungsphase', desc: 'Bewerben Sie sich über das Online-Formular. Weitere Unterlagen sind nicht nötig.' }, { when: '5. März 2027', title: 'Auswahlergebnisse', desc: 'Ausgewählte Ventures werden benachrichtigt und mit ihrem Twin zusammengebracht.' }]
      },
      support: { eyebrow: 'Anschlussunterstützung', title: 'Bringen Sie Ihr Wachstum auf die nächste Stufe', body: 'Für ausgewählte Ventures mit hohem Potenzial bietet der Accelerator bis zu sechs Monate maßgeschneiderte Anschlussunterstützung, die grenzüberschreitende Ambitionen in konkrete nächste Schritte übersetzt. Ob Markteintritt, Investorengespräche oder strategische Partnerschaften – wir arbeiten individuell mit Ihnen, definieren Ihren nächsten Meilenstein und verbinden Sie mit der passenden Expertise. Ventures können am Ende des Accelerators ihr Interesse bekunden oder von einem Projektpartner nominiert werden.', ready: 'Bereit für den nächsten Schritt?' },
      partners: {
        eyebrow: 'Konsortium', title: 'Wer steht hinter dem Accelerator?', lead: 'Der Accelerator wird von CB ESPRI, Relevant Ventures und den TWICIIC-Projektpartnern entwickelt und verbindet die Impact-Ökosysteme von Bratislava und Wien.',
        list: [
          { name: 'CB ESPRI', logo: 'assets/partners/cb-espri.svg', role: 'Accelerator-Entwicklung', city: 'Bratislava', variant: 'bratislava' }, { name: 'Relevant Ventures', logo: 'assets/partners/relevant.svg', role: 'Accelerator-Entwicklung', city: 'Wien', variant: 'vienna' }, { name: 'Hauptstadt Bratislava', logo: 'assets/partners/bratislava-c.png', role: 'TWICIIC-Projektpartner', city: 'Bratislava', variant: 'bratislava' }, { name: 'Vienna Business Agency', logo: 'assets/partners/vienna-business-agency-c.png', role: 'TWICIIC-Projektpartner', city: 'Wien', variant: 'vienna' }, { name: 'Impact Slovakia', logo: 'assets/partners/impact-slovakia-c.png', role: 'TWICIIC-Projektpartner', city: 'Bratislava', variant: 'bratislava' }, { name: 'ZSI — Zentrum für Soziale Innovation', logo: 'assets/partners/zsi-c.png', role: 'TWICIIC-Projektpartner', city: 'Wien', variant: 'vienna' }
        ]
      },
      cta: { title: 'Bereit, über die Grenze zu skalieren?' },
      interreg: { eyebrow: 'Förderung', title: 'Kofinanziert von der Europäischen Union über Interreg Slowakei–Österreich', p1: 'TWICIIC — Twin City Impact Innovation Champion ist ein grenzüberschreitendes Projekt, kofinanziert vom Programm Interreg Slowakei–Österreich 2021–2027 aus dem Europäischen Fonds für regionale Entwicklung (EFRE), mit einer Laufzeit von November 2025 bis September 2028.', p2: 'Hauptziel von TWICIIC ist es, die Impact-Innovationskapazitäten in der Region und zwischen den Städten – bei öffentlichen wie privaten Innovationsakteuren – zu stärken. Das Projekt beschleunigt zweckorientierte Scale-ups in der Region Wien–Bratislava: Unternehmen mit einer Impact-Mission, die die Prototypphase hinter sich haben, bereits am Markt sind und aktiv grenzüberschreitendes Wachstum verfolgen. TWICIIC bietet strukturiertes Peer-Learning, Zugang zu grenzüberschreitenden Investorennetzwerken und ein gemeinsames Accelerator-Programm, das die Impact-Innovationsökosysteme beider Städte verbindet.', projects: 'Interreg-Projekte', photoAlt: 'Das Europäische Parlament in Brüssel mit den Flaggen der EU-Mitgliedstaaten', caption: 'Interreg Slowakei–Österreich 2021–2027 · EFRE' }
    },
    sk: {
      nav: { home: 'Domov', programme: 'Program', readiness: 'Test pripravenosti', partners: 'Partneri', apply: 'Prihlásiť sa', menu: 'Menu', close: 'Zavrieť' },
      hero: { eyebrow: 'TWICIIC · Interreg Slovensko–Rakúsko', title: 'Twin City Accelerator', sub: 'Cezhraničný rastový program pre impaktové podniky, ktoré rastú medzi Slovenskom a Rakúskom.', body: '11-týždňový program pre impaktové scale-upy pripravené expandovať medzi Bratislavou a Viedňou. Jedna kohorta 10 firiem (5 zo Slovenska, 5 z Rakúska), postavená okolo týždňa na ViennaUP v máji.', apps: 'Prihlášky', appsDate: '18. januára – 26. februára 2027', readiness: 'Overte si pripravenosť na škálovanie', starts: 'Začiatok programu', dateTbc: 'Termín bude oznámený', startDate: '12. apríla 2027', cities: 'Viedeň ↔ Bratislava', months: '11 týždňov', vienna: 'Viedeň' },
      fit: {
        yesTitle: 'Tento program je pre organizácie, ktoré:',
        yes: [{ text: 'sú impaktovo orientované,' }, { text: 'sú už komerčne aktívne, ideálne s opakovanými príjmami,' }, { text: 'vidia druhý trh (SK alebo AT) ako realistický krok v horizonte 12 mesiacov,' }, { text: 'vedia pracovať v angličtine,' }, { text: 'sú otvorené spolupráci s partnerskou (twin) firmou spoza hranice,' }, { text: 'sa môžu zúčastniť všetkých blokov programu vrátane celého týždňa vo Viedni v máji.' }],
        noTitle: 'Možno to ešte nie je to pravé, ak:',
        no: [{ text: 'ste ešte len vo fáze nápadu,' }, { text: 'ešte nie ste komerčne aktívni alebo nemáte opakované príjmy,' }, { text: 'nemáte jasnú impaktovú ambíciu,' }, { text: 'neuvažujete o cezhraničnom raste,' }, { text: 'sa nemôžete zúčastniť celého týždňa ViennaUP (10. – 14. mája 2027),' }, { text: 'si nemôžete vyhradiť čas na workshopy a následnú prácu.' }]
      },
      programme: {
        eyebrow: 'Prehľad programu', title: 'Vaša cesta programom',
        c1: { label: 'Fáza 1 · Zadarmo a online', title: 'Overte si pripravenosť na škálovanie', short: 'Bezplatný online obsah, prípadové štúdie, test pripravenosti', long: 'Úvodný obsah, príbehy zakladateľov a nástroj sebahodnotenia, ktorý vám pomôže zistiť, či je akcelerátor pre vás to pravé.', button: 'Sme pripravení škálovať?' },
        c2: { label: 'Fáza 2 · Hlavný program', title: 'Akcelerujte', short: '11-týždňový kohortový program (apríl – jún 2027) postavený okolo ViennaUP, s prezenčnými stretnutiami, online modulmi a Demo Day vo Viedni', long: 'Štruktúrovaný kohortový program zameraný na rozhodnutie o vstupe za hranicu, investovateľnosť, go-to-market, impakt a založenie firmy za hranicou.' },
        c3: { label: 'Fáza 3 · Následná podpora', title: 'Získajte ďalšiu podporu', short: 'Až 6 mesiacov následnej podpory pre vybrané podniky pripravené na vstup na trh, investíciu alebo partnerstvá', long: 'Podpora na mieru pre vybraných absolventov akcelerátora a podniky nominované projektovými partnermi vrátane expertného koučingu, prepojení a individuálnych akčných plánov.', button: 'Kontaktujte nás' }
      },
      benefits: {
        eyebrow: 'Čo získate', title: 'Čo vám účasť prinesie', lead: 'V akcelerátore môžete pracovať na:',
        items: [{ n: '01', text: 'Cezhraničná rastová stratégia: oplatí sa vám prekročiť Dunaj?' }, { n: '02', text: 'Cezhraničný pitch deck a data room pripravené pre investorov' }, { n: '03', text: 'Týždeň na ViennaUP: kaviarenské stretnutia s VC fondmi, korporáciami a inštitúciami' }, { n: '04', text: 'Demo Day v rámci ViennaUP' }, { n: '05', text: 'Go-to-market plán pre Slovensko alebo Rakúsko vrátane predaja mestám a verejným obstarávateľom' }, { n: '06', text: 'Meranie impaktu' }, { n: '07', text: 'Založenie firmy, právo, dane a zamestnávanie za hranicou' }, { n: '08', text: 'Partnerská (twin) firma spoza hranice, s ktorou spoločne prejdete vstupom na trh' }, { n: '09', text: 'Skúsení mentori a odborníci z Viedne a Bratislavy' }],
        caption: 'Workshopy kohorty sa konajú v oboch mestách.'
      },
      timeline: {
        eyebrow: 'Časový plán', title: 'Časový plán akceleračného programu', notSure: 'Ešte si nie ste istí?', consult: 'Rezervujte si bezplatnú konzultáciu', lead: 'Akcelerátor trvá 11 týždňov, od apríla do júna 2027, a je postavený okolo ViennaUP v máji: program vás pripraví na týždeň vo Viedni s investormi, zástupcami mesta a rakúskym ekosystémom a potom vám pomôže premeniť ho na konkrétnu cezhraničnú trakciu.',
        i1: { title: 'Prihlášky a výber', meta: '18. jan – 26. feb · Výsledky 5. marca', desc: 'Online prihláška, krátke úvodné rozhovory, návrh twin páru' }, i2: { title: 'Modul 1 – Oplatí sa prekročiť Dunaj?', meta: '12. – 16. apr · Prezenčne · Bratislava', desc: 'Otvorenie: kick-off kohorty, príbeh zakladateľa, prípadová štúdia, zoznámenie s twin firmou a mentorom, váš plán na ViennaUP' }, i3: { title: 'Modul 2 – Investovateľnosť', meta: '26. apr – 7. máj · Online', desc: 'Cezhraničný pitch a data room, príprava na stretnutia s investormi na ViennaUP' }, i4: { title: 'Modul 3 – Týždeň ViennaUP', meta: '10. – 14. máj · Prezenčne · Viedeň', desc: 'Kaviarenské stretnutia s VC fondmi, korporáciami a inštitúciami, Demo Day, exkurzie' }, i5: { title: 'Modul 4 – Go-to-market', meta: '18. – 28. máj · Online', desc: 'Follow-up z ViennaUP, zákazníci v AT a SK, predaj mestám a verejným obstarávateľom' }, i6: { title: 'Modul 5 – Impakt', meta: '31. máj – 11. jún · Online', desc: 'Prečo a ako merať váš impakt' }, i7: { title: 'Modul 6 – Vydajte sa za Dunaj', meta: '21. – 25. jún · Bratislava / hybridne · upresníme', desc: 'Záver: založenie firmy, právo, dane a zamestnávanie za hranicou, implementačné plány' }
      },
      howto: {
        eyebrow: 'Ako sa prihlásiť', title: 'Kľúčové termíny pre kohortu 2027', consult: 'Rezervovať bezplatnú konzultáciu',
        steps: [{ when: 'Okt – nov 2026', title: 'Launch eventy', desc: '22. 10. Bratislava (The Spot) · 4. 11. Viedeň (Invest Austria Conference)' }, { when: 'Teraz – feb 2027', title: 'Bezplatná konzultácia', desc: 'Ešte si nie ste istí? Rezervujte si bezplatnú hodinovú konzultáciu s programovým tímom.' }, { when: '18. jan – 26. feb 2027', title: 'Prihlasovanie', desc: 'Prihláste sa cez online formulár. Žiadne ďalšie dokumenty netreba.' }, { when: '5. marca 2027', title: 'Výsledky výberu', desc: 'Vybrané podniky dostanú oznámenie a priradíme im twin firmu.' }]
      },
      support: { eyebrow: 'Následná podpora', title: 'Posuňte svoj rast na ďalšiu úroveň', body: 'Vybraným podnikom s vysokým potenciálom ponúka akcelerátor až šesť mesiacov následnej podpory na mieru, ktorá premení cezhraničné ambície na konkrétne ďalšie kroky. Či sa pripravujete na vstup na trh, rozhovory s investormi alebo strategické partnerstvá, pracujeme s vami individuálne, definujeme váš ďalší míľnik a prepojíme vás so správnou expertízou. Podniky môžu prejaviť záujem na konci akcelerátora alebo ich môže nominovať projektový partner.', ready: 'Pripravení ísť ďalej?' },
      partners: {
        eyebrow: 'Konzorcium', title: 'Kto stojí za akcelerátorom?', lead: 'Akcelerátor vyvíjajú CB ESPRI, Relevant Ventures a projektoví partneri TWICIIC a prepája impaktové ekosystémy Bratislavy a Viedne.',
        list: [
          { name: 'CB ESPRI', logo: 'assets/partners/cb-espri.svg', role: 'Vývoj akcelerátora', city: 'Bratislava', variant: 'bratislava' }, { name: 'Relevant Ventures', logo: 'assets/partners/relevant.svg', role: 'Vývoj akcelerátora', city: 'Viedeň', variant: 'vienna' }, { name: 'Hlavné mesto SR Bratislava', logo: 'assets/partners/bratislava-c.png', role: 'Projektový partner TWICIIC', city: 'Bratislava', variant: 'bratislava' }, { name: 'Vienna Business Agency', logo: 'assets/partners/vienna-business-agency-c.png', role: 'Projektový partner TWICIIC', city: 'Viedeň', variant: 'vienna' }, { name: 'Impact Slovakia', logo: 'assets/partners/impact-slovakia-c.png', role: 'Projektový partner TWICIIC', city: 'Bratislava', variant: 'bratislava' }, { name: 'ZSI — Centrum pre sociálne inovácie', logo: 'assets/partners/zsi-c.png', role: 'Projektový partner TWICIIC', city: 'Viedeň', variant: 'vienna' }
        ]
      },
      cta: { title: 'Pripravení rásť cez hranicu?' },
      interreg: { eyebrow: 'Financovanie', title: 'Spolufinancované Európskou úniou prostredníctvom programu Interreg Slovensko–Rakúsko', p1: 'TWICIIC — Twin City Impact Innovation Champion je cezhraničný projekt spolufinancovaný programom Interreg Slovensko–Rakúsko 2021–2027 z Európskeho fondu regionálneho rozvoja (EFRR), ktorý prebieha od novembra 2025 do septembra 2028.', p2: 'Hlavným cieľom TWICIIC je posilniť kapacity impaktových inovácií v regióne a medzi mestami – u verejných aj súkromných aktérov inovácií. Projekt akceleruje scale-upy s pozitívnym dopadom v regióne Viedeň–Bratislava: podniky s impaktovou misiou, ktoré prekonali fázu prototypu, sú už na trhu a aktívne sa usilujú o cezhraničný rast. TWICIIC poskytuje štruktúrované vzájomné učenie, prístup k cezhraničným investorským sieťam a spoločný akceleračný program prepájajúci ekosystémy impaktových inovácií oboch miest.', projects: 'Projekty Interreg', photoAlt: 'Európsky parlament v Bruseli s vlajkami členských štátov EÚ', caption: 'Interreg Slovensko–Rakúsko 2021–2027 · EFRR' }
    }
  };

  en.acc = acc.en; de.acc = acc.de; sk.acc = acc.sk;
  var rdy = window.TWICIIC_READINESS || {};
  en.rdy = rdy.en; de.rdy = rdy.de; sk.rdy = rdy.sk;
  var lg = window.TWICIIC_LEGAL || {};
  en.legal = lg.en; de.legal = lg.de; sk.legal = lg.sk;
  window.TWICIIC_CONTENT = { en: en, de: de, sk: sk };
  try { window.dispatchEvent(new CustomEvent('twiciic-content')); } catch (e) { /* no-op */ }
})();
