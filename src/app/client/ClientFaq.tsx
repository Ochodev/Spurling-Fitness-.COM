"use client";

import Image from "next/image";
import Accordion from "@/components/sections/Accordion";

const linkClass = "text-brand-red underline hover:text-red-800";

export default function ClientFaq() {
  const items = [
    {
      question: "How Do I Use the Scheduling App / Portal?",
      answer: (
        <>
          <h4 className="mt-0 mb-2 text-xl font-bold uppercase tracking-wide text-brand-red border-b-2 border-brand-red pb-1">
            Kennebunk Location:
          </h4>
          <p className="mb-2"><strong className="text-brand-dark">Download the app:</strong></p>
          <ul className="mb-3 list-disc pl-5 space-y-1">
            <li>
              <a href="https://apps.apple.com/us/app/spurling-fitness/id6740281031" target="_blank" rel="noopener noreferrer" className={linkClass}>
                Kennebunk Scheduling App
              </a>
            </li>
            <li>Go to the App Store (iOS) or Google Play Store (Android)</li>
            <li>Search for &ldquo;Spurling Fitness App&rdquo; and download it</li>
          </ul>
          <p className="mb-2"><strong className="text-brand-dark">Sign in:</strong></p>
          <ul className="mb-3 list-disc pl-5 space-y-1">
            <li>Open the app and use your email to create your log-in</li>
          </ul>
          <p className="mb-2"><strong className="text-brand-dark">Access scheduling:</strong></p>
          <ul className="mb-3 list-disc pl-5 space-y-1">
            <li>Tap the <strong className="text-brand-dark">My Schedule</strong> tab to view all your upcoming appointments, classes, events, and assets</li>
            <li>Tap <strong className="text-brand-dark">Book Now</strong> to schedule new services — book appointments, classes, events, or assets directly from the app</li>
          </ul>
          <p className="mb-4">
            <a href="https://youtube.com/shorts/s4PyhXsqtW4" target="_blank" rel="noopener noreferrer" className={linkClass}>
              Video Walkthrough
            </a>
          </p>

          <h4 className="mt-6 mb-2 pt-4 border-t border-gray-200 text-xl font-bold uppercase tracking-wide text-brand-red border-b-2 border-brand-red pb-1">
            All Other Locations:
          </h4>
          <ul className="mb-3 list-disc pl-5 space-y-1">
            <li>Go to <a href="https://client.naamly.com" target="_blank" rel="noopener noreferrer" className={linkClass}>https://client.naamly.com</a></li>
            <li>Click &ldquo;First Time Login&rdquo;</li>
            <li>Use the phone number you provided at sign-up</li>
            <li>Select &ldquo;Book Sessions&rdquo;</li>
            <li>Choose your location and session time</li>
            <li>You can book, cancel, and manage your sessions all on the portal</li>
          </ul>
          <p>
            <a href="https://youtube.com/shorts/lwU7S2961oM" target="_blank" rel="noopener noreferrer" className={linkClass}>
              Video Walkthrough
            </a>
          </p>
        </>
      ),
    },
    {
      question: "What Is the Scheduling Policy?",
      answer: (
        <ul className="list-disc pl-5 space-y-2">
          <li>Sessions are released on a rolling 4-week schedule</li>
          <li>Sessions are first-come, first-served, with a capacity of 6 clients per session</li>
          <li>You must cancel your session at least 2 hours before the start time to avoid a $10 late-cancel or no-show fee</li>
          <li>This policy helps protect session availability and the small-group experience.</li>
        </ul>
      ),
    },
    {
      question: "How Does Billing Work?",
      answer: (
        <ul className="list-disc pl-5 space-y-2">
          <li>Memberships are billed every 4 weeks</li>
          <li>Billing follows the membership tier you selected at sign-up</li>
          <li>Payments are automatic and processed with the billing information you put on file</li>
          <li>All billing terms follow your membership agreement, signed on day one</li>
        </ul>
      ),
    },
    {
      question: "How Do I Join the Facebook Group?",
      answer: (
        <>
          <p className="mb-2">
            <strong className="text-brand-dark">Spurling 165</strong> is our client-only Facebook Group.
          </p>
          <p className="mb-3">We use it to celebrate clients and share announcements and events.</p>
          <p>
            <a href="https://www.facebook.com/groups/spurling165/" target="_blank" rel="noopener noreferrer" className={linkClass}>
              Request to join here
            </a>
          </p>
        </>
      ),
    },
    {
      question: "How Do I Contact My Coach?",
      answer: (
        <>
          <p className="mb-2"><strong className="text-brand-dark">For general questions or support:</strong></p>
          <ul className="mb-4 list-disc pl-5 space-y-1">
            <li>Call or text <strong className="text-brand-dark">207-477-6255</strong></li>
            <li>Email <a href="mailto:info@spurlingfitness.com" className={linkClass}>info@spurlingfitness.com</a></li>
          </ul>
          <p className="mb-2"><strong className="text-brand-dark">To contact your coach directly:</strong></p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong className="text-brand-dark">Tati:</strong> <a href="mailto:tati@spurlingfitness.com" className={linkClass}>tati@spurlingfitness.com</a> (Kennebunk Head Coach)</li>
            <li><strong className="text-brand-dark">Nick:</strong> <a href="mailto:nick@spurlingfitness.com" className={linkClass}>nick@spurlingfitness.com</a> (Scarborough &amp; South Portland Head Coach)</li>
            <li><strong className="text-brand-dark">Anne:</strong> <a href="mailto:anne@spurlingfitness.com" className={linkClass}>anne@spurlingfitness.com</a></li>
            <li><strong className="text-brand-dark">Arie:</strong> <a href="mailto:arie@spurlingfitness.com" className={linkClass}>arie@spurlingfitness.com</a></li>
            <li><strong className="text-brand-dark">Ayo:</strong> <a href="mailto:ayo@spurlingfitness.com" className={linkClass}>ayo@spurlingfitness.com</a></li>
            <li><strong className="text-brand-dark">Joe:</strong> <a href="mailto:joe@spurlingfitness.com" className={linkClass}>joe@spurlingfitness.com</a></li>
            <li><strong className="text-brand-dark">Judy:</strong> <a href="mailto:judy@spurlingfitness.com" className={linkClass}>judy@spurlingfitness.com</a></li>
            <li><strong className="text-brand-dark">Mike:</strong> <a href="mailto:mike@spurlingfitness.com" className={linkClass}>mike@spurlingfitness.com</a></li>
          </ul>
        </>
      ),
    },
    {
      question: "What Are My Options When I Travel?",
      answer: (
        <>
          <p className="mb-2"><strong className="text-brand-dark">If you&apos;re traveling:</strong></p>
          <ul className="list-disc pl-5 space-y-2">
            <li>For trips under 28 days, sessions may be rolled over</li>
            <li>No suspension is required for short absences of less than 28 days</li>
            <li>Virtual workouts are available via your Head Coach. Please e-mail them using the contact info above</li>
          </ul>
        </>
      ),
    },
    {
      question: "What Are My Options When I'm Injured?",
      answer: (
        <>
          <p className="mb-2">Injuries happen, and we plan for them.</p>
          <p className="mb-2"><strong className="text-brand-dark">If you&apos;re injured:</strong></p>
          <ul className="mb-3 list-disc pl-5 space-y-2">
            <li>Notify the Head Coach immediately</li>
            <li>We will modify workouts around the injury whenever possible</li>
            <li>We may recommend a free evaluation with a trusted local physical therapist</li>
          </ul>
          <p>Rarely is the answer to stop completely. We focus on keeping you moving safely.</p>
        </>
      ),
    },
    {
      question: "How Do I Schedule an InBody Scan?",
      answer: (
        <>
          <ul className="mb-4 list-disc pl-5 space-y-2">
            <li>InBody scans are completed every four weeks</li>
            <li>Scans help track body composition, not just scale weight</li>
            <li>Ask your coach to schedule or e-mail <a href="mailto:info@spurlingfitness.com" className={linkClass}>info@spurlingfitness.com</a></li>
          </ul>
          <p className="mb-4">
            <a href="https://inbodyusa.com/inbody-app/" target="_blank" rel="noopener noreferrer" className={linkClass}>
              Download The App Here
            </a>
          </p>
          <Image
            src="/images/inbody-app-screenshot.png"
            alt="InBody App Screenshot"
            width={278}
            height={296}
            className="rounded-lg"
          />
        </>
      ),
    },
    {
      question: "Do You Have Workouts I Can Do Remotely?",
      answer: (
        <>
          <p className="mb-2"><strong className="text-brand-dark">Yes.</strong></p>
          <ul className="mb-3 list-disc pl-5 space-y-2">
            <li>We offer a library of recorded virtual workouts</li>
            <li>These are ideal for travel or busy weeks</li>
            <li>Personalized plans may be available upon request</li>
          </ul>
          <p>
            <a href="https://www.youtube.com/playlist?list=PLGTbfEmXJinaCc_2j_x0aORmXQppu967j" target="_blank" rel="noopener noreferrer" className={linkClass}>
              Virtual Workout Library
            </a>
          </p>
        </>
      ),
    },
    {
      question: "Can You Help Me With Nutrition?",
      answer: (
        <>
          <p className="mb-2"><strong className="text-brand-dark">Yes, within scope.</strong></p>
          <ul className="mb-3 list-disc pl-5 space-y-2">
            <li>Coaches provide habit-based nutrition guidance</li>
            <li>We help with consistency, food tracking, and daily habits</li>
            <li>We offer nutrition workshops and short-term programs</li>
            <li>For more details, send an email to <a href="mailto:info@spurlingfitness.com" className={linkClass}>info@spurlingfitness.com</a> with &ldquo;nutrition&rdquo; in the subject line</li>
            <li>We do not provide medical nutrition</li>
          </ul>
          <p className="mb-2"><strong className="text-brand-dark">To Track Food, We Recommend MyFitnessPal:</strong></p>
          <ul className="list-disc pl-5 space-y-1">
            <li><a href="https://play.google.com/store/apps/details?id=com.myfitnesspal.android&hl=en_US" target="_blank" rel="noopener noreferrer" className={linkClass}>Android</a></li>
            <li><a href="https://apps.apple.com/us/app/myfitnesspal-calorie-counter/id341232718" target="_blank" rel="noopener noreferrer" className={linkClass}>iPhone</a></li>
          </ul>
        </>
      ),
    },
    {
      question: "How Does the Programming System Work?",
      answer: (
        <ul className="list-disc pl-5 space-y-2">
          <li>Training is delivered in small groups of up to six clients</li>
          <li>Programs run in four-week training blocks with rotating themes</li>
          <li>Coaches track progress, weights, and modifications for you in our app</li>
          <li>All workouts are full-body to ensure a balanced workout</li>
          <li>Programming is designed to be safe, progressive, and results-driven</li>
        </ul>
      ),
    },
    {
      question: "How Do I Refer Someone to Spurling?",
      answer: (
        <>
          <p className="mb-2"><strong className="text-brand-dark">We love referrals!</strong></p>
          <ul className="mb-3 list-disc pl-5 space-y-2">
            <li>Refer a friend, coworker, or family member</li>
            <li>They receive a free month to try Spurling Fitness</li>
            <li>If they stay on after the first month, your next payment is free</li>
          </ul>
          <p>
            To activate a referral, visit{" "}
            <a href="https://spurlingfitness.com/tryit" target="_blank" rel="noopener noreferrer" className={linkClass}>
              spurlingfitness.com/tryit
            </a>
          </p>
        </>
      ),
    },
    {
      question: "How Do I Change My Membership?",
      answer: (
        <>
          <p className="mb-2">You may adjust your membership level as your schedule or goals change.</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>You can decrease or increase your frequency based on schedule and goals</li>
            <li>Changes must be discussed with your Head Coach and a new membership agreement must be signed</li>
          </ul>
        </>
      ),
    },
    {
      question: "How Do I Suspend My Membership?",
      answer: (
        <>
          <ul className="mb-3 list-disc pl-5 space-y-2">
            <li>Membership suspensions are available for long-term travel and life events</li>
            <li>Suspensions are for a minimum of 28 days (if less than that, missed sessions can be made up)</li>
            <li>A written notice is required</li>
            <li>Start and return dates must be submitted at the time of request</li>
            <li>During an approved suspension, you are not charged and keep your current rate</li>
          </ul>
          <p>
            To submit your request, please e-mail{" "}
            <a href="mailto:info@spurlingfitness.com" className={linkClass}>info@spurlingfitness.com</a>
          </p>
        </>
      ),
    },
    {
      question: "How Do I Cancel My Membership?",
      answer: (
        <>
          <p className="mb-2"><strong className="text-brand-dark">If you decide Spurling Fitness is no longer the right fit:</strong></p>
          <ul className="mb-3 list-disc pl-5 space-y-2">
            <li>All memberships require 28 days&apos; written notice</li>
            <li>Payments during the 28-day notice period are still due</li>
            <li>If you cancel and later return, current membership rates are charged</li>
          </ul>
          <p>
            To submit your request, please e-mail{" "}
            <a href="mailto:info@spurlingfitness.com" className={linkClass}>info@spurlingfitness.com</a>
          </p>
        </>
      ),
    },
  ];

  return <Accordion items={items} />;
}
