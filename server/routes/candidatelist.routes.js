/**
 * https://github.com/senbagaraman04/rams-recruit
 */

const express = require('express');
const app = express();
//const arrayList = [];
const candidateListRoutes = express.Router();

// Require Business model in our routes module
let candidateListItem = require('../models/candidateListItem');

// Defined store route
// candidateListRoutes.route('/add').post(function (req, res) {
//   let business = new candidateListItem(req.body);
//   business.save()
//     .then(business => {
//       res.status(200).json({'business': 'business in added successfully'});
//     })
//     .catch(err => {
//     res.status(400).send("unable to save to database");
//     });
// });

candidateListRoutes.route("/addCandidateData").post(function (req, res) {

    let candidateData = new candidateListItem(req.body);
    console.log(candidateData);
  //  arrayList.push(candidateData)
    res.status(200).json({'candidateData': 'Candidate data in added successfully'});
});


// Defined get data(index or listing) route
candidateListRoutes.route('/candidateList').get(function (req, res) {
//     candidateListItem.find(function (err, candidates){
//     if(err){
//       console.log(err);
//     }
//     else {
//       res.json(candidates);
//     }
//   });

 
let candidateList = new candidateListItem({
    cleared: true,
    email:"email@email.com",
    fullname:"Senbagaraman",
    gender:"male",
    l1Response:"Good",
    l2Response:"Very good",
    l3Response: "Excellaent",
    phoneNumber:"09090090900",
    tech:".net Typescript, Azre",
    yoe:"5"
});

let candidateList2 = new candidateListItem({
    cleared: true,
    email:"email@email2.com",
    fullname:"Senbagaraman2",
    gender:"male",
    l1Response:"Good",
    l2Response:"Very good",
    l3Response: "Excellaent",
    phoneNumber:"09090090900",
    tech:"Java",
    yoe:"2"
});

let candidateList3 = new candidateListItem({
    cleared: false,
    email:"email@email3.com",
    fullname:"Senbagaraman3",
    gender:"male",
    l1Response:"Good",
    l2Response:"Very good",
    l3Response: "High Expectation on salary",
    phoneNumber:"09090090900",
    tech:"Architecture role in all techs",
    yoe:"15"
});

let arrayList = [];
arrayList.push(candidateList)
arrayList.push(candidateList2)
arrayList.push(candidateList3)

res.json({ data: arrayList });


});

// Defined edit route
// candidateListRoutes.route('/edit/:id').get(function (req, res) {
//   let id = req.params.id;
//   Business.findById(id, function (err, business){
//       res.json(business);
//   });
// });

//  Defined update route
// candidateListRoutes.route('/update/:id').post(function (req, res) {
//     Business.findById(req.params.id, function(err, next, business) {
//     if (!business)
//       return next(new Error('Could not load Document'));
//     else {
//         business.person_name = req.body.person_name;
//         business.business_name = req.body.business_name;
//         business.business_gst_number = req.body.business_gst_number;

//         business.save().then(business => {
//           res.json('Update complete');
//       })
//       .catch(err => {
//             res.status(400).send("unable to update the database");
//       });
//     }
//   });
// });

// Defined delete | remove | destroy route
// candidateListRoutes.route('/delete/:id').get(function (req, res) {
//     Business.findByIdAndRemove({_id: req.params.id}, function(err, business){
//         if(err) res.json(err);
//         else res.json('Successfully removed');
//     });
// });

module.exports = candidateListRoutes;