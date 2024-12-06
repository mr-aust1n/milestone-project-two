# [Yap Marketing - Repo](https://github.com/mr-aust1n/milestone-project-one "Repo")

# [Yap Marketing Live Site](https://mr-aust1n.github.io/milestone-project-one/?nocache=true "Live Site")

<summary>Simple Overview of Yap Marketing</summary>

- Yap Marketing is a simple Website for marketing company
- Yap Marketing has been designed in adobe xd to help me create UI/UX before any code began
- Yap Marketing is built for people looking for someone to manage their social media or have a website built
- Yap Marketing has been built for mobile, iPad and desktop versions with media quires
- Yap Marketing displays a number of heros that are relevant to the page you are on.
- Yap Marketing is a website for small to medium businesses.

## Table of Contents

This unit aims to provide learners with the knowledge and skills needed to build a Front end web application. It includes understanding the principles of responsive design, documentation and effective layout of content.

1. [Design a Front end web application](#Design-a-Front-end-web-application)
2. [Static Front end web application](#Static-Front-end-web-application)
3. [Maintainability Via Code](#Maintainability-Via-Code)
4. [Version Control](#Version-Control)
5. [Test and deploy](#Test-and-deploy)

### Design a Front end web application

<em>1.0 Design a Front end web application based on the principles of user experience design, accessibility and responsively.</em>

- I designed my web application using Adobe XD, which allowed me to create wireframes for desktop, tablet, and mobile versions of the site. This ensured the design was fully responsive and adaptable to different screen sizes. Using the linking functionality in Adobe XD, I mapped out the navigation flow between pages, ensuring an intuitive and user-friendly experience.

Throughout the design process, I applied key principles of user experience design by focusing on a clear structure, logical navigation, and prioritised content presentation. I also incorporated accessibility considerations, such as ensuring sufficient colour contrast, using clear and legible typography, and designing intuitive layouts to support a diverse range of users.

This approach enabled me to create a web application that is responsive, accessible, and designed with the end user in mind.

Below are two mockup images of the Yap Marketing website created using the adobe xd software.

|               Screenshot 1 Desktop               |                  Screenshot 2 Mobile                   |
| :----------------------------------------------: | :----------------------------------------------------: |
| ![screenshot](documentation/mockups/desktop.png) | ![screenshot](documentation/mockups/mobile-mockup.png) |

### Mobile Wireframes

|                    Main pages                     |
| :-----------------------------------------------: |
| ![screenshot](documentation/ux/dt-wireframes.png) |

### Desktop Wireframes

|                    Main pages                     |
| :-----------------------------------------------: |
| ![screenshot](documentation/ux/mb-wireframes.png) |

<em>1.1 Create a structured website with a main navigation menu.</em>

- This was completed for mobile and desktop devices in mind.

|                  Desktop Nav                   |                   Mobile Nav                    |
| :--------------------------------------------: | :---------------------------------------------: |
| ![screenshot](documentation/images/dtmenu.png) | ![screenshot](documentation/images/mobileM.png) |

<em> 1.2 Ensure accessibility compliance, including proper contrast and alternative text for non-text elements.</em>

- To ensure the colours used in the design were accessible, I created the website layout in Adobe XD. To evaluate the accessibility of the chosen colours, I utilised a tool called [Color Oracle](https://colororacle.org/usage.html).
  Color Oracle is a program that simulates how colours appear to individuals with various visual disabilities by modifying the display of your screen. By using this tool, I was able to identify any problems with colour combinations and make necessary adjustments to enhance accessibility for this project.

  |                  Accessability                   |
  | :----------------------------------------------: |
  | ![screenshot](documentation/browser/Colours.png) |

<em>1.3 Organise information hierarchically for intuitive navigation.</em>

- I met the requirements by creating a static website featuring a 'header' and 'nav' to provide a clear structure for both the user and the browser. I used headers, such as h1 and h2, to establish a logical hierarchy, ensuring the content is easy to navigate and understand. The navigation menu enables seamless movement between pages, while information is organised and prioritised to facilitate quick access around the site.

  |                     Static                     |
  | :--------------------------------------------: |
  | ![screenshot](documentation/deploy/static.png) |

  <em>1.4 Ensure that foreground information is never distracted by backgrounds.</em>

- To make sure this did not happen I used a light cream color for my background and added it to the root so it can be used as a variable later (-color-bgcolor-lighter: #FDF9F8). I then used darker colours (E.g. --color-red: #FD5A46;) for it to standout from background with the occasional black border too.

|                     Colours                     |              Background vs Foreground              |
| :---------------------------------------------: | :------------------------------------------------: |
| ![screenshot](documentation/deploy/colours.png) | ![screenshot](documentation/deploy/background.png) |

<em> 1.5 Include graphics that are consistent in style and colour.</em>

- I designed the website with a retro theme in mind, using hand-drawn graphics for the hero sections to emphasise this aesthetic. The graphics were carefully chosen to ensure they were not only stylistically consistent but also directly relevant to the products being showcased. This approach created a cohesive and visually engaging experience for users, aligning the design with the site's purpose.

  |                   Hero Image                    |
  | :---------------------------------------------: |
  | ![screenshot](documentation/browser/users1.png) |

<em> 1.6 Design the site to allow the user to initiate and control actions such as pop-ups and playing of audio/video.</em>

- After discussing with my mentor, I was advised that including a video was not essential, as the example provided was only a suggestion, indicated by the phrase "such as." Wanting to challenge myself, I chose to implement a Swiper.js carousel instead on pages 'websites' and 'social media'. This feature allows users to swipe through the carousel section on mobile devices, giving them control over navigation and enhancing interactivity.
  Additionally, I added a 'Call' button to the website, enabling users to initiate a phone call with a single click or tap. This functionality works on mobile devices or through desktop applications like Skype. These features demonstrate how users can initiate and control actions on the site. In a future release, I’d have a ‘Call Now’ on mobile and ‘Email Now’ on desktop. I have also added a 'read more' to allow the user to see more about the current section the are reading. This allows the user to interact but clicking the 'read more' and the section will display the hidden text.

  |                     Swiper                      |                       Call                       |
  | :---------------------------------------------: | :----------------------------------------------: |
  | ![screenshot](documentation/browser/swiper.png) | ![screenshot](documentation/browser/callnow.png) |

|                   Read More: Before                   |                   Read More: After                   |
| :---------------------------------------------------: | :--------------------------------------------------: |
| ![screenshot](documentation/browser/readmeBefore.png) | ![screenshot](documentation/browser/readmeAfter.png) |

<em>MI - Design a website with a flow of information layout, and interaction feedback which are clear and unambiguous.</em>

- I designed my website with a logical flow of information by organising content into clearly defined sections, such as "Home," "Websites," "Social Media," and "Contact." Each section is labelled and structured to guide users intuitively through the site. Interaction feedback is provided through hover effects on buttons and links, active states for navigation items, and form submission messages, ensuring users understand their actions and the site's responses. These features create a seamless and unambiguous user experience.

### Static Front end web application

<em>2.0 Develop and implement a static Front end web application using HTML and CSS.</em>

- I developed and implemented a static front-end web application using HTML to create the structure and CSS to style and enhance its visual appearance, ensuring responsiveness and a user-friendly design across devices. I achieved this by installing Visual Studio Code and organising my file structure in a logical way to facilitate easy edits for myself or anyone else who may work on the code in the future.

  |                     Structure                     |
  | :-----------------------------------------------: |
  | ![screenshot](documentation/deploy/structure.png) |

<em>2.1 Create a website of at least 3 pages, or (if using a single scrolling page) at least 3 separate page areas, to match the design and to meet its stated purpose.</em>

- I created a website with three pages that all have the same branding, colours, fonts styles so that the user is aware they are on the same website. These pages are also relevant to the services Yap offers.

<em>2.2 Write custom CSS code that passes through the official (Jigsaw) validator with no issues.</em>

- [Testing](TESTING.md)

<em>2.3 Write custom HTML code that passes through the official W3C validator with no issues.</em>

- [Testing](TESTING.md)

<em>2.4 Incorporate images that are of sufficient resolution to not appear pixelated or stretched.</em>

- To get the best quality but the smallest size I placed them through [TinyPNG](www.tinypng.com) and then each image was carefully selected to have a sufficient resolution for its display size, preventing pixelation or stretching. In my CSS, I used the height: auto property to ensure images maintained their original aspect ratio. Additionally, I resized images appropriately before uploading them, rather than relying on HTML or CSS alone to adjust their dimensions, ensuring a polished and responsive design.

|                    Tiny PNG                     |
| :---------------------------------------------: |
| ![screenshot](documentation/deploy/tinypng.png) |

<em>2.5 Code all external links to open in a separate tab when clicked.</em>

- For the social media links I made sure they opened up in a new tab. This will help with googles SEO bounce rate.
  | New URL |
  | :---------------------------------------------: |
  | ![screenshot](documentation/deploy/blank.png) |

  <em>2.6 Use CSS media queries or CSS Grid/Bootstrap across the application to ensure the layout changes appropriately and maintains the page's structural integrity across device screen sizes.</em>

- I have developed my site with mobile first as this is best practice and then included the standard min-width: 768px for tablets and then min-width:1200px for desktop. I found this to work fine within my user testing.

|                    768px                    |                    1200px                    |
| :-----------------------------------------: | :------------------------------------------: |
| ![screenshot](documentation/deploy/768.png) | ![screenshot](documentation/deploy/1200.png) |

<em>2.7 Use Semantic markup to structure HTML code.</em>

- To make my website semantic I have used header/ nav/ main/ section/ Footer

  |                     Static                     |
  | :--------------------------------------------: |
  | ![screenshot](documentation/deploy/static.png) |

<em>2.8 Present the finished website with clearly understandable sitespecific content, rather than Lorem Ipsum placeholder text.</em>

- There was no Lorem Ipsum used and all copy text was copied from the Adobe XD file and imported into the correct section of the site.

<em>2.9 Implement clear navigation to allow users to find resources on the site intuitively.</em>

- I implemented clear navigation on my website with a prominent navigation bar featuring intuitive links like "Home," "Websites," "Social Media,","Call Now," and "Contact." The menu is fully responsive, adapting to mobile devices with a user-friendly hamburger menu, ensuring users can easily access resources across all devices.

|                  Desktop Nav                   |                   Mobile Nav                    |
| :--------------------------------------------: | :---------------------------------------------: |
| ![screenshot](documentation/images/dtmenu.png) | ![screenshot](documentation/images/mobileM.png) |

<em>MII - Implement a website whose purpose is immediately evident to a new user without having to look at supporting documentation.</em>

- I ensured the website's purpose was immediately evident by designing a homepage with a clear and compelling. I did this by having a title the appeared in the browser tab and sections that show the core services of the site by proving simple sections of informative text.
  Supporting this, I included descriptive content that explains the services offered in a concise and engaging manner. The navigation menu is intuitive, with clearly labelled sections such as "Websites" and "Social Media," allowing users to quickly explore the site and understand its offerings. Consistent branding, including the use of a professional logo, complementary colour schemes, and relevant imagery for my heroes, reinforces the site's purpose.
  Additionally, the hero section prominently displays key information and a call-to-action, ensuring users can immediately grasp the site's goal of providing marketing services without the need for external searches about what I offered.

<em>MIII - Implement a website that provides a solution to the user story demands and expectations.</em>
-I ensured my website addressed the user stories addressed in unit number Y/650/3525 by focusing on clear navigation, accessibility, responsiveness, and a user-friendly design. The navigation bar is prominently placed at the top of the page and includes clearly labelled links, such as "Home," and "Contact" etc, allowing users to intuitively locate resources and structured content. Each section of the website is organised logically, ensuring information is easy to find.
Accessibility was considered by using appropriate font sizes, clear headings, and a consistent colour scheme. I included alt text for images (if applicable) and ensured sufficient colour contrast, making the site usable for individuals with visual impairments or disabilities. These features align the website with accessibility standards and place in the root as a variable. If any changes were required later, then only the root information would need to be updated.
To provide a consistent and aesthetically pleasing design, I used a unified colour scheme, font styles, and visual elements across all pages. The responsive design ensures the site maintains structural integrity and usability across all devices, with features such as a mobile-friendly hamburger menu for navigation on smaller screens.
Interactivity was incorporated through the Swiper.js carousel, allowing users to control the display of content on mobile devices by swiping to the desired section. I also added hover effects to the buttons and image enlargement on the hero sections on a mouse hover.
Finally, I ensured that the content on the site is specific and relevant to its purpose, avoiding placeholders. All internal and external links were tested to confirm they function correctly, ensuring users can access the intended resources without frustration. These measures demonstrate how the website effectively meets the demands and expectations outlined in the user stories.

### Maintainability Via Code

<em>3.0 Maximise future maintainability through documentation, code structure and organisation.</em>

- I have used variables within the root to ensure consistency across styles, added comments throughout my code to explain specific sections, and documented all dependencies in my README file for clarity and maintainability. My project is organised with a logical file structure, separating HTML, CSS, images, and other assets to make navigation and edits straightforward. I followed consistent naming conventions for classes and IDs, used semantic HTML to improve readability, and applied modular CSS to ensure styles are well-organised. Additionally, I used Git for version control to track changes and ensure collaboration is seamless. These practices ensure the project is easy to maintain, scalable, and accessible for future developers.

<em>3.1 Write a README.md file for the web application that explains its purpose, the value that it provides to its users, and the deployment procedure.</em>

- This is here but called yap Return back to the [YAP.md](YAP.md) file.

<em>3.2 Insert screenshots of the finished project that align to relevant user stories.</em>

- This has been done throughout the readme file.

<em>3.3 Attribute all code from external sources to its original source via comments above the code and (for larger dependencies) in the README.</em>

- I attributed all external code by adding comments directly above the relevant code in my project files and documenting larger dependencies, such as Swiper.js, in the [YAP.md](YAP.md) file with links to their original sources.

<em>3.4 Clearly separate and identify code written for the website and code from external sources (e.g. libraries or tutorials).</em>

- I have included all JavaScript in a single file but clearly separated each section with comments to indicate which code is custom and which is sourced externally. I have followed the same approach within my CSS, adding comments to label different sections. This organisation ensures clarity and makes it easier for future developers to navigate and understand the code.

This highlights your efforts to maintain clarity while keeping the project simple and organised, addressing the question effectively.

<em>3.5 Organise HTML and CSS code into well-defined and commented sections.</em>

|                     HTML                     |                     CSS                     |
| :------------------------------------------: | :-----------------------------------------: |
| ![screenshot](documentation/deploy/html.png) | ![screenshot](documentation/deploy/css.png) |

<em>3.6 Place CSS code in external files, linked to the HTML page in the HEAD element.</em>

|                     Links                     |
| :-------------------------------------------: |
| ![screenshot](documentation/deploy/links.png) |

<em>3.7 Write code that meets at least minimum standards for readability (consistent indentation, blank lines only appear individually or, at most, in pairs).</em>

- I ensured my code meets readability standards by maintaining consistent indentation throughout all files, using a visual studio code extension called prettier. I also included blank lines sparingly, either individually or in pairs, to separate logical sections of the code for better readability. Additionally, I used meaningful variable names, organised CSS properties logically, and included comments to explain complex sections. These practices make the code easy to follow and maintain for future developers.

|                     prettier                     |
| :----------------------------------------------: |
| ![screenshot](documentation/deploy/prettier.png) |

<em>3.8 Name files consistently and descriptively, without spaces or capitalisation, to allow for crossplat form compatibility.</em>

- All images are lowercase and if they are two words a hyphen was used between the words as this is better for google seo.

|                     Lowercase                     |
| :-----------------------------------------------: |
| ![screenshot](documentation/deploy/lowercase.png) |

<em>3.9 Group files in directories by file type (e.g. an assets directory will contain all static files and may be organized into sub-directories such as CSS, images, etc.)</em>

|                     Assets                     |
| :--------------------------------------------: |
| ![screenshot](documentation/deploy/assets.png) |

- I have added CSS, Javascript into an assets folder and then all image files into a assets/images folder etc.

|                     Assets                     |
| :--------------------------------------------: |
| ![screenshot](documentation/deploy/assets.png) |

### Version Control

<em>4.0 Use version control software to maintain, upload and share code with other developers.</em>

- I used GitHub Desktop as my version control software to maintain, upload, and share my code. I prefer using a GUI as it helps me visually track changes more effectively. With GitHub Desktop, I was able to commit changes regularly, review the history of my project, and push updates to my GitHub repository. This approach ensured my code was organised, accessible, and easy to collaborate on with other developers."

|                     GHDT                     |
| :------------------------------------------: |
| ![screenshot](documentation/deploy/GHDT.png) |

<em>4.1 Use a cloud-based, git-based, version control system (e.g. Git & GitHub) throughout the development and implementation process.</em>

- I used github and guthub pages for people to see a live version of my website

|                    GHPages                    |
| :-------------------------------------------: |
| ![screenshot](documentation/deploy/pages.png) |

<em>4.2 Document the development process through descriptive commit messages.</em>

- Once a section was complete I would push my changes to github and give a commit message explaining what the commit was about. I also created braches for bigger sections of the website.

|                   Commits                    |
| :------------------------------------------: |
| ![screenshot](documentation/deploy/GHDT.png) |

<em>4.3 Use consistent and effective markdown formatting to produce a README file that is well-structured, easy to follow, and has few grammatical errors.</em>

- I have demonstrated in this file and guidance from [MarkDown Preview](http://markdownlivepreview.com/)

### Test and deploy

<em>5.0 Test and deploy a Front end web application to a Cloud platform.</em>

- I tested my front-end web application thoroughly on multiple devices and browsers, including Edge, Safari, and Chrome, as well as iPads, iPhones, Android phones, and desktop computers. After testing, I deployed the application to a cloud platform using GitHub Pages. This deployment method allowed me to host the static website online, making it accessible to users globally. By deploying to GitHub Pages, I ensured the site was live, easily shareable, and maintained version control for future updates. More info is here [Testing](TESTING.md).

Deploying locally was so much better to see what was happening when I edited my code. If I did too many commits in a short space of time I would end up with continuous deployment failures. I had to wait as long as possible between each push.

|                    Deploy Errors                     |
| :--------------------------------------------------: |
| ![screenshot](documentation/deploy/deploy_error.png) |

<em>5.1 Design and implement manual testing procedures to assess functionality, usability and responsiveness. </em>

- [Testing](TESTING.md)

<em>5.2 Document the testing in the README or in a separate file.</em>

- [Testing](TESTING.md)

<em>5.3 Deploy a final version of the code to a cloud-based hosting platform (e.g. GitHub Pages) and test to ensure it matches the development version.</em>

- [Testing](TESTING.md)

<em>5.4 Remove commented-out code before pushing final files to version control and deploying.</em>

- Any unused code was removed from them final push to github

<em>5.5 Ensure that there are no broken internal links.</em>

I have done lots of manual testing on the links and could not find any. I have also used chrome dev tools and looked for a 404 in the network tab.

|                     404                     |
| :-----------------------------------------: |
| ![screenshot](documentation/deploy/404.png) |

<em>M(v) Present a clear rationale for the development of the project, in the README, demonstrating that it has a clear, well-defined purpose addressing the needs of, and user stories for a particular target audience (or multiple related audiences).</em>
-This project was developed as a marketing platform to support B2B clients in showcasing their services and connecting with potential customers. It addresses the needs of small to medium-sized businesses by providing a professional online presence with features such as clear navigation, responsive design, and an interactive carousel. The development was guided by user stories, including the need for intuitive navigation, device responsiveness, and an aesthetically pleasing design. Accessibility enhancements, such as ARIA roles and appropriate colour contrast, ensure the site is inclusive and user-friendly, delivering a well-defined solution for the target audience.

<em>M(vi) Document testing fully to include evaluation of bugs found and their fixes and explanation of any bugs that are left unfixed.</em>

- This is is all complete and shown in the [Testing](TESTING.md)

<em>M(vii) Fully document the development life cycle procedures in the README file.</em>

## SDLC

The development of the Yap Marketing website followed the traditional Waterfall methodology, a linear and sequential approach to software development. Below is a brief overview of the stages involved:

### 1. Requirement Analysis

- **Objective:** Gather and document all requirements for the website.
- **Activities:** Conducted discussions and brainstorming sessions to define the site's purpose, target audience, and key features.
- **Output:** Detailed requirements document outlining the features and functionalities of Yap Marketing.

### 2. System Design

- **Objective:** Design the overall structure and user interface of the website.
- **Activities:** Created wireframes for mobile, tablet, and desktop views using Adobe XD to visualise the design and layout.
- **Output:** System Design Document, including finalised wireframes and design elements, setting the foundation for development.

### 3. Implementation (Coding)

- **Objective:** Develop the website according to the design specifications.
- **Activities:** Implemented the website's front-end using HTML, CSS, and JavaScript, with a focus on responsive design for various devices.
- **Output:** Fully functional website codebase, adhering to the initial design and requirements.

### 4. Integration and Testing

- **Objective:** Ensure the website works as intended across different browsers and devices using devtools.
- **Activities:** Performed extensive testing for browser compatibility, responsiveness, accessibility, and code validation. Addressed any bugs or issues discovered during testing.
- **Output:** Validated and tested website, with bug fixes applied as necessary.

### 5. Deployment

- **Objective:** Deploy the website to a live environment for public access after each section was complete.
- **Activities:** Deployed the website on GitHub Pages, making it accessible to users. Monitored the deployment for any post-launch issues.
- **Output:** Live website accessible at [Yap Marketing](https://mr-aust1n.github.io/milestone-project-one/?nocache=true).

### 6. Maintenance

- **Objective:** Provide ongoing support and updates to the website.
- **Activities:** Addressed user feedback, performed updates, and fixed any new issues that arose post-deployment.
- **Output:** Maintained and updated website with continuous monitoring and improvements.

## Credits

[Boiler plate]
I have always found starting with a blank document hand. Over my time I have created a boiler plate to help my project start off. This boiler plate consists of a simple javascript mobile menu and a static html layout.

[CSS RESET]
When ever I start a new project, I always use Josh Comeau's CSS reset. (https://www.joshwcomeau.com/css/custom-css-reset/)I find this helps with unwanted elements and helps my site as intended without loading the default CSS for each browser.

[Swiper JS]
To allow a better user experience on my site I have used Swiper JS (http://swiperjs.com). This allows elements to run horizontally and the user can swiper left and right. This saves space on a mobile device as each element does not have to go on top of each other.s
