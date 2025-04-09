# Company Website Lab

This project is a simple, single-page portfolio website for a fictional company, created as part of a lab during our Software Engineering Bootcamp at General Assembly. The main goal of the lab was to get some hands-on experience working with React, managing state, and using conditional rendering to display different sections of a webpage. 

### Team Members:
- [Brice MKeel](https://github.com/Bricemck)
- [Dean Movshovitz](https://github.com/mdean317)
- [Zackary O'Connor](https://github.com/zackaryoconnor)
- [Christian Vieux](https://github.com/christianvieux)

### Purpose:
The objective was to build out a basic portfolio website with several sections like:
- Home
- Company History
- Staff
- Past Work
- Contact Us
- External Links

We implemented the ability to show and hide sections of the page based on what the user selects in the navigation bar. This creates the feel of a multi-page app, even though it’s actually just a single page app.

### Our Process:

1. **Building the Navbar**: 
   We kicked things off by working on the navigation bar. This was key because it would allow users to click through and navigate between different sections. We made sure each navigation item would trigger a function that would update the currently active section.

2. **Creating Pages**: 
   Once the navbar was working, we started building the different sections for the website. Each section (like Home, Staff, etc.) was set up as its own separate React component.

3. **Conditional Rendering**: 
   After we had a couple of pages (Home, Contact Us) ready, we added the magic of **conditional rendering**. By using React’s `useState`, we could track the active section and display it based on what the user clicks on in the navbar.

4. **Making It Dynamic**: 
   We took things a step further by mapping over the sections (stored in an array) and dynamically rendering the correct component based on the user’s navigation choice. This was a fun part of the project because it made the app feel really dynamic without needing to load separate pages.

5. **Polishing It Up**: 
   At the end, we tested the app to make sure the navigation worked smoothly, but we didn’t add any custom CSS—everything is styled with the default Vite styles that came with the setup.

### What We Learned:
- How to use **state** in React to control which section is displayed.
- The basics of **conditional rendering** in React and how it can create dynamic user interfaces.
- How to dynamically render components by looping through an array (this helped with the navbar and the section rendering).

### Next Steps (If We Revisit This):
- **Styling**: We didn’t add much custom styling, just the default Vite styles, so one thing we’d definitely do next time is work on the design and layout to make the site look more polished.
- **React Router**: We could also look into using **React Router** to handle navigation more seamlessly, especially if we were to add more pages in the future.
- **More Features**: If we had more time, we could add a contact form or other interactive elements to the site to make it more functional.

### How to Run the App:
1. Clone this repository or download the code.
2. Install the necessary dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open the app in your browser (usually at `http://localhost:5173` or check terminal).
