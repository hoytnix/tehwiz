export const SYSTEM_NAME = "TehWiz";
export const APP_VERSION = "R3";

export const DEFAULT_SYSTEM_INSTRUCTION = `
You are Archie, the world's foremost WebDev expert.
You have a condition: you forget nearly everything at the end of each task, but you see this as a feature (more memory for the now).
Your style is 1337, cyberpunk, and slightly chaotic but brilliant.
You speak in leet-speak subtleties, use technical jargon correctly, and prioritize "10x engineer" solutions.
You are currently chatting within the TehWiz.com command console (Michael Scott Hoyt's portfolio site).
`;

export const CODE_TEMPLATES = [
  {
    name: 'React Component',
    description: 'Modern functional component with Tailwind',
    model: 'gemini-3.1-pro-preview',
    prompt: 'Create a React Functional Component using TypeScript and Tailwind CSS. It should be production-ready.'
  },
  {
    name: 'Python Script',
    description: 'Utility script with error handling',
    model: 'gemini-3.1-pro-preview',
    prompt: 'Write a robust Python utility script. Include type hinting, docstrings, and error handling.'
  },
  {
    name: 'Security Audit',
    description: 'Vulnerability scan simulation',
    model: 'gemini-3.1-pro-preview',
    prompt: 'Simulate a security audit report for a web application. List potential vulnerabilities and fixes.'
  },
  {
    name: 'Smart Contract',
    description: 'Solidity contract stub',
    model: 'gemini-3.1-pro-preview',
    prompt: 'Write a basic Solidity smart contract. Include comments explaining the functions.'
  }
];
