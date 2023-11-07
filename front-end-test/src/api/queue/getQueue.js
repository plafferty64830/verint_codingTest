import { getDatabase, ref, onValue } from "firebase/database";
import { app } from "../dbConfig";

export const fetchQueueData = () => {

    return new Promise(function (resolve, reject) {
        const db = getDatabase();
        const starCountRef = ref(db, 'queueData/queue/customersToday');
        onValue(starCountRef, (snapshot) => {
            const data = snapshot.val();
            resolve(data)
        });
    });
}