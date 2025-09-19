import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Navigation } from "@/components/ui/navigation";
import { ArrowLeft, ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const questions = [
  {
    id: 1,
    question: "What type of activities do you enjoy most?",
    options: [
      { id: "a", text: "Solving mathematical problems", stream: "science" },
      { id: "b", text: "Reading and writing stories", stream: "arts" },
      { id: "c", text: "Managing money and budgets", stream: "commerce" },
      { id: "d", text: "Working with tools and machines", stream: "vocational" }
    ]
  },
  {
    id: 2,
    question: "Which subjects interest you the most?",
    options: [
      { id: "a", text: "Physics, Chemistry, Biology", stream: "science" },
      { id: "b", text: "History, Literature, Philosophy", stream: "arts" },
      { id: "c", text: "Economics, Accounting, Business Studies", stream: "commerce" },
      { id: "d", text: "Technical skills, Practical work", stream: "vocational" }
    ]
  },
  {
    id: 3,
    question: "What describes your ideal work environment?",
    options: [
      { id: "a", text: "Laboratory or research facility", stream: "science" },
      { id: "b", text: "Creative studio or library", stream: "arts" },
      { id: "c", text: "Corporate office or business setting", stream: "commerce" },
      { id: "d", text: "Workshop or field work", stream: "vocational" }
    ]
  },
  {
    id: 4,
    question: "Which career goal appeals to you most?",
    options: [
      { id: "a", text: "Becoming a doctor, engineer, or researcher", stream: "science" },
      { id: "b", text: "Becoming a teacher, writer, or artist", stream: "arts" },
      { id: "c", text: "Becoming an entrepreneur or business leader", stream: "commerce" },
      { id: "d", text: "Becoming a skilled technician or craftsperson", stream: "vocational" }
    ]
  },
  {
    id: 5,
    question: "How do you prefer to learn new things?",
    options: [
      { id: "a", text: "Through experiments and analysis", stream: "science" },
      { id: "b", text: "Through discussion and reflection", stream: "arts" },
      { id: "c", text: "Through case studies and real examples", stream: "commerce" },
      { id: "d", text: "Through hands-on practice", stream: "vocational" }
    ]
  }
];

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [isComplete, setIsComplete] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string>("");

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  const handleAnswer = (optionId: string) => {
    setSelectedOption(optionId);
    setAnswers({ ...answers, [currentQuestion]: optionId });
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(answers[currentQuestion + 1] || "");
    } else {
      setIsComplete(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedOption(answers[currentQuestion - 1] || "");
    }
  };

  const getResults = () => {
    const streamCounts = { science: 0, arts: 0, commerce: 0, vocational: 0 };
    
    Object.values(answers).forEach(answer => {
      const option = questions.find(q => 
        q.options.some(opt => opt.id === answer)
      )?.options.find(opt => opt.id === answer);
      
      if (option) {
        streamCounts[option.stream as keyof typeof streamCounts]++;
      }
    });

    const recommended = Object.entries(streamCounts).sort(([,a], [,b]) => b - a)[0][0];
    return { recommended, scores: streamCounts };
  };

  if (isComplete) {
    const { recommended, scores } = getResults();
    
    return (
      <div className="min-h-screen bg-gradient-subtle">
        <Navigation />
        <div className="container mx-auto px-4 py-12">
          <Card className="max-w-4xl mx-auto p-8 text-center">
            <div className="mb-8">
              <CheckCircle className="h-16 w-16 text-success mx-auto mb-4" />
              <h1 className="text-3xl font-bold mb-4">
                Assessment Complete!
              </h1>
              <p className="text-muted-foreground text-lg">
                Based on your responses, here's your personalized recommendation:
              </p>
            </div>

            <div className="bg-gradient-primary text-white rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4">
                Recommended Stream: {recommended.charAt(0).toUpperCase() + recommended.slice(1)}
              </h2>
              <p className="text-lg opacity-90">
                {recommended === 'science' && "You have a strong analytical mind and enjoy problem-solving. Science stream opens doors to medicine, engineering, and research careers."}
                {recommended === 'arts' && "You're creative and enjoy exploring ideas. Arts stream leads to careers in education, media, literature, and social sciences."}
                {recommended === 'commerce' && "You have business acumen and leadership qualities. Commerce stream prepares you for entrepreneurship, finance, and management roles."}
                {recommended === 'vocational' && "You prefer practical, hands-on work. Vocational training leads to skilled technical careers with high demand and good prospects."}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Your Scores:</h3>
                <div className="space-y-3">
                  {Object.entries(scores).map(([stream, score]) => (
                    <div key={stream} className="flex justify-between items-center">
                      <span className="capitalize">{stream}:</span>
                      <div className="w-32 bg-muted rounded-full h-2">
                        <div 
                          className="h-2 bg-primary rounded-full" 
                          style={{ width: `${(score / questions.length) * 100}%` }}
                        />
                      </div>
                      <span className="font-medium">{score}/{questions.length}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4">Next Steps:</h3>
                <div className="space-y-3 text-left">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span>Explore courses in your recommended stream</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span>Find colleges that offer these programs</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span>Check admission deadlines and requirements</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/courses">
                <Button variant="hero" size="lg">
                  Explore Courses
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
              <Link to="/colleges">
                <Button variant="outline" size="lg">
                  Find Colleges
                </Button>
              </Link>
              <Button 
                variant="ghost" 
                size="lg"
                onClick={() => {
                  setCurrentQuestion(0);
                  setAnswers({});
                  setIsComplete(false);
                  setSelectedOption("");
                }}
              >
                Retake Quiz
              </Button>
            </div>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navigation />
      <div className="container mx-auto px-4 py-12">
        <Card className="max-w-4xl mx-auto p-8">
          {/* Progress */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-2xl font-bold">Career Assessment</h1>
              <span className="text-muted-foreground">
                {currentQuestion + 1} of {questions.length}
              </span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          {/* Question */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-6">
              {questions[currentQuestion].question}
            </h2>
            
            <div className="space-y-4">
              {questions[currentQuestion].options.map((option) => (
                <Card
                  key={option.id}
                  className={`p-4 cursor-pointer transition-smooth hover:shadow-soft ${
                    selectedOption === option.id
                      ? "ring-2 ring-primary bg-primary/5"
                      : "hover:bg-muted/50"
                  }`}
                  onClick={() => handleAnswer(option.id)}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-4 h-4 rounded-full border-2 ${
                      selectedOption === option.id
                        ? "bg-primary border-primary"
                        : "border-border"
                    }`} />
                    <span className="text-lg">{option.text}</span>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between">
            <Button
              variant="outline"
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Previous
            </Button>
            
            <Button
              onClick={handleNext}
              disabled={!selectedOption}
              variant={currentQuestion === questions.length - 1 ? "success" : "default"}
            >
              {currentQuestion === questions.length - 1 ? "Complete" : "Next"}
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}