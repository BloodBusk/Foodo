# Foodo
Foodo - by Thomas, Christoffer R, Jacob

We created Foodo because we're tired of food pictures flowing around on social media like facebook, Instagram and snapchat. So we wanted to bring all food pictures from your restaurant, or workout preparation meal, in one single app. So whenever you want to connect with your friends, you can post, watch or even get inspiration for your next meal!

-Take a photo of your food … “Foodo”

When Foodo was designed we thought alot about making it simple and user friendly. Ionic has a pretty easy and understandable skeleton with a tab bar which makes it easy to navigate. The sites that aren't included in the tab like login, signup and the start page are intuitive and easy “step by step tasks”, to create or log into your “profile”. 

For navigation and error handling we discussed if we should have a “back button” or if it would be better with a sign up button instead on our login page. If the user made an error and pressed login instead of signup and vice versa.

We concluded that the user needed to have an escape route so we implemented a back button, and also made a button so they had the chance to quickly navigate around the mistake.

But the best error handling is if the error doesn't happen. That's why we make sure the
users should have no doubt if they are logged in whatsoever so they can use the apps functions. In fact you can't use the app before you are logged in, the user will then appear on the default page “log in or sign up”. To prevent mistakes at the login and sign up we acquire that the inserted data will be correct for example the username. 

We have used an ionic icon library to find known and easily recognisable items which the user knows and understands. For example home as the known house and geolocation as the arrow. 

Our application is built with react components. Ionic created a skeleton with a router so we could move on quickly with our app. Everytime we created something new, whether it was a function or an object. We thought about whether we should use it anywhere else. If the answer was yes. We made sure to make it a component so we could easily call it again. Everything is split up so every component has its own code and css if needed. Then we never had to do the same code twice which should make it fast, easy and efficient. Ionic also makes it easy for us to quickly use the same color so the identity of the application remains the same even if we, along the way decided to change the color we only needed to do it once. Using props with components, we were able to pull information from fx. user components, and display the correct data on our pages. Another way we were able to reuse components was with the help of ionic. Ionic has a library of components that makes it easy to customize react components. Our react components consist of mainly ionic components, so that our design fulfills the aesthetic standards of mobile apps for ios and android.  

But along the way we also ran into some troubles. Because when we use global elements, we wanted to make some changes specific for some sites. Whenever it happened we could usually fix it by making a specific css or function and only call it in that component. But some ionic css properties are difficult to override and that could make it difficult to force our wanted changes. In the beginning it could be that we make some style changes and call the global variable in at css only referred to one component but that still changes everywhere. But we found a way around it. But we had a lot of trouble with the router/tab bar. Because that component we couldn't get rid of no matter how much we tried. We even tried to cover it up but nothing seems to matter for the ionic tab bar. We also ran into a problem where geolocation works on the browser, however it did not want to work on mobile.

project structure

Our components are located in a components folder, these are the components we use for passing props and pages. We import the components on our pages and declare them with the imported name given. We use components to structure our page accordingly. 
Our pages are located in a pages folder. We have a service folder that takes care of all the CRUD operations. The app.jsx has all the navigation that renders components based on the path from the url. 

How to run the app

Open the app in your vs code. Then open the folder with the integrated terminal and type 
npm install
npm install -g @ionic/cli
npm install @capacitor/cli
npm install @capacitor/geolocation
npm install @capacitor/camera
npm install @capacitor/toast
ionic serve // for browser
ionic cap open // for your native editor

ionic serve opens the browser and inspect it as your preferred mobile device and check the app out.





