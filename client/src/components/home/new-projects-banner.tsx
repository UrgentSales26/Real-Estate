
import React from "react";
import { Building2, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useLocation } from "wouter";

export default function NewProjectsBanner() {
  const [, navigate] = useLocation();

  return (
    <div className="bg-gradient-to-r from-slate-50 to-gray-50 py-12">
      <div className="container mx-auto px-4">
        <Badge variant="secondary" className="mb-6">
          New Launch
        </Badge>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Section */}
          <div 
            className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
            onClick={() => navigate("/projects")}
          >
            <div className="flex items-center gap-3 mb-4">
              <Building2 className="h-8 w-8 text-primary" />
              <h3 className="text-2xl font-semibold">Projects</h3>
            </div>
            <p className="text-gray-600">
              Discover new and upcoming residential projects from top developers
            </p>
          </div>

          {/* Right Section */}
          <div className="grid grid-cols-2 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-200" />
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-end mt-6">
          <Button 
            onClick={() => navigate("/projects")}
            className="gap-2"
          >
            View All New Projects
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
