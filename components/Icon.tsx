"use client";

import type { CSSProperties } from "react";
import type { IconType } from "react-icons";
import {
  FaGithub,
  FaYoutube,
  FaInstagram,
  FaEnvelope,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";

const glyphs: Record<string, IconType> = {
  github: FaGithub,
  youtube: FaYoutube,
  instagram: FaInstagram,
  email: FaEnvelope,
  "arrow-left": FaArrowLeft,
  "arrow-right": FaArrowRight,
};

export interface IconProps {
  glyph: string;
  size?: number;
  className?: string;
  style?: CSSProperties;
}

export function Icon({ glyph, size = 40, style, className }: IconProps) {
  const Glyph = glyphs[glyph] ?? FaGithub;
  return <Glyph size={size} style={style} className={className} aria-hidden />;
}
