"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  avatar: string;
}

const TestimonialCard = ({ name, role, content, avatar }: TestimonialCardProps) => {
  return (
    <Card className="border-none bg-primary/5 relative overflow-hidden h-full group">
      <div className="absolute top-6 right-6 text-primary/10">
        <Quote size={80} strokeWidth={4} />
      </div>
      
      <CardContent className="pt-12 pb-8 px-8 relative z-10 flex flex-col h-full">
        <p className="text-lg italic text-foreground/80 mb-8 flex-grow">
          &quot;{content}&quot;
        </p>
        
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-primary ring-4 ring-primary/5">
            <img src={avatar} alt={name} className="w-full h-full object-cover" />
          </div>
          <div>
            <h4 className="font-bold text-lg">{name}</h4>
            <p className="text-sm text-primary font-semibold">{role}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
