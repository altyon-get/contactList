// // getting-started.js
// const mongoose = require('mongoose');

// main().catch(err => console.log(err));

// async function main() {
    //   await mongoose.connect('mongodb://127.0.0.1:27017/test');
    //   // With Mongoose, everything is derived from a Schema. Let's get a reference to it and define our kittens.
//   const contactSchema = new mongoose.Schema({
//     name: {
    //         type: String,
    //         require: true
//     },
//     phone: {   
    //         type: String,
//         require: true
//     }
//   });
//   // So far so good. We've got a schema with one property, name, which will be a String. The next step is compiling our schema into a Model.
//   const Contact = mongoose.model('Contact', contactSchema);

//   module.exports=Contact;

//   // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
// }


//  ========================================////


// getting-started.js
const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    phone: {
        type: String,
        require: true
    }
});
// So far so good. We've got a schema with one property, name, which will be a String. The next step is compiling our schema into a Model.
const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;