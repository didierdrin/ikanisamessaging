import admin from 'firebase-admin';
import { readFileSync } from 'fs';

// Load the service account key from the file system
const serviceAccount = JSON.parse(readFileSync('./serviceAccountKey.json', 'utf-8'));



//const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_KEY);

if (!admin.apps.length) {
    try {
        admin.initializeApp({
            credential: admin.credential.cert(JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_KEY)),
            databaseURL: "https://icupa-396da.firebaseio.com"
        });
    } catch (error) {
        console.error('Firebase Admin initialization error:', error);
    }
}


// Export the Firestore instance
export const firestore = admin.firestore();
