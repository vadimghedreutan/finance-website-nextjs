"use client";

import type { PropsWithChildren } from "react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

type StartViewTransition = (cb: () => void) => void;

function getStartViewTransition(): StartViewTransition | undefined {
  return (document as Document & {
    startViewTransition?: StartViewTransition;
  }).startViewTransition;
}

/**
 * Intercepts same-origin <a> clicks and wraps router navigation
 * in document.startViewTransition when available.
 */
export default function ViewTransitions({ children }: PropsWithChildren) {
  const router = useRouter();

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented) return;
      if (e.button !== 0) return;
      if (e.metaKey || e.ctrlKey || e.altKey || e.shiftKey) return;

      const a = (e.target as Element)?.closest<HTMLAnchorElement>("a[href]");
      if (!a) return;

      // Ignore new-tab, downloads, external domains, hashes
      if (a.target && a.target !== "_self") return;
      if (a.hasAttribute("download")) return;
      const url = new URL(a.href);
      if (url.origin !== window.location.origin) return;
      if (
        url.hash &&
        url.pathname === window.location.pathname &&
        url.search === window.location.search
      )
        return;

      // Let Next.js handle <Link> prefetch, but we still want to wrap push
      e.preventDefault();

      const go = () => {
        const href = url.pathname + url.search + url.hash;
        router.push(href);
      };

      // Wrap in View Transition if available, else just navigate
      const startViewTransition = getStartViewTransition();
      startViewTransition ? startViewTransition(go) : go();
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [router]);

  return <>{children}</>;
}

/**
 * Utility to wrap any state update in a view transition.
 * Example: withViewTransition(() => setOpen(v => !v))
 */
export function withViewTransition(run: () => void) {
  const startViewTransition = getStartViewTransition();
  return startViewTransition ? startViewTransition(run) : run();
}
