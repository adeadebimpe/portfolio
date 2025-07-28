import Head from "next/head";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";

export default function Home() {
  const year = new Date().getFullYear();
  return (
    <>
      <Head>
        <title>Adebimpe Adebowale | Portfolio</title>
        <meta
          name="description"
          content="Portfolio of Bimpe Adebimpe. Case studies available upon request."
        />
      </Head>
      <main className={styles.main}>
        <Navbar />
        <div className={styles.container}>
          <section className={styles.hero}>
            <h1>
              Lead Product Designer at{" "}
              <a
                href="https://vega-alts.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                Vega
              </a>
              , where I'm designing the core client operations infrastructure
              enabling the democratisation of alternatives
            </h1>
            <p className={styles.textSecondary}>
              AltOS is a modern operating system for private markets, powering
              onboarding, transactions, client engagement, and reporting for
              some of the biggest names in alternatives.Think enterprise with
              consumer-grade polish. I lead design efforts to make all that
              complexity feel intuitive and usable.
            </p>
            <p className={styles.textSecondary}>
              Before Vega, I worked across startups and enterprise teams like
              AKQA, IBM, BMW Performance Centre, Urbansitter, Runbuggy,
              Indicina, XBTO and Bumpa; building products that are thoughtful,
              functional, and user-focused. I started out in frontend
              development, stumbled into design, and now live somewhere in the
              middle, designing with one eye on users and the other on dev
              tools.
            </p>
            <p className={styles.textSecondary}>
              Lately, I’ve been really into design engineering. I love that
              in-between space where great ideas go from static mockups to real,
              interactive experiences. Building smart, flexible components and
              obsessing over microinteractions? Yes, please.
            </p>
            <p className={styles.textSecondary}>
              I also mentor designers through Designlab and have a Master’s in
              Human-Computer Interaction Design, which shaped how I think about
              people, systems, and making tech feel human. Outside work, I’m
              usually watching action movies, catching up on sleep, or
              passionately arguing that John Wick is secretly a love story.
            </p>
            <p className={styles.textSecondary}>
              Case studies are available on request. Reach out and I'll be happy
              to share detailed insights.
            </p>
            <button
              className={styles.cta}
              onClick={() => {
                const subject = encodeURIComponent("Case Study Request");
                const body = encodeURIComponent(
                  "Hi Adebimpe,\n\nI'd love to learn more about your design work and would appreciate seeing some case studies.\n\nBest regards"
                );
                window.location.href = `mailto:hi@adeadebimpe.com?subject=${subject}&body=${body}`;
              }}
              type="button"
              aria-label="Send email to request case studies"
            >
              Request Case Studies
            </button>
          </section>
          <footer className={styles.footer}>
            <p>© {year} Adebowale Adebimpe</p>
          </footer>
        </div>
      </main>
    </>
  );
}
