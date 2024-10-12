# Movie Search App 🎥

## Project Overview

The **Movie Search App** is a simple and intuitive web application that allows users to search for movies and retrieve details like the movie title, release year, and poster. The app utilizes the **OMDb API** to fetch movie data and provides a clean and responsive user interface to display the search results.

This project was built using **Next.js**, **TypeScript**, **HTML**, and **CSS**, and is fully responsive, ensuring a seamless experience across devices, including mobile phones.

## Features

- **Search Functionality**: Users can search for movies by title using the input field.
- **Movie Details**: Displays key information about the movies including:
  - Movie title
  - Release year
  - Movie poster
- **Responsive Design**: Optimized for various screen sizes, ensuring a user-friendly experience on both desktops and mobile devices.
- **Background Image**: A background image is used to enhance the visual appeal of the app.
- **Footer**: Includes a copyright footer with the author’s name and “All rights reserved.”

## Technologies Used

- **Next.js**: For server-side rendering and React framework.
- **TypeScript**: For type safety and modern JavaScript features.
- **CSS**: Custom styles to create a visually appealing and responsive layout.
- **OMDb API**: Fetches movie data based on the user’s search query.
  
## How It Works

1. **Search Input**: Users enter a movie title into the search bar.
2. **API Call**: The app sends a request to the OMDb API to search for movies that match the query.
3. **Display Results**: Movie details, including the poster, title, and release year, are displayed in a card layout.
4. **Responsive Layout**: The app adjusts its layout and style to provide a smooth user experience across devices.

## Deployment

The app is deployed using **Vercel**, taking advantage of its seamless integration with Next.js for easy, error-free deployment.

## Getting Started

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/movie-search-app.git
   ```

2. **Install dependencies**:
   Navigate to the project directory and install the necessary packages:
   ```bash
   npm install
   ```

3. **Environment Variables**:
   Set up the **OMDb API key** in an environment file (`.env.local`):
   ```bash
   NEXT_PUBLIC_OMDB_API_KEY=your_api_key
   ```

4. **Run the app locally**:
   ```bash
   npm run dev
   ```

5. **Deploy to Vercel**:
   The project can be easily deployed using Vercel by connecting your GitHub repository.

## Author

- **Yemna Mehmood**  
  All rights reserved.  


