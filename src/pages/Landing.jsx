import React, { useEffect } from "react";
import HeroNetwork from "../components/HeroNetwork";
import AppViz from "../components/AppViz";

const APPROACH = [
  {
    n: "01",
    title: "Structure your data",
    body: "Proper analysis can only be done if required data is captured in right granularity.",
  },
  {
    n: "02",
    title: "Overcome traditional research",
    body: "The error prone & time consuming traditional research methods — leverage advanced methodologies and tools to be always updated about customer needs and industry changes.",
  },
  {
    n: "03",
    title: "Learn about your audience",
    body: "No better way to learn about your audience, product or services — analyse the huge volume of interactions through our Social Intelligence.",
  },
  {
    n: "04",
    title: "Beyond statistical values",
    body: "It's not just statistical number and values — our priority is to provide insights & recommendations that can be easily implemented across your organisation.",
  },
];

const CAPABILITIES = [
  "Social Media Research",
  "Social Intelligence",
  "Market Research",
  "Social Media Strategy",
  "Data Analytics & AI",
  "Influencer Identification",
  "Campaign Management",
  "KPI Tracking",
  "Audience Analysis",
  "Competitor Analysis",
  "Customer Analysis",
  "Campaign Analysis",
];

export default function Landing() {
  // Reveal-on-scroll: add `.in` to `.reveal` elements as they enter view.
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.add("in");
            io.unobserve(en.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <div className="bg-grid" aria-hidden="true"></div>

      <main id="top">
        {/* ============ HERO ============ */}
        <section className="hero" id="home">
          <HeroNetwork />
          <div className="wrap hero-wrap">
            <div className="hero-grid">
              <p className="kicker reveal">
                Data Analytics · Social Intelligence · AI
              </p>
              <h1 className="reveal" data-d="1">
                Generating insights from the{" "}
                <span className="out">less&nbsp;traveled</span>{" "}
                <span className="em">paths</span> of data analytics.
              </h1>
              <p className="hero-lede reveal" data-d="2">
                We are a team of skilled analysts dedicated to help businesses
                like yours unleash their full potential with innovative
                solutions.
              </p>
              <div className="hero-meta reveal" data-d="3">
                <span>
                  Est. <b>2016</b>
                </span>
                <span>
                  Based in <b>Kolkata, IN</b>
                </span>
                <span>
                  Generative AI <b>×</b> Human Intelligence
                </span>
              </div>
            </div>
            <figure className="hero-art reveal" data-d="2">
              <img
                src="./images/hero-research.png"
                alt="Illustration of analysts reviewing a market-research data dashboard"
              />
              <span className="cnr tl"></span>
              <span className="cnr br"></span>
              <figcaption className="art-lbl">
                FIG_01 · Market Research
              </figcaption>
            </figure>
          </div>
          <div className="scrollcue" aria-hidden="true">
            <span className="bar"></span>
            <span>SCROLL</span>
          </div>
        </section>

        {/* ============ APPROACH ============ */}
        <section className="band" id="approach">
          <div className="wrap">
            <div className="sec-head">
              <h2 className="reveal">What proper analysis actually takes.</h2>
              <p className="reveal" data-d="1">
                Four principles separate decisions made on noise from decisions
                made on signal. They shape how every engagement begins.
              </p>
            </div>
            <div className="approach">
              {APPROACH.map((s, i) => (
                <div
                  className="step reveal"
                  key={s.n}
                  data-d={i === 0 ? undefined : i < 3 ? "1" : "2"}
                >
                  <span className="ghost">{s.n}</span>
                  <span className="num">/ {s.n}</span>
                  <h3>{s.title}</h3>
                  <p>{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ PHILOSOPHY ============ */}
        <section className="band" id="philosophy">
          <div className="wrap">
            <div className="sec-head">
              <h2 className="reveal">
                Insight is a discipline,
                <br />
                not a dashboard.
              </h2>
              <p className="reveal" data-d="1">
                How we combine machine scale with human judgement to deliver
                recommendations you can act on.
              </p>
            </div>
            <div className="philo">
              <div className="stmt reveal">
                <span className="tag">[ Models ]</span>
                <p className="big">
                  <span className="accent">
                    Generative AI combined with human intelligence
                  </span>{" "}
                  to develop locally trained, industry-specific AI models,
                  enhancing data analysis and decision making process.
                </p>
              </div>
              <div className="stmt reveal">
                <span className="tag">[ People ]</span>
                <p className="big">
                  Not just a tool providing some meaningless numbers — a{" "}
                  <b>team of professionals working relentlessly</b> to provide
                  valuable insights and actionable recommendations.
                </p>
              </div>
              <div className="stmt reveal">
                <span className="tag">[ Social ]</span>
                <p className="big">
                  Thinking of using Social Media in favour of your business,
                  trying to make your brand aware among the trendy audience, or
                  perhaps trying to get an idea about the{" "}
                  <b>
                    broader audience of your business not measured previously
                  </b>
                  …
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ============ CAPABILITIES ============ */}
        <section className="band" id="capabilities">
          <div className="wrap">
            <div className="sec-head">
              <h2 className="reveal">
                A full-spectrum
                <br />
                intelligence stack.
              </h2>
              <p className="reveal" data-d="1">
                From raw social signal to campaign KPIs — every layer of
                analysis under one roof.
              </p>
            </div>
            <div className="cap-grid reveal" data-d="1" id="capgrid">
              {CAPABILITIES.map((c, i) => (
                <div className="cap" key={c}>
                  <span className="i">{(i + 1 < 10 ? "0" : "") + (i + 1)}</span>
                  <span className="t">{c}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ BUILD / CUSTOM APPS ============ */}
        <section className="band" id="build">
          <div className="wrap">
            <div className="feature">
              <div className="panel reveal">
                <span className="cnr tl"></span>
                <span className="cnr br"></span>
                <AppViz />
                <span className="lbl">FIG_02 — CUSTOM APPLICATION LAYER</span>
              </div>
              <div className="reveal" data-d="1">
                <p className="kicker">Engineering</p>
                <h2>We build the applications your operations run on.</h2>
                <p>
                  We create customized applications to help companies streamline
                  operations, automate tasks, improve communication, enhance
                  productivity and drive innovation for sustainable growth and
                  competitive advantage.
                </p>
                <div className="pill-row">
                  <span className="pill">Operations</span>
                  <span className="pill">Automation</span>
                  <span className="pill">Communication</span>
                  <span className="pill">Productivity</span>
                  <span className="pill">Innovation</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============ CTA ============ */}
        <section className="ctaband" id="contact">
          <div className="wrap">
            <p className="kicker reveal" style={{ justifyContent: "center" }}>
              Let's talk data
            </p>
            <h2 className="reveal" data-d="1">
              Unleash your
              <br />
              full potential.
            </h2>
            <p className="sub reveal" data-d="2">
              Tell us what you're trying to understand. We'll bring the
              analysts, the models and the recommendations.
            </p>
            <a
              className="bigmail reveal"
              data-d="2"
              href="mailto:contactus@inferstrat.com"
            >
              contactus@inferstrat.com <span className="arw">→</span>
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
