import type { Metadata } from "next";
import ServicePageLayout, { type ServicePageData } from "@/components/ServicePageLayout";
import TechStackCarousel, {
  MOBILE_APP_ROW1,
  MOBILE_APP_ROW2,
} from "@/components/ui/tech-stack-carousel";

export const metadata: Metadata = {
  title: "Mobile App Development",
  description:
    "Native and cross-platform mobile applications for iOS and Android — from UX design to App Store launch.",
  alternates: { canonical: 'https://aibizmod.com/services/mobile-app-development' },
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
    "For businesses across the UK, USA, and internationally that need a mobile product built to production standard, we design and develop custom iOS and Android applications — booking tools, self-service portals, technician dispatch apps, and inventory trackers. You receive a tested, store-ready app with crash reporting, push notifications, and full source code ownership.",
  heroBullets: [
    "For businesses that need a mobile product built to production standard",
    "Custom iOS and Android apps — booking tools, self-service portals, technician dispatch, and inventory trackers",
    "Tested, store-ready app with crash reporting, push notifications, and full source code ownership",
    "Serving clients in the UK, USA, and internationally",
  ],
  slug: "mobile-app-development",
  iconColor: "text-cyan-600",

  overview: {
    paragraphs: [
      "We develop custom mobile applications for business workflows and customer-facing interactions. When you engage us, you receive a version-controlled git repository, a configured mobile app distribution pipeline (via TestFlight and Firebase), direct integration with Sentry or Firebase Crashlytics, and completed App Store and Google Play privacy label declarations. Every application is built natively or using React Native/Flutter based on concrete technical requirements, not generic boilerplate templates.",
      "Our projects focus on practical operation scenarios. For instance, we develop booking applications that run payment processing, technician field apps that sync coordinates and job status, customer self-service billing portals, and inventory tracking apps that interface with mobile barcode scanners.",
      "Previous projects include: a technician dispatch app for a national plumbing firm that shows real-time job queues and uploads on-site pictures; a customer self-service billing application for a waste collection provider that lets clients schedule bin pick-ups; and an offline-first inventory scanning app for a logistics warehouse that syncs local scans to a main PostgreSQL database once connected."
    ],
    benefits: [
      "Direct database API integration",
      "Tested on physical devices, not just emulators",
      "Offline local storage configuration",
      "Push notification delivery setup",
      "App Store and Play Store compliance support",
      "Full source code and repository access"
    ],
  },

  features: [
    {
      icon: "settings",
      title: "App Store Submission Support",
      desc: "We configure your developer accounts, draft submission metadata, submit builds, and respond directly to reviewer feedback to achieve production approval."
    },
    {
      icon: "shield",
      title: "Privacy Labels",
      desc: "We audit data-collection endpoints and draft the required data safety disclosures for Apple App Store and Google Play Store listings."
    },
    {
      icon: "layers",
      title: "Screenshots",
      desc: "We generate complete screenshot assets formatted to standard device viewport sizes for App Store and Google Play listings."
    },
    {
      icon: "activity",
      title: "Crash Reporting Setup",
      desc: "We integrate Sentry or Firebase Crashlytics to capture real-time stack traces, hardware states, and crash logs from production devices."
    },
    {
      icon: "lineChart",
      title: "Analytics Integration",
      desc: "We set up tracking logs for core user behaviors, recording button clicks, screen navigation, and application loading delays."
    },
    {
      icon: "bell",
      title: "Push Notifications",
      desc: "We set up Apple Push Notification service (APNs) and Firebase Cloud Messaging (FCM) credentials to dispatch transaction updates."
    }
  ],

  process: [
    {
      icon: "compass",
      title: "Requirements & Scope",
      desc: "We define core user routes, offline behavior rules, target devices, and API endpoints to draft a technical blueprint."
    },
    {
      icon: "code2",
      title: "Sprint Builds",
      desc: "We compile features in 2-week agile sprints, distributing beta versions to your team via TestFlight or Firebase."
    },
    {
      icon: "testTube",
      title: "Device QA & Audit",
      desc: "We run QA checklists on physical iOS and Android devices, testing form validations, camera inputs, and offline recovery."
    },
    {
      icon: "rocket",
      title: "Store Submission",
      desc: "We upload the release candidates, complete the privacy label forms, publish the app, and set up crash alerting."
    }
  ],

  techStack: [],

  faqs: [
    {
      q: "How do you handle App Store and Google Play review rejections?",
      a: "We handle the review feedback process directly. If Apple or Google requests changes or clarifications regarding permissions, we adjust metadata or make the necessary code adjustments and resubmit the application at no additional fee."
    },
    {
      q: "Do you configure offline-first functionality in your mobile apps?",
      a: "Yes. We design applications to store data locally (using SQLite or WatermelonDB) when network connections are unavailable. The app automatically queues uploads and reconciles database changes with your backend server once connection is restored."
    },
    {
      q: "Who owns the developer accounts and store listings?",
      a: "You do. We assist you in registering your official Apple and Google Developer organization accounts. We upload builds directly to your accounts, ensuring you retain absolute ownership and control of the store listings."
    },
    {
      q: "How do we test work-in-progress versions during development?",
      a: "We compile and upload development builds every two weeks. You can install and test these builds on your own phone using Apple TestFlight for iOS or Firebase App Distribution for Android."
    }
  ],
};

export default function MobileAppDevelopmentPage() {
  return (
    <ServicePageLayout
      data={data}
      techStackFooter={<TechStackCarousel row1={MOBILE_APP_ROW1} row2={MOBILE_APP_ROW2} />}
    />
  );
}
