[2. Implement Front-end Interactivity](/README.md#2-implement-front-end-interactivity)

- When doing my project I used a number of tools that allowed me to check my web application for good accessibility and good UX principles. I have found that relying on one tool is not enough.

- To check my colours worked with the alternating background images used within the app, I used a program called used [wave.webaim](https://wave.webaim.org/report#/https://mr-aust1n.github.io/milestone-project-two/?). I found that I had no errors but only 1 alert. To fix the alert I had to rename the title tag differently from the alt text.

- I used Lighthouse in Chrome DevTools to evaluate and improve the accessibility of my web app. I was not happy until I could get the in the green.

|                 WAVE Alert                 |               WAVE Fix                |
| :----------------------------------------: | :-----------------------------------: |
| ![screenshot](/doumentation/wavealert.png) | ![screenshot](/doumentation/wave.png) |

|                   Chrome                    |
| :-----------------------------------------: |
| ![screenshot](/doumentation/lighthouse.png) |

<em>2.1 Write JavaScript code, that passes through a linter (e.g. JSLint) with no major issues and write validated HTML and CSS code.</em>

- I initially attempted to validate my code using JSLint online but encountered numerous errors. With further investigation, I discovered that JSLint does not support ES6 syntax, whereas my code was written using modern ES6 standards. To address this, I installed ESLint via the terminal, which provided more robust support for ES6. During the linting process, ESLint flagged a single error and included a helpful link to the exact issue. Following the link, I identified and corrected the problem based on the suggestion provided. After making the necessary changes, I re-ran ESLint, and my code successfully passed validation. There is no output returned and I had to use google if this was correct.

|              JS LINT FAIL               |
| :-------------------------------------: |
| ![screenshot](/doumentation/jslint.png) |

|                ES LINT INSTALL                 |
| :--------------------------------------------: |
| ![screenshot](/doumentation/eslintinstall.png) |

|               ES LINT FAIL               |
| :--------------------------------------: |
| ![screenshot](/doumentation/eserror.png) |

|                ES LINT PASS                 |
| :-----------------------------------------: |
| ![screenshot](/doumentation/eslintpass.png) |

[Go Back to Readme](/README.md#2.1)

### 3. Testing the Application

<em>3.0 Test an interactive Front end web application through the development, implementation and deployment stages.</em>

- Testing During Development Stage
- Unit Testing:
  I tested individual JavaScript functions and components using Jest, focusing on form validation, button interactions, and smaller modules. I also performed user testing across different browsers and screen sizes, ensuring functionality worked seamlessly from start to finish. See 3.4 Below for screenshots.

- Debugging:
  I used Google Chrome DevTools to inspect elements, monitor console errors, and track API calls. This helped me identify and resolve issues efficiently.

  |             API Test in Chrome             |
  | :----------------------------------------: |
  | ![screenshot](/doumentation/apichrome.png) |

- Accessibility Testing:
  I ran accessibility tests using Wave and Chrome Lighthouse. Based on the suggestions, I made improvements to enhance the accessibility of the site.
- Add image here

- Cross-Browser Testing:
  I checked the site on major browsers like Chrome, Safari, and Edge to ensure consistent behavior and appearance.

- Responsive Design Testing:
  Using the "Live Server" extension in Visual Studio Code, I could broadcast the project to the browser and tested responsiveness with Chrome DevTools by simulating different screen sizes. Additionally, I used a real iPad and various phones to verify that the site looked and worked well on actual devices.

|                 iPad                  |                 Desktop                 |
| :-----------------------------------: | :-------------------------------------: |
| ![screenshot](/doumentation/ipad.png) | ![screenshot](/doumentation/1900px.png) |

- Testing During Implementation Stage:
  During implementation, I conducted both automated and manual testing to ensure functionality and usability. Integration testing validated the `fetchWeatherData` function’s interaction with the API, including error scenarios. Manual UI/UX testing was performed on phones and an iPad to confirm forms and buttons behaved correctly. Error handling testing ensured invalid inputs triggered appropriate alerts. Performance improvements, like optimising images, were made based on Lighthouse reports, ensuring a smooth and functional user experience.

- Integration Testing:
  To ensure the API worked correctly, I used Chrome DevTools and the network tab to monitor API requests and responses.

  |             API Test in Chrome             |
  | :----------------------------------------: |
  | ![screenshot](/doumentation/apichrome.png) |

- UI/UX Testing:
  I asked several people to use the web app and observed their interactions, focusing on usability and search submissions to validate the design and functionality.

  |              New user Testing               |
  | :-----------------------------------------: |
  | ![screenshot](/doumentation/ladytester.jpg) |

- Error Handling Testing:
  I simulated invalid inputs, such as incorrect city names, to ensure the app displayed appropriate error messages and handled issues gracefully.
  Add image here
- Performance Testing:
  I evaluated the page’s speed and responsiveness using Chrome Lighthouse and optimised assets. In future developments, I would use webp images as I have discovered this will help even more.

  |                   Chrome                    |
  | :-----------------------------------------: |
  | ![screenshot](/doumentation/lighthouse.png) |

- Testing During Deployment Stage
  Regression Testing:
  After deploying the site, I tested all features again to ensure that new updates or features didn’t break any existing functionality.

- SEO and Accessibility Validation:
  I checked for proper metadata, SEO optimisation, and accessibility using Lighthouse and ensured the site met recommended standards.

  |                   Chrome                    |
  | :-----------------------------------------: |
  | ![screenshot](/doumentation/lighthouse.png) |

<em>3.1 Explain the principles of automated and manual testing and when each might be deployed. </em>

- I used both automated and manual testing to ensure my project works smoothly. For automated testing, I used Jest to test functions like fetchWeatherData to verify that API responses are handled correctly and the DOM updates as expected. I also used ESLint to identify and fix potential issues in my code, ensuring it is clean and error-free. Manual testing was essential for checking edge cases, such as entering invalid or blank city names, rapidly clicking city buttons, and simulating slow or failed network conditions. Additionally, I used Lighthouse in Chrome DevTools to check accessibility and performance. By combining automated testing with manual testing, I ensured the application is functional, stable, and user-friendly.

<em>3.2 Design and implement testing procedures (automated or manual) to assess functionality, usability and responsiveness of the web application. </em>

- To test the functionality, usability, and responsiveness of my web application, I used both automated and manual testing. For functionality, I used Jest to test key functions like fetchWeatherData to ensure API responses update the DOM correctly. For usability, I manually tested scenarios such as entering invalid city names, clicking city buttons, and handling rapid interactions to confirm smooth performance. To check responsiveness, I used Chrome DevTools to simulate different screen sizes, ensuring the app looks and works well on mobile, tablet, and desktop devices. I also used ESLint to fix code issues and Lighthouse to assess accessibility and performance. This approach ensured the app is functional, user-friendly, and responsive.

<em>3.3 Insert screenshots of the finished project that align to relevant user stories.</em>

- All images have been added throughout the readme files to show how they have met the user stories.

<em>3.4 Apply test procedures during development and implementation stages and test to ensure the deployed version matches the development version. </em>

- I have done 6 jest test for this application. Below are the tests and screen shots of the results.

- Test 1.Valid and Invalid Days of the Week Test - I have created two tests to verify the functionality of the dayOfTheWeek function:

- Test 1A: Ensures the function correctly determines the day of the week for valid date inputs:
  E.g. Valid dates tested:
  7/12/2024 → "Saturday"
  25/12/2023 → "Monday"
  1/1/2024 → "Monday"

- Test 1B: Verifies the function throws an error for invalid date inputs:
  Invalid dates tested:
  32/12/2024 → Invalid day
  15/13/2024 → Invalid month
  0/0/2024 → Completely invalid.

These tests ensure that the function provides accurate date-based information while handling invalid inputs correctly. The output was that both tests passed as I had hoped.

|              Valid - Pass              |
| :------------------------------------: |
| ![screenshot](/doumentation/valid.png) |

|              Invalid - Pass              |
| :--------------------------------------: |
| ![screenshot](/doumentation/invalid.png) |

- Test 2.Valid and Invalid fetchWeatherData function:

- Test 2A: This fetches and processes weather data for a valid city:
  This test ensures the function retrieves and processes the correct weather data for valid city inputs.
  Valid city tested:
  "London" → Returns weather data including:
  Temperature: 15°C
  Condition: "Clear"
  Location: "London"
  Local Time: "2024-12-07 15:00"
  The test confirmed that the correct API URL is used and the expected data is returned.

- Test 2B: Throws an error for invalid city input:
  This test verifies that the function handles an invalid city names correctly by throwing an error when the API responds with a 404 (city not found).
  Invalid city tested:
  "InvalidCity" → API responds with an error, and the function throws "API Error".

  - Test 2C: Throws an error for any network issues:
    This test simulates a network error during the API call to ensure the function handles such cases correctly.
    Simulated issue:
    "Network Error" → Function correctly throws "Network Error" and avoids unexpected behavior.

|               3 Passes - Pass                |
| :------------------------------------------: |
| ![screenshot](/doumentation/invalidcity.png) |

- Test 3 - City Button Event Listeners
  The City Button Event Listeners functionality was tested with two separate tests to make sure the behavior worked as I had intended:

- Test 3A - This test verifies that clicking on a city button updates the cityInput variable with the corresponding city name and triggers the fetchWeatherData function. It ensures the application correctly fetches and displays weather data for the selected city when the user interacts with the city buttons.

- Test 3B - Resets application opacity after clicking a city button
  This test confirms that after clicking a city button, the application's opacity is temporarily set to 0 for a smooth transition and then resets to 1 after the weather data is fetched. This behavior ensures the end user has a seamless user experience.

By doing these tests together, these tests validate the functionality and visual consistency of the city button interactions, ensuring the correct data is fetched and displayed with smooth transitions for the end user.

The error I occurred within my test was because the default test environment for Jest is node. Node does does not provide access to the document or other browser-like APIs. To fix this issue I had to configure Jest to use the jsdom test environment, which simulates a browser environment for tests. I added this this to my package.json file then installed the dependencies. This allowed all tests to pass.

|            3 Passes - Listener            |
| :---------------------------------------: |
| ![screenshot](/doumentation/listener.png) |

- Test 4 - Form Submission.

The Form Submission functionality was tested with two tests to ensure the behavior is as I expected:

- Test 4a - Handles valid input and triggers the fetchWeatherData.
  This test ensures that when the user submits the form with a valid city name, the cityInput variable is updated accordingly, and the fetchWeatherData function is triggered. This validates that the application fetches and displays the correct weather data based on the user's input.

- Test 4b: Handles empty input correctly
  This test checks the application's ability to handle an empty form submission. It verifies that if the user submits the form without typing a city name, an alert is displayed prompting the user to enter a valid location. This is to ensure a robust user experience and to prevent unnecessary API calls.

- Together, these tests confirm that the form submission logic functions as intended, both for valid and invalid user inputs, ensuring reliable and error-free behavior.

|           3 Passes - Input error            |
| :-----------------------------------------: |
| ![screenshot](/doumentation/inputerror.png) |

<em>3.5 Fully document the results of well-planned testing procedures (automated or manual) to assess the website’s functionality, usability and responsiveness.</em>

- This has been listed above with images and documentation.

Back to [README](/README.md)
