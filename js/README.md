# Movie Recommendation System

A simple web application that recommends movies based on user preferences including genre, duration, and mood.

## Features

- Interactive dropdown menus for selecting preferences
- Real-time movie recommendations
- Responsive design for both desktop and mobile
- Fallback recommendations when exact matches aren't found

## Setup Instructions

1. Clone the repository:
```bash
git clone <your-repository-url>
cd movie-recommender
```

2. No additional installation is required as this is a vanilla JavaScript application.

3. To run the application:
   - Simply open the `index.html` file in a web browser
   - Alternatively, you can use a local development server:
     - Using Python: `python -m http.server 8000`
     - Using Node.js: Install `http-server` globally and run:
       ```bash
       npm install -g http-server
       http-server
       ```

## Technical Details

- Built with vanilla JavaScript, HTML5, and CSS3
- Responsive design using CSS media queries
- Movie recommendations based on a decision tree algorithm
- Dynamic content generation without any framework dependencies

## Project Structure

```
movie-recommender/
├── index.html          # Main HTML file
├── css/
│   └── styles.css      # Styling
├── js/
│   ├── movieData.js    # Movie database
│   └── app.js          # Application logic
└── README.md          # Documentation
```

## Challenges and Solutions

1. **Movie Matching Logic**: Implemented a flexible matching system that provides alternative recommendations when exact matches aren't found.
2. **Responsive Design**: Used CSS media queries to ensure the application works well on all device sizes.
3. **User Experience**: Created a simple, intuitive interface with immediate feedback on user selections.