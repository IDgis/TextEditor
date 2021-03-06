import { SimpleSchema } from 'meteor/aldeed:simple-schema';

import { Text } from '/imports/api/collections/text.js';

export const CouplingOntwerpSchema = new SimpleSchema({
  landschapstype: {
    type: String,
    allowedValues: function() {
      var records = Text.find({texttype: 'landschapstype'}).fetch();
      var avs = [];
      records.forEach(function(item) {
        avs.push(item._id);
      });
      
      return avs;
    }
  },
  
  sector: {
    type: String,
    allowedValues: function() {
      var records = Text.find({texttype: 'sector'}).fetch();
      var avs = [];
      records.forEach(function(item) {
        avs.push(item._id);
      });
      
      return avs;
    }
  },
  
  kernkwaliteit: {
    type: String,
    allowedValues: function() {
      var records = Text.find({texttype: 'kernkwaliteit'}).fetch();
      var avs = [];
      records.forEach(function(item) {
        avs.push(item._id);
      });
      
      return avs;
    }
  },
  
  ontwerpprincipe: {
    type: [String],
    allowedValues: function() {
      var records = Text.find({texttype: 'ontwerpprincipe'}).fetch();
      var avs = [];
      records.forEach(function(item) {
        avs.push(item._id);
      });
      
      return avs;
    }
  }
});

export const CouplingOntwerp = new Mongo.Collection("couplingontwerp");
CouplingOntwerp.attachSchema(CouplingOntwerpSchema);

CouplingOntwerp.allow({
  insert: function() {return true;},
  update: function() {return true;},
  remove: function() {return true;}
});