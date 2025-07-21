import Navigation from "@/components/Navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download as DownloadIcon, FileText } from "lucide-react";
import { useState } from "react";
import jsPDF from "jspdf";

const Download = () => {
  const [isGenerating, setIsGenerating] = useState(false);

  const generatePDF = async () => {
    setIsGenerating(true);

    try {
      // Get form data from localStorage (saved from Apply page)
      const savedFormData = localStorage.getItem("eilApplicationData");
      const formData = savedFormData ? JSON.parse(savedFormData) : {};

      const pdf = new jsPDF();
      // Function to draw border on a given page
      const drawBorder = () => {
        const width = pdf.internal.pageSize.getWidth();
        const height = pdf.internal.pageSize.getHeight();

        // Outer Black Border
        pdf.setDrawColor(0); // Black
        pdf.setLineWidth(1.5);
        pdf.rect(5, 5, width - 10, height - 10);

        // Inner Blue Border
        pdf.setDrawColor(0, 0, 255); // RGB Blue
        pdf.setLineWidth(0.75);
        pdf.rect(10, 10, width - 20, height - 20);
      };
      drawBorder(); // draw border on first page
      const pageWidth = pdf.internal.pageSize.getWidth();
      const margin = 20;
      let yPosition = margin;

      // Header
      pdf.setFontSize(20);
      pdf.setFont("helvetica", "bold");
      pdf.text("EIL SCHOLARSHIP APPLICATION", pageWidth / 2, yPosition, {
        align: "center",
      });
      yPosition += 20;

      pdf.setFontSize(12);
      pdf.setFont("helvetica", "normal");
      pdf.text("Engineers India Limited", pageWidth / 2, yPosition, {
        align: "center",
      });
      yPosition += 30;

      // Personal Information Section
      pdf.setFontSize(14);
      pdf.setFont("helvetica", "bold");
      pdf.text("PERSONAL INFORMATION", margin, yPosition);
      yPosition += 15;

      pdf.setFontSize(10);
      pdf.setFont("helvetica", "normal");

      const personalInfo = [
        [
          "Full Name:",
          `${formData.title || ""} ${formData.firstName || ""} ${formData.middleName || ""} ${formData.lastName || ""}`.trim() ||
            "Not provided",
        ],
        ["Father's Name:", formData.fatherName || "Not provided"],
        ["Mother's Name:", formData.motherName || "Not provided"],
        ["Date of Birth:", formData.dateOfBirth || "Not provided"],
        ["Mobile Number:", formData.mobileNumber || "Not provided"],
        ["Email ID:", formData.emailId || "Not provided"],
        ["Address:", formData.addressLine1 || "Not provided"],
        ["", formData.addressLine2 || ""],
        [
          "City, State:",
          `${formData.city || ""}, ${formData.state || ""}`.trim() ||
            "Not provided",
        ],
        ["Postal Code:", formData.postalCode || "Not provided"],
        ["National ID:", formData.nationalId || "Not provided"],
      ];

      personalInfo.forEach(([label, value]) => {
        if (label && value) {
          pdf.setFont("helvetica", "bold");
          pdf.text(label, margin, yPosition);
          pdf.setFont("helvetica", "normal");

          // Wrap text if it's too long
          const splitText = pdf.splitTextToSize(value, pageWidth - margin - 60);
          pdf.text(splitText, margin + 50, yPosition);
          yPosition += 12 * Math.max(1, splitText.length);
        }
      });

      yPosition += 10;

      // Academic Information Section
      if (yPosition > pdf.internal.pageSize.getHeight() - 60) {
        pdf.addPage();
        drawBorder(); // draw border on new page
        yPosition = margin;
      }

      pdf.setFontSize(14);
      pdf.setFont("helvetica", "bold");
      pdf.text("ACADEMIC INFORMATION", margin, yPosition);
      yPosition += 15;

      pdf.setFontSize(10);
      pdf.setFont("helvetica", "normal");

      const academicInfo = [
        ["Highest Exam Passed:", formData.highestExamPassed || "Not provided"],
        ["Year of Passing:", formData.yearOfPassing || "Not provided"],
        ["School/University:", formData.schoolUniversityName || "Not provided"],
      ];

      academicInfo.forEach(([label, value]) => {
        if (value !== "Not provided" || !formData.firstName) {
          pdf.setFont("helvetica", "bold");
          pdf.text(label, margin, yPosition);
          pdf.setFont("helvetica", "normal");
          const splitText = pdf.splitTextToSize(value, pageWidth - margin - 60);
          pdf.text(splitText, margin + 60, yPosition);
          yPosition += 12 * Math.max(1, splitText.length);
        }
      });

      yPosition += 10;

      // Engineering Information Section
      if (yPosition > pdf.internal.pageSize.getHeight() - 60) {
        pdf.addPage();
        drawBorder(); // draw border on new page
        yPosition = margin;
      }

      pdf.setFontSize(14);
      pdf.setFont("helvetica", "bold");
      pdf.text("SPORTS ACHIEVEMENTS", margin, yPosition);
      yPosition += 15;

      pdf.setFontSize(10);
      pdf.setFont("helvetica", "normal");

      const engineeringInfo = [
        ["Engineering Field:", formData.engineeringField || "Not provided"],
        ["Sports Type:", formData.projectType || "Not provided"],
        ["Tournament Name:", formData.projectName || "Not provided"],
        ["Position/Level:", formData.positionLevel || "Not provided"],
        ["Result:", formData.resultMetrics || "Not provided"],
        ["Tournament Date:", formData.projectDate || "Not provided"],
      ];

      engineeringInfo.forEach(([label, value]) => {
        if (value !== "Not provided" || !formData.firstName) {
          pdf.setFont("helvetica", "bold");
          pdf.text(label, margin, yPosition);
          pdf.setFont("helvetica", "normal");
          const splitText = pdf.splitTextToSize(value, pageWidth - margin - 50);
          pdf.text(splitText, margin + 50, yPosition);
          yPosition += 12 * Math.max(1, splitText.length);
        }
      });

      // Footer
      yPosition = pdf.internal.pageSize.getHeight() - 30;
      pdf.setFontSize(8);
      pdf.setFont("helvetica", "italic");
      pdf.text(
        `Generated on: ${new Date().toLocaleDateString()}`,
        margin,
        yPosition,
      );
      pdf.text(
        "Engineers India Limited - Scholarship Application",
        pageWidth / 2,
        yPosition + 10,
        { align: "center" },
      );

      // Save the PDF
      const fileName = `EIL_Scholarship_Application_${formData.firstName || "Form"}_${new Date().getTime()}.pdf`;
      pdf.save(fileName);

      // Show success message
      alert("PDF downloaded successfully!");
    } catch (error) {
      console.error("Error generating PDF:", error);
      alert(
        "Error generating PDF. Please make sure you've filled out the application form first.",
      );
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container py-16">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="text-4xl font-bold tracking-tight flex items-center justify-center gap-3 mb-4">
            <FileText className="h-10 w-10" />
            Download Application Form
          </h1>
          <p className="text-lg text-muted-foreground">
            Fill in your details and download your application as a PDF
          </p>
        </div>

        {/* Quick Download Section */}
        <div className="max-w-2xl mx-auto">
          <Card className="bg-card border-border">
            <CardHeader className="text-center pb-6">
              <CardTitle className="flex items-center justify-center gap-2 text-2xl">
                <DownloadIcon className="h-6 w-6" />
                Quick Download
              </CardTitle>
              <CardDescription className="text-base">
                Generate and download your application form instantly
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center pb-8">
              <Button
                onClick={generatePDF}
                disabled={isGenerating}
                size="lg"
                className="bg-primary hover:bg-primary/90 px-8 py-3 text-base"
              >
                <DownloadIcon className="h-5 w-5 mr-2" />
                {isGenerating
                  ? "Generating PDF..."
                  : "Download Application PDF"}
              </Button>
              <p className="text-sm text-muted-foreground mt-6">
                Fill in the form below to include your details in the PDF
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Instructions */}
        <div className="max-w-2xl mx-auto mt-8 text-center">
          <p className="text-muted-foreground">
            Make sure to complete your application in the{" "}
            <a
              href="/apply"
              className="text-primary hover:underline font-medium"
            >
              Apply section
            </a>{" "}
            first. Your filled form data will be automatically included in the
            PDF download.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Download;
