import { FaqItem } from "@/types";

export const clientFaqItems: {
  category: string;
  items: FaqItem[];
}[] = [
  {
    category: "Scheduling & App",
    items: [
      {
        question: "How Do I Use the Scheduling App / Portal?",
        answer:
          "For our Kennebunk location, download the Spurling Fitness App from the App Store or Google Play. Sign in with your email, then access the \"My Schedule\" tab to view appointments and \"Book Now\" to schedule services.\n\nFor all other locations, visit client.naamly.com, click \"First Time Login,\" use your sign-up phone number, select \"Book Sessions,\" choose your location and time.",
      },
      {
        question: "What Is the Scheduling Policy?",
        answer:
          "Sessions release on a rolling 4-week schedule, first-come, first-served with a capacity of 6 clients per session. Cancellations require a minimum 2-hour notice before start time; late cancellations or no-shows incur a $10 fee.",
      },
    ],
  },
  {
    category: "Billing & Membership",
    items: [
      {
        question: "How Does Billing Work?",
        answer:
          "Memberships bill every 4 weeks according to your selected tier. Payments process automatically using filed billing information, following the membership agreement signed on day one.",
      },
      {
        question: "How Do I Change My Membership?",
        answer:
          "You can adjust your training frequency based on your schedule and goals. Changes require a discussion with your Head Coach and signing a new membership agreement. Members can increase or decrease frequency as needed.",
      },
      {
        question: "How Do I Suspend My Membership?",
        answer:
          "Suspensions are available for long-term travel and life events. Minimum suspension is 28 days (less than that allows makeup sessions). Written notice is required with start and return dates. During the approval process, no charges are applied and your current rate is maintained. Email info@spurlingfitness.com to submit your request.",
      },
      {
        question: "How Do I Cancel My Membership?",
        answer:
          "Memberships require 28 days' written notice. Payments continue during the notice period. Returning members pay current membership rates. Email info@spurlingfitness.com to submit your cancellation request.",
      },
    ],
  },
  {
    category: "Communication",
    items: [
      {
        question: "How Do I Join the Facebook Group?",
        answer:
          "\"Spurling 165\" is our client-only Facebook Group for celebrating clients and sharing announcements. You can request to join through Facebook by searching \"Spurling 165\" or asking your coach for the link.",
      },
      {
        question: "How Do I Contact My Coach?",
        answer:
          "For general inquiries, call or text 207-477-6255 or email info@spurlingfitness.com. You can also reach your Head Coach directly — Tati for Kennebunk, Nick for Scarborough & South Portland. Each coach has an individual email address available upon request.",
      },
      {
        question: "How Do I Refer Someone to Spurling?",
        answer:
          "Refer friends, coworkers, or family to Spurling. The new member receives their first month free, and if they continue, your next payment is free too. Share the link spurlingfitness.com/tryit to get started.",
      },
    ],
  },
  {
    category: "Training & Programs",
    items: [
      {
        question: "How Does the Programming System Work?",
        answer:
          "Training is delivered in small groups of up to 6 clients. Programs run in 4-week training blocks with rotating themes. Coaches track your progress, weights, and modifications. All workouts are full-body, designed to be safe, progressive, and results-driven.",
      },
      {
        question: "What Are My Options When I Travel?",
        answer:
          "Trips under 28 days allow session rollover without suspension. Virtual workouts are available through your Head Coach via email. Just let us know your travel dates and we'll help you stay on track.",
      },
      {
        question: "What Are My Options When I'm Injured?",
        answer:
          "Notify your Head Coach immediately. We modify workouts around injuries when possible and may recommend a free evaluation with a trusted local physical therapist. Rarely does an injury require complete cessation of training.",
      },
      {
        question: "Do You Have Workouts I Can Do Remotely?",
        answer:
          "Yes! We have a recorded virtual workout library for travel or busy weeks. Personalized remote plans are also available upon request. Access the library through our YouTube playlist or ask your coach for a link.",
      },
      {
        question: "Can You Help Me With Nutrition?",
        answer:
          "Our coaches provide habit-based nutrition guidance covering consistency, food tracking, and daily habits. Nutrition workshops and short-term programs are offered regularly. Email info@spurlingfitness.com with \"nutrition\" in the subject line for details. We recommend MyFitnessPal for food tracking.",
      },
    ],
  },
  {
    category: "InBody & Tracking",
    items: [
      {
        question: "How Do I Schedule an InBody Scan?",
        answer:
          "InBody scans are completed every four weeks. They track body composition rather than just scale weight, giving you a much clearer picture of your progress. Request scheduling from your coach or email info@spurlingfitness.com. Download the InBody app to track your results over time.",
      },
    ],
  },
];
