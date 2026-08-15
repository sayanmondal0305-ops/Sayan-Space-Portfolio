"use client";

import {
  Points,
  PointMaterial,
  type PointsInstancesProps,
} from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useSpring,
} from "framer-motion";
import * as random from "maath/random";
import { useRef, useState, Suspense } from "react";
import type { Points as PointsType } from "three";

import { SCROLL_SPRING } from "@/lib/motion";

export const StarBackground = ({
  scrollRef,
  ...props
}: PointsInstancesProps & {
  scrollRef: React.MutableRefObject<number>;
}) => {
  const ref = useRef<PointsType | null>(null);
  const ambientX = useRef(0);
  const ambientY = useRef(0);
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(5000), { radius: 1.2 }),
  );

  useFrame((_state, delta) => {
    if (!ref.current) return;

    ambientX.current -= delta / 10;
    ambientY.current -= delta / 15;

    ref.current.rotation.x = ambientX.current + scrollRef.current * 0.9;
    ref.current.rotation.y = ambientY.current + scrollRef.current * 1.6;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points
        ref={ref}
        stride={3}
        positions={new Float32Array(sphere)}
        frustumCulled
        {...props}
      >
        <PointMaterial
          transparent
          color="#fff"
          size={0.002}
          sizeAttenuation
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

export const StarsCanvas = () => {
  const scrollRef = useRef(0);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const smoothScroll = useSpring(scrollYProgress, SCROLL_SPRING);

  useMotionValueEvent(smoothScroll, "change", (v) => {
    scrollRef.current = reduce ? 0 : v;
  });

  return (
    <div className="w-full h-auto fixed inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <StarBackground scrollRef={scrollRef} />
        </Suspense>
      </Canvas>
    </div>
  );
};
