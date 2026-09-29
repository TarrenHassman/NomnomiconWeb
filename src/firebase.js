// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs, query, where, updateDoc, doc, increment, getDoc, setDoc, serverTimestamp, runTransaction } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// For now, we'll use environment variables that the user needs to set up
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };

// Helper function to generate a short referral code
const generateReferralCode = () => {
  return Math.random().toString(36).substring(2, 8).toUpperCase();
};

export const joinWaitlist = async (email, referredByCode = null) => {
  try {
    const waitlistRef = collection(db, "waitlist");
    const counterRef = doc(db, "counters", "waitlist");

    // Use a transaction to safely increment the counter and add the user
    // Note: Due to strict security rules (no read/list access on waitlist), 
    // we cannot check for duplicates client-side. We accept all writes.
    return await runTransaction(db, async (transaction) => {
      // 1. Get the current counter (Read allowed on counter doc)
      const counterDoc = await transaction.get(counterRef);
      let currentCount = 0;
      
      if (counterDoc.exists()) {
        currentCount = counterDoc.data().total || 0;
      } else {
        // Initialize counter if it doesn't exist
        transaction.set(counterRef, { total: 0 });
      }

      const newPosition = currentCount + 1;
      const referralCode = generateReferralCode();

      const newUser = {
        email,
        position: newPosition,
        referralCode,
        referralCount: 0,
        createdAt: serverTimestamp()
      };

      if (referredByCode) {
        newUser.referredBy = referredByCode;
      }

      // 2. Add the new user to the waitlist
      // We use addDoc-like behavior but inside transaction
      const newDocRef = doc(waitlistRef); 
      transaction.set(newDocRef, newUser);

      // 3. Increment the global counter
      transaction.update(counterRef, { total: increment(1) });
      
      return { 
        success: true, 
        isNew: true, 
        data: { id: newDocRef.id, ...newUser } 
      };
    });

  } catch (error) {
    console.error("Error adding document: ", error);
    return { success: false, error };
  }
};

export const getWaitlistCount = async () => {
  try {
    // Read from the secure counter document
    const counterRef = doc(db, "counters", "waitlist");
    const docSnap = await getDoc(counterRef);
    
    if (docSnap.exists()) {
      return docSnap.data().total;
    } else {
      return 0;
    }
  } catch (error) {
    console.error("Error fetching count: ", error);
    return 0;
  }
};
