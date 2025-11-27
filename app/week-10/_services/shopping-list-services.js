import { db } from "../_utils/firebase"; 
import { collection, addDoc, getDocs, query } from "firebase/firestore";

async function getShoppingListItems() {
    const shoppingListCol = collection(db, "shopping-list");
    const shoppingListSnapshot = await getDocs(shoppingListCol);
    const shoppingListItems = shoppingListSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    return shoppingListItems;
}

async function addShoppingListItem(userId, item) {
    try {
        const docRef = await addDoc(collection(db, "shopping-list"), item);
        return { id: docRef.id, ...item };
    } catch (e) {
        console.error("Error adding document: ", e);
        throw e;
    }
}

export async function getItems() {
    if (!userId) return [];
    try {
        const itemsCol = collection(db, "shopping-list");
        const itemsSnapshot = await getDocs(query(itemsCol));
        const items = itemsSnapshot.docs
            .map(doc => ({ id: doc.id, ...doc.data() }));
    } catch (e) {
        console.error("Error getting documents: ", e);
        return [];
    }
}

export async function addItem(item) {
    if (!userId) throw new Error("User not authenticated");
    if (!item || typeof item !== "object") throw new Error("Invalid item data");
    try {
        const docRef = await addDoc(collection(db, "shopping-list"), item);
        return docRef.id;
    } catch (e) {
        console.error("Error adding document: ", e);
        throw e;
    }
}