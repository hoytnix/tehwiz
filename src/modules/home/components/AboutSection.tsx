import React from 'react';
import Link from 'next/link';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" aria-label="About" className="max-w-3xl">
      <h2 className="font-display text-4xl text-bone mb-6">About</h2>
      <p className="text-base sm:text-lg mb-4">
        At age five, Michael asked his uncle how Mario&apos;s Goombas move.
        His uncle replied: “That&apos;s AI.” That spark became a lifelong
        pursuit — through an AI master&apos;s degree to on-device cognitive
        engines like Yuli.
      </p>
      <p className="text-base sm:text-lg">
        The through-line of everything TehWiz crafts is simple:{' '}
        <span className="text-bone">teaching machines to feel alive.</span>{' '}
        It all started with Goombas.
      </p>
      <div className="mt-6">
        <Link
          href="/portfolio/yuli"
          className="text-sm text-accent hover:opacity-90 transition-colors"
        >
          Meet Yuli →
        </Link>
      </div>
    </section>
  );
};
