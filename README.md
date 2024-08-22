# Document Summarization Web Application

This project is a web application that allows users to upload PDF documents and receive summarized versions using a locally deployed Language Model (LLM). The application consists of a Python backend using FastAPI and a React frontend.

## Table of Contents
- [Objective](#objective)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
- [Features](#features)
- [Approach](#approach)
- [Challenges](#challenges)
- [License](#license)

## Objective
The objective of this project is to develop a web application that can:
- Accept PDF document uploads.
- Summarize the content of the uploaded PDF documents using a locally deployed Language Model.
- Provide a user-friendly interface for interaction.

## Project Structure
The project is organized as a monorepo with the following structure:
/LLM
├── LLM_Assignment/ # Backend code (FastAPI)
│ ├── main.py/ # Application files
│ ├── requirements/ # Pre-Requirement libraries details
├── LLM_Assignment_frontend/ # Frontend code (React)
│ ├── src/ # React application source files
│ └── public/ # Public assets
└── README.md # Project documentation

## Technologies Used
- **Backend**: Python, FastAPI
- **Frontend**: React, JavaScript, Tailwind CSS
- **LLM**: Locally hosted pre-trained model 
- **Others**: Git, GitHub

## Getting Started

### Prerequisites
- Python 3.8+
- Node.js 14+
- Pip (Python package installer)
- Git

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yogcodes/yogesh_document_summarize.git
   cd your-repo-name
2. Backend Setup:
Navigate to the backend directory:
cd LLM_Assignment/
. Create a virtual environment and activate it:
python -m venv env
source env/bin/activate  # On Windows use `env\Scripts\activate`
. Install the dependencies:
pip install -r requirements.txt
.Start the backend server:
uvicorn main:app --reload

3.Frontend Setup:
. Navigate to the frontend directory:
cd LLM_Assignment_frontend/
.Install the dependencies:
npm install
.Start the frontend development server:
npm start


Running the Application
With both servers running, visit http://localhost:3000 in your browser to use the application.

Features
File Upload: Upload PDF documents for summarization.
Summarization: Generate a summary of the uploaded PDF document using a locally hosted LLM.
User Interface: Responsive and user-friendly interface built with React

Approach
This application was built with a focus on:

Efficient handling of PDF file uploads and storage in the backend.
Integrating a pre-trained LLM for local deployment to ensure fast and reliable summarization.
Providing a seamless user experience through a well-designed frontend.

Challenges
Model Integration: Ensuring the LLM could efficiently process PDF documents and generate summaries within the constraints of local deployment.
Concurrent Requests: Handling multiple file uploads and summarization requests concurrently without performance degradation.
Error Handling: Robust error handling to manage various edge cases such as unsupported file formats or failed model inference.

License
This project is licensed under the MIT License - see the LICENSE file for details.

This `README.md` now reflects the specific requirements of using a virtual environment, running the FastAPI application with `uvicorn`, and handling only PDF uploads.
 





