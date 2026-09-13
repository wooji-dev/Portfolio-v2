import { useEffect, useRef } from "react";

type Body = {
  element: HTMLButtonElement;
  x: number;
  y: number;
  vx: number;
  vy: number;
  angle: number;
  spin: number;
  radius: number;
  homeX: number;
  homeY: number;
};

const objects = [
  { id: "star", name: "파란 별표", x: 0.5, y: 0.46, angle: -8 },
  { id: "tile", name: "초록 타일", x: 0.82, y: 0.24, angle: 16 },
  { id: "ring", name: "코랄 링", x: 0.2, y: 0.72, angle: -20 },
];

export function HeroPlayground({ motion }: { motion: boolean }) {
  const stageRef = useRef<HTMLDivElement>(null);
  const resetRef = useRef<() => void>(() => {});

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;
    const buttons = [...stage.querySelectorAll<HTMLButtonElement>("button")];
    let frame = 0;
    let lastTime = 0;
    let width = 0;
    let height = 0;
    let tap = 0;
    let drag:
      | {
          index: number;
          pointerId: number;
          offsetX: number;
          offsetY: number;
          lastX: number;
          lastY: number;
          time: number;
          moved: boolean;
        }
      | undefined;
    let suppressClick = false;
    const bodies: Body[] = buttons.map((element, index) => ({
      element,
      x: 0,
      y: 0,
      vx: 0,
      vy: 0,
      angle: objects[index]!.angle,
      spin: 0,
      radius: 0,
      homeX: 0,
      homeY: 0,
    }));

    function paint() {
      bodies.forEach((body) => {
        body.element.style.transform = `translate(${body.x - body.radius}px, ${body.y - body.radius}px) rotate(${body.angle}deg)`;
      });
    }
    function stopDrag() {
      if (!drag) return;
      const { index, pointerId } = drag;
      drag = undefined;
      const element = buttons[index]!;
      element.removeAttribute("data-dragging");
      if (element.hasPointerCapture(pointerId))
        element.releasePointerCapture(pointerId);
    }
    function layout() {
      if (width === stage!.clientWidth && height === stage!.clientHeight)
        return;
      stopDrag();
      width = stage!.clientWidth;
      height = stage!.clientHeight;
      bodies.forEach((body, index) => {
        body.radius = body.element.offsetWidth / 2;
        body.homeX = Math.max(
          body.radius,
          Math.min(width - body.radius, width * objects[index]!.x),
        );
        body.homeY = Math.max(
          body.radius,
          Math.min(height - body.radius, height * objects[index]!.y),
        );
        body.x = body.homeX;
        body.y = body.homeY;
        body.vx = body.vy = body.spin = 0;
        body.angle = objects[index]!.angle;
      });
      paint();
    }
    function wake() {
      if (!motion || frame) return;
      lastTime = performance.now();
      frame = requestAnimationFrame(step);
    }
    function step(now: number) {
      frame = 0;
      const dt = Math.min(2, Math.max(0.25, (now - lastTime) / 16.667));
      lastTime = now;
      const damping = Math.pow(0.94, dt);
      bodies.forEach((body, index) => {
        if (drag?.index === index) return;
        body.vx = (body.vx + (body.homeX - body.x) * 0.012 * dt) * damping;
        body.vy = (body.vy + (body.homeY - body.y) * 0.012 * dt) * damping;
        body.x += body.vx * dt;
        body.y += body.vy * dt;
        body.angle += body.spin * dt;
        body.spin *= Math.pow(0.96, dt);
        if (body.x < body.radius || body.x > width - body.radius) {
          body.x = Math.max(body.radius, Math.min(width - body.radius, body.x));
          body.vx *= -0.75;
          body.spin += body.vy * 0.3;
        }
        if (body.y < body.radius || body.y > height - body.radius) {
          body.y = Math.max(
            body.radius,
            Math.min(height - body.radius, body.y),
          );
          body.vy *= -0.75;
          body.spin -= body.vx * 0.3;
        }
      });
      // Three soft bodies: dragged objects push their neighbours, which keep their momentum.
      for (let i = 0; i < bodies.length; i++) {
        for (let j = i + 1; j < bodies.length; j++) {
          const a = bodies[i]!;
          const b = bodies[j]!;
          const dx = b.x - a.x;
          const dy = b.y - a.y;
          const distance = Math.hypot(dx, dy);
          const overlap = (a.radius + b.radius) * 0.93 - distance;
          if (overlap <= 0) continue;
          const nx = distance > 0.01 ? dx / distance : 1;
          const ny = distance > 0.01 ? dy / distance : 0;
          const aWeight = drag?.index === i ? 0 : drag?.index === j ? 1 : 0.5;
          const bWeight = 1 - aWeight;
          a.x -= nx * overlap * aWeight;
          a.y -= ny * overlap * aWeight;
          b.x += nx * overlap * bWeight;
          b.y += ny * overlap * bWeight;
          const approach = (a.vx - b.vx) * nx + (a.vy - b.vy) * ny;
          const impulse = Math.max(0, approach) * 1.5 + overlap * 0.12;
          a.vx -= nx * impulse * aWeight;
          a.vy -= ny * impulse * aWeight;
          b.vx += nx * impulse * bWeight;
          b.vy += ny * impulse * bWeight;
          if (aWeight) a.spin -= impulse * 0.35;
          if (bWeight) b.spin += impulse * 0.35;
        }
      }
      bodies.forEach((body) => {
        body.x = Math.max(body.radius, Math.min(width - body.radius, body.x));
        body.y = Math.max(body.radius, Math.min(height - body.radius, body.y));
      });
      paint();
      const moving = bodies.some(
        (body) =>
          Math.abs(body.vx) + Math.abs(body.vy) + Math.abs(body.spin) > 0.12 ||
          Math.hypot(body.homeX - body.x, body.homeY - body.y) > 0.5,
      );
      if (moving && !document.hidden) frame = requestAnimationFrame(step);
    }
    function burst(index: number) {
      if (!motion) return;
      tap++;
      bodies.forEach((body, i) => {
        const direction = i * 2.1 + tap * 1.2;
        const force = i === index ? 17 : 7;
        body.vx = Math.cos(direction) * force;
        body.vy = Math.sin(direction) * force;
        body.spin = (i === index ? 16 : 5) * (tap % 2 ? 1 : -1);
      });
      wake();
    }
    resetRef.current = () => {
      stopDrag();
      bodies.forEach((body, index) => {
        body.vx = body.vy = 0;
        body.spin = 0;
        body.angle = objects[index]!.angle;
      });
      wake();
    };

    const cleanups = buttons.map((button, index) => {
      function down(event: PointerEvent) {
        if (!motion || event.button !== 0 || drag) return;
        const body = bodies[index]!;
        const rect = stage!.getBoundingClientRect();
        suppressClick = false;
        drag = {
          index,
          pointerId: event.pointerId,
          offsetX: event.clientX - rect.left - body.x,
          offsetY: event.clientY - rect.top - body.y,
          lastX: event.clientX,
          lastY: event.clientY,
          time: performance.now(),
          moved: false,
        };
        body.vx = body.vy = body.spin = 0;
        button.setPointerCapture(event.pointerId);
        button.dataset.dragging = "true";
      }
      function move(event: PointerEvent) {
        if (!drag || drag.pointerId !== event.pointerId || drag.index !== index)
          return;
        const body = bodies[index]!;
        const rect = stage!.getBoundingClientRect();
        const now = performance.now();
        const dt = Math.max(8, now - drag.time) / 16.667;
        const x = Math.max(
          body.radius,
          Math.min(
            width - body.radius,
            event.clientX - rect.left - drag.offsetX,
          ),
        );
        const y = Math.max(
          body.radius,
          Math.min(
            height - body.radius,
            event.clientY - rect.top - drag.offsetY,
          ),
        );
        body.vx = Math.max(-22, Math.min(22, (x - body.x) / dt));
        body.vy = Math.max(-22, Math.min(22, (y - body.y) / dt));
        body.angle += (x - body.x) * 0.45;
        body.x = x;
        body.y = y;
        if (
          Math.hypot(event.clientX - drag.lastX, event.clientY - drag.lastY) > 4
        )
          drag.moved = true;
        drag.time = now;
        paint();
        wake();
      }
      function up(event: PointerEvent) {
        if (!drag || drag.pointerId !== event.pointerId || drag.index !== index)
          return;
        const body = bodies[index]!;
        suppressClick = drag.moved;
        if (event.type !== "pointerup" || performance.now() - drag.time > 100)
          body.vx = body.vy = 0;
        body.spin = body.vx * 0.6;
        stopDrag();
        wake();
      }
      function click(event: MouseEvent) {
        const suppressed = suppressClick;
        suppressClick = false;
        if (suppressed && event.detail > 0) return;
        burst(index);
      }
      function key(event: KeyboardEvent) {
        if (
          !motion ||
          !["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"].includes(
            event.key,
          )
        )
          return;
        event.preventDefault();
        const body = bodies[index]!;
        body.vx +=
          event.key === "ArrowLeft" ? -15 : event.key === "ArrowRight" ? 15 : 0;
        body.vy +=
          event.key === "ArrowUp" ? -15 : event.key === "ArrowDown" ? 15 : 0;
        body.spin += 5;
        wake();
      }
      button.addEventListener("pointerdown", down);
      button.addEventListener("pointermove", move);
      button.addEventListener("pointerup", up);
      button.addEventListener("pointercancel", up);
      button.addEventListener("lostpointercapture", up);
      button.addEventListener("click", click);
      button.addEventListener("keydown", key);
      return () => {
        button.removeEventListener("pointerdown", down);
        button.removeEventListener("pointermove", move);
        button.removeEventListener("pointerup", up);
        button.removeEventListener("pointercancel", up);
        button.removeEventListener("lostpointercapture", up);
        button.removeEventListener("click", click);
        button.removeEventListener("keydown", key);
      };
    });
    const observer = new ResizeObserver(layout);
    observer.observe(stage);
    layout();
    if (motion) burst(0);
    function visibility() {
      if (document.hidden) {
        cancelAnimationFrame(frame);
        frame = 0;
        stopDrag();
      } else wake();
    }
    document.addEventListener("visibilitychange", visibility);
    return () => {
      stopDrag();
      cancelAnimationFrame(frame);
      observer.disconnect();
      cleanups.forEach((cleanup) => cleanup());
      document.removeEventListener("visibilitychange", visibility);
      resetRef.current = () => {};
    };
  }, [motion]);

  return (
    <div className="hero-playground">
      <div
        className="playground-stage"
        ref={stageRef}
        role="group"
        aria-label="움직이는 오브제"
      >
        {objects.map((object) => (
          <button
            key={object.id}
            type="button"
            className={`play-object play-${object.id}`}
            disabled={!motion}
            aria-label={`${object.name} 움직이기`}
            aria-describedby="playground-hint playground-keys"
            aria-keyshortcuts="ArrowUp ArrowDown ArrowLeft ArrowRight"
          >
            {object.id === "star" ? (
              <img
                src={`${import.meta.env.BASE_URL}imgs/blue-asterisk.jpg`}
                width="1024"
                height="1024"
                fetchPriority="high"
                alt=""
                draggable="false"
              />
            ) : (
              <span className={`shape-${object.id}`} aria-hidden="true" />
            )}
          </button>
        ))}
      </div>
      <span id="playground-keys" className="sr-only">
        Enter나 Space로 오브제를 튕기고, 방향키로 움직일 수 있습니다.
      </span>
      <div className="playground-controls">
        <span id="playground-hint">
          {motion ? "끌어 놓거나 눌러보세요" : "움직임이 꺼져 있어요"}
        </span>
        <button
          type="button"
          onClick={() => resetRef.current()}
          disabled={!motion}
        >
          다시 모으기 <span aria-hidden="true">↺</span>
        </button>
      </div>
    </div>
  );
}
