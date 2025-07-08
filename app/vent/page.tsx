"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, MessageSquare, PlusCircle, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Pagination, PaginationContent, PaginationItem, PaginationLink } from "@/components/ui/pagination";


const ventPosts = [
  {
    id: 1,
    identity: "Hide my Identity",
    content:
      "Selam, I am a 22-year-old Orthodox Christian from Addis Ababa. I love my faith, but sometimes I struggle to keep up with daily prayers and fasting, especially when my friends don't understand. How do you stay strong in your faith when you feel alone?",
    tags: ["Faith", "YoungAdult"],
  },
  {
    id: 2,
    identity: "Hide my Identity",
    content:
      "I am a university student in Bahir Dar. My parents want me to become a doctor, but my heart is in serving the church and youth ministry. I am afraid to disappoint them. Has anyone faced this? How did you choose between family expectations and God's calling?",
    tags: ["Family", "Calling", "Youth"],
  },
  {
    id: 3,
    identity: "Hide my Identity",
    content:
      "I recently started a relationship with a wonderful girl from my church choir. We both want to honor God, but sometimes it's hard to set boundaries. How do Ethiopian Christian couples keep their relationship pure?",
    tags: ["Relationship", "Faith", "Youth"],
  },
  {
    id: 4,
    identity: "Hide my Identity",
    content:
      "Being a medical intern in Gondar is exhausting, especially coming from a humble background. I want to help my family and serve my community, but sometimes I feel overwhelmed. Please pray for strength and wisdom.",
    tags: ["School", "Family", "Prayer"],
  },
  {
    id: 5,
    identity: "Hide my Identity",
    content:
      "I feel left out at church because I am shy and not good at making friends. I want to join the youth group, but I am afraid I won't fit in. How do you overcome social anxiety in church settings?",
    tags: ["Friendship", "Church", "Youth"],
  },
  {
    id: 6,
    identity: "Hide my Identity",
    content:
      "My father is a deacon, and everyone expects me to be perfect. But I struggle with doubts and sometimes even question my faith. Is it normal to have doubts as a Christian? How do you deal with them?",
    tags: ["Family", "Faith", "Doubt"],
  },
  {
    id: 7,
    identity: "Hide my Identity",
    content:
      "I am a 25-year-old woman from Hawassa. I want to get married, but my family keeps rejecting suitors because of their tribe or background. I trust God, but it's hard to wait. How do you deal with family pressure and trust God's timing?",
    tags: ["Relationship", "Family", "Adult"],
  },
  {
    id: 8,
    identity: "Hide my Identity",
    content:
      "I lost my mother last year, and since then, I feel distant from God. I pray, but I don't feel His presence like before. How do you find comfort and faith after losing a loved one?",
    tags: ["Family", "Grief", "Faith"],
  },
  {
    id: 9,
    identity: "Hide my Identity",
    content:
      "I am a Sunday school teacher in Jimma. Sometimes I feel like my efforts are not making a difference. The children are distracted, and parents don't seem to care. How do you stay motivated in ministry when you feel discouraged?",
    tags: ["Ministry", "Church", "Motivation"],
  },
  {
    id: 10,
    identity: "Hide my Identity",
    content:
      "I am a university student in Mekelle. I want to share my faith with my classmates, but I am afraid of being judged or misunderstood. How do you boldly share your faith in a secular environment?",
    tags: ["Faith", "School", "Courage"],
  },
];

// Available tags for creating a new vent
const tags = [
  "Relationship",
  "Teen", 
  "School",
  "Friendship",
  "Family",
  "Adult",
  "MentalIllness",
  "HealthComplications",
  "Melancholy",
  "SexualAssault",
];

interface VentCardProps {
  id: number;
  identity: string;
  content: string;
  tags: string[];
}

function VentCard({ id, identity, content, tags }: VentCardProps) {
  return (
    <Card className="bg-zinc-900 border-zinc-800 text-white hover:border-fuchsia-500/30 transition-colors">
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm text-zinc-400">{identity}</span>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="text-zinc-400 hover:text-white">
              <MessageSquare className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <p className="text-zinc-300 mb-4 line-clamp-4">{content}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="outline" className="bg-zinc-800 text-zinc-300 border-zinc-700">
              #{tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export default function VentPage() {
  const [isCreating, setIsCreating] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [content, setContent] = useState("");
  const [hideIdentity, setHideIdentity] = useState(true);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const postsPerPage = 10;
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = ventPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(ventPosts.length / postsPerPage);
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  const handleTagToggle = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag));
    } else if (selectedTags.length < 4) {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setContent("");
    setSelectedTags([]);
    setIsCreating(false);
  };

  return (
    <main className="min-h-screen bg-black text-white">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2">
            <MessageSquare className="h-6 w-6 text-fuchsia-500" />
            <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-white to-fuchsia-300 bg-clip-text text-transparent">
              Vent Anonymously
            </h1>
          </div>
          
          {isCreating ? (
            <Button 
              variant="outline" 
              className="border-zinc-700 text-zinc-300 hover:text-white flex items-center gap-2"
              onClick={() => setIsCreating(false)}
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Vents
            </Button>
          ) : (
            <Button
              className="bg-fuchsia-600 hover:bg-fuchsia-700 flex items-center gap-2"
              onClick={() => setIsCreating(true)}
            >
              <PlusCircle className="h-4 w-4" />
              Create Vent
            </Button>
          )}
        </div>

        {isCreating ? (
          <Card className="max-w-2xl mx-auto bg-zinc-900 border-zinc-800 text-white">
            <CardHeader>
              <CardTitle className="text-center text-2xl">Share Your Thoughts</CardTitle>
            </CardHeader>
            <form onSubmit={handleSubmit}>
              <CardContent className="space-y-6">
                <div className="flex items-center gap-2">
                  <Checkbox
                    id="hideIdentity"
                    checked={hideIdentity}
                    onCheckedChange={(checked) => setHideIdentity(checked as boolean)}
                  />
                  <label htmlFor="hideIdentity" className="text-sm text-zinc-300">
                    Hide my Identity
                  </label>
                </div>

                <Textarea
                  placeholder="I need to vent..."
                  className="min-h-[200px] bg-zinc-800 border-zinc-700 text-white resize-none"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  required
                />

                <div>
                  <p className="text-sm text-zinc-300 mb-2">Select Tags (up to 4)</p>
                  <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant={selectedTags.includes(tag) ? "default" : "outline"}
                        className={`cursor-pointer ${
                          selectedTags.includes(tag)
                            ? "bg-fuchsia-600 hover:bg-fuchsia-700"
                            : "bg-zinc-800 hover:bg-zinc-700 border-zinc-700"
                        }`}
                        onClick={() => handleTagToggle(tag)}
                      >
                        #{tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-end gap-2">
                <Button
                  type="button"
                  variant="outline"
                  className="border-zinc-700 text-zinc-300 hover:text-white"
                  onClick={() => setIsCreating(false)}
                >
                  Cancel
                </Button>
                <Button type="submit" className="bg-fuchsia-600 hover:bg-fuchsia-700">
                  Post Vent
                </Button>
              </CardFooter>
            </form>
          </Card>
        ) : (
          <>
            <div className="grid gap-6">
              {currentPosts.map((post) => (
                <VentCard
                  key={post.id}
                  id={post.id}
                  identity={post.identity}
                  content={post.content}
                  tags={post.tags}
                />
              ))}
            </div>

            <Pagination className="mt-8">
              <PaginationContent>
                {currentPage > 1 && (
                  <PaginationItem>
                    <PaginationLink
                      onClick={() => setCurrentPage(currentPage - 1)}
                      className="cursor-pointer bg-zinc-900 border-zinc-700 text-zinc-300 hover:text-white"
                    >
                      <ChevronLeft className="h-4 w-4 mr-1" />
                      Prev
                    </PaginationLink>
                  </PaginationItem>
                )}

                {pageNumbers.map((number) => (
                  <PaginationItem key={number}>
                    <PaginationLink
                      onClick={() => setCurrentPage(number)}
                      isActive={currentPage === number}
                      className={`cursor-pointer ${
                        currentPage === number
                          ? "bg-fuchsia-600 text-white"
                          : "bg-zinc-900 border-zinc-700 text-zinc-300 hover:text-white"
                      }`}
                    >
                      {number}
                    </PaginationLink>
                  </PaginationItem>
                ))}

                {currentPage < totalPages && (
                  <PaginationItem>
                    <PaginationLink
                      onClick={() => setCurrentPage(currentPage + 1)}
                      className="cursor-pointer bg-zinc-900 border-zinc-700 text-zinc-300 hover:text-white"
                    >
                      Next
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </PaginationLink>
                  </PaginationItem>
                )}
              </PaginationContent>
            </Pagination>
          </>
        )}
      </div>
      
    </main>
  );
}