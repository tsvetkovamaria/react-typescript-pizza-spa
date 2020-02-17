This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Major question to answer:

1.
I see two roles: admin and user. 

User 
* can create order

Admin 
* can see stats 
* can see list of all orders (+CRUD)

But I don't see login/logout features and api has no auth. So auth and protected routes are not implemented at all. Any user in the app is an admin.

2.
Tha docs in readme and real api don't match. So some data was taken from readme (like expected order structure) while routes were taken from backend repo. Creating orders doesn't work properly on backend, so you'll see empty rows for all new orders in Status page

3.
I didn't know what should happen after order is placed, so did nothing. Probably I whould show success message and then redirect to a single order view page so that user can track status. Or maybe prompt to create another order - clear form and show message. 

Done: 
* UI of Create Order, Dashboard, Status, main layout 
* Connect all pages to api
* Separate smart components from dumb ones (smart pages connect to api)
* Status page: list orders, change status
* Create order:  add several pizzas, add user, toggle pizza form, show dynamic summary
* Dashboard page: all charts show actual info

Todo:

* refactor App components - separate layout from routes
* split components into smaller UI components to make them maintainable (Dashboard)
* validate user input - required fields, input length, input masks
* handle server errors and show notifications
* highlight nav item for current route, add icons to menu
* move base url to env variables
* add chart on status page
* "print summary" on status page should generate pdf, would take a library for that
* work on UI, add microinteractions and some smooth animations
* lint, unit test and set pre-commit hooks
* add docs


Backend https://github.com/naten2020/piz


## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
