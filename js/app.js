document.addEventListener('DOMContentLoaded', function() {
    // Get form elements
    const genreSelect = document.getElementById('genre');
    const durationSelect = document.getElementById('duration');
    const moodSelect = document.getElementById('mood');
    const recommendationDiv = document.getElementById('recommendation');
    const recommendationText = document.getElementById('recommendation-text');

    // Add event listeners to all select elements
    [genreSelect, durationSelect, moodSelect].forEach(select => {
        select.addEventListener('change', updateRecommendation);
    });

    function updateRecommendation() {
        // Get current values
        const selectedGenre = genreSelect.value;
        const selectedDuration = durationSelect.value;
        const selectedMood = moodSelect.value;

        // Check if all selections are made
        if (selectedGenre && selectedDuration && selectedMood) {
            // Find matching movies
            const matchingMovies = movieDatabase.filter(movie => 
                movie.genre === selectedGenre &&
                movie.duration === selectedDuration &&
                movie.mood === selectedMood
            );

            // If we found a match
            if (matchingMovies.length > 0) {
                // Randomly select one movie if multiple matches
                const recommendedMovie = matchingMovies[Math.floor(Math.random() * matchingMovies.length)];
                
                // Display recommendation
                recommendationText.innerHTML = `Based on your preferences, we recommend watching <strong>${recommendedMovie.title}</strong> — ${recommendedMovie.description}`;
                recommendationDiv.classList.remove('hidden');
            } else {
                // If no exact match, find closest match based on genre
                const genreMatches = movieDatabase.filter(movie => movie.genre === selectedGenre);
                if (genreMatches.length > 0) {
                    const recommendedMovie = genreMatches[Math.floor(Math.random() * genreMatches.length)];
                    recommendationText.innerHTML = `While we couldn't find an exact match, you might enjoy <strong>${recommendedMovie.title}</strong> — ${recommendedMovie.description}`;
                    recommendationDiv.classList.remove('hidden');
                } else {
                    recommendationText.innerHTML = "Sorry, we couldn't find a movie matching your preferences. Try different selections!";
                    recommendationDiv.classList.remove('hidden');
                }
            }
        } else {
            // Hide recommendation if not all selections are made
            recommendationDiv.classList.add('hidden');
        }
    }
});