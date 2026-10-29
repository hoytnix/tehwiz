'use client';

import React, { useState } from 'react';

/** Marker placed on its own line in a post's markdown where the button renders. */
export const CONTACT_EMAIL_BUTTON_MARKER = '[[CONTACT_EMAIL_BUTTON]]';

// The contact address is stored only as character codes in a shuffled order,
// plus an index map that restores the original order. There is no plain-text
// address, link, or trivially reversed string anywhere in the source.
// Decoding happens only inside the click handler below — never on render,
// never on hover/focus, and never on mount. This keeps page source free of
// anything a naive scraper can harvest. Anyone reading this code can still
// decode it, and that is expected.
const SHUFFLED_CODES = [101, 109, 111, 101, 105, 46, 105, 109, 64, 104, 99, 107, 122, 116, 119];
const CODE_ORDER = [6, 0, 13, 3, 9, 11, 1, 14, 4, 7, 12, 2, 10, 5, 8];

// The link scheme as codes in reverse, so the source contains no readable
// scheme text either. Reversed back only here at click time.
const SCHEME_CODES_REVERSED = [58, 111, 116, 108, 105, 97, 109];

function decodeContact(): { address: string; scheme: string } {
  const chars: string[] = new Array(CODE_ORDER.length);
  for (let k = 0; k < CODE_ORDER.length; k++) {
    chars[CODE_ORDER[k]] = String.fromCharCode(SHUFFLED_CODES[k]);
  }
  const schemeChars: string[] = [];
  for (let k = SCHEME_CODES_REVERSED.length - 1; k >= 0; k--) {
    schemeChars.push(String.fromCharCode(SCHEME_CODES_REVERSED[k]));
  }
  return { address: chars.join(''), scheme: schemeChars.join('') };
}

export const RevealEmailButton: React.FC = () => {
  const [contact, setContact] = useState<{ address: string; scheme: string } | null>(null);

  if (contact) {
    return (
      <div className="my-6 flex justify-center">
        <a
          href={`${contact.scheme}${contact.address}`}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-cyan-500/40 bg-cyan-950/40 text-cyan-200 font-mono text-sm sm:text-base hover:border-cyan-400 hover:text-white transition-colors"
        >
          <span className="material-icons text-base">mail</span>
          {contact.address}
        </a>
      </div>
    );
  }

  return (
    <div className="my-6 flex justify-center">
      <button
        type="button"
        aria-label="Reveal contact email address"
        onClick={() => setContact(decodeContact())}
        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-cyan-500/30 bg-transparent text-cyan-300 font-mono text-sm hover:border-cyan-400/70 hover:text-cyan-100 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#070b12]"
      >
        <span className="material-icons text-base" aria-hidden="true">mail</span>
        Reveal contact email
      </button>
    </div>
  );
};
