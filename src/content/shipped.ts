import {
  Bot,
  Briefcase,
  Building2,
  Cpu,
  Gauge,
  PhoneCall,
  type LucideIcon,
} from "lucide-react";

export type ShippedLink = {
  label: string;
  href: string;
  /** "repo" shows the GitHub mark, "demo" an outbound arrow. */
  kind: "repo" | "demo";
};

export type ShippedRole = {
  company: string;
  role: string;
  dates: string;
  location: string;
  icon: LucideIcon;
  stat: string;
  bullets: string[];
  tags: string[];
};

export type ShippedProject = {
  title: string;
  context: string;
  icon: LucideIcon;
  stat: string;
  bullets: string[];
  tags: string[];
  links: ShippedLink[];
};

export type ShippedContent = {
  eyebrow: string;
  heading: string;
  experience: {
    heading: string;
    roles: ShippedRole[];
  };
  projects: {
    heading: string;
    items: ShippedProject[];
  };
  credits: {
    hackathons: { text: string; href: string };
    certifications: {
      label: string;
      links: { label: string; href: string }[];
    };
  };
};

export const shipped: ShippedContent = {
  eyebrow: "02 · WHAT I'VE SHIPPED",
  heading: "What I've shipped",
  experience: {
    heading: "Experience",
    roles: [
      {
        company: "NVIDIA",
        role: "Software Engineering Intern, Simulation Technology (Omniverse)",
        dates: "May 2026 – Aug 2026",
        location: "Santa Clara, CA",
        icon: Cpu,
        stat: "0 unsafe skips",
        bullets: [
          "AI-assisted Python execution planner for Omniverse CI deciding which builds + GPU tests a merge request actually needs, trained on 20,724 historical decisions",
          "AI-suggested graph edges kept separate from SHA-256 sealed release policies: 8,569 safe test deferrals across 628 merge requests, zero confirmed unsafe skips",
          "Profiled constrained CI workers + cached graph snapshots, cutting planning time 42%",
        ],
        tags: ["Python", "CI", "graph analysis"],
      },
      {
        company: "Tekion Corp",
        role: "Software Engineer",
        dates: "Jul 2022 – Dec 2024",
        location: "Bengaluru, India",
        icon: Briefcase,
        stat: "60% fewer P1/P2",
        bullets: [
          "Event-driven Java/Spring Boot APIs syncing financial state through Kafka + Elasticsearch for 1,000+ enterprise clients",
          "Durable async jobs for 4M+ monthly statements, traced cross-service race conditions + hardened recovery, contributing to 60% fewer P1/P2 incidents",
        ],
        tags: ["Java", "Spring Boot", "Kafka", "Elasticsearch", "AWS"],
      },
    ],
  },
  projects: {
    heading: "Projects",
    items: [
      {
        title: "Neo — multi-agent credit + access desk",
        context: "Cal Hacks 13.0 · team of 4",
        icon: Bot,
        stat: "110 / 183 commits",
        bullets: [
          "Four agents run the credit desk for a fictional crypto platform: match payments, collect overdue fees, restrict + restore access. Real money moves through the Capital One Nessie sandbox",
          "My part (110 of 183 commits): the SpacetimeDB schema + reducers where the guardrails live, so an agent can't restrict more than what's owed or approve its own proposal. Plus bank/platform sync + the gateway, agents in TypeScript on Factory Droid with MCP tools, Azure hosting + CI that only redeploys what changed",
          "Capped model calls at 2 after 8 parallel Droid processes ran the container out of memory, and added task claiming so multiple agent processes share one queue without double work",
        ],
        tags: ["TypeScript", "SpacetimeDB", "Factory Droid", "MCP", "Azure"],
        links: [
          { label: "Live demo", href: "https://access-desk-web.vercel.app", kind: "demo" },
          { label: "Repo", href: "https://github.com/projects-hacks/calhacks-neo", kind: "repo" },
        ],
      },
      {
        title: "Outpost — multi-tenant enterprise agent runtime",
        context: "Personal project",
        icon: Building2,
        stat: "0 leaks in 14 probes",
        bullets: [
          "YAML-defined connectors, tools + tenant budgets; onboarded an unseen tenant vertical in 123 seconds without core code changes",
          "Tenant isolation enforced inside retrieval, zero cross-tenant leaks across 14 adversarial probes. 145 tests, 94% branch coverage",
        ],
        tags: ["Python", "FastAPI", "React", "RAG"],
        links: [
          { label: "Repo", href: "https://github.com/rajeev-chaurasia/outpost", kind: "repo" },
        ],
      },
      {
        title: "Penstock — multi-provider LLM gateway",
        context: "Open source",
        icon: Gauge,
        stat: "1.02ms vs 12.14ms",
        bullets: [
          "One OpenAI-compatible endpoint across 3 providers with SSE streaming, circuit breaking, retries that never splice partial completions",
          "1.02ms mean added latency vs 12.14ms for LiteLLM over 2,400 requests per arm, 441 Go tests",
        ],
        tags: ["Go", "SSE", "OpenTelemetry"],
        links: [
          { label: "Repo", href: "https://github.com/rajeev-chaurasia/pen-stock", kind: "repo" },
        ],
      },
      {
        title: "ClaraCare — realtime voice agent",
        context: "Hackathon winner",
        icon: PhoneCall,
        stat: "6 live-call tools",
        bullets: [
          "Realtime voice agent bridging Twilio Media Streams with Deepgram STT/LLM/TTS over dual async WebSockets, 6 callable tools during live calls",
          "Conversations + alert state behind 11 Supabase RLS policies, with failure-isolated notifications",
        ],
        tags: ["Python", "WebSockets", "Deepgram", "React Native"],
        links: [
          { label: "Repo", href: "https://github.com/projects-hacks/clara-care", kind: "repo" },
        ],
      },
    ],
  },
  credits: {
    hackathons: {
      text: "4x hackathon winner: Signet, ClaraCare, ClearClause, SJ Hopes",
      href: "https://devpost.com/rajeevranjan-chaurasia",
    },
    certifications: {
      label: "NVIDIA Certified",
      links: [
        {
          label: "Agentic AI",
          href: "https://www.credly.com/badges/86057ac4-f66e-469e-a68a-5104cfd2f886/public_url",
        },
        {
          label: "Generative AI LLMs",
          href: "https://www.credly.com/badges/50b368a3-c98e-4838-8559-34f47a795ce2/public_url",
        },
      ],
    },
  },
};
