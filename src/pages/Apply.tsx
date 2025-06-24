import Navigation from "@/components/Navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import {
  FileText,
  GraduationCap,
  Upload,
  ArrowLeft,
  Wrench,
  BookOpen,
  Award,
  User,
  Phone,
  Mail,
  MapPin,
  Calendar,
  Save,
  Send,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Apply = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Basic Information
    title: "",
    firstName: "",
    middleName: "",
    lastName: "",
    fatherName: "",
    motherName: "",
    dateOfBirth: "",
    mobileNumber: "",
    emailId: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    postalCode: "",
    nationalId: "",

    // Academic Information
    highestExamPassed: "",
    yearOfPassing: "",
    schoolUniversityName: "",
    institutionType: "",
    scholarshipCategory: "",

    // Sports Achievements
    engineeringField: "",
    typeOfSports: "",
    SportsType: "",
    SportsName: "",
    positionLevel: "",
    resultMetrics: "",
    TournamentDate: "",

    // Documents
    documents: [] as File[],
  });

  const [uploadedDocs, setUploadedDocs] = useState({
    photograph: null as File | null,
    signature: null as File | null,
    proofOfAge: null as File | null,
    academicCertificates: [] as File[],
    projectCertificates: [] as File[],
    nationalIdCopy: null as File | null,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDraftSaved, setIsDraftSaved] = useState(false);

  const steps = [
    { id: 1, title: "Basic Information", icon: User },
    { id: 2, title: "Academic Details", icon: GraduationCap },
    { id: 3, title: "Sports Achievements", icon: Wrench },
    { id: 4, title: "Document Upload", icon: Upload },
    { id: 5, title: "Review & Submit", icon: Send },
  ];

  const engineeringFields = [
    "Chemical Engineering",
    "Civil Engineering",
    "Computer Science Engineering",
    "Electrical Engineering",
    "Electronics Engineering",
    "Information Technology",
    "Mechanical Engineering",
    "Process Engineering",
    "Environmental Engineering",
    "Instrumentation Engineering",
    "Petroleum Engineering",
    "Other",
  ];

  const SportsTypes = [
    "Kabadi",
    "Badminton",
    "Cricket",
    "Chess",
    "Football",
  ];

  const examLevels = [
    "Class X",
    "Class XII",
    "Diploma",
    "Bachelor's Degree",
    "Master's Degree",
    "PhD",
  ];

  const handleInputChange =
    (field: string) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const newFormData = {
        ...formData,
        [field]: e.target.value,
      };
      setFormData(newFormData);
      // Save to localStorage for PDF generation
      localStorage.setItem("eilApplicationData", JSON.stringify(newFormData));
    };

  const handleSelectChange = (field: string) => (value: string) => {
    const newFormData = {
      ...formData,
      [field]: value,
    };
    setFormData(newFormData);
    // Save to localStorage for PDF generation
    localStorage.setItem("eilApplicationData", JSON.stringify(newFormData));
  };

  const handleFileUpload =
    (docType: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      const files = e.target.files;
      if (files) {
        if (
          docType === "academicCertificates" ||
          docType === "sportsCertificates"
        ) {
          setUploadedDocs((prev) => ({
            ...prev,
            [docType]: Array.from(files),
          }));
        } else {
          setUploadedDocs((prev) => ({
            ...prev,
            [docType]: files[0],
          }));
        }
      }
    };

  const saveDraft = () => {
    setIsDraftSaved(true);
    // Simulate save
    setTimeout(() => setIsDraftSaved(false), 2000);
  };

  const submitApplication = () => {
    setIsSubmitting(true);
    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      alert(
        "Application submitted successfully! You will receive a confirmation email shortly.",
      );
    }, 2000);
  };

  const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, 5));
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 1));

  const getProgress = () => (currentStep / 5) * 100;

  const renderBasicInformation = () => (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <User className="h-5 w-5" />
            Personal Information
          </CardTitle>
          <CardDescription>
            Please provide your basic personal details as per official documents
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="space-y-2">
              <Label htmlFor="title">Title *</Label>
              <Select onValueChange={handleSelectChange("title")}>
                <SelectTrigger>
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="mr">Mr.</SelectItem>
                  <SelectItem value="ms">Ms.</SelectItem>
                  <SelectItem value="mrs">Mrs.</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name *</Label>
              <Input
                id="firstName"
                value={formData.firstName}
                onChange={handleInputChange("firstName")}
                placeholder="Enter first name"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="middleName">Middle Name</Label>
              <Input
                id="middleName"
                value={formData.middleName}
                onChange={handleInputChange("middleName")}
                placeholder="Enter middle name"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name *</Label>
              <Input
                id="lastName"
                value={formData.lastName}
                onChange={handleInputChange("lastName")}
                placeholder="Enter last name"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="fatherName">Father's Name *</Label>
              <Input
                id="fatherName"
                value={formData.fatherName}
                onChange={handleInputChange("fatherName")}
                placeholder="Enter father's full name"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="motherName">Mother's Name *</Label>
              <Input
                id="motherName"
                value={formData.motherName}
                onChange={handleInputChange("motherName")}
                placeholder="Enter mother's full name"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="dateOfBirth">Date of Birth *</Label>
              <Input
                id="dateOfBirth"
                type="date"
                value={formData.dateOfBirth}
                onChange={handleInputChange("dateOfBirth")}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="mobileNumber">Mobile Number *</Label>
              <Input
                id="mobileNumber"
                type="tel"
                value={formData.mobileNumber}
                onChange={handleInputChange("mobileNumber")}
                placeholder="+91 XXXXX XXXXX"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="emailId">Email ID *</Label>
              <Input
                id="emailId"
                type="email"
                value={formData.emailId}
                onChange={handleInputChange("emailId")}
                placeholder="your.email@example.com"
                required
              />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MapPin className="h-5 w-5" />
            Present Address
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="addressLine1">Address Line 1 *</Label>
            <Input
              id="addressLine1"
              value={formData.addressLine1}
              onChange={handleInputChange("addressLine1")}
              placeholder="Enter your address"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="addressLine2">Address Line 2</Label>
            <Input
              id="addressLine2"
              value={formData.addressLine2}
              onChange={handleInputChange("addressLine2")}
              placeholder="Apartment, suite, etc."
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="city">City *</Label>
              <Input
                id="city"
                value={formData.city}
                onChange={handleInputChange("city")}
                placeholder="Enter city"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="state">State *</Label>
              <Input
                id="state"
                value={formData.state}
                onChange={handleInputChange("state")}
                placeholder="Enter state"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="postalCode">Postal/Zip Code *</Label>
              <Input
                id="postalCode"
                value={formData.postalCode}
                onChange={handleInputChange("postalCode")}
                placeholder="Enter postal code"
                required
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="nationalId">
              National ID Number (Aadhaar/SSN) *
            </Label>
            <Input
              id="nationalId"
              value={formData.nationalId}
              onChange={handleInputChange("nationalId")}
              placeholder="Enter your national ID number"
              required
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderAcademicDetails = () => (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <GraduationCap className="h-5 w-5" />
            Academic Achievements
          </CardTitle>
          <CardDescription>
            Provide details about your highest academic qualification
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="highestExamPassed">Highest Exam Passed *</Label>
              <Select onValueChange={handleSelectChange("highestExamPassed")}>
                <SelectTrigger>
                  <SelectValue placeholder="Select highest qualification" />
                </SelectTrigger>
                <SelectContent>
                  {examLevels.map((level) => (
                    <SelectItem key={level} value={level}>
                      {level}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="yearOfPassing">Year of Passing *</Label>
              <Input
                id="yearOfPassing"
                type="number"
                min="2010"
                max="2030"
                value={formData.yearOfPassing}
                onChange={handleInputChange("yearOfPassing")}
                placeholder="YYYY"
                required
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="schoolUniversityName">
              School/University Name *
            </Label>
            <Input
              id="schoolUniversityName"
              value={formData.schoolUniversityName}
              onChange={handleInputChange("schoolUniversityName")}
              placeholder="Enter institution name"
              required
            />
          </div>
        </CardContent>
      </Card>

      {/* Institution Type and Scholarship Category */}
      <Card className="border-primary/20 bg-primary/5">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-primary">
            <Award className="h-5 w-5" />
            Institution Category & Scholarship Type
          </CardTitle>
          <CardDescription>
            Select your institution type to determine scholarship eligibility
            and amount
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="institutionType">Institution Type *</Label>
            <Select onValueChange={handleSelectChange("institutionType")}>
              <SelectTrigger>
                <SelectValue placeholder="Select your institution type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="iit">
                  Indian Institute of Technology (IIT)
                </SelectItem>
                <SelectItem value="nit">
                  National Institute of Technology (NIT)
                </SelectItem>
                <SelectItem value="iiit">
                  Indian Institute of Information Technology (IIIT)
                </SelectItem>
                <SelectItem value="government">
                  Government Engineering College
                </SelectItem>
                <SelectItem value="private">
                  Private Engineering College
                </SelectItem>
                <SelectItem value="deemed">Deemed University</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {formData.institutionType && (
            <div className="space-y-2">
              <Label htmlFor="scholarshipCategory">
                Eligible Scholarship Category
              </Label>
              <div className="p-4 border rounded-lg">
                {formData.institutionType === "iit" && (
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Award className="h-5 w-5 text-yellow-500" />
                      <span className="font-semibold text-yellow-600">
                        Premium IIT Scholarship
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Scholarship Amount: ₹5,00,000 - ₹7,50,000 per year
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Additional Benefits: Research funding, International
                      exchange programs, Direct industry placement assistance
                    </p>
                  </div>
                )}
                {formData.institutionType === "nit" && (
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Award className="h-5 w-5 text-blue-500" />
                      <span className="font-semibold text-blue-600">
                        Elite NIT Scholarship
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Scholarship Amount: ₹3,50,000 - ₹5,00,000 per year
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Additional Benefits: Industry mentorship, Project funding,
                      Internship opportunities with EIL
                    </p>
                  </div>
                )}
                {(formData.institutionType === "iiit" ||
                  formData.institutionType === "government") && (
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Award className="h-5 w-5 text-green-500" />
                      <span className="font-semibold text-green-600">
                        Government Institute Scholarship
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Scholarship Amount: ₹2,50,000 - ₹3,50,000 per year
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Additional Benefits: Academic support, Career guidance,
                      Technical workshops
                    </p>
                  </div>
                )}
                {(formData.institutionType === "private" ||
                  formData.institutionType === "deemed" ||
                  formData.institutionType === "other") && (
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Award className="h-5 w-5 text-gray-500" />
                      <span className="font-semibold text-gray-600">
                        Standard Scholarship
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Scholarship Amount: ₹1,50,000 - ₹2,50,000 per year
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Additional Benefits: Basic academic support, Online
                      resources access
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}

          {formData.institutionType && (
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h4 className="font-semibold text-blue-800 mb-2">
                Scholarship Selection Criteria
              </h4>
              <ul className="text-sm text-blue-700 space-y-1">
                {(formData.institutionType === "iit" ||
                  formData.institutionType === "nit") && (
                  <>
                    <li>• Minimum CGPA: 7.5/10 or equivalent</li>
                    <li>
                      • National-level project/research experience preferred
                    </li>
                    <li>• Strong recommendation from faculty</li>
                    <li>• Demonstrated leadership in technical activities</li>
                  </>
                )}
                {(formData.institutionType === "iiit" ||
                  formData.institutionType === "government") && (
                  <>
                    <li>• Minimum CGPA: 8.0/10 or equivalent</li>
                    <li>• Good academic record and project portfolio</li>
                    <li>• Active participation in technical events</li>
                  </>
                )}
                {(formData.institutionType === "private" ||
                  formData.institutionType === "deemed" ||
                  formData.institutionType === "other") && (
                  <>
                    <li>• Minimum CGPA: 7.5/10 or equivalent</li>
                    <li>• Strong academic performance</li>
                    <li>• Financial need may be considered</li>
                  </>
                )}
              </ul>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );

  const renderSportsAchievements = () => (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Wrench className="h-5 w-5" />
          Sports Achievements (Max 2 best sports achievements)
        </CardTitle>
        <CardDescription>
          Showcase your most significant sports achievements
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="engineeringField">Engineering Field *</Label>
            <Select onValueChange={handleSelectChange("engineeringField")}>
              <SelectTrigger>
                <SelectValue placeholder="Select your field" />
              </SelectTrigger>
              <SelectContent>
                {engineeringFields.map((field) => (
                  <SelectItem key={field} value={field}>
                    {field}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="typeOfSports">Type of Sports *</Label>
            <Select onValueChange={handleSelectChange("typeOfSports")}>
              <SelectTrigger>
                <SelectValue placeholder="Select sports type" />
              </SelectTrigger>
              <SelectContent>
                {SportsTypes.map((type) => (
                  <SelectItem key={type} value={type}>
                    {type}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="SportsType">Sports Category *</Label>
            <Select onValueChange={handleSelectChange("SportsType")}>
              <SelectTrigger>
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="institutional">Institutional</SelectItem>
                <SelectItem value="statelevel">State Level</SelectItem>
                <SelectItem value="national">National Level</SelectItem>
                <SelectItem value="international">International</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="TournamentDate">Tournament Date *</Label>
            <Input
              id="TournamentDate"
              type="date"
              value={formData.TournamentDate}
              onChange={handleInputChange("TournamentDate")}
              required
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="SportsName">Sports Name *</Label>
          <Input
            id="SportsName"
            value={formData.SportsName}
            onChange={handleInputChange("SportsName")}
            placeholder="Enter your Sports name"
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="positionLevel">Position/Level *</Label>
            <Select onValueChange={handleSelectChange("positionLevel")}>
              <SelectTrigger>
                <SelectValue placeholder="Select your position" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="First">First </SelectItem>
                <SelectItem value="Second">Second </SelectItem>
                <SelectItem value="Third">Third </SelectItem>
                <SelectItem value="Participation">participation </SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="resultMetrics">Result/Achievement *</Label>
            <Input
              id="resultMetrics"
              value={formData.resultMetrics}
              onChange={handleInputChange("resultMetrics")}
              placeholder="Awards, recognition, patents, etc."
              required
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );

  const renderDocumentUpload = () => (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Upload className="h-5 w-5" />
            Required Documents
          </CardTitle>
          <CardDescription>
            Upload all required documents. Max file size: 5MB per file. Accepted
            formats: PDF, JPG, PNG
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {[
            { key: "photograph", label: "Recent Photograph", required: true },
            { key: "signature", label: "Signature", required: true },
            {
              key: "proofOfAge",
              label: "Proof of Age (Birth Certificate)",
              required: true,
            },
            {
              key: "nationalIdCopy",
              label: "National ID Copy (Aadhaar/SSN)",
              required: true,
            },
          ].map((doc) => (
            <div key={doc.key} className="space-y-2">
              <Label htmlFor={doc.key}>
                {doc.label} {doc.required && "*"}
              </Label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                <Label htmlFor={doc.key} className="cursor-pointer">
                  <span className="text-sm text-muted-foreground">
                    Click to upload {doc.label.toLowerCase()}
                  </span>
                  <Input
                    id={doc.key}
                    type="file"
                    accept=".pdf,.jpg,.jpeg,.png"
                    onChange={handleFileUpload(doc.key)}
                    className="hidden"
                    required={doc.required}
                  />
                </Label>
                {uploadedDocs[doc.key as keyof typeof uploadedDocs] && (
                  <div className="mt-2 text-sm text-primary">
                    File uploaded successfully
                  </div>
                )}
              </div>
            </div>
          ))}

          {[
            {
              key: "academicCertificates",
              label: "Academic Certificates (Max 2 uploads)",
              multiple: true,
            },
            {
              key: "projectCertificates",
              label: "Project/Achievement Certificates (Max 2 uploads)",
              multiple: true,
            },
          ].map((doc) => (
            <div key={doc.key} className="space-y-2">
              <Label htmlFor={doc.key}>{doc.label}</Label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                <Label htmlFor={doc.key} className="cursor-pointer">
                  <span className="text-sm text-muted-foreground">
                    Click to upload multiple files
                  </span>
                  <Input
                    id={doc.key}
                    type="file"
                    accept=".pdf,.jpg,.jpeg,.png"
                    multiple
                    onChange={handleFileUpload(doc.key)}
                    className="hidden"
                  />
                </Label>
                {(uploadedDocs[doc.key as keyof typeof uploadedDocs] as File[])
                  ?.length > 0 && (
                  <div className="mt-2 text-sm text-primary">
                    {
                      (
                        uploadedDocs[
                          doc.key as keyof typeof uploadedDocs
                        ] as File[]
                      ).length
                    }{" "}
                    file(s) uploaded
                  </div>
                )}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );

  const renderReviewSubmit = () => (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Review Your Application</CardTitle>
          <CardDescription>
            Please review all information before submitting your application
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <strong>Full Name:</strong> {formData.title} {formData.firstName}{" "}
              {formData.middleName} {formData.lastName}
            </div>
            <div>
              <strong>Email:</strong> {formData.emailId}
            </div>
            <div>
              <strong>Mobile:</strong> {formData.mobileNumber}
            </div>
            <div>
              <strong>Engineering Field:</strong> {formData.engineeringField}
            </div>
            <div>
              <strong>Highest Qualification:</strong>{" "}
              {formData.highestExamPassed}
            </div>
            <div>
              <strong>Institution:</strong> {formData.schoolUniversityName}
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Declarations & Submission</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-start space-x-2">
            <Checkbox id="declaration" required />
            <Label htmlFor="declaration" className="text-sm">
              I declare that all the information provided is correct and true to
              the best of my knowledge. I understand that any false information
              may result in disqualification of my application.
            </Label>
          </div>

          <div className="flex items-start space-x-2">
            <Checkbox id="terms" required />
            <Label htmlFor="terms" className="text-sm">
              I agree to the Terms and Conditions and Privacy Policy of
              Engineers India Limited.
            </Label>
          </div>

          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="text-sm text-blue-800">
              <strong>Important Note:</strong> Candidates are not required to
              send any hard copy of the application form. Please retain a
              printout of your online application for future reference.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container py-8">
        {/* Header */}
        <div className="mb-8">
          <Link
            to="/dashboard"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Programs
          </Link>
          <h1 className="text-3xl font-bold tracking-tight">
            EIL Scholarship Application
          </h1>
          <p className="text-muted-foreground mt-2">
            Complete your application for Engineers India Limited scholarship
            programs
          </p>
        </div>

        {/* Progress Indicator */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-medium">Application Progress</span>
            <span className="text-sm text-muted-foreground">
              {Math.round(getProgress())}% Complete
            </span>
          </div>
          <Progress value={getProgress()} className="h-2" />

          <div className="flex justify-between mt-4">
            {steps.map((step) => (
              <div
                key={step.id}
                className={`flex flex-col items-center ${currentStep >= step.id ? "text-primary" : "text-muted-foreground"}`}
              >
                <div
                  className={`h-8 w-8 rounded-full flex items-center justify-center ${currentStep >= step.id ? "bg-primary text-white" : "bg-gray-200"}`}
                >
                  <step.icon className="h-4 w-4" />
                </div>
                <span className="text-xs mt-1 text-center">{step.title}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Form Content */}
        <div className="max-w-4xl mx-auto">
          {currentStep === 1 && renderBasicInformation()}
          {currentStep === 2 && renderAcademicDetails()}
          {currentStep === 3 && renderSportsAchievements()}
          {currentStep === 4 && renderDocumentUpload()}
          {currentStep === 5 && renderReviewSubmit()}

          {/* Navigation Buttons */}
          <div className="flex items-center justify-between mt-8">
            <div className="flex gap-2">
              {currentStep > 1 && (
                <Button variant="outline" onClick={prevStep}>
                  Previous
                </Button>
              )}
              <Button
                variant="outline"
                onClick={saveDraft}
                disabled={isDraftSaved}
              >
                <Save className="h-4 w-4 mr-2" />
                {isDraftSaved ? "Saved!" : "Save Draft"}
              </Button>
            </div>

            <div>
              {currentStep < 5 ? (
                <Button onClick={nextStep}>Next Step</Button>
              ) : (
                <Button onClick={submitApplication} disabled={isSubmitting}>
                  <Send className="h-4 w-4 mr-2" />
                  {isSubmitting ? "Submitting..." : "Submit Application"}
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Apply;
