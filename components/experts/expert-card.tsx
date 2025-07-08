import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { 
  Calendar, 
  Clock, 
  MessageCircle, 
  Video, 
  MapPin, 
  Star,
  Shield,
  ThumbsUp,
  Check,
  User
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExpertType } from "@/data/experts-data";

interface ExpertCardProps {
  expert: ExpertType;
}

export default function ExpertCard({ expert }: ExpertCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="group bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden transition-all duration-300 hover:border-fuchsia-500/50 hover:shadow-lg hover:shadow-fuchsia-500/10 hover:-translate-y-1"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        {/* Expert Image */}
        <div className="relative h-48 w-full overflow-hidden">
          <img 
            src={expert.image} 
            alt={expert.name}
            className={`object-cover w-full h-full transition-transform duration-700 ${isHovered ? 'scale-105' : 'scale-100'}`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
          
          {/* Verification Badge */}
          {expert.verified && (
            <div className="absolute top-3 right-3 bg-fuchsia-500 text-white rounded-full p-1 shadow-md">
              <Shield className="h-4 w-4" />
            </div>
          )}
          
          {/* Available Today Badge */}
          {expert.availableToday && (
            <div className="absolute top-3 left-3">
              <Badge className="bg-green-500/20 text-green-400 border-green-500 text-xs font-medium px-2 py-0.5 flex items-center gap-1">
                <Check className="h-3 w-3" />
                Available Today
              </Badge>
            </div>
          )}
          
          {/* Categories */}
          <div className="absolute bottom-3 left-3 flex flex-wrap gap-2">
            {expert.categories.slice(0, 2).map((category, index) => (
              <Badge key={index} className="bg-zinc-800/90 text-white text-xs">
                {category}
              </Badge>
            ))}
            {expert.categories.length > 2 && (
              <Badge className="bg-zinc-800/90 text-white text-xs">
                +{expert.categories.length - 2}
              </Badge>
            )}
          </div>
        </div>
      </div>
      
      {/* Expert Info */}
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold text-white group-hover:text-fuchsia-400 transition-colors">
            {expert.name}
          </h3>
          <div className="flex items-center">
            <Star className="h-4 w-4 text-yellow-400 mr-1 fill-current" />
            <span className="text-sm font-medium">{expert.rating}</span>
            <span className="text-xs text-zinc-500 ml-1">({expert.reviewCount})</span>
          </div>
        </div>
        
        <p className="text-zinc-400 text-sm mb-3">
          {expert.title}
        </p>
        
        {/* Specialties */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-1 mb-2">
            {expert.specialties.slice(0, 3).map((specialty, index) => (
              <Badge key={index} className="text-xs font-normal bg-zinc-800/50 text-zinc-300">
                {specialty}
              </Badge>
            ))}
            {expert.specialties.length > 3 && (
              <Badge className="text-xs font-normal bg-zinc-800/50 text-zinc-300">
                +{expert.specialties.length - 3}
              </Badge>
            )}
          </div>
        </div>
        
        {/* Session Info */}
        <div className="grid grid-cols-2 gap-2 mb-4">
          <div className="flex items-center text-zinc-400 text-sm">
            <Clock className="h-4 w-4 mr-2 text-zinc-500" />
            <span>{expert.sessionLength} min</span>
          </div>
          <div className="flex items-center text-zinc-400 text-sm">
            <ThumbsUp className="h-4 w-4 mr-2 text-zinc-500" />
            <span>{expert.successRate}% Success</span>
          </div>
          <div className="flex items-center text-zinc-400 text-sm">
            <MapPin className="h-4 w-4 mr-2 text-zinc-500" />
            <span>{expert.location}</span>
          </div>
          <div className="flex items-center text-zinc-400 text-sm">
            <Calendar className="h-4 w-4 mr-2 text-zinc-500" />
            <span>{expert.experience} yrs exp</span>
          </div>
        </div>
        
        {/* Price and Book Button */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-3 border-t border-zinc-800 gap-3">
          <div>
            <span className="text-lg font-bold text-white">${expert.pricePerHour}</span>
            <span className="text-zinc-500 text-sm">/hour</span>
          </div>
          <div className="flex flex-wrap gap-2 justify-center sm:justify-end w-full sm:w-auto">
            <Button
              size="sm"
              variant="outline"
              className="rounded-full border-zinc-700 text-zinc-300 hover:bg-zinc-800 hover:text-white"
            >
              View Profile
            </Button>
            <Button
              size="sm"
              className="rounded-full bg-fuchsia-600 hover:bg-fuchsia-700 text-white"
            >
              Book Now
            </Button>
          </div>
        </div>
      </div>
      
      {/* Session Types */}
      <div className="bg-zinc-950 p-3 flex justify-center gap-4 border-t border-zinc-800">
        {expert.sessionTypes.includes("video") && (
          <div className="flex items-center text-zinc-400 hover:text-fuchsia-400 transition-colors">
            <Video className="h-4 w-4 mr-1" />
            <span className="text-xs">Video</span>
          </div>
        )}
        {expert.sessionTypes.includes("chat") && (
          <div className="flex items-center text-zinc-400 hover:text-fuchsia-400 transition-colors">
            <MessageCircle className="h-4 w-4 mr-1" />
            <span className="text-xs">Chat</span>
          </div>
        )}
        {expert.sessionTypes.includes("in-person") && (
          <div className="flex items-center text-zinc-400 hover:text-fuchsia-400 transition-colors">
            <User className="h-4 w-4 mr-1" />
            <span className="text-xs">In-Person</span>
          </div>
        )}
      </div>
    </div>
  );
}