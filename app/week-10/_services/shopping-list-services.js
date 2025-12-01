import { db } from "../../../_utils/firebase"; 
import { collection, addDoc, getDocs, query, deleteDoc, doc } from "firebase/firestore";


export async function getItems(userId) {
    // check if the userid is valid
    if (!userId) return [];
    try {
        // get the items column
        const itemsCol = collection(db, "users", userId, "items");
        // get the items in a snapshot
        const itemsSnapshot = await getDocs(query(itemsCol));
        
        const items = itemsSnapshot.docs.map(doc => ({
            id: doc.id, ...doc.data()
        }));

        return items;

    } catch (e) {
        console.error(e);
        return [];
    }
}

export async function addItem(userId, item) {
    if (!userId) throw new Error("User not authenticated");
    if (!item || typeof item !== "object") throw new Error("Invalid item data");
    try {
        const itemsColRef = collection(db, "users", userId, "items");

        const docRef = await addDoc(itemsColRef, item);
        item.id = docRef.id;
        return item;
    } catch (e) {
        console.error(e);
        throw e;
    }
}

export async function deleteItem(userId, itemId) {
    if (!userId) throw new Error("User not authenticated");
    try {
        const itemDocRef = doc(db, "users", userId, "items", itemId);

        await deleteDoc(itemDocRef);
    } catch (e) {
        console.error(e);
        throw e;
    }
}