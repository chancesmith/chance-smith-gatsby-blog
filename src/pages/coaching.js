import React from "react";

// components
import Layout from "../components/layout";
import Seo from "../components/seo";

const WorkshopsPage = (props) => {
  return (
    <Layout location={props.location}>
      <Seo
        title="Coaching | Chance Smith"
        keywords={[
          `one on one coaching`,
          `development coaching`,
          `development workshops`,
        ]}
      />
      <section>
        <h1>Coaching</h1>
        <p>
          On-site or remote, these One-on-One sessions and workshops with Chance
          are a valuable and effective way to improve your skills as a web
          developer. Please email me at{" "}
          <a href="mailto:chance@sodiumhalogen.com">chance@sodiumhalogen.com</a>{" "}
          if you have questions at all.
        </p>

        <h2>Pair-Coding Day (6+ hours) - $600/day</h2>

        <p>
          A full day of pairing on real projects. You get to see real
          development processes on large projects.{" "}
          <span style={{ backgroundColor: "yellow" }}>
            NOTE: Pair-Coding is SOLD OUT through the end of October. Please
            check back in November 2021.
          </span>
        </p>

        <p>
          {/* https://calendly.com/chance/pair-coding-day */}
          <a
            href="#"
            onClick={() =>
              alert(
                "Pair-Coding is SOLD OUT through the end of October. Please check back in November 2021."
              )
            }
          >
            Reserve your spot
          </a>{" "}
          (limited spots)
        </p>

        <h2>Workshops</h2>
        {/* <p>Reserve your spot for upcoming workshop.</p> */}

        <div className="workshops">
          <div className="workshop">
            <h3 className="workshop__title">
              Javascript Fundamentals Workshop - $150
            </h3>
            <p className="workshop__description">
              Geared for 12-17 and 18+ year olds that have great imaginations,
              like figuring out how things work, or just love technology. This
              workshop will introduce them to basic programming concepts—no
              prior experience is needed. 3 hours on a Saturday.
            </p>
            <a href="/workshop-javascript" className="worksop__link">
              Enroll Now &gt;&gt;
            </a>
          </div>
          {/* <div className="workshop">
            <h3 className="workshop__title">React Workshop - $150</h3>
            <p className="workshop__description">
              Geared for any age that has experience with JavaScript and is
              ready to build modern web apps or mobile apps.
            </p>
            <a href="/workshop-react" className="worksop__link">
              Enroll Now &gt;&gt;
            </a>
          </div> */}
        </div>
      </section>
    </Layout>
  );
};

export default WorkshopsPage;
