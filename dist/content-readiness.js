/* Readiness check (Accelerator · Stage 1) — page copy in en / de / sk. Merged into TWICIIC_CONTENT by content.js. */
(function () {
  var yn = function (y, n) { return [{ text: y }, { text: n }]; };
  var en = {
    title: 'Readiness check',
    hero: { eyebrow: 'Twin City Accelerator · Stage 1 · Free & online', h1: 'Learn & check your readiness to scale.', sub: 'Start here if you want to understand whether cross-border growth between Slovakia and Austria is the right next step for your venture.', cta1: 'Am I ready to scale?', cta2: 'Browse the content', facts: '8 questions · about 2 minutes · no sign-up' },
    journey: {
      eyebrow: 'How it works', h2: 'Start your Twin City Accelerator journey.',
      body: 'This is the open entry point to the Twin City Accelerator. It gives you access to short learning content and a tool that helps you understand whether you are ready for the next stage of the programme.',
      steps: [
        { n: '01', t: 'Learn', d: 'Six short modules on the two ecosystems, the founders who crossed the border and what the programme asks of you.' },
        { n: '02', t: 'Check', d: 'Eight questions, two minutes. Four on eligibility, four on readiness — with an honest recommendation at the end.' },
        { n: '03', t: 'Decide', d: 'Apply to the core programme, book a ten-minute call with us, or keep learning until the next round.' }
      ]
    },
    learn: {
      eyebrow: 'Learning content', h2: 'Start with the basics.', moreEyebrow: 'Go deeper', moreH2: 'What the core programme looks like.', status: 'In preparation',
      modules: [
        { n: '01', fmt: 'Article', title: 'Why Vienna–Bratislava? Your cross-border growth opportunity', topics: [{ text: 'Why the Vienna–Bratislava region is unique' }, { text: 'Why impact ventures should think cross-border early' }, { text: 'The opportunity of two connected ecosystems' }, { text: 'Why now' }] },
        { n: '02', fmt: 'Founder stories', title: 'Success stories: how founders expanded across the border', topics: [{ text: 'A Slovak startup expanding to Austria' }, { text: 'An Austrian startup expanding to Slovakia' }, { text: 'Challenges, benefits and lessons learned' }, { text: 'What worked, what did not — and would they do it again?' }] },
        { n: '03', fmt: 'Guide', title: 'Is the Twin City Accelerator the right fit for you?', topics: [{ text: 'Who should apply — and who should not, yet' }, { text: 'What stage participants should be at' }, { text: 'Eligibility criteria and what makes a strong fit' }, { text: 'How the self-assessment scores and where each result leads' }] },
        { n: '04', fmt: 'Programme', title: 'What you get in the core programme', topics: [{ text: 'The full 6–8 month structure: phases, workshops, online content, coaching' }, { text: 'Meeting locations, alternating between Vienna and Bratislava' }, { text: 'Mentoring, cross-border support, ecosystem access, investment readiness' }, { text: 'Timeline and phases at a glance' }] },
        { n: '05', fmt: 'Video · ≤ 10 min', title: 'Expert content: foundations of scaling an impact venture', topics: [{ text: 'Unit economics for founders' }, { text: 'Cross-border market entry basics' }, { text: 'Building partnerships across borders' }, { text: 'Fundraising in Austria and Slovakia' }, { text: 'Impact measurement basics' }] },
        { n: '06', fmt: 'Team', title: 'Meet the team', topics: [{ text: 'The people behind the accelerator at CB ESPRI and Relevant Ventures' }, { text: 'Who they are and what they bring' }, { text: 'Why they care about cross-border impact' }] }
      ]
    },
    check: {
      eyebrow: 'Self-assessment · 2 minutes', h2: 'Map your journey — should you cross the Danube?',
      lead: 'Eight quick questions. The first four tell us whether the accelerator is open to you, the next four how ready you are. You get an honest recommendation instantly — nothing is sent anywhere unless you choose to.',
      part1: 'Part 1 · Eligibility', part2: 'Part 2 · Readiness', back: 'Back', restart: 'Start over', keys: 'Tip: press the key shown to answer',
      map: { eyebrow: 'Your map', from: 'Vienna', to: 'Bratislava', question: 'Question', complete: 'Map complete', elig: 'Eligibility', ready: 'Readiness', pending: 'Answer the questions and your map fills in as you go.', done: 'Your recommendation is on the left.' },
      gateLabels: [{ text: 'Organisation' }, { text: 'Impact' }, { text: 'Region' }, { text: 'Cross-border' }],
      dims: { stage: 'Stage', impact: 'Impact', border: 'Cross-border plans', team: 'Commitment' },
      questions: [
        { part: 1, q: 'Is your organisation a startup, SME, NGO, social enterprise or another organisation developing a scalable solution?', help: 'Any legal form works — what matters is a solution that can grow.', opts: yn('Yes', 'No') },
        { part: 1, q: 'Is a clear social or environmental impact part of your core activities?', help: 'Not a side project — the impact sits in what you sell or deliver.', opts: yn('Yes', 'No') },
        { part: 1, q: 'Are you based in, or actively operating in, the Vienna or Bratislava region?', help: 'The programme is co-funded by Interreg Slovakia–Austria and open to ventures active in the two capital regions.', opts: yn('Yes', 'No') },
        { part: 1, q: 'Do you want to expand or collaborate across the Austria–Slovakia border in the next 12–24 months?', help: 'Customers, partners, pilots or a legal entity on the other side all count.', opts: yn('Yes', 'No') },
        { part: 2, dim: 'stage', q: 'Where is your solution today?', help: '', opts: [{ text: 'Idea or prototype — not on the market yet' }, { text: 'On the market with first customers or users' }, { text: 'Growing: repeat customers, revenue or validated demand' }] },
        { part: 2, dim: 'impact', q: 'How do you work with your impact?', help: '', opts: [{ text: 'We have an ambition, but no defined goals yet' }, { text: 'We have defined impact goals' }, { text: 'We measure impact against metrics or a Theory of Change' }] },
        { part: 2, dim: 'border', q: 'How concrete are your cross-border plans?', help: '', opts: [{ text: 'We are curious — nothing concrete yet' }, { text: 'We have researched the other market or had first conversations' }, { text: 'We have a plan, first partners or customers across the border' }] },
        { part: 2, dim: 'team', q: 'Can your team commit to a 6–8 month programme in English, with workshops in both cities?', help: '', opts: [{ text: 'Not at the moment' }, { text: 'Probably, with some planning' }, { text: 'Yes — a decision-maker will take part' }] }
      ],
      result: {
        eyebrow: 'Your result', breakdown: 'Your readiness in detail', why: 'Why',
        apply: { t: 'You are ready to cross. Apply to the accelerator.', b: 'Your answers match what the programme is built for: an impact venture on the market, concrete cross-border ambition and a team that can commit.', p: 'Apply', s: 'Book a 10-minute call' },
        talk: { t: 'Almost there — let’s talk.', b: 'You are eligible, and a few areas would benefit from sharpening before the cohort starts. In a ten-minute call we will tell you honestly whether to apply now or aim for the next round.', p: 'Book a 10-minute call', s: 'Apply anyway' },
        learn: { t: 'Not yet — start with the content.', b: 'You are eligible, but the accelerator works best once a venture is on the market with concrete cross-border plans. The free modules are built for exactly this stage, and the next round is a real option.', p: 'Explore the content', s: 'Book a 10-minute call' },
        no: { t: 'The accelerator is not the right fit yet.', b: 'The free content is open to everyone, and our events are the easiest way to get to know both ecosystems.', p: 'Explore the content', s: 'See events' },
        gates: [
          { text: 'The programme is designed for organisations developing a scalable solution.' },
          { text: 'A clear social or environmental impact at the core is a condition of the funding.' },
          { text: 'The programme is funded for ventures active in the Vienna or Bratislava region.' },
          { text: 'Cross-border growth is the heart of the programme — without it, other support fits better.' }
        ],
        tips: { stage: 'Get to first customers or users before the cohort starts — modules 01 and 04 show what the programme expects.', impact: 'Define two or three impact metrics — module 05 covers the basics of impact measurement.', border: 'Map the other market first — module 01 is the place to start.', team: 'Block the workshop dates early; the cohort works in English and meets in both cities.' },
        email: { label: 'Email me this result and the reading list', placeholder: 'name@company.com', button: 'Send', done: 'Thanks — your result is on its way.', note: 'One email, no newsletter unless you ask for it.' }
      }
    },
    cta: { h2: 'Ready to scale across the border?', b1: 'Apply', b2: 'Am I ready to scale?' }
  };

  var de = {
    title: 'Readiness-Check',
    hero: { eyebrow: 'Twin City Accelerator · Phase 1 · Kostenlos & online', h1: 'Lernen & Bereitschaft zur Skalierung prüfen.', sub: 'Starten Sie hier, wenn Sie verstehen möchten, ob grenzüberschreitendes Wachstum zwischen der Slowakei und Österreich der richtige nächste Schritt für Ihr Venture ist.', cta1: 'Bin ich bereit zu skalieren?', cta2: 'Inhalte ansehen', facts: '8 Fragen · etwa 2 Minuten · keine Anmeldung' },
    journey: {
      eyebrow: 'So funktioniert es', h2: 'Starten Sie Ihre Twin City Accelerator Journey.',
      body: 'Das ist der offene Einstieg in den Twin City Accelerator. Sie erhalten Zugang zu kurzen Lerninhalten und einem Tool, das Ihnen zeigt, ob Sie für die nächste Phase des Programms bereit sind.',
      steps: [
        { n: '01', t: 'Lernen', d: 'Sechs kurze Module zu den beiden Ökosystemen, zu Gründer:innen, die die Grenze überschritten haben, und dazu, was das Programm von Ihnen verlangt.' },
        { n: '02', t: 'Prüfen', d: 'Acht Fragen, zwei Minuten. Vier zur Förderfähigkeit, vier zur Readiness – mit einer ehrlichen Empfehlung am Ende.' },
        { n: '03', t: 'Entscheiden', d: 'Bewerben Sie sich für das Kernprogramm, buchen Sie ein zehnminütiges Gespräch mit uns oder lernen Sie bis zur nächsten Runde weiter.' }
      ]
    },
    learn: {
      eyebrow: 'Lerninhalte', h2: 'Beginnen Sie mit den Grundlagen.', moreEyebrow: 'Tiefer einsteigen', moreH2: 'So sieht das Kernprogramm aus.', status: 'In Vorbereitung',
      modules: [
        { n: '01', fmt: 'Artikel', title: 'Warum Wien–Bratislava? Ihre grenzüberschreitende Wachstumschance', topics: [{ text: 'Was die Region Wien–Bratislava einzigartig macht' }, { text: 'Warum Impact-Ventures früh grenzüberschreitend denken sollten' }, { text: 'Die Chance zweier verbundener Ökosysteme' }, { text: 'Warum jetzt' }] },
        { n: '02', fmt: 'Gründer:innen-Geschichten', title: 'Erfolgsgeschichten: Wie Gründer:innen über die Grenze expandiert sind', topics: [{ text: 'Ein slowakisches Start-up expandiert nach Österreich' }, { text: 'Ein österreichisches Start-up expandiert in die Slowakei' }, { text: 'Herausforderungen, Nutzen und Learnings' }, { text: 'Was funktioniert hat, was nicht – und würden sie es wieder tun?' }] },
        { n: '03', fmt: 'Leitfaden', title: 'Ist der Twin City Accelerator das Richtige für Sie?', topics: [{ text: 'Wer sich bewerben sollte – und wer noch nicht' }, { text: 'In welcher Phase Teilnehmende sein sollten' }, { text: 'Förderkriterien und was einen starken Fit ausmacht' }, { text: 'Wie die Selbsteinschätzung bewertet und wohin jedes Ergebnis führt' }] },
        { n: '04', fmt: 'Programm', title: 'Was Sie im Kernprogramm bekommen', topics: [{ text: 'Die gesamte 6–8-monatige Struktur: Phasen, Workshops, Online-Inhalte, Coaching' }, { text: 'Veranstaltungsorte im Wechsel zwischen Wien und Bratislava' }, { text: 'Mentoring, grenzüberschreitende Unterstützung, Zugang zum Ökosystem, Investment Readiness' }, { text: 'Zeitplan und Phasen auf einen Blick' }] },
        { n: '05', fmt: 'Video · ≤ 10 Min.', title: 'Expert:innen-Inhalte: Grundlagen der Skalierung eines Impact-Ventures', topics: [{ text: 'Unit Economics für Gründer:innen' }, { text: 'Grundlagen des grenzüberschreitenden Markteintritts' }, { text: 'Partnerschaften über Grenzen aufbauen' }, { text: 'Fundraising in Österreich und der Slowakei' }, { text: 'Grundlagen der Wirkungsmessung' }] },
        { n: '06', fmt: 'Team', title: 'Das Team kennenlernen', topics: [{ text: 'Die Menschen hinter dem Accelerator bei CB ESPRI und Relevant Ventures' }, { text: 'Wer sie sind und was sie mitbringen' }, { text: 'Warum ihnen grenzüberschreitender Impact wichtig ist' }] }
      ]
    },
    check: {
      eyebrow: 'Selbsteinschätzung · 2 Minuten', h2: 'Zeichnen Sie Ihre Route – sollten Sie die Donau überqueren?',
      lead: 'Acht kurze Fragen. Die ersten vier zeigen, ob der Accelerator für Sie offen ist, die nächsten vier, wie bereit Sie sind. Sie erhalten sofort eine ehrliche Empfehlung – nichts wird verschickt, außer Sie möchten es.',
      part1: 'Teil 1 · Förderfähigkeit', part2: 'Teil 2 · Readiness', back: 'Zurück', restart: 'Neu starten', keys: 'Tipp: Antworten Sie mit der angezeigten Taste',
      map: { eyebrow: 'Ihre Karte', from: 'Wien', to: 'Bratislava', question: 'Frage', complete: 'Karte vollständig', elig: 'Förderfähigkeit', ready: 'Readiness', pending: 'Beantworten Sie die Fragen – Ihre Karte füllt sich Schritt für Schritt.', done: 'Ihre Empfehlung steht links.' },
      gateLabels: [{ text: 'Organisation' }, { text: 'Impact' }, { text: 'Region' }, { text: 'Grenzüberschreitend' }],
      dims: { stage: 'Phase', impact: 'Impact', border: 'Grenzüberschreitende Pläne', team: 'Commitment' },
      questions: [
        { part: 1, q: 'Ist Ihre Organisation ein Start-up, KMU, eine NGO, ein Sozialunternehmen oder eine andere Organisation, die eine skalierbare Lösung entwickelt?', help: 'Die Rechtsform ist zweitrangig – entscheidend ist eine Lösung, die wachsen kann.', opts: yn('Ja', 'Nein') },
        { part: 1, q: 'Ist eine klare soziale oder ökologische Wirkung Teil Ihrer Kerntätigkeit?', help: 'Kein Nebenprojekt – die Wirkung steckt in dem, was Sie verkaufen oder leisten.', opts: yn('Ja', 'Nein') },
        { part: 1, q: 'Sind Sie in der Region Wien oder Bratislava ansässig oder dort aktiv tätig?', help: 'Das Programm wird von Interreg Slowakei–Österreich kofinanziert und steht Ventures offen, die in den beiden Hauptstadtregionen aktiv sind.', opts: yn('Ja', 'Nein') },
        { part: 1, q: 'Möchten Sie in den nächsten 12–24 Monaten über die österreichisch-slowakische Grenze expandieren oder kooperieren?', help: 'Kund:innen, Partner, Pilotprojekte oder eine Gesellschaft auf der anderen Seite zählen alle.', opts: yn('Ja', 'Nein') },
        { part: 2, dim: 'stage', q: 'Wo steht Ihre Lösung heute?', help: '', opts: [{ text: 'Idee oder Prototyp – noch nicht am Markt' }, { text: 'Am Markt mit ersten Kund:innen oder Nutzer:innen' }, { text: 'Im Wachstum: wiederkehrende Kund:innen, Umsatz oder validierte Nachfrage' }] },
        { part: 2, dim: 'impact', q: 'Wie arbeiten Sie mit Ihrer Wirkung?', help: '', opts: [{ text: 'Wir haben eine Ambition, aber noch keine definierten Ziele' }, { text: 'Wir haben definierte Wirkungsziele' }, { text: 'Wir messen Wirkung anhand von Kennzahlen oder einer Theory of Change' }] },
        { part: 2, dim: 'border', q: 'Wie konkret sind Ihre grenzüberschreitenden Pläne?', help: '', opts: [{ text: 'Wir sind neugierig – noch nichts Konkretes' }, { text: 'Wir haben den anderen Markt recherchiert oder erste Gespräche geführt' }, { text: 'Wir haben einen Plan, erste Partner oder Kund:innen jenseits der Grenze' }] },
        { part: 2, dim: 'team', q: 'Kann sich Ihr Team auf ein 6–8-monatiges Programm auf Englisch mit Workshops in beiden Städten einlassen?', help: '', opts: [{ text: 'Derzeit nicht' }, { text: 'Wahrscheinlich, mit etwas Planung' }, { text: 'Ja – eine Entscheidungsträger:in nimmt teil' }] }
      ],
      result: {
        eyebrow: 'Ihr Ergebnis', breakdown: 'Ihre Readiness im Detail', why: 'Warum',
        apply: { t: 'Sie sind bereit für die Überquerung. Bewerben Sie sich für den Accelerator.', b: 'Ihre Antworten passen zu dem, wofür das Programm gebaut ist: ein Impact-Venture am Markt, konkrete grenzüberschreitende Ambition und ein Team, das sich einlassen kann.', p: 'Bewerben', s: '10-Minuten-Gespräch buchen' },
        talk: { t: 'Fast geschafft – lassen Sie uns sprechen.', b: 'Sie sind förderfähig, und einige Bereiche würden vor Kohortenstart von einer Schärfung profitieren. In einem zehnminütigen Gespräch sagen wir Ihnen ehrlich, ob Sie sich jetzt bewerben oder die nächste Runde anpeilen sollten.', p: '10-Minuten-Gespräch buchen', s: 'Trotzdem bewerben' },
        learn: { t: 'Noch nicht – starten Sie mit den Inhalten.', b: 'Sie sind förderfähig, aber der Accelerator wirkt am besten, wenn ein Venture am Markt ist und konkrete grenzüberschreitende Pläne hat. Die kostenlosen Module sind genau für diese Phase gemacht – und die nächste Runde ist eine echte Option.', p: 'Inhalte entdecken', s: '10-Minuten-Gespräch buchen' },
        no: { t: 'Der Accelerator ist noch nicht das Richtige.', b: 'Die kostenlosen Inhalte stehen allen offen, und unsere Events sind der einfachste Weg, beide Ökosysteme kennenzulernen.', p: 'Inhalte entdecken', s: 'Events ansehen' },
        gates: [
          { text: 'Das Programm richtet sich an Organisationen, die eine skalierbare Lösung entwickeln.' },
          { text: 'Eine klare soziale oder ökologische Wirkung im Kern ist Bedingung der Förderung.' },
          { text: 'Das Programm ist für Ventures gefördert, die in der Region Wien oder Bratislava aktiv sind.' },
          { text: 'Grenzüberschreitendes Wachstum ist das Herz des Programms – ohne dieses passt andere Unterstützung besser.' }
        ],
        tips: { stage: 'Gewinnen Sie erste Kund:innen oder Nutzer:innen vor Kohortenstart – Module 01 und 04 zeigen, was das Programm erwartet.', impact: 'Definieren Sie zwei oder drei Wirkungskennzahlen – Modul 05 behandelt die Grundlagen der Wirkungsmessung.', border: 'Kartieren Sie zuerst den anderen Markt – Modul 01 ist der richtige Einstieg.', team: 'Blocken Sie die Workshop-Termine früh; die Kohorte arbeitet auf Englisch und trifft sich in beiden Städten.' },
        email: { label: 'Ergebnis und Leseliste per E-Mail erhalten', placeholder: 'name@unternehmen.at', button: 'Senden', done: 'Danke – Ihr Ergebnis ist unterwegs.', note: 'Eine E-Mail, kein Newsletter, außer Sie wünschen ihn.' }
      }
    },
    cta: { h2: 'Bereit, über die Grenze zu skalieren?', b1: 'Bewerben', b2: 'Bin ich bereit zu skalieren?' }
  };

  var sk = {
    title: 'Test pripravenosti',
    hero: { eyebrow: 'Twin City Accelerator · Fáza 1 · Zadarmo & online', h1: 'Učte sa & overte si pripravenosť na škálovanie.', sub: 'Začnite tu, ak chcete zistiť, či je cezhraničný rast medzi Slovenskom a Rakúskom správnym ďalším krokom pre váš podnik.', cta1: 'Som pripravený škálovať?', cta2: 'Prezrieť obsah', facts: '8 otázok · približne 2 minúty · bez registrácie' },
    journey: {
      eyebrow: 'Ako to funguje', h2: 'Začnite svoju cestu s Twin City Accelerator.',
      body: 'Toto je otvorený vstupný bod do Twin City Accelerator. Získate prístup ku krátkemu vzdelávaciemu obsahu a nástroju, ktorý vám pomôže zistiť, či ste pripravení na ďalšiu fázu programu.',
      steps: [
        { n: '01', t: 'Učte sa', d: 'Šesť krátkych modulov o oboch ekosystémoch, o zakladateľoch, ktorí prekročili hranicu, a o tom, čo od vás program vyžaduje.' },
        { n: '02', t: 'Overte si', d: 'Osem otázok, dve minúty. Štyri o oprávnenosti, štyri o pripravenosti – s úprimným odporúčaním na konci.' },
        { n: '03', t: 'Rozhodnite sa', d: 'Prihláste sa do hlavného programu, dohodnite si s nami desaťminútový hovor alebo sa učte ďalej do ďalšieho kola.' }
      ]
    },
    learn: {
      eyebrow: 'Vzdelávací obsah', h2: 'Začnite so základmi.', moreEyebrow: 'Choďte hlbšie', moreH2: 'Ako vyzerá hlavný program.', status: 'V príprave',
      modules: [
        { n: '01', fmt: 'Článok', title: 'Prečo Viedeň–Bratislava? Vaša cezhraničná príležitosť na rast', topics: [{ text: 'Čím je región Viedeň–Bratislava jedinečný' }, { text: 'Prečo by impaktové podniky mali myslieť cezhranične skoro' }, { text: 'Príležitosť dvoch prepojených ekosystémov' }, { text: 'Prečo práve teraz' }] },
        { n: '02', fmt: 'Príbehy zakladateľov', title: 'Príbehy úspechu: ako zakladatelia expandovali cez hranicu', topics: [{ text: 'Slovenský startup expanduje do Rakúska' }, { text: 'Rakúsky startup expanduje na Slovensko' }, { text: 'Výzvy, prínosy a ponaučenia' }, { text: 'Čo fungovalo, čo nie – a urobili by to znova?' }] },
        { n: '03', fmt: 'Sprievodca', title: 'Je Twin City Accelerator pre vás to pravé?', topics: [{ text: 'Kto by sa mal prihlásiť – a kto ešte nie' }, { text: 'V akej fáze by mali účastníci byť' }, { text: 'Kritériá oprávnenosti a čo tvorí silnú zhodu' }, { text: 'Ako sa sebahodnotenie boduje a kam vedie každý výsledok' }] },
        { n: '04', fmt: 'Program', title: 'Čo získate v hlavnom programe', topics: [{ text: 'Celá 6–8-mesačná štruktúra: fázy, workshopy, online obsah, koučing' }, { text: 'Miesta stretnutí striedavo vo Viedni a v Bratislave' }, { text: 'Mentoring, cezhraničná podpora, prístup k ekosystému, investičná pripravenosť' }, { text: 'Časový plán a fázy v prehľade' }] },
        { n: '05', fmt: 'Video · ≤ 10 min', title: 'Expertný obsah: základy škálovania impaktového podniku', topics: [{ text: 'Unit economics pre zakladateľov' }, { text: 'Základy cezhraničného vstupu na trh' }, { text: 'Budovanie partnerstiev cez hranice' }, { text: 'Získavanie financií v Rakúsku a na Slovensku' }, { text: 'Základy merania impaktu' }] },
        { n: '06', fmt: 'Tím', title: 'Zoznámte sa s tímom', topics: [{ text: 'Ľudia za akcelerátorom v CB ESPRI a Relevant Ventures' }, { text: 'Kto sú a čo prinášajú' }, { text: 'Prečo im záleží na cezhraničnom impakte' }] }
      ]
    },
    check: {
      eyebrow: 'Sebahodnotenie · 2 minúty', h2: 'Zmapujte svoju cestu – mali by ste prekročiť Dunaj?',
      lead: 'Osem rýchlych otázok. Prvé štyri ukážu, či je akcelerátor pre vás otvorený, ďalšie štyri, ako ste pripravení. Úprimné odporúčanie dostanete okamžite – nič sa nikam neposiela, pokiaľ sa tak nerozhodnete.',
      part1: 'Časť 1 · Oprávnenosť', part2: 'Časť 2 · Pripravenosť', back: 'Späť', restart: 'Začať odznova', keys: 'Tip: odpovedajte zobrazenou klávesou',
      map: { eyebrow: 'Vaša mapa', from: 'Viedeň', to: 'Bratislava', question: 'Otázka', complete: 'Mapa je kompletná', elig: 'Oprávnenosť', ready: 'Pripravenosť', pending: 'Odpovedajte na otázky – mapa sa vypĺňa priebežne.', done: 'Vaše odporúčanie je vľavo.' },
      gateLabels: [{ text: 'Organizácia' }, { text: 'Impakt' }, { text: 'Región' }, { text: 'Cezhraničnosť' }],
      dims: { stage: 'Fáza', impact: 'Impakt', border: 'Cezhraničné plány', team: 'Záväzok' },
      questions: [
        { part: 1, q: 'Je vaša organizácia startup, MSP, nezisková organizácia, sociálny podnik alebo iná organizácia, ktorá vyvíja škálovateľné riešenie?', help: 'Právna forma nerozhoduje – dôležité je riešenie, ktoré môže rásť.', opts: yn('Áno', 'Nie') },
        { part: 1, q: 'Je jasný sociálny alebo environmentálny impakt súčasťou vašich hlavných aktivít?', help: 'Nie vedľajší projekt – impakt je v tom, čo predávate alebo poskytujete.', opts: yn('Áno', 'Nie') },
        { part: 1, q: 'Sídlite alebo aktívne pôsobíte v regióne Viedne alebo Bratislavy?', help: 'Program je spolufinancovaný z Interreg Slovensko–Rakúsko a je otvorený podnikom pôsobiacim v oboch hlavných mestách a ich regiónoch.', opts: yn('Áno', 'Nie') },
        { part: 1, q: 'Chcete v najbližších 12–24 mesiacoch expandovať alebo spolupracovať cez rakúsko-slovenskú hranicu?', help: 'Zákazníci, partneri, pilotné projekty alebo právnická osoba na druhej strane – všetko sa počíta.', opts: yn('Áno', 'Nie') },
        { part: 2, dim: 'stage', q: 'Kde je vaše riešenie dnes?', help: '', opts: [{ text: 'Nápad alebo prototyp – ešte nie na trhu' }, { text: 'Na trhu s prvými zákazníkmi alebo používateľmi' }, { text: 'Rastieme: opakovaní zákazníci, tržby alebo overený dopyt' }] },
        { part: 2, dim: 'impact', q: 'Ako pracujete so svojím impaktom?', help: '', opts: [{ text: 'Máme ambíciu, ale ešte nie definované ciele' }, { text: 'Máme definované impaktové ciele' }, { text: 'Meriame impakt podľa metrík alebo Theory of Change' }] },
        { part: 2, dim: 'border', q: 'Aké konkrétne sú vaše cezhraničné plány?', help: '', opts: [{ text: 'Sme zvedaví – zatiaľ nič konkrétne' }, { text: 'Preskúmali sme druhý trh alebo viedli prvé rozhovory' }, { text: 'Máme plán, prvých partnerov alebo zákazníkov za hranicou' }] },
        { part: 2, dim: 'team', q: 'Dokáže sa váš tím zaviazať k 6–8-mesačnému programu v angličtine s workshopmi v oboch mestách?', help: '', opts: [{ text: 'Momentálne nie' }, { text: 'Pravdepodobne áno, s plánovaním' }, { text: 'Áno – zúčastní sa osoba s rozhodovacou právomocou' }] }
      ],
      result: {
        eyebrow: 'Váš výsledok', breakdown: 'Vaša pripravenosť v detaile', why: 'Prečo',
        apply: { t: 'Ste pripravení prekročiť. Prihláste sa do akcelerátora.', b: 'Vaše odpovede zodpovedajú tomu, pre čo je program vytvorený: impaktový podnik na trhu, konkrétna cezhraničná ambícia a tím, ktorý sa dokáže zaviazať.', p: 'Prihlásiť sa', s: 'Dohodnúť 10-minútový hovor' },
        talk: { t: 'Takmer tam – poďme sa porozprávať.', b: 'Ste oprávnení a niekoľko oblastí by pred štartom kohorty stálo za doladenie. V desaťminútovom hovore vám úprimne povieme, či sa prihlásiť teraz alebo mieriť na ďalšie kolo.', p: 'Dohodnúť 10-minútový hovor', s: 'Prihlásiť sa aj tak' },
        learn: { t: 'Ešte nie – začnite s obsahom.', b: 'Ste oprávnení, ale akcelerátor funguje najlepšie, keď je podnik na trhu a má konkrétne cezhraničné plány. Bezplatné moduly sú vytvorené presne pre túto fázu – a ďalšie kolo je reálna možnosť.', p: 'Preskúmať obsah', s: 'Dohodnúť 10-minútový hovor' },
        no: { t: 'Akcelerátor zatiaľ nie je to pravé.', b: 'Bezplatný obsah je otvorený pre všetkých a naše podujatia sú najjednoduchší spôsob, ako spoznať oba ekosystémy.', p: 'Preskúmať obsah', s: 'Pozrieť podujatia' },
        gates: [
          { text: 'Program je určený organizáciám, ktoré vyvíjajú škálovateľné riešenie.' },
          { text: 'Jasný sociálny alebo environmentálny impakt v jadre činnosti je podmienkou financovania.' },
          { text: 'Program je financovaný pre podniky pôsobiace v regióne Viedne alebo Bratislavy.' },
          { text: 'Cezhraničný rast je srdcom programu – bez neho sa lepšie hodí iná podpora.' }
        ],
        tips: { stage: 'Získajte prvých zákazníkov alebo používateľov pred štartom kohorty – moduly 01 a 04 ukazujú, čo program očakáva.', impact: 'Definujte dve alebo tri impaktové metriky – modul 05 pokrýva základy merania impaktu.', border: 'Najprv zmapujte druhý trh – modul 01 je to správne miesto na začiatok.', team: 'Zablokujte si termíny workshopov včas; kohorta pracuje v angličtine a stretáva sa v oboch mestách.' },
        email: { label: 'Pošlite mi výsledok a zoznam na čítanie e-mailom', placeholder: 'meno@firma.sk', button: 'Odoslať', done: 'Ďakujeme – váš výsledok je na ceste.', note: 'Jeden e-mail, žiadny newsletter, pokiaľ si ho nevyžiadate.' }
      }
    },
    cta: { h2: 'Pripravení rásť cez hranicu?', b1: 'Prihlásiť sa', b2: 'Som pripravený škálovať?' }
  };

  window.TWICIIC_READINESS = { en: en, de: de, sk: sk };
})();
