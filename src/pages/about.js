import React from "react";

const About = () => (
  <section className="section">
    <div className="container content">
      <div className="columns">
        <div className="column is-10 is-offset-1">
          <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
            About Me and This Blog
          </h1>
          <p>
            I'm Jae Bach Hardie, an engineer currently working for{" "}
            <a href="findmypast.co.uk">Findmypast</a>. My focus is architecting
            for long-term maintainability and developer ergonomics. This means I
            spend a lot of time moving code around without changing its
            behaviour, having informal chats about data modelling, and other
            extremely important things you might call "useless".
          </p>
          <p>This blog is a collection of my useless thoughts. Enjoy.</p>
        </div>
      </div>
    </div>
  </section>
);

export default About;
