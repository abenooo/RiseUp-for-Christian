"use client"
import Link from "next/link"
import { HeartPulse, Brain, HeartCrack, AlertTriangle, HelpCircle, SmilePlus, Activity, ShieldAlert, ChevronRight } from "lucide-react"

export default function Services() {
  const issues = [
    {
      title: "Worry & Anxiety",
      description: "Is your mind troubled by worry or fear? Find peace through prayer, biblical wisdom, and support from Ethiopian Christian mentors.",
      icon: <AlertTriangle className="h-6 w-6 text-fuchsia-500" />,
      href: "/anxiety"
    },
    {
      title: "Stress & Burnout",
      description: "Are you feeling overwhelmed by school, work, or life? Connect with faith-filled counselors who understand Ethiopian challenges.",
      icon: <Activity className="h-6 w-6 text-fuchsia-500" />,
      href: "/stress"
    },
    {
      title: "Sadness & Depression",
      description: "Feeling persistently sad or empty? Our Christian specialists can help you find hope and light again.",
      icon: <HeartCrack className="h-6 w-6 text-fuchsia-500" />,
      href: "/depression"
    },
    {
      title: "Past Trauma",
      description: "Struggling with painful memories or past experiences? Healing begins with compassionate, faith-based support.",
      icon: <ShieldAlert className="h-6 w-6 text-fuchsia-500" />,
      href: "/trauma"
    },
    {
      title: "Relationship Challenges",
      description: "Facing difficulties in family, friendship, or dating? Learn healthy, biblical ways to communicate and relate.",
      icon: <HeartPulse className="h-6 w-6 text-fuchsia-500" />,
      href: "/relationships"
    },
    {
      title: "Self-Esteem & Identity",
      description: "Doubting your worth? Discover your true value as a child of God and build confidence in Christ.",
      icon: <SmilePlus className="h-6 w-6 text-fuchsia-500" />,
      href: "/self-esteem"
    },
    {
      title: "Life Transitions",
      description: "Struggling with change—graduation, moving, or new seasons? Navigate life's transitions with biblical guidance.",
      icon: <HelpCircle className="h-6 w-6 text-fuchsia-500" />,
      href: "/transitions"
    },
    {
      title: "Grief & Loss",
      description: "Have you lost a loved one? Find comfort and hope in Christ with compassionate support for your healing journey.",
      icon: <HeartCrack className="h-6 w-6 text-fuchsia-500" />,
      href: "/grief"
    },
    {
      title: "Addiction & Habits",
      description: "Seeking freedom from harmful habits? Discover lasting change through prayer, accountability, and Christian community.",
      icon: <ShieldAlert className="h-6 w-6 text-fuchsia-500" />,
      href: "/addiction"
    }
  ]

  return (
    <section className="py-16 bg-zinc-900">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          We Support Your Every Spiritual Need
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {issues.map((issue, index) => (
            <div key={index} className="bg-zinc-800 rounded-xl p-6 border border-zinc-700 hover:border-fuchsia-500 transition-all duration-300">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-2 bg-zinc-700 rounded-lg">
                  {issue.icon}
                </div>
                <h3 className="text-xl font-semibold text-white">{issue.title}</h3>
              </div>
              <p className="text-zinc-300 mb-6">{issue.description}</p>
              <Link 
                href={issue.href}
                className="inline-flex items-center text-fuchsia-400 hover:text-fuchsia-300 font-medium transition-colors"
              >
                Know More <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}