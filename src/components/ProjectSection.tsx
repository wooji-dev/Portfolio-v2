import type { Paragraph, Project, ProseBlock } from "../types";
import { ImageSlot } from "./ImageSlot";
import { MetaList } from "./MetaList";
import { CodeBlock } from "./CodeBlock";
import { Reveal } from "./Reveal";

/** 문단 하나. lead가 있으면 굵은 소제목을 같은 줄 앞에 붙인다. */
function Para({ para }: { para: Paragraph }) {
  if (typeof para === "string") return <p>{para}</p>;
  return (
    <p>
      <b className="lead">{para.lead}</b> {para.text}
    </p>
  );
}

const paraKey = (para: Paragraph) =>
  typeof para === "string" ? para.slice(0, 24) : para.lead;

function Block({ block }: { block: ProseBlock }) {
  return (
    <>
      <Reveal as="h3" className="h-sub">
        {block.heading}
      </Reveal>
      <Reveal className="block">
        {block.paragraphs.map((para) => (
          <Para key={paraKey(para)} para={para} />
        ))}
        {block.bullets ? (
          <ul className="bullets">
            {block.bullets.map((text) => (
              <li key={text.slice(0, 24)}>{text}</li>
            ))}
          </ul>
        ) : null}
      </Reveal>
    </>
  );
}

export function ProjectSection({ project }: { project: Project }) {
  const [firstLine, secondLine] = project.headline.split("\n");
  const lede = project.lede.split("\n");

  return (
    <section
      className={`section${project.tone === "grey" ? " section--alt" : ""}`}
      id={project.id}
    >
      <div className="wrap">
        <p className="eyebrow">{project.eyebrow}</p>
        <Reveal as="h2" className="h-section">
          {firstLine}
          {secondLine ? (
            <>
              <br />
              {secondLine}
            </>
          ) : null}
        </Reveal>
        <Reveal as="div" className="lede">
          {lede.map((str) => (
            <Reveal as="p" className="lede-str" key={str.slice(0, 24)}>
              {str}
            </Reveal>
          ))}
        </Reveal>

        <Reveal className={`slots slots--${project.slotLayout}`}>
          {project.slots.map((slot) => (
            <ImageSlot key={slot.title} slot={slot} />
          ))}
        </Reveal>

        <Reveal>
          <MetaList rows={project.meta} />
        </Reveal>

        {project.blocks.map((block, i) => (
          <div key={block.heading}>
            <Block block={block} />
            {project.code && project.code.afterBlock === i ? (
              <Reveal className="block">
                <CodeBlock sample={project.code.sample} />
              </Reveal>
            ) : null}
          </div>
        ))}

        <Reveal as="div" className="note">
          <b>배운 점</b> {project.insight}
        </Reveal>
      </div>
    </section>
  );
}
