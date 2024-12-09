[2. Implement Front-end Interactivity](/README.md#2-implement-front-end-interactivity)

When doing my project I used a number of websites that allowed me to check my web application for good accessibility and good UX principles.

To check my colours worked with the altertating background images used within the app, I used a progrme called used https://wave.webaim.org

https://wave.webaim.org

RESPOSIVENESS (linked from redme 1.3)

<em>2.1 Write JavaScript code, that passes through a linter (e.g. JSLint) with no major issues and write validated HTML and CSS code.</em>

### 3. Testing the Application

<em>3.0 Test an interactive Front end web application through the development, implementation and deployment stages.</em>

- Testing During Development Stage
- Unit Testing:
  I tested individual JavaScript functions and components using Jest, focusing on form validation, button interactions, and smaller modules. I also performed user testing across different browsers and screen sizes, ensuring functionality worked seamlessly from start to finish.

- Debugging:
  I used Google Chrome DevTools to inspect elements, monitor console errors, and track API calls. This helped me identify and resolve issues efficiently.

- Accessibility Testing:
  I ran accessibility tests using Wave and Chrome Lighthouse. Based on the suggestions, I made improvements to enhance the accessibility of the site.
- Add image here

- Cross-Browser Testing:
  I checked the site on major browsers like Chrome, Safari, and Edge to ensure consistent behavior and appearance.

- Responsive Design Testing:
  Using the "Live Server" extension in Visual Studio Code, I could broadcast the project to the browser and tested responsiveness with Chrome DevTools by simulating different screen sizes. Additionally, I used a real iPad and various phones to verify that the site looked and worked well on actual devices.

- Add image here

- Testing During Implementation Stage

- Integration Testing:
  To ensure the API worked correctly, I used Chrome DevTools and the network tab to monitor API requests and responses.

- Add image here

- UI/UX Testing:
  I asked several people to use the web app and observed their interactions, focusing on usability and search submissions to validate the design and functionality.

- Error Handling Testing:
  I simulated invalid inputs, such as incorrect city names, to ensure the app displayed appropriate error messages and handled issues gracefully.
  Add image here
- Performance Testing:
  I evaluated the page’s speed and responsiveness using Chrome Lighthouse and optimised assets, such as converting PNG files to more efficient JPEG formats, to improve load times.

- Testing During Deployment Stage
  Regression Testing:
  After deploying the site, I tested all features again to ensure that new updates or features didn’t break any existing functionality.

- SEO and Accessibility Validation:
  I checked for proper metadata, SEO optimisation, and accessibility using Lighthouse and ensured the site met recommended standards.

<em>3.1 Explain the principles of automated and manual testing and when each might be deployed. </em>

- a
  <em>3.2 Design and implement testing procedures (automated or manual) to assess functionality, usability and responsiveness of the web application. </em>

- a

<em>3.3 Insert screenshots of the finished project that align to relevant user stories.</em>

- a

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

NEEDS PICTURES

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
  This test verifies that the function handles an invalid city names correclty by throwing an error when the API responds with a 404 (city not found).
  Invalid city tested:
  "InvalidCity" → API responds with an error, and the function throws "API Error".

  - Test 2C: Throws an error for any network issues:
    This test simulates a network error during the API call to ensure the function handles such cases correctly.
    Simulated issue:
    "Network Error" → Function correctly throws "Network Error" and avoids unexpected behavior.

    INSERT IMAGES

<em>3.5 Fully document the results of well-planned testing procedures (automated or manual) to assess the website’s functionality, usability and responsiveness.</em>

- a
