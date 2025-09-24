#1-Explain the Client-Server Architecture used in web applications.
In your answer, clearly describe:

- The role of the client (browser)
•  The client is usually a web browser (like Chrome, Firefox, or Safari) or a mobile/desktop app.
•  It is responsible for:
•	Sending requests to the server (for example, when you open a page, click a link, or submit a form).
•	Showing the response from the server (rendering HTML, CSS, JavaScript).
•	Handling user actions (typing, clicking, scrolling).

- The role of the server
•  The server is a powerful computer or service that stores and manages data.
•  It is responsible for:
•	Receiving client requests (e.g., “show me the homepage” or “fetch my account details”).
•	Processing the request (may query a database or run logic).
•	Sending back a response (HTML, JSON, XML, etc.) to the client.
•  Examples: Apache, Nginx, Microsoft IIS.

- How data flows between client and server
•  The client sends an HTTP/HTTPS request (e.g., GET /index.html).
•  The server receives and processes the request (may fetch data from a database).
•  The server sends back an HTTP/HTTPS response (like an HTML page or JSON data).
•  The client displays the result to the user (webpage, images, app content).

- Give an example of a real-world application using this architecture.
•  Client (browser/app): You search for “laptop” on Amazon.
•  Server: Amazon’s servers check the database for laptop products.
•  Data Flow: The server sends back the list of laptops (prices, images, details).
•  Client shows result: You see the laptops on your screen. Every click (“Add to Cart,” “Checkout”) is another request-response cycle.
---------------------------------------------------------------------------------------------------------------------------
#2- Design and implement a responsive student registration web page using HTML5, CSS3, and JavaScript. Your web page must fulfill the following requirements:
           HTML5:
             Create a form that includes the following fields:
                Full Name (text input)
                Email ID (email input)
                Course (dropdown/select)
                Gender (radio buttons)
                Hobbies (checkboxes)
                Profile Photo Upload (file input)
         CSS3:
                Apply CSS styles using ID, class, and element selectors.
                  Implement a responsive layout using Flexbox or CSS Grid.
                  Add styles to improve form appearance (spacing, colors, borders, font).
                  Highlight input fields on focus and use the box model properties effectively.
        JavaScript:
               Write JavaScript to perform client-side form validation:
               Ensure all required fields are filled.
              Validate the email format. 
              Show an alert or message if the form is submitted successfully or if any field is
              invalid.
              Add a basic event like showing a welcome message when the page loads or a field    
              is clicked.


1.First view of your page – Course Registration Form
 

2.Write your full name 
 

3. Write your mail id
 

4.Select your course
 
5. Choose your gender
 

6. Select your hobbies
 
7. Upload your profile picture and click on submit
 
---------------------------------------------------------------------------------------------------------------------------
#3- Difference Between ID Selector and Class Selector
•  ID Selector (#id)
•	Used for one unique element only.
•	Example:
•	#header { color: blue; }
 Styles only the element with id="header".
•  Class Selector (.class)
•	Used for many elements that need the same style.
•	Example:
•	.highlight { background: white; }
 Styles all elements with class="highlight".
Input & Output Files
Test Case 1 – Valid Input
•	Full Name: Sushint Yadav
•	Email: 23bcam44@gmail.com
•	Course: BCA
•	Gender: Male
•	Hobbies: Reading
•	Profile Photo: s1.jpg
Output: “Form submitted successfully!”
Test Case 2 – Missing Fields
•	Full Name: (empty)
•	Email: invalidemail
Output: “Please fill all required fields!”
Test Case 3 – Invalid Email
•	Email: Sushint@abc
Output: “Please enter a valid email address.”
#4 - Algorithm / Process:
•  User opens the form → welcomeMessage() runs.
•  User fills input fields → CSS highlights the active field.
•  On Submit, JavaScript checks:
•	Are all required fields filled?
•	Is email valid (checked with regex)?
•  If invalid → show error message (block submission).
•  If valid → show success message.
Key Decisions:

•  Used Flexbox for responsive design (mobile-friendly).
•  Used Regex to validate email.
•  Used alert() for feedback (can improve with inline messages).
•  Challenge: making form responsive on all screen sizes + catching all edge cases.
