"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, RoundedBox } from "@react-three/drei";
import { useMemo, useRef } from "react";
import { CanvasTexture, MathUtils } from "three";

function useMatrixTexture() {
  return useMemo(() => {
    const canvas = document.createElement("canvas");
    canvas.width = 512;
    canvas.height = 512;
    const context = canvas.getContext("2d");

    context.fillStyle = "#060606";
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.font = "bold 16px monospace";
    context.textBaseline = "top";

    for (let row = 0; row < 40; row += 1) {
      for (let col = 0; col < 20; col += 1) {
        const char = Math.random() > 0.5 ? "1" : "0";
        const alpha = 0.15 + Math.random() * 0.55;
        context.fillStyle = `rgba(220, 228, 255, ${alpha})`;
        context.fillText(char, 18 + col * 24, 12 + row * 12);
      }
    }

    const texture = new CanvasTexture(canvas);
    texture.needsUpdate = true;
    return texture;
  }, []);
}

function RobotModel() {
  const group = useRef(null);
  const head = useRef(null);
  const eyes = useRef(null);
  const matrixTexture = useMatrixTexture();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    if (group.current) {
      group.current.position.y = Math.sin(time * 1.1) * 0.08;
      group.current.rotation.y = MathUtils.lerp(
        group.current.rotation.y,
        Math.sin(time * 0.65) * 0.18,
        0.05,
      );
    }

    if (head.current) {
      head.current.rotation.z = Math.sin(time * 0.7) * 0.03;
      head.current.rotation.x = Math.sin(time * 0.5) * 0.02;
    }

    if (eyes.current) {
      const blink = Math.abs(Math.sin(time * 1.7)) > 0.97 ? 0.12 : 1;
      eyes.current.scale.y = MathUtils.lerp(eyes.current.scale.y, blink, 0.28);
      eyes.current.material.emissive.setHex(Math.sin(time * 2) > 0.8 ? 0x00ff00 : 0xffffff);
    }
  });

  return (
    <group ref={group} position={[0, -0.6, 0]}>
      {/* Enhanced base platform */}
      <mesh position={[0, -2.45, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[1.4, 1.6, 0.8, 32]} />
        <meshStandardMaterial
          color="#2a2a2a"
          emissive="#ff3c21"
          emissiveIntensity={0.3}
          roughness={0.6}
          metalness={0.8}
        />
      </mesh>

      {/* Energy core */}
      <mesh position={[0, -1.8, 0]} castShadow>
        <sphereGeometry args={[0.3, 16, 16]} />
        <meshStandardMaterial
          color="#ff6b4a"
          emissive="#ff4500"
          emissiveIntensity={1.2}
          roughness={0.1}
          metalness={0.1}
        />
      </mesh>

      {/* Central body */}
      <mesh position={[0, -1.28, 0]} rotation={[0, 0, 0]} castShadow receiveShadow>
        <boxGeometry args={[1.8, 1.2, 1.8]} />
        <meshStandardMaterial
          color="#1a1a1a"
          emissive="#ff3c21"
          emissiveIntensity={0.4}
          roughness={0.3}
          metalness={0.7}
        />
      </mesh>

      {/* Shoulder armor */}
      <mesh position={[-1.2, -0.8, 0]} castShadow>
        <boxGeometry args={[0.6, 0.4, 0.8]} />
        <meshStandardMaterial
          color="#333333"
          roughness={0.4}
          metalness={0.9}
        />
      </mesh>
      <mesh position={[1.2, -0.8, 0]} castShadow>
        <boxGeometry args={[0.6, 0.4, 0.8]} />
        <meshStandardMaterial
          color="#333333"
          roughness={0.4}
          metalness={0.9}
        />
      </mesh>

      <Float speed={2.2} rotationIntensity={0.12} floatIntensity={0.45}>
        <group position={[0, 0.15, 0]}>
          {/* Torso */}
          <mesh position={[0, -0.4, 0]} castShadow>
            <capsuleGeometry args={[0.48, 1.18, 10, 20]} />
            <meshStandardMaterial
              color="#dd261d"
              emissive="#ff4129"
              emissiveIntensity={0.6}
              roughness={0.24}
              metalness={0.3}
            />
          </mesh>

          {/* Chest panel */}
          <mesh position={[0, 0.2, 0.25]} castShadow>
            <boxGeometry args={[0.6, 0.8, 0.1]} />
            <meshStandardMaterial
              color="#000000"
              emissive="#00ff00"
              emissiveIntensity={0.8}
              roughness={0.1}
              metalness={0.1}
            />
          </mesh>

          {/* Neck */}
          <mesh position={[0, 0.65, 0]} castShadow>
            <capsuleGeometry args={[0.32, 0.3, 8, 14]} />
            <meshStandardMaterial color="#171717" roughness={0.7} metalness={0.5} />
          </mesh>

          {/* Arms */}
          <mesh position={[-0.36, -1.12, 0]} rotation={[0, 0, 0.18]} castShadow>
            <capsuleGeometry args={[0.2, 0.36, 8, 12]} />
            <meshStandardMaterial
              color="#ff3228"
              emissive="#ff3228"
              emissiveIntensity={0.4}
              roughness={0.28}
            />
          </mesh>

          <mesh position={[0.36, -1.12, 0]} rotation={[0, 0, -0.18]} castShadow>
            <capsuleGeometry args={[0.2, 0.36, 8, 12]} />
            <meshStandardMaterial
              color="#ff3228"
              emissive="#ff3228"
              emissiveIntensity={0.4}
              roughness={0.28}
            />
          </mesh>

          {/* Forearms */}
          <mesh position={[-0.72, -0.12, 0]} rotation={[0, 0, 0.46]} castShadow>
            <capsuleGeometry args={[0.17, 0.58, 8, 12]} />
            <meshStandardMaterial color="#141414" roughness={0.72} metalness={0.6} />
          </mesh>

          <mesh position={[0.72, -0.12, 0]} rotation={[0, 0, -0.46]} castShadow>
            <capsuleGeometry args={[0.17, 0.58, 8, 12]} />
            <meshStandardMaterial color="#141414" roughness={0.72} metalness={0.6} />
          </mesh>

          {/* Enhanced head */}
          <group ref={head} position={[0, 1.4, 0.03]}>
            <RoundedBox args={[2.45, 2.05, 1.48]} radius={0.34} smoothness={6} castShadow>
              <meshStandardMaterial
                color="#f46d5d"
                emissive="#9f1f1e"
                emissiveIntensity={0.3}
                roughness={0.35}
                metalness={0.4}
              />
            </RoundedBox>

            {/* Face panel */}
            <RoundedBox args={[2.12, 1.78, 1.3]} radius={0.28} smoothness={6} position={[0, -0.04, 0.16]}>
              <meshStandardMaterial color="#0a0a0a" roughness={0.9} metalness={0.1} />
            </RoundedBox>

            {/* Display screen */}
            <mesh position={[0, -0.06, 0.69]}>
              <planeGeometry args={[1.72, 1.42]} />
              <meshBasicMaterial map={matrixTexture} toneMapped={false} />
            </mesh>

            {/* Enhanced eyes */}
            <group ref={eyes} position={[0, -0.06, 0.72]}>
              <mesh position={[-0.26, 0.02, 0]}>
                <boxGeometry args={[0.34, 0.042, 0.03]} />
                <meshBasicMaterial color="#00ff00" toneMapped={false} />
              </mesh>
              <mesh position={[0.26, 0.02, 0]}>
                <boxGeometry args={[0.34, 0.042, 0.03]} />
                <meshBasicMaterial color="#00ff00" toneMapped={false} />
              </mesh>
            </group>

            {/* Antennae */}
            <mesh position={[-0.72, 1.02, -0.12]} rotation={[0.36, 0, -0.22]} castShadow>
              <capsuleGeometry args={[0.09, 0.3, 6, 10]} />
              <meshStandardMaterial color="#ebe3e3" roughness={0.34} />
            </mesh>

            <mesh position={[0.72, 1.02, -0.12]} rotation={[0.36, 0, 0.22]} castShadow>
              <capsuleGeometry args={[0.09, 0.3, 6, 10]} />
              <meshStandardMaterial color="#ebe3e3" roughness={0.34} />
            </mesh>

            {/* Side panels */}
            <mesh position={[1.18, -0.06, 0.1]} rotation={[0, 0, Math.PI / 2]} castShadow>
              <cylinderGeometry args={[0.22, 0.22, 0.16, 32]} />
              <meshStandardMaterial
                color="#b2201c"
                emissive="#ea2a24"
                emissiveIntensity={0.4}
                roughness={0.3}
              />
            </mesh>

            <mesh position={[1.33, -0.06, 0.1]} rotation={[0, 0, Math.PI / 2]}>
              <torusGeometry args={[0.23, 0.04, 10, 28]} />
              <meshStandardMaterial color="#1c1a1a" roughness={0.58} metalness={0.5} />
            </mesh>

            <mesh position={[1.43, -0.02, 0.1]} rotation={[0, 0, 0.2]}>
              <boxGeometry args={[0.08, 0.62, 0.08]} />
              <meshStandardMaterial color="#201b1d" roughness={0.7} />
            </mesh>
          </group>

          {/* Energy rings */}
          <mesh position={[0, -1.4, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
            <circleGeometry args={[1.45, 40]} />
            <meshBasicMaterial color="#ff4c34" transparent opacity={0.24} />
          </mesh>

          <mesh position={[0, -1.4, 0]} rotation={[-Math.PI / 2, 0, 0]}>
            <ringGeometry args={[1.2, 1.4, 32]} />
            <meshBasicMaterial color="#00ff00" transparent opacity={0.3} />
          </mesh>
        </group>
      </Float>
    </group>
  );
}

export function RobotScene() {
  return (
    <div className="robot-canvas">
      <Canvas camera={{ position: [0, 0.5, 6.8], fov: 28 }} dpr={[1, 2]} shadows>
        <color attach="background" args={["#000000"]} />
        <fog attach="fog" args={["#000000", 8, 14]} />
        <ambientLight intensity={1} />
        <directionalLight
          position={[3.2, 6, 4.5]}
          intensity={2.8}
          color="#fff2e5"
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
        />
        <pointLight position={[-3.2, 1.5, 2]} intensity={18} color="#ff4a31" distance={10} />
        <pointLight position={[0, -1.6, 1.5]} intensity={28} color="#fff6ea" distance={8} />
        <spotLight position={[0, 4.2, 4]} intensity={22} angle={0.38} penumbra={1} color="#ff8c73" />
        <RobotModel />
        <mesh position={[0, -2.34, -1]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
          <planeGeometry args={[14, 14]} />
          <shadowMaterial opacity={0.38} />
        </mesh>
      </Canvas>
    </div>
  );
}
