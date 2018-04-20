let admin = require("firebase-admin");
let serviceAccount = require("./lienka-d28a4-firebase-adminsdk-7my6l-53df53a4a8.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://lienka-d28a4.firebaseio.com"
});

let db = admin.database();


module.exports = {
    writeUserData: (username, passwd, email, salt) => {
        db.ref('users/' + username).set({
            name: username,
            email: email,
            password: passwd,
            salt : salt
        });
    },

    readUserData: async (userId) => {
        return db.ref('users/' + userId).once("value", function(snapshot) {
            result = snapshot.val();
            return result;
        });
    },

    existsUser: async (username) => {
        let res;
        await db.ref('users/' + username).once("value", function(snapshot) {
            res = (snapshot.val() !== null);

        });
        return res;
    }

};
