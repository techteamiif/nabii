// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  firebase: {
    projectId: 'website-23a47',
    appId: '1:79660118091:web:2389c4aece13f5e4659dce',
    databaseURL: 'https://website-23a47-default-rtdb.firebaseio.com',
    storageBucket: 'website-23a47.appspot.com',
    locationId: 'us-central',
    apiKey: 'AIzaSyCYRUdKMf-tnqSzhiPZfGqkFMNKgOurpnY',
    authDomain: 'website-23a47.firebaseapp.com',
    messagingSenderId: '79660118091',
  },
  production: false,
  apiUrl: 'https://iif-api.herokuapp.com/api/v1',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
