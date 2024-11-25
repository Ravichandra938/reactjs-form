Project Overview
This project is a healthcare dashboard developed with:

Frontend: React.js
Backend: Python Flask
The application allows users to submit their name, age, and upload a file, which is processed by the backend.

Prerequisites
Before running the project, ensure you have the following installed:

Node.js (for React)
Python 3.7 or higher (for Flask)
npm (comes with Node.js)
Recommended: Install a code editor like Visual Studio Code (VS Code).

Project Structure:-

healthcare-project/
├── healthcare-dashboard/  # React frontend
├── healthcare-backend/    # Flask backend
Steps to Run the Project
1. Setting Up the Backend (Flask)
1. Navigate to the backend folder:


cd healthcare-backend
2. Create and activate a virtual environment (optional but recommended):

For Linux/macOS:

python3 -m venv venv
source venv/bin/activate
For Windows:

python -m venv venv
venv\Scripts\activate
3. Install the required dependencies:


pip install flask flask-cors
4. Run the Flask server:


python app.py
The backend will start on http://localhost:5000.

2. Setting Up the Frontend (React)
1. Navigate to the frontend folder:


cd healthcare-dashboard
2. Install the required dependencies:


npm install
3. Start the React development server:


npm start
The frontend will open in your default browser at http://localhost:3000.

3. Testing the Application

1. Open the frontend in your browser (http://localhost:3000).
2. Fill out the form with your:
Name
Age
File upload
3. Click the Submit button.
4. Verify the following:
The uploaded file is saved in the backend uploads folder.
The success message from the backend is displayed.
4. Folder Details
1. Frontend (healthcare-dashboard/)
Contains the React code for the user interface.
Key Files:
src/App.jsx: Main React component.
package.json: Lists project dependencies.
2. Backend (healthcare-backend/)
Contains the Flask server code.
Key Files:
app.py: Flask application file.
uploads/: Folder where uploaded files are stored.
3. Troubleshooting
CORS Errors: Ensure Flask-CORS is installed and configured in the backend:

python
Copy code
from flask_cors import CORS
CORS(app)
Port Conflicts: If the backend (5000) or frontend (3000) ports are in use, free them or change the ports in the respective configurations.

Authors
K. Ravi Chandra Mouli
Final Year B.Tech Student, Computer Science Engineering
Email: kommuravi799@gmail.com
Phone: 9381573753

License
This project is for educational purposes only and is not intended for production use.