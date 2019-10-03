# webhooktester
Bare-bones node application to test webhooks. 

## About
A super simple program that you can use to test webhooks. We use ngrok to create a tunnel from a public URL to localhost, and then print all requests to the URL in your console. The app will also return the request body in the response, making it useful when you're working with webhooks that issue challenges (like monday.com or Slack). 

## How do I run this?
~~~~
ngrok http 3000
node index.js
~~~~
