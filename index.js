require('dotenv').config();


const express = require('express');
const path = require('path');
const app = express();
const mongoose = require('mongoose');
const session = require('express-session')
const flash = require('connect-flash')
const homeRoutes = require('./routes/homeRoutes')
const ejs = require('ejs')
const ejsMate = require('ejs-mate');
const sanitizeHtml = require('sanitize-html');
const helmet = require('helmet');



app.engine('ejs' , ejsMate);
// telling express that we want to use ejsMate instead of default one its relying on
app.set('views' , path.join(__dirname,'views'));
app.set('view engine' , 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(helmet())

const scriptSrcUrls = [
    "https://stackpath.bootstrapcdn.com/",
    "https://kit.fontawesome.com/",
    "https://cdnjs.cloudflare.com/",
    "https://cdn.jsdelivr.net",
    "https://cdn.jsdelivr.net/npm/@popperjs/",
    "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/"
];
const styleSrcUrls = [
    "https://kit-free.fontawesome.com/",
    "https://stackpath.bootstrapcdn.com/",
    "https://fonts.googleapis.com/",
    "https://use.fontawesome.com/",
    "https://cdn.jsdelivr.net",
    "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/",
    "https://cdn.jsdelivr.net/npm/bootstrap-icons/",
    "https://cdnjs.cloudflare.com/" // Added for Font Awesome CSS
];

const fontSrcUrls = [
    "https://cdnjs.cloudflare.com/", // Added for Font Awesome Fonts
    "https://fonts.gstatic.com/"
];

app.use(
    helmet.contentSecurityPolicy({
        directives: {
            defaultSrc: [],
            connectSrc: ["'self'"],
            scriptSrc: ["'unsafe-inline'", "'self'", ...scriptSrcUrls],
            styleSrc: ["'self'", "'unsafe-inline'", ...styleSrcUrls],
            workerSrc: ["'self'", "blob:"],
            objectSrc: [],
            imgSrc: [
                "'self'",
                "blob:",
                "data:",
                "https://images.unsplash.com/",
                "https://images.pexels.com/"  // Added Pexels here
            ],
            fontSrc: ["'self'", ...fontSrcUrls],
        },
    })
);



app.use('/' , homeRoutes)

// Other route handlers here
// app.get('/some-route', (req, res) => { ... });

// Catch-all route for handling 404 errors
app.use((req, res, next) => {
    res.status(404).render('error', { message: "Page Not Found" });
});

// Optional: Custom error handler for other errors
app.use((err, req, res, next) => {
    console.error(err.stack); // Log the error (optional)
    res.status(err.status || 500).render('error', { message: "Something went wrong!" });
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});