import {
  BarChart3,
  BookOpen,
  Cpu,
  Receipt,
  ShieldCheck,
  Target,
  TrendingUp,
  Users,
  type LucideIcon,
} from "lucide-react";

export const site = {
  name: "Wilson Nwafor Accounting Services",
  shortName: "Wilson Nwafor",
  tagline: "Accounting, tax strategy & financial advisory",
  email: "wilsonnwafor@gmail.com",
  street: "123 Maddison Street",
  city: "New York, NY",
  hours: "Mon–Fri, 9 AM – 5 PM EST",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com",
  social: {
    linkedin: "https://www.linkedin.com/",
    twitter: "https://twitter.com/",
    facebook: "https://www.facebook.com/",
  },
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export const stats = [
  { value: "$50M+", label: "Client savings identified" },
  { value: "100%", label: "Tax filing compliance" },
  { value: "10+", label: "Years in practice" },
];

export type Service = {
  slug: string;
  icon: LucideIcon;
  title: string;
  short: string;
  summary: string;
  benefits: string[];
};

export const services: Service[] = [
  {
    slug: "bookkeeping",
    icon: BookOpen,
    title: "Bookkeeping & Financial Reporting",
    short: "Clean books, closed every month, so you always know where you stand.",
    summary:
      "We keep your books current and reconciled, then turn them into reports you can actually read and act on.",
    benefits: [
      "Monthly income statements and balance sheets",
      "Cash flow tracking with a rolling 13-week view",
      "Bank and credit card reconciliation every month",
      "Clean, audit-ready records for lenders and investors",
    ],
  },
  {
    slug: "tax",
    icon: Receipt,
    title: "Tax Preparation & Planning",
    short: "Accurate returns and year-round planning that keeps more in your pocket.",
    summary:
      "Filing is the last step, not the only one. We plan through the year so there are no April surprises.",
    benefits: [
      "Individual and corporate tax returns",
      "IRS audit and notice representation",
      "Strategic deductions and credits review",
      "Quarterly estimated tax planning",
    ],
  },
  {
    slug: "cfo",
    icon: TrendingUp,
    title: "Fractional CFO & Financial Advisory",
    short: "Senior financial leadership on a part-time basis, at a fraction of the cost.",
    summary:
      "Get a seasoned finance lead in your leadership meetings without the cost of a full-time executive hire.",
    benefits: [
      "Budget forecasting and scenario planning",
      "Growth strategy and pricing analysis",
      "Variance analysis against plan",
      "Fundraising and lender-ready financial packages",
    ],
  },
  {
    slug: "payroll",
    icon: Users,
    title: "Payroll & Business Advisory",
    short: "Payroll that runs itself, and a structure that fits the way you operate.",
    summary:
      "From first hire to a growing team, we handle the compliance details and help you choose the right setup.",
    benefits: [
      "Automated payroll with payroll tax filings",
      "Contractor and 1099 management",
      "Entity structure setup and review (LLC, S-corp, C-corp)",
      "New York State and city registration support",
    ],
  },
];

export const testimonials = [
  {
    name: "Danielle Brooks",
    role: "Owner, Brooks Family Dental",
    quote:
      "Wilson found deductions our previous accountant never mentioned and had our books caught up in three weeks. Month-end is finally calm.",
    rating: 5,
  },
  {
    name: "Marcus Alvarez",
    role: "Founder, Alvarez Logistics",
    quote:
      "As a fractional CFO, Wilson reshaped our pricing and cash plan. We hit our first profitable quarter within the year.",
    rating: 5,
  },
  {
    name: "Priya Raman",
    role: "Co-founder, Loomhouse Studio",
    quote:
      "Payroll, entity setup, and quarterly taxes, all handled. I get clear answers within a day and no jargon.",
    rating: 5,
  },
];

export const values: { icon: LucideIcon; title: string; text: string }[] = [
  {
    icon: ShieldCheck,
    title: "Integrity",
    text: "We tell you what the numbers say, including when it is not what you hoped to hear.",
  },
  {
    icon: BarChart3,
    title: "Data-driven accuracy",
    text: "Every figure is reconciled and traceable back to its source before it reaches you.",
  },
  {
    icon: Target,
    title: "Client-centric strategy",
    text: "Advice is built around your goals and cash position, never a one-size-fits-all package.",
  },
  {
    icon: Cpu,
    title: "Modern automation",
    text: "Cloud tools remove repetitive work, which leaves more time for judgment and planning.",
  },
];

export const timeline = [
  {
    year: "2014",
    title: "The firm opens",
    text: "Wilson Nwafor starts the practice with a handful of local small business clients.",
  },
  {
    year: "2017",
    title: "Payroll and advisory added",
    text: "Growing clients asked for more than tax returns, so we built payroll and advisory services around them.",
  },
  {
    year: "2019",
    title: "Fractional CFO service launches",
    text: "Founders gain part-time senior financial leadership for budgeting, forecasting, and fundraising.",
  },
  {
    year: "2021",
    title: "Maddison Street office",
    text: "A permanent home for client meetings and workshops in the heart of New York.",
  },
  {
    year: "2023",
    title: "Free tax clinic for founders",
    text: "Annual community sessions that help new New York entrepreneurs get their first filings right.",
  },
  {
    year: "2025",
    title: "200+ businesses served",
    text: "A fully automated reporting stack gives every client a live view of their finances.",
  },
];

export const faqs = [
  {
    q: "How much do your services cost?",
    a: "Bookkeeping and payroll are priced as flat monthly fees based on transaction volume and headcount. Tax preparation is quoted per return, and fractional CFO work is a monthly retainer. We provide a written quote after a free 30-minute consultation, so there are no surprises.",
  },
  {
    q: "Do you work with businesses outside New York?",
    a: "Yes. Most of our clients are New York based, but we file federal returns and multi-state filings for clients across the U.S. Our process is fully remote-friendly.",
  },
  {
    q: "Can you help if my books are behind or a mess?",
    a: "Absolutely. We run a catch-up cleanup that reconciles prior months, corrects errors, and gets you current. You then move onto a regular monthly close.",
  },
  {
    q: "What happens if I get an IRS notice or audit letter?",
    a: "Forward it to us. We review it, respond on your behalf, and represent you throughout the process. Representation is included for any return we prepared.",
  },
  {
    q: "Which accounting software do you use?",
    a: "We work in QuickBooks Online and Xero, and connect to most payroll, payments, and expense tools. If you already use one, we can take it over rather than make you switch.",
  },
  {
    q: "How quickly can we get started?",
    a: "Most clients are onboarded within one to two weeks. After your consultation, we collect access to your accounts, agree a scope, and schedule your first close.",
  },
];
