import { getDatabase, ref, onValue, set } from "firebase/database";
import { app } from "../dbConfig";
import { fetchQueueData } from "./getQueue";

export const addCustomerToQueue = (newCustData) => {

    return new Promise(function (resolve, reject) {
        //get the length of the current queue to determine the id of the new customer and the queue position
        fetchQueueData().then((queue) => {
            const newID = queue.length;
            const newData = 
                {
                    "bookedServer": null,
                    "bookingEndTime": null,
                    "bookingStartTime": null,
                    "collectingServer": null,
                    "currentPosition": newID + 1,
                    "customer": {
                      "bookingRef": "W",
                      "createdBy": {
                        "displayName": "Code Test1",
                        "id": 3617
                      },
                      "createdBySystem": null,
                      "customerProfile": null,
                      "emailAddress": newCustData.emailAddress,
                      "firstName": "",
                      "groupSize": 1,
                      "id": 13704599,
                      "isInMultipleQueue": false,
                      "language": {
                        "isoCode": "en",
                        "name": "English"
                      },
                      "merchantCustomer": {
                        "id": 6180736
                      },
                      "mobileNetwork": null,
                      "mobileNumber": "+44",
                      "name": newCustData.name,
                      "notes": "",
                      "numberCountryCode": "GB",
                      "orderNumber": null,
                      "pagerNumber": null,
                      "postCode": null,
                      "surname": "",
                      "ticketNumber": "003",
                      "title": null,
                      "unreadMessages": 0
                    },
                    "hasAnsweredQuestions": false,
                    "hasBeenSentReturnMessage": true,
                    "id": 13406507,
                    "inStore": true,
                    "isFixed": false,
                    "joinedTime": "2017-01-18T17:09:29.000Z",
                    "lastSMSStatus": null,
                    "numberSentReturnMessage": 1,
                    "originalExpectedTime": "2017-01-18T18:19:01.000Z",
                    "product": {
                      "averageServeTimeMinutes": 10,
                      "colour": null,
                      "id": 22204,
                      "name": "TestProduct1"
                    },
                    "productDescription": null,
                    "timeArrivedInStore": null,
                    "timeSentReturnMessage": "2017-08-10T17:06:43.000+01:00",
                    "waitTime": null,
                    "waitTimePercentComplete": 100
                  }
            
                  const db = getDatabase(app);
                  const customerRef = ref(db, 'queueData/queue/customersToday/' + newID);
                  set(customerRef, newData).then(() => {
                    resolve()
                  })
        })
    });
}