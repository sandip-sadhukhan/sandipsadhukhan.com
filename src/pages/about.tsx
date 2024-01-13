import React from "react";
import Link from "@docusaurus/Link";
import Layout from "@theme/Layout";
import {
  BsGithub,
  BsLinkedin,
  BsEnvelopeFill,
  BsFillCloudDownloadFill,
} from "react-icons/bs";

export default function Home(): JSX.Element {
  return (
    <Layout
      title="About Me | Sandip Sadhukhan"
      description="Hello, my name is Sandip Sadhukhan and I am a full-stack web developer. I am pleased to extend an invitation to connect with me and learn from my experiences."
    >
      <header>
        <div className="hero shadow--lw" style={{ textAlign: "center" }}>
          <div className="container">
            <h1 className="hero__title">Sandip Sadhukhan</h1>
            <p
              className="hero__subtitle"
              style={{ fontSize: "20px", marginBottom: "10px" }}
            >
              <span
                className="pills__item pills__item--active"
                style={{ borderRadius: "20px" }}
              >
                Software Enginner
              </span>{" "}
              at Instahyre.
            </p>
            <p
              className="hero__subtitle"
              style={{ fontSize: "18px", marginBottom: "10px" }}
            >
              I love to create side projects which helps users around the world.
            </p>
            <div
              style={{
                display: "flex",
                gap: "15px",
                flexDirection: "row",
                justifyContent: "center",
                fontSize: "30px",
                alignItems: "center",
              }}
            >
              <Link href="https://github.com/sandippakhanna" target="_blank">
                <BsGithub style={{ color: "gray" }} />
              </Link>
              <Link
                href="https://www.linkedin.com/in/sandipsadhukhan"
                target="_blank"
              >
                <BsLinkedin style={{ color: "#0077B5" }} />
              </Link>
              <Link href="mailto:sandip.sendme@gmail.com" target="_blank">
                <BsEnvelopeFill style={{ color: "red" }} />
              </Link>
              <Link to="/resume.pdf" download target="_blank">
                <button
                  className="button button--primary"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    padding: "5px 10px",
                    marginBottom: "5px",
                    gap: "5px",
                  }}
                >
                  Resume <BsFillCloudDownloadFill />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="margin-top--xl">
        <div className="container">
          <h2 style={{ fontSize: "25px" }}>Tech Stack I'm Using</h2>

          <h3 className="margin-top--lg">1. Next.js + TypeScript</h3>
          <p>
            Next.js & TypeScript offer type safety, faster development,
            scalability, server-side rendering, and built-in optimizations for
            frontend web applications
          </p>

          <h3 className="margin-top--lg">2. Django + DRF</h3>
          <p>
            Django and Django Rest Framework offer fast development,
            scalability, built-in authentication, a robust ORM, a variety of
            third-party packages, and comprehensive documentation for building
            backend web applications.
          </p>

          <h3 className="margin-top--lg">3. Docker + DigitalOcean + Netlify</h3>
          <p>
            Docker provides containerization, DigitalOcean offers fast and
            scalable cloud hosting, and Netlify provides easy and automated
            deployment for static sites, making them a powerful combination for
            hosting web applications.
          </p>

          <h3 className="margin-top--lg">4. Pytest + RTL + Jest</h3>
          <p>
            Pytest offers flexible and easy-to-use testing capabilities for
            django applications, while React Testing Library and Jest provide
            powerful and intuitive testing tools for frontend applications.
            Together, they provide comprehensive testing solutions for web
            development.
          </p>

          <hr />

          <h2 className="margin-top--lg margin-bottom--lg">My Projects</h2>

          <div className="row margin-bottom--lg">
            <div className="col col--4">
              <div className="card" style={{ height: "100%" }}>
                <div className="card__image">
                  <img
                    src="/img/projects/mocktest-shop.jpg"
                    alt="Mock Test Shop"
                  />
                </div>
                <div className="card__body">
                  <h4 style={{ textAlign: "center" }}>
                    MockTest.shop (under development)
                  </h4>
                  <small>
                    Experience an innovative platform that connects students
                    with teachers, providing access to a diverse range of mock
                    tests. Purchase from a selection of tests tailored to your
                    needs, and track your progress with interactive analytics.
                    Join our community and take control of your education today.
                  </small>

                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "10px",
                      marginTop: "10px",
                    }}
                  >
                    <div className="badge badge--info">React</div>
                    <div className="badge badge--secondary">NextJs</div>
                    <div className="badge badge--info">TypeScript</div>
                    <div className="badge badge--success">Django</div>
                    <div className="badge badge--warning">DRF</div>
                  </div>
                </div>
                <div className="card__footer">
                  <Link
                    href="https://www.mocktest.shop/"
                    target="_blank"
                    className="button button--primary button--block"
                  >
                    Visit
                  </Link>
                </div>
              </div>
            </div>

            <div className="col col--4">
              <div className="card" style={{ height: "100%" }}>
                <div className="card__image">
                  <img src="/img/projects/7resume.jpg" alt="7resume.com" />
                </div>
                <div className="card__body">
                  <h4 style={{ textAlign: "center" }}>
                    Build your resume without Coding
                  </h4>
                  <small>
                    7Resume is a platform that enables anyone to easily create a
                    professional online portfolio without any coding skills.
                    Showcase your skills and experience with customizable
                    templates, and stand out in your field with an impressive
                    online presence.
                  </small>

                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "10px",
                      marginTop: "10px",
                    }}
                  >
                    <div className="badge badge--info">React</div>
                    <div className="badge badge--secondary">NextJs</div>
                    <div className="badge badge--info">TypeScript</div>
                    <div className="badge badge--success">Django</div>
                    <div className="badge badge--warning">DRF</div>
                  </div>
                </div>
                <div className="card__footer">
                  <Link
                    href="https://7resume.com/"
                    target="_blank"
                    className="button button--primary button--block"
                  >
                    Visit
                  </Link>
                  <Link
                    href="https://github.com/sandippakhanna/7resume"
                    target="_blank"
                    className="button button--primary button--outline button--block margin-top--sm"
                  >
                    Source code
                  </Link>
                </div>
              </div>
            </div>

            <div className="col col--4">
              <div className="card" style={{ height: "100%" }}>
                <div className="card__image">
                  <img
                    src="/img/projects/digital-routine.jpg"
                    alt="Digital Routine"
                  />
                </div>
                <div className="card__body">
                  <h4 style={{ textAlign: "center" }}>Digital Routine</h4>
                  <small>
                    Our platform provides a comprehensive dashboard where you
                    can create and manage your digital routine. With easy
                    scheduling tools, you can add classes and build your daily
                    routine. Once complete, your routine is accessible via a
                    unique public URL, perfect for sharing with classmates,
                    students or personal use.
                  </small>

                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "10px",
                      marginTop: "10px",
                    }}
                  >
                    <div className="badge badge--info">React</div>
                    <div className="badge badge--secondary">NextJs</div>
                    <div className="badge badge--info">TypeScript</div>
                    <div className="badge badge--success">Django</div>
                    <div className="badge badge--warning">Graphene</div>
                  </div>
                </div>
                <div className="card__footer">
                  <Link
                    href="https://digital-routine.vercel.app/"
                    target="_blank"
                    className="button button--primary button--block"
                  >
                    Visit
                  </Link>
                  <Link
                    href="https://github.com/sandippakhanna/dynamic_routine_maker"
                    target="_blank"
                    className="button button--primary button--outline button--block margin-top--sm"
                  >
                    Source code
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
