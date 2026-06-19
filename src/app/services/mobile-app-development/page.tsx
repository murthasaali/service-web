import type { Metadata } from "next";
import ServicePageLayout, { type ServicePageData } from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Mobile App Development",
  description:
    "Native and cross-platform mobile applications for iOS and Android — from UX design to App Store launch.",
  openGraph: {
    title: "Mobile App Development | aibizmod",
    description:
      "Native and cross-platform mobile applications for iOS and Android — from UX design to App Store launch.",
    url: "/services/mobile-app-development",
  },
};

const data: ServicePageData = {
  name: "Mobile App Development",
  tagline:
    "Native performance, cross-platform reach — apps your users love, built to App Store standards.",
  slug: "mobile-app-development",
  iconColor: "text-cyan-600",

  overview: {
    paragraphs: [
      "We build mobile applications that users actually enjoy using — fluid, intuitive, and built to the performance standards that modern App Store ratings demand. Our team has shipped iOS and Android apps across consumer, enterprise, and B2B contexts, and we treat your app as a product, not just a piece of software.",
      "We work with both native and cross-platform technologies depending on what your product genuinely requires. For apps where performance and platform-native feel are critical — real-time tools, hardware-integrated products, complex animations — we build natively in Swift and Kotlin. Where speed-to-market and code sharing across both platforms matter more, React Native or Flutter is the right call.",
      "Beyond the build, we manage the full product journey: UX design and prototyping, App Store and Google Play submission, post-launch monitoring, crash reporting, and iterative version updates — so you always have a partner, not just a delivery team.",
    ],
    benefits: [
      "Platform-native experience with React Native or Flutter efficiency",
      "Dedicated QA process tested on real devices, not just emulators",
      "App Store and Google Play submission handled completely end-to-end",
      "Offline functionality and push notification support built in by default",
      "Maintenance retainers available to keep your app current across OS updates",
    ],
  },

  features: [
    {
      icon: "smartphone",
      title: "iOS Development",
      desc: "Native Swift development delivering the performance, animations, and platform conventions that iOS users expect and App Store reviewers require.",
    },
    {
      icon: "monitor",
      title: "Android Development",
      desc: "Kotlin-based Android apps built to Google's Material Design standards and performance guidelines — tested across device manufacturers and screen sizes.",
    },
    {
      icon: "layers",
      title: "Cross-Platform Build",
      desc: "A single React Native or Flutter codebase targeting both platforms — reducing build cost and time-to-market without sacrificing UX quality.",
    },
    {
      icon: "eye",
      title: "UX Design & Prototyping",
      desc: "User journey mapping, wireframes, and interactive prototypes fully validated with stakeholders before development begins — no surprises mid-build.",
    },
    {
      icon: "bell",
      title: "Push Notifications & Offline",
      desc: "Rich push notification flows and offline-first data sync using local storage and background sync strategies for always-reliable app experiences.",
    },
    {
      icon: "database",
      title: "Backend & API Integration",
      desc: "Mobile-optimised APIs, real-time data sync, secure authentication flows, and seamless third-party service integration into your app's backend.",
    },
  ],

  process: [
    {
      icon: "compass",
      title: "Product Definition",
      desc: "Target user, core flows, and platform strategy defined clearly before any design or development work begins.",
    },
    {
      icon: "eye",
      title: "UX/UI Design",
      desc: "Interactive prototypes and screen-by-screen flows validated with stakeholder sign-off — building confidence before we write code.",
    },
    {
      icon: "smartphone",
      title: "Development & QA",
      desc: "Fortnightly sprint builds distributed via TestFlight and Firebase App Distribution, tested on real devices throughout.",
    },
    {
      icon: "rocket",
      title: "App Store Launch",
      desc: "We handle submission, review responses, metadata optimisation, and post-launch monitoring on both iOS and Android.",
    },
  ],

  techStack: [
    "React Native", "Flutter", "Swift", "Kotlin", "Expo", "Firebase",
    "TestFlight", "Xcode", "Android Studio", "Fastlane", "Supabase", "REST APIs", "Redux Toolkit",
  ],

  faqs: [
    {
      q: "Native or cross-platform — which should I choose?",
      a: "Native (Swift/Kotlin) is best when you need platform-specific features, maximum animation performance, or direct access to hardware APIs like Bluetooth or NFC. Cross-platform (React Native/Flutter) is best when you need feature parity across both platforms with a faster timeline and lower cost. We'll recommend the right approach after understanding your product in detail.",
    },
    {
      q: "How long does it take to launch a mobile app?",
      a: "A focused MVP typically takes 10–14 weeks. Apps with complex backend systems, third-party integrations, or enterprise features take 4–6 months. Apple App Store reviews typically add 1–3 business days to go-live; Google Play is usually within 24 hours.",
    },
    {
      q: "Can you work on an app that's already been started?",
      a: "Yes. We take over existing React Native, Flutter, Swift, and Kotlin codebases for feature additions, performance refactoring, or version upgrades. We start with a technical audit of the current codebase to scope the work accurately.",
    },
    {
      q: "How do App Store and Google Play submissions work?",
      a: "We handle the complete submission process — including developer account setup if needed, screenshots, app descriptions, privacy disclosures, and responses to reviewer feedback. Apple typically takes 1–3 business days; Google Play is usually within 24 hours for new apps.",
    },
    {
      q: "What happens after the app launches?",
      a: "We include a 30-day post-launch support window in every project. iOS and Android OS updates regularly require app updates — we offer maintenance retainers to keep your app compatible, performant, and current as platforms evolve.",
    },
  ],
};

export default function MobileAppDevelopmentPage() {
  return <ServicePageLayout data={data} />;
}
