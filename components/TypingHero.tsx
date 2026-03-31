"use client";
import { useState, useEffect } from "react";

const WORDS = [
  "Business",
  "Online Store",
  "Portfolio",
  "Blog",
  "Agency",
  "Startup",
  "SaaS App",
  "Community",
];

export default function TypingHero() {
  const [displayed, setDisplayed] = useState("Business");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [cursorOn, setCursorOn] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  // Cursor blink
  useEffect(() => {
    const t = setInterval(() => setCursorOn(v => !v), 530);
    return () => clearInterval(t);
  }, []);

  // Typewriter
  useEffect(() => {
    if (!mounted) return;
    const word = WORDS[wordIndex];
    let timer: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayed.length < word.length) {
      timer = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), 85);
    } else if (!isDeleting && displayed.length === word.length) {
      timer = setTimeout(() => setIsDeleting(true), 1800);
    } else if (isDeleting && displayed.length > 0) {
      timer = setTimeout(() => setDisplayed(word.slice(0, displayed.length - 1)), 45);
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false);
      setWordIndex(i => (i + 1) % WORDS.length);
    }
    return () => clearTimeout(timer);
  }, [displayed, isDeleting, wordIndex, mounted]);

  return (
    <div className="text-2xl md:text-4xl font-semibold text-[#334155] mb-6 min-h-[2.5rem]">
      For your{" "}
      <span className="text-[#0071FB]">
        {displayed}
        <span
          className="inline-block w-[3px] h-[1em] bg-[#0071FB] align-middle ml-[2px] rounded-sm"
          style={{ opacity: cursorOn ? 1 : 0 }}
        />
      </span>
    </div>
  );
}
