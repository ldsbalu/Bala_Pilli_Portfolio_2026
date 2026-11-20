"use client";

import { useEffect, useState } from "react";
import { FeaturedProject, featuredProjects, profile } from "@/lib/portfolio-data";

type Theme = "light" | "dark";
function Icon({ name, size = 18 }: { name: "sun" | "moon" | "arrow" | "external" | "github" | "menu" | "close"; size?: number }) {
  const common = { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, "aria-hidden": true as const };
  if (name === "sun") return <svg {...common}><circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42"/></svg>;
  if (name === "moon") return <svg {...common}><path d="M20.5 14.1A8.5 8.5 0 0 1 9.9 3.5 8.5 8.5 0 1 0 20.5 14.1Z"/></svg>;
  if (name === "arrow") return <svg {...common}><path d="M5 12h14m-6-6 6 6-6 6"/></svg>;
  if (name === "external") return <svg {...common}><path d="M14 4h6v6m-11 5L20 4"/><path d="M19 13v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h6"/></svg>;
  if (name === "github") return <svg {...common}><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" transform="translate(2 1) scale(.9)"/></svg>;
  if (name === "close") return <svg {...common}><path d="m18 6-12 12M6 6l12 12"/></svg>;
  return <svg {...common}><path d="M3 6h18M3 12h18M3 18h18"/></svg>;
}

function ProjectArt({ project }: { project: FeaturedProject }) {
  if (project.id === "stock-allocation") return (
    <div className="project-art stock-art" aria-hidden="true">
      <span className="art-caption">CONCEPT VISUAL · FORECAST → ALLOCATION</span>
      <div className="stock-chart"><span className="chart-axis axis-x"/><span className="chart-axis axis-y"/><svg viewBox="0 0 320 140" preserveAspectRatio="none"><path d="M8 112 C42 92 46 108 76 80 S120 92 147 58 S192 80 220 40 S265 57 307 14"/><path className="chart-secondary" d="M8 120 C45 110 62 103 91 102 S145 83 172 86 S232 70 260 75 S293 53 307 48"/></svg><div className="chart-bars"><i/><i/><i/><i/><i/><i/><i/></div></div>
      <div className="allocation-chip"><span>Σ weights</span><b>100%</b></div>
      <span className="art-number">01</span>
    </div>
  );
  if (project.id === "ascii-cnn") return (
    <div className="project-art ascii-art" aria-hidden="true">
      <span className="art-caption">CONCEPT VISUAL · IMAGE <b>→</b> ASCII</span>
      <div className="ascii-pipeline"><div className="image-token"><span>◉</span><small>INPUT IMAGE</small></div><span className="pipeline-arrow">→</span><div className="ascii-token"><span>@%#*+=-:.<br/>%#*+=-:.<br/>#*+=-:.</span><small>TEXT OUTPUT</small></div></div>
      <div className="cnn-bars"><i/><i/><i/><i/></div>
      <span className="art-number">02</span>
    </div>
  );
  return (
    <div className="project-art codenames-art" aria-hidden="true">
      <span className="art-caption">CONCEPT VISUAL · WORD BOARD</span>
      <div className="word-board">{["CLOUD", "RIVER", "MOON", "CODE", "APPLE", "BOND", "MINT", "STAR", "LIGHT", "TOWER", "PAPER", "ROSE", "RING", "PLANE", "WAVE"].map((word, i) => <span className={`word-tile tile-${i % 5}`} key={word}>{word}</span>)}</div>
      <span className="art-number">03</span>
    </div>
  );
}

export default function Portfolio() {
  const [theme, setTheme] = useState<Theme>("light");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem("balu-theme") as Theme | null;
    const initial = saved ?? (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    setTheme(initial);
    document.documentElement.dataset.theme = initial;
  }, []);

  useEffect(() => {
    if (!theme) return;
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("balu-theme", theme);
  }, [theme]);

  const changeTheme = () => setTheme((current) => current === "dark" ? "light" : "dark");
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header">
        <div className="header-inner">
          <a className="wordmark" href="#top" aria-label="Bala Pilli, home" onClick={closeMenu}>
            <span className="wordmark-mark">B</span><span>Bala Pilli<span className="wordmark-dot">.</span></span>
          </a>
          <button className="icon-button menu-toggle" type="button" aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"} aria-expanded={menuOpen} aria-controls="primary-nav" onClick={() => setMenuOpen((open) => !open)}>
            <Icon name={menuOpen ? "close" : "menu"} />
          </button>
          <nav id="primary-nav" className={`primary-nav${menuOpen ? " is-open" : ""}`} aria-label="Primary navigation">
            <a href="#work" onClick={closeMenu}>Work</a>
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#experience" onClick={closeMenu}>Experience</a>
            <a href="#contact" onClick={closeMenu}>Contact</a>
            <button className="theme-toggle" type="button" aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`} onClick={changeTheme}>
              <Icon name={theme === "dark" ? "sun" : "moon"} size={17} /><span>{theme === "dark" ? "Light" : "Dark"}</span>
            </button>
          </nav>
        </div>
      </header>

      <main id="main">
        <section className="hero section-wrap" id="top" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow"><span className="status-dot"/> Open to thoughtful opportunities <span className="eyebrow-sep">·</span> {profile.location}</p>
            <h1 id="hero-title">Hello, I’m<br/><span className="hero-name">{profile.name}</span><span className="hero-period">.</span></h1>
            <p className="hero-role">{profile.title}</p>
            <p className="hero-intro">{profile.intro}</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">View my work <Icon name="arrow" size={17}/></a>
              <a className="button button-outline" href="#contact">Contact me</a>
              <a className="resume-link" href={profile.resume} target="_blank" rel="noreferrer">Resume <Icon name="external" size={15}/></a>
            </div>
            <div className="hero-note"><span className="note-line"/>Good work starts with a clear problem.</div>
          </div>
          <div className="hero-visual">
            <div className="portrait-frame"><img src="/bala-pilli.jpg" alt="Portrait of Bala Pilli" fetchPriority="high"/><span className="portrait-caption">Balu · Salt Lake City</span></div>
            <div className="hero-stamp" aria-hidden="true"><span>LEARN</span><b>·</b><span>BUILD</span><b>·</b><span>EXPLAIN</span></div>
          </div>
          <a className="scroll-cue" href="#work" aria-label="Scroll to selected work"><span/>Scroll to explore</a>
        </section>

        <section className="work-section section-pad" id="work" aria-labelledby="work-title">
          <div className="section-wrap">
            <div className="section-heading">
              <div><p className="eyebrow">A few things I’ve been working on</p><h2 id="work-title">Selected work<span className="accent">.</span></h2></div>
              <a className="text-link" href={profile.github} target="_blank" rel="noreferrer"><Icon name="github" size={17}/> More on GitHub <Icon name="arrow" size={16}/></a>
            </div>
            <div className="featured-projects">
              {featuredProjects.map((project, index) => (
                <article className={`project-card featured-card featured-${project.id}`} key={project.id}>
                  <ProjectArt project={project}/>
                  <div className="featured-body">
                    <p className="project-eyebrow">{project.eyebrow}</p>
                    <h3>{project.name}</h3>
                    <p className="featured-description">{project.description}</p>
                    <p className="project-focus">{project.focus}</p>
                    <ul className="project-tools" aria-label="Project tools and methods">{project.tools.map((tool) => <li key={tool}>{tool}</li>)}</ul>
                    {project.finding && <div className="finding-note"><span>KEY FINDING</span><p>{project.finding}</p></div>}
                    {project.detailsPending && <p className="pending-note">Some project details need confirmation before publishing.</p>}
                    <div className="project-links">
                      {project.repository && <a className="project-source" href={project.repository} target="_blank" rel="noreferrer">View source code <Icon name="external" size={15}/></a>}
                      <details className="case-study"><summary>Read case study <span aria-hidden="true">＋</span></summary><div className="case-details"><p><b>Problem</b><br/><span>{project.problem}</span></p><p><b>Approach</b><br/><span>{project.approach}</span></p><p><b>Outcome</b><br/><span>{project.outcome}</span></p></div></details>
                    </div>
                  </div>
                  {index === 0 && <span className="feature-ribbon">MAIN FEATURE</span>}
                </article>
              ))}
            </div>
            <p className="work-footnote">The stock-allocation and ASCII-art summaries are based on the attached reports. Codenames project specifics remain marked for confirmation because no report or README details were provided.</p>
          </div>
        </section>

        <section className="about-section section-pad" id="about" aria-labelledby="about-title">
          <div className="section-wrap about-layout">
            <div className="about-intro"><p className="eyebrow">A little about me</p><h2 id="about-title">Curious by nature.<br/><span className="muted-title">Practical by design.</span></h2><p>{profile.about}</p><p>{profile.interests}</p><a className="text-link" href="#contact">Let’s talk <Icon name="arrow" size={16}/></a></div>
            <div className="skills-panel"><p className="eyebrow">What I bring</p>{profile.skills.map((group) => <div className="skill-group" key={group.category}><h3>{group.category}</h3><ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul></div>)}</div>
          </div>
        </section>

        <section className="experience-section section-pad" id="experience" aria-labelledby="experience-title">
          <div className="section-wrap">
            <div className="section-heading"><div><p className="eyebrow">Where I’ve contributed</p><h2 id="experience-title">Experience<span className="accent">.</span></h2></div><p className="section-aside">A mix of AI education, digital learning, and web analytics.</p></div>
            <div className="experience-list">{profile.experience.map((item, index) => <article className="experience-item" key={item.role}>
              <div className="experience-index">0{index + 1}</div>
              <div className="experience-main"><p className="experience-dates">{item.dates}</p><h3>{item.role}</h3><p className="experience-org">{item.organization}</p><ul>{item.details.map((detail) => <li key={detail}>{detail}</li>)}</ul></div>
              <span className="experience-arrow" aria-hidden="true">↗</span>
            </article>)}</div>
          </div>
        </section>

        <section className="education-section section-pad" aria-labelledby="education-title">
          <div className="section-wrap education-layout">
            <div><p className="eyebrow">Learning &amp; credentials</p><h2 id="education-title">Education<span className="accent">.</span></h2>
              <div className="education-list">{profile.education.map((item) => <article className="education-item" key={item.program}><p className="education-dates">{item.dates}</p><h3>{item.program}</h3>{item.focus && <p className="education-focus">{item.focus}</p>}<p className="education-school">{item.school}</p></article>)}</div>
            </div>
            <div className="cert-panel"><p className="eyebrow">Certifications</p><ul>{profile.certifications.map((cert) => <li key={cert}><span className="cert-mark">↗</span>{cert}</li>)}</ul></div>
          </div>
        </section>

        <section className="contact-section section-pad" id="contact" aria-labelledby="contact-title">
          <div className="section-wrap contact-card">
            <div><p className="eyebrow">Have a good problem to solve?</p><h2 id="contact-title">Let’s make<br/>something useful<span className="contact-period">.</span></h2><p className="contact-copy">I’m glad to connect about AI, analytics, learning tools, or a role where clear thinking and careful execution matter.</p></div>
            <div className="contact-actions"><a className="button button-light" href={`mailto:${profile.email}`}>Email Balu <Icon name="arrow" size={17}/></a><a className="contact-email" href={`mailto:${profile.email}`}>{profile.email}</a><a className="contact-social" href={profile.github} target="_blank" rel="noreferrer"><Icon name="github" size={17}/> GitHub <Icon name="external" size={15}/></a></div>
            <span className="contact-orbit orbit-one" aria-hidden="true"/><span className="contact-orbit orbit-two" aria-hidden="true"/>
          </div>
        </section>
      </main>

      <footer className="site-footer"><div className="section-wrap footer-inner"><a className="wordmark footer-wordmark" href="#top"><span className="wordmark-mark">B</span><span>Bala Pilli<span className="wordmark-dot">.</span></span></a><p>Thoughtful work, made with care.</p><div className="footer-right"><a href={profile.github} target="_blank" rel="noreferrer">GitHub <Icon name="external" size={14}/></a><span>© {new Date().getFullYear()} Bala Pilli</span></div></div></footer>
    </>
  );
}
