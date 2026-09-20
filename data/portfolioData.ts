import { Project } from '../types';

export const MOCK_PROJECTS: Project[] = [
    {
        id: 'yuli',
        title: 'Yuli',
        tagline: 'Autonomous Cognitive Persona Engine & Mind-Reading MBTI Diagnostic',
        description: 'A sovereign, 100% on-device cognitive persona engine running on an F_2^4 Boolean Hypercube state space. Fine-tuned on high-friction multi-turn discourse from Reddit to detect human Myers-Briggs (MBTI) cognitive personality types in real time. Delivers natural character dialogue at 70–110 TPS on WebGPU with sub-200ms time-to-first-token on an iPhone SE 3+ or modern Android device.',
        category: 'AI & Cognitive Architecture',
        tags: ['AI', 'MBTI', 'Cognitive Architecture', 'WebGPU', 'Edge AI', 'Reddit'],
        status: 'BETA',
        url: 'https://project-yuli.netlify.app/',
        hook: 'The edge-native cognitive companion that reads your mind and refuses to lie to you.',
        agitation: 'Tired of cloud LLMs charging you per token just to deliver watered-down, sycophantic corporate fluff that buffers your UI loop?',
        enemyFriction: 'Modern AI conversational agents are paralyzed by corporate sycophancy, repetitive pleasantries ("I hope this helps!"), high cloud latency (1.5 to 3.5 seconds), and compounding monthly API token bills. In gaming and mobile apps, remote LLMs frequently cause frame stutter, fail offline, and leak internal character reasoning directly into user dialogue bubbles.',
        uniqueMechanism: 'A sovereign, 100% on-device cognitive persona engine running on an 𝔽₂⁴ Boolean Hypercube state space. Fine-tuned on high-friction multi-turn discourse to detect human Myers-Briggs (MBTI) cognitive personality types in real time, Yuli switches between four operational minds (Ego 0EE, Shadow 1E6, Subconscious 2E7, Superego 3E1) using bitwise XOR operations. An inline Pushdown Automaton (CCDStreamParser) enforces a strict Cognitive Deliberation Firewall, stripping raw thought tokens into a private background stream while delivering natural character dialogue at 70–110 TPS on WebGPU with sub-200ms time-to-first-token.',
        transformation: 'Developers and game creators embed sovereign, mind-reading NPCs and cognitive companions directly into browsers, WebGL worlds, and PWAs that run entirely offline without recurring cloud bills.',
        links: {
            liveUrl: 'https://project-yuli.netlify.app/',
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
        status: 'BETA',
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
        status: 'LIVE',
        url: 'https://aevloc.com',
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
        status: 'LIVE',
        url: 'https://rarestry.com',
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
        id: 'projects',
        title: 'Projects',
        tagline: 'Streamlined Project Management For The Chaotic Mind',
        description: 'Free Trello Alternative. Streamlined Project Management For The Chaotic Mind. Fast card movement, backlog organization, and lightweight task pipelines.',
        category: 'Productivity & Task Management',
        tags: ['Kanban', 'Productivity', 'Task Management'],
        status: 'MVP',
        url: 'https://projects.tehwiz.com',
        hook: 'Streamlined visual kanban engineered for fast-moving chaotic minds.',
        agitation: 'Tired of heavyweight enterprise PM software that demands 20 clicks just to move a task card?',
        links: {
            liveUrl: 'https://projects.tehwiz.com'
        },
        license: {
            name: 'Proprietary / Free Web App',
            summary: 'Free web application for chaotic-mind productivity and personal workflow optimization.'
        },
        pricing: [
            {
                plan: 'Personal Workspaces',
                price: 'FREE',
                description: 'Unlimited personal boards and card pipelines.',
                highlighted: true,
                badge: 'Free'
            }
        ]
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
        links: {
            liveUrl: 'https://cherrysundays.com'
        },
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
        status: 'PRE-ALPHA',
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
        id: 'snowmore-work',
        title: 'SnowMore Work',
        tagline: 'Snow Shoveling Pricing Calculator & Job Estimator',
        description: 'Dynamic Snow Shoveling Pricing Calculator with precipitation rates, driveway dimensions, and instant bid sheets.',
        category: 'Utilities & Estimators',
        tags: ['Calculator', 'Home Services', 'Estimates'],
        status: 'MVP',
        url: 'https://snowmore.work',
        links: {
            liveUrl: 'https://snowmore.work'
        },
        license: {
            name: 'Proprietary / Free Web App',
            summary: 'Open-access utility calculator for home service pros and homeowners.'
        },
        pricing: [
            {
                plan: 'Online Calculator',
                price: 'FREE',
                description: 'Instant snow removal price estimates.',
                badge: 'Free'
            }
        ]
    },
    {
        id: 'ramen-nights',
        title: 'Ramen Nights & Budget Bites',
        tagline: 'Cozy Retro Ramen Management JRPG — Pure 16-Bit Nostalgia',
        description: 'A completed, zero-dependency 8-bit/16-bit JRPG idle management game built on pure HTML5 Canvas and Web Audio chiptune synthesis. Features a procedural district map, crafting trees, persistent local storage save-states, and narrative cutscenes with zero paywalls or predatory timers.',
        category: 'Games & Entertainment',
        tags: ['Idle Clicker', '8-Bit', '16-Bit', 'Chiptune', 'JRPG', 'Tycoon'],
        status: 'PRE-ALPHA',
        url: 'https://ramen.tehwiz.com',
        hook: 'Cozy retro ramen management. Zero paywalls, zero predatory timers, pure 16-bit nostalgia.',
        agitation: 'Tired of mobile games designed around cooldown timers, battle passes, and predatory microtransactions that ruin the joy of play?',
        enemyFriction: 'Mobile gaming is saturated with predatory microtransactions, energy timers, and pay-to-win mechanics that turn casual gaming into a financial chore.',
        uniqueMechanism: 'A completed, zero-dependency 8-bit/16-bit JRPG idle management game built on pure HTML5 Canvas and Web Audio chiptune synthesis. Features a procedural district map, crafting trees, persistent local storage save-states, and narrative cutscenes.',
        transformation: 'Players experience cozy, nostalgic management progression without pop-up ads or predatory paywalls.',
        links: {
            liveUrl: 'https://ramen.tehwiz.com'
        },
        license: {
            name: 'Proprietary / Free Web & Indie Game',
            summary: 'Free to play in-browser; standalone mobile release.'
        },
        pricing: [
            {
                plan: 'Browser Play',
                price: 'FREE',
                description: 'Full single-player browser gaming experience with zero paywalls.',
                highlighted: true,
                badge: 'Free Web'
            },
            {
                plan: 'Mobile App Store Edition',
                price: '$0.99',
                period: 'one-time',
                description: 'Standalone indie title at $0.99 / $1.00 on app stores; targeted for Google Play Pass inclusion.',
                badge: 'Play Pass'
            }
        ],
        highlights: [
            'Zero dependencies: Pure HTML5 Canvas and Web Audio chiptune synthesis.',
            'Procedural Tokyo ramen district map with extensive broth & noodle crafting trees.',
            'Cozy nostalgic progression: zero paywalls, zero energy meters, zero microtransactions.',
            'Persistent local storage save-states and charming pixel-art narrative cutscenes.'
        ],
        specs: [
            { label: 'Engine', value: 'Zero-Dependency Vanilla HTML5 Canvas' },
            { label: 'Audio', value: 'Web Audio API Dynamic Chiptune Synthesizer' },
            { label: 'Monetization', value: 'Zero Paywalls / Google Play Pass Target ($0.99 / $1.00)' },
            { label: 'Saves', value: 'Persistent Local-First Storage Save States' }
        ]
    },
    {
        id: 'pocket-monstars',
        title: 'Pocket Mon$tar$$$',
        tagline: 'Pokemon-Themed Idle Clicker Game & Monster Vault',
        description: 'Pokemon-Themed Idle Clicker Game. Gotta Click \'Em All. Upgrade capture balls, discover legendary spawns, and amass monster fortunes.',
        category: 'Games & Entertainment',
        tags: ['Idle Game', 'Clicker', 'HTML5 Game'],
        status: 'MVP',
        url: 'https://pokemans.tehwiz.com',
        links: {
            liveUrl: 'https://pokemans.tehwiz.com'
        },
        license: {
            name: 'Proprietary / Fan Project',
            summary: 'Free non-commercial fan demonstration game.'
        },
        pricing: [
            {
                plan: 'Free Play',
                price: 'FREE',
                description: '100% free web game.',
                badge: 'Free'
            }
        ]
    },
    {
        id: 'michael-scott-homes',
        title: 'Michael Scott Homes',
        tagline: 'Modern Home Improvement Lead Magnet / Calculator & CRM',
        description: 'Modern Home Improvement Lead Magnet / Calculator & CRM. That\'s What She Said. Calculates room remodeling estimates with viral customer onboarding funnels.',
        category: 'PropTech & Lead Generation',
        tags: ['CRM', 'Lead Magnet', 'Calculator', 'Home Improvement'],
        status: 'ALPHA',
        url: 'https://michaelscott.homes',
        links: {
            liveUrl: 'https://michaelscott.homes'
        },
        license: {
            name: 'Proprietary / Commercial SaaS',
            summary: 'Turnkey lead capture funnels for contracting and renovation businesses.'
        },
        pricing: [
            {
                plan: 'Lead Engine',
                price: 'Custom',
                description: 'Custom lead capture calculators and CRM sync.',
                badge: 'Commercial'
            }
        ]
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
        links: {
            liveUrl: 'https://alchememe.com'
        },
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
    }
];