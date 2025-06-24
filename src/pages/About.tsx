import Navigation from "@/components/Navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Target,
  Users,
  Award,
  Globe,
  Heart,
  TrendingUp,
  Building2,
  Wrench,
  BookOpen,
} from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Engineering Excellence",
      description:
        "We believe in fostering technical innovation and engineering excellence at every level.",
    },
    {
      icon: Heart,
      title: "Student Support",
      description:
        "Providing comprehensive support for engineering students throughout their academic journey.",
    },
    {
      icon: Globe,
      title: "Global Impact",
      description:
        "Creating opportunities for engineers to contribute to projects that shape the world.",
    },
    {
      icon: Award,
      title: "Merit Recognition",
      description:
        "Ensuring that technical achievements and academic excellence are properly recognized.",
    },
  ];

  const team = [
    {
      name: "Dr. Rajesh Kumar",
      role: "Director - Academic Programs",
      background: "Former IIT Professor, 25+ years in engineering education",
    },
    {
      name: "Priya Sharma",
      role: "Head of Student Relations",
      background: "Chemical Engineer, EIL veteran with 20 years experience",
    },
    {
      name: "Amit Patel",
      role: "Technical Evaluation Lead",
      background: "Process Engineering specialist, Project management expert",
    },
    {
      name: "Dr. Meera Singh",
      role: "Research & Innovation Head",
      background: "PhD in Mechanical Engineering, Published researcher",
    },
  ];

  const milestones = [
    {
      year: "1965",
      title: "EIL Foundation",
      description:
        "Engineers India Limited established as premier engineering consultancy",
    },
    {
      year: "1985",
      title: "First Scholarship Program",
      description:
        "Launched educational support initiative for engineering students",
    },
    {
      year: "2010",
      title: "Digital Transformation",
      description: "Modernized scholarship application and selection processes",
    },
    {
      year: "2024",
      title: "EIL Scholar Platform",
      description:
        "Comprehensive digital platform for engineering scholarship management",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container py-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight mb-6">
            About Engineers India Limited
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            For over five decades, Engineers India Limited has been at the
            forefront of engineering innovation in India. Our scholarship
            programs continue this legacy by nurturing the next generation of
            engineering talent.
          </p>
        </div>

        {/* Company Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-3xl font-bold mb-6">
              Our Legacy in Engineering
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Engineers India Limited (EIL) is a premier engineering consultancy
              organization under the Ministry of Petroleum & Natural Gas,
              Government of India. Since 1965, we have been providing
              comprehensive engineering solutions across various sectors
              including oil & gas, petrochemicals, infrastructure, and renewable
              energy.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              Our scholarship programs reflect our commitment to developing
              engineering talent that will drive India's technological
              advancement. We believe that investing in education today creates
              the innovators and leaders of tomorrow.
            </p>
            <Button asChild size="lg">
              <Link to="/apply">Join Our Scholarship Program</Link>
            </Button>
          </div>
          <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg p-8 flex items-center justify-center">
            <div className="text-center">
              <div className="h-20 w-20 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                <Building2 className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-2">5,000+</h3>
              <p className="text-muted-foreground">
                Engineering Scholarships Awarded
              </p>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center border-0 shadow-sm">
                <CardHeader>
                  <div className="mx-auto h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Milestones Timeline */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Our Journey</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {milestones.map((milestone, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="mx-auto h-16 w-16 rounded-full bg-primary flex items-center justify-center mb-4">
                    <span className="text-lg font-bold text-primary-foreground">
                      {milestone.year}
                    </span>
                  </div>
                  <CardTitle className="text-lg">{milestone.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    {milestone.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">
            Leadership Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="mx-auto h-20 w-20 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{member.name}</CardTitle>
                  <CardDescription className="font-medium text-primary">
                    {member.role}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {member.background}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Impact Statistics */}
        <div className="bg-gray-50 rounded-lg p-8 mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Impact in Numbers
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">5,000+</div>
              <div className="text-sm text-muted-foreground">
                Scholarships Awarded
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">
                15,000+
              </div>
              <div className="text-sm text-muted-foreground">
                Engineering Students Supported
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">100+</div>
              <div className="text-sm text-muted-foreground">
                Partner Institutions
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">
                ₹250Cr+
              </div>
              <div className="text-sm text-muted-foreground">
                Total Scholarship Investment
              </div>
            </div>
          </div>
        </div>

        {/* Engineering Focus Areas */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">
            Engineering Disciplines We Support
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <Wrench className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Core Engineering</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>Chemical Engineering</li>
                  <li>Mechanical Engineering</li>
                  <li>Civil Engineering</li>
                  <li>Electrical Engineering</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                  <BookOpen className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle>Specialized Fields</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>Process Engineering</li>
                  <li>Environmental Engineering</li>
                  <li>Instrumentation Engineering</li>
                  <li>Project Management</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle>Emerging Technologies</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>Renewable Energy</li>
                  <li>Digital Engineering</li>
                  <li>Sustainability Studies</li>
                  <li>AI in Engineering</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <Card className="text-center py-12 bg-gradient-to-br from-primary/5 to-accent/5 border-0">
          <CardContent>
            <h3 className="text-2xl font-bold mb-4">
              Ready to Join the EIL Engineering Community?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Take the next step in your engineering career with Engineers India
              Limited. Our scholarship programs provide the support you need to
              excel in your studies and contribute to India's engineering
              future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link to="/apply">Apply for Scholarship</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/dashboard">Explore Programs</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default About;
