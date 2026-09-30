/* Legal pages (Privacy, Imprint, Accessibility) — copy in en / de / sk. Merged into TWICIIC_CONTENT by content.js.
   Text in [square brackets] is a placeholder that must be filled in before going live. */
(function () {
  var P = function () { return Array.prototype.slice.call(arguments).map(function (t) { return { text: t }; }); };
  var S = function (h) { return { h: h, p: P.apply(null, Array.prototype.slice.call(arguments, 1)) }; };

  var en = {
    eyebrow: 'Legal', updated: 'Last updated: 30 September 2026',
    privacy: {
      title: 'Privacy', intro: 'How we handle your personal data on this website. In short: no cookies, no tracking, and only the data you choose to give us.',
      sections: [
        S('Who is responsible', 'The controller for this website is CB ESPRI [legal form], [registered address], company ID [IČO]. You can reach us at [contact email].', 'We run this website on behalf of the TWICIIC project partnership.'),
        S('Visiting the website', 'The website is hosted by Websupport s.r.o. in Slovakia. When you open a page, the server automatically records technical data such as your IP address, the date and time, the page requested and your browser type. We need this to deliver the site and keep it secure (Art. 6(1)(f) GDPR). The logs are deleted automatically by the host.', 'When a page loads, your browser also fetches the website’s JavaScript framework from the content delivery network unpkg.com, which receives your IP address for that purpose.'),
        S('Cookies and local storage', 'This website does not use cookies, analytics or tracking tools.', 'It saves two things in your own browser (local storage): your language choice and your answers in the readiness check, so they are still there on your next visit. This data never leaves your device. You can delete it at any time by clearing your browser data.'),
        S('Newsletter', 'If you subscribe, we use your email address to send you the TWICIIC newsletter, based on your consent (Art. 6(1)(a) GDPR). We send it with MailerLite, which processes the data on our behalf. You can unsubscribe at any time with the link in every email.'),
        S('Applying to the accelerator', 'Applications are collected with a form hosted by Tally (tally.so). We use the information you enter to assess your application and to run the programme (Art. 6(1)(b) GDPR). It is shared only with the TWICIIC project partners who deliver the accelerator.'),
        S('Contacting us', 'If you email us, we use your message and contact details only to answer you.'),
        S('Links to other websites', 'This website links to LinkedIn and to our partners’ websites. Their own privacy policies apply once you follow a link.'),
        S('How long we keep data', 'We keep personal data only as long as we need it: newsletter data until you unsubscribe, application data for as long as the Interreg programme rules require us to keep project records.'),
        S('Your rights', 'You have the right to access, correct or delete your data, to restrict or object to its processing, to data portability and to withdraw your consent at any time. Just write to [contact email].', 'You can also complain to a data protection authority, for example the Office for Personal Data Protection of the Slovak Republic (dataprotection.gov.sk).')
      ]
    },
    imprint: {
      title: 'Imprint', intro: 'Who runs this website.',
      sections: [
        S('Website operator', 'CB ESPRI [legal form]', '[Registered address]', 'Company ID (IČO): [●] · VAT ID: [●]', 'Registered in [commercial register, section, file number]', 'Represented by [name, position]', 'Email: [contact email]'),
        S('The project', 'TWICIIC – Twin City Impact Innovation Champion (project ID NFP404101C337) is a joint project of ZSI – Centre for Social Innovation (lead partner), the Capital City of Bratislava, Vienna Business Agency, Relevant Ventures, CB ESPRI and Impact Slovakia.', 'The project is co-funded by the European Union through the Interreg Slovakia–Austria 2021–2027 programme from the European Regional Development Fund (ERDF).'),
        S('Responsibility for content', 'The project partners are solely responsible for the content of this website. It does not necessarily reflect the views of the European Union or the Interreg Slovakia–Austria programme.', 'We are not responsible for the content of external websites we link to.'),
        S('Photos and design', '© TWICIIC project partners, unless stated otherwise.')
      ]
    },
    accessibility: {
      title: 'Accessibility', intro: 'We want everyone to be able to use this website, whatever device or assistive technology they use.',
      sections: [
        S('Our goal', 'We aim to meet the Web Content Accessibility Guidelines (WCAG) 2.1 at level AA.'),
        S('What we have done', 'The whole site works with a keyboard and has a “skip to content” link and visible focus. Animations stop when your system asks for reduced motion. Colours are chosen for readable contrast, images have text alternatives, and all content is available in English, German and Slovak.'),
        S('Known limitations', 'The site has not yet been fully tested with every screen reader. Embedded third-party content, such as the Tally application form and LinkedIn, is outside our control. Captions will be added to videos as they are published.', 'Based on our own assessment, the website is partially compliant with WCAG 2.1 AA.'),
        S('Feedback', 'If something doesn’t work for you, please tell us at [contact email]. We will get back to you within 10 working days.')
      ]
    }
  };

  var de = {
    eyebrow: 'Rechtliches', updated: 'Zuletzt aktualisiert: 30. September 2026',
    privacy: {
      title: 'Datenschutz', intro: 'Wie wir auf dieser Website mit Ihren personenbezogenen Daten umgehen. Kurz gesagt: keine Cookies, kein Tracking und nur die Daten, die Sie uns selbst geben.',
      sections: [
        S('Verantwortliche Stelle', 'Verantwortlich für diese Website ist CB ESPRI [Rechtsform], [Anschrift], Firmennummer [IČO]. Sie erreichen uns unter [Kontakt-E-Mail].', 'Wir betreiben diese Website im Auftrag der TWICIIC-Projektpartnerschaft.'),
        S('Besuch der Website', 'Die Website wird von Websupport s.r.o. in der Slowakei gehostet. Beim Aufruf einer Seite speichert der Server automatisch technische Daten wie IP-Adresse, Datum und Uhrzeit, die aufgerufene Seite und den Browsertyp. Das ist nötig, um die Website bereitzustellen und sicher zu betreiben (Art. 6 Abs. 1 lit. f DSGVO). Die Logs werden vom Hoster automatisch gelöscht.', 'Beim Laden einer Seite lädt Ihr Browser außerdem das JavaScript-Framework der Website vom Content Delivery Network unpkg.com, das dafür Ihre IP-Adresse erhält.'),
        S('Cookies und lokaler Speicher', 'Diese Website verwendet keine Cookies, keine Analyse- und keine Tracking-Tools.', 'Sie speichert zwei Dinge in Ihrem eigenen Browser (Local Storage): Ihre Sprachwahl und Ihre Antworten im Readiness-Check, damit sie beim nächsten Besuch noch da sind. Diese Daten verlassen Ihr Gerät nie. Sie können sie jederzeit löschen, indem Sie Ihre Browserdaten löschen.'),
        S('Newsletter', 'Wenn Sie den Newsletter abonnieren, verwenden wir Ihre E-Mail-Adresse, um Ihnen den TWICIIC-Newsletter zu senden – auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Der Versand erfolgt über MailerLite, das die Daten in unserem Auftrag verarbeitet. Sie können sich jederzeit über den Link in jeder E-Mail abmelden.'),
        S('Bewerbung für den Accelerator', 'Bewerbungen werden über ein Formular von Tally (tally.so) gesammelt. Wir verwenden Ihre Angaben, um Ihre Bewerbung zu prüfen und das Programm durchzuführen (Art. 6 Abs. 1 lit. b DSGVO). Sie werden nur mit den TWICIIC-Projektpartnern geteilt, die den Accelerator umsetzen.'),
        S('Kontakt', 'Wenn Sie uns eine E-Mail schreiben, verwenden wir Ihre Nachricht und Kontaktdaten nur, um Ihnen zu antworten.'),
        S('Links zu anderen Websites', 'Diese Website verlinkt auf LinkedIn und auf die Websites unserer Partner. Sobald Sie einem Link folgen, gelten deren Datenschutzbestimmungen.'),
        S('Speicherdauer', 'Wir speichern personenbezogene Daten nur so lange wie nötig: Newsletter-Daten bis zu Ihrer Abmeldung, Bewerbungsdaten so lange, wie die Regeln des Interreg-Programms die Aufbewahrung von Projektunterlagen verlangen.'),
        S('Ihre Rechte', 'Sie haben das Recht auf Auskunft, Berichtigung und Löschung Ihrer Daten, auf Einschränkung der Verarbeitung, auf Widerspruch, auf Datenübertragbarkeit und auf jederzeitigen Widerruf Ihrer Einwilligung. Schreiben Sie uns einfach an [Kontakt-E-Mail].', 'Sie können sich auch bei einer Datenschutzbehörde beschweren, zum Beispiel bei der slowakischen Datenschutzbehörde (dataprotection.gov.sk) oder der österreichischen Datenschutzbehörde (dsb.gv.at).')
      ]
    },
    imprint: {
      title: 'Impressum', intro: 'Wer diese Website betreibt.',
      sections: [
        S('Betreiber der Website', 'CB ESPRI [Rechtsform]', '[Anschrift]', 'Firmennummer (IČO): [●] · UID: [●]', 'Eingetragen im [Handelsregister, Abteilung, Nummer]', 'Vertreten durch [Name, Funktion]', 'E-Mail: [Kontakt-E-Mail]'),
        S('Das Projekt', 'TWICIIC – Twin City Impact Innovation Champion (Projekt-ID NFP404101C337) ist ein gemeinsames Projekt von ZSI – Zentrum für Soziale Innovation (Lead-Partner), der Hauptstadt Bratislava, der Wirtschaftsagentur Wien, Relevant Ventures, CB ESPRI und Impact Slovakia.', 'Das Projekt wird von der Europäischen Union über das Programm Interreg Slowakei–Österreich 2021–2027 aus dem Europäischen Fonds für regionale Entwicklung (EFRE) kofinanziert.'),
        S('Verantwortung für Inhalte', 'Für den Inhalt dieser Website sind ausschließlich die Projektpartner verantwortlich. Er gibt nicht notwendigerweise die Meinung der Europäischen Union oder des Programms Interreg Slowakei–Österreich wieder.', 'Für die Inhalte externer Websites, auf die wir verlinken, übernehmen wir keine Verantwortung.'),
        S('Fotos und Gestaltung', '© TWICIIC-Projektpartner, sofern nicht anders angegeben.')
      ]
    },
    accessibility: {
      title: 'Barrierefreiheit', intro: 'Diese Website soll für alle nutzbar sein – unabhängig von Gerät oder Hilfstechnologie.',
      sections: [
        S('Unser Ziel', 'Wir streben die Konformität mit den Web Content Accessibility Guidelines (WCAG) 2.1 auf Stufe AA an.'),
        S('Was wir umgesetzt haben', 'Die gesamte Website ist per Tastatur bedienbar, hat einen „Zum Inhalt springen“-Link und einen sichtbaren Fokus. Animationen stoppen, wenn Ihr System reduzierte Bewegung verlangt. Die Farben sind auf gut lesbaren Kontrast ausgelegt, Bilder haben Textalternativen, und alle Inhalte gibt es auf Englisch, Deutsch und Slowakisch.'),
        S('Bekannte Einschränkungen', 'Die Website wurde noch nicht mit allen Screenreadern vollständig getestet. Eingebettete Inhalte Dritter, etwa das Tally-Bewerbungsformular und LinkedIn, liegen außerhalb unseres Einflusses. Videos erhalten Untertitel, sobald sie veröffentlicht werden.', 'Nach unserer eigenen Bewertung ist die Website teilweise konform mit WCAG 2.1 AA.'),
        S('Feedback', 'Wenn etwas für Sie nicht funktioniert, schreiben Sie uns bitte an [Kontakt-E-Mail]. Wir melden uns innerhalb von 10 Arbeitstagen.')
      ]
    }
  };

  var sk = {
    eyebrow: 'Právne informácie', updated: 'Posledná aktualizácia: 30. septembra 2026',
    privacy: {
      title: 'Ochrana osobných údajov', intro: 'Ako na tejto stránke zaobchádzame s vašimi osobnými údajmi. Stručne: žiadne cookies, žiadne sledovanie a len údaje, ktoré nám sami poskytnete.',
      sections: [
        S('Kto zodpovedá', 'Prevádzkovateľom tejto stránky je CB ESPRI [právna forma], [sídlo], IČO [●]. Kontaktovať nás môžete na [kontaktný e-mail].', 'Stránku prevádzkujeme v mene partnerstva projektu TWICIIC.'),
        S('Návšteva stránky', 'Stránka je hostovaná u spoločnosti Websupport s.r.o. na Slovensku. Pri otvorení stránky server automaticky zaznamená technické údaje, napríklad IP adresu, dátum a čas, požadovanú stránku a typ prehliadača. Potrebujeme ich na prevádzku a zabezpečenie stránky (čl. 6 ods. 1 písm. f) GDPR). Záznamy hosting automaticky maže.', 'Pri načítaní stránky si váš prehliadač stiahne aj JavaScriptový framework stránky zo siete unpkg.com, ktorá na tento účel dostane vašu IP adresu.'),
        S('Cookies a lokálne úložisko', 'Táto stránka nepoužíva cookies, analytické ani sledovacie nástroje.', 'Vo vašom prehliadači (local storage) si ukladá dve veci: zvolený jazyk a vaše odpovede v teste pripravenosti, aby ste ich mali k dispozícii aj pri ďalšej návšteve. Tieto údaje nikdy neopustia vaše zariadenie. Kedykoľvek ich môžete vymazať vymazaním údajov prehliadača.'),
        S('Newsletter', 'Ak sa prihlásite na odber, použijeme vašu e-mailovú adresu na zasielanie newslettera TWICIIC na základe vášho súhlasu (čl. 6 ods. 1 písm. a) GDPR). Newsletter posielame cez službu MailerLite, ktorá údaje spracúva v našom mene. Z odberu sa môžete kedykoľvek odhlásiť cez odkaz v každom e-maile.'),
        S('Prihláška do akcelerátora', 'Prihlášky zbierame cez formulár služby Tally (tally.so). Údaje, ktoré vyplníte, použijeme na posúdenie prihlášky a realizáciu programu (čl. 6 ods. 1 písm. b) GDPR). Zdieľame ich len s partnermi projektu TWICIIC, ktorí akcelerátor realizujú.'),
        S('Kontakt', 'Ak nám napíšete e-mail, vašu správu a kontaktné údaje použijeme len na odpoveď.'),
        S('Odkazy na iné stránky', 'Táto stránka odkazuje na LinkedIn a na stránky našich partnerov. Po kliknutí na odkaz platia ich vlastné zásady ochrany osobných údajov.'),
        S('Ako dlho údaje uchovávame', 'Osobné údaje uchovávame len tak dlho, ako je to potrebné: údaje pre newsletter do odhlásenia, údaje z prihlášok tak dlho, ako to vyžadujú pravidlá programu Interreg pre uchovávanie projektovej dokumentácie.'),
        S('Vaše práva', 'Máte právo na prístup k údajom, ich opravu a vymazanie, na obmedzenie spracúvania, na námietku, na prenosnosť údajov a na kedykoľvek odvolať súhlas. Stačí napísať na [kontaktný e-mail].', 'Sťažnosť môžete podať aj dozornému orgánu, napríklad Úradu na ochranu osobných údajov SR (dataprotection.gov.sk).')
      ]
    },
    imprint: {
      title: 'Impresum', intro: 'Kto prevádzkuje túto stránku.',
      sections: [
        S('Prevádzkovateľ stránky', 'CB ESPRI [právna forma]', '[Sídlo]', 'IČO: [●] · IČ DPH: [●]', 'Zapísaná v [Obchodný register, oddiel, vložka]', 'Zastúpená: [meno, funkcia]', 'E-mail: [kontaktný e-mail]'),
        S('Projekt', 'TWICIIC – Twin City Impact Innovation Champion (ID projektu NFP404101C337) je spoločný projekt ZSI – Centra pre sociálne inovácie (vedúci partner), Hlavného mesta SR Bratislavy, Vienna Business Agency, Relevant Ventures, CB ESPRI a Impact Slovakia.', 'Projekt je spolufinancovaný Európskou úniou prostredníctvom programu Interreg Slovensko–Rakúsko 2021–2027 z Európskeho fondu regionálneho rozvoja (EFRR).'),
        S('Zodpovednosť za obsah', 'Za obsah tejto stránky zodpovedajú výlučne partneri projektu. Nemusí nevyhnutne vyjadrovať názory Európskej únie ani programu Interreg Slovensko–Rakúsko.', 'Nezodpovedáme za obsah externých stránok, na ktoré odkazujeme.'),
        S('Fotografie a dizajn', '© partneri projektu TWICIIC, ak nie je uvedené inak.')
      ]
    },
    accessibility: {
      title: 'Prístupnosť', intro: 'Chceme, aby túto stránku mohol používať každý – bez ohľadu na zariadenie alebo asistenčné technológie.',
      sections: [
        S('Náš cieľ', 'Snažíme sa splniť pravidlá prístupnosti webového obsahu (WCAG) 2.1 na úrovni AA.'),
        S('Čo sme urobili', 'Celá stránka sa dá ovládať klávesnicou, má odkaz „Preskočiť na obsah“ a viditeľné zameranie prvkov. Animácie sa vypnú, ak váš systém požaduje obmedzený pohyb. Farby sú zvolené s ohľadom na čitateľný kontrast, obrázky majú textové alternatívy a všetok obsah je dostupný po anglicky, nemecky a slovensky.'),
        S('Známe obmedzenia', 'Stránka zatiaľ nebola úplne otestovaná so všetkými čítačkami obrazovky. Vložený obsah tretích strán, napríklad prihlasovací formulár Tally a LinkedIn, nemáme pod kontrolou. Videá dostanú titulky hneď, ako ich zverejníme.', 'Podľa nášho vlastného posúdenia je stránka čiastočne v súlade s WCAG 2.1 AA.'),
        S('Spätná väzba', 'Ak vám niečo nefunguje, napíšte nám na [kontaktný e-mail]. Ozveme sa do 10 pracovných dní.')
      ]
    }
  };

  window.TWICIIC_LEGAL = { en: en, de: de, sk: sk };
})();
