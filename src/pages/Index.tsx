import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import {
  Building2,
  Target,
  Users,
  Award,
  ArrowRight,
  CheckCircle,
  Star,
  TrendingUp,
  Globe,
  GraduationCap,
  Wrench,
  BookOpen,
} from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const features = [
    {
      icon: Target,
      title: "Academic Excellence",
      description:
        "Merit-based scholarships for outstanding engineering students pursuing technical education in various disciplines.",
    },
    {
      icon: Wrench,
      title: "Industry Integration",
      description:
        "Direct pathways to careers with Engineers India Limited and partner organizations in the engineering sector.",
    },
    {
      icon: Globe,
      title: "Global Opportunities",
      description:
        "Access to international engineering programs and collaborative projects with leading technical institutions worldwide.",
    },
    {
      icon: BookOpen,
      title: "Comprehensive Support",
      description:
        "Mentorship, career guidance, and professional development throughout your engineering education journey.",
    },
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      field: "Chemical Engineering",
      university: "IIT Delhi",
      quote:
        "The EIL scholarship program transformed my career. I'm now working on cutting-edge projects in process engineering.",
      rating: 5,
    },
    {
      name: "Priya Sharma",
      field: "Civil Engineering",
      university: "NIT Jalandhar",
      quote:
        "Thanks to EIL's support, I completed my Masters in Infrastructure Engineering and joined their project management team.",
      rating: 5,
    },
    {
      name: "Amit Patel",
      field: "Mechanical Engineering",
      university: "BITS Pilani",
      quote:
        "The mentorship and financial support helped me focus on my studies. Now I'm contributing to major industrial projects.",
      rating: 5,
    },
  ];

  const process = [
    {
      step: "01",
      title: "Eligibility Check",
      description:
        "Verify your academic credentials, engineering program enrollment, and meet the minimum GPA requirements.",
    },
    {
      step: "02",
      title: "Application Submit",
      description:
        "Complete the comprehensive application including academic records, project portfolio, and personal statement.",
    },
    {
      step: "03",
      title: "Evaluation Process",
      description:
        "Our technical committee reviews applications based on academic merit, project work, and career potential.",
    },
    {
      step: "04",
      title: "Join EIL Family",
      description:
        "Receive scholarship funding, mentorship assignment, and potential internship opportunities with Engineers India Limited.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 to-black py-20 lg:py-32">
        <div className="container relative">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground lg:text-6xl">
              Sports Excellence Meets
              <span className="text-primary"> Educational Opportunity</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
              Engineers India Limited proudly supports exceptional engineering
              students through comprehensive scholarship programs and career
              development opportunities.
            </p>
            <div className="mt-10 flex items-center justify-center gap-4 flex-wrap">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90"
              >
                <Link to="/apply">
                  Apply for Scholarship <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-800">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight lg:text-4xl">
              Why Choose EIL Scholar?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Supporting engineering students with comprehensive scholarship
              programs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-sm">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-900">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight lg:text-4xl">
              How It Works
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Simple steps to apply for your scholarship.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div key={index} className="relative">
                <div className="text-center">
                  <div className="mx-auto h-16 w-16 rounded-full bg-primary flex items-center justify-center mb-6">
                    <span className="text-xl font-bold text-primary-foreground">
                      {item.step}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-8 -right-4 w-8 h-0.5 bg-gray-200"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-primary-foreground lg:text-4xl">
              Ready to Start Your Journey?
            </h2>
            <p className="mt-4 text-lg text-primary-foreground/80">
              Apply for engineering scholarships with Engineers India Limited.
            </p>
            <div className="mt-8">
              <Button
                size="lg"
                variant="secondary"
                asChild
                className="bg-white text-primary hover:bg-gray-100"
              >
                <Link to="/apply">
                  Apply Now <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-background py-8">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <Link to="/" className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <Building2 className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">EIL Scholar</span>
            </Link>
            <div className="text-center text-sm text-muted-foreground">
              <p>&copy; 2025 Engineers India Limited. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
