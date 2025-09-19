import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { GraduationCap, Menu, X } from "lucide-react";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-card/95 backdrop-blur-sm border-b border-border/50 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 font-bold text-xl">
            <GraduationCap className="h-8 w-8 text-primary" />
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Navikar
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/quiz"
              className="text-foreground hover:text-primary transition-smooth"
            >
              Take Quiz
            </Link>
            <Link
              to="/courses"
              className="text-foreground hover:text-primary transition-smooth"
            >
              Explore Courses
            </Link>
            <Link
              to="/colleges"
              className="text-foreground hover:text-primary transition-smooth"
            >
              Find Colleges
            </Link>
            <Link
              to="/timeline"
              className="text-foreground hover:text-primary transition-smooth"
            >
              Timeline
            </Link>
            <Button variant="hero" size="sm">
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-card border-t border-border/50">
              <Link
                to="/quiz"
                className="block px-3 py-2 text-foreground hover:text-primary transition-smooth"
                onClick={() => setIsOpen(false)}
              >
                Take Quiz
              </Link>
              <Link
                to="/courses"
                className="block px-3 py-2 text-foreground hover:text-primary transition-smooth"
                onClick={() => setIsOpen(false)}
              >
                Explore Courses
              </Link>
              <Link
                to="/colleges"
                className="block px-3 py-2 text-foreground hover:text-primary transition-smooth"
                onClick={() => setIsOpen(false)}
              >
                Find Colleges
              </Link>
              <Link
                to="/timeline"
                className="block px-3 py-2 text-foreground hover:text-primary transition-smooth"
                onClick={() => setIsOpen(false)}
              >
                Timeline
              </Link>
              <div className="px-3 py-2">
                <Button variant="hero" size="sm" className="w-full">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
