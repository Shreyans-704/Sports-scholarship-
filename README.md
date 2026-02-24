## 🏆 Sports Scholarship App

The **Sports Scholarship App** is a web-based platform built with **Vite**, **React**, and **TypeScript** to manage and distribute scholarships to students with exceptional talent in sports — especially those who have played at national or state levels.

<img width="1896" height="839" alt="image" src="https://github.com/user-attachments/assets/fca459f3-a797-40aa-bee5-bdd6f8be56a0" />

# 🚀 Features

* 🎯 Student registration and login
* 📝 Scholarship application form
* 🏅 Admin dashboard to verify applicants
* 📄 Upload and review sports achievement documents
* 🔒 Secure and user-friendly UI built with modern React stack
* 📎 Document upload for supporting achievements and credentials

## 🛠️ Tech Stack

- **Language Used:** TypeScript  
- **Frontend:** React + TypeScript  
- **Build Tool:** Vite  
- **State Management:** React Hooks / Context API (or preferred library)  
- **Styling:** Tailwind CSS (optional)  
- **Routing:** React Router  
- **Form Handling:** React Hook Form (recommended)  
- **File Upload:** Multer (backend)


## 📦 Installation

```bash
git clone https://github.com/your-username/sports-scholarship-app.git
cd sports-scholarship-app
npm install
npm run dev
```

## 📁 Project Structure

```
src/
├── components/       # Reusable UI components
├── pages/            # Page-level components
├── services/         # API and utility functions
├── hooks/            # Custom React hooks
├── types/            # TypeScript types and interfaces
└── App.tsx           # Main app component
```

# Live webiste URL :- https://sports-scholarship-eil-internship.vercel.app/

## 📄 Document Upload API

The application supports document uploads for verifying sports achievements and academic credentials.

### API Endpoints

| Endpoint | Method | Description | Parameters |
|----------|--------|-------------|------------|
| `/api/applications/:id/documents` | POST | Upload documents for an application | `documents`: Files (max 5), `documentType`: Type of document |
| `/api/applications/:id/documents/:docId` | GET | Retrieve a specific document | None |
| `/api/applications/:id/documents/:docId` | DELETE | Delete a document | None |

### Supported Document Types

- PDF files (application/pdf)
- Images (image/jpeg, image/png)
- Word documents (.doc, .docx)
- Excel spreadsheets (.xls, .xlsx)

### Example Usage

```javascript
// Upload documents example
const formData = new FormData();
formData.append('documents', fileInput.files[0]);
formData.append('documentType', 'certificate');

fetch('/api/applications/:id/documents', {
  method: 'POST',
  body: formData,
  headers: {
    'Authorization': 'Bearer YOUR_TOKEN'
  }
})
.then(response => response.json())
.then(data => console.log(data));
```

## ✨ Future Scope

* Add email notification for application status
* Integration with government databases (for verification)
* Multi-role support (students, institutions, admins)
* Analytics dashboard for tracking scholarship trends

## 🤝 Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you'd like to change.

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

---

