require('babel-register');

const AppRouter = require('./AppRouter.js').default;  
const Sitemap = require('react-router-sitemap').default;

(
    new Sitemap(AppRouter)
        .build('https://www.watersauce.com')
        .save('../sitemap.xml')
);
