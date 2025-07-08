"use client"
import { Zap, MessageSquare, Link as LinkIcon, ChevronRight } from "lucide-react"

export default function HowItWorks() {
  return (
    <section className="py-16 bg-zinc-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">How It Works</h2>
        
        {/* Step 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="bg-fuchsia-600 text-white rounded-full h-12 w-12 flex items-center justify-center text-xl font-bold">01</div>
              <h3 className="text-2xl font-bold">Find Spiritual Mentors</h3>
            </div>
            <p className="text-xl text-zinc-300">
              Choose from our community of trusted spiritual mentors
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              {/* Expert Category 1 */}
              <div className="bg-zinc-800 p-6 rounded-xl border border-zinc-700">
                <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
                  <Zap className="h-5 w-5 text-fuchsia-500" />
                  Bible Teachers
                </h4>
                <ul className="space-y-3 text-zinc-300">
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-fuchsia-500" />
                    Sports & Fitness
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-fuchsia-500" />
                    Nutritionists
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-fuchsia-500" />
                    Sleep Specialists
                  </li>
                </ul>
              </div>
              
              {/* Expert Category 2 */}
              <div className="bg-zinc-800 p-6 rounded-xl border border-zinc-700">
                <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
                  <Zap className="h-5 w-5 text-fuchsia-500" />
                  Prayer Partners
                </h4>
                <ul className="space-y-3 text-zinc-300">
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-fuchsia-500" />
                    Mindfulness
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-fuchsia-500" />
                    Stress Management
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-fuchsia-500" />
                    Life Transitions
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-zinc-800 rounded-xl p-8 border border-zinc-700 h-full flex items-center justify-center">
            <div className="text-center">
              <div className="inline-block p-4 bg-zinc-700 rounded-lg mb-6">
                <Zap className="h-12 w-12 text-fuchsia-500" />
              </div>
              <h4 className="text-xl font-semibold mb-2">150+ Experts</h4>
              <p className="text-zinc-400">Verified professionals across various specialties</p>
            </div>
          </div>
        </div>
        
        {/* Step 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <div className="order-1 lg:order-2 space-y-6">
            <div className="flex items-center gap-4">
              <div className="bg-fuchsia-600 text-white rounded-full h-12 w-12 flex items-center justify-center text-xl font-bold">02</div>
              <h3 className="text-2xl font-bold">Pray or Chat</h3>
            </div>
            <p className="text-xl text-zinc-300">
              Start an instant prayer or chat with your mentor—always free
            </p>
            
            <div className="mt-8 space-y-6">
              <div className="bg-zinc-800 p-6 rounded-xl border border-zinc-700">
                <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
                  <MessageSquare className="h-5 w-5 text-fuchsia-500" />
                  Choose Your Mentor
                </h4>
                <ul className="space-y-3 text-zinc-300">
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-fuchsia-500" />
                    Browse profiles and specialties
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-fuchsia-500" />
                    Read reviews and ratings
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-fuchsia-500" />
                    Select your preferred expert
                  </li>
                </ul>
              </div>
              
              <div className="bg-zinc-800 p-6 rounded-xl border border-zinc-700">
                <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
                  <LinkIcon className="h-5 w-5 text-fuchsia-500" />
                  Grow in Faith Together
                </h4>
                <ul className="space-y-3 text-zinc-300">
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-fuchsia-500" />
                    Schedule a session
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-fuchsia-500" />
                    Chat now button
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-fuchsia-500" />
                    Secure payment options
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="order-2 lg:order-1 bg-zinc-800 rounded-xl p-8 border border-zinc-700 h-full flex items-center justify-center">
            <div className="text-center">
              <div className="inline-block p-4 bg-zinc-700 rounded-lg mb-6">
                <MessageSquare className="h-12 w-12 text-fuchsia-500" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Instant Connection</h4>
              <p className="text-zinc-400">No waiting periods, help when you need it</p>
            </div>
          </div>
        </div>
        
        {/* Step 3 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="bg-fuchsia-600 text-white rounded-full h-12 w-12 flex items-center justify-center text-xl font-bold">03</div>
              <h3 className="text-2xl font-bold">Grow in Faith Together</h3>
            </div>
            <p className="text-xl text-zinc-300">
              Share your thoughts, get support, and feel better
            </p>
            
            <div className="bg-zinc-800 p-6 rounded-xl border border-zinc-700 mt-8">
              <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
                <LinkIcon className="h-5 w-5 text-fuchsia-500" />
                Real Fellowship, Deeper Faith
              </h4>
              <ul className="space-y-3 text-zinc-300">
                <li className="flex items-center gap-2">
                  <ChevronRight className="h-4 w-4 text-fuchsia-500" />
                  Confidential and secure platform
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight className="h-4 w-4 text-fuchsia-500" />
                  Personalized support
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight className="h-4 w-4 text-fuchsia-500" />
                  Continuous progress tracking
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-zinc-800 rounded-xl p-8 border border-zinc-700 h-full flex items-center justify-center">
            <div className="text-center">
              <div className="inline-block p-4 bg-zinc-700 rounded-lg mb-6">
                <LinkIcon className="h-12 w-12 text-fuchsia-500" />
              </div>
              <h4 className="text-xl font-semibold mb-2">24/7 Availability</h4>
              <p className="text-zinc-400">Help is available whenever you need it</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}