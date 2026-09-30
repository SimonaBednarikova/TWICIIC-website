/* TWICIIC website content — one object, keyed by language (en / de / sk).
   Every string on the site lives here. `acc` holds the Twin City Accelerator page copy (shipped unchanged). */
(function () {
  var W = 'Vienna', B = 'Bratislava';
  var en = {
    meta: { locale: 'en-GB', code: 'en', langName: 'English', skip: 'Skip to content', months: 'months' },
    nav: {
      programme: 'Programme', accelerator: 'Accelerator', about: 'About', partners: 'Partners', research: 'Research', portfolio: 'Portfolio', events: 'Events & News',
      cta: 'Join our network', menu: 'Menu', close: 'Close', langLabel: 'Language', aboutLabel: 'About TWICIIC',
      accLabel: 'Twin City Accelerator', accOverview: 'Twin City Accelerator', readiness: 'Learn & check your readiness to scale',
      accDesc: { overview: 'Programme, timeline and how to apply', readiness: 'Free content and a 2-minute self-check' },
      aboutDesc: { partners: 'Six organisations, two cities', research: 'What we are learning', portfolio: 'Ventures we support' },
      sections: 'Sections'
    },
    home: {
      hero: {
        eyebrow: 'Twin City Impact Innovation Champion · Vienna – Bratislava',
        h1: 'Grow your impact venture across two capitals.',
        sub: 'TWICIIC turns Vienna and Bratislava into one home market for impact-driven startups, SMEs and NGOs.',
        cta1: 'Explore the Accelerator', cta2: 'Join our network',
        note: 'An Interreg Slovakia–Austria project. Free to join, open on both sides of the border.',
        media: 'Hero visual: the two cities, 55 km apart', km: 'km', vie: W, ba: B
      },
      cities: {
        eyebrow: 'Two capitals · 55 kilometres',
        h2: 'The closest capitals in Europe. Two ecosystems that barely touch.',
        lead: 'Vienna and Bratislava are closer to each other than any other two capitals on the continent. Their impact-innovation scenes are not.',
        vie: { title: W, body: 'A mature impact scene with strong support structures that mostly stays inside its own communities.' },
        ba: { title: B, body: 'A fast-moving, entrepreneurial scene that is still building the institutions to support it.' },
        change: { title: 'That is changing.', body: 'Founders on both sides face the same gaps: cross-border know-how, investment readiness and simple visibility of who is doing what an hour away. Close those gaps and two half-sized markets become one region of three million people.' },
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
        body: 'TWICIIC is here to connect the two ecosystems: the founders, the hubs, the investors, the universities and the cities themselves. Join the network and become part of Twin City Pulse, the growing community of people building impact across Vienna and Bratislava.',
        cta: 'Join our network', sub: 'Free. Open to both cities. Continues beyond 2028.'
      },
      sw: {
        h: 'Where do you fit in?',
        items: [
          { n: '01', title: "I'm building a venture", body: 'A startup, impact SME or NGO ready to grow into a second market.', cta: 'Explore the Accelerator', href: '#accelerator' },
          { n: '02', title: 'I work in the ecosystem or for a city', body: 'A hub, university, investor, city department or municipal company.', cta: 'Partner with us', href: '#partners' },
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
          { n: '02', title: 'Cross-border Masterclass', forText: 'For ventures with a serious plan to enter the other city', body: 'Nine weeks, one mixed Vienna–Bratislava cohort, a workshop in each city. The core of the accelerator: you leave with a concrete expansion plan and partners across the border.', cta: 'How the masterclass works', href: '#accelerator' },
          { n: '03', title: 'Scale-up support', forText: 'For selected ventures from the masterclass', body: 'Six months of individual support to execute your first cross-border steps: pilots, partners, customers and financing.', cta: 'How selection works', href: '#support' }
        ],
        cta1: 'Apply to the Accelerator', cta2: 'Am I ready to scale? 2-minute check'
      },
      events: {
        eyebrow: 'Events', h2: "Discover what's coming up.",
        lead: "Online sessions, meetups, Demo Days and study visits in both cities. Most are free. Come and meet the people you'll be working with.",
        all: 'See all events', news: 'Read the latest news'
      },
      team: {
        eyebrow: "Who's behind it", h2: 'Discover the unique cohort of partners working behind TWICIIC.',
        body: 'Six organisations, two cities, one team: a research centre, two city agencies, a venture studio, an accelerator operator and an impact network. Meet the people who run the programme, the research and the network.',
        cta1: 'Meet the partners', cta2: 'Discover our team', media: 'The TWICIIC partner consortium at its meeting in Bratislava, June 2026.'
      },
      nl: { h2: 'Stay in the loop.', body: "One email a month: new sessions, open calls and what we're learning. No noise.", ph: 'your@email.com', cta: 'Subscribe', done: 'Thanks — you’re on the list.', label: 'Email address' }
    },
    par: {
      hero: { eyebrow: 'About · Partners', h1: 'Six partners. Two cities. One team.', sub: 'TWICIIC is run by six organisations from Vienna and Bratislava, each bringing what the other side lacks.' },
      list: [
        { name: 'ZSI – Centre for Social Innovation', city: W, side: 'vie', alt: 'l', role: 'Lead partner', body: 'Coordinates the project and leads the research that maps both ecosystems.', logo: 'assets/partners/zsi-c.png' },
        { name: 'Capital City of Bratislava', city: B, side: 'ba', alt: 'r', role: 'Municipal anchor, Slovakia', body: 'Opens the city and its municipal companies to pilots, peer learning and the network.', logo: 'assets/partners/bratislava-c.png' },
        { name: 'Vienna Business Agency', city: W, side: 'vie', alt: 'l', role: 'Ecosystem networks lead', body: 'Leads the ecosystem networks: meetups, study visits and the cooperation between the two cities.', logo: 'assets/partners/vienna-business-agency-c.png' },
        { name: 'Relevant Ventures', city: W, side: 'vie', alt: 'r', role: 'Communication & entrepreneurial support', body: "Delivers entrepreneurial support in the accelerator and runs the project's communication.", logo: 'assets/partners/relevant.svg' },
        { name: 'CB ESPRI', city: B, side: 'ba', alt: 'l', role: 'Twin City Accelerator lead', body: 'Designs and runs the Twin City Accelerator across all three stages.', logo: 'assets/partners/cb-espri.svg' },
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
      cta: { h2: 'Want to work with us?', body: 'Co-host a session, refer a venture, pilot with a city or join the network.', b1: 'Partner with us', b2: 'Join our network' }
    },
    res: {
      hero: { eyebrow: 'About · Research', h1: "What we're learning about the Twin City.", sub: 'Before we accelerate, we map. Our research team is documenting both ecosystems so that founders, cities and partners work from the same picture.' },
      prog: { eyebrow: 'In the making', h2: 'Two reports, both in progress.' },
      lbl: { method: "How we're doing it", when: 'When' },
      reports: [
        { n: '01', side: 'vie', type: 'Report · in progress', title: 'Mapping the Twin City impact ecosystem', body: 'Who supports impact ventures in Vienna and in Bratislava, and how well the two sides know each other: hubs, investors, universities, support programmes, municipal players.', method: 'Desk research, interviews with ecosystem actors on both sides, focus groups in each city.', when: 'First findings in 2026', cta: "Get notified when it's out" },
        { n: '02', side: 'ba', type: 'Report · in progress', title: 'What impact founders need to cross the border', body: 'A needs analysis with founders, SMEs and NGOs: investment readiness, cross-border know-how, legal and market entry, impact measurement.', method: 'Founder interviews and a validation workshop with founders and ecosystem players. The results feed directly into what the accelerator teaches.', when: 'Findings in 2026', cta: 'Take part in the research' }
      ],
      know: { eyebrow: 'What we already know', h2: 'Four things the first conversations made clear.' },
      k: [
        { n: '01', text: "Vienna's impact scene has grown, but it mostly talks to itself." },
        { n: '02', text: "Bratislava's founders work without the support structures Vienna takes for granted." },
        { n: '03', text: 'Neither side has a reliable picture of who does what 55 km away.' },
        { n: '04', text: 'The gaps founders name first are investment readiness and cross-border know-how.' }
      ],
      themesH: 'Themes we cover',
      themes: [{ text: 'Cross-border expansion' }, { text: 'Impact measurement' }, { text: 'Finance & investment readiness' }, { text: 'Cities & public innovation' }, { text: 'Ecosystem mapping' }],
      watch: { h2: 'Recordings', body: 'Session recordings and webinar replays appear here as the programme runs.', ghost: 'Recording · coming soon' },
      cta: { h2: 'Get the findings first.', body: "Subscribe and we'll send you each report the day it's published, with the three findings that matter most.", b1: 'Subscribe', b2: 'Contribute to the research', note: "We're still interviewing founders and ecosystem players in both cities. Thirty minutes of your time shapes what the accelerator teaches." }
    },
    por: {
      hero: { eyebrow: 'About · Portfolio', h1: 'The ventures of the Twin City.', sub: "Every venture that goes through the Twin City Accelerator will be here: what they do, where they're from, and where they're going." },
      empty: { label: 'First cohort in preparation', h2: 'The first cohort is in preparation.', body: "We're selecting the ventures that will form the first cross-border cohort of the Twin City Accelerator. The portfolio opens the moment they do.", cta1: 'Find out how to join the first cohort', cta2: 'Stay tuned', note: 'Applications are open to startups, impact SMEs and NGOs from Vienna and Bratislava.' },
      soon: "What you'll find here",
      g: { logo: 'Venture logo', name: 'Venture name', meta: 'Sector · City · Stage', body: 'One line on what the venture does, verb first.', example: 'Example entry' },
      cta: { h2: 'Want to be on this page?', b1: 'Apply to the Accelerator' }
    },
    ev: {
      hero: { eyebrow: 'Events & News', h1: "What's on in the Twin City.", sub: "Sessions, meetups, Demo Days and study visits in Vienna, Bratislava and online. Plus what's new in the project." },
      f: { up: 'Upcoming', past: 'Past', vie: W, ba: B, on: 'Online', inPerson: 'In person', tags: 'Filter by type', where: 'Filter by place', clear: 'Clear filters' },
      types: { session: 'Online session', meetup: 'Meetup', demo: 'Demo Day', visit: 'Study visit', round: 'Roundtable' },
      upH: 'Upcoming',
      items: [
        { id: 'e1', typeKey: 'session', locKey: 'on', type: 'Online session', loc: 'Online', date: 'Date to be announced', title: 'Building an impact venture for two markets', body: "The first open session: what changes when your home market becomes two capitals, and how to find out whether it's worth it for you.", cta: 'Save my seat' },
        { id: 'e2', typeKey: 'meetup', locKey: 'vie', type: 'Meetup', loc: W, date: 'Date to be announced', title: 'Twin City Pulse: meet the Vienna scene', body: "An evening with Vienna's impact founders, hubs and investors, and the Bratislava people who came to meet them.", cta: 'Save my seat' },
        { id: 'e3', typeKey: 'meetup', locKey: 'ba', type: 'Meetup', loc: B, date: 'Date to be announced', title: 'Twin City Pulse: meet the Bratislava scene', body: 'The same evening, the other way round.', cta: 'Save my seat' },
        { id: 'e4', typeKey: 'round', locKey: 'vie', type: 'Roundtable', loc: W, date: 'Date to be announced', title: 'Cities as partners: what municipal companies need from impact ventures', body: 'For city departments, municipal companies and the ventures that want to pilot with them.', cta: 'Request an invitation' }
      ],
      none: 'No events match these filters yet.',
      past: { h2: 'Past events', body: 'Every event stays on this page after it happens, with photos, the recording and what came out of it.', ghost: 'Recap · coming soon' },
      newsH: 'News',
      news: [
        { date: 'October 2025', tag: 'Project', title: 'TWICIIC kicks off: six partners, two cities, one plan', body: 'The consortium met for the first time to set the plan for three years of connecting Vienna and Bratislava.' },
        { date: '2026', tag: 'Accelerator', title: 'The Twin City Accelerator: how the first year works', body: 'Open sessions first, the masterclass next, scale-up support for the ventures that make the strongest case.' },
        { date: '2026', tag: 'Research', title: 'Mapping both ecosystems has begun', body: "Our researchers are interviewing hubs, investors and founders on both sides of the border. Here's what we're asking." }
      ],
      more: 'Read more',
      nl: { h2: 'Never miss a date.', body: 'One email a month with every upcoming session and the latest news.', cta: 'Subscribe' }
    },
    ft: {
      about: 'TWICIIC – Twin City Impact Innovation Champion – connects the innovation ecosystems of Vienna and Bratislava. Through a cross-border accelerator, ecosystem events and city partnerships, it helps impact-driven startups, SMEs and NGOs grow in both markets.',
      navH: 'Navigate', touchH: 'Stay in touch', touchBody: 'Newsletter, once a month.', touchCta: 'Subscribe', li: 'LinkedIn', contact: 'Contact us',
      liEyebrow: 'Follow us on LinkedIn', liText: 'Track our latest updates — open calls, workshops and cohort news, posted regularly.',
      partners: 'Partners', fundH: 'Funding', fundLine: 'Co-funded by the European Union', fundProg: 'Interreg Slovakia–Austria 2021–2027', fundRegion: 'Slovakia – Austria',
      fundLong: 'This project is co-financed by the Interreg Slovakia–Austria 2021–2027 Programme from the European Regional Development Fund (ERDF).',
      copyright: '© 2026 TWICIIC. All rights reserved.',
      legal: [{ text: 'Privacy' }, { text: 'Imprint' }, { text: 'Accessibility' }, { text: 'Cookies' }]
    }
  };

  var de = {
    meta: { locale: 'de-AT', code: 'de', langName: 'Deutsch', skip: 'Zum Inhalt springen', months: 'Monate' },
    nav: {
      programme: 'Programm', accelerator: 'Accelerator', about: 'Über uns', partners: 'Partner', research: 'Forschung', portfolio: 'Portfolio', events: 'Events & News',
      cta: 'Netzwerk beitreten', menu: 'Menü', close: 'Schließen', langLabel: 'Sprache', aboutLabel: 'Über TWICIIC',
      accLabel: 'Twin City Accelerator', accOverview: 'Twin City Accelerator', readiness: 'Lernen & Bereitschaft zur Skalierung prüfen',
      accDesc: { overview: 'Programm, Zeitplan und Bewerbung', readiness: 'Kostenlose Inhalte und 2-Minuten-Check' },
      aboutDesc: { partners: 'Sechs Organisationen, zwei Städte', research: 'Was wir lernen', portfolio: 'Ventures, die wir begleiten' },
      sections: 'Abschnitte'
    },
    home: {
      hero: {
        eyebrow: 'Twin City Impact Innovation Champion · Wien – Bratislava',
        h1: 'Lassen Sie Ihr Impact-Venture in zwei Hauptstädten wachsen.',
        sub: 'TWICIIC macht Wien und Bratislava zu einem Heimmarkt für wirkungsorientierte Start-ups, KMU und NGOs.',
        cta1: 'Zum Accelerator', cta2: 'Netzwerk beitreten',
        note: 'Ein Projekt von Interreg Slowakei–Österreich. Kostenlos, offen auf beiden Seiten der Grenze.',
        media: 'Hero-Visual: die zwei Städte, 55 km voneinander entfernt', km: 'km', vie: 'Wien', ba: B
      },
      cities: {
        eyebrow: 'Zwei Hauptstädte · 55 Kilometer',
        h2: 'Die nächsten Hauptstädte Europas. Zwei Ökosysteme, die sich kaum berühren.',
        lead: 'Wien und Bratislava liegen näher beieinander als jedes andere Hauptstadtpaar auf dem Kontinent. Ihre Impact-Innovationsszenen nicht.',
        vie: { title: 'Wien', body: 'Eine reife Impact-Szene mit starken Unterstützungsstrukturen, die meist unter sich bleibt.' },
        ba: { title: B, body: 'Eine schnelle, unternehmerische Szene, die ihre unterstützenden Institutionen noch aufbaut.' },
        change: { title: 'Das ändert sich.', body: 'Gründer:innen auf beiden Seiten stehen vor denselben Lücken: grenzüberschreitendes Know-how, Investment Readiness und schlicht die Sichtbarkeit, wer eine Stunde entfernt was tut. Schließen wir diese Lücken, werden aus zwei halben Märkten eine Region mit drei Millionen Menschen.' },
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
        body: 'TWICIIC verbindet die beiden Ökosysteme: Gründer:innen, Hubs, Investor:innen, Universitäten und die Städte selbst. Treten Sie dem Netzwerk bei und werden Sie Teil von Twin City Pulse – der wachsenden Community, die Impact in Wien und Bratislava aufbaut.',
        cta: 'Netzwerk beitreten', sub: 'Kostenlos. Offen für beide Städte. Läuft über 2028 hinaus.'
      },
      sw: {
        h: 'Wo passen Sie hin?',
        items: [
          { n: '01', title: 'Ich baue ein Venture auf', body: 'Ein Start-up, Impact-KMU oder eine NGO, bereit für den zweiten Markt.', cta: 'Zum Accelerator', href: '#accelerator' },
          { n: '02', title: 'Ich arbeite im Ökosystem oder für eine Stadt', body: 'Ein Hub, eine Universität, Investor:in, Stadtabteilung oder ein kommunales Unternehmen.', cta: 'Partner werden', href: '#partners' },
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
          { n: '02', title: 'Cross-border Masterclass', forText: 'Für Ventures mit einem ernsthaften Plan für die andere Stadt', body: 'Neun Wochen, eine gemischte Wien–Bratislava-Kohorte, ein Workshop in jeder Stadt. Das Herz des Accelerators: Sie gehen mit einem konkreten Expansionsplan und Partnern jenseits der Grenze nach Hause.', cta: 'So funktioniert die Masterclass', href: '#accelerator' },
          { n: '03', title: 'Scale-up-Support', forText: 'Für ausgewählte Ventures aus der Masterclass', body: 'Sechs Monate individuelle Unterstützung für Ihre ersten grenzüberschreitenden Schritte: Pilotprojekte, Partner, Kund:innen und Finanzierung.', cta: 'So läuft die Auswahl', href: '#support' }
        ],
        cta1: 'Für den Accelerator bewerben', cta2: 'Bin ich bereit zu skalieren? 2-Minuten-Check'
      },
      events: {
        eyebrow: 'Events', h2: 'Entdecken Sie, was ansteht.',
        lead: 'Online-Sessions, Meetups, Demo Days und Studienbesuche in beiden Städten. Die meisten kostenlos. Kommen Sie vorbei und lernen Sie die Menschen kennen, mit denen Sie arbeiten werden.',
        all: 'Alle Events', news: 'Aktuelle News lesen'
      },
      team: {
        eyebrow: 'Wer dahintersteht', h2: 'Entdecken Sie das einzigartige Partnerteam hinter TWICIIC.',
        body: 'Sechs Organisationen, zwei Städte, ein Team: ein Forschungszentrum, zwei Stadtagenturen, ein Venture Studio, ein Accelerator-Betreiber und ein Impact-Netzwerk. Lernen Sie die Menschen kennen, die Programm, Forschung und Netzwerk tragen.',
        cta1: 'Partner kennenlernen', cta2: 'Unser Team entdecken', media: 'Das TWICIIC-Partnerkonsortium beim Treffen in Bratislava, Juni 2026.'
      },
      nl: { h2: 'Bleiben Sie auf dem Laufenden.', body: 'Eine E-Mail pro Monat: neue Sessions, offene Calls und was wir lernen. Kein Rauschen.', ph: 'ihre@email.com', cta: 'Abonnieren', done: 'Danke – Sie sind dabei.', label: 'E-Mail-Adresse' }
    },
    par: {
      hero: { eyebrow: 'Über uns · Partner', h1: 'Sechs Partner. Zwei Städte. Ein Team.', sub: 'TWICIIC wird von sechs Organisationen aus Wien und Bratislava getragen – jede bringt ein, was der anderen Seite fehlt.' },
      list: [
        { name: 'ZSI – Zentrum für Soziale Innovation', city: 'Wien', side: 'vie', alt: 'l', role: 'Lead-Partner', body: 'Koordiniert das Projekt und leitet die Forschung, die beide Ökosysteme kartiert.', logo: 'assets/partners/zsi-c.png' },
        { name: 'Hauptstadt Bratislava', city: B, side: 'ba', alt: 'r', role: 'Kommunaler Anker, Slowakei', body: 'Öffnet die Stadt und ihre kommunalen Unternehmen für Pilotprojekte, Peer-Learning und das Netzwerk.', logo: 'assets/partners/bratislava-c.png' },
        { name: 'Wirtschaftsagentur Wien', city: 'Wien', side: 'vie', alt: 'l', role: 'Leitung Ökosystem-Netzwerke', body: 'Leitet die Ökosystem-Netzwerke: Meetups, Studienbesuche und die Kooperation der beiden Städte.', logo: 'assets/partners/vienna-business-agency-c.png' },
        { name: 'Relevant Ventures', city: 'Wien', side: 'vie', alt: 'r', role: 'Kommunikation & Gründungsunterstützung', body: 'Liefert die unternehmerische Unterstützung im Accelerator und verantwortet die Projektkommunikation.', logo: 'assets/partners/relevant.svg' },
        { name: 'CB ESPRI', city: B, side: 'ba', alt: 'l', role: 'Leitung Twin City Accelerator', body: 'Konzipiert und führt den Twin City Accelerator über alle drei Stufen.', logo: 'assets/partners/cb-espri.svg' },
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
      cta: { h2: 'Wollen Sie mit uns arbeiten?', body: 'Eine Session co-hosten, ein Venture empfehlen, mit einer Stadt pilotieren oder dem Netzwerk beitreten.', b1: 'Partner werden', b2: 'Netzwerk beitreten' }
    },
    res: {
      hero: { eyebrow: 'Über uns · Forschung', h1: 'Was wir über die Twin City lernen.', sub: 'Bevor wir beschleunigen, kartieren wir. Unser Forschungsteam dokumentiert beide Ökosysteme, damit Gründer:innen, Städte und Partner vom selben Bild ausgehen.' },
      prog: { eyebrow: 'In Arbeit', h2: 'Zwei Berichte, beide in Arbeit.' },
      lbl: { method: 'So gehen wir vor', when: 'Wann' },
      reports: [
        { n: '01', side: 'vie', type: 'Bericht · in Arbeit', title: 'Das Impact-Ökosystem der Twin City kartieren', body: 'Wer Impact-Ventures in Wien und in Bratislava unterstützt – und wie gut sich beide Seiten kennen: Hubs, Investor:innen, Universitäten, Förderprogramme, kommunale Akteure.', method: 'Desk Research, Interviews mit Ökosystem-Akteur:innen auf beiden Seiten, Fokusgruppen in jeder Stadt.', when: 'Erste Ergebnisse 2026', cta: 'Benachrichtigen, wenn er erscheint' },
        { n: '02', side: 'ba', type: 'Bericht · in Arbeit', title: 'Was Impact-Gründer:innen brauchen, um die Grenze zu überschreiten', body: 'Eine Bedarfsanalyse mit Gründer:innen, KMU und NGOs: Investment Readiness, grenzüberschreitendes Know-how, Recht und Markteintritt, Wirkungsmessung.', method: 'Gründer:innen-Interviews und ein Validierungsworkshop mit Gründer:innen und Ökosystem-Akteur:innen. Die Ergebnisse fließen direkt in die Inhalte des Accelerators ein.', when: 'Ergebnisse 2026', cta: 'An der Forschung teilnehmen' }
      ],
      know: { eyebrow: 'Was wir schon wissen', h2: 'Vier Dinge, die die ersten Gespräche klar gemacht haben.' },
      k: [
        { n: '01', text: 'Wiens Impact-Szene ist gewachsen, spricht aber vor allem mit sich selbst.' },
        { n: '02', text: 'Bratislavas Gründer:innen arbeiten ohne die Unterstützungsstrukturen, die Wien für selbstverständlich hält.' },
        { n: '03', text: 'Keine Seite hat ein verlässliches Bild davon, wer 55 km entfernt was tut.' },
        { n: '04', text: 'Die Lücken, die Gründer:innen zuerst nennen: Investment Readiness und grenzüberschreitendes Know-how.' }
      ],
      themesH: 'Unsere Themen',
      themes: [{ text: 'Grenzüberschreitende Expansion' }, { text: 'Wirkungsmessung' }, { text: 'Finanzierung & Investment Readiness' }, { text: 'Städte & öffentliche Innovation' }, { text: 'Ökosystem-Mapping' }],
      watch: { h2: 'Aufzeichnungen', body: 'Session-Aufzeichnungen und Webinar-Replays erscheinen hier, sobald das Programm läuft.', ghost: 'Aufzeichnung · demnächst' },
      cta: { h2: 'Die Ergebnisse zuerst bekommen.', body: 'Abonnieren Sie und wir schicken Ihnen jeden Bericht am Tag seiner Veröffentlichung – mit den drei Erkenntnissen, die am meisten zählen.', b1: 'Abonnieren', b2: 'Zur Forschung beitragen', note: 'Wir interviewen noch Gründer:innen und Ökosystem-Akteur:innen in beiden Städten. Dreißig Minuten Ihrer Zeit prägen, was der Accelerator lehrt.' }
    },
    por: {
      hero: { eyebrow: 'Über uns · Portfolio', h1: 'Die Ventures der Twin City.', sub: 'Jedes Venture, das den Twin City Accelerator durchläuft, wird hier stehen: was es tut, woher es kommt und wohin es will.' },
      empty: { label: 'Erste Kohorte in Vorbereitung', h2: 'Die erste Kohorte ist in Vorbereitung.', body: 'Wir wählen gerade die Ventures aus, die die erste grenzüberschreitende Kohorte des Twin City Accelerators bilden. Das Portfolio öffnet in dem Moment, in dem sie starten.', cta1: 'So kommen Sie in die erste Kohorte', cta2: 'Dranbleiben', note: 'Bewerben können sich Start-ups, Impact-KMU und NGOs aus Wien und Bratislava.' },
      soon: 'Was Sie hier finden werden',
      g: { logo: 'Venture-Logo', name: 'Name des Ventures', meta: 'Sektor · Stadt · Phase', body: 'Eine Zeile dazu, was das Venture tut – Verb zuerst.', example: 'Beispieleintrag' },
      cta: { h2: 'Wollen Sie auf diese Seite?', b1: 'Für den Accelerator bewerben' }
    },
    ev: {
      hero: { eyebrow: 'Events & News', h1: 'Was in der Twin City läuft.', sub: 'Sessions, Meetups, Demo Days und Studienbesuche in Wien, Bratislava und online. Plus Neues aus dem Projekt.' },
      f: { up: 'Kommend', past: 'Vergangen', vie: 'Wien', ba: B, on: 'Online', inPerson: 'Vor Ort', tags: 'Nach Format filtern', where: 'Nach Ort filtern', clear: 'Filter zurücksetzen' },
      types: { session: 'Online-Session', meetup: 'Meetup', demo: 'Demo Day', visit: 'Studienbesuch', round: 'Roundtable' },
      upH: 'Kommende Events',
      items: [
        { id: 'e1', typeKey: 'session', locKey: 'on', type: 'Online-Session', loc: 'Online', date: 'Termin folgt', title: 'Ein Impact-Venture für zwei Märkte aufbauen', body: 'Die erste offene Session: Was sich ändert, wenn Ihr Heimmarkt zwei Hauptstädte umfasst – und wie Sie herausfinden, ob es sich für Sie lohnt.', cta: 'Platz sichern' },
        { id: 'e2', typeKey: 'meetup', locKey: 'vie', type: 'Meetup', loc: 'Wien', date: 'Termin folgt', title: 'Twin City Pulse: die Szene in Wien kennenlernen', body: 'Ein Abend mit Wiens Impact-Gründer:innen, Hubs und Investor:innen – und den Menschen aus Bratislava, die gekommen sind, um sie zu treffen.', cta: 'Platz sichern' },
        { id: 'e3', typeKey: 'meetup', locKey: 'ba', type: 'Meetup', loc: B, date: 'Termin folgt', title: 'Twin City Pulse: die Szene in Bratislava kennenlernen', body: 'Derselbe Abend, andersherum.', cta: 'Platz sichern' },
        { id: 'e4', typeKey: 'round', locKey: 'vie', type: 'Roundtable', loc: 'Wien', date: 'Termin folgt', title: 'Städte als Partner: Was kommunale Unternehmen von Impact-Ventures brauchen', body: 'Für Stadtabteilungen, kommunale Unternehmen und die Ventures, die mit ihnen pilotieren wollen.', cta: 'Einladung anfragen' }
      ],
      none: 'Noch keine Events für diese Filter.',
      past: { h2: 'Vergangene Events', body: 'Jedes Event bleibt nach dem Termin auf dieser Seite – mit Fotos, Aufzeichnung und dem, was dabei herausgekommen ist.', ghost: 'Rückblick · demnächst' },
      newsH: 'News',
      news: [
        { date: 'Oktober 2025', tag: 'Projekt', title: 'TWICIIC startet: sechs Partner, zwei Städte, ein Plan', body: 'Das Konsortium hat sich zum ersten Mal getroffen, um den Plan für drei Jahre Verbindung zwischen Wien und Bratislava festzulegen.' },
        { date: '2026', tag: 'Accelerator', title: 'Der Twin City Accelerator: So funktioniert das erste Jahr', body: 'Zuerst offene Sessions, dann die Masterclass, Scale-up-Support für die Ventures mit dem stärksten Case.' },
        { date: '2026', tag: 'Forschung', title: 'Die Kartierung beider Ökosysteme hat begonnen', body: 'Unsere Forscher:innen interviewen Hubs, Investor:innen und Gründer:innen auf beiden Seiten der Grenze. Das fragen wir.' }
      ],
      more: 'Weiterlesen',
      nl: { h2: 'Keinen Termin verpassen.', body: 'Eine E-Mail pro Monat mit allen kommenden Sessions und den neuesten News.', cta: 'Abonnieren' }
    },
    ft: {
      about: 'TWICIIC – Twin City Impact Innovation Champion – verbindet die Innovationsökosysteme von Wien und Bratislava. Mit einem grenzüberschreitenden Accelerator, Ökosystem-Events und Städtepartnerschaften hilft es wirkungsorientierten Start-ups, KMU und NGOs, in beiden Märkten zu wachsen.',
      navH: 'Navigation', touchH: 'In Kontakt bleiben', touchBody: 'Newsletter, einmal im Monat.', touchCta: 'Abonnieren', li: 'LinkedIn', contact: 'Kontakt',
      liEyebrow: 'Folgen Sie uns auf LinkedIn', liText: 'Bleiben Sie auf dem Laufenden – offene Calls, Workshops und Neuigkeiten aus der Kohorte, regelmäßig gepostet.',
      partners: 'Partner', fundH: 'Förderung', fundLine: 'Kofinanziert von der Europäischen Union', fundProg: 'Interreg Slowakei–Österreich 2021–2027', fundRegion: 'Slowakei – Österreich',
      fundLong: 'Dieses Projekt wird vom Programm Interreg Slowakei–Österreich 2021–2027 aus dem Europäischen Fonds für regionale Entwicklung (EFRE) kofinanziert.',
      copyright: '© 2026 TWICIIC. Alle Rechte vorbehalten.',
      legal: [{ text: 'Datenschutz' }, { text: 'Impressum' }, { text: 'Barrierefreiheit' }, { text: 'Cookies' }]
    }
  };

  var sk = {
    meta: { locale: 'sk-SK', code: 'sk', langName: 'Slovenčina', skip: 'Preskočiť na obsah', months: 'mesiacov' },
    nav: {
      programme: 'Program', accelerator: 'Akcelerátor', about: 'O nás', partners: 'Partneri', research: 'Výskum', portfolio: 'Portfólio', events: 'Podujatia a novinky',
      cta: 'Pridajte sa k sieti', menu: 'Menu', close: 'Zavrieť', langLabel: 'Jazyk', aboutLabel: 'O TWICIIC',
      accLabel: 'Twin City Accelerator', accOverview: 'Twin City Accelerator', readiness: 'Učte sa a overte si pripravenosť na škálovanie',
      accDesc: { overview: 'Program, časový plán a prihlásenie', readiness: 'Bezplatný obsah a 2-minútový test' },
      aboutDesc: { partners: 'Šesť organizácií, dve mestá', research: 'Čo sa učíme', portfolio: 'Podniky, ktoré podporujeme' },
      sections: 'Sekcie'
    },
    home: {
      hero: {
        eyebrow: 'Twin City Impact Innovation Champion · Viedeň – Bratislava',
        h1: 'Rozvíjajte svoj impaktový podnik v dvoch hlavných mestách.',
        sub: 'TWICIIC robí z Viedne a Bratislavy jeden domáci trh pre impaktové startupy, MSP a neziskové organizácie.',
        cta1: 'Objavte akcelerátor', cta2: 'Pridajte sa k sieti',
        note: 'Projekt Interreg Slovensko–Rakúsko. Zapojenie je bezplatné a otvorené na oboch stranách hranice.',
        media: 'Hlavný vizuál: dve mestá vzdialené 55 km', km: 'km', vie: 'Viedeň', ba: B
      },
      cities: {
        eyebrow: 'Dve hlavné mestá · 55 kilometrov',
        h2: 'Najbližšie hlavné mestá v Európe. Dva ekosystémy, ktoré sa sotva dotýkajú.',
        lead: 'Viedeň a Bratislava sú si bližšie než ktorékoľvek iné dve hlavné mestá na kontinente. Ich impaktové inovačné scény nie.',
        vie: { title: 'Viedeň', body: 'Vyspelá impaktová scéna so silnými podpornými štruktúrami, ktorá zostáva prevažne vo vlastných komunitách.' },
        ba: { title: B, body: 'Rýchla, podnikavá scéna, ktorá si inštitúcie na svoju podporu ešte len buduje.' },
        change: { title: 'To sa mení.', body: 'Zakladatelia na oboch stranách narážajú na rovnaké prekážky: chýba im cezhraničné know-how, investičná pripravenosť a jednoducho prehľad o tom, kto čo robí hodinu cesty od nich. Keď ich odstránime, z dvoch polovičných trhov vznikne jeden región s tromi miliónmi ľudí.' },
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
        body: 'TWICIIC prepája dva ekosystémy: zakladateľov, huby, investorov, univerzity aj samotné mestá. Pridajte sa k sieti a staňte sa súčasťou Twin City Pulse – rastúcej komunity ľudí, ktorí vo Viedni a v Bratislave prinášajú pozitívnu zmenu.',
        cta: 'Pridajte sa k sieti', sub: 'Zadarmo. Otvorené pre obe mestá. Pokračuje aj po roku 2028.'
      },
      sw: {
        h: 'V akom ste štádiu?',
        items: [
          { n: '01', title: 'Budujem podnik', body: 'Startup, impaktový MSP alebo nezisková organizácia pripravená rásť na druhom trhu.', cta: 'Objavte akcelerátor', href: '#accelerator' },
          { n: '02', title: 'Pracujem v ekosystéme alebo pre mesto', body: 'Hub, univerzita, investor, mestský odbor alebo mestský podnik.', cta: 'Staňte sa partnerom', href: '#partners' },
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
          { n: '02', title: 'Cezhraničný masterclass', forText: 'Pre podniky s vážnym plánom vstúpiť do druhého mesta', body: 'Deväť týždňov, jedna zmiešaná kohorta Viedeň–Bratislava, workshop v každom meste. Jadro akcelerátora: odchádzate s konkrétnym plánom expanzie a partnermi za hranicou.', cta: 'Ako funguje masterclass', href: '#accelerator' },
          { n: '03', title: 'Podpora pre scale-upy', forText: 'Pre vybrané podniky z masterclassu', body: 'Šesť mesiacov individuálnej podpory pri realizácii prvých cezhraničných krokov: pilotné projekty, partneri, zákazníci a financovanie.', cta: 'Ako prebieha výber', href: '#support' }
        ],
        cta1: 'Prihláste sa do akcelerátora', cta2: 'Sme pripravení škálovať? 2-minútový test'
      },
      events: {
        eyebrow: 'Podujatia', h2: 'Zistite, čo sa chystá.',
        lead: 'Online stretnutia, meetupy, Demo Days a študijné návštevy v oboch mestách. Väčšina je zadarmo. Príďte a zoznámte sa s ľuďmi, s ktorými budete spolupracovať.',
        all: 'Všetky podujatia', news: 'Najnovšie správy'
      },
      team: {
        eyebrow: 'Kto za tým stojí', h2: 'Spoznajte jedinečné partnerské konzorcium, ktoré stojí za TWICIIC.',
        body: 'Šesť organizácií, dve mestá, jeden tím: výskumné centrum, dve mestské agentúry, venture štúdio, prevádzkovateľ akcelerátora a impaktová sieť. Zoznámte sa s ľuďmi, ktorí vedú program, výskum a sieť.',
        cta1: 'Spoznajte partnerov', cta2: 'Objavte náš tím', media: 'Partnerské konzorcium TWICIIC na stretnutí v Bratislave, jún 2026.'
      },
      nl: { h2: 'Zostaňte v obraze.', body: 'Jeden e-mail mesačne: nové stretnutia, otvorené výzvy a to, čo sa učíme. Bez šumu.', ph: 'vas@email.com', cta: 'Prihlásiť sa na odber', done: 'Ďakujeme – ste prihlásení na odber.', label: 'E-mailová adresa' }
    },
    par: {
      hero: { eyebrow: 'O nás · Partneri', h1: 'Šesť partnerov. Dve mestá. Jeden tím.', sub: 'TWICIIC vedie šesť organizácií z Viedne a Bratislavy – každá prináša to, čo druhej strane chýba.' },
      list: [
        { name: 'ZSI – Centrum pre sociálne inovácie', city: 'Viedeň', side: 'vie', alt: 'l', role: 'Vedúci partner', body: 'Koordinuje projekt a vedie výskum, ktorý mapuje oba ekosystémy.', logo: 'assets/partners/zsi-c.png' },
        { name: 'Hlavné mesto SR Bratislava', city: B, side: 'ba', alt: 'r', role: 'Mestský partner, Slovensko', body: 'Otvára mesto a jeho mestské podniky pilotným projektom, vzájomnému učeniu a sieti.', logo: 'assets/partners/bratislava-c.png' },
        { name: 'Vienna Business Agency', city: 'Viedeň', side: 'vie', alt: 'l', role: 'Vedenie ekosystémových sietí', body: 'Vedie ekosystémové siete: meetupy, študijné návštevy a spoluprácu oboch miest.', logo: 'assets/partners/vienna-business-agency-c.png' },
        { name: 'Relevant Ventures', city: 'Viedeň', side: 'vie', alt: 'r', role: 'Komunikácia a podnikateľská podpora', body: 'Poskytuje podnikateľskú podporu v akcelerátore a vedie komunikáciu projektu.', logo: 'assets/partners/relevant.svg' },
        { name: 'CB ESPRI', city: B, side: 'ba', alt: 'l', role: 'Vedenie Twin City Accelerator', body: 'Navrhuje a vedie Twin City Accelerator vo všetkých troch fázach.', logo: 'assets/partners/cb-espri.svg' },
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
      cta: { h2: 'Chcete s nami spolupracovať?', body: 'Spoluorganizujte stretnutie, odporučte podnik, spustite pilotný projekt s mestom alebo sa pridajte k sieti.', b1: 'Staňte sa partnerom', b2: 'Pridajte sa k sieti' }
    },
    res: {
      hero: { eyebrow: 'O nás · Výskum', h1: 'Čo zisťujeme o Twin City.', sub: 'Skôr než akcelerujeme, mapujeme. Náš výskumný tím dokumentuje oba ekosystémy, aby zakladatelia, mestá a partneri vychádzali z rovnakých poznatkov.' },
      prog: { eyebrow: 'Vzniká', h2: 'Dve správy, obe v príprave.' },
      lbl: { method: 'Ako postupujeme', when: 'Kedy' },
      reports: [
        { n: '01', side: 'vie', type: 'Správa · v príprave', title: 'Mapovanie impaktového ekosystému Twin City', body: 'Kto podporuje impaktové podniky vo Viedni a v Bratislave a ako dobre sa obe strany poznajú: huby, investori, univerzity, podporné programy, mestskí aktéri.', method: 'Desk research, rozhovory s aktérmi ekosystému na oboch stranách, fokusové skupiny v každom meste.', when: 'Prvé zistenia v roku 2026', cta: 'Upozorniť ma na zverejnenie' },
        { n: '02', side: 'ba', type: 'Správa · v príprave', title: 'Čo impaktoví zakladatelia potrebujú, aby prekročili hranicu', body: 'Analýza potrieb so zakladateľmi, MSP a neziskovými organizáciami: investičná pripravenosť, cezhraničné know-how, právo a vstup na trh, meranie impaktu.', method: 'Rozhovory so zakladateľmi a validačný workshop so zakladateľmi a aktérmi ekosystému. Výsledky priamo formujú, čo akcelerátor učí.', when: 'Zistenia v roku 2026', cta: 'Zapojte sa do výskumu' }
      ],
      know: { eyebrow: 'Čo už vieme', h2: 'Štyri veci, ktoré ukázali už prvé rozhovory.' },
      k: [
        { n: '01', text: 'Viedenská impaktová scéna vyrástla, no hovorí najmä sama so sebou.' },
        { n: '02', text: 'Bratislavskí zakladatelia pracujú bez podporných štruktúr, ktoré sú vo Viedni samozrejmosťou.' },
        { n: '03', text: 'Ani jedna strana nemá spoľahlivý prehľad o tom, kto čo robí 55 km od nich.' },
        { n: '04', text: 'Medzery, ktoré zakladatelia menujú ako prvé: investičná pripravenosť a cezhraničné know-how.' }
      ],
      themesH: 'Témy, ktorým sa venujeme',
      themes: [{ text: 'Cezhraničná expanzia' }, { text: 'Meranie impaktu' }, { text: 'Financie a investičná pripravenosť' }, { text: 'Mestá a verejné inovácie' }, { text: 'Mapovanie ekosystému' }],
      watch: { h2: 'Nahrávky', body: 'Nahrávky stretnutí a záznamy webinárov tu budú počas programu postupne pribúdať.', ghost: 'Nahrávka · už čoskoro' },
      cta: { h2: 'Získajte zistenia ako prví.', body: 'Prihláste sa na odber a každú správu vám pošleme v deň jej zverejnenia – spolu s tromi zisteniami, na ktorých záleží najviac.', b1: 'Prihlásiť sa na odber', b2: 'Prispejte k výskumu', note: 'Stále vedieme rozhovory so zakladateľmi a aktérmi ekosystému v oboch mestách. Tridsať minút vášho času formuje, čo akcelerátor učí.' }
    },
    por: {
      hero: { eyebrow: 'O nás · Portfólio', h1: 'Podniky Twin City.', sub: 'Nájdete tu každý podnik, ktorý prejde programom Twin City Accelerator: čo robí, odkiaľ je a kam smeruje.' },
      empty: { label: 'Prvá kohorta sa pripravuje', h2: 'Prvá kohorta sa pripravuje.', body: 'Vyberáme podniky, ktoré vytvoria prvú cezhraničnú kohortu Twin City Accelerator. Portfólio zverejníme hneď, ako odštartujú.', cta1: 'Ako sa dostať do prvej kohorty', cta2: 'Zostať v kontakte', note: 'Prihlásiť sa môžu startupy, impaktové MSP a neziskové organizácie z Viedne a Bratislavy.' },
      soon: 'Čo tu nájdete',
      g: { logo: 'Logo podniku', name: 'Názov podniku', meta: 'Sektor · Mesto · Fáza', body: 'Jedna veta o tom, čo podnik robí – sloveso na začiatku.', example: 'Ukážkový záznam' },
      cta: { h2: 'Chcete byť na tejto stránke?', b1: 'Prihláste sa do akcelerátora' }
    },
    ev: {
      hero: { eyebrow: 'Podujatia a novinky', h1: 'Čo sa deje v Twin City.', sub: 'Stretnutia, meetupy, Demo Days a študijné návštevy vo Viedni, v Bratislave a online. A k tomu novinky z projektu.' },
      f: { up: 'Nadchádzajúce', past: 'Minulé', vie: 'Viedeň', ba: B, on: 'Online', inPerson: 'Prezenčne', tags: 'Filtrovať podľa typu', where: 'Filtrovať podľa miesta', clear: 'Zrušiť filtre' },
      types: { session: 'Online stretnutie', meetup: 'Meetup', demo: 'Demo Day', visit: 'Študijná návšteva', round: 'Okrúhly stôl' },
      upH: 'Nadchádzajúce',
      items: [
        { id: 'e1', typeKey: 'session', locKey: 'on', type: 'Online stretnutie', loc: 'Online', date: 'Termín upresníme', title: 'Ako budovať impaktový podnik pre dva trhy', body: 'Prvé otvorené stretnutie: čo sa zmení, keď sa váš domáci trh rozšíri na dve hlavné mestá, a ako zistiť, či sa vám to oplatí.', cta: 'Rezervovať miesto' },
        { id: 'e2', typeKey: 'meetup', locKey: 'vie', type: 'Meetup', loc: 'Viedeň', date: 'Termín upresníme', title: 'Twin City Pulse: spoznajte viedenskú scénu', body: 'Večer s viedenskými impaktovými zakladateľmi, hubmi a investormi – a s ľuďmi z Bratislavy, ktorí ich prišli stretnúť.', cta: 'Rezervovať miesto' },
        { id: 'e3', typeKey: 'meetup', locKey: 'ba', type: 'Meetup', loc: B, date: 'Termín upresníme', title: 'Twin City Pulse: spoznajte bratislavskú scénu', body: 'Ten istý večer, len naopak.', cta: 'Rezervovať miesto' },
        { id: 'e4', typeKey: 'round', locKey: 'vie', type: 'Okrúhly stôl', loc: 'Viedeň', date: 'Termín upresníme', title: 'Mestá ako partneri: čo mestské podniky potrebujú od impaktových podnikov', body: 'Pre mestské odbory, mestské podniky a podniky, ktoré s nimi chcú pilotovať.', cta: 'Požiadať o pozvánku' }
      ],
      none: 'Týmto filtrom zatiaľ nezodpovedá žiadne podujatie.',
      past: { h2: 'Minulé podujatia', body: 'Každé podujatie tu zostáva aj po skončení – s fotkami, nahrávkou a tým, čo z neho vzišlo.', ghost: 'Zhrnutie · už čoskoro' },
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
      about: 'TWICIIC – Twin City Impact Innovation Champion – prepája inovačné ekosystémy Viedne a Bratislavy. Prostredníctvom cezhraničného akcelerátora, ekosystémových podujatí a partnerstiev miest pomáha impaktovým startupom, MSP a neziskovým organizáciám rásť na oboch trhoch.',
      navH: 'Navigácia', touchH: 'Zostaňme v kontakte', touchBody: 'Newsletter, raz mesačne.', touchCta: 'Prihlásiť sa na odber', li: 'LinkedIn', contact: 'Kontaktujte nás',
      liEyebrow: 'Sledujte nás na LinkedIn', liText: 'Otvorené výzvy, workshopy a novinky z kohorty pravidelne zverejňujeme na LinkedIn.',
      partners: 'Partneri', fundH: 'Financovanie', fundLine: 'Spolufinancované Európskou úniou', fundProg: 'Interreg Slovensko–Rakúsko 2021–2027', fundRegion: 'Slovensko – Rakúsko',
      fundLong: 'Tento projekt je spolufinancovaný programom Interreg Slovensko–Rakúsko 2021–2027 z Európskeho fondu regionálneho rozvoja (EFRR).',
      copyright: '© 2026 TWICIIC. Všetky práva vyhradené.',
      legal: [{ text: 'Ochrana osobných údajov' }, { text: 'Impresum' }, { text: 'Prístupnosť' }, { text: 'Cookies' }]
    }
  };

  /* ---- Twin City Accelerator page copy (unchanged from the Accelerator design) ---- */
  var acc = {
    en: {
      nav: { home: 'Home', programme: 'Programme', readiness: 'Readiness check', partners: 'Partners', apply: 'Apply', menu: 'Menu', close: 'Close' },
      hero: { eyebrow: 'TWICIIC · Interreg Slovakia–Austria', title: 'Twin City Accelerator', sub: 'Cross-border growth programme for impact ventures scaling between Slovakia and Austria.', body: 'The Twin City Accelerator helps impact-oriented startups, SMEs, social enterprises and organisations prepare for growth between Bratislava and Vienna through online content, structured acceleration and tailored expert support.', readiness: 'Check your readiness to scale', starts: 'Programme starts', dateTbc: 'Date to be announced', startDate: '12 April 2027', cities: 'Vienna ↔ Bratislava', months: '6–8 months', vienna: 'Vienna' },
      fit: {
        yesTitle: 'This programme is for organisations that:',
        yes: [{ text: 'are impact-oriented,' }, { text: 'have traction, customers, users or validated demand,' }, { text: 'want to expand between Slovakia and Austria,' }, { text: 'can work in English,' }, { text: 'are ready to participate actively in the programme,' }, { text: 'look for access to relevant stakeholders and partners.' }],
        noTitle: 'It may not be the right fit yet if:',
        no: [{ text: 'you are still only at idea stage,' }, { text: 'you do not have a clear impact ambition,' }, { text: 'you are not considering cross-border growth,' }, { text: 'you cannot commit time to workshops and follow-up work.' }]
      },
      programme: {
        eyebrow: 'Programme overview', title: 'Your path through the programme',
        c1: { label: 'Stage 1 · Free & online', title: 'Check your readiness to scale', short: 'Free online content, case studies, readiness check', long: 'Introductory content, founder stories and a self-assessment tool to help you understand whether the accelerator is the right fit.', button: 'Am I ready to scale?' },
        c2: { label: 'Stage 2 · Core programme', title: 'Accelerate', short: '6–8 month cohort programme with workshops, coaching and Demo Day', long: 'A structured cohort programme focused on strategy, finance, impact, go-to-market, investment readiness and cross-border expansion.' },
        c3: { label: 'Stage 3 · Follow-on support', title: 'Receive additional support', short: 'Follow-on support for selected ventures ready for market entry, investment or partnerships', long: 'Bespoke follow-on support for selected ventures, including expert coaching, introductions and individual action plans.', button: 'Get in touch' }
      },
      benefits: {
        eyebrow: 'What you get', title: 'What you get by applying', lead: 'By joining the accelerator, you can work on:',
        items: [{ n: '01', text: 'Cross-border growth strategy' }, { n: '02', text: 'Go-to-market plan for Slovakia or Austria' }, { n: '03', text: 'Financial plan and funding need' }, { n: '04', text: 'Impact metrics and Theory of Change' }, { n: '05', text: 'Investor-ready pitch deck' }, { n: '06', text: 'Access to mentors, experts, cities and ecosystem partners' }, { n: '07', text: 'Demo Day with investors, partners and public-sector stakeholders' }, { n: '08', text: 'Study visits and expert sessions' }],
        caption: 'Cohort workshops take place in both cities.'
      },
      timeline: {
        eyebrow: 'Timeline', title: 'Accelerator programme timeline', lead: 'The accelerator programme runs over 6–8 months and combines in-person workshops, online sessions, expert clinics, coaching and a final Demo Day.', phases: 'Phases', workshops: 'Workshops',
        i1: { title: 'Pre-programme', desc: 'Onboarding + readiness check' }, i2: { title: 'Workshop 1', desc: 'In-person kick-off, diagnostic, clinics, ecosystem meetings' }, i3: { title: 'Online Phase 1', desc: 'Strategy, impact, finance, go-to-market' }, i4: { title: 'Workshop 2', desc: 'Online coaching intensive and pitch feedback' }, i5: { title: 'Online Phase 2', desc: 'Advanced modules + 1:1 coaching' }, i6: { title: 'Workshop 3 + Demo Day', desc: 'Pitch preparation, funder panel, public showcase' }
      },
      support: { eyebrow: 'Follow-on support', title: 'Take your growth to the next level', body: 'For selected high-potential ventures, the accelerator offers tailored follow-on support focused on turning cross-border ambition into concrete next steps. Whether you are preparing for market entry, investor conversations or strategic partnerships, we work with you individually to define your next milestone and connect you with the right expertise.', ready: 'Ready to move further?' },
      partners: {
        eyebrow: 'Consortium', title: "Who's behind the accelerator?", lead: 'The accelerator is developed by CB ESPRI, Relevant Ventures and TWICIIC project partners, connecting the Bratislava and Vienna impact ecosystems.',
        list: [
          { name: 'CB ESPRI', role: 'Accelerator development', city: 'Bratislava', variant: 'bratislava' }, { name: 'Relevant Ventures', role: 'Accelerator development', city: 'Vienna', variant: 'vienna' }, { name: 'Capital City of Bratislava', role: 'TWICIIC project partner', city: 'Bratislava', variant: 'bratislava' }, { name: 'Vienna Business Agency', role: 'TWICIIC project partner', city: 'Vienna', variant: 'vienna' }, { name: 'Impact Slovakia', role: 'TWICIIC project partner', city: 'Bratislava', variant: 'bratislava' }, { name: 'ZSI — Centre for Social Innovation', role: 'TWICIIC project partner', city: 'Vienna', variant: 'vienna' }
        ]
      },
      cta: { title: 'Ready to scale across the border?' },
      interreg: { eyebrow: 'Funded by', title: 'Funded by Interreg Slovakia–Austria', p1: 'TWICIIC — Twin City Impact Innovation Champion is a cross-border project co-financed by the Interreg Slovakia–Austria 2021–2027 Programme from the European Regional Development Fund (ERDF), running from November 2025 to September 2028.', p2: 'The main goal of TWICIIC is to strengthen impact innovation capacities in the region and between the cities of public and private innovation drivers. The project accelerates purpose-driven scale-ups in the Vienna–Bratislava region — enterprises with an impact mission that have moved beyond the prototype stage, are already on the market and are actively pursuing cross-border growth. TWICIIC provides structured peer learning, access to cross-border investor networks, and a joint Accelerator programme connecting the impact innovation ecosystems of both cities.', projects: 'Interreg projects', caption: 'Interreg Slovakia–Austria 2021–2027 · ERDF' }
    },
    de: {
      nav: { home: 'Start', programme: 'Programm', readiness: 'Readiness-Check', partners: 'Partner', apply: 'Bewerben', menu: 'Menü', close: 'Schließen' },
      hero: { eyebrow: 'TWICIIC · Interreg Slowakei–Österreich', title: 'Twin City Accelerator', sub: 'Grenzüberschreitendes Wachstumsprogramm für Impact-Ventures, die zwischen der Slowakei und Österreich skalieren.', body: 'Der Twin City Accelerator unterstützt wirkungsorientierte Start-ups, KMU, Sozialunternehmen und Organisationen dabei, sich auf Wachstum zwischen Bratislava und Wien vorzubereiten – mit Online-Inhalten, strukturierter Beschleunigung und maßgeschneiderter Expertenunterstützung.', readiness: 'Bereitschaft zur Skalierung prüfen', starts: 'Programmstart', dateTbc: 'Termin wird bekannt gegeben', startDate: '12. April 2027', cities: 'Wien ↔ Bratislava', months: '6–8 Monate', vienna: 'Wien' },
      fit: {
        yesTitle: 'Dieses Programm ist für Organisationen, die:',
        yes: [{ text: 'wirkungsorientiert sind,' }, { text: 'Traktion, Kund:innen, Nutzer:innen oder validierte Nachfrage haben,' }, { text: 'zwischen der Slowakei und Österreich expandieren wollen,' }, { text: 'auf Englisch arbeiten können,' }, { text: 'bereit sind, aktiv am Programm teilzunehmen,' }, { text: 'Zugang zu relevanten Stakeholdern und Partnern suchen.' }],
        noTitle: 'Es passt vielleicht noch nicht, wenn:',
        no: [{ text: 'Sie noch in der Ideenphase sind,' }, { text: 'Sie keine klare Impact-Ambition haben,' }, { text: 'Sie kein grenzüberschreitendes Wachstum anstreben,' }, { text: 'Sie keine Zeit für Workshops und Nacharbeit einplanen können.' }]
      },
      programme: {
        eyebrow: 'Programmüberblick', title: 'Ihr Weg durch das Programm',
        c1: { label: 'Phase 1 · Kostenlos & online', title: 'Bereitschaft zur Skalierung prüfen', short: 'Kostenlose Online-Inhalte, Fallstudien, Readiness-Check', long: 'Einführende Inhalte, Gründer:innen-Geschichten und ein Selbsttest, der zeigt, ob der Accelerator zu Ihnen passt.', button: 'Bin ich bereit zu skalieren?' },
        c2: { label: 'Phase 2 · Kernprogramm', title: 'Beschleunigen', short: '6–8-monatiges Kohortenprogramm mit Workshops, Coaching und Demo Day', long: 'Ein strukturiertes Kohortenprogramm mit Fokus auf Strategie, Finanzen, Impact, Go-to-Market, Investment Readiness und grenzüberschreitende Expansion.' },
        c3: { label: 'Phase 3 · Anschlussunterstützung', title: 'Zusätzliche Unterstützung erhalten', short: 'Anschlussunterstützung für ausgewählte Ventures, die bereit für Markteintritt, Investment oder Partnerschaften sind', long: 'Maßgeschneiderte Anschlussunterstützung für ausgewählte Ventures – mit Expert:innen-Coaching, Introductions und individuellen Aktionsplänen.', button: 'Kontakt aufnehmen' }
      },
      benefits: {
        eyebrow: 'Was Sie bekommen', title: 'Was Sie mit Ihrer Bewerbung gewinnen', lead: 'Im Accelerator arbeiten Sie an:',
        items: [{ n: '01', text: 'Grenzüberschreitende Wachstumsstrategie' }, { n: '02', text: 'Go-to-Market-Plan für die Slowakei oder Österreich' }, { n: '03', text: 'Finanzplan und Finanzierungsbedarf' }, { n: '04', text: 'Impact-Kennzahlen und Theory of Change' }, { n: '05', text: 'Investorenreifes Pitch Deck' }, { n: '06', text: 'Zugang zu Mentor:innen, Expert:innen, Städten und Ökosystempartnern' }, { n: '07', text: 'Demo Day mit Investor:innen, Partnern und Stakeholdern der öffentlichen Hand' }, { n: '08', text: 'Studienbesuche und Expert:innen-Sessions' }],
        caption: 'Die Kohorten-Workshops finden in beiden Städten statt.'
      },
      timeline: {
        eyebrow: 'Zeitplan', title: 'Zeitplan des Accelerator-Programms', lead: 'Das Accelerator-Programm läuft über 6–8 Monate und kombiniert Präsenz-Workshops, Online-Sessions, Expert:innen-Kliniken, Coaching und einen abschließenden Demo Day.', phases: 'Phasen', workshops: 'Workshops',
        i1: { title: 'Vorprogramm', desc: 'Onboarding + Readiness-Check' }, i2: { title: 'Workshop 1', desc: 'Kick-off vor Ort, Diagnose, Kliniken, Ökosystem-Treffen' }, i3: { title: 'Online-Phase 1', desc: 'Strategie, Impact, Finanzen, Go-to-Market' }, i4: { title: 'Workshop 2', desc: 'Online-Coaching-Intensiv und Pitch-Feedback' }, i5: { title: 'Online-Phase 2', desc: 'Vertiefende Module + 1:1-Coaching' }, i6: { title: 'Workshop 3 + Demo Day', desc: 'Pitch-Vorbereitung, Funder-Panel, öffentliche Präsentation' }
      },
      support: { eyebrow: 'Anschlussunterstützung', title: 'Bringen Sie Ihr Wachstum auf die nächste Stufe', body: 'Für ausgewählte Ventures mit hohem Potenzial bietet der Accelerator maßgeschneiderte Anschlussunterstützung, die grenzüberschreitende Ambitionen in konkrete nächste Schritte übersetzt. Ob Markteintritt, Investorengespräche oder strategische Partnerschaften – wir arbeiten individuell mit Ihnen, definieren Ihren nächsten Meilenstein und verbinden Sie mit der passenden Expertise.', ready: 'Bereit für den nächsten Schritt?' },
      partners: {
        eyebrow: 'Konsortium', title: 'Wer steht hinter dem Accelerator?', lead: 'Der Accelerator wird von CB ESPRI, Relevant Ventures und den TWICIIC-Projektpartnern entwickelt und verbindet die Impact-Ökosysteme von Bratislava und Wien.',
        list: [
          { name: 'CB ESPRI', role: 'Accelerator-Entwicklung', city: 'Bratislava', variant: 'bratislava' }, { name: 'Relevant Ventures', role: 'Accelerator-Entwicklung', city: 'Wien', variant: 'vienna' }, { name: 'Hauptstadt Bratislava', role: 'TWICIIC-Projektpartner', city: 'Bratislava', variant: 'bratislava' }, { name: 'Vienna Business Agency', role: 'TWICIIC-Projektpartner', city: 'Wien', variant: 'vienna' }, { name: 'Impact Slovakia', role: 'TWICIIC-Projektpartner', city: 'Bratislava', variant: 'bratislava' }, { name: 'ZSI — Zentrum für Soziale Innovation', role: 'TWICIIC-Projektpartner', city: 'Wien', variant: 'vienna' }
        ]
      },
      cta: { title: 'Bereit, über die Grenze zu skalieren?' },
      interreg: { eyebrow: 'Gefördert durch', title: 'Gefördert durch Interreg Slowakei–Österreich', p1: 'TWICIIC — Twin City Impact Innovation Champion ist ein grenzüberschreitendes Projekt, kofinanziert vom Programm Interreg Slowakei–Österreich 2021–2027 aus dem Europäischen Fonds für regionale Entwicklung (EFRE), mit einer Laufzeit von November 2025 bis September 2028.', p2: 'Hauptziel von TWICIIC ist es, die Impact-Innovationskapazitäten in der Region und zwischen den Städten – bei öffentlichen wie privaten Innovationsakteuren – zu stärken. Das Projekt beschleunigt zweckorientierte Scale-ups in der Region Wien–Bratislava: Unternehmen mit einer Impact-Mission, die die Prototypphase hinter sich haben, bereits am Markt sind und aktiv grenzüberschreitendes Wachstum verfolgen. TWICIIC bietet strukturiertes Peer-Learning, Zugang zu grenzüberschreitenden Investorennetzwerken und ein gemeinsames Accelerator-Programm, das die Impact-Innovationsökosysteme beider Städte verbindet.', projects: 'Interreg-Projekte', caption: 'Interreg Slowakei–Österreich 2021–2027 · EFRE' }
    },
    sk: {
      nav: { home: 'Domov', programme: 'Program', readiness: 'Test pripravenosti', partners: 'Partneri', apply: 'Prihlásiť sa', menu: 'Menu', close: 'Zavrieť' },
      hero: { eyebrow: 'TWICIIC · Interreg Slovensko–Rakúsko', title: 'Twin City Accelerator', sub: 'Cezhraničný rastový program pre impaktové podniky, ktoré rastú medzi Slovenskom a Rakúskom.', body: 'Twin City Accelerator pomáha impaktovo orientovaným startupom, MSP, sociálnym podnikom a organizáciám pripraviť sa na rast medzi Bratislavou a Viedňou prostredníctvom online obsahu, štruktúrovanej akcelerácie a expertnej podpory na mieru.', readiness: 'Overte si pripravenosť na škálovanie', starts: 'Začiatok programu', dateTbc: 'Termín bude oznámený', startDate: '12. apríla 2027', cities: 'Viedeň ↔ Bratislava', months: '6–8 mesiacov', vienna: 'Viedeň' },
      fit: {
        yesTitle: 'Tento program je pre organizácie, ktoré:',
        yes: [{ text: 'sú impaktovo orientované,' }, { text: 'majú trakciu, zákazníkov, používateľov alebo overený dopyt,' }, { text: 'chcú expandovať medzi Slovenskom a Rakúskom,' }, { text: 'vedia pracovať v angličtine,' }, { text: 'sú pripravené aktívne sa zapojiť do programu,' }, { text: 'hľadajú prístup k relevantným partnerom a aktérom ekosystému.' }],
        noTitle: 'Možno to ešte nie je to pravé, ak:',
        no: [{ text: 'ste ešte len vo fáze nápadu,' }, { text: 'nemáte jasnú impaktovú ambíciu,' }, { text: 'neuvažujete o cezhraničnom raste,' }, { text: 'nemôžete si vyhradiť čas na workshopy a následnú prácu.' }]
      },
      programme: {
        eyebrow: 'Prehľad programu', title: 'Vaša cesta programom',
        c1: { label: 'Fáza 1 · Zadarmo a online', title: 'Overte si pripravenosť na škálovanie', short: 'Bezplatný online obsah, prípadové štúdie, test pripravenosti', long: 'Úvodný obsah, príbehy zakladateľov a nástroj sebahodnotenia, ktorý vám pomôže zistiť, či je akcelerátor pre vás to pravé.', button: 'Sme pripravení škálovať?' },
        c2: { label: 'Fáza 2 · Hlavný program', title: 'Akcelerujte', short: '6–8-mesačný kohortový program s workshopmi, koučingom a Demo Day', long: 'Štruktúrovaný kohortový program zameraný na stratégiu, financie, impakt, go-to-market, investičnú pripravenosť a cezhraničnú expanziu.' },
        c3: { label: 'Fáza 3 · Následná podpora', title: 'Získajte ďalšiu podporu', short: 'Následná podpora pre vybrané podniky pripravené na vstup na trh, investíciu alebo partnerstvá', long: 'Následná podpora na mieru pre vybrané podniky vrátane expertného koučingu, prepojení a individuálnych akčných plánov.', button: 'Kontaktujte nás' }
      },
      benefits: {
        eyebrow: 'Čo získate', title: 'Čo vám účasť prinesie', lead: 'V akcelerátore môžete pracovať na:',
        items: [{ n: '01', text: 'Cezhraničná rastová stratégia' }, { n: '02', text: 'Go-to-market plán pre Slovensko alebo Rakúsko' }, { n: '03', text: 'Finančný plán a potreba financovania' }, { n: '04', text: 'Metriky impaktu a Theory of Change' }, { n: '05', text: 'Pitch deck pripravený pre investorov' }, { n: '06', text: 'Prístup k mentorom, expertom, mestám a partnerom ekosystému' }, { n: '07', text: 'Demo Day s investormi, partnermi a zástupcami verejného sektora' }, { n: '08', text: 'Študijné návštevy a expertné stretnutia' }],
        caption: 'Workshopy kohorty sa konajú v oboch mestách.'
      },
      timeline: {
        eyebrow: 'Časový plán', title: 'Časový plán akceleračného programu', lead: 'Akceleračný program trvá 6–8 mesiacov a kombinuje prezenčné workshopy, online stretnutia, expertné kliniky, koučing a záverečný Demo Day.', phases: 'Fázy', workshops: 'Workshopy',
        i1: { title: 'Pred programom', desc: 'Onboarding + test pripravenosti' }, i2: { title: 'Workshop 1', desc: 'Prezenčný kick-off, diagnostika, kliniky, stretnutia s ekosystémom' }, i3: { title: 'Online fáza 1', desc: 'Stratégia, impakt, financie, go-to-market' }, i4: { title: 'Workshop 2', desc: 'Intenzívny online koučing a spätná väzba k pitchu' }, i5: { title: 'Online fáza 2', desc: 'Pokročilé moduly + individuálny koučing' }, i6: { title: 'Workshop 3 + Demo Day', desc: 'Príprava pitchu, panel investorov, verejná prezentácia' }
      },
      support: { eyebrow: 'Následná podpora', title: 'Posuňte svoj rast na ďalšiu úroveň', body: 'Vybraným podnikom s vysokým potenciálom ponúka akcelerátor následnú podporu na mieru, ktorá premení cezhraničné ambície na konkrétne ďalšie kroky. Či sa pripravujete na vstup na trh, rozhovory s investormi alebo strategické partnerstvá, pracujeme s vami individuálne, definujeme váš ďalší míľnik a prepojíme vás so správnou expertízou.', ready: 'Pripravení ísť ďalej?' },
      partners: {
        eyebrow: 'Konzorcium', title: 'Kto stojí za akcelerátorom?', lead: 'Akcelerátor vyvíjajú CB ESPRI, Relevant Ventures a projektoví partneri TWICIIC a prepája impaktové ekosystémy Bratislavy a Viedne.',
        list: [
          { name: 'CB ESPRI', role: 'Vývoj akcelerátora', city: 'Bratislava', variant: 'bratislava' }, { name: 'Relevant Ventures', role: 'Vývoj akcelerátora', city: 'Viedeň', variant: 'vienna' }, { name: 'Hlavné mesto SR Bratislava', role: 'Projektový partner TWICIIC', city: 'Bratislava', variant: 'bratislava' }, { name: 'Vienna Business Agency', role: 'Projektový partner TWICIIC', city: 'Viedeň', variant: 'vienna' }, { name: 'Impact Slovakia', role: 'Projektový partner TWICIIC', city: 'Bratislava', variant: 'bratislava' }, { name: 'ZSI — Centrum pre sociálne inovácie', role: 'Projektový partner TWICIIC', city: 'Viedeň', variant: 'vienna' }
        ]
      },
      cta: { title: 'Pripravení rásť cez hranicu?' },
      interreg: { eyebrow: 'Financované z', title: 'Financované programom Interreg Slovensko–Rakúsko', p1: 'TWICIIC — Twin City Impact Innovation Champion je cezhraničný projekt spolufinancovaný programom Interreg Slovensko–Rakúsko 2021–2027 z Európskeho fondu regionálneho rozvoja (EFRR), ktorý prebieha od novembra 2025 do septembra 2028.', p2: 'Hlavným cieľom TWICIIC je posilniť kapacity impaktových inovácií v regióne a medzi mestami – u verejných aj súkromných aktérov inovácií. Projekt akceleruje scale-upy s pozitívnym dopadom v regióne Viedeň–Bratislava: podniky s impaktovou misiou, ktoré prekonali fázu prototypu, sú už na trhu a aktívne sa usilujú o cezhraničný rast. TWICIIC poskytuje štruktúrované vzájomné učenie, prístup k cezhraničným investorským sieťam a spoločný akceleračný program prepájajúci ekosystémy impaktových inovácií oboch miest.', projects: 'Projekty Interreg', caption: 'Interreg Slovensko–Rakúsko 2021–2027 · EFRR' }
    }
  };

  en.acc = acc.en; de.acc = acc.de; sk.acc = acc.sk;
  var rdy = window.TWICIIC_READINESS || {};
  en.rdy = rdy.en; de.rdy = rdy.de; sk.rdy = rdy.sk;
  window.TWICIIC_CONTENT = { en: en, de: de, sk: sk };
  try { window.dispatchEvent(new CustomEvent('twiciic-content')); } catch (e) { /* no-op */ }
})();
