# Advanced Web Development - ProTyper

This project is for people who are slow at typing and wish to have fun whilst improving their typing speed.

## File description

# Frontend files

All the files which end in .css are all the files which I have made in order to style the pages seen in the website.

The file Account.jsx is the file that contains the code for the My account section where users update their details and in this page you can see the use of the component Accountnav.jsx which is the small nav bar within the My account section that holds 3 other pages. These pages are in the files statistics.jsx, skins.jsx and themes.jsx.

App.jsx is what sets up all the routes for pages and houses the toast notification.

Bag.jsx is the component used in the shopNav.jsx file and it is the shopping bag feature which is shown as a pop up on the shop page when you click on the Navbar.

BagContext.jsx is the file that contains the bag context which returns the props bag, setbag and removeFromBag.

BagItem.jsx is the file that holds the bag item component which is used in the bag component and this holds the items with the cost of the item of this specicific item with a trash icon as well which can remove the item.

Checkout.jsx contains that the Checkout page which would allow the user to pay for what has been placed in the users basket.

CoinItem.jsx is the file that contains what each coin item component which will be in the coins page and it has the name image and price of the coin user would want to purchase.

Coins.jsx is the file that contains the coins page where it shows the user all the available coins for sale to purchase skins and themes.

CoinsCheckout.jsx is the file that contains the Checkout page which would allow the user to pay for the amount of coins they have put in the basket.

Home.jsx is the file that contains the Home page to the game so this would allow the user to press the button Start Game and it would direct the user to the game and also the leaderboard which shows the users rankings based on their average speed.

main.jsx is the file that allows the context providers to wrap arround the App and browser context wraps around the whole thing to ensure the contexts are accessible throughout the applications.

ResetPassword.jsx is the file that is used for the user to reset there password if they have forgotten it.

Settings.jsx is the File that contains the Setting page which contains the different fonts available for the user to use as well as darkmode and lightmode.

Shop.jsx is the file that is used for the shop page were the user can use a search filter to look for the exact item the user wants as well as the filter option which filters through the list of items and depending on which one the user clicks (e.g skins) it would only display the skins available in the shop. It also has the a shopping bag icon where the user can see all the items they have added to there basket and a checkout button which leads to a checkout page.

ShopFilter.jsx is the file that contains the component that filters the items in the shop by either skins or themes.

ShopItem.jsx is the file that contains the component which is used in the shop and it displays the items whith the name and its price with a Add button which allows it to be added to the users basket.

ShopNav.jsx is the file that contains the ShopNav Component which is used throughout the shop page. It holds all the links to lead to other pages.

SignUp.jsx is the file that contains the Sign up component which allows the user to input there personal information and sign up to ProTyper.

Skins.jsx is the file that is used for the skins page within the my account page. It holds the the skins bought by the user and they can change it on the page and press the button to go to the game.

Statistics.jsx is the file is used for the statistics page within the my account page. It holds the average speed of the user and the amount of races they have done after making an account.

themeContext.jsx is the file that contains the context which manages the themes including support for light/dark mode as well as choosing the fonts.

Themes.jsx is the file that is used for the themes page in the my account section. It holds the themes which are bought by the user and it allows theme to switch between different themes in the page.

userContext.jsx is the file that contains the context that contains the user info and provides it across all components in the aaplication

Game.jsx is the file that contains the main game, currently the game is set to calculate the time taken and the words per minute. In addition, it also has a running car animation which moves when keys are pressed and there is a reset button to get a new quote everytime.

Login.jsx is used for the Login page where the user would type in there email and password. There is a sign up button for un-registered users and a forgot your password section as well if the user has forgotten there passwords.

Navbar.jsx is the file that holds the navbar component which is used throughout the pages so user can navigate to different pages at any time.

# Backend files

blacklist.js is the file that contains the Schema for the Mongo DB table that houses expired session tokens.

client.js is the file that contains the Schema for the Mongo DB table that houses user account details, inventory and coin balance.

authenticate.js is the file that contains the logic for authenticating users.

index.js is the file that contains the routing functions for all the GET and POST requests. It also contains some utility functions that can be reused within each route (i.e. a function for checking if a user is logged in for protected routes. )

## Documentation

After cloning my repository you should have all the necessary files to run the code. Now you would have to install react + vite so that you can open my website.

You would first open up your preferred IDE and open up my PROJECT. You should then go to the terminal and type in the following:

```
  cd pro-typer
```

After you enter this file which has all the necessary files you should type in the following:

```
  npm install
```

When you have installed this, you do the following:

```
  npm run dev
```

This should then give you a link which would send you straight to my website.

You would have to now press ctrl + click on the link to access my website.

It should open up the home page of ProTyper on your preferred browser.

You should also get backend running as well so inorder to do this you should first open a new terminal and type in the following:

```
  cd backend
```

This would take you to the backend file and from here you should type in the following:

```
  npm install
```

This would download all the neccessary imports needed for backend to run.

Now you should type in the following to actually start up the backend:

```
  npm run dev
```

Now the backend server should be running and it should leave a message in the terminal saying "Server is running" if it is working.

## Demo

This demo would go through all the pages I currently have.

https://youtu.be/NwEij9ZaGoc

## Key Features

- Shop filter
- Search bar functionality
- Car animation with type racing game
- Shop checkout functionality
- Car animation can be changed when you click your purchased skins in my account under skins section
- Background can change to animations themes purchased from shop under my account in themes section
- Settings page holds lightmode/ darkmode feature as well as interchangeble fonts which remain consistent throughout the website
- Fully functional update details featurewhich is in my account page, this updates users information in the database and saves it
- Statistics page which has tracks the users average speed as well as the number of races done by the user
- fully functional shopping bag feature in main shop for skins and themes

## API Reference

#### This gets quotes from a free open source quotations API

```javascript
const TEXT_API_URL = "https://api.quotable.io/random";
```

## Author

- Ajanthapan Agilaruben
