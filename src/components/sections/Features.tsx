import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Brain, 
  Map, 
  MapPin, 
  Calendar, 
  User, 
  ArrowRight 
} from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  {
    icon: Brain,
    title: "Smart Aptitude Assessment",
    description: "Take comprehensive quizzes to discover your interests, strengths, and personality traits. Get personalized recommendations for Arts, Science, Commerce, or Vocational streams.",
    color: "text-primary",
    bgColor: "bg-primary/10",
    link: "/quiz"
  },
  {
    icon: Map,
    title: "Course-to-Career Mapping",
    description: "Explore detailed visual charts showing career paths for each degree. See what B.A., B.Sc., B.Com., BBA leads to - from government jobs to entrepreneurship.",
    color: "text-success",
    bgColor: "bg-success/10",
    link: "/courses"
  },
  {
    icon: MapPin,
    title: "Nearby College Directory",
    description: "Find government colleges near you with detailed information on programs, cut-offs, facilities, and admission requirements. Filter by location and preferences.",
    color: "text-accent",
    bgColor: "bg-accent/10",
    link: "/colleges"
  },
  {
    icon: Calendar,
    title: "Smart Timeline Tracker",
    description: "Never miss important deadlines with personalized notifications for admissions, scholarship applications, entrance tests, and counseling schedules.",
    color: "text-warning",
    bgColor: "bg-warning/10",
    link: "/timeline"
  },
  {
    icon: User,
    title: "AI-Powered Personalization",
    description: "Get customized recommendations based on your profile, academic interests, and career goals. Our AI learns your preferences to suggest the best paths.",
    color: "text-primary",
    bgColor: "bg-primary/10",
    link: "/profile"
  }
];

export const Features = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Everything You Need for{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Career Success
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our comprehensive platform guides you through every step of your educational journey with personalized insights and data-driven recommendations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="p-8 hover:shadow-medium transition-smooth group cursor-pointer border-0 bg-card/50 backdrop-blur-sm"
            >
              <div className={`w-16 h-16 rounded-2xl ${feature.bgColor} flex items-center justify-center mb-6`}>
                <feature.icon className={`h-8 w-8 ${feature.color}`} />
              </div>
              
              <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-smooth">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {feature.description}
              </p>
              
              <Link to={feature.link}>
                <Button variant="ghost" size="sm" className="group-hover:text-primary p-0">
                  Learn More
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};