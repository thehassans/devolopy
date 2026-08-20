"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Dribbble,
  Facebook,
  Github,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from 'lucide-react';

const data = {
  facebookLink: 'https://facebook.com/devolopy',
  instaLink: 'https://instagram.com/devolopy',
  twitterLink: 'https://twitter.com/devolopy',
  githubLink: 'https://github.com/devolopy',
  dribbbleLink: 'https://dribbble.com/devolopy',
  services: {
    webdev: '#services',
    mobile: '#services',
    odoo: '#services',
    ecommerce: '#services',
    n8n: '#services',
    seo: '#services',
    ai: '#services',
    cloud: '#services',
  },
  about: {
    history: '#solutions',
    team: '#about',
    handbook: '#features',
    careers: '#contact',
  },
  help: {
    faqs: '#features',
    support: '#contact',
    livechat: '#contact',
  },
  contact: {
    email: 'contact@devolopy.com',
    phone: '+1 (555) 234-5678',
    address: 'Tech Innovation Hub, Silicon Avenue',
  },
  company: {
    name: 'Devolopy',
    description:
      'Building high-performance websites, mobile applications, Odoo ERP, e-commerce platforms, n8n automations, and SEO dominance with modern Next.js and AI architectures.',
    logoDark: '/DevolopyDarkTheme.png',
    logoLight: '/DevolopyLighttheme.png',
  },
};

const socialLinks = [
  { icon: Facebook, label: 'Facebook', href: data.facebookLink },
  { icon: Instagram, label: 'Instagram', href: data.instaLink },
  { icon: Twitter, label: 'Twitter', href: data.twitterLink },
  { icon: Github, label: 'GitHub', href: data.githubLink },
  { icon: Dribbble, label: 'Dribbble', href: data.dribbbleLink },
];

const aboutLinks = [
  { text: 'Company Overview', href: data.about.history },
  { text: 'Meet the Team', href: data.about.team },
  { text: 'Engineering Principles', href: data.about.handbook },
  { text: 'Careers & Hiring', href: data.about.careers },
];

const serviceLinks = [
  { text: 'Website Development', href: '#services' },
  { text: 'Mobile App Development', href: '#services' },
  { text: 'Odoo ERP Development', href: '#services' },
  { text: 'E-Commerce Solutions', href: '#services' },
  { text: 'N8N Automation', href: '#services' },
  { text: 'SEO & Search Dominance', href: '#services' },
  { text: 'AI & Agentic Workflows', href: '#services' },
  { text: 'Cloud & DevOps Architecture', href: '#services' },
];

const helpfulLinks = [
  { text: 'Features & Architecture', href: data.help.faqs },
  { text: 'Case Studies & Showcase', href: '#showcase' },
  { text: 'Book Free Consultation', href: data.help.livechat, hasIndicator: true },
  { text: 'Technical Documentation', href: '#solutions' },
];

const contactInfo = [
  { icon: Mail, text: data.contact.email, href: `mailto:${data.contact.email}` },
  { icon: Phone, text: data.contact.phone, href: `tel:${data.contact.phone}` },
  { icon: MapPin, text: data.contact.address, isAddress: true, href: '#contact' },
];

export function Footer4Col() {
  return (
    <footer aria-label="Site Footer" className="bg-secondary/40 border-t border-border mt-16 w-full rounded-t-3xl">
      <div className="mx-auto max-w-screen-xl px-4 pt-16 pb-8 sm:px-6 lg:px-8 lg:pt-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          <div>
            <div className="flex items-center justify-center gap-3 sm:justify-start">
              {/* Double Size Logo switching based on theme */}
              <div className="relative h-14 w-52 sm:h-18 sm:w-64 lg:h-20 lg:w-72">
                <Image
                  src="/DevolopyLighttheme.png"
                  alt="Devolopy Logo"
                  width={288}
                  height={80}
                  className="h-full w-auto object-contain dark:hidden"
                  priority
                />
                <Image
                  src="/DevolopyDarkTheme.png"
                  alt="Devolopy Logo Dark"
                  width={288}
                  height={80}
                  className="hidden h-full w-auto object-contain dark:block"
                  priority
                />
              </div>
            </div>

            <p className="text-muted-foreground mt-6 max-w-md text-center text-sm leading-relaxed sm:max-w-xs sm:text-left">
              {data.company.description}
            </p>

            <ul className="mt-6 flex justify-center gap-4 sm:justify-start md:gap-6">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-lg hover:bg-background/80 inline-flex items-center justify-center"
                    aria-label={`Follow Devolopy on ${label}`}
                  >
                    <Icon className="size-5" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:col-span-2">
            <div className="text-center sm:text-left">
              <p className="text-base font-semibold text-foreground">Services</p>
              <ul className="mt-4 space-y-2.5 text-sm">
                {serviceLinks.slice(0, 4).map(({ text, href }) => (
                  <li key={text}>
                    <Link
                      className="text-muted-foreground hover:text-foreground transition-colors"
                      href={href}
                    >
                      {text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-base font-semibold text-foreground">Advanced Tech</p>
              <ul className="mt-4 space-y-2.5 text-sm">
                {serviceLinks.slice(4).map(({ text, href }) => (
                  <li key={text}>
                    <Link
                      className="text-muted-foreground hover:text-foreground transition-colors"
                      href={href}
                    >
                      {text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-base font-semibold text-foreground">Company</p>
              <ul className="mt-4 space-y-2.5 text-sm">
                {aboutLinks.map(({ text, href }) => (
                  <li key={text}>
                    <Link
                      className="text-muted-foreground hover:text-foreground transition-colors"
                      href={href}
                    >
                      {text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-base font-semibold text-foreground">Contact & Help</p>
              <ul className="mt-4 space-y-2.5 text-sm">
                {helpfulLinks.map(({ text, href, hasIndicator }) => (
                  <li key={text}>
                    <Link
                      href={href}
                      className={
                        hasIndicator
                          ? 'group flex items-center justify-center gap-2 sm:justify-start text-muted-foreground hover:text-foreground transition-colors'
                          : 'text-muted-foreground hover:text-foreground transition-colors'
                      }
                    >
                      <span>{text}</span>
                      {hasIndicator && (
                        <span className="relative flex size-2">
                          <span className="bg-emerald-500 absolute inline-flex h-full w-full animate-ping rounded-full opacity-75" />
                          <span className="bg-emerald-500 relative inline-flex size-2 rounded-full" />
                        </span>
                      )}
                    </Link>
                  </li>
                ))}
                {contactInfo.map(({ icon: Icon, text, isAddress, href }) => (
                  <li key={text} className="pt-1">
                    <a
                      className="flex items-start justify-center gap-2 text-muted-foreground hover:text-foreground transition-colors sm:justify-start"
                      href={href || '#'}
                    >
                      <Icon className="text-primary size-4 shrink-0 mt-0.5" />
                      {isAddress ? (
                        <address className="not-italic text-xs">
                          {text}
                        </address>
                      ) : (
                        <span className="text-xs">{text}</span>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-border/60 pt-6">
          <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
            <p className="text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} {data.company.name}, Inc. All rights reserved. Powered by Next.js, TypeScript & Tailwind CSS.
            </p>

            <div className="flex gap-6 text-xs text-muted-foreground">
              <Link href="/privacy" className="hover:underline">Privacy Policy</Link>
              <Link href="/terms" className="hover:underline">Terms of Service</Link>
              <Link href="/sitemap.xml" className="hover:underline">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer4Col;
