"use client";
import { useState } from "react";
import { CONFIG } from "@/lib/config";

export default function CopyCA() {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard.writeText(CONFIG.ca);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="inline-flex items-center gap-2 px-4 py-2.5 bg-cream-deep border border-[rgba(74,44,26,0.1)]">
      <span className="text-[0.7rem] text-olive font-medium">CA:</span>
      <code className="font-mono text-[0.75rem] text-espresso font-medium">{CONFIG.ca}</code>
      <button
        onClick={copy}
        className="bg-brown text-cream px-2.5 py-1 text-[0.65rem] font-bold hover:bg-espresso transition-colors"
      >
        {copied ? "COPIED" : "COPY"}
      </button>
    </div>
  );
}
