import { useCallback } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

function Background() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      init={particlesInit}
      options={{
        background: { color: "#000000" },
        particles: {
          number: { value: 60 },
          color: { value: "#00f7ff" },
          links: {
            enable: true,
            color: "#00f7ff",
            distance: 120
          },
          move: { enable: true, speed: 1 }
        }
      }}
      style={{
        position: "fixed",
        width: "100%",
        height: "100%",
        zIndex: -1
      }}
    />
  );
}

export default Background;
