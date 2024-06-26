import Layout from "@theme/Layout";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import Link from "@docusaurus/Link";
import styles from "./index.module.css";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";
import Translate, { translate } from "@docusaurus/Translate";
import React from "react";

export default function HomePage() {
  const title = translate({ message: '主页', id: 'homepage' })
  return (
    <Layout title={title}>
      <div className={styles.hero}>
        <div className={styles.heroInner}>
          <Heading as="h1" className={styles.heroProjectTagline}>
            <img
              width="300"
              className={styles.heroLogo}
              src="./img/logo.svg"
              alt="logo"
            />
            <div
                className={styles.heroTitle}
                dangerouslySetInnerHTML={{
                    __html: translate({
                    id: 'homepage.title',
                    message:
                        '<b>跨系统</b>、<b>轻量</b>的 OpenBMCLAPI Python 版本',
                    }),
                }}
            />
          </Heading>
          <div className={styles.buttons}>
            <Link className="button button--primary" to="/docs/getting-started/use-systemd">
              <Translate id="homepage.button.quick-start"> 快速开始 </Translate>
            </Link>
            <Link className="button button--info" to="/docs">
              <Translate id="homepage.button.info"> 了解更多 </Translate>
            </Link>
          </div>
        </div>
      </div>
      <HomepageFeatures />
      <Analytics />
      <SpeedInsights />
    </Layout>
  );
}
