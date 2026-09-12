import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

type GuideCard = {
  title: string;
  to: string;
  description: string;
};

const CARDS: GuideCard[] = [
  {
    title: 'Year 8',
    to: '/docs/year-8/',
    description: 'Placeholder — description of the Year 8 courses here.',
  },
  {
    title: 'Year 9',
    to: '/docs/year-9/',
    description: 'Placeholder — description of the Year 9 courses here.',
  },
  {
    title: 'Year 10',
    to: '/docs/year-10/',
    description: 'Placeholder — description of the Year 10 courses here.',
  },
  {
    title: 'IB (Years 11–12)',
    to: '/docs/ib/',
    description:
      'Placeholder — description of the IB pathways, DP Core, and subjects here.',
  },
];

function HomepageHeader(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/year-8/">
            Years 8–10
          </Link>
          <Link className="button button--secondary button--lg" to="/docs/ib/">
            IB (Years 11–12)
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline}>
      <HomepageHeader />
      <main>
        <section className="container">
          <div className={styles.cardGrid}>
            {CARDS.map((card) => (
              <Link className={styles.card} key={card.title} to={card.to}>
                <Heading as="h2" className={styles.cardTitle}>
                  {card.title}
                </Heading>
                <p className={styles.cardDescription}>{card.description}</p>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </Layout>
  );
}
