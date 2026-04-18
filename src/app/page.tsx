import Link from "next/link";
import styles from "./page.module.css";

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.intro}>
          <h1>FreshSIM Frontend is ready (SSR enabled).</h1>
          <p>
            The full long-form page you requested is live at <strong>/how</strong>{" "}
            with SSR rendering, detailed SEO metadata, and a very large
            official PTA-method guide.
          </p>
        </div>
        <div className={styles.ctas}>
          <Link
            className={styles.primary}
            href="/how"
          >
            Open the /how page
          </Link>
        </div>
      </main>
    </div>
  );
}
