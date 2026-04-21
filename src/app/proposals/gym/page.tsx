import type { Metadata } from 'next';
import styles from './gym.module.css';

export const metadata: Metadata = {
  title: 'Social Media Content Package — Gym Proposal | WholeLottaMarketing',
  description: 'Custom social media content management proposal for your Orlando gym. Cinematic content shoots, strategic posting, community growth.',
  robots: { index: false, follow: false },
};

/* ── Data ── */
const PACKAGES = [
  {
    name: 'Starter',
    price: '$1,000',
    period: 'one-time',
    tag: null,
    features: [
      '1 half-day content shoot (2–3 hrs)',
      '10 edited Reels / short-form clips',
      'Platform-optimized exports (9:16, 1:1)',
      'Caption writing + hashtag strategy',
      'Posting over 2–4 weeks',
      'Basic color grading + sound design',
      '1 revision round per clip',
      'Content calendar included',
    ],
    highlight: false,
  },
  {
    name: 'Growth',
    price: '$1,800',
    period: '/month',
    tag: 'Recommended',
    features: [
      '1 content shoot per month (3–4 hrs)',
      '15 edited Reels + 8 Story assets',
      'Posting 4x/week (IG + TikTok)',
      'SEO-optimized captions + keyword strategy',
      'Community engagement (comments + DMs)',
      'Premium color science + transitions',
      'Monthly analytics report',
      '2 revision rounds per clip',
      'Trending audio curation',
      'Local hashtag + geo-tag strategy',
    ],
    highlight: true,
  },
  {
    name: 'Authority',
    price: '$3,200',
    period: '/month',
    tag: 'Full Service',
    features: [
      'Everything in Growth',
      '2 shoots/month + member spotlight sessions',
      '25+ Reels + daily Stories',
      'Daily posting across IG, TikTok, YouTube Shorts',
      'Trainer feature content series',
      'Member transformation mini-docs',
      'UGC coordination + repurposing',
      'Competitor analysis + trend reports',
      'Dedicated content strategist',
      'Same-day story turnaround on shoot days',
    ],
    highlight: false,
  },
];

const STRATEGY = [
  { icon: '🎯', title: 'Retention Over Reach', desc: 'Algorithms in 2026 reward watch time and saves — not vanity views. Every clip is engineered with a 1-second hook and save-worthy value.' },
  { icon: '📍', title: 'Hyper-Local Targeting', desc: 'Location tags, Orlando-specific hashtags, and community-driven content that converts nearby scrollers into walk-in members.' },
  { icon: '🔬', title: 'Topic Authority', desc: 'We position your gym as THE expert in your niche — whether it\'s strength training, group fitness, or hybrid athletics. Platforms reward consistency.' },
  { icon: '🎬', title: 'Cinematic Quality', desc: 'Every frame shot with intention. Cinema-grade cameras, professional lighting, and premium color science that stops the scroll.' },
  { icon: '📊', title: 'Data-Driven Posting', desc: 'Strategic scheduling during peak engagement windows. Monthly analytics reviews. We track saves, shares, and completion rates — not just likes.' },
  { icon: '🤝', title: 'Community Building', desc: 'Polls, Q&As, comment replies, member features. We build a two-way dialogue that signals high engagement to the algorithm.' },
];

const CONTENT_TYPES = [
  { icon: '💪', title: 'Quick Form Corrections', desc: 'Snackable 15-30s tips that members save and share' },
  { icon: '🎡', title: 'Day-in-the-Life', desc: 'Behind-the-scenes coach/trainer content that builds trust' },
  { icon: '🔥', title: 'Member Transformations', desc: 'Real results, real stories — the ultimate social proof' },
  { icon: '🏋️', title: 'Class Highlights', desc: 'High-energy group fitness moments that showcase community' },
  { icon: '📱', title: 'Trending Formats', desc: 'POVs, transitions, duets — adapted to your brand voice' },
  { icon: '🗣️', title: 'Trainer Spotlights', desc: 'Humanize your team with personality-driven clips' },
];

const TIMELINE = [
  { step: '01', title: 'Discovery Call', desc: 'Understand your gym\'s brand, goals, target demographic, and content gaps.', time: 'Week 1' },
  { step: '02', title: 'Strategy & Calendar', desc: 'Content pillars defined, posting schedule built, shot list planned.', time: 'Week 1' },
  { step: '03', title: 'Content Shoot', desc: 'On-site production day — trainers, classes, facility, member moments.', time: 'Week 2' },
  { step: '04', title: 'Edit & Launch', desc: 'Clips delivered, captions written, posting begins on schedule.', time: 'Week 2–3' },
];

/* ── Page ── */
export default function GymProposal() {
  return (
    <main className={styles.page}>
      {/* ─── Hero ─── */}
      <section className={styles.hero}>
        <div className={styles.heroGlow} />
        <div className={styles.heroContent}>
          <div className={styles.badge}>
            <span style={{ fontSize: '1rem' }}>📋</span> Social Media Proposal
          </div>
          <h1 className={styles.heroTitle}>
            Social Media<br />
            <em>Content Management</em>
          </h1>
          <p className={styles.heroSubtitle}>
            A cinematic content strategy built for your Orlando gym — designed to
            turn scrollers into members with save-worthy, share-worthy content.
          </p>
          <div className={styles.heroMeta}>
            {[
              { label: 'Client', value: '[Gym Name]' },
              { label: 'Service', value: 'Content Management' },
              { label: 'Market', value: 'Orlando, FL' },
            ].map((item) => (
              <div key={item.label} className={styles.metaItem}>
                <span className={styles.metaLabel}>{item.label}</span>
                <span className={styles.metaValue}>{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 2026 Strategy ─── */}
      <section className={styles.section}>
        <p className={styles.sectionLabel}>Our Strategy</p>
        <h2 className={styles.sectionTitle}>Built for the 2026 Algorithm.</h2>
        <p className={styles.sectionDesc}>
          Social media has shifted. It&apos;s no longer about posting more —
          it&apos;s about posting smarter. We focus on completion rates, saves,
          and shares over vanity metrics.
        </p>
        <div className={styles.strategyGrid}>
          {STRATEGY.map((s) => (
            <div key={s.title} className={styles.strategyCard}>
              <div className={styles.strategyIcon}>{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <div className={styles.divider} />

      {/* ─── Content Types ─── */}
      <section className={styles.section}>
        <p className={styles.sectionLabel}>What We Create</p>
        <h2 className={styles.sectionTitle}>Content That Converts.</h2>
        <p className={styles.sectionDesc}>
          Every piece of content answers one question: would someone save this or
          send it to a friend?
        </p>
        <div className={styles.contentGrid}>
          {CONTENT_TYPES.map((item) => (
            <div key={item.title} className={styles.contentCard}>
              <div style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }}>{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <div className={styles.divider} />

      {/* ─── Packages ─── */}
      <section className={styles.section}>
        <p className={styles.sectionLabel}>Investment</p>
        <h2 className={styles.sectionTitle}>Choose Your Plan.</h2>
        <p className={styles.sectionDesc} style={{ textAlign: 'center', marginLeft: 'auto', marginRight: 'auto' }}>
          Flexible packages designed for gyms at every stage of growth.
        </p>
        <div className={styles.packageGrid}>
          {PACKAGES.map((pkg) => (
            <div
              key={pkg.name}
              className={`${styles.packageCard} ${pkg.highlight ? styles.packageHighlight : ''}`}
            >
              {pkg.tag && <span className={styles.packageTag}>{pkg.tag}</span>}
              <h3 className={styles.packageName}>{pkg.name}</h3>
              <div className={styles.packagePrice}>
                <span>{pkg.price}</span>
                <span className={styles.packagePeriod}>{pkg.period}</span>
              </div>
              <ul className={styles.featureList}>
                {pkg.features.map((f) => (
                  <li key={f}>
                    <span className={styles.checkmark}>✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href={`mailto:hello@wholelottamarketing.com?subject=${pkg.name}%20Package%20Inquiry&body=Hi,%0AI'm%20interested%20in%20the%20${pkg.name}%20package%20for%20my%20gym.`}
                className={`${styles.packageCta} ${pkg.highlight ? styles.packageCtaHighlight : ''}`}
              >
                Get Started
              </a>
            </div>
          ))}
        </div>
      </section>

      <div className={styles.divider} />

      {/* ─── Timeline ─── */}
      <section className={styles.section}>
        <p className={styles.sectionLabel}>Timeline</p>
        <h2 className={styles.sectionTitle}>From Signed to Posting.</h2>
        <div className={styles.timelineList}>
          {TIMELINE.map((step) => (
            <div key={step.step} className={styles.timelineItem}>
              <div className={styles.timelineNum}>{step.step}</div>
              <div className={styles.timelineBody}>
                <div className={styles.timelineHeader}>
                  <h3>{step.title}</h3>
                  <span className={styles.timelineTime}>{step.time}</span>
                </div>
                <p>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className={styles.divider} />

      {/* ─── About ─── */}
      <section className={styles.section}>
        <div className={styles.aboutCard}>
          <h2>Why WholeLottaMarketing?</h2>
          <p>
            We&apos;re an Orlando-based social media agency that combines cinematic
            production quality with data-driven content strategy. We don&apos;t
            just make pretty videos — we build systems that grow your membership
            month over month.
          </p>
          <div className={styles.statsRow}>
            {[
              { value: '4K', label: 'Cinema Quality' },
              { value: '3–5x', label: 'Avg Engagement Lift' },
              { value: '100%', label: 'Orlando Based' },
            ].map((stat) => (
              <div key={stat.label} className={styles.stat}>
                <div className={styles.statValue}>{stat.value}</div>
                <div className={styles.statLabel}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className={styles.ctaSection}>
        <h2 className={styles.sectionTitle}>Ready to grow?</h2>
        <p className={styles.sectionDesc} style={{ textAlign: 'center', marginLeft: 'auto', marginRight: 'auto' }}>
          Let&apos;s talk about your gym and build a content plan that fills classes.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', alignItems: 'center' }}>
          <a href="mailto:hello@wholelottamarketing.com?subject=Gym%20Social%20Media%20Inquiry" className={styles.ctaButton}>
            Let&apos;s Talk →
          </a>
          <a href="tel:+13216665228" style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
            📞 (321) 666-5228
          </a>
        </div>
      </section>

      {/* ─── Footer ─── */}
      <footer className={styles.footer}>
        <p className={styles.footerBrand}>WholeLottaMarketing</p>
        <p className={styles.footerTagline}>Social media that moves.</p>
        <p className={styles.footerLegal}>
          This proposal is valid for 14 days from the date sent. © {new Date().getFullYear()} WholeLottaMarketing
        </p>
      </footer>
    </main>
  );
}
