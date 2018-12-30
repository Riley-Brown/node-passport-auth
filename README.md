### Simple user authentication using Node.js, Express, Passport, and MongoDB

![Alt Text](https://i.imgur.com/gDNWPy6.gif)

##### You will need to create a file inside of the config folder and store your mongoURI connection string inside of it, this will allow you to connect to your own mongoDB cluster. I called mine keys.js

[If you don't have a mongoDB account, you can sign up here and create a free cluster](https://www.mongodb.com/cloud)

Example:

```javascript
module.exports = {
  MongoURI: "YOUR-MONGO-CONNECTION-STRING-HERE"
};
```
