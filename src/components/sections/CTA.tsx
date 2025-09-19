import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export const CTA = () => {
  return (
    <section className="py-24 bg-gradient-primary relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-white/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <div className="flex justify-center mb-6">
            <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
              <Sparkles className="h-8 w-8" />
            </div>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Discover Your{" "}
            <span className="text-yellow-300">
              Perfect Career Path?
            </span>
          </h2>
          
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Join thousands of students who've found their ideal career direction. Take our free assessment and start building your future today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/quiz">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 shadow-strong group font-semibold"
              >
                Start Your Journey
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            
            <Link to="/courses">
              <Button 
                variant="outline" 
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 hover:text-white"
              >
                Explore First
              </Button>
            </Link>
          </div>
          
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-white/80">
            <div className="text-center">
              <div className="text-2xl font-bold">Free</div>
              <div className="text-sm">Assessment</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">5 Min</div>
              <div className="text-sm">Quick Setup</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">24/7</div>
              <div className="text-sm">Access</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};