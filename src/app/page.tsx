import Link from "next/link";
import styles from "./page.module.css";

export const dynamic = "force-dynamic";

const quickFacts = [
  "668 is for CNIC-linked SIM count self-check.",
  "cnic.sims.pk is the official web confirmation route.",
  "76367 identifies network/operator, not personal identity.",
  "667 is used for MNP pre-porting verification.",
];

const complaintSteps = [
  "Recheck your CNIC-linked SIM count using official methods.",
  "Contact the relevant operator with original identity proof.",
  "Escalate through PTA complaint channels if unresolved.",
];

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <header className={styles.navbar}>
          <div className={styles.brandGroup}>
            <span className={styles.brandIcon}>FS</span>
            <div>
              <p className={styles.brandTitle}>FreshSIM</p>
              <p className={styles.brandSub}>Official self-check guidance hub</p>
            </div>
          </div>

          <nav className={styles.navLinks}>
            <a href="#official-methods">Official Methods</a>
            <a href="#problems">Problems & Solutions</a>
            <a href="#faq">FAQ Snapshot</a>
          </nav>

          <div className={styles.navActions}>
            <a className={styles.tinyButton} href="#official-methods">
              PTA Routes
            </a>
            <Link className={styles.darkButton} href="/how">
              Open Full Guide
            </Link>
          </div>
        </header>

        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <p className={styles.eyebrow}>Official PTA Self-Check Flow • Updated 2026</p>
            <h1>SIM Owner Detail Website, Redesigned for Trust and Clarity</h1>
            <p>
              Verify your own CNIC-linked SIM records through official routes,
              understand 667 vs 668 vs 76367 quickly, and move to the right
              complaint step if anything looks suspicious.
            </p>

            <div className={styles.buttonRow}>
              <Link className={styles.primaryButton} href="/how">
                Start Complete Workflow
              </Link>
              <a className={styles.secondaryButton} href="#official-methods">
                View Core Methods
              </a>
            </div>

            <ul className={styles.chips}>
              <li>Lawful self-check only</li>
              <li>No hidden private database claims</li>
              <li>Operator + PTA escalation ready</li>
            </ul>
          </div>

          <div className={styles.heroVisual} aria-hidden="true">
            <div className={styles.personShape} />
            <div className={styles.floorOrb} />
            <div className={styles.deviceCard}>
              <p>Live Verification Panel</p>
              <ul>
                <li>668 CNIC count</li>
                <li>cnic.sims.pk check</li>
                <li>Complaint escalation</li>
              </ul>
            </div>
            <div className={styles.lamp} />
          </div>
        </section>

        <section className={styles.featureGrid} id="official-methods">
          <article className={styles.textPanel}>
            <p className={styles.panelKicker}>Method clarity</p>
            <h2 className={styles.panelTitle}>Use the right channel for the right result</h2>
            <p className={styles.panelText}>
              Most confusion happens when users mix SIM count checks, network
              checks, and portability checks. This interface keeps each method
              in context so action is fast and accurate.
            </p>
            <ul className={styles.checkList}>
              {quickFacts.map((fact) => (
                <li key={fact}>{fact}</li>
              ))}
            </ul>
            <div className={styles.actionRow}>
              <a className={styles.darkButton} href="#problems">
                See Troubleshooting
              </a>
            </div>
          </article>

          <article className={styles.visualPanel} aria-hidden="true">
            <div className={styles.visualOrbLarge} />
            <div className={styles.visualOrbSmall} />
            <div className={styles.visualCard}>668 + Portal Cross-Check</div>
          </article>
        </section>

        <section className={styles.featureGrid} id="problems">
          <article className={styles.visualPanelAlt} aria-hidden="true">
            <div className={styles.visualPhone} />
            <div className={styles.visualStat}>Unknown SIM? Act in 3 steps</div>
          </article>

          <article className={styles.textPanel}>
            <p className={styles.panelKicker}>Security response</p>
            <h2 className={styles.panelTitle}>If an extra SIM appears, respond immediately</h2>
            <p className={styles.panelText}>
              A suspicious CNIC result should never be ignored. Follow this
              quick flow to validate, report, and resolve with proper evidence.
            </p>
            <ol className={styles.steps}>
              {complaintSteps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
            <div className={styles.actionRow}>
              <Link className={styles.darkButton} href="/how">
                Read Detailed Complaint Guide
              </Link>
            </div>
          </article>
        </section>

        <section className={styles.ctaStrip} id="faq">
          <h2>Need complete edge-case coverage?</h2>
          <p>
            Explore the full long-form /how page for deeper FAQs, method limits,
            legal-safe usage guidance, and escalation best practices.
          </p>
          <Link className={styles.primaryButton} href="/how">
            Open the Full /how Guide
          </Link>
        </section>

        <footer className={styles.footer}>
          <div className={styles.footerGrid}>
            <div className={styles.footerBrand}>
              <h3 className={styles.footerTitle}>FreshSIM</h3>
              <p className={styles.footerText}>
                Professional SIM self-check guidance focused on official
                verification methods, cleaner UX, and stronger user trust.
              </p>
            </div>

            <div className={styles.footerColumn}>
              <h4>Core Methods</h4>
              <ul>
                <li>668 CNIC count</li>
                <li>cnic.sims.pk portal</li>
                <li>667 MNP check</li>
                <li>76367 network ID</li>
              </ul>
            </div>

            <div className={styles.footerColumn}>
              <h4>Problem Flow</h4>
              <ul>
                <li>No reply handling</li>
                <li>Wrong CNIC format</li>
                <li>Unknown SIM escalation</li>
                <li>Operator follow-up</li>
              </ul>
            </div>

            <div className={styles.footerColumn}>
              <h4>Quick Access</h4>
              <ul>
                <li>
                  <Link href="/how">/how long-form guide</Link>
                </li>
                <li>
                  <a href="#official-methods">Official methods</a>
                </li>
                <li>
                  <a href="#problems">Common problems</a>
                </li>
              </ul>
            </div>
          </div>

          <div className={styles.footerBottom}>
            <p>© 2026 FreshSIM. Lawful self-check guidance only.</p>
            <p>Cross-check sensitive results with official PTA-related channels.</p>
          </div>
        </footer>
      </main>
    </div>
  );
}
