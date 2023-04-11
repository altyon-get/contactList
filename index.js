const express = require('express');
const path = require('path');
const port = 8800;

const db = require('./config/mongoose');
const Contact = require('./models/contact.js');

const app = express();
var contactList = [
    {
        name: 'abc',
        phone: '123',
    },
    {
        name: 'xyz',
        phone: '541',
    }
]

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded());
app.use(express.static('assets'));


// //(middle ware 1)
// app.use(function(req,res,next){
//     console.log('MW1 called');
//     // req.name='shubham'; //can manipulate data here
//     next();
// });
// //(middle ware 2)
// app.use(function(req,res,next){
//     console.log('MW2 called');
//     next();
// });

//controllers
app.get('/', function (req, res) {
    //below part is called context,
    //here we need pass contact list as local variable 
    // console.log(req);
    // res.render('home',{
    //     title:'Altyon',
    //     contact_list:contactList,
    // });

    //FORDB
    async function getItems(){
        const Items = await Contact.find({});
        return Items;
    }

    getItems().then(function (contacts) {
        return res.render('home', {
            title: 'Altyon',
            contact_list: contacts,
        });
    });
});
app.post('/create-contact', function (req, res) {
    console.log(req.body);

    //FORDB
    Contact.create({
        name: req.body.name,
        phone: req.body.phone
    });

    // contactList.push(req.body);
    // contactList.push({
    //     name:req.body.name,
    //     name:req.body.phone,
    // })
    return res.redirect('/');// we can use back to goto prev page
    // return res.redirect('back');
});
app.get('/practice', function (req, res) {
    return res.render('practice', { title: 'Practice' });
});

// for deleting the contact
// string param
// app.get('/delete-contact/:phone',function(req,res){
//     console.log(req.params);
// });
//query param
app.get('/delete-contact/', function (req, res) {
    // console.log(req.query);
    // get the query from the url
    // let phone = req.query.phone;
    // let idx = contactList.findIndex(contact => contact.phone == phone);
    // if (idx != -1) contactList.splice(idx, 1);
    // return res.redirect('back');

    //FORDB
    let id=req.query.id;
    Contact.find(id).deleteOne;
    console.log('deleting:',id);
    return res.redirect('/');
});


app.listen(port, function (err) {
    if (err) {
        console.log(err);
        return;
    }
    console.log('expres server is running on port:', port);
});