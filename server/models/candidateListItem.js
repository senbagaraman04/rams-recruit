/**
 * https://github.com/senbagaraman04/rams-recruit
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;



// Define collection and schema for CandidateList
let candidateListItem = new Schema({
  fullname: { type: String  },
    email: { type: String },
    phoneNumber: { type: Number },
    yoe: { type: String },
    tech: {        type: String    },
    gender: {    type: String  },
    l1Response: {    type: String  },
    l2Response: {    type: String  },
    l3Response: {    type: String  },
    cleared: {    type: Boolean  },

},{
    collection: 'candidateListItem'
});

module.exports = mongoose.model('candidateListItem', candidateListItem);