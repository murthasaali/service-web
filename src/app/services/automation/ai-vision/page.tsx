import type { Metadata } from "next";
import SubservicePageLayout, {
  type SubservicePageData,
} from "@/components/SubservicePageLayout";

export const metadata: Metadata = {
  title: "AI Vision | AI & Automation | aibizmod",
  description:
    "Automate visual inspection, document digitisation, and image-based data capture using computer vision models that replace manual review with scalable, accurate pipelines.",
  alternates: { canonical: "https://aibizmod.com/services/automation/ai-vision" },
  openGraph: {
    title: "AI Vision | aibizmod",
    description:
      "Automate visual inspection, document digitisation, and image-based data capture using computer vision models that replace manual review with scalable, accurate pipelines.",
    url: "/services/automation/ai-vision",
  },
};

const data: SubservicePageData = {
  name: "AI Vision",
  parentName: "AI & Automation",
  parentSlug: "automation",
  slug: "ai-vision",
  tagline:
    "• Automated visual quality control, document text extraction and real-time site monitoring systems built to handle complex visual datasets\nEach system is intended to:\n• Extract structured database records from invoices, forms and identity documents\n• Identify defects and anomalies on production lines and project sites instantly\n• Monitor camera feeds to detect safety compliance issues and flag violations",
  heroImage:
    "/services/automation/ai-vision.jpg",

  solves: {
    challenge:
      "Repetitive visual checks—like verifying IDs, scanning paper forms, spotting defects on a production line, or sorting site photos—frequently hold up operations. When these tasks depend entirely on human eyes, they become slow bottlenecks that are difficult to scale.",
    challengePoints: [
      "Quality inspectors stuck performing repetitive manual defect checks.",
      "Invoices or invoices arriving as PDF images that require manual data entry.",
      "Manual KYC and ID document checks that slow down user onboarding.",
      "Media libraries and photos left unorganized because manual tagging takes too long.",
    ],
    solution:
      "We train custom computer vision models to perform your specific visual checks automatically. Our systems convert images and video feeds into clean database records, routing the details directly into your downstream tools.",
    solutionPoints: [
      "Document extraction models that read structured data from variable formats.",
      "Custom object detection models trained to identify specific defects or assets.",
      "Automated verification checks that flag anomalies for your team's review.",
      "API integrations that add visual intelligence straight into your current software.",
    ],
  },

  capabilities: [
    {
      icon: "eye",
      title: "Computer Vision Pipelines",
      description:
        "We train and deploy object detection, classification, and segmentation models configured for your operational environment.",
    },
    {
      icon: "fileText",
      title: "OCR and Document Extraction",
      description:
        "We set up text extraction pipelines to capture fields, line items, and tables from PDFs, scans, and mobile photos.",
    },
    {
      icon: "search",
      title: "Quality Control Inspection",
      description:
        "We configure visual inspection models to spot defects, count items, or verify assembly steps on production lines in real time.",
    },
    {
      icon: "shield",
      title: "Document and ID Verification",
      description:
        "We build KYC integrations that read passports and driving licenses, verify layouts, and alert compliance teams to anomalies.",
    },
    {
      icon: "monitor",
      title: "Video Stream Analysis",
      description:
        "We write pipelines that analyze live or recorded video to track operational events, count assets, or monitor site safety.",
    },
    {
      icon: "zap",
      title: "Real-time Vision APIs",
      description:
        "We build lightweight, low-latency endpoints that allow your existing apps to query vision models and receive results in milliseconds.",
    },
    {
      icon: "cpu",
      title: "Advanced Spatial Pattern Recognition",
      description:
        "We deploy neural networks to detect micro-cracks, surface wear, and spatial pattern anomalies across machinery and infrastructure feeds.",
    },
    {
      icon: "database",
      title: "Cognitive Feature Extraction",
      description:
        "We build neural embeddings that automatically group, index, and organize unstructured visual and environmental assets.",
    },
  ],

  useCases: [
    {
      industry: "Logistics",
      title: "Automated Parcel Label Reading",
      description:
        "An OCR pipeline reads shipping label photos, extracts address fields, and routes packages without manual handheld scans.",
    },
    {
      industry: "Finance",
      title: "Invoice Data Extraction",
      description:
        "Scanned PDF invoices are processed by an extraction model that logs vendors, line items, and totals directly to your ledger.",
    },
    {
      industry: "Manufacturing",
      title: "Surface Defect Detection",
      description:
        "Cameras on a production line capture parts, running a model that flags surface cracks or missing components for immediate sorting.",
    },
    {
      industry: "Financial Services",
      title: "KYC Document Processing",
      description:
        "Onboarding uploads are scanned by an agent that matches photos, flags mismatching text fields, and queues issues for compliance review.",
    },
    {
      industry: "Property",
      title: "Property Photo Classification",
      description:
        "Real estate photos are automatically categorized by room type and lighting quality to organize new listings instantly.",
    },
    {
      industry: "Healthcare",
      title: "Medical Form Digitisation",
      description:
        "Intake forms photographed on tablets are processed to write patient histories straight into local clinical software.",
    },
    {
      industry: "Construction",
      title: "Automated Site Progress Tracking",
      description:
        "Vision models analyze daily drone videos and compare progress against project blueprints to update completion charts.",
    },
    {
      industry: "Construction",
      title: "AI-Powered Safety & Compliance Monitoring",
      description:
        "Live camera feeds run object detection in real time to flag safety violations, like missing hard hats or restricted zone incursions.",
    },
    {
      industry: "Infrastructure",
      title: "Automated Structural Quality Control",
      description:
        "Visual models scan high-res concrete photos to spot micro-cracks and alignment anomalies that escape manual human inspection.",
    },
    {
      industry: "Construction",
      title: "Geospatial & Site Survey Analysis",
      description:
        "Aerial drone photos are automatically scanned to measure earthwork grading progress and calculate stockpile volumes.",
    },
  ],

  technologies: [
    "Python",
    "OpenCV",
    "TensorFlow",
    "PyTorch",
    "YOLO",
    "Tesseract OCR",
    "AWS Rekognition",
    "Google Vision API",
    "Azure Computer Vision",
    "FastAPI",
    "Docker",
    "ONNX Runtime",
  ],

  benefits: [
    {
      title: "Visual Tasks Removed from Human Queues",
      description:
        "Automate visual inspections and sorting tasks, removing manual queues while maintaining strict operational accuracy.",
    },
    {
      title: "Structured Data from Unstructured Input",
      description:
        "Convert unstructured media, scans, and PDFs into clean database tables ready for downstream workflows.",
    },
    {
      title: "Scales with Volume",
      description:
        "Process thousands of images or frames simultaneously, avoiding queues when input volumes surge.",
    },
    {
      title: "Consistent Inspection Standards",
      description:
        "Ensure consistent quality criteria across all shifts and locations, removing human fatigue or individual biases from checks.",
    },
    {
      title: "Faster Onboarding and Intake",
      description:
        "Read and verify onboarding documents automatically, cutting registration and check times from days to seconds.",
    },
    {
      title: "Audit Trail for Every Inspection",
      description:
        "Log every visual decision, confidence score, and flag raised, building a searchable record for compliance audits.",
    },
  ],

  faqs: [
    {
      q: "What types of documents can your OCR system accurately process?",
      a: "Our systems excel at reading structured documents like invoices, ID cards, receipts, and forms. For hand-written documents, accuracy varies based on legibility. We audit your sample files during our scoping phase to set clear expectations.",
    },
    {
      q: "How accurate is computer vision for manufacturing quality control?",
      a: "With 500+ labelled example images per defect type under consistent lighting, our vision models typically hit 90% to 97% accuracy. We run a pilot test with your actual images first to confirm the baseline.",
    },
    {
      q: "Can vision models be deployed to run locally on edge devices rather than in the cloud?",
      a: "Yes. For offline processing or factory lines where millisecond latency is critical, we optimize and compile models to run locally on Nvidia Jetson devices or edge PCs using TensorRT.",
    },
    {
      q: "What volume of images can the system process per minute?",
      a: "Lightweight detection models running on a single cloud GPU can easily process hundreds of images per minute. We configure your infrastructure to scale horizontally as your workload demands.",
    },
    {
      q: "Do we need to purchase expensive proprietary cameras or drones to use your computer vision tools?",
      a: "No. Our models process standard files and video feeds. You can use standard security cameras, smartphones, drones, or equipment you already own.",
    },
    {
      q: "Running deep learning models on live video streams sounds computationally heavy. How do you manage cloud costs?",
      a: "We manage cloud costs by avoiding continuous 24/7 raw video processing. We set up trigger rules, like only analyzing frames at specific intervals or running detection when motion is flagged.",
    },
    {
      q: "Can the system detect structural defects in low-light or poor weather conditions?",
      a: "Yes. We train the models on dataset variations that include rain, shadows, and fog. For dark environments or tunnels, we integrate thermal or infrared visual processing alongside standard feeds.",
    },
  ],
};

export default function AIVisionPage() {
  return <SubservicePageLayout data={data} />;
}
