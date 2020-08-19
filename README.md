# CarBay
#### SofUni React.js course project

## Created with:
 #### front-end:
 - React.js
 - React Bootstrap
 - React Icons
 #### back-end
 - Firebase
 
## Project Description
  Carbay is a sample platform for selling used cars.
  
## Public Part (Any user: Authenticated or Anonymous)
 The public part is visible by any user without authentication:
 - Login page
 - Register page
 - Home page
 - Ad details page

## Private Part (Logged in users only)
 - New Ad page - he can create a new ad
 - My Ads page - he can view his ads
 - Edit Ad page - he can edit his ads
 - Can add ads to favorites
 

## Admin Part (Admin users only)
 - New Brand - he can create a new Brand
 - New Model - he can create a new Model
 - New Options - he can create new Option
 - Delete Ads - he can delete any ads

## How to run this project
 - create .env file inside your src folder, then edit the file using your Firebase application credentials in this format:
<pre><code>REACT_APP_API_KEY=""
REACT_APP_AUTHDOMAIN=""
REACT_APP_BASEURL=""
REACT_APP_PROJECT_ID=""
REACT_APP_STORAGEBUCKET=""
REACT_APP_MESSAGING_SENDER_ID="
REACT_APP_APP_ID=""
REACT_APP_MEASUREMENT_ID=""
</code></pre>
 - run <pre><code>yarn install</code></pre>
 - run <pre><code>yarn start</code></pre>
