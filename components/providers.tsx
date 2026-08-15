"use client";

import { MotionConfig } from "framer-motion";
import type { PropsWithChildren } from "react";

export const MotionProviders = ({ children }: PropsWithChildren) => (
  <MotionConfig reducedMotion="user">{children}</MotionConfig>
);
