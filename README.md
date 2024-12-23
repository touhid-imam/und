## Simple React Application for University of North Dakota

![University of North Dakota Logo](https://campus.und.edu/brand/_files/images/logos/logosystem-primaryfull-2022-600x150.jpg)

## Project Overview

The site highlights the "Leading with Purpose" social media campaign and includes:

- **President’s Endorsement Section**: Displays a message from the President endorsing the campaign.
- **Post List Section**: Shows the most recent posts pulled from an API, with filtering capabilities.
- **Responsive Design**: Built with ReactJS to ensure a smooth experience across various screen sizes.

## Features

- **Dynamic Post List**: Fetches posts from the last nine days using the API and allows filtering of content.
- **President’s Endorsement**: Displaying a message from the President alongside the campaign's goals.
- **Responsive Design**: The app adjusts layout and design based on screen size to ensure mobile and desktop compatibility.
- **UND Branding**: The University of North Dakota's logo and color schemes are applied in line with branding guidelines.
- **Client-Side Filtering**: Users can filter posts based on keywords.

## Technologies Used

- **ReactJS**: JavaScript library used to build the user interface.
- **Vite**: Next-generation build tool used for development and production builds.
- **TypeScript**: Strongly-typed superset of JavaScript for better development practices.
- **Axios**: For making HTTP requests to the UND API.
- **Bootstrap**: CSS framework used for responsive layout and components.
- **Sass**: CSS preprocessor used to write more maintainable styles.
- **React Query**: Data fetching and caching library to efficiently manage server state.

## Setup Instructions

To run this project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/und-social-media-campaign.git
   ```
2. Navigate into the project directory:
   ```bash
   cd und-social-media-campaign
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:5173` in your browser.

## Scripts

- **`dev`**: Starts the development server using Vite.
- **`build`**: Builds the project for production.
- **`clear-cache`**: Clears Vite and node modules cache.
- **`lint`**: Runs ESLint to check for code style and errors.
- **`preview`**: Previews the production build locally.
