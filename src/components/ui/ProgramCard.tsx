"use client";

import { motion } from "framer-motion";
import { Cpu, Briefcase, Palette, Scale, ArrowRight } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const iconMap = {
  Cpu,
  Briefcase,
  Palette,
  Scale,
};

interface ProgramCardProps {
  title: string;
  description: string;
  image: string;
  icon: keyof typeof iconMap;
  tag: string;
}

const ProgramCard = ({ title, description, image, icon, tag }: ProgramCardProps) => {
  const Icon = iconMap[icon];

  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
      className="h-full"
    >
      <Card className="h-full overflow-hidden border-2 hover:border-primary/50 transition-colors group">
        <div className="relative h-48 overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute top-4 right-4">
            <Badge className="bg-white text-primary hover:bg-white">{tag}</Badge>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
        </div>
        
        <CardHeader className="relative -mt-12">
          <div className="w-14 h-14 rounded-2xl bg-primary text-white flex items-center justify-center shadow-lg mb-4 ring-4 ring-background">
            <Icon size={28} />
          </div>
          <CardTitle className="text-xl font-bold">{title}</CardTitle>
        </CardHeader>

        <CardContent>
          <p className="text-muted-foreground line-clamp-3">
            {description}
          </p>
        </CardContent>

        <CardFooter>
          <Button variant="link" className="p-0 h-auto font-bold text-primary group/btn">
            View Details 
            <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default ProgramCard;
