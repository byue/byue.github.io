export type PhotoAsset = {
  id: string;
  url: string;
  alt: string;
  caption: string;
  photographer: string;
  photographerUrl: string;
  photoUrl: string;
};

export type ExperienceChapter = {
  id: string;
  kicker: string;
  company: string;
  role: string;
  dateRange: string;
  location: string;
  summary: string;
  highlights: string[];
  techUsed: string[];
  marginNote: string;
  imageId: string;
};

export type ProjectCaseStudy = {
  id: string;
  title: string;
  year: string;
  caption: string;
  tags: string[];
  imageId: string;
  repoUrl: string;
  problem: string;
  approach: string;
  outcome: string;
  keyNumbers: Array<{ label: string; value: string }>;
};

export const profile = {
  repoName: "byue.github.io",
  person: {
    name: "Bryan Yue",
    title: "Machine Learning Engineer",
    location: "Greater Seattle Area",
    email: "yue_bryan123@hotmail.com",
    linkedin: "https://www.linkedin.com/in/bryanyue322",
    github: "https://github.com/byue",
    summary:
      "I build scalable, dependable systems at the intersection of software and machine learning, with 7+ years of experience focused on reliability, performance, and customer impact.",
  },
  navigation: [
    { id: "about", label: "About", kind: "section" as const },
    { id: "experience", label: "Experience", kind: "section" as const },
    { id: "projects", label: "Projects", kind: "section" as const },
    { id: "publications", label: "Papers", kind: "section" as const },
    { id: "education", label: "Education", kind: "section" as const },
    { id: "contact", label: "Contact", kind: "section" as const },
    { id: "github", label: "GitHub", kind: "asset" as const, href: "https://github.com/byue" },
    { id: "resume", label: "Resume", kind: "asset" as const, href: "https://github.com/byue/Resume/raw/master/Resume.pdf" },
  ],
  masthead: {
    title: "Bryan Yue | Machine Learning Engineer",
    issue: "Amazon | Sponsored Product Ads",
  },
  theme: {
    backgroundImageId: "background_editorial",
  },
  ui: {
    menuLabel: "Menu",
    photoLabel: "Photo",
    unsplashLabel: "Unsplash",
    expandLabel: "Expand",
    collapseLabel: "Collapse",
    closeLabel: "Close",
    educationLabel: "Education",
    honorsLabel: "Honors",
    copiedLabel: "Copied",
    copyEmailLabel: "Copy Email",
    linkedinLabel: "LinkedIn",
    githubLabel: "GitHub",
    projectSpreadLabel: "Project Spread",
    problemLabel: "Problem",
    approachLabel: "Approach",
    outcomeLabel: "Outcome",
    keyNumbersLabel: "Highlights",
    featureLabel: "Writing",
    repositoryLabel: "View Repository",
    copyright: "© 2026 Bryan Yue\nAll Rights Reserved",
  },
  hero: {
    kicker: "Cover Feature",
    deck:
      "Proven in production: reduced mitigation latency from minutes to seconds and increased cloud control-plane throughput by 8x.",
    metadata: ["Machine Learning Engineer", "AI", "Software Engineer", "Software Developer", "Machine Learning", "Software Engineering", "System Design", "Cross-Team Leadership", "Strategic Planning", "FAANG", "Technical Vision", "Mentorship", "AWS", "Azure"],
    primaryCtaLabel: "Download Resume",
    imagePrimaryId: "hero_primary",
    imageSecondaryId: "hero_secondary",
  },
  about: {
    id: "about",
    kicker: "Editor's Note",
    heading: "Software, Practiced as a Long-Form Craft",
    paragraphs: [
      "I design and deliver customer-impacting solutions with speed and precision, guided by high standards for quality, structure, and long-term maintainability.",
      "Across Amazon, Microsoft, and Bloomberg, my work has focused on making complex infrastructure more responsive, more scalable, and easier to evolve in production.",
    ],
    pullQuote:
      "The real cost of complexity is not in how hard a system is to build, but in how hard it becomes to understand, operate, and evolve over time.",
    impactBlocks: [
      {
        metric: "Global Impact",
        title: "AWS Shield",
        note: "Architected a next-generation DDoS mitigation service that increased mitigation efficacy from 10% to 80% and reduced p99 time-to-mitigation from over one minute to 15 seconds across AWS network defenses.",
      },
      {
        metric: "Cross-Team Collaboration",
        title: "Amazon Sponsored Product Ads",
        note: "Aligned data platform and ads sourcing teams on multiple architectural decisions for ads query personalization, reducing fragmentation across systems and enabling faster, more reliable delivery of personalization capabilities in production.",
      },
      {
        metric: "Performance Optimization",
        title: "Azure Stack Compute",
        note: "Rearchitected on-premises cloud infrastructure for Azure Stack and JEDI in resource-constrained environments, cutting VM provisioning latency by 15 seconds via a zero-disruption VM agent protocol migration and launching IMDS services to unblock container orchestration workloads.",
      },
    ],
    imageId: "about_immersive",
  },
  experience: {
    id: "experience",
    kicker: "Timeline",
    heading: "Experience",
    intro:
      "Production is where promises are kept.",
    chapters: [
      {
        id: "amazon-2026",
        kicker: "Chapter 05",
        company: "Amazon | Sponsored Product Ads Search Relevance",
        role: "Machine Learning Engineer",
        dateRange: "January 2026-Present",
        location: "Seattle, WA",
        summary:
          "Machine Learning Engineer for Sponsored Product Ads Search Relevance at Amazon.",
        highlights: [],
        techUsed: [
          "AWS",
          "Sagemaker",
          "Bedrock",
          "LLM",
          "Spring Framework",
          "Memcached",
          "Solr",
          "Java",
          "Python",
          "CloudWatch",
          "EC2",
          "A/B Testing",
          "Typescript"
        ],
        marginNote:
          "Focus area: leveraging machine learning to improve ads relevance scoring and optimizing inference perfomance.",
        imageId: "experience_amazon",
      },
      {
        id: "aws-2021",
        kicker: "Chapter 04",
        company: "Amazon | AWS Shield",
        role: "Software Developer",
        dateRange: "November 2021-January 2026",
        location: "Seattle, WA",
        summary:
          "Automated state of the art L34 DDoS detection and mitigation techniques for AWS network infrastructure.",
        highlights: [
          "Created scope for peers by defining the annual team roadmap with data-driven project prioritization.",
          "Led the team and designed near real-time mitigation automation, improving efficacy from 10% to 80%.",
          "Designed a centralized platform for management of IP known offender lists, reducing operator mitigaiton time 30 minutes.",
          "Unblocked contentious design, release, and operational decisions by disambiguating options.",
        ],
        techUsed: [
          "DDoS Detection",
          "DDoS Mitigation",
          "AWS",
          "ECS",
          "Lambda",
          "DynamoDB",
          "S3",
          "Elasticache",
          "React",
          "Step Functions",
          "OpenSearch",
          "CloudWatch",
          "Java",
          "SQS",
          "Kinesis",
          "Clojure",
          "Typescript",
          "Ruby",
          "Clara Rule Engine"
        ],
        marginNote:
          "Architecture and operational rigor were treated as one continuous design problem.",
        imageId: "experience_aws",
      },
      {
        id: "microsoft-2019",
        kicker: "Chapter 03",
        company: "Microsoft | AzureStack Compute",
        role: "Software Developer",
        dateRange: "October 2019-November 2021",
        location: "Redmond, WA",
        summary:
          "Optimized on-premises cloud infrastructure in resource-constrained environments for JEDI program.",
        highlights: [
          "Rearchitected on-premises cloud infrastructure in resource-constrained environments supporting Azure Stack and JEDI.",
          "Reduced VM provisioning latency by 15 seconds by safely migrating VM Agents to a new protocol without service disruption.",
          "Designed and launched services enabling IMDS capabilities, unblocking a class of container orchestration workloads.",
          "Increased compute control plane-data plane throughput 8x via a bulk VM status API and intelligent caching.",
        ],
        techUsed: [
          "Azure",
          "ASP.NET Core",
          ".NET Framework",
          "SQL",
          "C#",
          "Python",
          "Kusto",
          "C++",
          "Reliable Collections",
          "Blob",
          "Functions",
          "Cosmos DB",
          "Key Vault",
          "Virtual Machines"
        ],
        marginNote:
          "A systems chapter defined by migration safety, compatibility, and measurable performance wins.",
        imageId: "experience_microsoft",
      },
      {
        id: "bloomberg-2018",
        kicker: "Chapter 02",
        company: "Bloomberg LP | TickerPlant",
        role: "Software Developer",
        dateRange: "September 2018-September 2019",
        location: "New York City",
        summary:
          "Supported a time-series database serving billions of queries per day for real-time market data feeds.",
        highlights: [
          "Led migration of petabytes of historical market data within a strict 6-hour maintenance window, using aggressive caching strategies and low-latency C++ pipelines to meet throughput and availability SLA.",
          "Designed and prototyped a ranking API for stock insights, integrating data science models to surface high signal analytics for downstream consumers and internal tooling."
        ],
        techUsed: [
          "C++",
          "C",
          "Concurrent Programming",
          "Database Migration",
          "Transactions",
          "Python"
        ],
        marginNote:
          "Throughput at this scale required careful balancing of reliability and sustained transfer performance.",
        imageId: "experience_bloomberg",
      },
      {
        id: "kernel-2018",
        kicker: "Chapter 01",
        company: "Kernel Labs | Incubator",
        role: "Machine Learning Engineer Intern",
        dateRange: "March 2018-June 2018",
        location: "Seattle, WA",
        summary:
          "Developed a BLSTM-based multi-speaker speech separation model in PyTorch and deployed training and inference workloads on AWS EC2, building an end-to-end pipeline from spectrogram preprocessing (STFT) through model evaluation and batch inference.",
        highlights: [],
        techUsed: [
          "PyTorch",
          "Python",
          "EC2",
          "BLSTM",
          "Speech Separation",
          "Machine Learning",
          "Data Cleaning",
          "Feature Engineering",
          "Web Crawler",
          "Audio Processing"
        ],
        marginNote:
          "Early ML systems work that set the foundation for later large-scale production engineering.",
        imageId: "experience_kernel",
      },
    ] as ExperienceChapter[],
  },
  projects: {
    id: "projects",
    kicker: "Portfolio Gallery",
    heading: "Projects",
    intro:
      "Small bets on interesting ideas.",
    entries: [
      {
        id: "market-data-migration",
        title: "TradeStrike",
        year: "2025-Present",
        caption: "Online Alerting System for Stock Price and Volume Spikes.",
        tags: ["Python", "Kafka", "Alpaca", "TimescaleDB", "MinIO", "Redis", "Postgres", "Prometheus", "Grafana", "Docker Compose", "Loki", "Promtail", "RabbitMQ"],
        imageId: "project_bloomberg",
        repoUrl: "https://github.com/byue/TradeStrike",
        problem:
          "Professional traders rely on expensive terminals and fast proprietary scanners to spot momentum and anomalies in real time, while retail traders are left with delayed data and fragmented signals. This gap makes it difficult for retail traders to interpret market activity quickly and confidently, leading to slower, less data-driven decisions.",
        approach:
          "Built TradeStrike to level the playing field by providing near real-time stock anomaly detection that surfaces momentum opportunities as they happen. Designed the system to deliver simple, decisive alerts that cut through noise, while keeping the product low-cost and low-friction without compromising on detection quality or notification speed.",
        outcome:
          "Enabled retail traders to react to market-moving signals with the speed and clarity previously reserved for professional platforms, turning delayed, noisy data into timely, actionable insights. TradeStrike shifts decision-making from guesswork to signal-driven execution, improving responsiveness, confidence, and access to high-quality market intelligence without the cost or complexity of institutional tools.",
        keyNumbers: [
          { label: "Price Spike to Notification Latency", value: "1s" },
        ],
      },
      {
        id: "ddos-platform",
        title: "Reelify",
        year: "2026-Present",
        caption: "Rapid idea-to-cinematic prototype tool.",
        tags: ["Python", "Inference Optimization", "LLM Self-Hosting", "FastAPI", "Pytorch", "React", "Video Processing"],
        imageId: "project_ddos",
        repoUrl: "https://github.com/byue/Reelify",
        problem:
          "It’s too slow and expensive to turn creative or product ideas into high-quality, cinematic visuals that people can react to. Using commercial systems like Sora for video generation is prohibitively expensive for rapid iteration.",
        approach:
          "Built a self-hosted text-to-video API powered by a multimodal LLM on VRAM-constrained Pascal GPUs, using a quantized Qwen model for structured scene planning and an optimized Stable Diffusion pipeline for frame synthesis. Implemented latent reuse, keyframe interpolation, attention slicing, CPU–GPU pipelining, and weight quantization to operate within 8–12GB VRAM constraints and reduce render latency by ~40%. Designed a shot-based generation architecture that decomposes prompts into director-style plans (camera, lighting, motion), enabling rapid idea-to-cinematic preview generation.",
        outcome:
          "Reduced the cost and friction of visual prototyping by making high-fidelity, cinematic previews practical on commodity hardware, enabling ideas to be explored and iterated on in minutes instead of hours or days. This shifted creative exploration from a high-cost, low-frequency activity into a fast feedback loop, allowing teams to validate concepts earlier, discard weak directions sooner, and commit to production with greater confidence.",
        keyNumbers: [
          { label: "Latency", value: "40% Reduction" },
          { label: "VRAM", value: "12GB" },
          { label: "Video Duration", value: "10s" },
          { label: "LLM Hosting", value: "Self-Hosted" },
        ],
      },
      {
        id: "azure-control-plane",
        title: "Change.AI",
        year: "2025-2025",
        caption: "Change Management Insights Platform for Technology Adoption.",
        tags: ["Python", "Azure OpenAI", "Azure Functions", "Azure Cosmos DB", "Azure Blob", "Azure Key Vault", "Azure Static Web Apps", "React"],
        imageId: "project_azure",
        repoUrl: "https://github.com/Chrissa2009/change-ai",
        problem:
          "Change initiatives often rely on fragmented survey data and manual analysis, making it slow and inconsistent to turn feedback into clear, actionable insights. Teams struggle to move from raw responses to structured assessments and recommendations that leadership can actually use for decision-making.",
        approach:
          "Built a cloud-native Change Management Insights platform powered by OpenAI models deployed on Microsoft Azure. Designed a serverless architecture with survey CRUD APIs backed by Azure Cosmos DB and Azure Blob Storage, orchestrated through Azure Functions. Implemented LLM-driven report generation that synthesizes survey inputs into structured change readiness assessments and actionable recommendations.",
        outcome:
          "Transformed change analysis from a manual, time-intensive process into an automated, repeatable workflow (10s) that produces consistent, decision-ready insights. The platform enables teams to move from raw survey data to executive-ready assessments in minutes, improving speed, consistency, and the quality of recommendations while reducing operational overhead.",
        keyNumbers: [
          { label: "Report Generation Latency", value: "10s" }
        ],
      },
      {
        id: "search-relevance",
        title: "Algorithms",
        year: "2024-2025",
        caption: "Fundamental and Advanced Data Structures / Algorithms.",
        tags: ["Algotithms", "Data Structures", "Python", "PyTest", "Binary Search", "Dynamic Programming", "Graphs", "BFS", "DFS", "Djikstra's", "Bellman Ford", "Union Find", "Prim's", "Kruskal's", "Topological Sort", "Trie"],
        imageId: "project_relevance",
        repoUrl: "https://github.com/byue/Algorithms",
        problem:
          "Students, engineers, and interview candidates often rely on scattered, inconsistent resources for algorithms and data structures, making it hard to find clear, correct, and well-documented reference implementations. Many existing materials either prioritize theory without usable code, or code without sufficient explanation, which slows learning and reuse.",
        approach:
          "Developed and maintained a Python repository implementing fundamental and advanced algorithms and data structures for general-purpose use, academic study, and technical interview preparation. Covered a broad spectrum of topics—from classic structures (heaps, trees, graphs) to advanced techniques (dynamic programming, greedy strategies, graph traversal, and optimization)—with an emphasis on clarity, efficiency, and well-documented implementations.",
        outcome:
          "Created a cohesive, high-quality reference library that serves as both a practical toolkit and a learning resource, enabling faster study, clearer understanding of core techniques, and more reliable reuse in projects and interview preparation. The repository reduces friction for learners and practitioners by providing consistent, readable, and correct implementations in one place.",
        keyNumbers: [
          { label: "Test Coverage", value: "100%" }
        ],
      },
    ] as ProjectCaseStudy[],
  },
  publications: {
    id: "publications",
    kicker: "Press",
    heading: "Papers and Blogs",
    intro: "Selected authored works.",
    items: [
      {
        label: "Xkvisor",
        href: "https://drive.google.com/file/d/1wbHULud7eTS6xfHbK9wvkJQ7AV0wjsFW/view?usp=sharing",
        description:
          "Designed and implemented xkvisor, a virtualization extension to a monolithic, POSIX-like teaching OS (xk), defining a user-mode hypervisor interface that supports customizable, lightweight guest operating systems. Developed abstractions for safe isolation, resource management, and user-space execution of guest kernels without modifying the host kernel.",
      },

      {
        label: "Sliding Window Demystified",
        href: "https://medium.com/@yue_bryan123/sliding-window-demystified-templates-to-crack-longest-shortest-and-fixed-size-windows-61ce4172abc4",
        description: "Medium Post Explaining Sliding Window Technique.",
      },
      {
        label: "A Framework for Solving Dynamic Programming Problems",
        href: "https://medium.com/@yue_bryan123/a-framework-for-solving-dynamic-programming-problems-f022bcb10e82",
        description: "Medium Post Explaining Dynamic Programming Problem-Solving Framework.",
      },
      {
        label: "Molecular Diagnostic Evaluation of Post-surgical Endophthalmitis",
        href: "https://iovs.arvojournals.org/article.aspx?articleid=2641371",
        description:
          "Conducted genomic characterization of viral pathogens implicated in post-surgical endophthalmitis using whole genome sequencing (WGS) and PCR-based validation, enabling precise molecular profiling and strain-level identification.",
      },
    ],
  },
  education: {
    id: "education",
    kicker: "Credentials",
    heading: "Education and Honors",
    educationItems: [
      "University of Washington - Computer Science and Biochemistry (2014-2018)",
    ],
    honors: ["Phi Beta Kappa Honor Society", "Magna Cum Laude"],
  },
  contact: {
    id: "contact",
    kicker: "Back Cover",
    heading: "Let's Build the Next Game-Changer",
    note: "Ideas, questions, or ambitious problems—let’s talk...",
    imageId: "contact_cover",
    primaryCta: "Start a conversation",
  },
  photoCreditsHeading: "Photo Credits",
  images: {
    background_editorial: {
      id: "phVaDpepOHE",
      url: "https://images.unsplash.com/photo-1534094830444-3a1e21f7e3e7?auto=format&fit=crop&w=2000&q=80",
      alt: "White painted wall with subtle texture and shadows.",
      caption: "Soft architectural texture for the page field.",
      photographer: "Benjamin Dos Santos",
      photographerUrl: "https://unsplash.com/@dosbenjamin",
      photoUrl: "https://unsplash.com/photos/phVaDpepOHE",
    },
    hero_primary: {
      id: "R-wQExeiGrc",
      url: "https://images.unsplash.com/photo-1520529890308-f503006340b4?auto=format&fit=crop&w=1800&q=80",
      alt: "White concrete architectural stairs with strong geometric lines.",
      caption: "A focus on structure, progression, and systems that endure.",
      photographer: "Ruben Garcia",
      photographerUrl: "https://unsplash.com/@rubengargar",
      photoUrl: "https://unsplash.com/photos/R-wQExeiGrc",
    },
    hero_secondary: {
      id: "dH6IjhWHNQQ",
      url: "https://images.unsplash.com/photo-1548248823-ce16a73b6d49?auto=format&fit=crop&w=1200&q=80",
      alt: "Curved building facade against clear blue sky.",
      caption: "Subtle curvature against a clean field of sky.",
      photographer: "Tim Stief",
      photographerUrl: "https://unsplash.com/@timstief",
      photoUrl: "https://unsplash.com/photos/dH6IjhWHNQQ",
    },
    about_immersive: {
      id: "gyY5ecUpPes",
      url: "https://images.unsplash.com/photo-1533421455827-883c3a23c031?auto=format&fit=crop&w=1800&q=80",
      alt: "Close-up of clear water surface.",
      caption: "From ambiguity to clarity.",
      photographer: "Joyce Hankins",
      photographerUrl: "https://unsplash.com/@moonshadowpress",
      photoUrl: "https://unsplash.com/photos/gyY5ecUpPes",
    },
    spread_left: {
      id: "VTaATSuMSP8",
      url: "https://images.unsplash.com/photo-1760734838570-9b9da0e7a6b5?auto=format&fit=crop&w=1400&q=80",
      alt: "Futuristic night cityscape with dense highway light trails and illuminated towers.",
      caption: "Under stress, a system shows its true colors.",
      photographer: "Jonathan Ikemura",
      photographerUrl: "https://unsplash.com/@ikemura",
      photoUrl: "https://unsplash.com/photos/VTaATSuMSP8",
    },
    spread_right: {
      id: "3SkCgnU2d6U",
      url: "https://images.unsplash.com/photo-1636755393526-a2249074de99?auto=format&fit=crop&w=1400&q=80",
      alt: "Aerial night city grid with dense lights and intersecting roads.",
      caption: "At scale, every decision is multiplied.",
      photographer: "Chris Mok",
      photographerUrl: "https://unsplash.com/@mokc",
      photoUrl: "https://unsplash.com/photos/3SkCgnU2d6U",
    },
    experience_amazon: {
      id: "VhQH97vAx-k",
      url: "https://images.unsplash.com/photo-1562602400-a67800aed90c?auto=format&fit=crop&w=1200&q=80",
      alt: "Abstract white signal traces over a dark background.",
      caption: "",
      photographer: "Denis Sebastian Tamas",
      photographerUrl: "https://unsplash.com/@levi_midnight",
      photoUrl: "https://unsplash.com/photos/VhQH97vAx-k",
    },
    experience_aws: {
      id: "FYiJ2--1KAY",
      url: "https://images.unsplash.com/photo-1561139353-9a3a4e248525?auto=format&fit=crop&w=1200&q=80",
      alt: "Close-up of industrial metallic structure with repeating forms.",
      caption: "",
      photographer: "Massimo Virgilio",
      photographerUrl: "https://unsplash.com/@massimovirgilio",
      photoUrl: "https://unsplash.com/photos/FYiJ2--1KAY",
    },
    experience_microsoft: {
      id: "LHyKMYvi_jQ",
      url: "https://images.unsplash.com/photo-1489272889853-8093472c6f42?auto=format&fit=crop&w=1200&q=80",
      alt: "Minimal white columns casting architectural shadows.",
      caption: "",
      photographer: "Kirill",
      photographerUrl: "https://unsplash.com/@kirillz",
      photoUrl: "https://unsplash.com/photos/LHyKMYvi_jQ",
    },
    experience_bloomberg: {
      id: "zJ8RRPQRiBE",
      url: "https://images.unsplash.com/photo-1626767982136-71cefca915b1?auto=format&fit=crop&w=1200&q=80",
      alt: "Black and white geometric checkerboard pattern.",
      caption: "",
      photographer: "Parsoa Khorsand",
      photographerUrl: "https://unsplash.com/@parsoakhorsand",
      photoUrl: "https://unsplash.com/photos/zJ8RRPQRiBE",
    },
    experience_kernel: {
      id: "9vf1uj6i6Ww",
      url: "https://images.unsplash.com/photo-1546497974-b213c9efb599?auto=format&fit=crop&w=1200&q=80",
      alt: "Colorful light streaks on a dark background.",
      caption: "",
      photographer: "Casey Horner",
      photographerUrl: "https://unsplash.com/@mischievous_penguins",
      photoUrl: "https://unsplash.com/photos/9vf1uj6i6Ww",
    },
    project_ddos: {
      id: "FydyDG861Bg",
      url: "https://images.unsplash.com/photo-1625118751884-f2b6dc903b60?auto=format&fit=crop&w=1400&q=80",
      alt: "Brown and white modern building forms with strong edges.",
      caption: "Hard edges for resilient defense systems.",
      photographer: "Kai Cheng",
      photographerUrl: "https://unsplash.com/@akaicheng",
      photoUrl: "https://unsplash.com/photos/FydyDG861Bg",
    },
    project_azure: {
      id: "C_NJKfnTR5A",
      url: "https://images.unsplash.com/photo-1550859492-d5da9d8e45f3?auto=format&fit=crop&w=1400&q=80",
      alt: "Blurred rainbow gradient background with soft transitions.",
      caption: "Protocol transitions, reframed with clarity.",
      photographer: "Sean Sinclair",
      photographerUrl: "https://unsplash.com/@seanwsinclair",
      photoUrl: "https://unsplash.com/photos/C_NJKfnTR5A",
    },
    project_bloomberg: {
      id: "pEGIfOa9AKE",
      url: "https://images.unsplash.com/photo-1616917785177-4637204b28b3?auto=format&fit=crop&w=1400&q=80",
      alt: "Minimal seascape with horizon under pale sky.",
      caption: "Petabyte-scale migration, calm at the surface.",
      photographer: "Ricardo Resende",
      photographerUrl: "https://unsplash.com/@rresenden",
      photoUrl: "https://unsplash.com/photos/pEGIfOa9AKE",
    },
    project_relevance: {
      id: "VhQH97vAx-k",
      url: "https://images.unsplash.com/photo-1562602400-a67800aed90c?auto=format&fit=crop&w=1400&q=80",
      alt: "White light traces over black background.",
      caption: "Ranking signals sharpened into production decisions.",
      photographer: "Denis Sebastian Tamas",
      photographerUrl: "https://unsplash.com/@levi_midnight",
      photoUrl: "https://unsplash.com/photos/VhQH97vAx-k",
    },
    contact_cover: {
      id: "c6McAdxttYs",
      url: "https://images.unsplash.com/photo-1575918748665-fbade67a07ed?auto=format&fit=crop&w=1800&q=80",
      alt: "Foggy field with distant trees in soft monochrome tones.",
      caption: "A quiet back cover to close the feature.",
      photographer: "Miriam Espacio",
      photographerUrl: "https://unsplash.com/@miriamespacio",
      photoUrl: "https://unsplash.com/photos/c6McAdxttYs",
    },
  } as Record<string, PhotoAsset>,
} as const;
