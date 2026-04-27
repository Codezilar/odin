import { RobotScene } from "@/components/robot-scene";

export function AgentFigure() {
  return (
    <section className="agent-figure" aria-label="Cipher AI 3D robot">
      <div className="agent-stage-frame">
        <div className="agent-halo" />
        <div className="agent-plinth-glow" />
        <RobotScene />
      </div>
    </section>
  );
}
