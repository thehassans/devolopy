'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Instagram, Linkedin, Twitter, Youtube, Send, CheckCircle2 } from 'lucide-react';

const footerColumns = [
  {
    title: 'Solutions',
    links: [
      'Business Automation',
      'Cloud Architecture',
      'SEO & Analytics',
      'AI Integrations',
      'Custom Development',
    ],
  },
  {
    title: 'Resources',
    links: ['Documentation', 'Case Studies', 'Insights & Blog', 'Design Tokens', 'Community'],
  },
  {
    title: 'Company',
    links: ['About Devolopy', 'Careers', 'Contact Team', 'Partners', 'Press Kit'],
  },
];

const legalLinks = [
  'Terms of Service',
  'Privacy Policy',
  'Cookie Settings',
  'Accessibility',
];

const socialIcons = [
  { icon: <Instagram className="h-4 w-4" />, href: 'https://instagram.com/devolopy', label: 'Instagram' },
  { icon: <Twitter className="h-4 w-4" />, href: 'https://twitter.com/devolopy', label: 'Twitter' },
  { icon: <Linkedin className="h-4 w-4" />, href: 'https://linkedin.com/company/devolopy', label: 'LinkedIn' },
  { icon: <Youtube className="h-4 w-4" />, href: 'https://youtube.com/@devolopy', label: 'YouTube' },
];

export function FooterNewsletter() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail('');
      }, 5000);
    }
  };

  return (
    <section aria-label="Newsletter and Updates" className="bg-background text-foreground relative w-full pt-16 pb-8 overflow-hidden">
      {/* Background glow accents */}
      <div className="pointer-events-none absolute top-0 left-0 z-0 h-full w-full overflow-hidden" aria-hidden="true">
        <div className="bg-primary/10 absolute top-1/4 left-1/4 h-72 w-72 rounded-full blur-3xl" />
        <div className="bg-primary/10 absolute right-1/4 bottom-1/4 h-80 w-80 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Glass effect CTA banner */}
        <div className="glass-effect mb-16 rounded-3xl p-8 sm:p-10 md:p-14 border border-border shadow-lg">
          <div className="grid items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase bg-primary/10 text-primary mb-4">
                Stay In The Loop
              </span>
              <h2 className="mb-4 text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl text-foreground">
                Elevate your digital vision with Devolopy.
              </h2>
              <p className="text-muted-foreground mb-6 text-sm sm:text-base leading-relaxed">
                Join forward-thinking product leaders, developers, and founders receiving our weekly insights on modern web development, SEO strategies, and high-performance React architectures.
              </p>

              {subscribed ? (
                <div className="flex items-center gap-2 p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-xl text-emerald-600 dark:text-emerald-400">
                  <CheckCircle2 className="size-5" />
                  <span className="text-sm font-medium">Thank you for subscribing! Check your inbox soon.</span>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row max-w-md">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address..."
                    aria-label="Email address"
                    className="border-input bg-background/80 focus:ring-primary placeholder:text-muted-foreground text-foreground rounded-xl border px-4 py-3 text-sm focus:ring-2 focus:outline-none flex-1 shadow-inner"
                  />
                  <button
                    type="submit"
                    className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl px-6 py-3 text-sm font-semibold shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer shrink-0"
                  >
                    <span>Subscribe</span>
                    <Send className="size-4" />
                  </button>
                </form>
              )}
            </div>

            <div className="hidden justify-center lg:flex lg:col-span-5">
              <div className="relative">
                <div className="bg-gradient-to-tr from-primary/30 to-accent/20 absolute inset-0 rotate-3 rounded-2xl filter blur-[1px]" />
                <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-3 shadow-xl">
                  <Image
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=640&q=80"
                    alt="Devolopy engineering and product collaboration"
                    width={360}
                    height={240}
                    className="rounded-xl object-cover"
                  />
                  <div className="mt-3 px-2 flex items-center justify-between">
                    <span className="text-xs font-semibold text-foreground">Next-Gen Web Architecture</span>
                    <span className="text-[11px] font-mono text-muted-foreground">Updated Weekly</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FooterNewsletter;
