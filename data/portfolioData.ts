import { Project } from '../types';

export const MOCK_PROJECTS: Project[] = [
    {
        id: 'yuli',
        title: 'Yuli',
        tagline: 'Autonomous Cognitive Persona Engine & Mind-Reading MBTI Diagnostic',
        description: 'Yuli was trained on multi-turn chats from Reddit to identify MBTI types and everyone who tries her says it\'s like she reads your mind LOL. The model can run on an iPhone SE 3 or later or modern Android Phone with at least 4GB of RAM.',
        category: 'AI & Cognitive Architecture',
        tags: ['AI', 'MBTI', 'Cognitive Architecture', 'NLP', 'LLM', 'Reddit'],
        status: 'BETA',
        url: 'https://project-yuli.netlify.app/',
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
                description: 'FREE up to $30,000. (It\'s on Github & HuggingFace lol).',
                badge: 'Open Source'
            },
            {
                plan: 'Commercial License',
                price: '$1,500',
                period: '/ year',
                description: 'Required once you make over $30,000 with it.',
                highlighted: true,
                badge: 'Production'
            },
            {
                plan: 'Enterprise SLA Support',
                price: 'By Request Only',
                description: 'Enterprise SLA Support is By Request Only (Custom Quotes).',
                badge: 'Custom Quotes'
            }
        ],
        highlights: [
            'Trained on multi-turn conversational discourse from Reddit to detect Myers-Briggs (MBTI) cognitive personality types in real time.',
            'Mind-reading conversational dynamics across 4-Sides-of-the-Mind psychological states.',
            'Lightweight edge inference: Runs locally on iPhone SE 3+ or Android with ≥4GB RAM.',
            'Dual open-source codebase for fine-tuning scripts and web user interface.'
        ],
        specs: [
            { label: 'Hardware Minimum', value: 'iPhone SE 3+ / Android ≥4GB RAM' },
            { label: 'Training Corpus', value: 'Multi-turn conversational Reddit chats' },
            { label: 'License Model', value: 'BSL 1.1 (Free under $30,000 revenue)' },
            { label: 'Model Artifacts', value: 'Hugging Face (economyofdreams)' },
            { label: 'Live Deployment', value: 'project-yuli.netlify.app' }
        ],
        architectureNotes: 'Engineered for seamless edge and browser execution. The architecture pairs multi-turn contextual tracking with fast token classification to identify cognitive functions and MBTI types dynamically.'
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
            summary: '100% Free and Open-Source Software (MIT License).'
        },
        pricing: [
            {
                plan: 'Source Code Only',
                price: 'FREE',
                description: 'Source Code Only For FREE.',
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
            'Digital densiometer detecting over 200+ toxins and adulterants in illicit substances.',
            'Computer vision colorimetric reagent testing accessible directly from any mobile browser.',
            'Affordable harm reduction: Free ad-supported scanner or $1 lifetime ad-free pass.',
            'Open-source MIT licensed codebase available on GitHub.'
        ],
        specs: [
            { label: 'Testing Method', value: 'Computer Vision Colorimetric Reagent Analysis' },
            { label: 'Toxin Database', value: '200+ Chemical Profiles & Adulterants' },
            { label: 'License', value: 'MIT License (100% Free & Open Source)' },
            { label: 'Platform', value: 'Mobile Web / Responsive WebApp' }
        ]
    },
    {
        id: 'aevloc',
        title: 'Aevloc',
        tagline: 'Online Reputation Management Firewall',
        description: 'Aevloc is now an Online Reputation Management Firewall. Protects local businesses from damaging public reviews by bifurcating customer sentiment, routing 4-to-5-star ratings to public profiles while intercepting negative feedback privately.',
        category: 'MarTech & Reputation Management',
        tags: ['SaaS', 'Reputation Firewall', 'Local SEO', 'Review Gateway'],
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
            'Reputation firewall intercepting negative ratings before they reach Google or Yelp.',
            'Countertop and doorstep NFC smart cards and QR landing funnels.',
            'Automatic bifurcation: 4-5 stars sent to public review platforms, 1-3 stars routed to private owner feedback form.',
            'Agency multi-tenant mode with sub-accounts and turnkey custom API integrations.'
        ],
        specs: [
            { label: 'Architecture', value: 'Cloud Reputation Gateway + NFC Hardware' },
            { label: 'Target Audience', value: 'Local Service Businesses & Marketing Agencies' },
            { label: 'Integrations', value: 'Google Business Profile, Yelp, Custom APIs' }
        ]
    },
    {
        id: 'alembic-quest',
        title: 'Alembic Quest',
        tagline: 'High-Velocity Canvassing OS & Spatial Territory Radar',
        description: 'A Specialized Field CRM For Door-To-Door Businesses To Track Neighborhood Canvassing, Door Knocks, And Customer Conversion. Alembic Quest is more feature filled than ever. Now you can scrub / skiptrace any address with one click for FREE.',
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
                plan: 'Sole-Proprietors',
                price: 'FREE',
                description: 'FREE for Sole-Proprietors. Now you can scrub / skiptrace any address with one click for FREE.',
                highlighted: true,
                badge: 'Solo Free'
            },
            {
                plan: 'Additional Seats',
                price: '$7',
                period: '/ Month Per Additional Seat',
                description: '$7 Per Month Per Additional Seat.',
                badge: 'Teams'
            },
            {
                plan: 'Residential Skiptrace',
                price: '1¢',
                period: 'per Residential Skiptrace',
                description: '1 cent per Residential Skiptrace.',
                badge: 'Skiptrace'
            }
        ],
        highlights: [
            'High-velocity spatial territory radar for door-to-door and field sales teams.',
            '1-click address scrubbing & property skiptracing built right in.',
            '100% Free for Sole-Proprietors with unlimited individual door knocks.',
            'Scalable $7/month seat model for teams with 1¢ residential skiptraces.'
        ],
        specs: [
            { label: 'Application Type', value: 'Spatial Territory CRM & Field Canvassing Radar' },
            { label: 'Offline Sync', value: 'Local queue with automatic background sync' },
            { label: 'Data Lookups', value: 'Instant property records & contact skiptracing' }
        ]
    },
    {
        id: 'quarkmeme',
        title: 'Quarkmeme',
        tagline: 'Agentic Project OS: FLOSS Alternative To Polsia',
        description: 'Now an Agentic Project OS: FLOSS Alternative To Polsia. Runs multi-agent autonomous teams directly in the browser over local SQLite WASM and OPFS, with zero cloud database bills and zero vendor lock-in.',
        category: 'Autonomous Multi-Agent Systems',
        tags: ['FLOSS', 'Local-First', 'WASM SQLite', 'OPFS', 'Multi-Agent', 'Zero-Cloud'],
        status: 'POC',
        url: 'https://quarkmeme.com',
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
                description: 'FREE Source Code Only.',
                highlighted: true,
                badge: 'FLOSS'
            },
            {
                plan: 'Cloud Sync',
                price: 'COMING SOON',
                period: '@ TBD PRICE',
                description: 'Cloud Sync is COMING SOON @ TBD PRICE.',
                badge: 'Roadmap'
            }
        ],
        highlights: [
            'Agentic Project OS: 100% FLOSS local-first alternative to Polsia.',
            'Runs multi-agent autonomous teams (7-universe crew casting) inside the browser.',
            'Zero cloud database recurring bills with SQLite WASM and Origin Private File System (OPFS).',
            'Full source code available freely under MIT license.'
        ],
        specs: [
            { label: 'License', value: 'MIT License (100% FLOSS)' },
            { label: 'Database Engine', value: 'In-Browser SQLite WASM + OPFS' },
            { label: 'Multi-Agent Architecture', value: '7-Universe Autonomous Crew Casting' },
            { label: 'Cloud Sync', value: 'Coming Soon @ TBD' }
        ]
    },
    {
        id: 'rarestry',
        title: 'Rarestry',
        tagline: 'Deterministic WASM Computer Vision Pokemon Card Grading',
        description: 'Slab Guru is now Rarestry. Deterministic WASM Computer Vision Pokemon Card Grading. High-speed trading card grading and collection tracking powered by in-browser WebAssembly computer vision.',
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
                plan: 'Personal Use',
                price: 'FREE',
                description: 'FREE For Personal Use.',
                highlighted: true,
                badge: 'Free Tier'
            },
            {
                plan: 'Hardware Scanner',
                price: 'COMING SOON',
                period: '@ $15 each',
                description: 'Hardware Scanner is COMING SOON @ $15 each.',
                badge: 'Hardware'
            }
        ],
        highlights: [
            'Deterministic WebAssembly computer vision algorithm for objective card centering and grading.',
            'Instant card valuation and portfolio binder management.',
            '100% Free for personal collection tracking on rarestry.com.',
            'Physical angled auto-shutter capture stand coming soon for $15.'
        ],
        specs: [
            { label: 'Grading Engine', value: 'Deterministic WASM Edge Computer Vision' },
            { label: 'Supported Cards', value: 'Vintage & Modern Pokémon Trading Cards' },
            { label: 'Hardware Stand', value: '$15 Ergonomic Rapid Scanner (Coming Soon)' }
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