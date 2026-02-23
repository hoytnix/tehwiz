import { PortfolioItem } from '../types';

const transformToTitleCase = (str: string): string => {
    return str.replace(/\b\w/g, (char) => char.toUpperCase());
};

export const MOCK_PROJECTS: PortfolioItem[] = [
    {
        id: '0',
        title: 'Alembic Quest',
        url: 'https://alembic.quest',
        description: 'A Specialized Field CRM For Door-To-Door Businesses To Track Neighborhood Canvassing, Door Knocks, And Customer Conversion. Niche Is Configurable.',
        status: 'MVP'
    },
    {
        id: '1',
        title: 'Projects',
        url: 'https://projects.tehwiz.com',
        description: 'Free Trello Alternative. Streamlined Project Management For The Chaotic Mind.',
        status: 'MVP'
    },
    {
        id: '2',
        title: 'Cherry SunDays',
        url: 'https://cherrysundays.com',
        description: 'Custom Window Replacement POS. Modernizing Legacy Industries One Pane At A Time.',
        status: 'MVP'
    },
    {
        id: '3',
        title: 'Hibiscus Wireless',
        url: 'https://hibiscuswireless.com',
        description: 'Earn Unlimited Global 5G E-Sim Data By Training AI. Connectivity Without Borders.',
        status: 'PRE-ALPHA'
    },
    {
        id: '4',
        title: 'SnowMore Work',
        url: 'https://snowmore.work',
        description: 'Snow Shoveling Pricing Calculator.',
        status: 'MVP'
    },
    {
        id: '5',
        title: 'Quarkmeme',
        url: 'https://quarkmeme.com',
        description: 'Peer-To-Peer AI Agent Marketplace.',
        status: 'POC'
    },
    {
        id: '6',
        title: 'Purple Canary',
        url: 'https://purplecanarylab.com',
        description: 'Digital Densiometer: Detects Over 200+ Toxins In Any Illicit Substance... $1 Harm Reduction Drug Tests!',
        status: 'PRE-ALPHA'
    },
    {
        id: '7',
        title: 'Ramen Nights & Budget Bites',
        url: 'https://ramen.tehwiz.com',
        description: '8-Bit JRPG Style Idle Clicker Ramen Tycoon Game. Slurp Your Way To The Top.',
        status: 'PRE-ALPHA'
    },
    {
        id: '8',
        title: 'Pocket Mon$tar$$$',
        url: 'https://pokemans.tehwiz.com',
        description: 'Pokemon-Themed Idle Clicker Game. Gotta Click \'Em All.',
        status: 'MVP'
    },
    {
        id: '9',
        title: 'Aevloc',
        url: 'https://aevloc.com',
        description: 'A Super Smart Digital Accountant For Real Estate Investors.',
        status: 'POC'
    },
    {
        id: '10',
        title: 'Michael Scott Homes',
        url: 'https://michaelscott.homes',
        description: 'Modern Home Improvement Lead Magnet / Calculator & CRM. That\'s What She Said.',
        status: 'ALPHA'
    },
    {
        id: '11',
        title: 'Alchememe',
        url: 'https://alchememe.com',
        description: 'AI That Makes Apps For The 99% Who Don\'t Know How To Code.',
        status: 'POC'
    }
];