import { getDatabase, ref, onValue } from "firebase/database";
import { app } from "../dbConfig";

export const fetchQueueData = () => {

    return new Promise(function (resolve, reject) {
        const db = getDatabase(app);
        const mockExpectedTime = new Date().toISOString()
        const customerRef = ref(db, 'queueData/queue/customersToday');
        onValue(customerRef, (snapshot) => {
            const data = snapshot.val();
            resolve({ customers: data, expectedTime: mockExpectedTime, length: data.length});
        });
    });
}