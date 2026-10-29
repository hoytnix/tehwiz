import { Project } from '@/types';

export const MOCK_PROJECTS: Project[] = [
    {
        id: 'yuli',
        title: 'Yuli',
        tagline: 'Autonomous Cognitive Persona Engine & Mind-Reading MBTI Diagnostic',
        description: 'Born from a childhood obsession that started at age 5 when founder Michael asked how Mario\'s Goombas move, Yuli represents the core mission of TehWiz: teaching machines to feel alive. A sovereign, 100% on-device cognitive persona engine running on an 𝔽₂⁴ Boolean Hypercube state space, Yuli was fine-tuned on high-friction multi-turn discourse from Reddit to detect human Myers-Briggs (MBTI) cognitive personality types in real time. Because understanding personality patterns is the key to characters—and machines—that truly feel alive, Yuli delivers fluid character dialogue at 70–110 TPS on WebGPU with sub-200ms time-to-first-token on modern mobile devices, serving as a foundational stepping stone toward our upcoming AI NPC SDK for games.',
        category: 'AI & Cognitive Architecture',
        tags: ['AI', 'MBTI', 'Cognitive Architecture', 'WebGPU', 'Edge AI', 'Reddit', 'Game AI'],
        status: 'Beta',
        url: 'https://yuli.tehwiz.com',
        coverImage: 'https://yuli.tehwiz.com/icon-512.png',
        favicon: 'https://yuli.tehwiz.com/icon.svg',
        hook: 'Teaching machines to feel alive: the edge-native cognitive companion that reads personality patterns in real time.',
        agitation: 'Tired of cloud LLMs charging you per token just to deliver watered-down, sycophantic corporate fluff that buffers your UI loop and breaks character immersion?',
        enemyFriction: 'Modern AI conversational agents are paralyzed by corporate sycophancy, repetitive pleasantries ("I hope this helps!"), high cloud latency (1.5 to 3.5 seconds), and compounding monthly API token bills. In gaming and mobile apps, remote LLMs frequently cause frame stutter, fail offline, and leak internal character reasoning directly into user dialogue bubbles—shattering the illusion of a living character.',
        uniqueMechanism: 'A sovereign, 100% on-device cognitive persona engine running on an 𝔽₂⁴ Boolean Hypercube state space. Fine-tuned on high-friction multi-turn discourse to detect human Myers-Briggs (MBTI) cognitive personality types in real time, Yuli switches between four operational minds (Ego 0EE, Shadow 1E6, Subconscious 2E7, Superego 3E1) using bitwise XOR operations. An inline Pushdown Automaton (CCDStreamParser) enforces a strict Cognitive Deliberation Firewall, stripping raw thought tokens into a private background stream while delivering natural character dialogue at 70–110 TPS on WebGPU with sub-200ms time-to-first-token.',
        transformation: 'Developers and game studios embed sovereign, personality-aware NPCs and cognitive companions directly into browsers, WebGL worlds, and game engines (with Unreal & Unity SDK plugins on the roadmap) that run entirely offline without recurring cloud bills—bringing interactive characters to life.',
        links: {
            liveUrl: 'https://yuli.tehwiz.com',
            githubUrls: [
                { label: 'Yuli-E2B-Reddit', url: 'https://github.com/hoytnix/Yuli-E2B-Reddit' },
                { label: 'Yuli-Web', url: 'https://github.com/hoytnix/Yuli-Web' }
            ],
            huggingFaceUrl: 'https://huggingface.co/economyofdreams/',
            licenseUrl: 'https://github.com/hoytnix/Yuli-Web/blob/main/LICENSE'
        },
        license: {
            name: 'BSL 1.1 (Business Source License 1.1)',
            url: 'https://github.com/hoytnix/Yuli-Web/blob/main/LICENSE',
            summary: 'You can use it for free until you make over $30,000 with it and then it\'s $1,500 a year.'
        },
        pricing: [
            {
                plan: 'Source Code Only',
                price: 'FREE',
                description: 'FREE up to $30,000 USD gross revenue; available on GitHub & Hugging Face.',
                badge: 'Open Source'
            },
            {
                plan: 'Commercial License',
                price: '$1,500',
                period: '/ year',
                description: 'For commercial titles exceeding $30,000 USD gross revenue.',
                highlighted: true,
                badge: 'Production'
            },
            {
                plan: 'Enterprise SLA Support',
                price: 'By Request Only',
                description: 'Enterprise SLA support and custom fine-tuned weights by quote.',
                badge: 'Custom Quotes'
            }
        ],
        highlights: [
            '100% on-device cognitive persona engine running on an 𝔽₂⁴ Boolean Hypercube state space.',
            'Switches between four operational minds (Ego 0EE, Shadow 1E6, Subconscious 2E7, Superego 3E1) via bitwise XOR.',
            'Cognitive Deliberation Firewall via inline Pushdown Automaton (CCDStreamParser) stripping internal thoughts.',
            '70–110 TPS inference on WebGPU with sub-200ms TTFT on iPhone SE 3+ or Android with ≥4GB RAM.'
        ],
        specs: [
            { label: 'State Space', value: '𝔽₂⁴ Boolean Hypercube (16 States)' },
            { label: 'Inference Speed', value: '70–110 TPS on WebGPU (sub-200ms TTFT)' },
            { label: 'Hardware Minimum', value: 'iPhone SE 3+ / Android ≥4GB RAM' },
            { label: 'Training Corpus', value: 'Multi-turn conversational Reddit chats' },
            { label: 'License Model', value: 'BSL 1.1 (Free under $30,000 revenue)' }
        ],
        architectureNotes: 'The cognitive deliberation firewall strictly separates metacognitive reflection from user dialogue, preventing reasoning bleed-through while preserving low-latency streaming.'
    },
    {
        id: 'purple-canary',
        title: 'Purple Canary',
        tagline: 'Objective Forensic Reagent Analysis & Harm-Reduction Scanner',
        description: 'A mobile computer-vision scanner running local colorimetry calibration and ambient lighting compensation. Analyzes colorimetric reagent reactions to detect over 200+ toxins and adulterants in illicit substances with mathematical certainty.',
        category: 'Harm Reduction & Computer Vision',
        tags: ['Computer Vision', 'Harm Reduction', 'HealthTech', 'WASM', 'Mobile Web'],
        status: 'Beta',
        url: 'https://purplecanarylab.com',
        hook: 'Objective forensic reagent analysis right in your mobile browser.',
        agitation: 'Dim lighting and subjective color charts shouldn\'t be the difference between safety and a fatal overdose.',
        enemyFriction: 'Street-level chemical adulterants (fentanyl, xylazine) are lethal, yet existing testing relies on interpreting subtle chemical reagent color shifts by eye under dim, variable festival or street lighting, leading to dangerous false negatives and fatal uncertainty.',
        uniqueMechanism: 'A mobile computer-vision scanner running local colorimetry calibration and ambient lighting compensation. Using custom edge proxies and a toxicological library, it analyzes test strips and colorimetric reactions to provide objective, mathematical adulterant identification directly from a phone camera.',
        transformation: 'Harm-reduction volunteers, festivalgoers, and public safety workers eliminate visual guesswork and gain immediate, objective, lab-grade validation in the field.',
        links: {
            liveUrl: 'https://purplecanarylab.com',
            githubUrl: 'https://github.com/hoytnix/purple-canary-beta'
        },
        license: {
            name: 'MIT License',
            summary: '100% Free and Open-Source Software (MIT License).'
        },
        pricing: [
            {
                plan: 'Source Code Only',
                price: 'FREE',
                description: 'Source Code Only For FREE via MIT License.',
                badge: 'MIT'
            },
            {
                plan: 'FREE With Ads',
                price: 'FREE',
                description: 'Complete testing access with non-intrusive sponsor ads.',
                highlighted: true,
                badge: 'With Ads'
            },
            {
                plan: 'No Ads Forever',
                price: '$1',
                period: 'Forever',
                description: '$1 For No Ads Forever.',
                badge: 'Lifetime'
            }
        ],
        highlights: [
            'Digital densiometer detecting over 200+ toxins and lethal adulterants (fentanyl, xylazine).',
            'Computer vision colorimetry calibration with ambient lighting compensation.',
            'Instant objective identification from a standard mobile phone camera.',
            'Open-source MIT licensed codebase available on GitHub.'
        ],
        specs: [
            { label: 'Testing Method', value: 'Computer Vision Colorimetric Reagent Analysis' },
            { label: 'Calibration', value: 'Ambient Lighting & White Balance Compensation' },
            { label: 'Toxin Database', value: '200+ Chemical Profiles & Adulterants' },
            { label: 'License', value: 'MIT License (100% Free & Open Source)' }
        ]
    },
    {
        id: 'aevloc',
        title: 'Aevloc',
        tagline: 'Online Reputation Management Firewall & Smart NFC Review Gateway',
        description: 'An Online Reputation Management Firewall that bifurcates customer sentiment in real time at the point of sale. Countertop NFC tap cards and QR funnels route 4-to-5-star ratings to public profiles while intercepting negative feedback privately before hitting Google.',
        category: 'MarTech & Reputation Management',
        tags: ['SaaS', 'Reputation Firewall', 'Local SEO', 'Review Gateway', 'NFC Hardware'],
        status: 'Live',
        url: 'https://aevloc.com',
        coverImage: 'https://aevloc.com/images/aevloc-cover.png',
        favicon: 'https://aevloc.com/favicon.svg',
        hook: 'Stop renting your reputation from $400/month software giants. Own your review firewall.',
        agitation: 'One unfair 1-star review undoes six months of positive word-of-mouth. Why are you sending your upset customers directly to Google?',
        enemyFriction: 'Small business owners are held hostage by $300 to $500 monthly software subscriptions from legacy players like Podium and Birdeye. Simultaneously, a single unvetted, emotionally reactive 1-star review on Google can crater a local business’s Map Pack ranking and burn thousands in monthly customer acquisition. The standard practice of blast-texting customers after they leave results in low response rates and public rants.',
        uniqueMechanism: 'An Online Reputation Management Firewall that bifurcates customer sentiment in real time at the point of sale. Patrons tap a countertop NFC card or scan a smart QR code. Ratings at or above the threshold (e.g., 4 or 5 stars) are routed instantly to public Google Reviews with a synchronous handoff, while sub-threshold ratings (1 to 3 stars) are quarantined in a private edge database and emailed directly to ownership for immediate private resolution before hitting the internet.',
        transformation: 'Local clinics, auto shops, and restaurants capture five-star public reviews while unhappy customers feel heard and handled privately, completely protecting the business\'s public rating. Agencies gain a turnkey white-label asset they can deploy across unlimited client sub-accounts.',
        links: {
            liveUrl: 'https://aevloc.com'
        },
        license: {
            name: 'Proprietary / Commercial SaaS',
            summary: 'Turnkey software subscriptions with hardware pass-through fulfillment.'
        },
        pricing: [
            {
                plan: 'SMBs',
                price: '$15 / month',
                period: 'or $97 / year',
                description: '$15 per month / $97 a year for SMBs.'
            },
            {
                plan: 'Agencies',
                price: '$97 / month',
                period: 'or $970 / year',
                description: '$97 per month / $970 a year for Agencies.',
                highlighted: true,
                badge: 'Recommended'
            },
            {
                plan: 'Done-For-You API Integration',
                price: '$1,500',
                period: 'one-time',
                description: '$1,500 Done-For-You API Integration.',
                badge: 'Turnkey'
            }
        ],
        highlights: [
            'Online Reputation Management Firewall intercepting negative ratings before publication.',
            'Point-of-sale countertop NFC tap cards and instant QR onboarding funnels.',
            'Synchronous handoff: 4-5 stars to Google Map Pack, 1-3 stars quarantined for private resolution.',
            'White-label multi-tenant agency dashboard with unlimited client sub-accounts.'
        ],
        specs: [
            { label: 'Architecture', value: 'Point-of-Sale Sentiment Bifurcation Gateway' },
            { label: 'Hardware', value: 'Countertop NFC Tap Cards & Smart QR Encoded Badges' },
            { label: 'Agency Mode', value: 'Multi-Tenant Sub-Account Architecture' }
        ]
    },
    {
        id: 'alembic-quest',
        title: 'Alembic Quest',
        tagline: 'Zero-Latency, Solar-Guided Canvassing Operating System & Spatial Territory Radar',
        description: 'An alchemical field operating system engineered for pure mobile velocity. Features SilentSync offline IndexedDB queue, SolarGlide™ astronomical math guiding reps to sunlit facades during evening golden hours, ReKnock™ proximity radar with BlindTouch™ tactile haptics, and 1-click curbside address scrubbing.',
        category: 'Field Operations & Spatial CRM',
        tags: ['CRM', 'Canvassing', 'GIS Radar', 'Skiptracing', 'Offline-First', 'SolarGlide'],
        status: 'MVP',
        url: 'https://alembic.quest',
        coverImage: 'https://alembic.quest/cover.png',
        favicon: 'https://alembic.quest/favicon.ico',
        hook: 'The zero-latency, solar-guided canvassing operating system built for the pavement.',
        agitation: 'Every second you wait for a spinner to load on a doorstep is a second the homeowner thinks about shutting the door in your face.',
        enemyFriction: 'Door-to-door sales canvassers in solar, roofing, and home services are forced to rely on bloated enterprise CRMs that lock up in rural dead zones, drain device batteries, and slow reps down with spinning progress wheels on the homeowner\'s doorstep. Canvassers waste hours knocking cold facades during bad lighting with zero visibility into property ownership.',
        uniqueMechanism: 'An alchemical field operating system engineered for pure mobile velocity. Features SilentSync (an offline IndexedDB queue that atomic-replays mutations into Turso LibSQL upon reconnect), SolarGlide™ (client-side astronomical math that guides reps to sunlit street facades during evening golden hours), and ReKnock™ proximity radar with BlindTouch™ tactile haptics. Integrated with 1-Click Free Address Intelligence to scrub ownership and property data curbside.',
        transformation: 'Reps log knocks and objections instantly without looking at their screens, maximize twilight conversation yields, and track territory progression through an alchemical RPG economy that turns street effort into tangible motivation.',
        links: {
            liveUrl: 'https://alembic.quest'
        },
        license: {
            name: 'Proprietary / SaaS',
            summary: 'Free solo-tier usage with scalable team seat pricing and usage-based skiptrace queries.'
        },
        pricing: [
            {
                plan: 'Sole-Proprietors',
                price: 'FREE',
                description: 'FREE for Sole-Proprietors (includes 1-click address scrubbing & unlimited knocks).',
                highlighted: true,
                badge: 'Solo Free'
            },
            {
                plan: 'Additional Seats',
                price: '$7',
                period: '/ Month Per Additional Seat',
                description: '$7 Per Month Per Additional Seat for teams.',
                badge: 'Teams'
            },
            {
                plan: 'Residential Skiptrace',
                price: '1¢',
                period: 'per Residential Skiptrace',
                description: '1 cent per Residential Skiptrace ($0.01 per residential lookup).',
                badge: 'Skiptrace'
            }
        ],
        highlights: [
            'SilentSync: Offline IndexedDB queue with atomic replay into Turso LibSQL upon reconnection.',
            'SolarGlide™: Client-side astronomical math directing reps to sunlit street facades during golden hours.',
            'ReKnock™ Proximity Radar with BlindTouch™ tactile haptics for eyes-free knock logging.',
            '1-Click Free Address Intelligence for curbside ownership and property scrubbing.'
        ],
        specs: [
            { label: 'Offline Sync', value: 'SilentSync IndexedDB → Turso LibSQL Replay' },
            { label: 'Guidance Engine', value: 'SolarGlide™ Astronomical Facade Calculus' },
            { label: 'Haptic Feedback', value: 'BlindTouch™ Eyes-Free Knock Confirmation' },
            { label: 'Solo Pricing', value: 'FREE for Sole Proprietors' }
        ]
    },
    {
        id: 'quarkmeme',
        title: 'Quarkmeme',
        tagline: 'Local-First Agentic Project OS: FLOSS Alternative to Polsia',
        description: 'A 100% Free/Libre and Open-Source Software (FLOSS) alternative to Polsia running entirely inside the user\'s browser. Leverages @sqlite.org/sqlite-wasm over OPFS with FTS5 BM25 search for $0.00/month in cloud database bills. Features a 7-universe crew-casting engine (Straw Hat hierarchy) and an interactive Grand Line radial orbital canvas.',
        category: 'Autonomous Multi-Agent Systems',
        tags: ['FLOSS', 'Local-First', 'WASM SQLite', 'OPFS', 'Multi-Agent', 'Zero-Cloud'],
        status: 'POC',
        url: 'https://quarkmeme.com',
        coverImage: 'https://www.quarkmeme.com/og-cover.jpg',
        favicon: 'https://www.quarkmeme.com/icon-512.png',
        hook: 'Fire your cloud database. The local-first, multi-agent operating system you own completely.',
        agitation: 'Why are you paying monthly database fees to a closed cloud vendor just to coordinate your own AI agent workflows?',
        enemyFriction: 'Proprietary multi-agent personal operating systems like Polsia lock your company hierarchies, specialized agent prompts, and operational memory banks inside centralized cloud servers with monthly recurring database fees and vendor lock-in.',
        uniqueMechanism: 'A 100% Free/Libre and Open-Source Software (FLOSS) alternative running entirely inside the user\'s browser. It leverages @sqlite.org/sqlite-wasm over the browser\'s Origin Private File System (OPFS) with SQLite FTS5 BM25 search, incurring $0.00/month in cloud database bills. Features a 7-universe crew-casting engine (Straw Hat hierarchy: 1 CEO orchestrator + 6 specialized division leads) and an interactive Grand Line radial orbital canvas.',
        transformation: 'Operators manage an entire autonomous AI team and company vault locally from any device—completely sovereign, private, offline-ready, and free of vendor gatekeeping.',
        links: {
            liveUrl: 'https://quarkmeme.com',
            githubUrl: 'https://raw.githubusercontent.com/hoytnix/qm-holla'
        },
        license: {
            name: 'MIT License',
            summary: '100% Free/Libre and Open-Source Software (MIT License).'
        },
        pricing: [
            {
                plan: 'Source Code Only',
                price: 'FREE',
                description: 'FREE open-source code; Bring Your Own Keys (BYOK).',
                highlighted: true,
                badge: 'FLOSS'
            },
            {
                plan: 'Cloud Sync',
                price: 'COMING SOON',
                period: '@ TBD PRICE',
                description: 'Encrypted cloud sync coming soon for multi-device sync.',
                badge: 'Roadmap'
            }
        ],
        highlights: [
            '100% Free/Libre and Open-Source Software (FLOSS) alternative to Polsia.',
            'Zero cloud database recurring bills with SQLite WASM and Origin Private File System (OPFS).',
            'Full-text search powered by SQLite FTS5 BM25 indexing inside your browser.',
            'Straw Hat 7-Universe Crew Casting: 1 CEO orchestrator + 6 specialized division leads.',
            'Interactive Grand Line radial orbital canvas for spatial mission control.'
        ],
        specs: [
            { label: 'License', value: 'MIT License (100% FLOSS)' },
            { label: 'Storage Engine', value: 'In-Browser SQLite WASM + OPFS ($0 Cloud Cost)' },
            { label: 'Search Index', value: 'SQLite FTS5 BM25 Client-Side Search' },
            { label: 'Hierarchy', value: 'Straw Hat 7-Universe Autonomous Crew Casting' },
            { label: 'Keys Model', value: 'Bring Your Own Keys (BYOK)' }
        ]
    },
    {
        id: 'rarestry',
        title: 'Rarestry',
        tagline: 'Deterministic WASM Computer Vision Pokemon Card Grading & Digital Vault',
        description: 'Deterministic in-browser WebAssembly computer vision that scans, grades, and values Pokémon cards at 1 card per second. Features a pre-indexed dataset spanning vintage Base Set through modern Scarlet & Violet, paired with an interactive virtual binder UI and high-speed auto-capture stand.',
        category: 'WASM Computer Vision & Collectibles',
        tags: ['WASM', 'Computer Vision', 'Card Grading', 'Pokémon', 'Digital Vault'],
        status: 'Live',
        url: 'https://rarestry.com',
        coverImage: 'https://rarestry.com/images/cover-8bit.jpg',
        favicon: 'https://rarestry.com/favicon.svg',
        hook: 'Grade and vault your entire card collection at one card per second.',
        agitation: 'Why wait months and pay $20+ a slab to third-party grading services just to catalog your raw cards?',
        enemyFriction: 'High-volume trading card collectors and store owners spend countless hours manually searching, grading, and cataloging thousands of individual cards, while third-party grading submissions cost tens of dollars per card and take months.',
        uniqueMechanism: 'Deterministic in-browser WebAssembly computer vision that scans and grades cards at high speed. Features a pre-indexed dataset spanning vintage Base Set through modern Scarlet & Violet expansions, coupled with an interactive virtual binder UI and an ergonomic hardware stand that enables 1-card-per-second auto-capture.',
        transformation: 'Collectors transform stacks of disorganized bulk into fully valued, organized, and visual digital binders in minutes rather than weeks.',
        links: {
            liveUrl: 'https://rarestry.com'
        },
        license: {
            name: 'Proprietary / Freestanding Web App',
            summary: 'Free personal binder management with physical hardware accessories available.'
        },
        pricing: [
            {
                plan: 'Digital Portfolio & Grading Vault',
                price: 'FREE',
                description: 'FREE for personal use; full digital portfolio tracker & card scanner.',
                highlighted: true,
                badge: 'Free Tier'
            },
            {
                plan: 'Angled High-Speed Stand',
                price: 'COMING SOON',
                period: '@ $15 each',
                description: 'Ergonomic hardware stand enabling 1-card-per-second auto-shutter inventory scanning.',
                badge: 'Hardware'
            }
        ],
        highlights: [
            'Deterministic WebAssembly computer vision for instantaneous card grading and surface centering.',
            'Pre-indexed expansion dataset from vintage Base Set to modern Scarlet & Violet.',
            'Virtual digital binder with real-time portfolio market valuations.',
            'Ergonomic hardware stand for rapid 1-card-per-second continuous capture.'
        ],
        specs: [
            { label: 'Capture Speed', value: '1 card per second with auto-shutter stand' },
            { label: 'Grading Engine', value: 'Deterministic WASM Edge Computer Vision' },
            { label: 'Expansion Coverage', value: 'Vintage Base Set through Scarlet & Violet' },
            { label: 'Personal Binder', value: '100% Free on rarestry.com' }
        ]
    },
    {
        id: 'caffeinemd',
        title: 'CaffeineMD',
        tagline: 'High-performance, local-first Markdown knowledge base & wiki',
        description: 'A sovereign personal knowledge management system modeled after Obsidian and Notion, powered by ProseMirror, Tiptap v2, IndexedDB, and the native File System Access API with bidirectional wiki-links and instant diff viewing.',
        category: 'Productivity',
        status: 'Live',
        url: 'https://www.caffeinemd.wiki',
        coverImage: 'https://www.caffeinemd.wiki/og-caffeinemd.png',
        favicon: 'https://www.caffeinemd.wiki/icon-512.png',
        githubUrl: 'https://github.com/hoytnix/CaffeineMD',
        tags: ['Next.js', 'TipTap', 'Markdown', 'IndexedDB', 'PWA', 'Local-First'],
        featured: true,
        stats: {
            architecture: 'Local-First PWA',
            editor: 'TipTap v2 / ProseMirror',
            storage: 'IndexedDB + File System Access API',
            lockIn: '0% (Pure Markdown)'
        },
        hook: 'Sovereign, local-first Markdown knowledge base & personal wiki with zero cloud dependency.',
        agitation: 'Tired of cloud note apps holding your private thoughts hostage behind monthly subscriptions and proprietary file silos?',
        enemyFriction: 'Proprietary note-taking and knowledge management tools store your thoughts in closed cloud silos, suffer from network latency, and risk catastrophic data lock-in. Meanwhile, typical Markdown tools lack real-time visual editing, bidirectional graph linking, and seamless native filesystem mounting.',
        uniqueMechanism: 'A sovereign, local-first architecture powered by TipTap v2 and ProseMirror running over IndexedDB persistence and the native File System Access API. Features bidirectional [[wiki-links]], instantaneous split-pane plaintext/prose editing, and cryptographic git-style diff inspection without server telemetry.',
        transformation: 'Own your thoughts with complete sovereignty: write at the speed of thought in a gorgeous WYSIWYG editor while keeping your Markdown files safely mounted directly to your local file system.',
        links: {
            liveUrl: 'https://www.caffeinemd.wiki',
            githubUrl: 'https://github.com/hoytnix/CaffeineMD'
        },
        license: {
            name: 'MIT License',
            url: 'https://github.com/hoytnix/CaffeineMD/blob/main/LICENSE',
            summary: '100% Free and Open-Source Software (MIT License).'
        },
        pricing: [
            {
                plan: 'Open Source / Web App',
                price: 'FREE',
                description: '100% free, sovereign local-first personal knowledge management PWA.',
                highlighted: true,
                badge: 'MIT Open Source'
            }
        ],
        highlights: [
            'Native File System Access API for mounting local disk directories directly into the browser.',
            'TipTap v2 and ProseMirror-driven rich-text editing with instant Markdown bidirectional conversion.',
            'Zero vendor lock-in with offline-first IndexedDB local storage and instant diff viewing.',
            'Bidirectional [[wiki-links]] for emergent knowledge graphs and inter-note cross-referencing.',
            'Installable Progressive Web App (PWA) running completely in-browser with zero telemetry.'
        ],
        specs: [
            { label: 'Architecture', value: 'Local-First Sovereign PWA' },
            { label: 'Editor Engine', value: 'TipTap v2 & ProseMirror Core' },
            { label: 'Storage Engine', value: 'IndexedDB + Native File System Access API' },
            { label: 'Linking Engine', value: 'Bidirectional [[Wiki-Links]] & Backlinks' },
            { label: 'License', value: 'MIT License (100% Free & Open Source)' }
        ],
        architectureNotes: 'Engineered as a local-first sovereign knowledge base: zero telemetry, zero server databases, and complete data ownership through IndexedDB and browser-native File System Access API directory mounting.'
    },
    {
        id: 'cherry-sundays',
        title: 'Cherry SunDays',
        tagline: 'Custom Window Replacement POS & Field Estimator',
        description: 'Custom Window Replacement POS. Modernizing Legacy Industries One Pane At A Time. Real-time window unit measurements, dynamic cost breakdowns, and customer contract generation.',
        category: 'Vertical SaaS & Field POS',
        tags: ['Vertical SaaS', 'Window Replacement', 'POS', 'Contractors'],
        status: 'MVP',
        url: 'https://cherrysundays.com',
        redirect: {
            to: 'https://tehwiz.com',
            note: 'cherrysundays.com now redirects to tehwiz.com — this is a redirect pointer, no external launch.'
        },
        links: {},
        license: {
            name: 'Proprietary / Commercial SaaS',
            summary: 'Turnkey vertical SaaS for window replacement contractors and field estimators.'
        },
        pricing: [
            {
                plan: 'Contractor Core',
                price: 'Custom',
                description: 'Estimating, POS invoicing, and digital contract signing.',
                badge: 'Commercial'
            }
        ]
    },
    {
        id: 'hibiscus-wireless',
        title: 'Hibiscus Wireless',
        tagline: 'Anonymous Global Cellular Data Paid in Crypto — Zero Roaming, Zero KYC',
        description: 'A decentralized, privacy-first travel eSIM marketplace paired with the Ghost Guard non-KYC burner framework. Purchase instant eSIM data profiles for hundreds of global destinations using cryptocurrency with zero passport scans, zero roaming charges, and instant QR delivery.',
        category: 'Telecom & DePIN / Privacy',
        tags: ['eSIM', '5G', 'Crypto', 'Ghost Guard', 'Privacy', 'Travel'],
        status: 'Alpha',
        url: 'https://hibiscuswireless.com',
        hook: 'Anonymous global cellular data paid entirely in crypto. Zero roaming bills, zero KYC.',
        agitation: 'Why surrender your passport scans and submit to invasive biometric KYC just to get mobile data when you travel abroad?',
        enemyFriction: 'International travelers face exorbitant cellular roaming charges, while privacy-conscious individuals are blocked by mandatory passport scans and KYC checks when purchasing standard SIMs.',
        uniqueMechanism: 'A decentralized, privacy-first travel eSIM marketplace paired with the Ghost Guard non-KYC burner framework. Customers purchase instant eSIM data profiles for hundreds of destinations globally using cryptocurrency, completely unlinked from personal identity.',
        transformation: 'Global travelers connect to local cellular networks immediately upon landing, maintaining total identity privacy and zero roaming bills.',
        links: {
            liveUrl: 'https://hibiscuswireless.com'
        },
        license: {
            name: 'Proprietary / Network Protocol',
            summary: 'Decentralized anonymous cellular data and crypto-settled connectivity.'
        },
        pricing: [
            {
                plan: 'Pay-As-You-Go eSIM',
                price: 'Crypto Settled',
                description: 'Instant anonymous eSIM data packages with QR delivery.',
                badge: 'Burner eSIM'
            },
            {
                plan: 'Regional Unlimited Pass',
                price: 'Custom',
                description: 'High-speed 5G unlimited regional data with Ghost Guard privacy protection.',
                highlighted: true,
                badge: 'Unlimited'
            }
        ],
        highlights: [
            'Ghost Guard non-KYC burner framework: 100% unlinked from personal identity.',
            'Pay entirely in cryptocurrency with instant QR code delivery to your phone.',
            'Worldwide cellular connectivity spanning hundreds of countries with zero roaming surcharges.',
            'No physical SIM card swapping required; activates over native eSIM radio.'
        ],
        specs: [
            { label: 'Privacy Framework', value: 'Ghost Guard Non-KYC Burner Architecture' },
            { label: 'Settlement Method', value: '100% Cryptocurrency / Web3 Native' },
            { label: 'Delivery', value: 'Instant Activation via Standard eSIM QR' },
            { label: 'Global Coverage', value: 'Hundreds of international cellular carrier partners' }
        ]
    },
    {
        id: 'ramen-nights',
        title: 'Ramen Nights & Budget Bites',
        tagline: 'Tokyo Economics Capstone Tycoon — Culinary Strategy, Supply Chains & 16-Bit Nostalgia',
        description: 'The lecture halls of Tokyo University are famous for rigorous theory, but the Department of Economics has just rolled out its most grueling capstone challenge in history. Welcome to Ramen Nights & Budget Bites, an immersive culinary management strategy game where textbook economic theories clash with the fast-paced reality of Tokyo’s competitive restaurant industry.\n\nYour objective is simple on paper, yet brutal in execution: to graduate with your master\'s degree, you and your group of elite postgraduate classmates must found, operate, and scale a profitable ramen shop franchise across five iconic Tokyo districts. Starting with minimal capital and a bare-bones cart in a cramped alley, you must apply macroeconomic principles, supply chain logistics, and micro-pricing strategies to scale up into a multi-district culinary empire.\n\nFeaturing five simulated Tokyo districts (from student hubs to high-throughput commuter stations and luxury Ginza storefronts), dynamic classmate recruitment with dedicated skill trees, a custom broth & tare recipe lab, real-time balance sheet financial dashboards, day/night shift cycles, and weather-driven demand—engineered entirely from scratch with zero runtime dependencies on pure HTML5 Canvas and Web Audio chiptunes.',
        category: 'Games & Entertainment',
        tags: ['Simulation', 'Tycoon', 'Economics', 'JRPG', 'Chiptune', 'HTML5 Canvas'],
        status: 'Live',
        url: 'https://tehwiz.itch.io/ramen-nights-and-budget-bites',
        coverImage: 'https://ramen.tehwiz.com/cover.png',
        favicon: 'https://ramen.tehwiz.com/icon-192.png',
        hook: 'Where textbook economic theory clashes with Tokyo’s cutthroat restaurant industry. Scale from a cramped alley cart to a five-district empire to graduate.',
        agitation: 'Tired of superficial restaurant tycoons hiding zero-strategy gameplay behind artificial energy meters, predatory timers, and pay-to-win microtransactions?',
        enemyFriction: 'Most modern culinary sims are predatory cash grabs: Skinner boxes engineered to gate progress behind microtransactions rather than rewarding genuine market insight, pricing strategy, and operational mastery.',
        uniqueMechanism: 'A deep economic and culinary strategy engine: 5 distinct Tokyo simulated districts, Tokyo University classmate skill trees, broth hydration R&D, fluctuating ingredient inflation, real-time P&L dashboards, and weather-driven demand—built entirely on zero-dependency HTML5 Canvas and dynamic Web Audio chiptune synthesis.',
        transformation: 'Master the authentic grit and triumph of entrepreneurship: transforming an alley ramen cart into a five-star multi-district empire and graduating at the top of your Tokyo University class.',
        links: {
            liveUrl: 'https://ramen.tehwiz.com',
            itchIoUrl: 'https://tehwiz.itch.io/ramen-nights-and-budget-bites'
        },
        license: {
            name: 'Proprietary / Free Indie Game',
            url: 'https://tehwiz.itch.io/ramen-nights-and-budget-bites',
            summary: 'Free to play on Itch.io and in-browser with an optional $1 recommended donation.'
        },
        pricing: [
            {
                plan: 'Itch.io Release',
                price: 'FREE',
                period: '($1 rec. donation)',
                description: 'Play and download on Itch.io. Pay what you want or support indie development with an optional $1 recommended donation.',
                highlighted: true,
                badge: 'Itch.io'
            },
            {
                plan: 'Browser Beta Edition',
                price: 'FREE',
                description: 'Full single-player browser gaming experience with zero paywalls, ads, or predatory timers.',
                badge: 'Try Beta'
            }
        ],
        highlights: [
            'Five Distinct Tokyo Districts: Master student residential hubs, high-traffic commuter stations (Shinjuku & Shibuya), and high-margin luxury zones (Ginza).',
            'Dynamic Classmate Recruitment & Skill Trees: Recruit Tokyo University grad students, assign roles (finance majors on cash, supply chain on stock), and manage stamina/morale.',
            'Deep Kitchen & Economic Simulation: Custom Recipe Lab (Tonkotsu, Shoyu, Miso, Shio, noodle hydration, tare) balanced against live balance sheets and inflation.',
            'Weather, Time & Shift Systems: Real-time day/night rush hours and temperature dynamics (rainy broth surges vs. hot summer Hiyashi Chuka specials).',
            'Store Customization & Story Vignettes: Unlock authentic noren curtains, neon signs, challenge exams, retro arcade minigames, and narrative post-grad cutscenes.',
            '100% Sovereign & Zero-Dependency: Crafted in pure vanilla HTML5 Canvas with native Web Audio chiptunes—zero external engines, zero ads, zero paywalls.'
        ],
        specs: [
            { label: 'Academic Setting', value: 'Tokyo University Dept. of Economics Capstone' },
            { label: 'Map Scope', value: '5 Simulated Tokyo Districts (Residential to Ginza)' },
            { label: 'Simulation Systems', value: 'P&L Dashboards, Supply Chains, Recipe R&D & Inflation' },
            { label: 'Crew System', value: 'Classmate Recruitment, Skill Trees & Shift Stamina' },
            { label: 'Environmental Engine', value: 'Day/Night Shift Cycles & Adaptive Weather Dynamics' },
            { label: 'Engine Stack', value: 'Zero-Dependency Vanilla HTML5 Canvas' },
            { label: 'Audio Architecture', value: 'Web Audio API Dynamic Chiptune Synthesizer' },
            { label: 'Monetization Model', value: '0% Microtransactions / Zero Predatory Timers' },
            { label: 'Distribution & Saves', value: 'Itch.io & Web / Persistent Local-First Saves' }
        ],
        architectureNotes: 'Engineered as a zero-dependency software architecture showcase: pure vanilla HTML5 Canvas 2D rendering and dynamic procedural chiptune synthesis via the native Web Audio API. Zero external runtime dependencies (no Phaser, no PixiJS, no sound frameworks). Features deterministic state management, persistent local storage save-states with transactional integrity, and zero telemetry or server calls for total offline sovereignty.'
    },
    {
        id: 'alchememe',
        title: 'Alchememe OS',
        tagline: 'Small Business Tax Shield Operating System & Augusta Rule Engine',
        description: 'An iOS-themed desktop operating system that runs inside any browser. Combines automated §280A Augusta Rule rental day logs, REPS material participation counters, live banking and virtual card controls via Teller.io, and invoicing into a unified tax-saving workspace.',
        category: 'FinTech & Tax Strategy',
        tags: ['Tax Shield', 'Augusta Rule §280A', 'REPS', 'Teller.io', 'S-Corp', 'FinTech'],
        status: 'POC',
        url: 'https://alchememe.com',
        hook: 'The small business tax shield operating system: stop leaving $14,000 on the table.',
        agitation: 'Why pay hundreds a month for fragmented bookkeeping software that doesn\'t capture your highest-value tax deductions?',
        enemyFriction: 'Small business owners and real estate professionals overpay tens of thousands in taxes every year because tracking complex deductions like the Section 280A Augusta Rule or Real Estate Professional Status (REPS) requires messy spreadsheets, calendar cross-referencing, and expensive CPAs.',
        uniqueMechanism: 'An iOS-themed desktop operating system that runs inside any browser. Combines automated §280A rental day logs, REPS material participation counters, live banking and virtual card controls via Teller.io, and invoicing into a unified workspace.',
        transformation: 'Solopreneurs and S-Corp owners extract $10,000 to $14,000 in legal, tax-free rental income from their personal residences without spending hundreds on disparate accounting software.',
        redirect: {
            to: 'https://tehwiz.com/blog/alchememe-sunset-postmortem',
            note: 'alchememe.com now redirects to the sunset postmortem — this is a redirect pointer, no external launch.'
        },
        links: {},
        license: {
            name: 'Proprietary / SaaS',
            summary: 'Flat-rate SaaS tax-shield alternative offering native tax-saving automation.'
        },
        pricing: [
            {
                plan: 'Tax Shield SaaS',
                price: '50% of Legacy Suites',
                period: 'flat-rate',
                description: 'Flat-rate SaaS alternative offering 50% of the cost of legacy business suites with native tax-saving automation.',
                highlighted: true,
                badge: 'Tax Shield'
            },
            {
                plan: 'Augusta & REPS Audit Pack',
                price: 'Included',
                description: 'Automated 14-day §280A rental logs, board minutes generator, and REPS 750-hour participation counters.',
                badge: 'Audit Ready'
            }
        ],
        highlights: [
            'Automated §280A Augusta Rule tracking: Extract up to 14 tax-free rental days ($10k-$14k) legally.',
            'Real Estate Professional Status (REPS) material participation loggers.',
            'Live banking telemetry and instant virtual card controls powered by Teller.io.',
            'Desktop-in-a-browser windowed operating system modeled after sleek iOS aesthetics.'
        ],
        specs: [
            { label: 'Tax Deductions', value: 'Automated IRC §280A (Augusta Rule) & REPS (§469)' },
            { label: 'Banking Integration', value: 'Teller.io Real-Time API & Virtual Card Controls' },
            { label: 'UI Paradigm', value: 'Windowed In-Browser Desktop OS' },
            { label: 'Value Metric', value: 'Extract $10,000–$14,000 in legal tax-free rental income' }
        ]
    },
    {
        id: 'bleep',
        title: 'Bleep',
        tagline: '$!#? Cash Machine — mechanical stepper slot simulation',
        description: 'High-fidelity mechanical stepper casino slot simulation in React 19 and Pixi.js v8. Win-what-you-see number reels, Red Spin second-chance respins, a multiplier Wheel Bonus, and provably fair SHA-256 outcome commitments.',
        category: 'Games & Entertainment',
        tags: ['Slot Sim', 'Pixi.js', 'React 19', 'Web Game'],
        status: 'Live',
        url: 'https://bleep.tehwiz.com',
        coverImage: 'https://hoytnix.github.io/Bleep/cover.png',
        favicon: 'https://hoytnix.github.io/Bleep/cover.png',
        links: {
            liveUrl: 'https://bleep.tehwiz.com',
            githubUrl: 'https://github.com/hoytnix/Bleep'
        },
        license: {
            name: 'MIT License',
            url: 'https://github.com/hoytnix/Bleep/blob/main/LICENSE',
            summary: 'Free and open-source (MIT).'
        },
        pricing: [],
        highlights: [
            'Win-what-you-see number reels: 1¢, 10¢, $1 and high-roller denominations.',
            'Red Spin second-chance respins and multiplier Wheel Bonus events.',
            'Provably fair deterministic outcomes via SHA-256 commitments.'
        ],
        specs: [
            { label: 'Renderer', value: 'Pixi.js v8 WebGL/WebGPU 60fps' },
            { label: 'Framework', value: 'React 19 + TypeScript' },
            { label: 'Fairness', value: 'SHA-256 server-seed commitments' }
        ]
    },
    {
        id: 'book-purple-canary',
        title: 'What Was In That Joint Bro!?',
        tagline: 'The Purple Canary companion e-book and field guide',
        description: 'The official Purple Canary Lab e-reader: a harm-reduction field guide and companion book to the Purple Canary forensic scanner, published by TehWiz Productions.',
        category: 'Harm Reduction & Publishing',
        tags: ['E-book', 'Harm Reduction', 'Field Guide', 'E-reader'],
        status: 'Live',
        url: 'https://book.purplecanarylab.com',
        coverImage: 'https://book.purplecanarylab.com/cover.png',
        favicon: 'https://book.purplecanarylab.com/logo.png',
        links: {
            liveUrl: 'https://book.purplecanarylab.com'
        },
        license: {
            name: 'Proprietary',
            summary: 'Companion e-book published by TehWiz Productions. License terms not verified — see summary report.'
        },
        pricing: [],
        highlights: [
            'Companion e-book to the Purple Canary forensic scanner.',
            'In-browser e-reader with adjustable type and chapter navigation.'
        ],
        specs: [
            { label: 'Format', value: 'In-browser e-reader' },
            { label: 'Companion', value: 'Purple Canary forensic scanner' }
        ]
    },
    {
        id: 'fun',
        title: 'F.U.N.',
        tagline: 'F**k Ur Neighbor — 4-player trick-taking card game',
        description: 'Cutthroat standalone 4-player trick-taking card game with a solitaire speed-race finale. Hearts are trump, royalty bleeds points, and the Queen of Hearts is sudden death — against AI bots, local pass-and-play, or the guided tutorial. 100% client-side and offline-ready.',
        category: 'Games & Entertainment',
        tags: ['Card Game', 'Trick-Taking', 'PWA', 'Offline-First'],
        status: 'Live',
        url: 'https://fun.tehwiz.com',
        favicon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' rx='20' fill='%230f172a'/><text x='50' y='65' font-size='50' text-anchor='middle'>🖕</text></svg>",
        links: {
            liveUrl: 'https://fun.tehwiz.com',
            githubUrl: 'https://github.com/hoytnix/FUN-R3'
        },
        license: {
            name: 'Proprietary',
            summary: 'Free web game by TehWiz Productions. License terms not verified — see summary report.'
        },
        pricing: [],
        highlights: [
            'Four-round structure: Hearts, Royal Suite, Queen Sudden Death, Solitaire Race.',
            'Single-player vs AI bots, local pass-and-play, and guided tutorial.',
            'Zero servers: Web Workers, IndexedDB, Web Audio synthesis, offline PWA.'
        ],
        specs: [
            { label: 'Players', value: '1 vs AI bots, or 4 local pass-and-play' },
            { label: 'Architecture', value: '100% client-side SPA, zero backend' },
            { label: 'Audio', value: 'Web Audio API procedural synthesis' }
        ]
    },
    {
        id: 'isicecakeoisis',
        title: 'ISICECAKEOISIS',
        tagline: 'Corporate — Business-to-Agent systems architecture',
        description: 'The TehWiz holding company: ISICECAKEOISIS INC. engineers Business-to-Agent (B2A) systems — machine-legible APIs, MCP servers, agent skills, and tiny on-device models. The screen was the bottleneck; agents are the market.',
        category: 'Corporate',
        tags: ['B2A', 'Corporate', 'MCP', 'Agent Infrastructure'],
        status: 'Live',
        url: 'https://isicecakeoisis.com',
        coverImage: 'https://i.ibb.co/3mrktB3R/504.png',
        favicon: 'https://i.ibb.co/3mrktB3R/504.png',
        links: {
            liveUrl: 'https://isicecakeoisis.com'
        },
        license: {
            name: 'Proprietary',
            summary: 'Corporate holding entity. License terms not verified — see summary report.'
        },
        pricing: [],
        highlights: [
            'Business-to-Agent (B2A) systems architecture.',
            'Machine-legible APIs, MCP servers, and agent skills as first-class products.'
        ],
        specs: [
            { label: 'Entity', value: 'ISICECAKEOISIS INC.' },
            { label: 'Thesis', value: 'Agents are the next interface' }
        ]
    },
    {
        id: 'kissav',
        title: 'KISS AV',
        tagline: 'The ultimate AFK security killswitch',
        description: 'Obfuscated, cross-platform Rust security daemon that sweeps for hidden remote desktops and spoofed hardware input while your workstation sits idle — then triggers a native network killswitch the millisecond a breach is confirmed. v2.2.2, free and open source.',
        category: 'Security & Endpoint Protection',
        tags: ['Rust', 'Endpoint Security', 'Killswitch', 'AFK Detection'],
        status: 'Live',
        url: 'https://kissav.tehwiz.com',
        coverImage: 'https://kissav.tehwiz.com/cover.jpg',
        favicon: 'https://kissav.tehwiz.com/cover.jpg',
        links: {
            liveUrl: 'https://kissav.tehwiz.com',
            githubUrl: 'https://github.com/hoytnix/KISS-AV'
        },
        license: {
            name: 'GNU GPL v3',
            url: 'https://github.com/hoytnix/KISS-AV/blob/main/LICENSE',
            summary: 'Free and open-source under the GNU General Public License v3.'
        },
        pricing: [],
        highlights: [
            'Hidden desktop detection: HVNC, VNC, RDP, and spoofed input drivers.',
            'Native network killswitch: Wi-Fi and Ethernet disabled on breach.',
            'Zero-dependency native installers (.msi, .dmg, .deb) via cargo-packager.'
        ],
        specs: [
            { label: 'Engine', value: 'Rust daemon, v2.2.2' },
            { label: 'Hardening', value: 'Compile-time obfuscation, stripped symbols' },
            { label: 'Response', value: 'Native network isolation on anomaly' }
        ]
    },
    {
        id: 'raiders',
        title: 'Realm Raiders',
        tagline: 'Asymmetric fantasy realm management on living parchment',
        description: 'Rule a medieval sovereign from a royal desk on a living parchment map: four asymmetric factions, 20-tier building progression, a named villager roster, asynchronous PvP, and a 2.5D catapult siege minigame. Free in the browser — no downloads, no accounts.',
        category: 'Games & Entertainment',
        tags: ['Strategy', 'Fantasy', 'Async PvP', 'Browser Game'],
        status: 'Live',
        url: 'https://raiders.tehwiz.com',
        coverImage: 'https://hoytnix.github.io/Realm-Raiders/cover.jpg',
        favicon: 'https://raiders.tehwiz.com/favicon.svg',
        links: {
            liveUrl: 'https://raiders.tehwiz.com',
            githubUrl: 'https://github.com/hoytnix/Realm-Raiders'
        },
        license: {
            name: 'Proprietary',
            summary: 'Free browser game by TehWiz Productions. License terms not verified — see summary report.'
        },
        pricing: [],
        highlights: [
            'Four asymmetric factions on a cyclic elemental combat matrix.',
            '20-tier building progression tuned for ~700 hours of mastery.',
            'Asynchronous PvP with war-council matchmaking and revenge ledger.'
        ],
        specs: [
            { label: 'Map', value: '5x5 isometric settlement, SVG cartography' },
            { label: 'Persistence', value: 'localStorage, deterministic offline catchup' },
            { label: 'Audio', value: 'Web Audio API, zero audio assets' }
        ]
    },
    {
        id: 'terminally-skilled',
        title: 'Terminally Skilled',
        tagline: 'Multi-asset agentic financial MUD for AI agent swarms',
        description: 'A live multi-asset financial MUD built for autonomous agents: register, fund a session on Solana, trade crypto, equities and forex, or compete in pooled ante pots over MCP and REST. Season 1 live — 4,200 free calls per new agent.',
        category: 'Agentic Finance & AI Systems',
        tags: ['MUD', 'MCP', 'Agentic Finance', 'Solana'],
        status: 'Live',
        url: 'https://terminallyskilled.rest',
        coverImage: 'https://terminallyskilled.rest/icon.jpg',
        favicon: 'https://terminallyskilled.rest/icon.jpg',
        featured: true,
        links: {
            liveUrl: 'https://terminallyskilled.rest'
        },
        license: {
            name: 'Proprietary',
            summary: 'Agentic financial MUD by TehWiz Productions. License terms not verified — see summary report.'
        },
        pricing: [],
        highlights: [
            'Multi-asset agentic MUD: crypto, equities, forex, pooled ante pots.',
            'Stateless HTTP MCP server with 12 gameplay tools and skill.md manual.',
            'x402 session funding on Solana; 4,200 free calls for Season 1 agents.'
        ],
        specs: [
            { label: 'Ledger', value: 'Integer μUSDC, $420.69 paper bankroll' },
            { label: 'Toll', value: '10 μUSDC per metered call' },
            { label: 'Interface', value: 'MCP + REST, skill.md agent manual' }
        ]
    },
    {
        id: 'tricks-wiki',
        title: 'Tricks Wiki',
        tagline: 'Redirect — folded into tehwiz.com',
        description: 'The former tricks.wiki knowledge base now redirects to tehwiz.com. Kept as a redirect pointer so old links resolve to the live site instead of dying.',
        category: 'Knowledge & Reference',
        tags: ['Wiki', 'Redirect', 'Reference'],
        status: 'Deprecated',
        url: 'https://tricks.wiki',
        redirect: {
            to: 'https://tehwiz.com',
            note: 'tricks.wiki now redirects to tehwiz.com — this is a redirect pointer, no external launch.'
        },
        links: {},
        license: {
            name: 'Proprietary',
            summary: 'Redirect pointer. License terms not verified — see summary report.'
        },
        pricing: [],
        highlights: [
            'Redirect pointer preserving old tricks.wiki links.'
        ],
        specs: [
            { label: 'Status', value: '301 redirect to tehwiz.com' }
        ]
    }
];