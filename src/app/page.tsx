import styles from "./page.module.css";

export const dynamic = "force-dynamic";

const navItems = ["How It Works", "About", "Start", "FAQ", "Events"];

const modules = [
  { title: "Liver Recovery", tone: "muted" },
  { title: "Heart Health", tone: "accent" },
  { title: "Joint Mobility", tone: "soft" },
];

const yogaStyles = [
  "Muscle Stretch",
  "Relaxation Stretch",
  "Balance Booster",
  "Flexibility Enhancer",
  "Full-Body Stretch",
  "Strength Flow",
];

const events = [
  {
    title: "fitup wellness expo",
    meta: "full-day event · 01.03.2026 (hamid stadium)",
  },
  {
    title: "mind balance retreat",
    meta: "full-day event · 08.03.2026 (hamid stadium)",
  },
  {
    title: "training workshop",
    meta: "full-day workshop · 14.04.2026 (hamid stadium)",
  },
  {
    title: "meal planning seminar",
    meta: "full-day seminar · 23.04.2026 (hamid stadium)",
  },
];

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <header className={styles.topbar}>
          <div className={styles.brand}>
            <span className={styles.brandMark}>F</span>
            <span>fitup</span>
          </div>

          <nav className={styles.nav} aria-label="Primary">
            {navItems.map((item) => (
              <a key={item} href="#" className={styles.navItem}>
                {item}
              </a>
            ))}
          </nav>

          <button className={styles.contactBtn}>Contact us</button>
        </header>

        <section className={styles.heroSection}>
          <div className={styles.heroLeft}>
            <span className={`${styles.burst} ${styles.burstTop}`} />
            <h1>
              Build Your Perfect
              <br />
              Fitness Path
              <br />
              With <em>fitup</em>
            </h1>
            <p>
              Unlock your full potential with tailored training programs,
              behavior coaching, and practical guidance designed around your
              real goals.
            </p>

            <div className={styles.heroActions}>
              <button className={styles.primaryBtn}>Get Started</button>
              <button className={styles.textBtn}>Join Our Community</button>
            </div>

            <div className={styles.statGrid}>
              <article>
                <h2>500k+</h2>
                <p>Personalized training plans delivered</p>
              </article>
              <article>
                <h2>10k+</h2>
                <p>Active members reaching weekly milestones</p>
              </article>
            </div>
          </div>

          <div className={styles.heroRight}>
            <div className={styles.heroVisual}>
              <span className={styles.blueGlow} />
              <span className={styles.personShape} />

              <div className={styles.dotTrail} aria-hidden="true">
                <span />
                <span />
                <span />
                <span />
              </div>

              <article className={styles.overviewCard}>
                <p>Weekly Overview</p>
                <div className={styles.miniBars}>
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                </div>
                <small>Peak progress this week</small>
              </article>

              <article className={styles.memberChip}>
                <p>Members joined</p>
                <strong>4k+ this month</strong>
              </article>
            </div>
          </div>
        </section>

        <section className={styles.workSection}>
          <div className={styles.legVisual}>
            <span className={styles.legShape} />
          </div>

          <div className={styles.workContent}>
            <h3>How Fitup Works</h3>
            <p>
              We combine guided fitness routines with practical wellness
              insights to improve movement, endurance, and long-term balance.
            </p>

            <div className={styles.moduleRow}>
              {modules.map((item) => (
                <article
                  key={item.title}
                  className={`${styles.moduleCard} ${styles[item.tone]}`}
                >
                  <span className={styles.moduleOrb} />
                  <p>{item.title}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.mealSection}>
          <div className={styles.mealInfo}>
            <h3>
              Fit your body with
              <br />
              balanced <em>meals</em>
            </h3>
            <p>
              With options for diverse dietary preferences, our meal guidance is
              built to keep your choices practical, simple, and sustainable.
            </p>

            <div className={styles.mealFilters}>
              <button className={styles.filterActive}>Non Vegan</button>
              <button className={styles.filterGhost}>Vegan</button>
            </div>
          </div>

          <div className={styles.bowlVisualWrap}>
            <span className={`${styles.burst} ${styles.burstMeal}`} />
            <div className={styles.bowlVisual}>
              <div className={styles.calorieChip}>
                <p>Calories</p>
                <strong>2091 / day</strong>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.yogaSection}>
          <div className={styles.yogaHead}>
            <h3>
              Find Your Perfect
              <br />
              Yoga <em>style</em>
            </h3>
            <p>
              Explore focused yoga styles tailored to mobility, flexibility,
              recovery, and whole-body strength.
            </p>
          </div>

          <div className={styles.yogaGrid}>
            {yogaStyles.map((item, index) => (
              <article key={item} className={styles.yogaCard}>
                <span className={styles.yogaWord}>YOGA</span>
                <span
                  className={`${styles.pose} ${styles[`pose${(index % 3) + 1}`]}`}
                />
                <div className={styles.yogaFooter}>
                  <p>{item}</p>
                  <span>→</span>
                </div>
              </article>
            ))}
          </div>

          <button className={styles.checkBtn}>CHECK ALL</button>
        </section>

        <section className={styles.eventsSection}>
          <div className={styles.marqueeRow}>
            <span>exhibition</span>
            <span className={styles.burstMini} />
            <span>exhibition</span>
            <span className={styles.burstMini} />
            <span>exhibition</span>
          </div>

          <div className={styles.eventList}>
            {events.map((event, index) => (
              <article key={event.title} className={styles.eventRow}>
                <span className={styles.eventIndex}>{String(index + 1).padStart(2, "0")}</span>
                <h4>{event.title}</h4>
                <p>{event.meta}</p>
                <button className={styles.reserveBtn}>Reserve Your Spot</button>
              </article>
            ))}
          </div>

          <footer className={styles.bottomBrand}>
            <span className={styles.bottomBurst} />
            <strong>fitup</strong>
            <small>2026 all rights reserved.</small>
          </footer>
        </section>
      </main>
    </div>
  );
}
