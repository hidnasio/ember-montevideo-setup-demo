// jscs: disable requireCamelCaseOrUpperCaseIdentifiers
/* jscs: disable validateIndentation */
/* jshint unused: false */
/* globals somethingGlobal, -window */

import Ember from 'ember';
import Activity from 'tajpado/models/activity';

const { inject } = Ember;

export default Ember.Route.extend({
    activityManager: inject.service(),

    model(params/*, unusedParam*/) {
        // let test = [];
        // jshint ignore:start
        // test = undefinedValue; // jshint ignore:line
        // jshint ignore:end
        // test = somethingGlobal;

        // window.document.title = 'test';

        let activity = Activity.find(params.activity_id);
        return activity;
    },

    afterModel(activity) {
        this.set('activityManager.current', activity);
    }
});
