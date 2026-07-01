export interface ComparisonRow {
  feature: string;
  optionA: string;
  optionB: string;
}

export interface ComparisonPage {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  imageAlt: string;
  date: string;
  optionA: string;
  optionB: string;
  summary: string;
  table: ComparisonRow[];
  decisionRules: { scenario: string; recommendation: string }[];
  limitations: string[];
  sources: { label: string; url: string }[];
  relatedServices: { name: string; href: string }[];
}

export const comparisons: ComparisonPage[] = [
  {
    slug: 'custom-software-vs-saas',
    title: 'Custom Software vs SaaS: Which One Should You Choose?',
    excerpt: 'Should you build custom software or buy a SaaS subscription? Compare costs, control, timeline, and scalability to decide which approach fits your business.',
    image: 'https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=800&q=80&auto=format&fit=crop',
    imageAlt: 'Decision between custom software development and SaaS subscription models for business applications.',
    date: '2026-07-01',
    optionA: 'Custom Software',
    optionB: 'SaaS / Off-the-Shelf',
    summary:
      'Custom software gives you full control over features, data, and roadmap but requires upfront investment and ongoing maintenance. SaaS offers faster deployment and predictable pricing but limits customisation and creates data dependency on the vendor. The right choice depends on how unique your processes are and whether you need the software as a competitive differentiator.',
    table: [
      { feature: 'Time to launch', optionA: '3–9 months', optionB: 'Days to weeks' },
      { feature: 'Upfront cost', optionA: '£20k–£150k+', optionB: 'Monthly subscription (£10–£500/user)' },
      { feature: 'Customisation', optionA: 'Complete — built to your process', optionB: 'Limited to vendor settings and API scope' },
      { feature: 'Data ownership', optionA: 'You control all data and hosting', optionB: 'Vendor holds data; export may be restricted' },
      { feature: 'Feature roadmap', optionA: 'You decide what to build next', optionB: 'Vendor decides; you can request but not control' },
      { feature: 'Integration depth', optionA: 'Any system, any protocol', optionB: 'Pre-built integrations only, plus what API allows' },
      { feature: 'Maintenance', optionA: 'Your team or contractor manages', optionB: 'Vendor handles uptime, updates, and security' },
      { feature: 'Scaling cost', optionA: 'Linear — pay for infrastructure you use', optionB: 'Per-user or per-tier; can spike at scale' },
      { feature: 'Lock-in risk', optionA: 'Low — you own the code and data', optionB: 'High — switching means migrating data and retraining' },
      { feature: 'Competitive edge', optionA: 'Unique to your business model', optionB: 'Same as every competitor using the same tool' },
    ],
    decisionRules: [
      { scenario: 'Your core business process is unique and gives you an advantage', recommendation: 'Custom software — SaaS will force you to adapt your process to the tool.' },
      { scenario: 'You need a solution operational this quarter', recommendation: 'SaaS — custom development timelines will not meet your deadline.' },
      { scenario: 'The software is a support function, not a differentiator', recommendation: 'SaaS — payroll, email marketing, and standard CRM are well served by off-the-shelf tools.' },
      { scenario: 'You handle sensitive customer data with strict compliance requirements', recommendation: 'Custom software — you need full control over data residency, encryption, and access logs.' },
      { scenario: 'Your team size or processes change frequently', recommendation: 'Custom software — you can adapt the system without waiting for a vendor to release updates.' },
    ],
    limitations: [
      'Custom software requires technical leadership — either internal or contracted — to guide architecture decisions and avoid costly rework.',
      'SaaS can become more expensive than custom at scale if per-user pricing grows faster than your team.',
      'A poorly scoped custom project can exceed budget if requirements are not clearly defined upfront.',
      'Some SaaS tools offer genuinely excellent functionality that would be expensive to replicate — always evaluate before deciding to build.',
    ],
    sources: [
      { label: 'NIST Guide to the Software Life Cycle', url: 'https://csrc.nist.gov/publications/detail/sp/800-64/rev-2/final' },
      { label: 'AWS Cloud Economics Centre — build vs buy analysis', url: 'https://aws.amazon.com/economics/' },
    ],
    relatedServices: [
      { name: 'Custom Software Development', href: '/services/software-development' },
      { name: 'IT Consulting & IT Services', href: '/services/it-consulting-it-services' },
    ],
  },
  {
    slug: 'native-vs-cross-platform-apps',
    title: 'Native vs Cross-Platform Apps: Which Approach Fits Your Project?',
    excerpt: 'Should you build native iOS and Android apps separately or use a cross-platform framework like Flutter or React Native? Compare performance, cost, and maintenance.',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80&auto=format&fit=crop',
    imageAlt: 'Comparison of native mobile app development versus cross-platform frameworks like Flutter and React Native.',
    date: '2026-07-01',
    optionA: 'Native Apps',
    optionB: 'Cross-Platform (Flutter / React Native)',
    summary:
      'Native apps deliver the best platform-specific performance and access to the latest device features but require separate codebases for iOS and Android. Cross-platform frameworks let you share most code between platforms, reducing development time and cost, but can lag behind new OS features and may require native modules for platform-specific functionality.',
    table: [
      { feature: 'Code reuse across platforms', optionA: 'None — separate iOS (Swift) and Android (Kotlin) codebases', optionB: '80–95% shared code; platform-specific code for native features' },
      { feature: 'Performance', optionA: 'Best — direct use of platform APIs and hardware', optionB: 'Near-native for most use cases; may lag for animation-heavy or GPU-intensive apps' },
      { feature: 'Development cost', optionA: '2x (two separate teams or sequential builds)', optionB: '~1.3–1.5x a single platform, depending on native module needs' },
      { feature: 'Time to market', optionA: 'Build and launch each platform sequentially', optionB: 'Both platforms can launch together' },
      { feature: 'Access to new OS features', optionA: 'Immediate — available on release day', optionB: 'Delayed — framework team must add support first' },
      { feature: 'UI look and feel', optionA: 'Native platform components; users expect the experience', optionB: 'Custom rendered; can mimic but not perfectly match platform conventions' },
      { feature: 'Third-party library support', optionA: 'Extensive — mature ecosystems for both platforms', optionB: 'Growing — most popular libraries available; niche ones may need native wrappers' },
      { feature: 'Maintenance', optionA: 'Two codebases to update for OS changes', optionB: 'One codebase; framework handles OS compatibility' },
      { feature: 'App Store and Google Play compliance', optionA: 'Managed per platform', optionB: 'Shared logic; platform-specific review for native modules' },
    ],
    decisionRules: [
      { scenario: 'Your app relies on heavy animations, AR, or real-time video processing', recommendation: 'Native — you need direct access to GPU and platform rendering pipelines.' },
      { scenario: 'You need to launch on both platforms with a limited budget', recommendation: 'Cross-platform — Flutter or React Native will get you to market faster with one team.' },
      { scenario: 'Your app is a simple data-entry or list-and-detail interface', recommendation: 'Cross-platform — the performance difference is negligible for standard UI patterns.' },
      { scenario: 'You want to be first to market with a new OS feature like Apple Vision Pro APIs', recommendation: 'Native — cross-platform frameworks will not support new platform APIs for months.' },
      { scenario: 'You have separate iOS and Android teams already', recommendation: 'Native — using their existing skills avoids the cross-platform learning curve.' },
    ],
    limitations: [
      'Cross-platform apps can feel slightly less responsive than native, especially on low-end devices or complex screens.',
      'Native development costs roughly double but gives you full platform flexibility and the best possible user experience.',
      'Flutter and React Native are mature but their ecosystems are smaller than native SDKs — some niche features require custom native module development.',
      'If you plan to add platform-specific features later, starting cross-platform may require significant refactoring.',
    ],
    sources: [
      { label: 'Flutter documentation — platform-specific code', url: 'https://docs.flutter.dev/platform-integration' },
      { label: 'React Native documentation — native modules', url: 'https://reactnative.dev/docs/native-modules-setup' },
    ],
    relatedServices: [
      { name: 'Mobile App Development', href: '/services/mobile-app-development' },
      { name: 'Cross-Platform Apps', href: '/services/mobile-app-development/cross-platform-apps' },
    ],
  },
  {
    slug: 'automation-platform-vs-custom-workflow',
    title: 'Automation Platform vs Custom Workflow: Build or Buy Your Automation?',
    excerpt: 'Should you use Zapier, Make, or n8n for automation, or build custom Python scripts and API integrations? Compare flexibility, cost, and maintainability.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80&auto=format&fit=crop',
    imageAlt: 'Decision between using automation platforms like Zapier and n8n versus building custom automation workflows.',
    date: '2026-07-01',
    optionA: 'Automation Platform (Zapier / Make / n8n)',
    optionB: 'Custom Workflow (Python / Node.js / Scripts)',
    summary:
      'Automation platforms let you connect tools quickly with visual interfaces and pre-built connectors, ideal for standard integrations. Custom workflows give you complete control over logic, error handling, and data transformation, but require development effort. The choice depends on the complexity of your integration and whether off-the-shelf connectors serve your use case.',
    table: [
      { feature: 'Setup time', optionA: 'Hours to days — visual builder drag-and-drop', optionB: 'Days to weeks — requires coding and testing' },
      { feature: 'Pre-built connectors', optionA: '1,000+ for common SaaS tools', optionB: 'None — you integrate each API from scratch' },
      { feature: 'Custom logic', optionA: 'Limited to platform constraints and template steps', optionB: 'Unlimited — you write the logic exactly as needed' },
      { feature: 'Error handling', optionA: 'Basic retry and notification templates', optionB: 'Custom retry logic, fallback branches, alert routing, and compensation transactions' },
      { feature: 'Data transformation', optionA: 'Simple mapping and formatting steps', optionB: 'Full control — regex, conditionals, lookups, joins' },
      { feature: 'Cost at scale', optionA: 'Per-task or per-operation pricing; can grow quickly', optionB: 'Your infrastructure cost only (server + compute time)' },
      { feature: 'Hosting and data residency', optionA: 'Vendor-hosted — data passes through their servers', optionB: 'Self-hosted — data stays on your own infrastructure' },
      { feature: 'Debugging and logging', optionA: 'Platform-provided run logs and history', optionB: 'Full logging, monitoring, and alerting — you define what to track' },
      { feature: 'Maintenance', optionA: 'Platform vendor handles API updates for supported connectors', optionB: 'You maintain each API integration; must update when APIs change' },
      { feature: 'Team skill required', optionA: 'Non-technical staff can build basic workflows', optionB: 'Developer needed for initial build and ongoing maintenance' },
    ],
    decisionRules: [
      { scenario: 'You need to connect two common SaaS tools with standard data mapping', recommendation: 'Automation platform — Zapier or Make will have a ready connector and do the job in hours.' },
      { scenario: 'Your integration involves complex conditional logic, data transformation, or multiple API calls', recommendation: 'Custom workflow — you will hit platform limitations quickly and spend more time working around them.' },
      { scenario: 'You handle sensitive data and need to control where it is processed and stored', recommendation: 'Custom workflow — self-hosted n8n or Python scripts keep data on your infrastructure.' },
      { scenario: 'You expect high transaction volumes (10,000+ operations per month)', recommendation: 'Custom workflow — platform per-operation pricing will exceed infrastructure cost at scale.' },
      { scenario: 'Your operations team wants to manage automations without developer involvement', recommendation: 'Automation platform — n8n offers a visual interface that non-technical staff can use.' },
    ],
    limitations: [
      'Low-code platforms like Zapier become expensive at high volumes — always check your projected task count before committing.',
      'Self-hosted n8n combines visual building with custom code steps, offering a middle ground between the two approaches.',
      'Custom workflows require documentation and handover so your team can maintain them after the developer moves on — factor this into your budget.',
      'Platform connectors break when the underlying API changes — you are dependent on the platform team to update their integration.',
    ],
    sources: [
      { label: 'n8n documentation — self-hosting and node development', url: 'https://docs.n8n.io/' },
      { label: 'Zapier pricing and task limits', url: 'https://zapier.com/pricing' },
    ],
    relatedServices: [
      { name: 'AI Automation', href: '/services/ai-automation' },
      { name: 'Process Automation', href: '/services/ai-automation/process-automation' },
    ],
  },
  {
    slug: 'redesign-vs-improve-existing-website',
    title: 'Website Redesign vs Incremental Improvements: What Is Right for You?',
    excerpt: 'Should you rebuild your website from scratch or improve what you have? Compare cost, risk, timeline, and SEO impact to decide the right approach.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80&auto=format&fit=crop',
    imageAlt: 'Comparison between full website redesign and incremental improvement approach for existing websites.',
    date: '2026-07-01',
    optionA: 'Full Website Redesign',
    optionB: 'Incremental Improvements',
    summary:
      'A full redesign gives you a clean architectural foundation, modern design, and the chance to fix accumulated technical debt — but it is expensive, risky for SEO, and takes months. Incremental improvements let you address specific issues (page speed, conversion rate, mobile UX) one at a time with lower risk and faster ROI, but you remain constrained by the existing architecture and content structure.',
    table: [
      { feature: 'Timeline', optionA: '3–6 months from kickoff to launch', optionB: '2–6 weeks per improvement cycle' },
      { feature: 'Upfront cost', optionA: '£15k–£80k+ depending on scope and pages', optionB: '£2k–£10k per improvement project' },
      { feature: 'SEO risk', optionA: 'High — URL changes, content migration, ranking fluctuations', optionB: 'Low — URLs and structure remain; changes are incremental' },
      { feature: 'Design flexibility', optionA: 'Complete — new layout, brand, UX from scratch', optionB: 'Limited — works within existing design system and templates' },
      { feature: 'Technical debt', optionA: 'Eliminated — new codebase, modern stack', optionB: 'Accumulated — legacy code remains; improvements add on top' },
      { feature: 'Content migration', optionA: 'Required — every page must be mapped and rewritten or redirected', optionB: 'Not needed — existing content stays in place' },
      { feature: 'Team disruption', optionA: 'Significant — full team focused on rebuild for months', optionB: 'Minimal — existing operations continue alongside improvements' },
      { feature: 'Mobile experience', optionA: 'Can be rebuilt mobile-first from the ground up', optionB: 'Can be improved but architecture constraints remain' },
      { feature: 'Conversion impact', optionA: 'Risk of drop during transition; potential for large gain after launch', optionB: 'Measurable, incremental gain per improvement with no transition dip' },
      { feature: 'Performance (Core Web Vitals)', optionA: 'Can achieve near-perfect scores with modern architecture', optionB: 'Can improve significantly but limited by existing framework and third-party scripts' },
    ],
    decisionRules: [
      { scenario: 'Your current platform cannot support the features you need (e.g., no API, no CMS, no mobile support)', recommendation: 'Full redesign — incremental improvements cannot fix fundamental platform limitations.' },
      { scenario: 'Your traffic and revenue are steady and you want to improve conversion rate', recommendation: 'Incremental improvements — test changes, measure impact, and avoid the risk of a redesign.' },
      { scenario: 'Your Core Web Vitals scores are poor and your page speed is costing you rankings', recommendation: 'Start with incremental performance improvements — you can often recover 80% of the gap without a rebuild.' },
      { scenario: 'Your brand has changed and the current design no longer represents your business', recommendation: 'Full redesign — visual consistency and brand perception cannot be fixed piecemeal.' },
      { scenario: 'You have a limited budget this year but need measurable improvements', recommendation: 'Incremental improvements — prioritise the highest-impact fixes and defer the rebuild.' },
    ],
    limitations: [
      'A full redesign does not guarantee better results — many redesigned sites lose traffic initially while search engines re-index the new structure.',
      'Incremental improvements can only take you so far. If your underlying architecture limits what you can change, you will eventually need a rebuild.',
      'The best approach is often a hybrid: fix critical performance and conversion issues incrementally while planning a phased modernisation of the architecture.',
      'Always run an SEO audit before any redesign — migrating URLs without proper redirects can lose years of accumulated ranking authority.',
    ],
    sources: [
      { label: 'Google — Core Web Vitals', url: 'https://web.dev/vitals/' },
      { label: 'Smashing Magazine — Website Redesign Guide', url: 'https://www.smashingmagazine.com/website-redesign/' },
    ],
    relatedServices: [
      { name: 'Web Development', href: '/services/web-development' },
      { name: 'Web Optimization', href: '/services/web-development/web-optimization' },
      { name: 'Digital Marketing', href: '/services/digital-marketing' },
    ],
  },
];

export function getComparison(slug: string): ComparisonPage | undefined {
  return comparisons.find((c) => c.slug === slug);
}
