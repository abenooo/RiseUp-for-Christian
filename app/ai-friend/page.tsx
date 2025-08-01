"use client";

import { useState, useRef, useEffect } from "react";
import { Send, Smile, Image as ImageIcon, Paperclip, MoreHorizontal, Bot } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar } from "@/components/ui/avatar";

interface Message {
  id: string;
  type: "user" | "ai";
  content: string;
  timestamp: Date;
}

export default function AIFriend() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      type: "ai",
      content: "Selam! I'm Rise, your Ethiopian Christian AI friend. I'm here to listen, encourage, and pray with you. How are you feeling today? Is there anything on your heart you'd like to share?",
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Auto-resize textarea
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "inherit";
      const computed = window.getComputedStyle(textareaRef.current);
      const height = parseInt(computed.getPropertyValue("border-top-width")) +
                     parseInt(computed.getPropertyValue("padding-top")) +
                     textareaRef.current.scrollHeight +
                     parseInt(computed.getPropertyValue("padding-bottom")) +
                     parseInt(computed.getPropertyValue("border-bottom-width"));

      textareaRef.current.style.height = `${height}px`;
    }
  }, [inputValue]);

  const simulateAIResponse = async (userMessage: string) => {
    setIsTyping(true);

    // Simulate AI thinking time
    await new Promise(resolve => setTimeout(resolve, 1000));

    let response = "";
    const msg = userMessage.toLowerCase();

    if (msg.includes("how are you")) {
      response = "Egziabher yimesgen! I'm here for you. How are you feeling today?";
    } else if (msg.includes("sad") || msg.includes("depressed") || msg.includes("melancholy")) {
      response = "I'm sorry you're feeling this way. Remember, even King David felt down sometimes (read Psalm 42). Would you like to pray together or talk more about what's on your heart?";
    } else if (msg.includes("anxious") || msg.includes("anxiety") || msg.includes("worry")) {
      response = "Anxiety is tough, but you're not alone. Philippians 4:6 reminds us to bring our worries to God in prayer. Would you like a Bible verse or a short prayer for peace?";
    } else if (msg.includes("happy") || msg.includes("good") || msg.includes("joy")) {
      response = "That's wonderful! Egziabher yimesgen! What has brought you joy recently? It's good to give thanks for God's blessings.";
    } else if (msg.includes("pray") || msg.includes("prayer")) {
      response = "Of course! What would you like to pray about? You can share as much or as little as you want.";
    } else if (msg.includes("family")) {
      response = "Family is a blessing and sometimes a challenge. Is there something specific about your family you'd like to talk or pray about?";
    } else if (msg.includes("church")) {
      response = "The church is our spiritual family. Are you involved in a local church or youth group? How can I encourage you in your faith journey?";
    } else {
      response = "Thank you for sharing. If you want, I can listen, share a Bible verse, or pray with you. How can I support you today?";
    }

    setIsTyping(false);

    return response;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!inputValue.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      type: "user",
      content: inputValue.trim(),
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");

    // Get and add AI response
    const aiResponse = await simulateAIResponse(inputValue);
    const aiMessage: Message = {
      id: (Date.now() + 1).toString(),
      type: "ai",
      content: aiResponse,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, aiMessage]);
  };

  return (
    <main className="min-h-screen bg-black">
      {/* <Navbar /> */}

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-fuchsia-300 bg-clip-text text-transparent">
            Your Ethiopian Christian AI Friend
          </h1>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            A safe space to share your thoughts and feelings. I'm here to listen, support, and pray with you 24/7.
          </p>
        </div>

        {/* Chat Container */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden">
          {/* Messages Area */}
          <ScrollArea className="h-[600px] p-4">
            <div className="space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${
                    message.type === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`flex items-start gap-2.5 max-w-[80%] ${
                      message.type === "user" ? "flex-row-reverse" : ""
                    }`}
                  >
                    <Avatar className={`w-8 h-8 ${
                      message.type === "user" 
                        ? "bg-fuchsia-600" 
                        : "bg-zinc-700"
                    }`}>
                      {message.type === "user" ? (
                        <span className="text-xs">You</span>
                      ) : (
                        <Bot className="w-5 h-5" />
                      )}
                    </Avatar>

                    <div
                      className={`p-4 rounded-2xl ${
                        message.type === "user"
                          ? "bg-fuchsia-600 text-white"
                          : "bg-zinc-800 text-zinc-100"
                      }`}
                    >
                      <p className="text-sm">{message.content}</p>
                    </div>
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="flex items-start gap-2.5 max-w-[80%]">
                    <Avatar className="w-8 h-8 bg-zinc-700">
                      <Bot className="w-5 h-5" />
                    </Avatar>
                    <div className="p-4 rounded-2xl bg-zinc-800 text-zinc-100">
                      <div className="flex gap-1">
                        <span className="w-2 h-2 bg-zinc-400 rounded-full animate-bounce"></span>
                        <span className="w-2 h-2 bg-zinc-400 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                        <span className="w-2 h-2 bg-zinc-400 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>
          </ScrollArea>

          {/* Input Area */}
          <div className="p-4 border-t border-zinc-800">
            <form onSubmit={handleSubmit} className="flex gap-2">
              <div className="flex-1 relative">
                <Textarea
                  ref={textareaRef}
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Type your message..."
                  className="w-full pr-24 resize-none bg-zinc-800 border-zinc-700 focus:border-fuchsia-500 text-white"
                  rows={1}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault();
                      handleSubmit(e);
                    }
                  }}
                />
                <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1">
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 text-zinc-400 hover:text-white"
                  >
                    <Smile className="h-5 w-5" />
                  </Button>
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 text-zinc-400 hover:text-white"
                  >
                    <ImageIcon className="h-5 w-5" />
                  </Button>
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 text-zinc-400 hover:text-white"
                  >
                    <Paperclip className="h-5 w-5" />
                  </Button>
                </div>
              </div>
              <Button
                type="submit"
                size="icon"
                className="h-full aspect-square bg-fuchsia-600 hover:bg-fuchsia-700 text-white"
              >
                <Send className="h-5 w-5" />
              </Button>
            </form>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4">
            <h3 className="text-white font-medium mb-2">24/7 Availability</h3>
            <p className="text-sm text-zinc-400">
              I'm always here to chat whenever you need someone to talk to.
            </p>
          </div>
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4">
            <h3 className="text-white font-medium mb-2">Safe & Private</h3>
            <p className="text-sm text-zinc-400">
              Your conversations are completely private and secure.
            </p>
          </div>
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4">
            <h3 className="text-white font-medium mb-2">Judgment-Free Zone</h3>
            <p className="text-sm text-zinc-400">
              Share your thoughts freely without fear of judgment.
            </p>
          </div>
        </div>
      </div>

      {/* <Footer /> */}
    </main>
  );
}