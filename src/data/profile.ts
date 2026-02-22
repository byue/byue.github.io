const profileImage = `${import.meta.env.BASE_URL}Profile.webp`;

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
    title: "Software Engineer",
    location: "Greater Seattle Area",
    email: "yue_bryan123@hotmail.com",
    linkedin: "https://www.linkedin.com/in/bryanyue322",
    github: "https://github.com/byue",
    summary:
      "Software Engineer with 7 years of experience developing production-grade distributed systems and cloud-native backend platforms at Amazon, Microsoft, and Bloomberg. Specializes in system design and performance optimization across high-throughput APIs, event-driven workers, and cloud-native microservices on AWS and Azure. Drives cross-functional roadmap planning, mentors engineers through complex technical trade-off discussions, and delivers reliable, observable production systems at scale.",
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
    title: "Bryan Yue | Software Engineer | Amazon",
    issue: "",
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
    metadata: ["Software Engineering", "Machine Learning", "AI", "Backend Development", "Web Development", "Concurrency", "Distributed Systems", "System Design", "Cloud"],
    primaryCtaLabel: "Download Resume",
    imagePrimaryId: "hero_primary",
    imageSecondaryId: "hero_secondary",
  },
  about: {
    id: "about",
    kicker: "About",
    heading: "Life Outside the Laptop",
    paragraphs: [
      "My ideal weekend starts with a hike I confidently call 'easy' right before the trail humbles me. Early-morning hikes are my reset button: fewer notifications, more fresh air, and just enough uphill to earn breakfast.",
      "I split the rest of my free time between chess and badminton. Chess is where I build a very smart plan and then blunder my queen, while badminton is pure cardio, chaos, and loud rematches with friends.",
      "My favorite time is still with family and close friends. Our family dogs run the house like tiny managers and enforce strict rules about snack quality and couch ownership.",
    ],
    pullQuote:
      "I make a genius chess plan, then blunder my queen five moves later.",
    impactBlocks: [
      {
        metric: "Hiking",
        title: "Trail Time",
        note: "Sunrise trails, fresh air, and a few hours where no one can ask for a quick sync.",
      },
      {
        metric: "Chess",
        title: "Thinking Game",
        note: "Openings, puzzles, and the lifelong mission of not blundering in winning positions.",
      },
      {
        metric: "Badminton",
        title: "Court Time",
        note: "Fast rallies, friendly trash talk, and just enough competition to want a rematch.",
      },
    ],
    imageId: "about_immersive",
  },
  experience: {
    id: "experience",
    kicker: "Timeline",
    heading: "Work Experience",
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
          "Optimized sponsored product ads search relevance by leveraging machine learning and inference performance optimization techniques.",
        highlights: [
          "Designed an ads search query personalization feature using ML-derived brand preference signals, increasing CTR from 3% to 8.3% and CVR from 28.9% to 56.6%.",
          "Optimized real-time ads relevance model inference to p99 30ms via quantization, model selection, and compilation techniques, enabling low-latency ranking at production scale.",
        ],
        techUsed: [
          "AWS",
          "AWS Sagemaker",
          "AWS Bedrock",
          "LLM",
          "Spring Framework",
          "Memcached",
          "Solr",
          "Java",
          "Python",
          "AWS CloudWatch",
          "AWS EC2",
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
        role: "Software Development Engineer",
        dateRange: "November 2021-January 2026",
        location: "Seattle, WA",
        summary:
          "Automated state of the art L34 DDoS detection and mitigation techniques for AWS network infrastructure.",
        highlights: [
          " Architected AWS Shield annual backend roadmap and led peer scope planning with data-driven prioritization, mentoring teammates through technical design and code review standards for high-impact DDoS mitigation initiatives.",
          "Engineered near real-time mitigation automation in Java, Ruby, and Clojure for AWS EC2 network defenses using distributed event-driven pipelines, improving DDoS mitigation efficacy from 10% to 80% across global production traffic at scale.",
          "Designed and launched a centralized cross-team service for known-offender IP list management and deployment, reducing on-call MTTR by 30 minutes, leading incident response coordination, and driving blameless postmortem actions to harden mitigation workflows across orgs."
        ],
        techUsed: [
          "AWS",
          "AWS ECS",
          "Container",
          "AWS Lambda",
          "AWS DynamoDB",
          "AWS S3",
          "AWS Elasticache",
          "React",
          "AWS Step Functions",
          "AWS OpenSearch",
          "AWS CloudWatch",
          "Java",
          "AWS SQS",
          "AWS Kinesis",
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
        company: "Microsoft | Azure Stack Compute",
        role: "Software Engineer",
        dateRange: "October 2019-November 2021",
        location: "Redmond, WA",
        summary:
          "Optimized on-premises cloud infrastructure in resource-constrained environments for JEDI program.",
        highlights: [
          "Designed Azure Stack bulk VM goalstate API in C# and caching strategy that reduced dataplane backpressure by 50x and cut VM provisioning p99 latency by 5 seconds, improving availability for high-concurrency VM provisioning scenarios by 11%.",
          "Migrated VM agent protocol to reduce infrastructure traffic by 8x while maintaining deployment safety and backward compatibility across heterogeneous VM environments.",
          "Ported Instance Metadata API capabilities from Azure to Azure Stack in C++, enabling container orchestration and VM provisioning workflows in resource-constrained on-premises environments."
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
          "Azure Functions",
          "Azure Cosmos DB",
          "Azure Key Vault",
          "Azure Virtual Machines"
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
        location: "New York City, NY",
        summary:
          "Supported a time-series database serving billions of queries per day for real-time market data feeds.",
        highlights: [
          "Led migration of petabytes of historical market data into SamayDB, a high-throughput time-series database serving billions of daily queries, executing within a strict 6-hour maintenance window while meeting throughput and availability SLAs.",
          "Designed and prototyped a stock-insights ranking API integrating data science models, enabling higher-signal analytics for downstream consumers and accelerating internal tooling workflows."
        ],
        techUsed: [
          "C++",
          "C",
          "Concurrent Programming",
          "Database Migration",
          "Transactions",
          "Atomics",
          "Locks",
          "Synchronization Primitives",
          "Python",
          "GDB",
          "Valgrind"
        ],
        marginNote:
          "Throughput at this scale required careful balancing of reliability and sustained transfer performance.",
        imageId: "experience_bloomberg",
      },
      {
        id: "kernel-2018",
        kicker: "Chapter 01",
        company: "University of Washington | Kernel Labs",
        role: "Machine Learning Engineer Intern",
        dateRange: "March 2018-June 2018",
        location: "Seattle, WA",
        summary:
          "Multi-source audio speech separation for startup incubator.",
        highlights: [
          "Implemented a BLSTM speech separation model with L2 regularization and dropout, achieving 82% test set accuracy on multi-source audio decomposition.",
          "Built an audiobook web scraper to construct labeled train, validation, and test datasets, and visualized feature distributions using pandas and MFCC plots."
        ],
        techUsed: [
          "PyTorch",
          "Python",
          "AWS EC2",
          "BLSTM",
          "Machine Learning",
          "Pandas",
          "Matplotlib",
          "Jupyter Notebooks",
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
        caption: "Rapid idea-to-cinematic prototyping tool.",
        tags: ["Python", "Inference Optimization", "LLM Self-Hosting", "FastAPI", "Pytorch", "React", "Video Processing"],
        imageId: "project_ddos",
        repoUrl: "https://github.com/byue/Reelify",
        problem:
          "It’s too slow and expensive to turn creative or product ideas into high-quality, cinematic visuals that people can react to. Using commercial systems like Sora for video generation is prohibitively expensive for rapid iteration.",
        approach:
          "Built a self-hosted text-to-video API powered by a multimodal LLM on VRAM-constrained Pascal GPUs, using a quantized Qwen model for structured scene planning and an optimized Stable Diffusion pipeline for frame synthesis. Implemented latent reuse, keyframe interpolation, attention slicing, and quantization to operate within 8–12GB VRAM constraints and reduce image render latency by ~40%. Designed a shot-based generation architecture that decomposes prompts into director-style plans (camera, lighting, motion), enabling rapid idea-to-cinematic preview generation.",
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
        year: "2026",
        label: "Before the 3 AM Page: What Every Software Engineer Should Know About Latency and Load",
        href: "https://medium.com/@yue_bryan123/before-the-3-am-page-what-every-software-engineer-should-know-about-latency-throughput-and-load-af7f7ae08c8a",
        description: "Medium post on load testing, latency and throughput in production systems.",
      },
      {
        year: "2026",
        label: "A Framework for Solving Dynamic Programming Problems",
        href: "https://medium.com/@yue_bryan123/a-framework-for-solving-dynamic-programming-problems-f022bcb10e82",
        description: "Medium Post Explaining Dynamic Programming Problem-Solving Framework.",
      },
      {
        year: "2025",
        label: "Sliding Window Demystified",
        href: "https://medium.com/@yue_bryan123/sliding-window-demystified-templates-to-crack-longest-shortest-and-fixed-size-windows-61ce4172abc4",
        description: "Medium Post Explaining Sliding Window Technique.",
      },
      {
        year: "2018",
        label: "Xkvisor",
        href: "https://drive.google.com/file/d/1wbHULud7eTS6xfHbK9wvkJQ7AV0wjsFW/view?usp=sharing",
        description:
          "Designed and implemented xkvisor, a virtualization extension to a monolithic, POSIX-like teaching OS (xk), defining a user-mode hypervisor interface that supports customizable, lightweight guest operating systems. Developed abstractions for safe isolation, resource management, and user-space execution of guest kernels without modifying the host kernel.",
      },
    ],
  },
  education: {
    id: "education",
    kicker: "Credentials",
    heading: "Education and Honors",
    educationItems: [
      "University of Washington | Bachelor of Science | Computer Science and Biochemistry | 2014 - 2018 | GPA: 3.89",
    ],
    honors: ["Phi Beta Kappa Honor Society", "Magna Cum Laude (Top 3.5%)"],
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
      url: "https://images.unsplash.com/photo-1534094830444-3a1e21f7e3e7?auto=format&fit=crop&w=2000&q=80&sat=-100",
      alt: "White painted wall with subtle texture and shadows.",
      caption: "Soft architectural texture for the page field.",
      photographer: "Benjamin Dos Santos",
      photographerUrl: "https://unsplash.com/@dosbenjamin",
      photoUrl: "https://unsplash.com/photos/phVaDpepOHE",
    },
    hero_primary: {
      id: "profile_image",
      url: profileImage,
      alt: "Portrait of Bryan Yue.",
      caption: "",
      photographer: "Bryan Yue",
      photographerUrl: "",
      photoUrl: "",
    },
    hero_secondary: {
      id: "dH6IjhWHNQQ",
      url: "https://images.unsplash.com/photo-1548248823-ce16a73b6d49?auto=format&fit=crop&w=1200&q=80&sat=-100",
      alt: "Curved building facade against clear blue sky.",
      caption: "Subtle curvature against a clean field of sky.",
      photographer: "Tim Stief",
      photographerUrl: "https://unsplash.com/@timstief",
      photoUrl: "https://unsplash.com/photos/dH6IjhWHNQQ",
    },
    about_immersive: {
      id: "gyY5ecUpPes",
      url: "https://images.unsplash.com/photo-1533421455827-883c3a23c031?auto=format&fit=crop&w=1800&q=80&sat=-100",
      alt: "Close-up of clear water surface.",
      caption: "From ambiguity to clarity.",
      photographer: "Joyce Hankins",
      photographerUrl: "https://unsplash.com/@moonshadowpress",
      photoUrl: "https://unsplash.com/photos/gyY5ecUpPes",
    },
    spread_left: {
      id: "VTaATSuMSP8",
      url: "https://images.unsplash.com/photo-1760734838570-9b9da0e7a6b5?auto=format&fit=crop&w=1400&q=80&sat=-100",
      alt: "Futuristic night cityscape with dense highway light trails and illuminated towers.",
      caption: "Under stress, a system shows its true colors.",
      photographer: "Jonathan Ikemura",
      photographerUrl: "https://unsplash.com/@ikemura",
      photoUrl: "https://unsplash.com/photos/VTaATSuMSP8",
    },
    spread_right: {
      id: "3SkCgnU2d6U",
      url: "https://images.unsplash.com/photo-1636755393526-a2249074de99?auto=format&fit=crop&w=1400&q=80&sat=-100",
      alt: "Aerial night city grid with dense lights and intersecting roads.",
      caption: "At scale, every decision is multiplied.",
      photographer: "Chris Mok",
      photographerUrl: "https://unsplash.com/@mokc",
      photoUrl: "https://unsplash.com/photos/3SkCgnU2d6U",
    },
    experience_amazon: {
      id: "VhQH97vAx-k",
      url: "https://images.unsplash.com/photo-1562602400-a67800aed90c?auto=format&fit=crop&w=1200&q=80&sat=-100",
      alt: "Abstract white signal traces over a dark background.",
      caption: "",
      photographer: "Denis Sebastian Tamas",
      photographerUrl: "https://unsplash.com/@levi_midnight",
      photoUrl: "https://unsplash.com/photos/VhQH97vAx-k",
    },
    experience_aws: {
      id: "FYiJ2--1KAY",
      url: "https://images.unsplash.com/photo-1561139353-9a3a4e248525?auto=format&fit=crop&w=1200&q=80&sat=-100",
      alt: "Close-up of industrial metallic structure with repeating forms.",
      caption: "",
      photographer: "Massimo Virgilio",
      photographerUrl: "https://unsplash.com/@massimovirgilio",
      photoUrl: "https://unsplash.com/photos/FYiJ2--1KAY",
    },
    experience_microsoft: {
      id: "LHyKMYvi_jQ",
      url: "https://images.unsplash.com/photo-1489272889853-8093472c6f42?auto=format&fit=crop&w=1200&q=80&sat=-100",
      alt: "Minimal white columns casting architectural shadows.",
      caption: "",
      photographer: "Kirill",
      photographerUrl: "https://unsplash.com/@kirillz",
      photoUrl: "https://unsplash.com/photos/LHyKMYvi_jQ",
    },
    experience_bloomberg: {
      id: "zJ8RRPQRiBE",
      url: "https://images.unsplash.com/photo-1626767982136-71cefca915b1?auto=format&fit=crop&w=1200&q=80&sat=-100",
      alt: "Black and white geometric checkerboard pattern.",
      caption: "",
      photographer: "Parsoa Khorsand",
      photographerUrl: "https://unsplash.com/@parsoakhorsand",
      photoUrl: "https://unsplash.com/photos/zJ8RRPQRiBE",
    },
    experience_kernel: {
      id: "9vf1uj6i6Ww",
      url: "https://images.unsplash.com/photo-1546497974-b213c9efb599?auto=format&fit=crop&w=1200&q=80&sat=-100",
      alt: "Colorful light streaks on a dark background.",
      caption: "",
      photographer: "Casey Horner",
      photographerUrl: "https://unsplash.com/@mischievous_penguins",
      photoUrl: "https://unsplash.com/photos/9vf1uj6i6Ww",
    },
    project_ddos: {
      id: "evlkOfkQ5rE",
      url: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1400&q=80&sat=-100&bri=18",
      alt: "Rows of red cinema seats in a dark theater.",
      caption: "Cinema atmosphere for rapid visual storytelling.",
      photographer: "Felix Mooneeram",
      photographerUrl: "https://unsplash.com/@felixmooneeram",
      photoUrl: "https://unsplash.com/photos/red-cinema-chair-evlkOfkQ5rE",
    },
    project_azure: {
      id: "5aiRb5f464A",
      url: "https://images.unsplash.com/photo-1542626991-cbc4e32524cc?auto=format&fit=crop&w=1400&q=80&sat=-100&bri=-22",
      alt: "Change planning board with sticky notes used for workflow management.",
      caption: "Structured change planning from insights to action.",
      photographer: "Jo Szczepanska",
      photographerUrl: "https://unsplash.com/@joszczepanska",
      photoUrl: "https://unsplash.com/photos/sticky-notes-on-corkboard-5aiRb5f464A",
    },
    project_bloomberg: {
      id: "ws-PT2WYa9k",
      url: "https://images.unsplash.com/photo-1744687570665-a07f99b9fea4?auto=format&fit=crop&w=1400&q=80&sat=-100",
      alt: "Wall Street street sign with American flags in the background.",
      caption: "Wall Street signals, surfaced in real time.",
      photographer: "Jon Tyson",
      photographerUrl: "https://unsplash.com/@jontyson",
      photoUrl: "https://unsplash.com/photos/ws-PT2WYa9k",
    },
    project_relevance: {
      id: "yxJL8gmcSAY",
      url: "https://images.unsplash.com/photo-1701523600650-007b393ed2fe?auto=format&fit=crop&w=1400&q=80&sat=-100",
      alt: "Abstract black-and-white field of three-dimensional numbers.",
      caption: "Algorithmic structure visualized as layered numeric patterns.",
      photographer: "A Chosen Soul",
      photographerUrl: "https://unsplash.com/@a_chosensoul",
      photoUrl: "https://unsplash.com/photos/a-black-and-white-photo-of-a-lot-of-numbers-yxJL8gmcSAY",
    },
    contact_cover: {
      id: "fzOITuS1DIQ",
      url: "https://images.unsplash.com/photo-1523875194681-bedd468c58bf?auto=format&fit=crop&w=1800&q=80&sat=-100",
      alt: "Close-up of a player making a decisive chess move.",
      caption: "Calculated pressure and momentum at the critical move.",
      photographer: "JESHOOTS.COM",
      photographerUrl: "https://unsplash.com/@jeshoots",
      photoUrl: "https://unsplash.com/photos/depth-of-field-photography-of-man-playing-chess-fzOITuS1DIQ",
    },
  } as Record<string, PhotoAsset>,
} as const;
