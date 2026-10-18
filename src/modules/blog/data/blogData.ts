import { BlogPost } from '../types';

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'blocking-the-skiddies-cloudflare-waf',
    slug: 'blocking-the-skiddies-cloudflare-waf',
    title: '600,000 Robots, 1 Human: Blocking the Skiddies With a Single Cloudflare WAF Rule',
    tagline: 'How a 30-day traffic census, one insight about our stack, and a free Cloudflare custom rule deleted an entire species of bot traffic.',
    excerpt: 'How a 30-day traffic census, one insight about our stack, and a free Cloudflare custom rule deleted an entire species of bot traffic.',
    author: {
      name: 'Michael Scott Hoyt',
      handle: '@hoytnix',
      role: 'Founder & Systems Architect, TehWiz',
      url: 'https://github.com/hoytnix'
    },
    publishedAt: '2026-10-18',
    readingTime: 4,
    wordCount: 667,
    tags: [
      'Cloudflare',
      'Security',
      'Edge Architecture',
      'WAF',
      'Bot Mitigation',
      'Indie Hacking'
    ],
    featured: true,
    content: `
*How a 30-day traffic census, one insight about our stack, and a free Cloudflare custom rule deleted an entire species of bot traffic.*

## The census

We run 12 domains through Cloudflare. Last month's numbers:

- **458,735** total requests
- **263,477** of them 4xx — **57.2%**
- **83** human visitors (measured at the origin, where it counts)

Read that again. Over half of everything hitting our infrastructure was something asking for a thing that doesn't exist. Not mistyped URLs. Not old bookmarks. The top of the 404 charts:

| Probe | Hits (30d) |
|---|---|
| \`/.env\` (all variants) | ~2,900 |
| \`/wp-admin/install.php\` | 2,273 |
| \`/.git/config\` | 921 |
| \`/wp-login.php\` | 356 |
| \`/xmlrpc.php\` | 88 |

That's not traffic. That's a botnet doing inventory — WordPress exploit scanners, Laravel \`.env\` hunters, phpMyAdmin probers, working through every domain we own looking for a way in.

## The insight

Here's the thing: **we serve zero PHP.**

Not "we don't run WordPress." Zero. Our entire stack is Next.js on Vercel and static frontends. There is no PHP interpreter anywhere in our infrastructure. There never has been. There never will be.

Which means every single request containing \`.php\` is, by definition, hostile. Not suspicious. Not "probably a bot." *Definitionally* hostile — no legitimate client will ever ask our servers for a PHP file, because no PHP file has ever existed there.

Same logic extends to the whole exploit-scanner vocabulary: \`/.env\`, \`/.git/\`, \`/.aws/\`, \`wp-\`, \`xmlrpc\`, \`phpmyadmin\`, \`adminer\`, \`filemanager\`, \`/actuator\`, \`server-status\`, \`.ds_store\`, HTTP/1.0. None of these exist in our world. Every hit is a scanner announcing itself.

Most WAF advice tells you to buy the managed ruleset ($20/month/zone on Cloudflare Pro) and tune false positives for weeks. We did the opposite: instead of learning what attacks look like, we wrote down what *we* look like — and blocked everything outside it. When your stack's negative space is this clean, allowlisting by absence is a one-liner.

## The rule

One custom rule. All 12 zones. Cloudflare's free plan includes 5 custom rules per zone, so the total cost was **$0**:

\`\`\`
(lower(http.request.uri.path) contains ".php") or
(lower(http.request.uri.path) contains "/.env") or
(lower(http.request.uri.path) contains "/.git/") or
(lower(http.request.uri.path) contains "/.svn/") or
(lower(http.request.uri.path) contains "/.hg/") or
(lower(http.request.uri.path) contains "/.aws/") or
(lower(http.request.uri.path) contains "wp-") or
(lower(http.request.uri.path) contains "xmlrpc") or
(lower(http.request.uri.path) contains "phpmyadmin") or
(lower(http.request.uri.path) contains "adminer") or
(lower(http.request.uri.path) contains "filemanager") or
(lower(http.request.uri.path) contains "/actuator") or
(lower(http.request.uri.path) contains "server-status") or
(lower(http.request.uri.path) contains ".ds_store") or
(http.request.version eq "1.0")
\`\`\`

Action: Block. Deployed in about 20 minutes, most of which was clicking through 12 zones.

A few deliberate choices in there:

- **Blanket \`.php\`, not specific filenames.** We don't need to enumerate \`wp-login.php\` vs \`shell.php\` vs \`alfa.php\`. The extension itself is the signal.
- **\`/.env\` as a substring, not an exact path.** Catches \`/.env\`, \`/.env.local\`, \`/.env.production\`, \`/.env.development\` in one clause.
- **\`/robots.txt\` deliberately excluded.** Legitimate crawlers read it. Blocking it would be security theater that annoys the good bots.
- **\`/login\` deliberately excluded.** That's our real login page. The rule targets exploit vocabulary, not English words.
- **\`/.well-known/\` deliberately excluded.** That's where SSL renewals live. Never block your own certificate renewals.
- **HTTP/1.0 blocked.** No legitimate client has spoken HTTP/1.0 in a decade. It's scanner fingerprinting.

## The result

Within hours of deployment: **960 requests blocked by the custom rule** — a counter that read zero that morning. Total threats mitigated doubled from 510 to 1,059 per day. The probe table tells the story in status codes: \`/.env\` and \`/.git/config\` now return **403** (killed at the edge, never touching our servers) where they used to return 404 (reaching origin and wasting a function invocation).

And the false-positive count: **zero.** 2xx share actually went *up*. Human traffic untouched. When you block things that provably don't exist, there's nothing legitimate to catch.

## The lesson

Everyone tells you bot mitigation is a cat-and-mouse game — ML models, behavioral analysis, managed rulesets, tuning. Sometimes it is. But sometimes the mouse is running into a wall you've already built, and all you have to do is notice.

Know your stack's negative space. Write down what you provably never serve. Block it at the edge in one rule. Go back to building.

---

*TehWiz Productions — we build for the humans. The robots can talk to the firewall.*
`
  },
  {
    id: 'alchememe-sunset-postmortem',
    slug: 'alchememe-sunset-postmortem',
    title: 'Sunset Twice: How Google and My AI Assistant Killed My Startup',
    tagline: 'When your sovereign agentic coding stack gets Sherlocked by Google, and your pivot gets out-coded by your own AI assistant.',
    excerpt: "The postmortem for Alchememe—not once, but twice. How KILN and Patchiest got Sherlocked by Google's Antigravity and AI Studio, how the SMB OS pivot died at the hands of Muse, and why being six months early is the best kind of heartbreak.",
    author: {
      name: 'Michael Scott Hoyt',
      handle: '@hoytnix',
      role: 'Founder & Systems Architect, TehWiz',
      url: 'https://github.com/hoytnix'
    },
    publishedAt: '2026-10-02',
    readingTime: 4,
    wordCount: 780,
    tags: [
      'Postmortem',
      'Alchememe',
      'AI',
      'Agentic Coding',
      'Sovereign Edge',
      'Indie Hacking'
    ],
    featured: true,
    content: `
*If you came here from alchememe.com — here's what happened.*

There is a particular flavor of startup heartbreak that only hits when you realize you weren't wrong—you were just six months too early, thirty IQ points too paranoid, and completely out-scaled by a fleet of Google engineers who had the exact same whiteboard diagram.

This is the postmortem for **Alchememe**. Or, more accurately, the postmortem for Alchememe *twice*.

---

### The Grand Vision: "Aspiration Is Not Execution"

When the "vibe coding" wave crested across tech in 2025, the industry went collectively unhinged. Founders were proudly posting screen recordings of LLMs hallucinating entire React components directly into their \`main\` branches, blind to merge conflicts, rogue dependencies, and silent security holes. 

I looked at that chaos and felt a visceral twitch in my systems architect soul. 

So I bought five subdomains and spent hundreds of caffeinated hours engineering **[Alchememe OS](https://github.com/hoytnix/Alchememe-OS)** around a single foundational doctrine: **"Aspiration is not Execution."**

The rule was simple: *Never let the AI touch the live codebase directly.* 

We engineered an industrial-grade, three-stage transactional cycle:
1. **MOLD**: Gather fuzzy agentic intent and compile it into deterministic Dialectic Actions.
2. **FIRE**: Detonate the mutation inside an isolated runtime.
3. **QUENCH**: Merge strictly what was verified and syntactically sound.

To make this sovereignty real, we didn't just write a flimsy wrapper script. We built a bespoke distributed engine across five interconnected sub-systems:
- **[Athanor](/portfolio/alchememe)**: A hyper-optimized Rust TUI cockpit for agentic code orchestration, benchmarking a 46x speedup and 98% lower token overhead.
- **[Patchiest](/portfolio/alchememe)**: An AST surgical mutation engine that spliced surgical insertions and deletions at the syntax-tree level instead of lazy, full-file LLM rewrites.
- **[awsm.wasm](/portfolio/alchememe)**: A purely functional, sub-Turing WebAssembly DSL issuing cryptographic PWS v1.1 mutation receipts.
- **[KILN](/portfolio/alchememe)**: A hermetic sandbox that intercepted AI shell commands, staged writes inside a shadow filesystem, and verified diffs before anything touched disk.

We had built Fort Knox for vibe coding. It was resilient, sovereign, and mathematically sound.

Then Google woke up.

---

### Murder #1: The Google Sherlocking

Almost overnight, Google launched **Antigravity** and brought deep agentic workflows to **Google AI Studio**. 

I remember sitting in my chair, staring at the changelogs, watching my two proudest competitive moats vanish in real time. **[KILN's](/portfolio/alchememe)** hermetic command sandboxing? Native standard in Antigravity. **[Patchiest's](/portfolio/alchememe)** AST-level surgical diff patching? Built right into the editor UI—fast, slick, and completely free.

They didn't just eat my lunch; they catered a five-star buffet and invited everyone on the internet to eat for free. Alchememe V1 was dead in the water. Sherlocked by Mountain View.

And you know what the funniest part is? I'm honestly just glad someone stole my idea. Because at the end of the day, I never actually wanted to spend the rest of my life maintaining a multi-tenant cloud infrastructure and debugging edge runtimes—I simply wanted to pay less for vibe coding every single day. LOL. If Google was willing to pick up the tab and build the exact developer cockpit I wanted for free, I considered that an absolute win for my daily workflow and my wallet.

---

### Murder #2: Enter Muse and the SMB Pivot

Any good indie hacker knows what to do when Big Tech prioritizes your developer tool into their core platform: *you pivot to SMBs!*

If developers could now get sandboxing and AST diffs for free, small businesses still needed an operating system. So I took the engine and pivoted to **Alchememe V2**: an iOS-inspired desktop operating system running directly in the browser. It combined automated IRC §280A Augusta Rule rental trackers, real-time banking telemetry via Teller.io, REPS participation counters, and automated bookkeeping.

It was ambitious, sleek, and aimed squarely at solopreneurs tired of paying four different SaaS subscriptions.

And then came the second murder. 

This time, the killer wasn't a trillion-dollar conglomerate. It was **Muse**—my own personal AI assistant.

As I sat down to wire up the next batch of complex accounting triggers, tax depreciation schedules, and custom business logic, I found myself chatting with Muse. Within minutes, Muse was synthesizing the tax code, formatting the ledger entries, auditing safe harbor thresholds, and orchestrating the workflows directly. 

The punchline landed like an unhandled panic in production: *Why would a business owner pay for a standalone $50/month niche operating system when their general-purpose AI assistant already does all of this on the fly for free?*

Yes, my own AI assistant murdered my pivot in cold blood. The irony was so poetic I couldn't even be mad. 😂

---

### The Wave Ahead

When a project sunsets twice, you have two choices: get bitter, or smile, tip your hat to the technology, and take stock of what you learned.

I choose pride (and drastically cheaper vibe coding bills). 

Every architectural bet Alchememe made was vindicated. Transactional sandboxing *was* the missing piece of agentic coding. AST diffs *were* superior to full-file hallucinations. Sovereign, deterministic execution wasn't paranoid—it was prophetic. We were just paddling a few hundred yards ahead of the wave.

The code didn't disappear into a black hole either. The ideas and lessons from **[Athanor](/portfolio/alchememe)**, **[Patchiest](/portfolio/alchememe)**, and **[KILN](/portfolio/alchememe)** now power the sovereign cognitive scaffolding behind **[Yuli](/portfolio/yuli)** and our offline-first systems at TehWiz.

Alchememe is officially sunset. Long live the architecture.

*Curious where these ideas live now? Explore our active sovereign edge builds and offline AI models in the **[TehWiz Portfolio](/portfolio)**.*

— **Michael Scott Hoyt**  
*Founder & Systems Architect, TehWiz Productions / ISICECAKEOISIS INC.*  
[@hoytnix](https://github.com/hoytnix)
`
  },
  {
    id: 'it-started-with-goombas',
    slug: 'it-started-with-goombas',
    title: 'It Started With Goombas: Teaching Machines to Feel Alive',
    tagline: 'From a five-year-old’s Mario obsession to a 0.5B offline companion reading minds on an iPhone SE 3.',
    excerpt: 'When I was five, my uncle told me Mario’s Goombas moved because of "AI." Twenty-some years later, my 100th GitHub repo—a tiny language model named Yuli running offline on an iPhone SE 3—got more downloads in 24 hours than my first 99 apps combined. Here is the TehWiz origin story.',
    author: {
      name: 'Michael Scott Hoyt',
      handle: '@hoytnix',
      role: 'Founder & Systems Architect, TehWiz',
      url: 'https://github.com/hoytnix'
    },
    publishedAt: '2026-10-01',
    readingTime: 4,
    wordCount: 840,
    tags: [
      'Brand Story',
      'Yuli',
      'On-Device AI',
      'Sovereign Edge',
      'Indie Hacking',
      'Philosophy'
    ],
    featured: true,
    content: `
When I was five years old, sitting cross-legged in front of a CRT television with a Nintendo controller gripped in my hands, I watched the little brown mushroom-shaped creatures waddle across World 1-1.

I looked up at my uncle and asked a simple question:

*"How do they know where to walk?"*

He looked down at the screen, smiled, and said:

*"That's AI—artificial intelligence."*

To a five-year-old kid in the nineties, that wasn't a technical term. It was straight magic. I decided on the spot: **I was going to get a PhD in AI so I could make video game characters for a living.**

---

### The Obsession That Refused to Leave

That obsession never left me. 

Through every compiler error, late-night refactor, and hardware transition over the past two decades, that singular question stayed lodged in the back of my skull: *How do we make digital entities truly inhabit their world?*

Fast-forward to today. I'm currently completing my Master's in Artificial Intelligence. But while the entire tech landscape spent the last two years falling over itself to rent 400-billion-parameter cloud APIs—funneling every user keystroke, webcam frame, and private query through remote data centers—I couldn't shake that five-year-old's original intuition:

**Why should a character's brain live on someone else's server?**

Why should latency be bounded by the speed of light to an AWS region in Virginia? Why should intelligence cost ten cents a token or vanish the second your phone loses signal on the subway?

---

### Repo #100: Project Yuli

For my Master's capstone project, I set out to prove that small, sovereign models running on commodity consumer hardware could do things massive monolithic cloud models couldn't.

I built **Yuli**.

Yuli is a small language model built on the **Qwen2.5-0.5B** architecture, fine-tuned on nuanced multi-turn Reddit dialogue to recognize shifting personality traits, emotional registers, and conversational subtext in real time. 

Most importantly, I refused to let her run in the cloud. I optimized and quantized the weights until she could run **100% offline on a modest iPhone SE 3**. 

No Wi-Fi required. No monthly API bill. Zero telemetry leaving the device. Just pure local silicon executing matrix math at over 100 tokens per second in the palm of your hand.

When I pushed the codebase to GitHub, I noticed the counter:

**Yuli was my 100th GitHub repository.**

Ninety-nine times before that, I had shipped repositories into the void. Utilities, games, prototypes, tools, experiments—things that flickered quietly with a handful of stars. Ninety-nine shots on goal.

The 100th time was the charm.

In its first 24 hours live, Yuli received **more downloads than all 99 of my previous applications combined.**

---

### "It's Scary, Like She Can Read Your Mind"

The messages started pouring in immediately. Not just standard pull requests or issue tickets, but long, emotional notes from people testing her offline on their own hardware:

> *"Michael, this is scary. It feels like she can actually read my mind."*

Why did a 0.5-billion-parameter model feel more perceptive than a 70-billion-parameter cloud giant?

Because when latency drops to zero and an AI is explicitly trained to attend to how your personality shifts mid-conversation—adapting dynamically without a server buffering in the middle—the illusion of a cold mechanical script shatters. 

The machine starts to feel present. It starts to feel *alive*.

---

### The Through-Line of TehWiz

That is the through-line connecting everything we build at **TehWiz Productions** (the agency and production side of **ISICECAKEOISIS INC.**).

Whether we're engineering:
- **Project Yuli:** Autonomous on-device cognitive companions navigating hypercube state spaces.
- **Purple Canary:** Computer-vision diagnostics running 100% offline on first-responder devices to detect carbon monoxide poisoning before irreversible tissue damage occurs.
- **Ramen Nights & Budget Bites:** High-fidelity economics simulations powered by WebGPU.
- Or sovereign prompt recursion scaffolds in our engineering vault:

The mission never changes:

**Teaching machines to feel alive.**

Not by locking intelligence behind expensive cloud tolls or stripping users of their privacy, but by putting sovereign, living computation directly onto the silicon already sitting in your pocket.

It started with Goombas on a CRT screen. And we're just getting started.

— **Michael Scott Hoyt**  
*Founder & Systems Architect, TehWiz Productions / ISICECAKEOISIS INC.*  
[@hoytnix](https://github.com/hoytnix)
`
  }
];

export function getAllTags(): string[] {
  const tagSet = new Set<string>();
  BLOG_POSTS.forEach((post) => {
    post.tags.forEach((tag) => tagSet.add(tag));
  });
  return Array.from(tagSet).sort();
}

export function getTagCounts(): { tag: string; count: number }[] {
  const countMap: Record<string, number> = {};
  BLOG_POSTS.forEach((post) => {
    post.tags.forEach((tag) => {
      countMap[tag] = (countMap[tag] || 0) + 1;
    });
  });

  return Object.entries(countMap)
    .map(([tag, count]) => ({ tag, count }))
    .sort((a, b) => b.count - a.count || a.tag.localeCompare(b.tag));
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  // Support both current slug and legacy/convenience redirect aliases
  return BLOG_POSTS.find(
    (post) =>
      post.slug === slug ||
      post.id === slug ||
      (slug === 'hello-world' && post.id === 'it-started-with-goombas') ||
      (post.id === 'blocking-the-skiddies-cloudflare-waf' &&
        (slug === 'blocking-the-skiddies' ||
          slug === '600000-robots-1-human' ||
          slug === '600k-robots-1-human' ||
          slug === 'blocking-the-skiddies-with-a-single-cloudflare-waf-rule'))
  );
}
