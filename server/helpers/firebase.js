var admin = require('firebase-admin');

var serviceAccount = require('./iproject-p2-93bd0-firebase-adminsdk-w7vd5-fc3a32e2b7.json');

admin.initializeApp({
	credential: admin.credential.cert(serviceAccount),
});

module.exports = {
	db: admin.firestore(),
	admin,
};
