Micro-FE Setup Guide

 Document provides step-by-step instructions for setting up and running the Host Application (Micro-FE) along with its dependent Micro-Frontend applications.

Prerequisites

Ensure you have Node.js and npm installed on your system.

Basic understanding of Micro-Frontend architecture.

Steps to Setup and Run

Step 1: Clone the repositories

Create a common directory to organize all the cloned projects:

mkdir micro-fe-projects
cd micro-fe-projects

Clone the required Git repositories:

git clone <project-url>

Repeat this for all required repositories (e.g., chatapp, emailapp, host application).

Step 2: Update webpack.config.js in the Host Application

Navigate to the Host Application directory.

Locate and edit the webpack.config.js file.

Replace the remotes configuration at line 43:

Original:

remotes: {
  chatapp: "chatapp@https://micro-fe-chat.vercel.app/remoteEntry.js",
  emailapp: "emailapp@https://micro-fe-email.vercel.app/remoteEntry.js",
},

Updated:

remotes: {
  chatapp: "chatapp@http://localhost:3006/remoteEntry.js",
  emailapp: "emailapp@http://localhost:3007/remoteEntry.js",
},

Step 3: Install dependencies

Enter the directory of each application:

cd <appname>

Install the required node modules:

npm install

Step 4: Run the applications

Start the dependent Micro-Frontend applications first:

Chat App:

cd chatapp
npm start

Email App:

cd emailapp
npm start

Start the Host Application:

cd host-app
npm start

Notes

Ensure the Chat App is running on http://localhost:3006 and the Email App is running on http://localhost:3007.

The Host Application depends on the Chat and Email applications, so they must be running before starting the Host Application.

With these steps completed, your Micro-Frontend applications should be up and running successfully!




Technologies Used-
React.js: The framework used for building all applications in this project.
Webpack Module Federation: For integrating and sharing modules between the Host Application and the Micro-Frontend applications.

Scalability-
Additional functionality-specific applications can be easily integrated into the Host Application using Webpack Module Federation. This makes the system highly scalable and adaptable to new requirements.

Reusable UI components, such as Cards.jsx and Button.jsx, have been created to facilitate consistent design and functionality. These components can be shared across remote applications, ensuring efficient development and maintenance.
