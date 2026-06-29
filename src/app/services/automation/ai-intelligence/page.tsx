import type { Metadata } from "next";
import SubservicePageLayout, {
  type SubservicePageData,
} from "@/components/SubservicePageLayout";

export const metadata: Metadata = {
  title: "AI Intelligence | AI & Automation | aibizmod",
  description:
    "Extract meaningful insight from your operational data using predictive models and recommendation systems that surface patterns your dashboards cannot.",
  alternates: { canonical: "https://aibizmod.com/services/automation/ai-intelligence" },
  openGraph: {
    title: "AI Intelligence | aibizmod",
    description:
      "Extract meaningful insight from your operational data using predictive models and recommendation systems that surface patterns your dashboards cannot.",
    url: "/services/automation/ai-intelligence",
  },
};

const data: SubservicePageData = {
  name: "AI Intelligence",
  parentName: "AI & Automation",
  parentSlug: "automation",
  slug: "ai-intelligence",
  tagline:
    "• Custom predictive models, anomaly detection systems and recommendation engines built to discover hidden patterns in your operational data\nEach system is intended to:\n• Provide statistical forecasts of future demand, churn and resource needs\n• Alert your team to transaction risks and anomalies before they escalate\n• Personalise suggestions dynamically for individual customer profiles",
  heroImage:
    "/services/automation/ai-intelligence.png",

  solves: {
    challenge:
      "Most companies sit on a mountain of raw data—logs, invoices, schedules, and past metrics. But standard dashboards only show what already happened. Without predictive tools, teams are left guessing about future inventory needs, project delays, or when equipment might fail.",
    challengePoints: [
      "Reacting to operational delays and equipment failures after they happen.",
      "Noticing customer churn only after the cancellation emails arrive.",
      "Ordering inventory based on gut feeling or simple historical averages.",
      "Treating all incoming leads equally due to a lack of prioritization signals.",
    ],
    solution:
      "We pinpoint the specific forecasting or classification challenges in your business, structure your historical data, and deploy custom ML models. The outputs are delivered directly into your team's tools as risk scores, alerts, or ranked recommendations.",
    solutionPoints: [
      "Models built around your actual datasets, parameters, and targets.",
      "Predictions fed directly into your current CRM, ERP, or custom dashboards.",
      "Pattern recognition to catch transaction risks or anomalies early.",
      "Personalized recommendation engines that dynamically suggest actions per user.",
    ],
  },

  capabilities: [
    {
      icon: "lineChart",
      title: "Predictive Analytics",
      description:
        "We train regression and classification models to project metrics like recurring revenue, customer retention rates, and resource utilization.",
    },
    {
      icon: "target",
      title: "Recommendation Systems",
      description:
        "We set up engines that process user clickstreams and purchase records to suggest relevant items, matching choices to individual profiles.",
    },
    {
      icon: "eye",
      title: "Anomaly Detection",
      description:
        "We build autoencoders and outlier models that scan logs and transactions to highlight high-risk anomalies for immediate team review.",
    },
    {
      icon: "users",
      title: "Customer Segmentation",
      description:
        "We use clustering algorithms to group users by real engagement and value, replacing broad static personas with actual behavioral segments.",
    },
    {
      icon: "barChart",
      title: "Demand Forecasting",
      description:
        "We model time-series data to predict inventory, supply chain pacing, and staffing needs while adjusting for seasonality and market shifts.",
    },
    {
      icon: "bell",
      title: "Automated Insight Delivery",
      description:
        "We write scripts to package model predictions into scheduled email reports, spreadsheet exports, or real-time Slack notifications.",
    },
    {
      icon: "database",
      title: "Data Pipeline Engineering",
      description:
        "We design data extraction scripts to clean, structure, and store messy database logs, creating a reliable foundation for model training.",
    },
    {
      icon: "cpu",
      title: "Algorithmic Decision Support",
      description:
        "We build mathematical engines that evaluate options and display ranked, context-aware suggestions directly inside your operational tools.",
    },
  ],

  useCases: [
    {
      industry: "Retail",
      title: "Churn Prediction for Subscription Businesses",
      description:
        "An ML classifier reads platform logs to flag accounts likely to cancel within a month, giving customer success teams time to reach out.",
    },
    {
      industry: "E-commerce",
      title: "Product Recommendation Engine",
      description:
        "An e-commerce engine analyzes cart histories and browsing paths to suggest related products at checkout, boosting average cart values.",
    },
    {
      industry: "Finance",
      title: "Transaction Anomaly Detection",
      description:
        "A risk model scans incoming payments to flag transaction values or routing paths that deviate from typical business profiles.",
    },
    {
      industry: "Manufacturing",
      title: "Predictive Maintenance Scheduling",
      description:
        "Sensor log analysis models predict when specific machine parts will fail, allowing repairs to be scheduled during standard downtime.",
    },
    {
      industry: "Logistics",
      title: "Delivery Time Forecasting",
      description:
        "A logistics model reads historical routes, transit records, and weather data to display realistic delivery times at checkout.",
    },
    {
      industry: "SaaS",
      title: "Product Usage Health Scoring",
      description:
        "Product usage metrics are mapped to a health index, alerting support teams to accounts whose activity has dropped below average.",
    },
    {
      industry: "Construction",
      title: "Dynamic Resource & Crew Scheduling",
      description:
        "Machine learning models schedule project crews and heavy machinery across active sites based on live progress updates and weather trends.",
    },
    {
      industry: "Infrastructure",
      title: "Supply Chain Disruption Forecasting",
      description:
        "Models analyze transit histories and vendor delays to forecast material shortages, automatically triggering alert signs.",
    },
    {
      industry: "Construction",
      title: "Predictive Cost Estimating & Competitive Bidding",
      description:
        "ML algorithms analyze past cost overruns and material rates to help teams draft competitive, risk-adjusted bids for new tenders.",
    },
    {
      industry: "Energy & Utilities",
      title: "Predictive Asset Maintenance",
      description:
        "Equipment diagnostic logs feed a forecasting model that schedules machinery checkups during natural breaks in operation.",
    },
  ],

  technologies: [
    "Python",
    "scikit-learn",
    "TensorFlow",
    "PyTorch",
    "XGBoost",
    "pandas",
    "Jupyter",
    "PostgreSQL",
    "AWS SageMaker",
    "FastAPI",
    "Plotly",
  ],

  benefits: [
    {
      title: "Anticipate Problems Before They Occur",
      description:
        "Identify system delays, anomalies, and churn risks early, allowing your team to act before small problems disrupt operations.",
    },
    {
      title: "Reduce Guesswork in Planning",
      description:
        "Replace rules-of-thumb and basic averages with statistical projections mapped from your actual historical logs.",
    },
    {
      title: "Personalisation at Scale",
      description:
        "Provide relevant suggestions and alerts to users based on actual clicks and purchase histories without manual curation.",
    },
    {
      title: "Earlier Revenue Protection",
      description:
        "Spot drops in customer health scores weeks in advance, giving account managers a clear window to step in and retain the client.",
    },
    {
      title: "Continuous Improvement",
      description:
        "Set up automated retraining schedules so your models adapt to changing business patterns and improve their accuracy over time.",
    },
    {
      title: "Actionable Outputs",
      description:
        "Receive model outputs via clean API endpoints, database updates, or daily reports, feeding directly into the tools you already use.",
    },
  ],

  faqs: [
    {
      q: "What data do you need to build a predictive model?",
      a: "We need historical data that covers the outcomes you want to predict. This could be structured database logs, transaction history, or inventory records. Ideally, we look for 12 to 24 months of data to account for seasonality, along with clear outcomes. We audit your data before starting to make sure it is ready.",
    },
    {
      q: "How accurate are the predictions typically?",
      a: "It depends on the quality of your historical records and how consistent your business patterns are. A typical churn or demand model built on clean data achieves 75% to 90% accuracy. We provide a baseline check during the scoping phase so you know what level of precision is realistic.",
    },
    {
      q: "Do you deliver the model as code we can run ourselves, or as a hosted service?",
      a: "We adapt to your team's setup. If you have in-house developers, we provide the clean Python model files, training scripts, and documentation. If you prefer a hands-off solution, we host the model as a secure endpoint on AWS or Google Cloud and handle automatic retraining.",
    },
    {
      q: "How often do models need to be retrained?",
      a: "This depends on how quickly your business environment changes. A stable inventory model might only need quarterly updates, while a customer churn model in a fast-moving market is usually retrained monthly. We write scripts to run these retraining loops automatically.",
    },
    {
      q: "Our historical project data is messy and spread across multiple legacy systems. Can we still build predictive models?",
      a: "Yes. Very few companies have perfect datasets. We write ingestion scripts that extract data from your legacy tools, remove duplicates, resolve missing fields, and combine everything into a structured database ready for training.",
    },
    {
      q: "How accurate are timeline and budget forecasts when first deployed?",
      a: "When first launched, the model sets a baseline based on your historical projects. Over time, as your team enters new daily logs, the model retrains itself, meaning the predictions become more accurate the longer the system is online.",
    },
    {
      q: "Will these ML models replace our current project management software?",
      a: "No, they are designed to support your current tools. Our predictive models run in the background and send their outputs, risk flags, and alerts directly into your existing project dashboards and messaging platforms.",
    },
  ],
};

export default function AIIntelligencePage() {
  return <SubservicePageLayout data={data} />;
}
