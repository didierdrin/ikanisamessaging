import admin from 'firebase-admin';

// Use environment variables or a service account key for secure access
//import serviceAccount from './serviceAccountKey.json'; // Replace with the path to your Firebase service account key file

const serviceAccount = {
  "type": "service_account",
  "project_id": "icupa-396da",
  "private_key_id": "f56bbccbcf2f55d71a2193d022f70f34c5883836",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDFZqjxu1Dv3bn7\n+PlET/1b+ZAw8jR1EzhqEK6jfza5/9vTOZBeJcguLrkLWzht5pghkGeH2y1R/EZA\nq/cfdvMrPb74fDeBeplktWlmP8cU8+NM3RM5O7mPw37zzEDocvCBdNqu8EEEn6b8\noGW/184f0eZRJBi7s6Q9NvHzYggkyQzX2I9ARgI1LSGNlwquMRccwK/uTUNof1J6\njykzVk5qiCqDYLaXjSnS7c7MrvU7XQyIj5YbeQ8kzcjKVbzvGIVfKwM2Qwgc4QsI\nhbAsoccMV9ZvCJ+6kNCEghlZ7LCXrZIwjOGyyvBqhUNIaJkYFdhtX/7t7w+MLY5w\nnHudYBqhAgMBAAECggEAKJHBtPSXXMTH/XYc3KJH4sg2jyioCUuq83l8OtPhTna8\nGfwhpIfFTWCC3UehIE0dBQDlljFAbjIXyiDNiCTtMvzcq7rzuWOV9PGnuMDwzGiX\nVWu2ELQqndZC2B4pVNySezil3QA5jJa3PgJFBxl2HmoIGLL/dkwkPAR301pZbB2d\nFrEofHrEKOc+JkfMocCsJXwd0C1UQODYaaRznByWivlybXBo8wk57G3PgFx5j/Pg\nr4EXLjql9Td+U1TcFHCImx4PL6u/0Yeh9wBwD7xpYMt5BX/iY4M6UbEHai42pTNQ\n38dJo0/JpH54YwUOIuUjewOxEvSd5hkw5ImlmDW58QKBgQDzwbvRPhI1Mn0PZ4J6\n4PL7thc907P31k/naGbtjySp4WPGjP3DPHsl8LyDKvBILZjIvxoj2n963yhpRiLi\nMA6cx1gYY5DUxLLWwoAueL8UFPne/B2c96MrJFK0cC6TQOx13HNcTaRnvaWrz1uo\nysjNkb80QtTGPjsu5kQlKhEG5QKBgQDPUOBCgrODWOAGCBa/yG2bQWdpPcIh2Puj\nguNPaqNdpj3QTWIDC/Ym+e/Wh2ITxr/mcDBh3TGH9VWhTTWB8RJKJEBGiPh/KBDx\nkTkW4dqBTE930e8PsohrhWmXJL8HvVCSNKjhR9puqzyX4bYmy3sIAQeifr9EN1PD\nYySn/dKtDQKBgQDC+xpIotUftnYxB0RpFF1pGVv3+csAmW6rFWkX56OVPBR6szcd\nn9iGHc49QfCYW9jV439+ZH4KhE0oAJFQys41fIOsZqBogbrobQbppW57GthRFOx/\nLdtYXCLH8OBgq9M56BBjKjwzO5E1IJYaK7N6NHZ00Gyw8wCWYFzsOX0LPQKBgQCj\ng1x92OyRSkXXPAYFWaXpcFqJzSYS4DsJKjDy8F7NfFMAuif10zdgYn1iLQGUK4wr\nyoy+g2GPpFbXlDgBtwv/4ju35kxorkc+4JWwkI5wsKl1DeWJ8fxbIay4g0kQZ6bm\nyhXxKWUFKJXwDRxH2PG+zGEjLujYevLcBpRg03eY+QKBgHFe8nrrW9HGIx26ZS+e\nKpNFWR7OlgbRyA4gT/E1aI/+H9Cj+fsIqh+MwsJcB18qx8+WGZG9EGHfCFt97SgG\nu+ebvLUCWKwVU0duVWRA5W8L3cFB+9GyCJIwE20B9DYnla2WGUMczcePM+yEls0x\nD0UVOrS+WA0wlnxFjvyqilI5\n-----END PRIVATE KEY-----\n",
  "client_email": "ikanisa-push-notification@icupa-396da.iam.gserviceaccount.com",
  "client_id": "103054298918024588441",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/ikanisa-push-notification%40icupa-396da.iam.gserviceaccount.com",
  "universe_domain": "googleapis.com"
};

// Initialize the Firebase Admin app
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://icupa-396da.firebaseio.com"
});

// Export the Firestore instance
export const firestore = admin.firestore();
