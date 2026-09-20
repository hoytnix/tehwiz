import { Project } from '../types';

export const MOCK_PROJECTS: Project[] = [
    {
        id: 'yuli',
        title: 'Yuli',
        tagline: 'Autonomous Cognitive Persona Engine & Mind-Reading MBTI Diagnostic',
        description: 'Trained on multi-turn conversational discourse from Reddit to intuitively detect, track, and adapt to Myers-Briggs (MBTI) cognitive personality types in real time. Known for delivering eerily accurate, mind-reading conversational dynamics across 4-Sides-of-the-Mind psychological states.',
        category: 'AI & Cognitive Architecture',
        tags: ['AI', 'MBTI', 'Cognitive Architecture', 'NLP', 'LLM', 'Reddit'],
        status: 'BETA',
        links: {
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
            summary: 'Free for personal, non-commercial, evaluation, and commercial applications generating under $30,000 USD in gross revenue. Upon reaching $30,000 USD in revenue, a commercial production license is required at $1,500/year per title.'
        },
        pricing: [
            {
                plan: 'Source Code Only',
                price: 'FREE',
                description: 'Up to $30,000 gross revenue; available on GitHub and Hugging Face.',
                badge: 'Open Source'
            },
            {
                plan: 'Commercial License',
                price: '$1,500',
                period: '/ year',
                description: 'For entities generating >$30,000 gross revenue.',
                highlighted: true,
                badge: 'Production'
            },
            {
                plan: 'Enterprise SLA Support',
                price: 'By Request Only',
                description: 'Custom Quotes for dedicated engineering integration, model fine-tuning, and support.',
                badge: 'Custom'
            }
        ]
    },
    {
        id: 'purple-canary',
        title: 'Purple Canary',
        tagline: 'Computer Vision Reagent Analysis & Harm-Reduction Scanner',
        description: 'Digital Densiometer: Detects Over 200+ Toxins In Any Illicit Substance... $1 Harm Reduction Drug Tests! Computer vision reagent testing and harm reduction analysis.',
        category: 'Harm Reduction & Computer Vision',
        tags: ['Computer Vision', 'Harm Reduction', 'HealthTech', 'WASM', 'Mobile Web'],
        status: 'BETA',
        url: 'https://purplecanarylab.com',
        links: {
            liveUrl: 'https://purplecanarylab.com',
            githubUrl: 'https://github.com/hoytnix/purple-canary-beta'
        },
        license: {
            name: 'MIT License',
            summary: '100% Free and Open-Source Software.'
        },
        pricing: [
            {
                plan: 'Source Code Only',
                price: 'FREE',
                description: 'Self-host or modify via MIT License.',
                badge: 'MIT'
            },
            {
                plan: 'Ad-Supported Mobile Web',
                price: 'FREE',
                description: 'Complete testing access with non-intrusive sponsor ads.',
                highlighted: true,
                badge: 'Popular'
            },
            {
                plan: 'Ad-Free Lifetime Pass',
                price: '$1.00',
                period: 'one-time',
                description: 'One-time payment, zero ads forever.',
                badge: 'Lifetime'
            }
        ]
    },
    {
        id: 'aevloc',
        title: 'Aevloc',
        tagline: 'Online Reputation Management Firewall & Smart NFC Review Gateway',
        description: 'An intelligent reputation firewall that protects local businesses from damaging public reviews. Bifurcates customer sentiment at the doorstep or countertop using programmable NFC tap cards and QR funnels, routing 4-to-5-star ratings to public profiles while intercepting negative feedback privately.',
        category: 'MarTech & Reputation Management',
        tags: ['SaaS', 'NFC Hardware', 'Review Gateway', 'Local SEO', 'Reputation Firewall'],
        status: 'LIVE',
        url: 'https://aevloc.com',
        links: {
            liveUrl: 'https://aevloc.com'
        },
        license: {
            name: 'Proprietary / Commercial SaaS',
            summary: 'Turnkey software subscriptions with hardware pass-through fulfillment.'
        },
        pricing: [
            {
                plan: 'SMB Starter',
                price: '$15 / mo',
                period: 'or $97/yr',
                description: 'Single location, reputation firewall, review routing.'
            },
            {
                plan: 'Agency Unlimited',
                price: '$97 / mo',
                period: 'or $970/yr',
                description: 'Unlimited client business sub-accounts, white-label branding, multi-tenant dashboard.',
                highlighted: true,
                badge: 'Recommended'
            },
            {
                plan: 'Done-For-You Integration',
                price: '$1,500',
                period: 'one-time',
                description: 'Full custom API integration, bespoke funnel styling, custom domain routing, and hardware onboarding.',
                badge: 'Turnkey'
            }
        ]
    },
    {
        id: 'alembic-quest',
        title: 'Alembic Quest',
        tagline: 'High-Velocity Canvassing Operating System & Spatial Territory Radar',
        description: 'A Specialized Field CRM For Door-To-Door Businesses To Track Neighborhood Canvassing, Door Knocks, And Customer Conversion. Features high-velocity spatial territory radar with 1-click address skiptracing and property data scrub capabilities provided free for individual canvassers.',
        category: 'Field Operations & Spatial CRM',
        tags: ['CRM', 'Canvassing', 'GIS Radar', 'Skiptracing', 'Offline-First'],
        status: 'MVP',
        url: 'https://alembic.quest',
        links: {
            liveUrl: 'https://alembic.quest'
        },
        license: {
            name: 'Proprietary / SaaS',
            summary: 'Free solo-tier usage with scalable team seat pricing and usage-based skiptrace queries.'
        },
        pricing: [
            {
                plan: 'Sole Proprietor',
                price: 'FREE',
                description: 'Full canvassing radar, 1-click address scrubbing, offline queue, unlimited individual knocks.',
                highlighted: true,
                badge: 'Solo Free'
            },
            {
                plan: 'Team Growth',
                price: '$7',
                period: '/ mo per seat',
                description: 'Multi-user territory sync, manager telemetry dashboard, team leaderboards.',
                badge: 'Teams'
            },
            {
                plan: 'Residential Skiptraces',
                price: '$0.01',
                period: '/ lookup',
                description: '1¢ per residential contact and property intelligence lookup.',
                badge: 'Pay-As-You-Go'
            }
        ]
    },
    {
        id: 'quarkmeme',
        title: 'Quarkmeme (qm-holla)',
        tagline: 'Agentic Project OS: FLOSS Local-First Alternative to Polsia',
        description: 'A 100% Free, Libre, and Open-Source Software (FLOSS) alternative to Polsia. Runs multi-agent autonomous teams (7-universe crew casting) directly in the browser over local SQLite WASM and OPFS, with zero cloud database bills and zero vendor lock-in.',
        category: 'Autonomous Multi-Agent Systems',
        tags: ['FLOSS', 'Local-First', 'WASM SQLite', 'OPFS', 'Multi-Agent', 'Zero-Cloud'],
        status: 'POC',
        url: 'https://quarkmeme.com',
        links: {
            liveUrl: 'https://quarkmeme.com',
            githubUrl: 'https://github.com/hoytnix/qm-holla'
        },
        license: {
            name: 'MIT License',
            summary: 'Free/Libre and Open-Source Software.'
        },
        pricing: [
            {
                plan: 'Local-First Core',
                price: 'FREE',
                description: 'Complete source code, 100% client-side execution, local OPFS database, zero recurring bills.',
                highlighted: true,
                badge: 'FLOSS'
            },
            {
                plan: 'Encrypted Cloud Sync',
                price: 'COMING SOON',
                period: '@ TBD',
                description: 'Multi-device encrypted backup and remote peer synchronization.',
                badge: 'Roadmap'
            }
        ]
    },
    {
        id: 'rarestry',
        title: 'Rarestry',
        tagline: 'Deterministic WASM Computer Vision Pokémon Card Grading & Vault',
        description: 'High-speed trading card grading and collection tracking powered by in-browser WebAssembly computer vision. Instantly categorizes, grades, and values vintage and modern trading cards with virtual binder management.',
        category: 'WASM Computer Vision & Collectibles',
        tags: ['WASM', 'Computer Vision', 'Card Grading', 'Pokémon', 'Digital Vault'],
        status: 'LIVE',
        url: 'https://rarestry.com',
        links: {
            liveUrl: 'https://rarestry.com'
        },
        license: {
            name: 'Proprietary / Freestanding Web App',
            summary: 'Free personal binder management with physical hardware accessories available.'
        },
        pricing: [
            {
                plan: 'Personal Binder & Grading',
                price: 'FREE',
                description: 'Full digital portfolio tracker, set completion analytics, card scanner.',
                highlighted: true,
                badge: 'Free Tier'
            },
            {
                plan: 'High-Speed Hardware Stand',
                price: 'COMING SOON',
                period: '@ $15 each',
                description: 'Ergonomic, angled capture stand enabling 1-card-per-second auto-shutter inventory scanning.',
                badge: 'Hardware'
            }
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
        tagline: 'Decentralized Data Incentives & Borderless eSIM Connectivity',
        description: 'Earn Unlimited Global 5G E-Sim Data By Training AI. Connectivity Without Borders.',
        category: 'Telecom & DePIN / AI Data',
        tags: ['eSIM', '5G', 'DePIN', 'AI Training'],
        status: 'PRE-ALPHA',
        url: 'https://hibiscuswireless.com',
        links: {
            liveUrl: 'https://hibiscuswireless.com'
        },
        license: {
            name: 'Proprietary / Network Protocol',
            summary: 'Decentralized data sharing and tokenized bandwidth incentivization.'
        },
        pricing: [
            {
                plan: 'Contributor Tier',
                price: 'FREE',
                description: 'Contribute model evaluations to earn global 5G data credits.',
                badge: 'Earn Data'
            }
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
        tagline: '8-Bit JRPG Style Idle Clicker Ramen Tycoon Game',
        description: '8-Bit JRPG Style Idle Clicker Ramen Tycoon Game. Slurp Your Way To The Top. Hire chefs, unlock rare broth recipes, and expand across Tokyo.',
        category: 'Games & Entertainment',
        tags: ['Idle Clicker', '8-Bit', 'GameDev', 'Tycoon'],
        status: 'PRE-ALPHA',
        url: 'https://ramen.tehwiz.com',
        links: {
            liveUrl: 'https://ramen.tehwiz.com'
        },
        license: {
            name: 'Proprietary / Free Game',
            summary: 'Free to play in-browser idle game.'
        },
        pricing: [
            {
                plan: 'Standard Play',
                price: 'FREE',
                description: 'Full single-player browser gaming experience.',
                badge: 'Free Play'
            }
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
        title: 'Alchememe',
        tagline: 'Natural-Language App Creation For The 99%',
        description: 'AI That Makes Apps For The 99% Who Don\'t Know How To Code. Turns text prompts into fully responsive, interactive web applications on the fly.',
        category: 'AI & Generative Code',
        tags: ['Generative AI', 'No-Code', 'App Builder', 'Code Generation'],
        status: 'POC',
        url: 'https://alchememe.com',
        links: {
            liveUrl: 'https://alchememe.com'
        },
        license: {
            name: 'Proprietary / SaaS',
            summary: 'Generative AI application synthesis platform.'
        },
        pricing: [
            {
                plan: 'Creator Sandbox',
                price: 'FREE',
                description: 'Generate and test experimental apps.',
                badge: 'Preview'
            }
        ]
    }
];