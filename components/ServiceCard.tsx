"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  index: number;
}

export default function ServiceCard({ icon, title, description, features, index }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
      className="w-full"
    >
      <Card className="h-full overflow-hidden border-2 hover:border-blue-500 transition-all duration-300 hover:shadow-xl">
        <CardHeader className="relative pb-0">
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full -mr-16 -mt-16" />
          <div className="relative z-10">
            <div className="flex justify-center mb-4 transform transition-transform duration-300 hover:scale-110">
              <div className="p-3 bg-blue-100 rounded-xl">
                {icon}
              </div>
            </div>
            <CardTitle className="text-xl text-blue-900 text-center">{title}</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="relative">
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-500/10 rounded-full -ml-12 -mb-12" />
          <div className="relative z-10">
            <p className="text-gray-600 mb-6">{description}</p>
            <ul className="space-y-3">
              {features.map((feature, i) => (
                <li key={i} className="flex items-center text-gray-600 bg-blue-50 p-2 rounded-lg">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}