import Link from 'next/link';

export default function Home() {
  return (
    <main style={{ minHeight: '100vh' }}>
      {/* ─── Hero ─────────────────────────────────────────── */}
      <section
        style={{
          position: 'relative',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          padding: '6rem 1.5rem',
          overflow: 'hidden',
        }}
      >
        {/* Background glow */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(224,64,160,0.08) 0%, transparent 60%)',
            pointerEvents: 'none',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '1px',
            background:
              'linear-gradient(90deg, transparent, rgba(224,64,160,0.2), transparent)',
          }}
        />

        <div style={{ position: 'relative', maxWidth: '800px' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              borderRadius: '9999px',
              border: '1px solid rgba(224,64,160,0.3)',
              background: 'rgba(224,64,160,0.06)',
              padding: '0.4rem 1.2rem',
              fontSize: '0.65rem',
              fontWeight: 700,
              letterSpacing: '0.3em',
              textTransform: 'uppercase' as const,
              color: '#e040a0',
              marginBottom: '2rem',
            }}
          >
            Orlando&apos;s Social Media Partner
          </div>

          <h1
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.5rem, 6vw, 5rem)',
              fontWeight: 500,
              lineHeight: 1.05,
              letterSpacing: '-0.02em',
              color: 'var(--text-primary)',
            }}
          >
            Content that{' '}
            <em
              style={{
                fontStyle: 'italic',
                background: 'linear-gradient(135deg, #e040a0, #f472c8)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              converts.
            </em>
          </h1>

          <p
            style={{
              marginTop: '1.5rem',
              fontSize: '1.1rem',
              fontWeight: 300,
              lineHeight: 1.8,
              color: 'var(--text-secondary)',
              maxWidth: '540px',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            Cinematic content shoots, strategic posting, and community management
            that turns followers into paying customers.
          </p>

          <div
            style={{
              marginTop: '2.5rem',
              display: 'flex',
              gap: '1rem',
              justifyContent: 'center',
              flexWrap: 'wrap' as const,
            }}
          >
            <Link
              href="/proposals/gym"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '9999px',
                background: 'linear-gradient(135deg, #e040a0, #c030a0)',
                padding: '1rem 2.5rem',
                fontSize: '0.8rem',
                fontWeight: 700,
                letterSpacing: '0.15em',
                textTransform: 'uppercase' as const,
                color: '#fff',
                transition: 'transform 0.2s, box-shadow 0.2s',
              }}
            >
              View Sample Proposal
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
