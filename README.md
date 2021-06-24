# stepzen-spacex-graphql :rocket:

<img width="700" alt="Screen Shot 2021-06-24 at 10 57 36 AM" src="https://user-images.githubusercontent.com/54046179/123310554-0d3d9c80-d4db-11eb-98c2-a54e7d75e523.png">


This project is a React app spun up with a StepZen connection to SpaceX's GraphQL API. 

Before you get started, you'll need to get yourself a [StepZen account](https://stepzen.com/request-invite) and [install the StepZen CLI](https://stepzen.com/docs/quick-start).

## Getting Started 

Run  

```git clone https://github.com/stepzen-samples/stepzen-spacex-graphql.git && cd stepzen-spacex-graphql && code .```  

to open up the project in your IDE.

Then `npm install`. 

Run `stepzen start`. 

You'll get a message like:

```bash
Deploying to StepZen...... done

Successfully deployed api/example at 4:22:19 PM

Your endpoint is available at https://myaccount.stepzen.net/api/example/__graphql
```
You'll need this endpoint to configure your React app. 

You'll also first notice a custom StepZen Graphiql editor pop up. I encourage you to play around with it! You can find [more information on it in our docs](). 

<img width="1597" alt="Screen Shot 2021-06-24 at 10 39 22 AM" src="https://user-images.githubusercontent.com/54046179/123308449-88518380-d4d8-11eb-983c-ac71326a4e0f.png">

You'll need to add something for the app to work in localhost, a .env in your working directory with the content:

```
REACT_APP_STEPZEN_API_KEY={{STEPZEN_API_KEY}}
REACT_APP_STEPZEN_ENDPOINT={{STEPZEN_ENDPOINT}}
```

The STEPZEN_API_KEY is the key from your account, and the STEPZEN_ENDPOINT is the endpoint you got when you ran `stepzen start`. 

Now, run `npm start` to see your Create React App user interface with your rocket information! Feel free to play around. [Let us know](https://discord.com/invite/9k2VdPn2FR) what you come up with! 
