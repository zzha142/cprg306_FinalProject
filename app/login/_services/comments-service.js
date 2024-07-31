import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

export async function getReviews(query) {
  try {
    const querySnapshot = await getDocs(query);
    const reviewsList = [];
    querySnapshot.forEach((doc) => {
      reviewsList.push({
        id: doc.id,
        ...doc.data(),
      });
    });
    console.log("reviewsList:", reviewsList); //Testing
    return reviewsList;
  } catch (error) {
    console.error("Error getting reviews:", error);
  }
}

export async function addReviews(userId, gameTitle, item) {
  try {
    const reviewsRef = collection(db, "reviews");
    const newReview = {
      ...item,
      uid: userId,
      gametitle: gameTitle,
      timestamp: new Date(),
    };
    const docSnap = await addDoc(reviewsRef, newReview);
    return docSnap.id;
  } catch (error) {
    console.error("Error adding review:", error);
  }
}
