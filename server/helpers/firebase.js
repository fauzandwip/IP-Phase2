var admin = require('firebase-admin');

var serviceAccount = require('./firebaseKey.json');

admin.initializeApp({
	credential: admin.credential.cert(serviceAccount),
});

module.exports = {
	db: admin.firestore(),
	admin,
};
