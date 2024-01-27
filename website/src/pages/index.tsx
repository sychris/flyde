import React, { useCallback, useEffect, useMemo, useState } from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import styles from "./index.module.css";
import clsx from "clsx";

import "../css/global.scss";
import { HeroExample } from "./_hero-example/HeroExample";

import Link from "@docusaurus/Link";
import { IconStar } from "../components/IconStar";
import { features } from "./_features";
import { examples } from "./_examples";

const FIRST_EXAMPLE_IDX = 0;

function HomepageHeader() {
  const [currentExample, setCurrExample] = React.useState(
    examples[FIRST_EXAMPLE_IDX]
  );

  const exampleRef = React.useRef(null);

  const [didRunExample, setDidRunExample] = useState(false);

  const runExample = useCallback(() => {
    setDidRunExample(true);
    exampleRef.current?.runFlow();
  }, []);

  const examplesContainer = useMemo(() => {
    return (
      <div className="example-actions">
        <span className="font-thin label">Examples:</span>
        {examples.map((ex) => (
          <button
            key={ex.label}
            className={`button button--sm example-button ${
              ex.label === currentExample.label
                ? "button--primary"
                : "button--secondary"
            }`}
            onClick={() => setCurrExample(ex)}
          >
            {ex.label}
          </button>
        ))}
      </div>
    );
  }, [currentExample]);

  return (
    <div className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <div className="content-wrapper">
          <a
            className="github-star"
            href="https://www.github.com/flydelabs/flyde"
            target="_blank"
          >
            <IconStar /> <span>Star us on GitHub</span>
          </a>
          <h1 className="hero__title">
            <div className="font-thin">Visual Programming.</div>
            <div>For Developers</div>
          </h1>
          <p className="hero__subtitle">
            Open source, runs in{" "}
            <a
              href="https://marketplace.visualstudio.com/items?itemName=flyde.flyde-vscode"
              target="_blank"
            >
              VS Code
            </a>
            , integrates with existing <strong>TypeScript</strong> code, browser
            and Node.js.
          </p>
          <div className="buttons-container">
            <Link
              className="button button--primary button--lg "
              href="https://marketplace.visualstudio.com/items?itemName=flyde.flyde-vscode"
            >
              Quick Start
            </Link>
            <Link
              className="button button--secondary button--lg example-btn"
              onClick={runExample}
            >
              Run Example{" "}
              <span
                className={clsx("hero-horizontal-only horizontal-finger", {
                  nudge: !didRunExample,
                })}
              >
                👉
              </span>
              <span
                className={clsx("hero-vertical-only vertical-finger", {
                  nudge: !didRunExample,
                })}
              >
                👇
              </span>
            </Link>
          </div>
        </div>
        <div className="example-container">
          <div className="hero-horizontal-only">{examplesContainer}</div>
          <HeroExample
            example={currentExample}
            key={currentExample.label}
            ref={exampleRef}
          />
          {currentExample.tip ? (
            <div className="example-tip">
              Challenge:{" "}
              {currentExample.tip.replace(/^[A-Z]/, (s) => s.toLowerCase())}{" "}
              &nbsp;
              {currentExample.playgroundUrl ? (
                <a
                  href={currentExample.playgroundUrl}
                  className="open-in-playground"
                  target="_blank"
                >
                  Open in playground
                </a>
              ) : null}
            </div>
          ) : null}
          <div className="hero-vertical-only">{examplesContainer}</div>
        </div>
      </div>
    </div>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();

  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();

        let targetId = this.getAttribute("href");
        let targetElement = document.querySelector(targetId) as HTMLElement;

        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 100, // 100px offset
            behavior: "smooth",
          });
        }
      });
    });
  }, []);

  return (
    <Layout
      title={`Flyde`}
      description="Flyde, open-source visual programming language.
      Runs in the IDE, integrates with existing TypeScript code, browser and Node.js."
    >
      <HomepageHeader />

      <section className="features-strip">
        {features.map((feature) => (
          <div className="feature-highlight" key={feature.title}>
            <a href={`#${feature.id}`}>{feature.preview}</a>
          </div>
        ))}
      </section>

      {features.map((feature) => (
        <section className="feature-strip" id={feature.id} key={feature.id}>
          <div className="feature-strip-inner">
            <div className="image-container">
              <img src={feature.image} />
              <div className="image-caption">{feature.imageCaption}</div>
            </div>
            <div className="content-container">
              <h3>{feature.title}</h3>
              <div className="feature-description">{feature.description}</div>
            </div>
          </div>
        </section>
      ))}
    </Layout>
  );
}
