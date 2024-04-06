

#  SHOEMAN

- Intoducing Shoeman A MERN project.

-------------------------

## Frontend 🛠️

Run with cmd:
```sh
npm start
```

### Tech and Tools
- React.JS
 
 - HTML

 - CSS

 - Bootstrap

 ### Pages

- Login/Signup:

User has to signup first with thier credentials later can login with the same.

(At the backend password is stored in form of its hash in MongoDB) 

- Dashboard:

Here you will see all the rendered data coming from the database which is filtered by some logic on the basis if thier categories.



- My Cart :

Here user will see all thier items which she/he had added to the cart previously.

- My Orders:

After checkout from the cart here each item will be displayed that is filtered on the basis of time and date.



 ## Backend🛠️
 Run with cmd:
```sh
npm run dev
```
### Tech and Tools
- Express.JS
 
 - Node.JS
 
 - MongoDB Atlas

 - BcryptJS

 - JWT

 ### Endpoints
- Shoes Data Endpoint
```sh
 http://localhost:5000/shoe
```

- User Signup Endpoint
```sh
 http://localhost:5000/user/create
```

- User Login Endpoint
```sh
 http://localhost:5000/user/verify
```

- My Cart data Endpoint
```sh
http://localhost:5000/order/save
```

- My Orders data Endpoint
```sh
http://localhost:5000/order/user
```




