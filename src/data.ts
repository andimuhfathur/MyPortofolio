/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Project, Experience, SkillCategory } from "./types";

export const PROJECTS_DATA: Project[] = [
  {
    id: "quantum-dynamics-dashboard",
    title: "Quantum Dynamics Dashboard",
    description: "High-performance data visualization for distributed quantum computing clusters.",
    detailSubtitle: "High-performance data visualization for distributed quantum computing clusters.",
    technology: "React",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBLkq69N99Q9UMWmQ0vpM9qRepSg0zrhwJ6hh2toyxRr9n8zUBbn4SjmzEzXtP_HgjXRO8b-f8f9qVzlA8QqRb-4qv3OOMgx42POflsrTjvhPEZl3OAEe4dJPQETVMu28l7lg_w0Sbg93QE33XeXsKG24Li8jcdOOTf7zld8BoLpOG8FQ9OQT4G3jUu_P_Ghgc__UmFzcq6zdmXYQdrpppTaS67LJymhn6RQFZSBee-mWgALjY686lySuRJT3Ae3m-rmd9MlXI28UFU",
    tags: ["React", "Typescript", "D3.js", "Rust"],
    clientProblem: "Researchers were struggling with massive latency spikes when monitoring quantum state transitions across global nodes. Existing tools were incapable of rendering real-time telemetry from over 5,000 sensors simultaneously, leading to critical data loss during high-energy experiments. The requirement was a zero-lag, mathematically precise dashboard capable of sub-millisecond updates.",
    solution: "We engineered a custom WebGL-based rendering engine that offloads computation to the GPU, coupled with a Rust-powered backend for blazing-fast data ingestion. The UI focuses on a \"low-noise\" philosophy, using high-contrast monochromatic themes to ensure researchers can identify anomalies in seconds. The final architecture reduced observability latency by 94% and increased concurrent data stream capacity by 10x.",
    processSteps: [
      {
        number: "01",
        title: "Architecture Audit",
        description: "Identifying bottlenecks in the legacy telemetry pipeline."
      },
      {
        number: "02",
        title: "WebGL Prototyping",
        description: "Validating 60FPS performance on low-end hardware."
      },
      {
        number: "03",
        title: "UI Optimization",
        description: "Minifying visual artifacts for maximum data clarity."
      }
    ],
    showcaseImages: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA2cfQIQiQNA_ZYNGUFyqAY-ZEBLCYVyBoc5l67dJrQxh7k9ERnrGvgm7OJKlWHTFwc4X7Ma-oxTw4U4p3FDD9FXrUJsIoPfiTUqkHF5m1z_Jy3jAYaj4JHPDSK_ukU5Gn-sbPgXqZOnESdNyNliRpo9Avl6WIjyMIp8hhvJoQ1pB8LovZxyhhHzYvelr4lDGB14NM7gqHAkohaGzgDwQPCFsx0xtBA9XND3whZDy2wqDntnH2ZjusSgpuocrWpDm_YwieazwYnpE-O",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDPn4wvjSnAZacmC0i0iyzWC7PCicfhlhUGwmdXRiULpj8GTHllVTfkzxykSlLHcvioUEg_Z4pr2YLPNwOZ5FUGvbByaFlLM6ri3zKrqjgerht64zrycTiAPbGmOtSKxRAMCPMF9qR2oyCCLXLx7XreNQy4TmpQ4akeMTo73P0vXqXfngTv8QexVHoy77J_Bs6aprZgzDurKpuA_LLJ8rhdUXIZ6WW8MrmVlwzyz31E1qVJmR5MXh4i038_lgzIMbC56ugDGkGuxDvA"
    ],
    githubUrl: "https://github.com/fathur-ramadhan/quantum-dynamics-dashboard"
  },
  {
    id: "nexus-ai-dashboard",
    title: "Nexus AI Dashboard",
    description: "Advanced analytics platform integrated with LLMs for real-time data processing and visualization.",
    detailSubtitle: "Advanced analytics platform integrated with LLMs for real-time data processing and visualization.",
    technology: "Next.js",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDLLpD_ybHytblcgKHRkcAijijvfp0U_uleuTK9JbhWvK8U0Pn8Jg_c3AJxj7bGvrB1A4t_vr00AFXlAKYqQcG4aOQui5F9n_PXGMDH7QNXF-rD930uM8wG_NaQ5OwMfpThF88czTuIzqY-Giw9RQ4jGwy0gME6Z9jvGOxhB7yo2qvWYZ3OzQd1ZMa_yWnxMh4gW1-Ade1vK3vdoMIU6s67M-GKAODpRiDOH8lMkEds1XfC_5ETjmNXEpItI2k_AGsJJ1X-pJycUEqI",
    tags: ["Next.js", "React", "AI Anomaly", "Gemini API"],
    clientProblem: "The client needed a real-time system to monitor high-frequency telemetry across distributed clusters with dynamic LLM-driven anomaly explanation. The existing setup was slow and suffered from periodic UI lag, leading to unnoticed drop-offs.",
    solution: "We implemented an edge-cached streaming analytics architecture. Using advanced viewport virtualization and canvas-based graphics, we reduced render cycles by 80%. Multi-modal Gemini modules write real-time, on-demand incident reports directly on anomalies.",
    processSteps: [
      {
        number: "01",
        title: "Architecture Audit",
        description: "Identifying bottlenecks in the legacy telemetry pipeline."
      },
      {
        number: "02",
        title: "WebGL Prototyping",
        description: "Validating 60FPS performance on low-end hardware."
      },
      {
        number: "03",
        title: "UI Optimization",
        description: "Minifying visual artifacts for maximum data clarity."
      }
    ],
    showcaseImages: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA2cfQIQiQNA_ZYNGUFyqAY-ZEBLCYVyBoc5l67dJrQxh7k9ERnrGvgm7OJKlWHTFwc4X7Ma-oxTw4U4p3FDD9FXrUJsIoPfiTUqkHF5m1z_Jy3jAYaj4JHPDSK_ukU5Gn-sbPgXqZOnESdNyNliRpo9Avl6WIjyMIp8hhvJoQ1pB8LovZxyhhHzYvelr4lDGB14NM7gqHAkohaGzgDwQPCFsx0xtBA9XND3whZDy2wqDntnH2ZjusSgpuocrWpDm_YwieazwYnpE-O"
    ],
    githubUrl: "https://github.com/fathur-ramadhan/nexus-ai-dashboard"
  },
  {
    id: "prism-workflow",
    title: "Prism Workflow",
    description: "A minimalist project management tool focused on distraction-free task orchestration and team sync.",
    detailSubtitle: "A minimalist project management tool focused on distraction-free task orchestration and team sync.",
    technology: "Tailwind",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuABM2pLONW-YEfl3PIW4fHkaIaR35ZxcHjERJT-d_fMLXdW5vWvzXgJBOMDUGUnGQ1EetszvArLGzpnydIfLH1m7vAig2QLni5e0vilHgCls14tczhZf7IVnYGemzVMQGhmpq_p_wvqDbssOVnwknzK1f61toKO_FrQli3wawD2YKa_6XGIcKsDFNIuQrkg_7hu94m-nf8-UibbQRs4XUsP_ZQsK8t5-84OIC3IPd4FWKWjuUK2Zdu057A9-9G7LZw0bZGU6IW2b9M5",
    tags: ["Tailwind CSS", "React", "Mobile First", "Framer Motion"],
    clientProblem: "Project managers were overwhelmed with busywork, unnecessary notifications, and overly complicated task managers. They requested a highly opinionated, completely distraction-free task orchestration interface built specifically for mobile viewports.",
    solution: "We engineered a clean, dark, absolute high-contrast typography system with spring-based motion curves. The workflow supports keyboard-driven gestures, swipe-to-complete, and native-feeling smooth bottom sheets.",
    processSteps: [
      {
        number: "01",
        title: "User Distraction Auditing",
        description: "Eliminating unnecessary input modules and custom widgets."
      },
      {
        number: "02",
        title: "Micro-Interaction Fine-Tuning",
        description: "Injecting highly physics-backed responsive gesture animations."
      },
      {
        number: "03",
        title: "Responsive Mobile Shell",
        description: "Creating strict viewport restrictions and dark-mode optimization parameters."
      }
    ],
    showcaseImages: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDPn4wvjSnAZacmC0i0iyzWC7PCicfhlhUGwmdXRiULpj8GTHllVTfkzxykSlLHcvioUEg_Z4pr2YLPNwOZ5FUGvbByaFlLM6ri3zKrqjgerht64zrycTiAPbGmOtSKxRAMCPMF9qR2oyCCLXLx7XreNQy4TmpQ4akeMTo73P0vXqXfngTv8QexVHoy77J_Bs6aprZgzDurKpuA_LLJ8rhdUXIZ6WW8MrmVlwzyz31E1qVJmR5MXh4i038_lgzIMbC56ugDGkGuxDvA"
    ],
    githubUrl: "https://github.com/fathur-ramadhan/prism-workflow"
  }
];

export const EXPERIENCE_DATA: Experience[] = [
  {
    id: "fajar-network",
    company: "PT Fajar Network",
    duration: "6 Months",
    role: "Content Specialist",
    bgImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuCeqrf_7_Jlw5QJzSz9-kHNN2WylI_0zmzdii87G5-losoNRcA164ihparmgaCbcaZxBd6aCLeGTsKqq-C2krGyyGhJ0DJxhIk2AO-eDWlLEVdCHwW4fvRmwVsuPJMgCXX3fzSysymOAkRrWZwWEFu_gk--dnlIfH5twZBVj4v41oOCu6S67hZnZfHOjk0uwtVhusmfdboNxk3zqnwDDiCAS2HuvnPzS4uv6SNhzmUuHc-oX2E7QixSUM7oL4hA9NKZ44O3h4TBBb8t",
    highlights: [
      "Cameraman & Visual Storytelling",
      "Podcast Production Assistant",
      "Digital Content Creation"
    ]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "frontend",
    title: "Frontend Architecture",
    iconName: "Monitor",
    skills: ["React", "Next.js", "Tailwind CSS", "TypeScript"]
  },
  {
    id: "backend",
    title: "Backend & Systems",
    iconName: "Database",
    skills: ["Node.js", "PHP", "Python", "MySQL"]
  },
  {
    id: "design",
    title: "Design & UX",
    iconName: "Sparkles",
    skills: ["Figma", "Design Systems", "Prototyping", "UX Audit"]
  }
];
