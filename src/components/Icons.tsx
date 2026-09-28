type P = { className?: string };

export function InstagramIcon({ className }: P) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function YoutubeIcon({ className }: P) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden>
      <path d="M2.8 8.2a3 3 0 0 1 2.6-2.6C7.6 5.3 12 5.3 12 5.3s4.4 0 6.6.3a3 3 0 0 1 2.6 2.6c.3 1.9.3 3.7.3 3.7s0 1.8-.3 3.7a3 3 0 0 1-2.6 2.6c-2.2.3-6.6.3-6.6.3s-4.4 0-6.6-.3a3 3 0 0 1-2.6-2.6C2.5 13.8 2.5 12 2.5 12s0-1.8.3-3.8Z" />
      <path d="m10 9.5 4.5 2.5L10 14.5v-5Z" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function TiktokIcon({ className }: P) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M13.5 3h2.6c.2 1.9 1.4 3.4 3.4 3.7v2.7a6.4 6.4 0 0 1-3.4-1.1v6.3a5.4 5.4 0 1 1-5.4-5.4c.3 0 .6 0 .9.1v2.8a2.7 2.7 0 1 0 1.9 2.5V3Z" />
    </svg>
  );
}

export function PinterestIcon({ className }: P) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M12 2.5a9.5 9.5 0 0 0-3.5 18.4c-.1-.8-.2-2 0-2.9l1.2-5s-.3-.6-.3-1.5c0-1.4.8-2.5 1.8-2.5.9 0 1.3.7 1.3 1.5 0 .9-.6 2.2-.9 3.4-.2 1 .5 1.9 1.6 1.9 1.9 0 3.3-2 3.3-4.8 0-2.5-1.8-4.3-4.4-4.3-3 0-4.7 2.2-4.7 4.6 0 .9.3 1.9.8 2.4.1.1.1.2.1.3l-.3 1.2c0 .2-.2.2-.4.1-1.3-.6-2.1-2.5-2.1-4 0-3.3 2.4-6.3 6.9-6.3 3.6 0 6.4 2.6 6.4 6 0 3.6-2.3 6.5-5.4 6.5-1.1 0-2.1-.6-2.4-1.2l-.7 2.5c-.2.9-.9 2.1-1.3 2.8A9.5 9.5 0 1 0 12 2.5Z" />
    </svg>
  );
}

export function WhatsappIcon({ className }: P) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M12 2.2A9.8 9.8 0 0 0 3.6 17l-1.3 4.8 4.9-1.3A9.8 9.8 0 1 0 12 2.2Zm0 17.9c-1.5 0-3-.4-4.2-1.2l-.3-.2-2.9.8.8-2.8-.2-.3A8.1 8.1 0 1 1 12 20.1Zm4.5-6c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.6 6.6 0 0 1-3.3-2.9c-.3-.4.3-.4.8-1.4.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.2s.9 2.5 1.1 2.7c.1.2 1.8 2.8 4.5 3.9 1.7.7 2.3.8 3.1.6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2l-.5-.2Z" />
    </svg>
  );
}

export function ArrowIcon({ className }: P) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function SparkleIcon({ className }: P) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M12 2c.6 4.6 3.4 7.4 8 8-4.6.6-7.4 3.4-8 8-.6-4.6-3.4-7.4-8-8 4.6-.6 7.4-3.4 8-8Z" />
    </svg>
  );
}
