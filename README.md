# Project Name: (Retro Weather)

External Links
[Repo] https://github.com/mr-aust1n/milestone-project-two/actions

[GHPages] https://mr-aust1n.github.io/milestone-project-two/

Internal Links
[Test](/TEST.md)

<summary>A summary of Retro Weather</summary>

- **Retro Weather** displays a background image that represents the current weather.
- **Retro Weather** is especially handy for those who travel and want to know the immediate weather at their destination.
- **Retro Weather** has been designed so users worldwide can view the weather where they are or in other countries.
- **Retro Weather** Shows the current time, date, and location for the area being searched.
- **Retro Weather** is a simple weather information page that uses the free tier of WeatherAPI.com.
- **Retro Weather** is a weather app accessible to everyone

## Table of Contents

This unit aims to provide learners with the knowledge and skills needed to build a dynamic, interactive Front end web application. It includes understanding user input and control when interacting with a web application. It also includes understanding the principles of automated and manual testing for debugging

[1. Design, Develop, and Implement](#1-design-develop-and-implement)
[2. Implement Front-end Interactivity](#2-implement-front-end-interactivity)
[3. Testing the Application](#3-testing-the-application)
[4. Deployment to a Cloud Platform](#4-deployment-to-a-cloud-platform)
[5. Version Control and Documentation](#5-version-control-and-documentation)
[6. Credits and Dependencies](#6-Credits-and-Dependencies)

### 1. Design, Develop, and Implement

<em>1.0 Design, develop and implement a dynamic Front end web application using HTML CSS and JavaScript.</em>

- I designed my weather web application using Adobe XD, which allowed me to create wireframes for desktop, tablet, and mobile versions of the site.

Throughout the design process, I applied key principles of user experience design by focusing on a clear structure, and logical navigation buttons and a simple search section. I also incorporated accessibility considerations, such as ensuring sufficient colour contrast, using clear and legible typography, and designing intuitive layouts to support a diverse range of users that may use this site at various times of the day (Eg night colours and day colours)

This approach enabled me to create a web application that is responsive, accessible, and designed to supply the correct data to the end user.

Below are two mockup images of the Yap Marketing website created using the adobe xd software.

IMAGES NEEDED

<em>1.1 Design a web application that meets accessibility guidelines, follows the principles of UX design and presents a structured layout and navigation model, and meets its given purpose.</em>

- The web application meets accessibility guidelines by incorporating semantic HTML elements, ensuring compatibility with assistive technologies, and providing meaningful alt tags for all my images used. It maintains a high colour contrast between text and backgrounds for the best readability. The design follows UX principles, offering intuitive navigation, responsive layouts for various screen sizes, and clear results from user interactions. The structured layout is built with a logical hierarchy, including a consistent header, main content area, and side bar to ensure users can navigate seamlessly. Overall, the site successfully fulfils its purpose by presenting information in an accessible, user-friendly, and visually engaging retro manner.

  <em>1.2 Design interactivity for a web application that lets the user initiate and control actions and gives feedback.</em>

- REtro weather features three major cities from around the world—Tokyo, London, and New York—with quick link buttons providing instant access to their current weather and time of day. Additionally, I have included a search bar that enables users to look up their desired location and receive real-time feedback on the weather and time of day for that location.

IMAGES NEEDED

<em>1.3 Write custom JavaScript, HTML and CSS code to create a responsive Front end web application consisting of one or more HTML pages with significant interactive
functionality.</em>

- I have developed a single-page, responsive front-end web application using a mobile-first approach. Media queries are used within my project to optimise the layout for various screen sizes, including standard tablet dimensions (min-width: 768px) and desktop resolutions (min-width: 1200px). The application is designed to provide significant interactivity through my custom JavaScript, HTML, and CSS.

<em>1.4 Write JavaScript code to produce relevant responses to user actions.</em>

- My JavaScript code dynamically fetches real-time weather data from an external API (http://weatherapi.com) and processes the response to display a meaningful feedback to users, such as current weather conditions (e.g., sunny, raining) and whether it is day or night in the searched location. Custom event listeners handle user interactions, including the quick link buttons for preset cities and the search functionality, which allows users to input their desired location. The application also incorporates error handling with a modal to inform users if an invalid location is entered or if the API request fails, ensuring a robust and user-friendly experience.

  <em>1.5 Implement an interactive web application that incorporates images or graphics of usable resolution, legible, unobscured text, consistent styling, undistracted foregrounds.</em>

- I achieved this by incorporating animated graphics, weather-themed backgrounds, and a frosted sidebar for the foreground on the desktop view. The sidebar hides part of the background image to ensure the displayed results are clear and easy for users to read.

IMAGES NEEDED

<em>M(i) Design a web application following the principles of UX design which meets accessibility guidelines, is easy to navigate and allows the user to find information and resources intuitively.</em>

- My web application is designed following key principles of UX design, ensuring it meets accessibility guidelines and provides an intuitive, user-friendly experience. The site incorporates a responsive layout with a mobile-first approach, ensuring seamless usability across devices. Navigation is straightforward as it features a few quick link buttons to major cities and a search bar that allows end users to easily find weather and time information for their desired location. Accessibility is enhanced through the use of semantic HTML elements, proper colour contrast, and a frosted sidebar that ensures text and results remain legible and unobstructed. With tests on the above, these features work together to make the application easy to navigate, intuitive, and accessible to a wide range of users.

### 2. Implement Front-end Interactivity

<em>2.0 Implement Front end interactivity, using core JavaScript, JavaScript libraries and/or Application Programming Interfaces (APIs).</em>

- My web application implements front-end interactivity by using vanilla JavaScript, APIs, and animated icon features. The vanilla JavaScript is utilised to manage DOM manipulation and event handling, such as updating the displayed weather information dynamically when users interact with the search bar or the quick link buttons.

The application also uses the OpenWeather API using my unique key to fetch real-time weather data, which is then processed and displayed on the page using JavaScript. This allows users to view weather conditions and the time of day for specific locations, providing an interactive and personalised experience.

Additionally, animated graphics and weather-themed backgrounds are incorporated to enhance the visual interactivity of the web application. Error handling with JavaScript ensures users receive appropriate feedback if an invalid location is entered or if the API fails to respond. These elements work together to create a highly interactive and user-friendly front end.

<em>2.1 Write JavaScript code, that passes through a linter (e.g. JSLint) with no major issues and write validated HTML and CSS code.</em>

- See here [Test](/TEST.md)

  <em>2.2 Write JavaScript functions that correctly implement compound statements such as “if statements” and/or loops.</em>

- My application implements JavaScript functions that effectively use compound statements and loops to provide interactivity. For example, `if` statements handle the user input validation, dynamically update the UI based on weather conditions, and determine whether it is day or night. A `forEach` loop is used to attach event listeners to city buttons, enabling dynamic interaction.

IMAGES NEEDED (Use code examples)

<em>2.3 Write code that intelligently handles empty or invalid input data.</em>

- My application handles empty or invalid input data using conditional statements. For example, when a user submits the search form without entering a location, an `if` statement checks the input and displays an alert prompting the user to 'type in a city name'. Additionally, when fetching data from the Weather API, a `.catch()` block handles invalid API responses or errors by alerting the user that the 'city was not found' and resetting the application's state for the user to try again. These mechanisms ensure a smooth and error-tolerant user experience. With this modal in place it allows a smooth process for the user.

IMAGES NEEDED (Modal)

<em>2.4 Implement appropriate working functionality for all project requirements.</em>

- My web application fulfils all the project requirements by providing a responsive and interactive web experience. Users can search for weather information using a search bar or access quick links for pre-defined cities. It fetches real-time weather data and time of day from the Weather API key. It updates the user interface with accurate and accessible information. The application incorporates error handling for empty or invalid input, ensuring a smooth user experience, and meets accessibility standards with semantic HTML and responsive design. All features work seamlessly to achieve the project requirements.

PICTURES NEEDED (search screen shot/ )

<em>2.5 Organise non-trivial JavaScript code in external file(s) linked at the bottom of the body element (or bottom of head element if needs to be loaded before the body HTML) and CSS code in external files linked to HTML in the head element.</em>

- My project adheres to the requirement of organising non-trivial JavaScript and CSS code in external files. The JavaScript code is stored in javascript.js, located in the assets folder, and is linked at the bottom of the <body> element in the HTML file to ensure it loads after the page content, optimising performance. The CSS code is stored in an external file named styles.css, also in the assets folder, and is linked in the <head> element. This approach ensures the separation of structure, styling, and functionality, improving code maintainability and readability. Additional external resources, such as fonts and icons, are linked in the <head> element to enhance the user interface.

PICTURES NEEDED (give extrenal links images )

<em>2.6 Write code that meets minimum standards for readability (comments, indentation, consistent and meaningful naming conventions).</em>

- My code meets the minimum standards for readability by including comments for future developers, proper indentation by using the visual studio code extension 'prettier', and consistent, meaningful naming conventions. I have also used comments throughout my JavaScript file to explain key functionality, such as event listeners, API calls, and conditional logic, helping clarify the purpose of each section for anyone working on my project at a later date. Indentation is consistent across all files, ensuring the code structure is easy to follow. Variable and function names, such as fetchWeatherData, cityInput, and dayOfTheWeek, are descriptive and aligned with their purpose, making the code understandable for other developers. This approach ensures that the code is clear, maintainable, and adheres to best practices.

NEEDED PICTURES

<em>2.7 Name files consistently and descriptively, without spaces or capitalisation to allow for crossplatform compatibility. </em>

- I have organised my images by placing daytime images into a daytime folder and nighttime images into a nighttime folder, with each image clearly named to represent the weather condition it corresponds to. Additionally, I have applied the same structure for both mobile and desktop versions to ensure clarity and consistency.

[Desktop Daytime Images Folder](/assets/images/desktop/day/)
[Desktop Nighttime Images Folder](/assets/images/desktop/night/)

<em>2.8 Write code that does not generate internal errors on the page or in the console as a result of user actions.</em>

- NEEDS WRITE UP AND IMAGES

  <em>2.9 Organise code and assets files in directories by file type.</em>

- I have organised my project files and assets into directories based on file type to ensure clarity and maintainability. The assets folder contains subdirectories for specific types of files. The images folder stores all weather-related backgrounds, further divided into daytime and nighttime folders to categorise images based on time of day and if they are for mobile or desktop. Animated icons are stored in an icons folder, with filenames clearly describing the weather conditions they represent. The css folder contains the styles.css file for all styling, while the javascript.js file is located directly in js folder. This directory structure ensures logical grouping of files, making the project easy to navigate and manage.

project/
│
├── assets/
│ ├── css/
│ │ └── styles.css
│ │ └── styles_404.css
│ ├── images/
│ │ │
│ │ ├──sunny.png
│ │ │
│ │ ├── desktop/
│ │ │ ├── day/
│ │ │ │ ├── clear.png
│ │ │ │ ├── cloudy.png
│ │ │ │ ├── rainy.png
│ │ │ │ └── snowy.png
│ │ │ ├── night/
│ │ │ │ ├── clear.png
│ │ │ │ ├── cloudy.png
│ │ │ │ ├── rainy.png
│ │ │ │ └── snowy.png
│ │ ├── mobile/
│ │ │ ├── day/
│ │ │ │ ├── clear.png
│ │ │ │ ├── cloudy.png
│ │ │ │ ├── rainy.png
│ │ │ │ └── snowy.png
│ │ │ ├── night/
│ │ │ │ ├── clear.png
│ │ │ │ ├── cloudy.png
│ │ │ │ ├── rainy.png
│ │ │ │ └── snowy.png
│ ├── js/
│ │ └── javascript.js
│ │ └── 404.js
│
├── index.html

<em>M(iv) Write code such that users who direct to a nonexistent page or resource are redirected back to the main page without having to use browser navigation buttons.</em>

- I have created a custom 404.html page and within GitHub Pages, it directs users to this page when they navigate to nonexistent. To improve usability, I added a 'Back to Home' button that allows users to return to the main page (index.html). Additionally, the page features a countdown timer starting at 10 seconds, which automatically redirects users to index.html when it reaches 0, ensuring a seamless experience without requiring any manual input.

### 3. Testing the Application

<em>3.0 Test an interactive Front end web application through the development, implementation and deployment stages.</em>

- a

<em>3.1 Explain the principles of automated and manual testing and when each might be deployed. </em>

- a
  <em>3.2 Design and implement testing procedures (automated or manual) to assess functionality, usability and responsiveness of the web application. </em>

- a

<em>3.3 Insert screenshots of the finished project that align to relevant user stories.</em>

- a

<em>3.4 Apply test procedures during development and implementation stages and test to ensure the deployed version matches the development version. </em>

- a
  <em>3.5 Fully document the results of well-planned testing procedures (automated or manual) to assess the website’s functionality, usability and responsiveness.</em>

- a

### 4. Deployment to a Cloud Platform

<em>4.0 Deploy an interactive Front end web application to a Cloud platform.</em>

- The interactive front-end web application has been deployed to GitHub Pages, a cloud-based hosting platform. Using GitHub Desktop for version control, the application was pushed from the local repository to GitHub. GitHub Pages was enabled in the repository settings, hosting the application directly from the main branch. This ensures a smooth and reliable deployment process, making the application accessible online

<em>4.1 Deploy a final version of the interactive web application code to a cloud-based hosting platform (e.g. GitHub Pages). </em>

- I successfully deployed my web application to GitHub Pages, utilizing GitHub Desktop for version control and management. The deployment process included pushing the local codebase to a GitHub repository and enabling GitHub Pages in the repository settings. I created a new branch for specific sections of the website and merged them into the main branch once the code, developed in Visual Studio Code, was finalized and pushed to the repository.

PICTURES NEEDED

<em>4.2 Ensure that the deployed application is free of commented out code and has no broken internal links. </em>

- All unused code has been removed on the final push.

  <em>4.3 Use Git & GitHub for version control of an interactive web application up to deployment.</em>

- I have used github desktop for pulling the repo from github initally and then I have also used it to push my code and create new branches.

PICTURES NEEDED

<em>M(v) Commit often, for each individual feature/fix, ensuring that commits are small, well-defined and have clear, descriptive messages.</em>

- I committed often to my project, ensuring each commit was tied to a specific feature or fix with clear, descriptive messages for others to understand. However, committing too frequently with minimal changes caused deployment issues. To resolve this, I committed after completing significant sections or creating new branches, ensuring a stable deployment process while maintaining a clear and organised commit history.

PICTURES NEEDED

### 5. Version Control and Documentation

<em>5.0 Demonstrate and document the development process through a version control system such as GitHub.</em>

- The development process was tracked using GitHub, with regular commits tied to specific features or fixes and clear messages. Branches were created for major features, allowing independent development and testing before merging. GitHub's commit history documents the project's progression, ensuring a structured and transparent workflow.

PICTURES NEEDED

<em>5.1 Document the full development cycle, with clear evidence given through commit messages, the README.</em>

- The full development cycle of the project is documented through commit messages and the README file, aligning with the stages of the SDLC. Below I have listed the stages if the SDLC and what I did in each stage:

- 1. Planning: The project requirements were identified within my milestone 2 pdf downloaded from code institute.From here I started planning features like weather search functionality, responsiveness, and accessibility. The README includes these goals.

- 2. Analysis: The feasibility of integrating features like an API and responsive design was assessed. This tech stack used, such as JavaScript, CSS, and the Weather API.

- 3. Design: The application's layout was wireframed and implemented as a mobile-first design, with a clear structure for navigation, content, and interactivity for the end user.

- 4. Implementation: Code was developed incrementally, with frequent commits specific features or fixes. Branches were used for major features, enabling efficient testing and integration.

- 5. Testing: Features were tested during development, ensuring functionality like search input validation, API error handling, and responsive design worked as expected.

- 6. Deployment: The final version of the application was deployed to GitHub Pages, with deployment instructions documented in the README and all unused code was removed.

- 7. Maintenance: Post-deployment, updates will be made through additional commits to address issues and improve performance and functionality.

<em>5.2 Write a README.md file for the interactive web application that explains its purpose and the value that it provides to its users.</em>

- Purpose
  The Retro Weather application provides users with real-time weather updates and time information for their chosen location. Designed with accessibility and ease of use in mind, the application delivers a visually engaging experience with animated graphics and responsive layouts. It serves as a reliable tool for users to quickly access accurate weather data, whether at home or on the go.

## Value to Users

- **Quick Access to Weather Data**: Users can instantly view current weather conditions for pre-selected cities or search for any location worldwide.
- **Real-Time Information**: Displays real-time weather details such as temperature, conditions (e.g., rainy, sunny), and time of day.
- **User-Friendly Design**: Features a clean, responsive layout that works seamlessly across desktop and mobile devices.
- **Interactive Features**: Provides dynamic updates based on user input, with smooth transitions and clear feedback.
- **Reliable Error Handling**: Ensures a seamless experience by handling invalid inputs and guiding users effectively.

The application combines functionality with an engaging user experience, making it a valuable resource for users looking to plan their day based on up-to-date weather conditions.

<em>5.3 Clearly separate and identify code written for the interactive web application and code from external sources (e.g. libraries or tutorials). Attribute any code from external sources to its source via comments above the code and (for larger dependencies) in the README. </em>

- Please see the [6. Credits and Dependencies](#6-Credits-and-Dependencies) for full information.

<em>5.4 Use consistent and effective markdown formatting that is well structured, easy to follow, and has few grammatical errors, when writing a README file.</em>

- My README file is written using consistent and effective Markdown formatting, ensuring a well-structured and easy-to-follow document. I have used clear headings, subheadings, and lists to organise the information, making it accessible for readers. To minimise spelling errors I have used a spelling extension in Visual Studio Code to check the text before finalising the README. This approach helps that the document is error-free, polished, and adheres to best practices in Markdown formatting. I have also used the 'Markdown Preview extension with visual studio code that shows the output of my readme file on the right hand side.

IMAGE OF README PREVIEW

<em>M(vi) Present a clear rationale for the development of the project, in the README, demonstrating that it has a clear, welldefined purpose addressing the needs of, and user stories for a particular target audience (or multiple related audiences). </em>

- The development of this project was driven by the need to provide a simple, interactive, and visually engaging tool for accessing real-time weather updates. The application addresses the needs of various target audiences. It offers a fast, intuitive interface that displays weather data and time information. For example, the end user can quickly check the weather in different cities to plan their trips. The application’s design and features, such as location-based searches and dynamic visuals, ensure it meets these needs effectively.

  <em>M(vii) Document the UX design work undertaken for this project, including any wireframes, mock-ups, diagrams created as part of the design process, and the reasoning behind it. Include diagrams created as part of the design process and demonstrate that these have been followed through to implementation. </em>

- Before starting the project, I researched weather applications by watching YouTube videos to understand effective layouts and features, selecting one that inspired the structure of my application. Using Adobe XD, I created wireframes for mobile, tablet, and desktop views, customising the design to include key features such as a search bar, quick access city buttons, and a clean weather display. Mock-ups were also developed in Adobe XD, incorporating the chosen colour palette, typography, and interactive elements to ensure a cohesive user experience. A flow diagram was created to outline the user journey, identifying potential navigation issues and ensuring intuitive interaction. These wireframes, mock-ups, and diagrams were followed closely during implementation, and the final application reflects the planned designs, maintaining the intended responsive layout and functionality.

  <em>M(viii) Document testing fully to include evaluation of bugs found and their fixes and explanation of any bugs that are left unfixed. M(viii) Fully document the deployment procedure in a section in the README file.</em>

- Testing and Bug Evaluation
  The application underwent thorough testing to ensure functionality, usability, and responsiveness across different devices and browsers at various times of day and in different weather conditions. During testing, the following bugs were identified and resolved:

Bug: The search bar allowed empty submissions, resulting in an error when fetching weather data.
Fix: An if statement was added to validate input and alert the user if the search field was left empty.
Bug: On mobile devices, the layout of the weather details panel overlapped with other elements.
Fix: Adjusted CSS to include additional padding and margin for smaller screens, ensuring proper spacing.
Bug: API errors (e.g., invalid location) were not handled gracefully, causing the app to display no feedback.

Deployment Procedure
The application was deployed using GitHub Pages, with the following steps:

The project files were committed and pushed to a GitHub repository using GitHub Desktop.
In the GitHub repository settings, GitHub Pages was enabled under the "Pages" section.
The main branch was selected as the source for deployment, and the default folder (root) was used.
The application was then tested on its live URL to ensure all features worked as expected in the deployed environment.
These steps are documented in the README file, along with the live URL of the deployed application for user access.

IMAGES NEEDED

### 6. Credits and Dependencies

- Fonts - Google fonts and Font Awesome for icons
- Animated Icons - https://basmilius.github.io/weather-icons/index.html
- Retro images - http://elements.envato.com/ I collected some images from here and made my own wallapapers.
- CSS Reset - https://www.joshwcomeau.com/css/custom-css-reset/?ref=gorillasun.de

- Weather API - https://www.weatherapi.com/docs/

- Stackover Flow - I had to search a number of Stackoverflow threads to help me with my javascript. https://stackoverflow.com/questions/62376115/how-to-obtain-open-weather-api-date-time-from-city-being-fetched

[Test](/TEST.md)
