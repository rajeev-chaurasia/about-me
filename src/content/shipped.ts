export type ShippedLink = {
  label: string;
  href: string;
};

export type ShippedItem = {
  title: string;
  context: string;
  bullets: string[];
  tags: string[];
  links?: ShippedLink[];
};

export type ShippedContent = {
  eyebrow: string;
  heading: string;
  items: ShippedItem[];
  also: {
    text: string;
    href: string;
  };
};

export const shipped: ShippedContent = {
  eyebrow: "02 · WHAT I'VE SHIPPED",
  heading: "What I've Shipped",
  items: [
    {
      title: "NVIDIA — AI-assisted CI execution planner",
      context: "SWE intern, Omniverse · summer 2026",
      bullets: [
        "Python planner deciding which builds + GPU tests a merge request actually needs, trained on 20,724 historical decisions",
        "8,569 safe test deferrals across 628 MRs, zero confirmed unsafe skips. AI-suggested graph edges kept separate from SHA-256 sealed release policies. Planning time down 42%",
      ],
      tags: ["Python", "CI", "graph analysis"],
    },
    {
      title: "Neo — multi-agent credit + access desk",
      context: "Cal Hacks 13.0 · team of 4",
      bullets: [
        "Four agents run the credit desk for a fictional crypto platform: match payments, collect overdue fees, restrict + restore access. Real money moves through the Capital One Nessie sandbox",
        "My part (110 of 183 commits): the SpacetimeDB schema + reducers where the guardrails live, so an agent can't restrict more than what's owed or approve its own proposal. Plus bank/platform sync + the gateway, agents in TypeScript on Factory Droid with MCP tools, Azure hosting + CI that only redeploys what changed",
        "Capped model calls at 2 after 8 parallel Droid processes ran the container out of memory, and added task claiming so multiple agent processes share one queue without double work",
      ],
      tags: ["TypeScript", "SpacetimeDB", "Factory Droid", "MCP", "Azure"],
      links: [
        { label: "Live demo", href: "https://access-desk-web.vercel.app" },
        { label: "Repo", href: "https://github.com/projects-hacks/calhacks-neo" },
      ],
    },
    {
      title: "Outpost — multi-tenant enterprise agent runtime",
      context: "Personal project",
      bullets: [
        "YAML-defined connectors, tools + tenant budgets; onboarded an unseen tenant vertical in 123 seconds without core code changes",
        "Tenant isolation enforced inside retrieval, zero cross-tenant leaks across 14 adversarial probes. 145 tests, 94% branch coverage",
      ],
      tags: ["Python", "FastAPI", "React", "RAG"],
    },
    {
      title: "Tekion",
      context: "SWE · 2022–2024",
      bullets: [
        "Event-driven Java/Spring Boot APIs syncing financial state through Kafka + Elasticsearch for 1,000+ enterprise clients",
        "Durable async jobs for 4M+ monthly statements, traced cross-service race conditions + hardened recovery, contributed to 60% fewer P1/P2 incidents",
      ],
      tags: ["Java", "Spring Boot", "Kafka", "Elasticsearch", "AWS"],
    },
    {
      title: "Penstock — multi-provider LLM gateway",
      context: "Open source",
      bullets: [
        "One OpenAI-compatible endpoint across 3 providers with SSE streaming, circuit breaking, retries that never splice partial completions",
        "1.02ms mean added latency vs 12.14ms for LiteLLM over 2,400 requests per arm, 441 Go tests",
      ],
      tags: ["Go", "SSE", "OpenTelemetry"],
      links: [
        { label: "Repo", href: "https://github.com/rajeev-chaurasia/pen-stock" },
      ],
    },
  ],
  also: {
    text: "Also built ClaraCare (realtime voice agent, Twilio + Deepgram) · 4x hackathon winner",
    href: "https://devpost.com/rajeevranjan-chaurasia",
  },
};
