import { Mongo } from 'meteor/mongo';

Meteor.methods({
    'bins.insert': function() {
        return Bins.insert({
            
        });
    }
});

export const Bins = new Mongo.Collection('bins');