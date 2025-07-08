import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"
import Link from "next/link"
import { Search, Clock, User, ArrowRight } from "lucide-react"

interface ArticleCardProps {
  image: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  author: string;
  slug: string;
}

interface TopicCardProps {
  icon: string;
  title: string;
  description: string;
  articleCount: number;
  slug: string;
}

export default function BlogsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-r from-purple-50 via-pink-50 to-purple-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-5 text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4">
            Ethiopian Faith Resources & <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Biblical Wisdom</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Discover inspiring articles, biblical insights, and spiritual resources to strengthen your walk with Christ and deepen your faith journey in Ethiopia.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <Input
              type="text"
              placeholder="Search for biblical topics, spiritual growth, or faith resources..."
              className="pl-12 py-6 rounded-full border-gray-200 bg-white shadow-lg text-base focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          </div>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="py-10 max-w-7xl mx-auto px-5">
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="w-full max-w-5xl mx-auto flex flex-wrap justify-center bg-white shadow-md rounded-full h-auto p-2 mb-8">
            <TabsTrigger
              value="all"
              className="rounded-full px-6 py-3 data-[state=active]:bg-purple-600 data-[state=active]:text-white text-gray-700 font-medium transition-all"
            >
              All Topics
            </TabsTrigger>
            <TabsTrigger
              value="prayer"
              className="rounded-full px-6 py-3 data-[state=active]:bg-purple-600 data-[state=active]:text-white text-gray-700 font-medium transition-all"
            >
              Prayer & Worship
            </TabsTrigger>
            <TabsTrigger
              value="bible-study"
              className="rounded-full px-6 py-3 data-[state=active]:bg-purple-600 data-[state=active]:text-white text-gray-700 font-medium transition-all"
            >
              Bible Study
            </TabsTrigger>
            <TabsTrigger
              value="discipleship"
              className="rounded-full px-6 py-3 data-[state=active]:bg-purple-600 data-[state=active]:text-white text-gray-700 font-medium transition-all"
            >
              Discipleship
            </TabsTrigger>
            <TabsTrigger
              value="christian-living"
              className="rounded-full px-6 py-3 data-[state=active]:bg-purple-600 data-[state=active]:text-white text-gray-700 font-medium transition-all"
            >
              Christian Living
            </TabsTrigger>
            <TabsTrigger
              value="relationships"
              className="rounded-full px-6 py-3 data-[state=active]:bg-purple-600 data-[state=active]:text-white text-gray-700 font-medium transition-all"
            >
              Faith & Relationships
            </TabsTrigger>
            <TabsTrigger
              value="spiritual-growth"
              className="rounded-full px-6 py-3 data-[state=active]:bg-purple-600 data-[state=active]:text-white text-gray-700 font-medium transition-all"
            >
              Spiritual Growth
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </section>

      {/* Featured Article */}
      <section className="max-w-7xl mx-auto px-5 mb-16">
        <div className="bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-5">
            <div className="lg:col-span-3 relative h-64 lg:h-auto">
              <Image
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
                alt="Deepening Your Prayer Life: An Ethiopian Perspective"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            <div className="lg:col-span-2 p-6 md:p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 text-xs font-semibold px-3 py-1 rounded-full">
                    Featured Article
                  </span>
                  <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full">
                    Prayer & Worship
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  Deepening Your Prayer Life: An Ethiopian Perspective
                </h2>
                <p className="text-gray-600 mb-6 line-clamp-3 lg:line-clamp-4">
                  Prayer is the lifeline of every believer's relationship with God. Discover biblical principles and practical steps to transform your prayer life, with stories from Ethiopian churches and communities.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <Clock size={16} className="text-gray-500" />
                    <span className="text-sm text-gray-500">12 min read</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <User size={16} className="text-gray-500" />
                    <span className="text-sm text-gray-500">Pastor Dawit Kebede</span>
                  </div>
                </div>
                <Link href="/blogs/deepening-prayer-life">
                  <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-full px-6 shadow-lg">
                    Read More
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="max-w-7xl mx-auto px-5 mb-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Latest Ethiopian Faith Articles</h2>
          <Link href="/blogs/latest" className="text-purple-600 font-semibold flex items-center gap-1 hover:text-purple-700 transition-colors">
            View All <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Article Card 1 */}
          <ArticleCard
            image="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
            title="5 Biblical Principles for Overcoming Life's Challenges in Ethiopia"
            excerpt="When life gets difficult, God's Word provides the strength and wisdom we need. Discover five powerful biblical principles that will help you navigate through tough times in the Ethiopian context."
            category="Christian Living"
            readTime="8 min read"
            author="Sara Bekele"
            slug="biblical-principles-overcoming-challenges-ethiopia"
          />

          {/* Article Card 2 */}
          <ArticleCard
            image="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80"
            title="Building Christ-Centered Relationships in Ethiopian Communities"
            excerpt="Learn how to cultivate meaningful relationships that honor God. Explore biblical principles for loving others as Christ loved us, fostering unity, and building community in Ethiopia."
            category="Faith & Relationships"
            readTime="10 min read"
            author="Pastor Getachew Alemu"
            slug="christ-centered-relationships-ethiopia"
          />

          {/* Article Card 3 */}
          <ArticleCard
            image="https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80"
            title="Understanding God's Grace: Freedom from Condemnation"
            excerpt="Grace is more than just forgiveness—it's God's unmerited favor that transforms lives. Discover the depth of God's grace and how it frees us from shame and condemnation, with testimonies from Ethiopian believers."
            category="Spiritual Growth"
            readTime="7 min read"
            author="Dr. Selamawit Tesfaye"
            slug="understanding-gods-grace-ethiopia"
          />
        </div>
      </section>

      {/* Popular Topics */}
      <section className="max-w-7xl mx-auto px-5 mb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Popular Faith Topics in Ethiopia</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Topic Card 1 */}
          <TopicCard
            icon="📖"
            title="Bible Study Guides"
            description="In-depth studies of Scripture with practical applications for daily Christian living and spiritual growth in Ethiopia."
            articleCount={32}
            slug="bible-study-guides"
          />

          {/* Topic Card 2 */}
          <TopicCard
            icon="🙏"
            title="Prayer & Worship"
            description="Resources to deepen your prayer life and enhance your worship experience in Ethiopian churches."
            articleCount={28}
            slug="prayer-worship"
          />

          {/* Topic Card 3 */}
          <TopicCard
            icon="✝️"
            title="Discipleship Journey"
            description="Guidance for growing as a disciple of Christ and helping others in their faith journey across Ethiopia."
            articleCount={24}
            slug="discipleship-journey"
          />

          {/* Topic Card 4 */}
          <TopicCard
            icon="💕"
            title="Christian Relationships"
            description="Biblical wisdom for building healthy relationships in marriage, family, and Ethiopian Christian community."
            articleCount={19}
            slug="christian-relationships"
          />
        </div>
      </section>

      {/* Expert Insights */}
      <section className="max-w-7xl mx-auto px-5 mb-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Pastoral Insights from Ethiopia</h2>
          <Link href="/blogs/pastoral-insights" className="text-purple-600 font-semibold flex items-center gap-1 hover:text-purple-700 transition-colors">
            View All <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Expert Article 1 */}
          <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 flex flex-col sm:flex-row hover:shadow-xl transition-shadow">
            <div className="sm:w-1/3 relative h-48 sm:h-auto">
              <Image
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="Pastor Dawit Kebede"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 33vw"
              />
            </div>
            <div className="sm:w-2/3 p-6">
              <span className="bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full">
                Pastoral Wisdom
              </span>
              <h3 className="text-xl font-bold text-gray-900 mt-3 mb-2">
                Finding God's Will in Life Decisions
              </h3>
              <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                How do we discern God's will when facing important life decisions? Pastor Dawit shares biblical principles for seeking God's guidance and walking in His perfect plan for Ethiopians.
              </p>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full overflow-hidden">
                  <Image
                    src="https://randomuser.me/api/portraits/men/32.jpg"
                    alt="Pastor Dawit Kebede"
                    width={40}
                    height={40}
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">Pastor Dawit Kebede</p>
                  <p className="text-xs text-gray-500">Senior Pastor & Spiritual Director</p>
                </div>
              </div>
              <Link href="/blogs/finding-gods-will">
                <Button
                  variant="outline"
                  className="text-purple-600 border-purple-600 hover:bg-purple-50 rounded-full px-4"
                >
                  Read Article
                </Button>
              </Link>
            </div>
          </div>

          {/* Expert Article 2 */}
          <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 flex flex-col sm:flex-row hover:shadow-xl transition-shadow">
            <div className="sm:w-1/3 relative h-48 sm:h-auto">
              <Image
                src="https://randomuser.me/api/portraits/women/44.jpg"
                alt="Dr. Selamawit Tesfaye"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 33vw"
              />
            </div>
            <div className="sm:w-2/3 p-6">
              <span className="bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full">
                Pastoral Wisdom
              </span>
              <h3 className="text-xl font-bold text-gray-900 mt-3 mb-2">
                Healing from Past Wounds Through Christ
              </h3>
              <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                God's healing power extends to our deepest wounds. Dr. Selamawit explores how Christ's love and biblical truth can bring restoration and wholeness to broken hearts in Ethiopia.
              </p>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full overflow-hidden">
                  <Image
                    src="https://randomuser.me/api/portraits/women/44.jpg"
                    alt="Dr. Selamawit Tesfaye"
                    width={40}
                    height={40}
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">Dr. Selamawit Tesfaye</p>
                  <p className="text-xs text-gray-500">Christian Counselor & Author</p>
                </div>
              </div>
              <Link href="/blogs/healing-through-christ">
                <Button
                  variant="outline"
                  className="text-purple-600 border-purple-600 hover:bg-purple-50 rounded-full px-4"
                >
                  Read Article
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

  
    </main>
  )
}

// Article Card Component
function ArticleCard({ image, title, excerpt, category, readTime, author, slug }: ArticleCardProps) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 flex flex-col h-full hover:shadow-xl transition-shadow group">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={image || "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center gap-2 mb-3">
          <span className="bg-purple-100 text-purple-700 text-xs font-semibold px-3 py-1 rounded-full">{category}</span>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">{title}</h3>
        <p className="text-gray-600 mb-4 flex-grow line-clamp-3">{excerpt}</p>
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
          <div className="flex items-center gap-2">
            <Clock size={16} className="text-gray-500" />
            <span className="text-sm text-gray-500">{readTime}</span>
          </div>
          <div className="flex items-center gap-2">
            <User size={16} className="text-gray-500" />
            <span className="text-sm text-gray-500">{author}</span>
          </div>
        </div>
      </div>
      <Link
        href={`/blogs/${slug}`}
        className="block p-4 text-center border-t border-gray-100 text-purple-600 font-semibold hover:bg-purple-50 transition-colors"
      >
        Read Full Article
      </Link>
    </div>
  )
}

// Topic Card Component
function TopicCard({ icon, title, description, articleCount, slug }: TopicCardProps) {
  return (
    <Link href={`/blogs/topics/${slug}`}>
      <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 h-full hover:shadow-xl transition-all hover:-translate-y-1 group">
        <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{icon}</div>
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">{title}</h3>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500 font-medium">{articleCount} articles</span>
          <ArrowRight size={16} className="text-purple-600 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  )
}