# MovieFlix

MovieFlix is a web application that allows users to search for movies and retrieve movie information using the OMDb API. Users can enter a movie title in the search input, and the app fetches data from the API to display search results. Users can view additional details about each movie and toggle the display of movie details.

## Features

- Search movies by title
- Fetch movie data from the OMDb API
- Display movie results with title, poster image, release year, and rating
- View additional details about a movie, such as plot summary, cast, genre, and director
- Responsive design for different screen sizes
- Error handling for API request failures and no results found

## Technologies Used

- HTML
- CSS
- JavaScript
- OMDb API

## Getting Started

To get started with the MovieFlix project, follow these steps:

1. Clone the repository:

   ```bash
      git clone https://github.com/geoffreykithuku/movieflix.git

   ```

2. Open the project in your preferred code editor.

3. Obtain an API key from the OMDb API website (http://www.omdbapi.com/) by signing up for a free account.

4. In the script.js file, replace apiKey with your own API key:

   ```javascript
   const apiKey = "YOUR_API_KEY";
   ```

5. Open the index.html file in a web browser or use a development server to run the application.

## Usage

- Enter a movie title in the search input field.

- Click the search button or press Enter.

- The app will fetch movie data from the OMDb API and display the search results.

- Each movie result includes the movie title, poster image, release year, etc.

- Click the "View Details" button on a movie card to display additional information about the movie, such as plot summary, cast, genre, and director.

- Click the "View Details" button again to hide the movie details.

- If an API request fails or no results are found, an error message will be displayed.

## Contributing

Contributions to MovieFlix are welcome! If you find any issues or have suggestions for improvements, feel free to submit a pull request.

## License

This project is licensed under the MIT License.

Feel free to modify and customize the README file to suit your project's specific details and requirements.
