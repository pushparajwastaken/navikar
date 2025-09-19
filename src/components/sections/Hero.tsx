import { Button } from "@/components/ui/button";
import { ArrowRight, Users, BookOpen, Target } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-education.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-subtle overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5"></div>
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Your Future Starts with the{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Right Path
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl">
                Discover your ideal career through personalized assessments, explore courses that match your interests, and find the perfect college for your journey.
              </p>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8">
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">10K+ Students Guided</span>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-success" />
                <span className="text-sm font-medium">500+ Courses Mapped</span>
              </div>
              <div className="flex items-center gap-2">
                <Target className="h-5 w-5 text-accent" />
                <span className="text-sm font-medium">95% Success Rate</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/quiz">
                <Button variant="hero" size="lg" className="group">
                  Take Free Assessment
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/courses">
                <Button variant="outline" size="lg">
                  Explore Courses
                </Button>
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-strong">
              <img
                src={heroImage}
                alt="Students learning and growing their careers"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-card shadow-medium rounded-xl p-4 animate-bounce">
              <div className="text-2xl font-bold text-primary">98%</div>
              <div className="text-xs text-muted-foreground">Match Accuracy</div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-card shadow-medium rounded-xl p-4">
              <div className="text-2xl font-bold text-success">2M+</div>
              <div className="text-xs text-muted-foreground">Career Paths</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};