import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  Building2,
  Calendar,
  DollarSign,
  Users,
  TrendingUp,
  Filter,
  Search,
  Plus,
  Eye,
  Clock,
  CheckCircle,
  AlertCircle,
  GraduationCap,
  Wrench,
  BookOpen,
} from "lucide-react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const programs = [
    {
      id: 1,
      title: "EIL Excellence Scholarship - Chemical Engineering",
      university: "IIT Bombay",
      amount: "₹2,50,000",
      deadline: "2024-03-15",
      status: "applied",
      field: "Chemical Engineering",
      requirements: "CGPA 8.5+, Research Project Experience",
      match: 95,
    },
    {
      id: 2,
      title: "Infrastructure Development Grant",
      university: "NIT Delhi",
      amount: "₹1,80,000",
      deadline: "2024-04-01",
      status: "draft",
      field: "Civil Engineering",
      requirements: "Structural Engineering Focus",
      match: 89,
    },
    {
      id: 3,
      title: "Process Engineering Fellowship",
      university: "BITS Pilani",
      amount: "₹3,00,000",
      deadline: "2024-03-20",
      status: "recommended",
      field: "Process Engineering",
      requirements: "Industry Project Portfolio",
      match: 92,
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "applied":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300";
      case "draft":
        return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300";
      case "recommended":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "applied":
        return <Clock className="h-3 w-3" />;
      case "draft":
        return <AlertCircle className="h-3 w-3" />;
      case "recommended":
        return <CheckCircle className="h-3 w-3" />;
      default:
        return <Clock className="h-3 w-3" />;
    }
  };

  const stats = [
    {
      title: "Active Applications",
      value: "3",
      icon: Building2,
      change: "+2 this week",
      changeType: "positive",
    },
    {
      title: "Total Scholarship Value",
      value: "₹7.3L",
      icon: DollarSign,
      change: "+₹3L potential",
      changeType: "positive",
    },
    {
      title: "Profile Match Rate",
      value: "92%",
      icon: TrendingUp,
      change: "+5% this month",
      changeType: "positive",
    },
    {
      title: "Deadlines This Month",
      value: "2",
      icon: Calendar,
      change: "Act soon",
      changeType: "neutral",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">
              Engineering Programs
            </h1>
            <p className="text-muted-foreground mt-2">
              Track your scholarship applications and discover new opportunities
              with Engineers India Limited
            </p>
          </div>
          <div className="flex items-center gap-3 mt-4 md:mt-0">
            <Button variant="outline" size="sm">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
            <Button asChild>
              <Link to="/apply">
                <Plus className="h-4 w-4 mr-2" />
                New Application
              </Link>
            </Button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {stat.title}
                </CardTitle>
                <stat.icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p
                  className={`text-xs ${stat.changeType === "positive" ? "text-green-600" : "text-muted-foreground"}`}
                >
                  {stat.change}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Program Applications */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold">Your Applications</h2>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search programs..."
                  className="pl-9 pr-4 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>

            <div className="space-y-4">
              {programs.map((program) => (
                <Card
                  key={program.id}
                  className="hover:shadow-md transition-shadow"
                >
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="space-y-1">
                        <CardTitle className="text-lg">
                          {program.title}
                        </CardTitle>
                        <CardDescription className="flex items-center gap-2">
                          <span>{program.university}</span>
                          <span>•</span>
                          <span>{program.field}</span>
                        </CardDescription>
                      </div>
                      <Badge className={getStatusColor(program.status)}>
                        {getStatusIcon(program.status)}
                        <span className="ml-1 capitalize">
                          {program.status}
                        </span>
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                      <div>
                        <p className="text-sm text-muted-foreground">Amount</p>
                        <p className="font-semibold text-lg text-green-600">
                          {program.amount}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">
                          Deadline
                        </p>
                        <p className="font-semibold">{program.deadline}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">
                          Match Score
                        </p>
                        <p className="font-semibold text-primary">
                          {program.match}%
                        </p>
                      </div>
                    </div>

                    <div className="mb-4">
                      <p className="text-sm text-muted-foreground mb-2">
                        Requirements
                      </p>
                      <p className="text-sm">{program.requirements}</p>
                    </div>

                    <div className="mb-4">
                      <div className="flex items-center justify-between text-sm mb-2">
                        <span className="text-muted-foreground">
                          Application Progress
                        </span>
                        <span className="font-medium">
                          {program.status === "applied"
                            ? "100%"
                            : program.status === "draft"
                              ? "45%"
                              : "0%"}
                        </span>
                      </div>
                      <Progress
                        value={
                          program.status === "applied"
                            ? 100
                            : program.status === "draft"
                              ? 45
                              : 0
                        }
                        className="h-2"
                      />
                    </div>

                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="flex-1">
                        <Eye className="h-4 w-4 mr-2" />
                        View Details
                      </Button>
                      {program.status === "draft" && (
                        <Button size="sm" className="flex-1">
                          Continue Application
                        </Button>
                      )}
                      {program.status === "recommended" && (
                        <Button size="sm" className="flex-1">
                          Start Application
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button asChild className="w-full justify-start">
                  <Link to="/apply">
                    <Plus className="h-4 w-4 mr-2" />
                    Start New Application
                  </Link>
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Users className="h-4 w-4 mr-2" />
                  Update Profile
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <GraduationCap className="h-4 w-4 mr-2" />
                  Add Project
                </Button>
              </CardContent>
            </Card>

            {/* Upcoming Deadlines */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Upcoming Deadlines</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-sm">EIL Excellence</p>
                      <p className="text-xs text-muted-foreground">
                        March 15, 2024
                      </p>
                    </div>
                    <Badge variant="destructive" className="text-xs">
                      5 days
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-sm">Process Engineering</p>
                      <p className="text-xs text-muted-foreground">
                        March 20, 2024
                      </p>
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      10 days
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Profile Completion */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Profile Completion</CardTitle>
                <CardDescription>
                  Complete your engineering profile to increase match accuracy
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span>Overall Progress</span>
                    <span className="font-medium">85%</span>
                  </div>
                  <Progress value={85} className="h-2" />
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>✓ Academic Information</li>
                    <li>✓ Project Portfolio</li>
                    <li>✓ Technical Skills</li>
                    <li>• Research Experience (Optional)</li>
                  </ul>
                  <Button variant="outline" size="sm" className="w-full">
                    Complete Profile
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* EIL Resources */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">EIL Resources</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full justify-start"
                >
                  <BookOpen className="h-4 w-4 mr-2" />
                  Study Materials
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full justify-start"
                >
                  <Wrench className="h-4 w-4 mr-2" />
                  Project Guidelines
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full justify-start"
                >
                  <Building2 className="h-4 w-4 mr-2" />
                  EIL Careers
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
