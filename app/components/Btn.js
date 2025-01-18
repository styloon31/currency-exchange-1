import { ChevronRight } from "lucide-react";

export default function Btn({ title, containerClass }) {
  return (
    <button
      className={`${containerClass} py-2 px-6 text-2xl font-Helvetica rounded-3xl flex items-center justify-center gap-2`}
    >
      {title} <ChevronRight />{" "}
    </button>
  );
}
