import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aravinthrajan K - Resume",
  description: "View the resume of Aravinthrajan K, Full Stack Developer.",
};

export default function ResumePage() {
  return (
    <div className="fixed inset-0 w-full h-full bg-background z-[100]">
      <iframe
        src="/Aravinthrajan_K_Resume.pdf"
        className="w-full h-full border-none"
        title="Aravinthrajan K Resume"
      />
    </div>
  );
}
