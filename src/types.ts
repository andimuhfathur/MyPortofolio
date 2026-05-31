/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  technology: string; // displayed next to title
  clientProblem: string;
  solution: string;
  processSteps: {
    number: string;
    title: string;
    description: string;
  }[];
  showcaseImages: string[];
  githubUrl: string;
  detailSubtitle: string;
}

export interface Experience {
  id: string;
  company: string;
  duration: string;
  role: string;
  bgImage: string;
  highlights: string[];
}

export interface SkillCategory {
  id: string;
  title: string;
  iconName: string; // for dynamic rendering
  skills: string[];
}
