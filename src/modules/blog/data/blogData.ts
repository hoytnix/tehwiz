import { BlogPost } from '../types';

export const BLOG_POSTS: BlogPost[] = [
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
  // Support both current slug and legacy hello-world redirect alias
  return BLOG_POSTS.find(
    (post) =>
      post.slug === slug ||
      post.id === slug ||
      (slug === 'hello-world' && post.id === 'it-started-with-goombas')
  );
}
