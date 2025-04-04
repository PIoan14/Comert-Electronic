// index.js
require("dotenv").config();
const express = require("express");
const cors = require('cors');
const firebase = require("firebase-admin");
const admin = require('firebase-admin');
const app = express()
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

// Inițializarea Firebase Admin SDK cu cheia JSON
const serviceAccount = require("./sitesport-86b83-firebase-adminsdk-fbsvc-a6008045c6.json");

firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccount),
  databaseURL: "https://console.firebase.google.com/project/sitesport-86b83/firestore/databases/-default-/data/~2Fbarbati~2FLQqLcS5lqp4D3TW7Xe0m" // Înlocuiește cu URL-ul bazei tale Firebase
});

const db = firebase.firestore();
const usersCollection = db.collection('barbati');
const usersCollectionFemei = db.collection('femei');
const usersCollectionUniversale = db.collection('universale');

// Permite CORS pentru a permite cereri de la frontend


app.use(cors({
 // frontend-ul tău (portul 8080)
  methods: 'GET,POST', // Permite doar GET și POST
})); // Metodele permise;
app.use(express.json());
// Ascultă schimbările din colecția 'users'
usersCollection.onSnapshot((snapshot) => {
  const users = [];
  snapshot.forEach((doc) => {
    users.push(doc.data());
  });
  console.log('Datele actualizate pe server:', users);
  // Aici poți actualiza orice date pe server dacă este necesar
});

// API pentru a obține toți utilizatorii
app.get('/succes', (req, res) =>{
  res.send("Plata efectuata cu succes !")
})
app.get('/fail_payment', (req, res) =>{
  res.send("Plata nu a fost efectuata !")
})
app.get('/', (req, res) =>{
  res.send("Plata efectuata cu succes !")
})
app.get('/data', (req, res) => {
  usersCollection.get()
    .then((snapshot) => {
      const users = [];
      snapshot.forEach((doc) => {
        users.push(doc.data());
      });
      res.json(users);
    })
    .catch((error) => {
      console.error('Eroare la obținerea datelor:', error);
      res.status(500).send('Eroare la obținerea datelor');
    });
});
app.get('/dataFemei', (req, res) => {
  usersCollectionFemei.get()
    .then((snapshot) => {
      const users = [];
      snapshot.forEach((doc) => {
        users.push(doc.data());
      });
      res.json(users);
    })
    .catch((error) => {
      console.error('Eroare la obținerea datelor:', error);
      res.status(500).send('Eroare la obținerea datelor');
    });
});
app.get('/dataUniversale', (req, res) => {
  usersCollectionUniversale.get()
    .then((snapshot) => {
      const users = [];
      snapshot.forEach((doc) => {
        users.push(doc.data());
      });
      res.json(users);
    })
    .catch((error) => {
      console.error('Eroare la obținerea datelor:', error);
      res.status(500).send('Eroare la obținerea datelor');
    });
});
// const validateTokenLater = async (req, res, next) => {
  
//   console.log('Middleware-ul inițial fără token');
//   next();  // Continuă cu următoarea fază sau ruta
// };
//Aici o sa vine sectiune femei si sectiune unisex
app.post("/payment", async (req, res) => {
  try {
   
    const { cart, total } = req.body; // Coșul de cumpărături și totalul

    const lineItems = cart.map((item) => ({
      price_data: {
        currency: "ron", // Poți schimba moneda
        product_data: { name: item.titlu },
        unit_amount: item.Pret*100 , // Stripe lucrează cu cenți
      },
      quantity: item.quantity,
    }));

    
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      success_url: "http://localhost:3000/success", // URL-ul de succes
      cancel_url: "http://localhost:3000/fail_payment", // URL-ul de anulare
    });
    console.log(session)

    res.json({ url: session.url }); // Trimitem URL-ul Stripe Checkout către frontend
  } catch (error) {
    console.log("Se ajunge aici :")
    console.log(error)
    res.status(500).json({ error: error.message });
  }
});


app.listen(3000, () => {
    console.log('Serverul rulează pe http://localhost:3000');
  });

// const validateToken = async (req, res, next) => {
//   const authorizationHeader = req.headers.authorization;

//   if (!authorizationHeader) {
//     return res.status(400).send('Token not provided');
    
//   }

//   // Extrage tokenul JWT din 'Bearer <token>'
//   const idToken = authorizationHeader.split('Bearer ')[1]; 
//   console.log(idToken)

//   if (!idToken) {
//     return res.status(400).send('Token is not valid');
//   }

//   try {
    
//     const decodedToken = await admin.auth().verifyIdToken(idToken);

//     console.log("Good")
//     req.user = decodedToken;
//     next(); 
//   } catch (error) {
//     return res.status(401).send('Invalid token');
//   }
// };
// app.post('/verif-jwt', (validateTokenLater));

// app.post('/verif-jwt', validateToken, (req, res) => {
  
//   res.status(200).json(`Token valid! UID-ul utilizatorului este: ${req.user.uid}`);
// });

// app.listen(3000, () => {
//   console.log('Serverul rulează pe http://localhost:3000');
// });
