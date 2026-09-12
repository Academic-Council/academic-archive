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
    title: 'IB (Years 11–12)',
    to: '/docs/ib/',
    description: 'Description of the IB pathways, DP Core, and subjects here.',
  },
];

const STEPS = [
  'Find your subject',
  'Read the introduction',
  'Use our resources',
];

const QUICK_LINKS = [
  {label: 'About', to: '/docs/'},
  {label: 'Graduation Pathways', to: '/docs/ib/pathways/'},
  {label: 'Browse by tag', to: '/docs/tags/'},
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

        <section className={styles.sectionAlt}>
          <div className="container">
            <Heading as="h2" className={styles.sectionHeading}>
              How to use this resource
            </Heading>
            <div className={styles.grid}>
              {STEPS.map((step, index) => (
                <div key={step}>
                  <span className={styles.stepNumber}>{index + 1}</span>
                  <Heading as="h3" className={styles.stepTitle}>
                    {step}
                  </Heading>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className="container">
            <Heading as="h2" className={styles.sectionHeading}>
              Quick links
            </Heading>
            <div className={clsx(styles.grid, styles.gridStart)}>
              {QUICK_LINKS.map((link) => (
                <Link className={styles.quickLink} key={link.label} to={link.to}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
