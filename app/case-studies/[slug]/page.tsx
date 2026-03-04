import CaseStudyPaymentModal from "@/components/CaseStudyPaymentModal";
import CaseStudyZutobi from "@/components/CaseStudyZutobi";
import CaseStudyZutobiInstructor from "@/components/CaseStudyZutobiInstructor";
import CaseStudyFriggy from "@/components/CaseStudyFriggy";
import CaseStudyZutobiFirstLesson from "@/components/CaseStudyZutobiFirstLesson";

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  if (slug === "payment-modal-timeline") return <CaseStudyPaymentModal />;
  if (slug === "zutobi-onboarding") return <CaseStudyZutobi />;
  if (slug === "zutobi-instructor") return <CaseStudyZutobiInstructor />;
  if (slug === "friggy") return <CaseStudyFriggy />;

  if (slug === "zutobi-first-lesson") return <CaseStudyZutobiFirstLesson />;

  return <div style={{ color: "#ffffff", padding: "100px clamp(16px, 4vw, 48px)" }}>Case study not found.</div>;
}
