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

/** A stat shown as a big `value` and a small muted `label`; joined with a space they read as one phrase. */
export type ShippedStat = {
  value: string;
  label: string;
};

export type ShippedRole = {
  company: string;
  role: string;
  dates: string;
  location: string;
  icon: LucideIcon;
  stat: ShippedStat;
  bullets: string[];
  tags: string[];
};

export type ShippedProject = {
  /** "Name · description"; the part before the first " · " renders as the name. */
  title: string;
  context: string;
  icon: LucideIcon;
  stat: ShippedStat;
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
        role: "Software Engineering Intern · Omniverse, Simulation Technology",
        dates: "May – Aug 2026",
        location: "Santa Clara, CA",
        icon: Cpu,
        stat: { value: "0", label: "unsafe skips" },
        bullets: [
          "Built an AI-assisted execution planner for Omniverse CI that coordinates source scanners, container builds and GPU-test validation across 20,724 historical decisions.",
          "Kept AI-suggested dependency edges separate from SHA-256-sealed release policies, so the planner deferred 8,569 tests across 628 merge requests with zero confirmed unsafe skips.",
          "Profiled constrained CI workers and cached graph snapshots, cutting planning time by 42% and executed-job time by 50.5% in a controlled replay.",
        ],
        tags: ["Python", "CI", "graph analysis"],
      },
      {
        company: "Tekion Corp",
        role: "Software Engineer",
        dates: "Jul 2022 – Dec 2024",
        location: "Bengaluru, India",
        icon: Briefcase,
        stat: { value: "60%", label: "fewer P1/P2 incidents" },
        bullets: [
          "Built event-driven Java/Spring Boot APIs that kept financial state in sync through Kafka and Elasticsearch for 1,000+ enterprise clients across 200+ sites.",
          "Designed durable async jobs for 4M+ monthly statements, covering generation, S3 storage, SES delivery and bounded retries.",
          "Traced race conditions between Kafka consumers and the search index, then hardened recovery with backoff and jitter, contributing to a 60% drop in P1/P2 incidents.",
        ],
        tags: ["Java", "Spring Boot", "Kafka", "Elasticsearch", "AWS"],
      },
    ],
  },
  projects: {
    heading: "Projects",
    items: [
      {
        title: "Neo · multi-agent credit and access desk",
        context: "Cal Hacks 13.0 · team of 4 · I wrote 110 of 183 commits",
        icon: Bot,
        stat: { value: "110 of 183", label: "commits" },
        bullets: [
          "Four agents run the credit desk of a simulated crypto platform: they match payments, collect overdue fees, and restrict or restore client access. Money moves through Capital One's Nessie sandbox bank.",
          "I built the guardrail layer: SpacetimeDB reducers that check every agent action against the client's contract, so an agent can't restrict more than is owed or approve its own proposal.",
          "I also built the bank and platform sync, the gateway that is the only writer to systems of record, the TypeScript agents on Factory Droid with MCP tools, and Azure deploys that only restart what changed.",
          "When 8 parallel Droid processes ran the hosted container out of memory, I capped model calls at 2 and added task claiming so agent processes share one queue without duplicate work.",
        ],
        tags: ["TypeScript", "SpacetimeDB", "Factory Droid", "MCP", "Azure"],
        links: [
          { label: "Live demo", href: "https://access-desk-web.vercel.app", kind: "demo" },
          { label: "Repo", href: "https://github.com/projects-hacks/calhacks-neo", kind: "repo" },
        ],
      },
      {
        title: "Outpost · multi-tenant enterprise agent runtime",
        context: "Personal project",
        icon: Building2,
        stat: { value: "123s", label: "to onboard a new tenant" },
        bullets: [
          "Connectors, tools and per-tenant budgets are declared in YAML, so an unseen tenant vertical was onboarded in 123 seconds with no core code changes.",
          "Tenant isolation is enforced inside BM25 and vector retrieval: zero cross-tenant leaks across 14 adversarial probes.",
          "Sentence-level evidence grounding and deadline-bound provider fallback, covered by 145 tests at 94% branch coverage.",
        ],
        tags: ["Python", "FastAPI", "React", "RAG"],
        links: [
          { label: "Repo", href: "https://github.com/rajeev-chaurasia/outpost", kind: "repo" },
        ],
      },
      {
        title: "Penstock · multi-provider LLM gateway",
        context: "Open source · Apache-2.0",
        icon: Gauge,
        stat: { value: "1.02 ms", label: "vs 12.14 ms" },
        bullets: [
          "One OpenAI-compatible endpoint in front of 3 LLM providers, with SSE streaming, circuit breaking, and retries that never splice partial completions.",
          "Two-phase tenant spend reservations with durable settlement under concurrent load, covered by 441 Go tests.",
          "1.02 ms mean added latency vs 12.14 ms for LiteLLM over 2,400 requests per arm, reproduced across eight Linux configurations.",
        ],
        tags: ["Go", "SSE", "OpenTelemetry"],
        links: [
          { label: "Repo", href: "https://github.com/rajeev-chaurasia/pen-stock", kind: "repo" },
        ],
      },
      {
        title: "ClaraCare · realtime voice agent",
        context: "Hackathon winner · team project",
        icon: PhoneCall,
        stat: { value: "6", label: "tools callable mid-call" },
        bullets: [
          "Realtime voice agent bridging Twilio Media Streams and Deepgram speech-to-text, LLM and text-to-speech over two async WebSockets.",
          "Separates silent agent steering from spoken injections using state-aware queues with latest-wins coalescing.",
          "Conversation and alert state protected by 11 Supabase row-level security policies.",
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
      text: "Won 4 hackathons: Signet, ClaraCare, ClearClause and SJ Hopes",
      href: "https://devpost.com/rajeevranjan-chaurasia",
    },
    certifications: {
      label: "NVIDIA-certified",
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
