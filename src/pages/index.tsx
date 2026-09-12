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
    description: 'Description of the Year 8 subjects here.',
  },
  {
    title: 'Year 9',
    to: '/docs/year-9/',
    description: 'Description of the Year 9 subjects here.',
  },
  {
    title: 'Year 10',
    to: '/docs/year-10/',
    description: 'Description of the Year 10 subjects here.',
  },
  {
    title: 'IB Programme',
    to: '/docs/ib-programme/',
    description: 'Description of the IB pathways, DP Core, and courses here.',
  },
];

const STEPS = ['Find your subject', 'Read the introduction', 'Use our resources'];

function HomepageHeader(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
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
        <section className={styles.section}>
          <div className="container">
            <Heading as="h2" className={styles.sectionHeading}>
              Start here
            </Heading>
            <div className={styles.grid}>
              {CARDS.map((card) => (
                <Link className={styles.card} key={card.title} to={card.to}>
                  <Heading as="h3" className={styles.cardTitle}>
                    {card.title}
                  </Heading>
                  <p className={styles.cardDescription}>{card.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section
          className={styles.sectionAlt}
          aria-label="How to use this resource">
          <div className="container">
            <div className={styles.stepGrid}>
              {STEPS.map((step, index) => (
                <div className={styles.step} key={step}>
                  <span className={styles.stepNumber}>{index + 1}</span>
                  <Heading as="h3" className={styles.stepTitle}>
                    {step}
                  </Heading>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
