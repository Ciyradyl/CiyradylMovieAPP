**Single Page Movie Application(React)**

*This application fetches json data from TMDB API and uses it to populate the related reach pages(trending, popular) with help of two buttons. You can check the movie details via clicking on that specific movie that you want to see the details. It also contains a search query for movies.*

![1](https://user-images.githubusercontent.com/32496821/205645946-8f7b9fee-7e90-4062-836c-d153eec0a22c.gif)
![2](https://user-images.githubusercontent.com/32496821/205646017-a53a5363-3f68-473b-9287-568095d374ac.gif)

<details>
 <summary>Latest Update Log</summary>

**December 4, 2022 Update**

- *[Added]Specific navigation bar javascript file generated and implemented to the project in order to improve the readability of the code.*
- *[Added]Searching with no input will get an alert to the screen thanks to alertify.*
- *[Fixed]The button called "Popular" which is located at navigation bar no longer refresh the page when clicked.*
- *[Fixed]The search function no longer crash the page when user don't enter an input.(empty input issue)*

**December 5, 2022 Update**

- *[Added]Instead of "Alertify", application is using "react-toastify" to improve the visual quality of the project.*
- *[Added]Implemented a category section that will help you to filter movies by their categories.*
- *[Fixed]Further optimizations in order to acquire a responsive design.(not all of them.)*

**December 6, 2022 Update**

- *[Fixed]Responsive design bugs fixed thanks to react-bootstrap*
- *[Changes]More natural CSS decision changes.*
- *[Added]Hover CSS to genre list*

</details>

**1. Actively used technologies are;**

- *React*
- *Javascript*
- *Bootstrap*
- *React Bootstrap*
- *CSS*
- *Alertify*

**2. In the future;**

- *Implementing "react-router-dom" and change the whole structure of the App.js with help of router technology.*
- *Replacing the design of the category section with "active" styling.
- *[DONE]Adding a category section and fetching "genre_ids:" parameter from TMDB API to implement category management.*
- *[DONE] Generating a specific Navi.js file as a component and replacing the present one with Navi.js. Also detailing the Navbar with new features.*

**3. How to start the project**

- *npm start*

**4. Significant API ENDPOINTS**

*API_POPULAR="https://api.themoviedb.org/3/movie/popular?api_key=<<API_KEY>>"*
*API_TRENDING="https://api.themoviedb.org/3/trending/all/day?api_key=<<API_KEY>>"*
*API_GENRE_LIST="https://api.themoviedb.org/3/genre/movie/list?api_key=<<API_KEY>>"*
*API_GENRE="https://api.themoviedb.org/3/discover/movie?api_key=<<API_KEY>>&with_genres"*
*API_SEARCH="https://api.themoviedb.org/3/search/movie?api_key=<<API_KEY>>&query"*
*API_IMG="https://image.tmdb.org/t/p/w500/"*

**5. How to Obtain a API Key**
- *You have to create a https://www.themoviedb.org/ account. You can see the API category at the profile/settings part. Just follow the guides from there and you will be fine.*