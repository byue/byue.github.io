import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { EditorialRule } from "./components/EditorialRule";
import { Reveal } from "./components/Reveal";
import { profile } from "./data/profile";
import { getResponsiveImageProps } from "./utils/images";

type ProjectEntry = (typeof profile.projects.entries)[number];

function App() {
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const heroParallaxY = useTransform(scrollYProgress, [0, 1], [0, -64]);

  const [activeProjectId, setActiveProjectId] = useState<string | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const resumeEntry = profile.navigation.find((item) => item.kind === "asset" && item.id === "resume");
  const rawResumeHref = resumeEntry?.href ?? "resume.pdf";
  const resumeHref = /^https?:\/\//.test(rawResumeHref)
    ? rawResumeHref
    : `${import.meta.env.BASE_URL}${rawResumeHref}`;
  const resolveAssetHref = (href: string) =>
    /^https?:\/\//.test(href) ? href : `${import.meta.env.BASE_URL}${href}`;

  const activeProject = profile.projects.entries.find(
    (entry): entry is ProjectEntry => entry.id === activeProjectId,
  );
  const heroImage = profile.images[profile.hero.imagePrimaryId];
  const heroImageProps = getResponsiveImageProps(heroImage.url, {
    sizes: "(min-width: 1400px) 760px, (min-width: 1024px) 56vw, (min-width: 768px) 90vw, 92vw",
    widths: [640, 768, 960, 1200, 1440, 1800, 2200],
    defaultWidth: 1440,
    quality: 70,
  });
  const contactImage = profile.images[profile.contact.imageId];
  const contactImageProps = getResponsiveImageProps(contactImage.url, {
    sizes: "(min-width: 1400px) 1280px, 92vw",
    widths: [640, 768, 960, 1200, 1440, 1800, 2200],
    defaultWidth: 1400,
    quality: 68,
  });
  const activeProjectImage = activeProject ? profile.images[activeProject.imageId] : null;
  const activeProjectImageProps = activeProjectImage
    ? getResponsiveImageProps(activeProjectImage.url, {
        sizes: "(min-width: 1024px) 700px, 92vw",
        widths: [480, 640, 768, 960, 1200, 1400],
        defaultWidth: 960,
        quality: 62,
      })
    : null;

  useEffect(() => {
    if (!activeProject) {
      return undefined;
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveProjectId(null);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [activeProject]);

  useEffect(() => {
    if (!copiedEmail) {
      return undefined;
    }

    const timeoutId = window.setTimeout(() => setCopiedEmail(false), 1400);
    return () => window.clearTimeout(timeoutId);
  }, [copiedEmail]);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.person.email);
      setCopiedEmail(true);
    } catch {
      setCopiedEmail(false);
    }
  };

  return (
    <div className="relative overflow-x-hidden bg-[var(--paper)] text-[var(--ink)]">
      <header className="sticky top-0 z-40 border-b border-[var(--rule)] bg-[color:rgba(255,255,255,0.95)] shadow-[0_1px_8px_rgba(20,20,20,0.04)] backdrop-blur-sm">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-6 px-6 py-3 md:px-10">
          <div className="min-w-0">
            <p className="kicker">{profile.masthead.title}</p>
            <p className="font-serif text-sm tracking-[0.06em]">{profile.masthead.issue}</p>
          </div>

	          <nav aria-label="Main" className="hidden items-center gap-5 lg:flex">
	            {profile.navigation.map((item) =>
	              item.kind === "section" ? (
	                <a key={item.id} className="editorial-link nav-link" href={`#${item.id}`}>
	                  {item.label}
	                </a>
	              ) : (
	                <a
	                  key={item.id}
	                  className="editorial-link nav-link"
	                  href={resolveAssetHref(item.href)}
	                  target="_blank"
	                  rel="noreferrer"
	                >
	                  {item.label}
	                </a>
	              ),
	            )}
	          </nav>

	          <button
	            type="button"
	            className="toggle-button text-xs lg:hidden"
	            aria-expanded={mobileMenuOpen}
	            aria-controls="mobile-menu"
	            onClick={() => setMobileMenuOpen((open) => !open)}
	          >
            {mobileMenuOpen ? profile.ui.closeLabel : profile.ui.menuLabel}
          </button>
        </div>
        <AnimatePresence>
          {mobileMenuOpen ? (
            <motion.nav
              id="mobile-menu"
              aria-label="Mobile"
              className="absolute inset-x-0 top-full border-b border-[var(--rule)] bg-[color:rgba(255,255,255,0.97)] shadow-[0_8px_20px_rgba(20,20,20,0.08)] lg:hidden"
              initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: -8 }}
              animate={reducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
              exit={reducedMotion ? { opacity: 0 } : { opacity: 0, y: -8 }}
              transition={{ duration: reducedMotion ? 0.01 : 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="mx-auto flex max-w-[1400px] flex-col gap-4 px-6 py-4 md:px-10">
                {profile.navigation.map((item) =>
                  item.kind === "section" ? (
                    <a
                      key={item.id}
                      className="editorial-link nav-link"
                      href={`#${item.id}`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  ) : (
                    <a
                      key={item.id}
                      className="editorial-link nav-link"
                      href={resolveAssetHref(item.href)}
                      target="_blank"
                      rel="noreferrer"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  ),
                )}
              </div>
            </motion.nav>
          ) : null}
        </AnimatePresence>
      </header>

      <main>
        <section className="mx-auto max-w-[1400px] px-6 pb-20 pt-16 md:px-10 md:pt-20">
          <div className="grid grid-cols-12 items-start gap-8 lg:gap-12">
            <Reveal className="col-span-12 min-w-0 lg:col-span-5">
              <EditorialRule className="block h-px w-24 bg-[var(--accent)]" />

              <h1 className="mt-6 font-serif text-6xl leading-[0.9] tracking-tight md:text-7xl">
                {profile.person.name}
              </h1>
              <p className="mt-5 max-w-xl text-lg text-[var(--muted)] md:text-xl">{profile.person.title}</p>
              <p className="mt-4 max-w-xl text-base text-[var(--muted)]">{profile.person.summary}</p>

              <div className="mt-8 flex flex-wrap items-center gap-2">
                {profile.hero.metadata.map((item) => (
                  <span key={item} className="metadata-chip">
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-5">
                <a className="cta-primary" href={resumeHref} target="_blank" rel="noreferrer">
                  {profile.hero.primaryCtaLabel}
                </a>
              </div>
            </Reveal>

            <Reveal className="col-span-12 min-w-0 lg:col-span-7" delay={0.08}>
              <figure className="relative">
                <div className="relative overflow-hidden panel-frame bg-neutral-200">
                  <motion.img
                    src={heroImageProps.src}
                    srcSet={heroImageProps.srcSet}
                    sizes={heroImageProps.sizes}
                    alt={heroImage.alt}
                    className="h-[62vh] w-full object-cover object-center md:h-[72vh]"
                    loading="eager"
                    fetchPriority="high"
                    decoding="async"
                    style={reducedMotion ? undefined : { y: heroParallaxY }}
                    animate={
                      reducedMotion
                        ? undefined
                        : {
                            scale: [1, 1.04, 1],
                          }
                    }
                    transition={
                      reducedMotion
                        ? undefined
                        : {
                            duration: 18,
                            ease: "easeInOut",
                            repeat: Infinity,
                          }
                    }
                  />
                </div>
                <figcaption className="caption mt-3">
                  {heroImage.caption}
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </section>

        <section id={profile.about.id} className="border-t border-[var(--rule)] bg-[var(--paper-soft)] py-20">
          <div className="mx-auto max-w-[1400px] px-6 md:px-10">
            <Reveal>
              <p className="kicker">{profile.about.kicker}</p>
              <h2 className="mt-4 max-w-3xl font-serif text-4xl leading-tight md:text-5xl">{profile.about.heading}</h2>
              <EditorialRule className="mt-6 block h-px w-full bg-[var(--rule)]" />
            </Reveal>

            <div className="mt-10 grid grid-cols-12 gap-8 lg:gap-10">
              <Reveal className="col-span-12">
                <div className="columns-1 gap-10 md:columns-2">
                  {profile.about.paragraphs.map((paragraph, index) => (
                    <p
                      key={paragraph}
                      className={index === 0 ? "drop-cap mb-6 text-base leading-8" : "mb-6 text-base leading-8"}
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>

                <blockquote className="mt-10 border-l border-[var(--accent)] pl-6 font-serif text-2xl leading-tight text-[var(--ink)] md:text-3xl">
                  "{profile.about.pullQuote}"
                </blockquote>
              </Reveal>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {profile.about.impactBlocks.map((block, index) => (
                <Reveal key={block.title} delay={index * 0.05}>
                  <article className="h-full panel-frame bg-white p-5">
                    <p className="font-serif text-3xl leading-none">{block.metric}</p>
                    <p className="mt-2 text-xs uppercase tracking-[0.16em] text-[var(--muted)]">{block.title}</p>
                    <p className="mt-4 text-sm leading-6 text-[var(--muted)]">{block.note}</p>
                  </article>
                </Reveal>
              ))}
            </div>

          </div>
        </section>

        <section id={profile.experience.id} className="border-t border-[var(--rule)] bg-white py-20">
          <div className="mx-auto max-w-[1400px] px-6 md:px-10">
            <Reveal>
              <p className="kicker">{profile.experience.kicker}</p>
              <h2 className="mt-4 font-serif text-4xl leading-tight md:text-5xl">{profile.experience.heading}</h2>
              <EditorialRule className="mt-6 block h-px w-full bg-[var(--rule)]" />
            </Reveal>

            <div className="mt-8">
              {profile.experience.chapters.map((chapter, index) => {
                return (
                  <Reveal key={chapter.id} delay={index * 0.02}>
                    <>
                      <article className="grid py-10 lg:grid-cols-[1fr_320px] lg:gap-8">
                        <div>
                          <div className="flex flex-wrap items-start gap-4">
                            <div>
                              <h3 className="font-serif text-3xl leading-tight">{chapter.role}</h3>
                              <p className="mt-1 text-lg">{chapter.company}</p>
                              <p className="mt-3 text-sm uppercase tracking-[0.14em] text-[var(--muted)]">
                                {chapter.dateRange} | {chapter.location}
                              </p>
                            </div>
                          </div>

                          <p className="mt-5 max-w-3xl text-base leading-8 text-[var(--muted)]">{chapter.summary}</p>

                          <motion.ul
                            className="mt-5 list-disc space-y-3 pl-5 pr-2 marker:text-[var(--accent)]"
                            initial={reducedMotion ? "visible" : "hidden"}
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.35 }}
                            variants={{
                              hidden: reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 },
                              visible: {
                                opacity: 1,
                                y: 0,
                                transition: {
                                  duration: reducedMotion ? 0.01 : 0.4,
                                  ease: [0.22, 1, 0.36, 1],
                                  staggerChildren: reducedMotion ? 0 : 0.07,
                                  delayChildren: reducedMotion ? 0 : 0.08,
                                },
                              },
                            }}
                          >
                            {chapter.highlights.map((highlight) => (
                              <motion.li
                                key={highlight}
                                className="text-[15px] leading-7 text-[var(--muted)]"
                                variants={{
                                  hidden: reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 },
                                  visible: {
                                    opacity: 1,
                                    y: 0,
                                    transition: { duration: reducedMotion ? 0.01 : 0.35, ease: [0.22, 1, 0.36, 1] },
                                  },
                                }}
                              >
                                {highlight}
                              </motion.li>
                            ))}
                          </motion.ul>
                        </div>

                        <aside className="mt-8 lg:mt-0 lg:border-l lg:border-[var(--rule)] lg:border-l-[1px] lg:pl-6">
                          <div className="flex flex-wrap gap-2">
                            {chapter.techUsed.map((tech) => (
                              <span key={tech} className="metadata-chip">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </aside>
                      </article>
                      <div className="h-px bg-[var(--rule)]" />
                    </>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        <section id={profile.projects.id} className="mx-auto max-w-[1400px] px-6 py-20 md:px-10">
          <Reveal>
            <p className="kicker">{profile.projects.kicker}</p>
            <h2 className="mt-4 font-serif text-4xl leading-tight md:text-5xl">{profile.projects.heading}</h2>
            <p className="mt-4 max-w-3xl text-base leading-8 text-[var(--muted)]">{profile.projects.intro}</p>
            <EditorialRule className="mt-6 block h-px w-full bg-[var(--rule)]" />
          </Reveal>

          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {profile.projects.entries.map((project, index) => {
              const image = profile.images[project.imageId];
              const projectImageProps = getResponsiveImageProps(image.url, {
                sizes: "(min-width: 1400px) 620px, (min-width: 768px) 44vw, 92vw",
                widths: [360, 480, 640, 768, 960, 1200, 1400],
                defaultWidth: 768,
                quality: 62,
              });

              return (
                <Reveal key={project.id} className="h-full" delay={index * 0.04}>
                  <button
                    type="button"
                    onClick={() => setActiveProjectId(project.id)}
                    className="group panel-frame flex h-full w-full flex-col bg-white text-left transition hover:-translate-y-1 hover:shadow-[0_16px_30px_rgba(20,20,20,0.08)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
                  >
                    <div className="overflow-hidden">
                      <motion.img
                        src={projectImageProps.src}
                        srcSet={projectImageProps.srcSet}
                        sizes={projectImageProps.sizes}
                        alt={image.alt}
                        loading="lazy"
                        decoding="async"
                        className="h-[320px] w-full object-cover"
                        whileHover={reducedMotion ? undefined : { scale: 1.03 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      />
                    </div>
                    <div className="flex flex-1 flex-col space-y-4 p-6">
                      <div className="flex items-end justify-between gap-4">
                        <h3 className="font-serif text-2xl leading-tight">{project.title}</h3>
                        <p className="text-xs uppercase tracking-[0.16em] text-[var(--muted)]">{project.year}</p>
                      </div>
                      <p className="text-sm leading-7 text-[var(--muted)]">{project.caption}</p>

                      <div className="mt-auto flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span key={tag} className="metadata-chip">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </button>
                </Reveal>
              );
            })}
          </div>
        </section>

        <section id={profile.publications.id} className="border-y border-[var(--rule)] bg-[var(--paper-soft)] py-20">
          <div className="mx-auto max-w-[1400px] px-6 md:px-10">
            <Reveal>
              <p className="kicker">{profile.publications.kicker}</p>
              <h2 className="mt-4 font-serif text-4xl md:text-5xl">{profile.publications.heading}</h2>
              <p className="mt-4 text-base text-[var(--muted)]">{profile.publications.intro}</p>
              <EditorialRule className="mt-6 block h-px w-full bg-[var(--rule)]" />
            </Reveal>

            <div className="mt-7">
              {profile.publications.items.map((item, index) => (
                <Reveal key={item.label} delay={index * 0.04}>
                  <article className="grid items-start gap-4 border-b border-[var(--rule)] py-6 md:grid-cols-[100px_1fr]">
                    <p className="text-xs uppercase tracking-[0.16em] text-[var(--muted)]">
                      {profile.ui.featureLabel} {index + 1}
                    </p>
                    <div className="space-y-2">
                      <a
                        className="editorial-link font-serif text-2xl leading-tight"
                        href={item.href}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {item.label}
                      </a>
                      {item.description ? (
                        <p className="max-w-4xl text-sm leading-7 text-[var(--muted)]">{item.description}</p>
                      ) : null}
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id={profile.education.id} className="border-y border-[var(--rule)] bg-white py-20">
          <div className="mx-auto max-w-[1400px] px-6 md:px-10">
            <Reveal>
              <p className="kicker">{profile.education.kicker}</p>
              <h2 className="mt-4 font-serif text-4xl md:text-5xl">{profile.education.heading}</h2>
              <EditorialRule className="mt-6 block h-px w-full bg-[var(--rule)]" />
            </Reveal>

            <div className="mt-10 grid gap-12 md:grid-cols-2">
              <Reveal>
                <p className="kicker">{profile.ui.educationLabel}</p>
                <div className="mt-4 space-y-4">
                  {profile.education.educationItems.map((item) => (
                    <p key={item} className="font-serif text-2xl leading-tight">
                      {item}
                    </p>
                  ))}
                </div>
              </Reveal>

              <Reveal delay={0.08}>
                <p className="kicker">{profile.ui.honorsLabel}</p>
                <div className="mt-4 space-y-3">
                  {profile.education.honors.map((honor) => (
                    <p key={honor} className="text-lg leading-relaxed">
                      {honor}
                    </p>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section id={profile.contact.id} className="mx-auto max-w-[1400px] px-6 py-20 md:px-10">
          <Reveal>
            <p className="kicker">{profile.contact.kicker}</p>
            <h2 className="mt-4 max-w-3xl font-serif text-4xl leading-tight md:text-5xl">{profile.contact.heading}</h2>
            <p className="mt-4 text-base text-[var(--muted)]">{profile.contact.note}</p>
          </Reveal>

          <Reveal className="mt-8">
            <div className="relative overflow-hidden panel-frame bg-black text-white">
              <motion.img
                src={contactImageProps.src}
                srcSet={contactImageProps.srcSet}
                sizes={contactImageProps.sizes}
                alt={contactImage.alt}
                loading="lazy"
                decoding="async"
                className="h-[58vh] w-full object-cover md:h-[66vh]"
                animate={
                  reducedMotion
                    ? undefined
                    : {
                        scale: [1, 1.03, 1],
                      }
                }
                transition={
                  reducedMotion
                    ? undefined
                    : {
                        duration: 22,
                        ease: "easeInOut",
                        repeat: Infinity,
                      }
                }
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/70" />

              <div className="absolute bottom-0 left-0 w-full p-6 md:p-10">
                <p className="kicker text-white/80">{profile.contact.primaryCta}</p>
                <div className="mt-5 flex flex-wrap items-center gap-4">
                  <a className="cta-primary inverted" href={`mailto:${profile.person.email}`}>
                    {profile.person.email}
                  </a>
                  <button className="cta-secondary" type="button" onClick={copyEmail}>
                    {copiedEmail ? profile.ui.copiedLabel : profile.ui.copyEmailLabel}
                  </button>
                </div>

                <div className="mt-5 flex flex-wrap gap-5 text-sm uppercase tracking-[0.16em] text-white/85">
                  <a className="editorial-link text-white" href={profile.person.linkedin} target="_blank" rel="noreferrer">
                    {profile.ui.linkedinLabel}
                  </a>
                  <a className="editorial-link text-white" href={profile.person.github} target="_blank" rel="noreferrer">
                    {profile.ui.githubLabel}
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </section>
      </main>

      <footer className="border-t border-[var(--rule)]">
        <div className="mx-auto max-w-[1400px] px-6 py-6 md:px-10">
          <p className="text-xs uppercase tracking-[0.16em] text-[var(--muted)]">{profile.ui.copyright}</p>
        </div>
      </footer>

      <AnimatePresence>
        {activeProject ? (
          <motion.div
            className="fixed inset-0 z-50 flex items-end justify-center bg-black/55 p-4 backdrop-blur-[2px] md:items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveProjectId(null)}
          >
            <motion.article
              role="dialog"
              aria-modal="true"
              aria-label={`${activeProject.title} case study`}
              className="panel-frame max-h-[94vh] w-full max-w-5xl overflow-y-auto bg-[var(--paper)] p-6 md:p-10"
              initial={reducedMotion ? { opacity: 1 } : { y: 24, opacity: 0 }}
              animate={reducedMotion ? { opacity: 1 } : { y: 0, opacity: 1 }}
              exit={reducedMotion ? { opacity: 0 } : { y: 16, opacity: 0 }}
              transition={{ duration: reducedMotion ? 0.01 : 0.35, ease: [0.22, 1, 0.36, 1] }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="kicker">{profile.ui.projectSpreadLabel}</p>
                  <h3 className="mt-2 font-serif text-4xl leading-tight">{activeProject.title}</h3>
                  <p className="mt-3 text-xs uppercase tracking-[0.16em] text-[var(--muted)]">{activeProject.year}</p>
                  <a
                    className="editorial-link mt-4 inline-flex text-xs uppercase tracking-[0.16em]"
                    href={activeProject.repoUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {profile.ui.repositoryLabel}
                  </a>
                </div>
                <button type="button" className="toggle-button" onClick={() => setActiveProjectId(null)}>
                  {profile.ui.closeLabel}
                </button>
              </div>

              <EditorialRule className="mt-6 block h-px w-full bg-[var(--rule)]" />

              <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_240px]">
                <div>
                  <div className="panel-frame overflow-hidden">
                    {activeProjectImage && activeProjectImageProps ? (
                      <img
                        src={activeProjectImageProps.src}
                        srcSet={activeProjectImageProps.srcSet}
                        sizes={activeProjectImageProps.sizes}
                        alt={activeProjectImage.alt}
                        loading="eager"
                        decoding="async"
                        className="h-[320px] w-full object-cover"
                      />
                    ) : null}
                  </div>
                  <div className="mt-8 space-y-8">
                    <div>
                      <p className="kicker">{profile.ui.problemLabel}</p>
                      <p className="mt-2 text-base leading-8 text-[var(--muted)]">{activeProject.problem}</p>
                    </div>
                    <div>
                      <p className="kicker">{profile.ui.approachLabel}</p>
                      <p className="mt-2 text-base leading-8 text-[var(--muted)]">{activeProject.approach}</p>
                    </div>
                    <div>
                      <p className="kicker">{profile.ui.outcomeLabel}</p>
                      <p className="mt-2 text-base leading-8 text-[var(--muted)]">{activeProject.outcome}</p>
                    </div>
                  </div>

                  <div className="mt-8 flex flex-wrap gap-2">
                    {activeProject.tags.map((tag) => (
                      <span key={tag} className="metadata-chip">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <aside className="panel-frame bg-white p-5">
                  <p className="kicker">{profile.ui.keyNumbersLabel}</p>
                  <div className="mt-4 space-y-5">
                    {activeProject.keyNumbers.map((item) => (
                      <div key={item.label}>
                        <p className="font-serif text-2xl leading-none">{item.value}</p>
                        <p className="mt-1 text-xs uppercase tracking-[0.16em] text-[var(--muted)]">{item.label}</p>
                      </div>
                    ))}
                  </div>
                </aside>
              </div>
            </motion.article>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

export default App;
