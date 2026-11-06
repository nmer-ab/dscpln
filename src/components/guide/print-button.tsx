"use client";

export function PrintButton({ label }: { label: string }) {
  return (
    <button type="button" className="g-print-btn" onClick={() => window.print()}>
      {label}
    </button>
  );
}
