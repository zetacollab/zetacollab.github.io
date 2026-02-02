import { profile } from './data/profile'

function Pill({ text }: { text: string }) {
  return <span className="pill">{text}</span>
}

function Card({ title, subtitle, children }: { title: string; subtitle?: string; children: React.ReactNode }) {
  return (
    <div className="card">
      <div className="cardTitle">{title}</div>
      {subtitle ? <div className="cardSub">{subtitle}</div> : null}
      <div className="cardBody">{children}</div>
    </div>
  )
}

export default function App() {
  return (
    <div className="page">
      <header className="header">
        <div>
          <div className="kicker">{profile.title}</div>
          <h1 className="h1">{profile.name}</h1>
          <p className="sub">{profile.summary}</p>

          <div className="ctaRow">
            <a className="btn primary" href={`${import.meta.env.BASE_URL}resume.pdf`}>Download Resume</a>
            <a className="btn" href="#projects">Projects</a>
            <a className="btn" href="#contact">Contact</a>
          </div>

          <div className="meta">
            <span>📍 {profile.location}</span>
            <span className="dot">•</span>
            <span>{profile.skills.slice(0, 5).join(' • ')}</span>
          </div>
        </div>

        <div className="rightCol">
          <Card title="Links">
            <div className="links">
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
              <a href={profile.linkedin}>LinkedIn</a>
              <a href={profile.github}>GitHub</a>
            </div>
          </Card>

          <Card title="Highlights">
            <ul className="bullets">
              <li>SCIM provisioning + continuous sync with Microsoft Entra</li>
              <li>Kafka hardening: error handling + reprocessing at high throughput</li>
              <li>End-to-end traceability + non-blocking gRPC retries</li>
            </ul>
          </Card>
        </div>
      </header>

      <main className="main">
        <section className="section" id="experience">
          <h2 className="h2">Experience</h2>
          <div className="timeline">
            {profile.experience.map((e) => (
              <div className="timelineItem" key={`${e.role}-${e.time}`}>
                <div className="timelineLeft">
                  <div className="role">{e.role}</div>
                  <div className="org">{e.org}</div>
                  <div className="time">{e.time}</div>
                </div>
                <div className="timelineRight">
                  <ul className="bullets">
                    {e.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="section" id="projects">
          <h2 className="h2">Projects</h2>
          <div className="grid">
            {profile.projects.map((p) => (
              <div className="card" key={p.name}>
                <div className="cardTitle">{p.name}</div>
                <div className="tagRow">
                  {p.tags.map((t) => (
                    <Pill key={t} text={t} />
                  ))}
                </div>
                <div className="cardBody">
                  <p className="p">{p.description}</p>
                  <div className="cardLinks">
                    {p.links.map((l) => (
                      <a key={l.href} href={l.href}>{l.label}</a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="section" id="skills">
          <h2 className="h2">Skills</h2>
          <div className="pillWrap">
            {profile.skills.map((s) => (
              <Pill key={s} text={s} />
            ))}
          </div>
        </section>

        <section className="section" id="publications">
          <h2 className="h2">Publications</h2>
          <ul className="bullets">
            {profile.publications.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </section>

        <section className="section" id="contact">
          <h2 className="h2">Contact</h2>
          <div className="ctaRow">
            <a className="btn primary" href={`mailto:${profile.email}`}>Email</a>
            <a className="btn" href={profile.linkedin}>LinkedIn</a>
            <a className="btn" href={profile.github}>GitHub</a>
          </div>
        </section>
      </main>

      <footer className="footer">© {new Date().getFullYear()} {profile.name}</footer>
    </div>
  )
}
