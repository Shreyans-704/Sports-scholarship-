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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Building2,
  Search,
  Filter,
  Download,
  FileSpreadsheet,
  Eye,
  Users,
  FileText,
  CheckCircle,
  Clock,
  AlertTriangle,
  MoreVertical,
  Calendar,
  TrendingUp,
} from "lucide-react";
import { useState } from "react";

const AdminDashboard = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterField, setFilterField] = useState("");
  const [filterCategory, setFilterCategory] = useState("");

  // Mock data for applications
  const applications = [
    {
      id: "APP001",
      name: "Rajesh Kumar Sharma",
      email: "rajesh.sharma@email.com",
      mobile: "+91 98765 43210",
      engineeringField: "Chemical Engineering",
      SportsType: "Research Project",
      institution: "IIT Delhi",
      registrationDate: "2024-01-15",
      status: "under_review",
      nationalId: "1234 5678 9012",
      documents: 6,
    },
    {
      id: "APP002",
      name: "Priya Singh",
      email: "priya.singh@email.com",
      mobile: "+91 87654 32109",
      engineeringField: "Civil Engineering",
      SportsType: "Industry Project",
      institution: "NIT Jalandhar",
      registrationDate: "2024-01-14",
      status: "approved",
      nationalId: "2345 6789 0123",
      documents: 8,
    },
    {
      id: "APP003",
      name: "Amit Patel",
      email: "amit.patel@email.com",
      mobile: "+91 76543 21098",
      engineeringField: "Mechanical Engineering",
      SportsType: "Academic Project",
      institution: "BITS Pilani",
      registrationDate: "2024-01-13",
      status: "pending",
      nationalId: "3456 7890 1234",
      documents: 5,
    },
    {
      id: "APP004",
      name: "Sneha Reddy",
      email: "sneha.reddy@email.com",
      mobile: "+91 65432 10987",
      engineeringField: "Computer Science",
      SportsType: "Innovation Project",
      institution: "IIIT Hyderabad",
      registrationDate: "2024-01-12",
      status: "rejected",
      nationalId: "4567 8901 2345",
      documents: 4,
    },
  ];

  const stats = [
    {
      title: "Total Applications",
      value: "247",
      icon: FileText,
      change: "+12 this week",
      changeType: "positive",
    },
    {
      title: "Pending Review",
      value: "43",
      icon: Clock,
      change: "+5 today",
      changeType: "neutral",
    },
    {
      title: "Approved",
      value: "156",
      icon: CheckCircle,
      change: "+8 this week",
      changeType: "positive",
    },
    {
      title: "Success Rate",
      value: "73%",
      icon: TrendingUp,
      change: "+2% this month",
      changeType: "positive",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "approved":
        return "bg-green-100 text-green-800";
      case "under_review":
        return "bg-blue-100 text-blue-800";
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      case "rejected":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "approved":
        return <CheckCircle className="h-3 w-3" />;
      case "under_review":
        return <Eye className="h-3 w-3" />;
      case "pending":
        return <Clock className="h-3 w-3" />;
      case "rejected":
        return <AlertTriangle className="h-3 w-3" />;
      default:
        return <Clock className="h-3 w-3" />;
    }
  };

  const filteredApplications = applications.filter((app) => {
    const matchesSearch =
      app.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.mobile.includes(searchTerm) ||
      app.id.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesField = !filterField || app.engineeringField === filterField;
    const matchesCategory =
      !filterCategory || app.SportsType === filterCategory;

    return matchesSearch && matchesField && matchesCategory;
  });

  const downloadApplicationForm = (appId: string) => {
    // Simulate PDF download
    console.log(`Downloading application form for ${appId}`);
    alert(`Downloading application form for ${appId}`);
  };

  const downloadDocuments = (appId: string) => {
    // Simulate document download
    console.log(`Downloading documents for ${appId}`);
    alert(`Downloading documents for ${appId}`);
  };

  const exportToExcel = () => {
    // Simulate Excel export
    console.log("Exporting to Excel");
    alert("Exporting application data to Excel...");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold tracking-tight flex items-center gap-2">
              <Building2 className="h-8 w-8" />
              Admin Dashboard
            </h1>
            <p className="text-muted-foreground mt-2">
              Manage and review EIL scholarship applications
            </p>
          </div>
          <div className="flex items-center gap-3 mt-4 md:mt-0">
            <Button variant="outline" onClick={exportToExcel}>
              <FileSpreadsheet className="h-4 w-4 mr-2" />
              Export to Excel
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

        {/* Search and Filter Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Search className="h-5 w-5" />
              Search & Filter Applications
            </CardTitle>
            <CardDescription>
              Use search and filters to find specific applications
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="space-y-2">
                <Label htmlFor="search">Search Applications</Label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="search"
                    placeholder="Name, email, mobile, ID..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-9"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="filterField">Engineering Field</Label>
                <Select onValueChange={setFilterField}>
                  <SelectTrigger>
                    <SelectValue placeholder="All fields" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">All Fields</SelectItem>
                    <SelectItem value="Chemical Engineering">
                      Chemical Engineering
                    </SelectItem>
                    <SelectItem value="Civil Engineering">
                      Civil Engineering
                    </SelectItem>
                    <SelectItem value="Computer Science">
                      Computer Science
                    </SelectItem>
                    <SelectItem value="Mechanical Engineering">
                      Mechanical Engineering
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="filterCategory">Sports Type</Label>
                <Select onValueChange={setFilterCategory}>
                  <SelectTrigger>
                    <SelectValue placeholder="All types" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">All Types</SelectItem>
                    <SelectItem value="Kabadi">
                      kabadi
                    </SelectItem>
                    <SelectItem value=" Badminton">
                      Badminton
                    </SelectItem>
                    <SelectItem value="Cricket">
                      Cricket
                    </SelectItem>
                    <SelectItem value="Chess">
                      Chess
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Actions</Label>
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => {
                    setSearchTerm("");
                    setFilterField("");
                    setFilterCategory("");
                  }}
                >
                  <Filter className="h-4 w-4 mr-2" />
                  Clear Filters
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Applications Table */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              Application Summary ({filteredApplications.length} applications)
            </CardTitle>
            <CardDescription>
              Detailed view of all scholarship applications with management
              options
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Application ID</TableHead>
                    <TableHead>Applicant Details</TableHead>
                    <TableHead>Engineering Field</TableHead>
                    <TableHead>Sports Type</TableHead>
                    <TableHead>Institution</TableHead>
                    <TableHead>Registration Date</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Documents</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredApplications.map((app) => (
                    <TableRow key={app.id}>
                      <TableCell className="font-medium">{app.id}</TableCell>
                      <TableCell>
                        <div>
                          <div className="font-medium">{app.name}</div>
                          <div className="text-sm text-muted-foreground">
                            {app.email}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {app.mobile}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>{app.engineeringField}</TableCell>
                      <TableCell>{app.SportsType}</TableCell>
                      <TableCell>{app.institution}</TableCell>
                      <TableCell>{app.registrationDate}</TableCell>
                      <TableCell>
                        <Badge className={getStatusColor(app.status)}>
                          {getStatusIcon(app.status)}
                          <span className="ml-1 capitalize">
                            {app.status.replace("_", " ")}
                          </span>
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline">{app.documents} files</Badge>
                      </TableCell>
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-8 w-8 p-0">
                              <MoreVertical className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>
                              <Eye className="h-4 w-4 mr-2" />
                              View Details
                            </DropdownMenuItem>
                            <DropdownMenuItem
                              onClick={() => downloadApplicationForm(app.id)}
                            >
                              <Download className="h-4 w-4 mr-2" />
                              Download Form (PDF)
                            </DropdownMenuItem>
                            <DropdownMenuItem
                              onClick={() => downloadDocuments(app.id)}
                            >
                              <FileText className="h-4 w-4 mr-2" />
                              Download Documents
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            {filteredApplications.length === 0 && (
              <div className="text-center py-8 text-muted-foreground">
                No applications found matching your search criteria.
              </div>
            )}
          </CardContent>
        </Card>

        {/* Additional Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button variant="outline" className="w-full justify-start">
                <FileSpreadsheet className="h-4 w-4 mr-2" />
                Bulk Export Data
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Users className="h-4 w-4 mr-2" />
                Generate Reports
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Calendar className="h-4 w-4 mr-2" />
                Schedule Reviews
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Application Analytics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span>Applications Today</span>
                  <span className="font-medium">12</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Pending Review</span>
                  <span className="font-medium">43</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Average Review Time</span>
                  <span className="font-medium">3.2 days</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Approval Rate</span>
                  <span className="font-medium">73%</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">System Status</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Database</span>
                  <Badge className="bg-green-100 text-green-800">
                    <CheckCircle className="h-3 w-3 mr-1" />
                    Online
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">File Storage</span>
                  <Badge className="bg-green-100 text-green-800">
                    <CheckCircle className="h-3 w-3 mr-1" />
                    Active
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Email Service</span>
                  <Badge className="bg-green-100 text-green-800">
                    <CheckCircle className="h-3 w-3 mr-1" />
                    Running
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Last Backup</span>
                  <span className="text-sm text-muted-foreground">
                    2 hours ago
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
