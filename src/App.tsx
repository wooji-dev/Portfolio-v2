import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { Summary } from "./components/Summary";
import { ProjectSection } from "./components/ProjectSection";
import { RowList } from "./components/MetaList";
import { Footer } from "./components/Footer";
import { Reveal } from "./components/Reveal";
import { projects } from "./data/projects";
import { techStack, history } from "./data/stack";

export default function App() {
  return (
    <>
      <Nav />
      <Hero />
      <Summary />

      {projects.map((project) => (
        <ProjectSection key={project.id} project={project} />
      ))}

      <section className="section" id="stack">
        <div className="wrap">
          <Reveal as="h2" className="h-section">
            기술 스택
          </Reveal>
          <Reveal>
            <RowList rows={techStack} />
          </Reveal>
        </div>
      </section>

      <section className="section section--alt" id="history">
        <div className="wrap">
          <Reveal as="h2" className="h-section">
            이력
          </Reveal>
          <Reveal>
            <RowList rows={history} />
          </Reveal>
        </div>
      </section>

      <Footer />
    </>
  );
}
