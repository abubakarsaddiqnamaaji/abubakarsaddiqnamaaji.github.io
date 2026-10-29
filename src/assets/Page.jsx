import { useState } from "react";
import myImage from "./my-picture.png"; // Adjust the path as necessary

const skills = [
  ["fab fa-python", "Python", "Programming"],
  ["fas fa-brain", "AI & ML", "Intelligent systems"],
  ["fab fa-git-alt", "Git & GitHub", "Version control"],
  ["fab fa-html5", "HTML & CSS", "Structure & style"],
  ["fab fa-css3-alt", "Tailwind CSS", "Responsive design"],
  ["fab fa-js", "JavaScript", "Web interactivity"],
  ["fab fa-react", "React.js", "Frontend development"],
  ["fas fa-tags", "Data annotation", "Data labeling"],
  ["fas fa-database", "Data collection", "Data preparation"],
];

const experience = [
  [
    "fas fa-tags",
    "Data Annotation",
    "Annotating and labeling datasets to train AI models accurately, including Hausa speech and text data.",
  ],
  [
    "fas fa-database",
    "Data Collection",
    "Gathered and annotated hundreds of Hausa audio samples for AI training datasets.",
  ],
  [
    "fas fa-film",
    "Video Curation",
    "Curated and organized video content for AI training and research purposes.",
  ],
  [
    "fas fa-microphone",
    "Speech Recognition",
    "Contributed to work supporting accurate Hausa speech transcription.",
  ],
  [
    "fas fa-volume-high",
    "Text-to-Speech",
    "Supported the development of natural Hausa speech technology.",
  ],
];

const projects = [
  {
    date: "Jun 2026",
    title: "Video Curation for AI Datasets",
    icon: "fas fa-film",
    color: "text-lime-300",
    link: "https://humansignal.com/",
    description:
      "Curated and annotated video data for AI training datasets, with a focus on high-quality labels, accurate metadata, and consistent annotations.",
  },
  {
    date: "May 2026",
    title: "English-Hausa Speech AI Evaluation",
    icon: "fas fa-language",
    color: "text-sky-300",
    link: "https://humansignal.com/",
    description:
      "Reviewed English-to-Hausa speech translation for meaning, pronunciation, naturalness, and audio consistency to support multilingual AI systems.",
  },
  {
    date: "May 2026",
    title: "Namaaji AI Chatbot",
    icon: "fas fa-robot",
    color: "text-amber-300",
    link: "https://github.com/abubakarsaddiqnamaaji",
    description:
      "An educational chatbot in development for learning, research, and academic support, with a responsive interface and Hausa and English support.",
  },
  {
    date: "May 2026",
    title: "Calculator App",
    icon: "fas fa-calculator",
    color: "text-orange-300",
    link: "https://github.com/abubakarsaddiqnamaaji",
    description: "A Python and Tkinter calculator for everyday arithmetic.",
  },
  {
    date: "May 2026",
    title: "Weather App",
    icon: "fas fa-cloud",
    color: "text-blue-300",
    link: "https://github.com/abubakarsaddiqnamaaji/weather-app",
    description:
      "A Python and Tkinter weather application that retrieves current conditions from a weather API.",
  },
  {
    date: "Apr 2026",
    title: "Masakhane AI Hausa Dataset",
    icon: "fas fa-microphone",
    color: "text-rose-300",
    link: "https://www.masakhane.io/",
    description:
      "Contributed 500+ Hausa sentence recordings to support speech recognition and text-to-speech research.",
  },
  {
    date: "Feb 2025",
    title: "Simple Chatbot",
    icon: "fas fa-robot",
    color: "text-emerald-300",
    link: "https://medium.com/@namaajiabubakarsadiq/building-a-simple-chatbot-in-python-for-beginners-2028cde2f4c9",
    description:
      "A beginner-friendly guide to creating a simple chatbot in Python, covering core concepts and implementation.",
  },
  {
    date: "Jan 2025",
    title: "Treasure Island",
    icon: "fas fa-map",
    color: "text-yellow-300",
    link: "https://github.com/abubakarsaddiqnamaaji",
    description:
      "A Python text adventure that turns a treasure hunt into a sequence of choices.",
  },
  {
    date: "Jan 2025",
    title: "Todo App",
    icon: "fas fa-list-check",
    color: "text-violet-300",
    link: "https://github.com/abubakarsaddiqnamaaji",
    description:
      "A lightweight task manager built with HTML, CSS, and JavaScript.",
  },
  {
    date: "Jan 2025",
    title: "Advanced Calculator",
    icon: "fas fa-calculator",
    color: "text-red-300",
    link: "https://github.com/abubakarsaddiqnamaaji",
    description: "A Python calculator for common arithmetic operations.",
  },
  {
    date: "Jan 2025",
    title: "Caesar Cipher",
    icon: "fas fa-lock",
    color: "text-cyan-300",
    link: "https://github.com/abubakarsaddiqnamaaji",
    description:
      "A Python utility for encrypting and decrypting messages with a Caesar cipher.",
  },
  {
    date: "Jan 2025",
    title: "Blackjack Game",
    icon: "fas fa-clone",
    color: "text-pink-300",
    link: "https://github.com/abubakarsaddiqnamaaji",
    description: "A Python take on the classic blackjack card game.",
  },
];

const articles = [
  [
    "19 Oct 2026",
    "You’re Lonely When You’re Dead: A Mystery That Keeps You Guessing",
    " By Mark Manson: how this book changed me",
    "https://medium.com/@namaajiabubakarsadiq/youre-lonely-when-you-re-dead-a-mystery-that-keeps-you-guessing-76efb29f7529?sharedUserId=namaajiabubakarsadiq",
    "fas fa-book",
  ],
  [
    "12 Sep 2026",
    "Just Another Sucker: When Easy Money Becomes a Dangerous Trap",
    "  By Mark Manson: how this book changed me",
    "https://medium.com/@namaajiabubakarsadiq/just-another-sucker-when-easy-money-becomes-a-dangerous-trap-071829157cb9?sharedUserId=namaajiabubakarsadiq",
    "fas fa-book",
  ],
  [
    "11 Jul 2026",
    "Day 26 of #100DaysOfCode Mastering List Comprehensions, Dictionary Comprehensions & the NATO Alphabet",
    " By Abubakar Sadiq Namaaji",
    "https://medium.com/@namaajiabubakarsadiq/day-26-of-100daysofcode-mastering-list-comprehensions-dictionary-comprehensions-the-nato-eff92b2a5f72?sharedUserId=namaajiabubakarsadiq",
    "fas fa-book",
  ],
  [
    "03 Jul 2026",
    "Deep Work Didn’t Just Teach Me About Focus — It Changed How I Think About My Future",
    " By Cal Newport: how this book changed me",
    "https://medium.com/@namaajiabubakarsadiq/deep-work-didnt-just-teach-me-about-focus-it-changed-how-i-think-about-my-future-d88dd5dc2bd1?sharedUserId=namaajiabubakarsadiq",
    "fas fa-book",
  ],
  [
    "08 Jun 2026",
    "What The Obstacle Is the Way Taught Me About Turning Challenges Into Opportunities",
    " By Ryan Holiday: how this book changed me",
    "https://medium.com/@namaajiabubakarsadiq/what-the-obstacle-is-the-way-taught-me-about-turning-challenges-into-opportunities-dc354985f3fe?sharedUserId=namaajiabubakarsadiq",
    "fas fa-book",
  ],
  [
    "11 May 2026",
    "Building Namaaji AI",
    " My Journey Creating an Educational AI Assistant for Students",
    "https://medium.com/@namaajiabubakarsadiq/building-namaaji-ai-my-journey-creating-an-educational-ai-assistant-for-students-ffe863bd53ce?sharedUserId=namaajiabubakarsadiq",
    "fas fa-book",
  ],
  [
    "08 May 2026",
    "The Subtle Art of Not Giving a F*ck",
    " By Mark Manson: how this book changed me",
    "https://medium.com/@namaajiabubakarsadiq/the-subtle-art-of-not-giving-a-f-ck-921d3bf68e5a?sharedUserId=namaajiabubakarsadiq",
    "fas fa-book",
  ],
  [
    "05 May 2026",
    "Building a Weather App",
    " My Journey as a Beginner Developer",
    "https://medium.com/@namaajiabubakarsadiq/%EF%B8%8F-building-a-weather-app-my-journey-as-a-beginner-developer-e0804673b11c?sharedUserId=namaajiabubakarsadiq",
    "fas fa-book",
  ],
  [
    "04 Apr 2026",
    "Finish What You Start",
    "By Peter Hollins: how this book changed me",
    "https://medium.com/@namaajiabubakarsadiq/finish-what-you-start-by-peter-hollins-how-this-book-totally-changed-me-2e64352a8e59",
    "fas fa-book",
  ],
  [
    "12 Feb 2026",
    "Simple Chatbot in Python",
    "A beginner-friendly walkthrough",
    "https://medium.com/@namaajiabubakarsadiq/building-a-simple-chatbot-in-python-for-beginners-2028cde2f4c9",
    "fas fa-robot",
  ],
  [
    "08 Oct 2025",
    "Graduation Speech",
    "The value of time",
    "https://medium.com/@namaajiabubakarsadiq/honored-to-deliver-a-speech-on-the-value-of-time-during-our-graduation-ceremony-at-adamu-namaaji-a0577316ab55",
    "fas fa-graduation-cap",
  ],
  [
    "20 Dec 2025",
    "JavaScript Journey",
    "10 days, from fundamentals to advanced concepts",
    "https://medium.com/@namaajiabubakarsadiq/my-10-days-of-javascript-journey-from-fundamentals-to-advanced-concepts-41c69fa0c32a",
    "fas fa-code",
  ],
  [
    "08 Nov 2025",
    "NamaajiIslamic App",
    "A simple and beautiful Islamic app",
    "https://medium.com/@namaajiabubakarsadiq/introducing-namaajiquran-app-a-simple-and-beautiful-islamic-app-for-everyone-376b092eb929",
    "fas fa-mobile-screen",
  ],
  [
    "04 Nov 2024",
    "Data Science Journey",
    "My first two weeks with ArewaDS",
    "https://medium.com/@namaajiabarsadiq/unlocking-data-science-my-first-two-weeks-with-arewads-7cdd3e6ab8ac",
    "fas fa-chart-line",
  ],
  [
    "28 Aug 2025",
    "#100DaysOfCode - Day 8",
    "Functions and the Caesar cipher",
    "https://medium.com/@namaajiabarsadiq/day-8-of-100-days-of-code-functions-with-inputs-and-the-caesar-cipher-7cdd3e6ab8ac",
    "fas fa-code",
  ],
  [
    "19 Oct 2025",
    "Mastering CSS",
    "From confusion to confidence",
    "https://medium.com/@namaajiabarsadiq/my-journey-to-mastering-css-from-confusion-to-confidence-fc68b047d36e",
    "fas fa-palette",
  ],
  [
    "31 Aug 2025",
    "Blackjack Game",
    "A Python capstone project",
    "https://medium.com/@namaajiabarsadiq/day-11-of-100-days-of-code-the-blackjack-capstone-project-7cdd3e6ab8ac",
    "fas fa-clone",
  ],
  [
    "20 Dec 2025",
    "Pong Game",
    "Day 22 of #100DaysOfCode",
    "https://medium.com/@namaajiabarsadiq/day-22-of-100daysofcode-building-the-classic-pong-game-with-python-7cdd3e6ab8ac",
    "fas fa-gamepad",
  ],
  [
    "19 Oct 2025",
    "Login Form",
    "HTML and CSS in my web journey",
    "https://medium.com/@namaajiabarsadiq/building-my-login-form-with-html-css-a-step-forward-in-my-web-journey-7cdd3e6ab8ac",
    "fas fa-lock",
  ],
];

const socials = [
  ["fab fa-github", "GitHub", "https://github.com/abubakarsaddiqnamaaji"],
  [
    "fab fa-linkedin-in",
    "LinkedIn",
    "https://www.linkedin.com/in/abubakar-sadiq-namaaji-54b9b2333",
  ],
  ["fas fa-envelope", "Email", "mailto:namaajiabubakarsadiq@gmail.com"],
  ["fab fa-whatsapp", "WhatsApp", "https://wa.me/2347030218743"],
  ["fab fa-x-twitter", "X", "https://x.com/Alsayyu_Namaji1"],
  ["fab fa-instagram", "Instagram", "https://instagram.com/__alsayyu_namaaji"],
];

function SectionHeading({ eyebrow, children, id }) {
  return (
    <div className="mb-12" id={id}>
      <p className="section-kicker mb-3 text-xs font-bold uppercase">
        {eyebrow}
      </p>
      <h2 className="display-font text-3xl font-bold text-white sm:text-4xl">
        {children}
      </h2>
    </div>
  );
}

function Page() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formState, setFormState] = useState("idle");

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    setFormState("sending");
    try {
      const response = await fetch("https://formspree.io/f/mojopdng", {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (!response.ok) throw new Error("Form submission failed");
      form.reset();
      setFormState("sent");
    } catch {
      setFormState("error");
    }
  }

  const navItems = [
    ["About", "#about"],
    ["Experience", "#experience"],
    ["Skills", "#skills"],
    ["Projects", "#projects"],
    ["Writing", "#articles"],
    ["Contact", "#contact"],
  ];

  return (
    <div className="page-shell min-h-screen overflow-hidden">
      <header className="fixed inset-x-0 top-0 z-50 border-b line-border bg-[#111916]/90 backdrop-blur-xl">
        <nav
          className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8"
          aria-label="Main navigation"
        >
          <a
            className="display-font text-lg font-extrabold tracking-normal text-white"
            href="#top"
          >
            Abubakar 
          </a>
          <div className="hidden items-center gap-7 md:flex">
            {navItems.map(([label, href]) => (
              <a
                key={href}
                className="text-sm text-slate-300 transition hover:text-lime-200"
                href={href}
              >
                {label}
              </a>
            ))}
          </div>
          <a
            href="#contact"
            className="hidden border border-lime-200/50 px-4 py-2 text-sm font-semibold text-lime-100 transition hover:bg-lime-200 hover:text-[#172014] md:inline-flex"
          >
            Let&apos;s talk{" "}
            <i
              className="fas fa-arrow-up-right-from-square ml-2 text-xs"
              aria-hidden="true"
            />
          </a>
          <button
            type="button"
            className="grid size-10 place-items-center border line-border text-lg text-white md:hidden"
            aria-label={
              menuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <i
              className={`fas ${menuOpen ? "fa-xmark" : "fa-bars"}`}
              aria-hidden="true"
            />
          </button>
        </nav>
        {menuOpen && (
          <div className="border-t line-border bg-[#111916] px-5 py-3 md:hidden">
            {navItems.map(([label, href]) => (
              <a
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="block border-b line-border py-3 text-sm text-slate-200 last:border-0"
              >
                {label}
              </a>
            ))}
          </div>
        )}
      </header>

      <main id="top">
        <section className="mx-auto grid min-h-[720px] max-w-6xl items-center gap-12 px-5 pb-16 pt-32 md:grid-cols-[1.15fr_.85fr] md:px-8 md:pt-36">
          <div className="reveal order-2 md:order-1">
            <p className="section-kicker mb-6 flex items-center gap-3 text-xs font-bold uppercase">
              <span className="h-px w-8 bg-lime-300" /> Data, language &amp;
              intelligent systems
            </p>
            <h1 className="display-font max-w-3xl text-5xl font-extrabold leading-[1.08] text-white sm:text-6xl lg:text-7xl">
              Hi, I&apos;m{" "}
              <span className="accent">Abubakar Saddiq Namaaji.</span>
            </h1>
            <p className="mt-6 text-lg font-medium text-slate-200 md:text-xl">
              Data Annotator <span className="accent">/</span> Frontend
              Developer <span className="accent">/</span> AI Enthusiast
            </p>
            <p className="mt-5 max-w-xl text-base leading-7 text-slate-400">
              I work on real-world AI systems through data annotation,
              multilingual speech evaluation, and AI quality assessment. I also
              build web experiences that make technology more useful.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="https://drive.google.com/file/d/1cJzBQaluHxpYe9iGdrlFr81svAmlrZQl/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="accent-bg inline-flex items-center gap-2 px-5 py-3 text-sm font-bold transition hover:brightness-110"
              >
                <i className="fas fa-file-arrow-down" aria-hidden="true" /> View
                my CV
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 border line-border px-5 py-3 text-sm font-bold text-white transition hover:border-lime-200/60 hover:text-lime-100"
              >
                <i className="fas fa-envelope" aria-hidden="true" /> Contact me
              </a>
            </div>
            <div className="mt-12 flex items-center gap-4 text-xs font-semibold uppercase tracking-normal text-slate-500">
              <span className="h-px w-12 bg-slate-700" /> Based in Nigeria{" "}
              <span className="accent">·</span> Open to opportunities
            </div>
          </div>
          <div className="reveal reveal-delay order-1 mx-auto w-full max-w-sm md:order-2">
            <div className="relative border line-border bg-[#1a241e] p-3 ">
              <img
                src={myImage}
                alt="Abubakar Sadiq Namaaji"
                className="aspect-[4/5] w-full object-cover"
              />
              <div className="absolute -bottom-4 -left-4 surface border line-border px-4 py-3">
                <span className="accent text-xs font-bold uppercase">Sayyid</span>
                <p className="mt-1 text-xs text-slate-300">
                  Abubakar Sadiq Namaaji
                </p>
              </div>
              <span className="absolute -right-3 top-8 h-12 w-1 bg-lime-300" />
            </div>
          </div>
        </section>

        <section id="about" className="border-y line-border bg-[#17211b] py-20">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 md:grid-cols-[.7fr_1.3fr] md:px-8">
            <SectionHeading eyebrow="A little about me">
              Building at the intersection of{" "}
              <span className="accent">people and technology.</span>
            </SectionHeading>
            <div>
              <p className="text-lg leading-8 text-slate-300">
                I&apos;m a frontend developer and AI enthusiast, currently
                working as a{" "}
                <span className="font-semibold text-white">
                  Data Annotator at RWS
                </span>
                . I contribute to AI systems through careful data work and build
                modern applications that solve real-world problems.
              </p>
              <p className="mt-5 leading-7 text-slate-400">
                I have also contributed to large-scale annotation work, most
                recently on a Prolific project where I helped curate and
                annotate over 1,000 videos for AI datasets.
              </p>
              <p className="mt-5 leading-7 text-slate-400">
                I also contributed{" "}
                <span className="font-semibold text-lime-200">
                  500+ Hausa sentence recordings
                </span>{" "}
                to the Masakhane AI project, supporting speech recognition and
                text-to-speech for a low-resource African language. My aim is to
                build impactful tools and help shape the next generation of AI.
              </p>
              <div className="mt-8 grid gap-px border line-border bg-white/10 sm:grid-cols-2">
                {[
                  ["Name", "Abubakar Sadiq Namaaji"],
                  ["Role", "Data Annotator & AI Enthusiast"],
                  ["Company", "RWS Group"],
                  ["Interests", "AI & Application Development"],
                ].map(([term, detail]) => (
                  <div key={term} className="surface px-5 py-4">
                    <p className="text-xs font-bold uppercase text-slate-500">
                      {term}
                    </p>
                    <p className="mt-2 text-sm font-semibold text-slate-100">
                      {detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          id="experience"
          className="mx-auto max-w-6xl px-5 py-20 md:px-8"
        >
          <SectionHeading eyebrow="Applied AI">
            Experience with language,{" "}
            <span className="accent">data and voice.</span>
          </SectionHeading>
          <p className="mb-10 max-w-3xl text-slate-400 leading-7">
            My work spans annotation, data collection, and multilingual AI
            evaluation. At Masakhane, I contributed Hausa recordings for speech
            recognition and text-to-speech research; at RWS, I support
            real-world AI quality workflows.
          </p>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {experience.map(([icon, title, description]) => (
              <article
                key={title}
                className="card-lift surface-light border line-border p-5"
              >
                <i className={`${icon} accent text-xl`} aria-hidden="true" />
                <h3 className="mt-5 font-bold text-white">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section
          id="skills"
          className="border-y line-border bg-[#17211b] py-20"
        >
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <SectionHeading eyebrow="What I work with">
              Skills &amp; <span className="accent">tools.</span>
            </SectionHeading>
            <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
              {skills.map(([icon, title, subtitle]) => (
                <article
                  key={title}
                  className="card-lift surface border line-border p-5 sm:p-6"
                >
                  <i className={`${icon} accent text-2xl`} aria-hidden="true" />
                  <h3 className="mt-5 text-sm font-bold text-white sm:text-base">
                    {title}
                  </h3>
                  <p className="mt-1 text-xs text-slate-500">{subtitle}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="mx-auto max-w-6xl px-5 py-20 md:px-8">
          <SectionHeading eyebrow="Selected work">
            Projects &amp; <span className="accent">contributions.</span>
          </SectionHeading>
          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.title}
                className="card-lift surface-light flex min-h-56 flex-col border line-border p-6"
              >
                <div className="flex items-start justify-between">
                  <span className="text-xs font-semibold uppercase text-slate-500">
                    {project.date}
                  </span>
                  <i
                    className={`${project.icon} ${project.color}`}
                    aria-hidden="true"
                  />
                </div>
                <h3 className="display-font mt-7 text-lg font-bold text-white">
                  {project.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-6 text-slate-400">
                  {project.description}
                </p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex w-fit items-center gap-2 text-xs font-bold text-lime-200 hover:text-white"
                >
                  View project{" "}
                  <i
                    className="fas fa-arrow-up-right-from-square"
                    aria-hidden="true"
                  />
                </a>
              </article>
            ))}
          </div>
        </section>

        <section
          id="articles"
          className="border-y line-border bg-[#17211b] py-20"
        >
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <SectionHeading eyebrow="Notes & stories">
              Writing and <span className="accent">learning.</span>
            </SectionHeading>
            <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
              {articles.map(([date, title, subtitle, link, icon]) => (
                <a
                  key={title}
                  href={link}
                  target="_blank"
                  rel="noreferrer"
                  className="card-lift surface border line-border p-5"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-500">{date}</span>
                    <i className={`${icon} accent`} aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 font-bold text-white">{title}</h3>
                  <p className="mt-2 text-sm text-slate-400">{subtitle}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-xs font-bold text-lime-200">
                    Read article{" "}
                    <i className="fas fa-arrow-right" aria-hidden="true" />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-6xl px-5 py-20 md:px-8">
          <div className="grid gap-12 lg:grid-cols-[.9fr_1.1fr]">
            <div>
              <SectionHeading eyebrow="Get in touch">
                Let&apos;s make something{" "}
                <span className="accent">meaningful.</span>
              </SectionHeading>
              <p className="max-w-lg leading-7 text-slate-400">
                I&apos;m interested in collaborations, opportunities, and
                thoughtful conversations about AI, language, and the web. Send a
                note and I&apos;ll get back to you.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                {socials.map(([icon, label, href]) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("mailto:") ? undefined : "_blank"}
                    rel="noreferrer"
                    aria-label={label}
                    title={label}
                    className="grid size-11 place-items-center border line-border text-slate-300 transition hover:border-lime-200/60 hover:text-lime-200"
                  >
                    <i className={icon} aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>
            <form
              onSubmit={handleSubmit}
              className="surface border line-border p-6 sm:p-8"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="text-xs font-semibold text-slate-300">
                  Name
                  <input
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    placeholder="Your name"
                    className="mt-2 w-full border line-border bg-[#111916] px-4 py-3 text-sm text-white outline-none placeholder:text-slate-600 focus:border-lime-300"
                  />
                </label>
                <label className="text-xs font-semibold text-slate-300">
                  Email
                  <input
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="you@example.com"
                    className="mt-2 w-full border line-border bg-[#111916] px-4 py-3 text-sm text-white outline-none placeholder:text-slate-600 focus:border-lime-300"
                  />
                </label>
              </div>
              <label className="mt-5 block text-xs font-semibold text-slate-300">
                Subject
                <input
                  name="subject"
                  type="text"
                  placeholder="What would you like to discuss?"
                  className="mt-2 w-full border line-border bg-[#111916] px-4 py-3 text-sm text-white outline-none placeholder:text-slate-600 focus:border-lime-300"
                />
              </label>
              <label className="mt-5 block text-xs font-semibold text-slate-300">
                Message
                <textarea
                  name="message"
                  required
                  rows="5"
                  placeholder="Write your message..."
                  className="mt-2 w-full resize-y border line-border bg-[#111916] px-4 py-3 text-sm text-white outline-none placeholder:text-slate-600 focus:border-lime-300"
                />
              </label>
              <button
                disabled={formState === "sending"}
                type="submit"
                className="accent-bg mt-5 inline-flex items-center gap-3 px-5 py-3 text-sm font-bold transition hover:brightness-110 disabled:cursor-wait disabled:opacity-60"
              >
                {formState === "sending" ? "Sending..." : "Send message"}{" "}
                <i className="fas fa-arrow-right" aria-hidden="true" />
              </button>
              <p
                role="status"
                aria-live="polite"
                className={`mt-4 min-h-5 text-sm ${formState === "error" ? "text-rose-300" : "text-lime-200"}`}
              >
                {formState === "sent"
                  ? "Message sent successfully. I'll get back to you soon."
                  : formState === "error"
                    ? "Could not send your message. Please try again or email me directly."
                    : ""}
              </p>
            </form>
          </div>
        </section>
        <section class="py-12 px-6   relative">
  <div class="max-w-4xl mx-auto">
    <div class="  text-center  animate-fade-in-up hover:border-opacity-50 transition-all duration-300">
      <h3 class="text-lg font-semibold mb-4 text-slate-300">
        <i class="fas fa-heart text-red-500 mr-2 animate-pulse"></i> Thank you for visiting!
      </h3>
      <div class="flex justify-center mb-4">
        <a href="https://info.flagcounter.com/EQmt" target="_blank" class="hover:opacity-75 transition-opacity">
          <img src="https://s01.flagcounter.com/count2/EQmt/bg_FFFFFF/txt_000000/border_CCCCCC/columns_5/maxflags_15/viewers_0/labels_1/pageviews_1/flags_0/percent_0/" alt="Flag Counter" class="rounded-lg"/>
        </a>
      </div>
      <p class="text-gray-400 text-sm">
        <strong class="text-lime-200">📊 Tracking visitors since January 2026</strong>
      </p>
    </div>
  </div>
</section>
      </main>

      <footer className="border-t line-border bg-[#0d1310] px-5 py-6 md:px-8">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-2 text-xs text-slate-500 sm:flex-row">
          <span>© 2026 Abubakar Sadiq Namaaji</span>
          <span>Built with intention. Last updated October 2026.</span>
        </div>
      </footer>
      <a
        href="#top"
        aria-label="Back to top"
        title="Back to top"
        className="accent-bg fixed bottom-5 right-5 z-40 grid size-11 place-items-center shadow-lg transition hover:-translate-y-1"
      >
        <i className="fas fa-arrow-up" aria-hidden="true" />
      </a>
    </div>
  );
}

export default Page;
