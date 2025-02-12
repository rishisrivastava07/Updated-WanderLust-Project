# WanderLust - Travel Accommodation Website

WanderLust is a full-stack web application designed to simplify travel accommodation management. It allows users to search, book, and manage stays with seamless user authentication, real-time geolocation services, and robust error handling.

## Features

- **Full CRUD Functionalities**: Users can create, read, update, and delete accommodations.
- **User Authentication**: Secure authentication implemented using Passport.js.
- **Cloud Services**: Image and media management powered by Cloudinary.
- **Database Management**: MongoDB Atlas used for scalable and secure data storage.
- **Backend Development**: Built using Node.js and Express.js.
- **Form Validations**: Implemented on both frontend and backend for security and data integrity.
- **Error Handling**: Robust error-handling mechanisms for better user experience.
- **GeoCoding & Mapping**: Integrated Mapbox API for geolocation services.
- **Hosting & Deployment**: Web services hosted on Render.
- **Scalability & Load Balancing** (Work in Progress): Enhancements for handling increased traffic efficiently.

## Tech Stack

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (MongoDB Atlas)
- **Authentication**: Passport.js
- **Cloud Storage**: Cloudinary
- **Geolocation**: Mapbox API
- **Hosting**: Render

## Installation & Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/WanderLust.git
   cd WanderLust
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file and configure the following variables:
   ```env
   PORT=8080
   MONGO_URI=your_mongodb_atlas_uri
   CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
   CLOUDINARY_API_KEY=your_cloudinary_api_key
   CLOUDINARY_API_SECRET=your_cloudinary_api_secret
   MAPBOX_TOKEN=your_mapbox_api_token
   SESSION_SECRET=your_session_secret
   ```

4. Start the server:
   ```bash
   nodemon app.js
   ```

5. Open the application in your browser at `http://localhost:8080/listings`

## Live Demo

Check out the live version of WanderLust here: [Live Link](https://wanderlust-services-rq9h.onrender.com/)

## Future Enhancements

- Implement **scalability** improvements to support higher user traffic.
- Introduce **load balancing** mechanisms for better performance.
- Enhance **UI/UX** for a smoother booking experience.
- Expand **search and filter** functionalities for better accommodation discovery.

## Contributing

Contributions are welcome! Feel free to submit pull requests or report issues. Feel free to update the repository link and environment variables with your actual credentials before deployment.
