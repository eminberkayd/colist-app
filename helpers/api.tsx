class API {
    getNotifications() {
        //return [];
        return [
            { id: 1, text: 'New Notificaasddddddddddddddddddddddddddddddddddddddddddddddddddddddddtiasdfasdfasfdasdfsadfasdfdasdasdddddddddddddddddddddddddddddddddddon 1', seen: false, user: "test-user" },
            { id: 2, text: 'New Notification 2', seen: false, user: "test-user" },
            { id: 3, text: 'New Notification 3', seen: false, user: "test-user" },
            { id: 4, text: 'New Notification 4', seen: false, user: "test-user" },
            { id: 5, text: 'New Notification 5', seen: false, user: "test-user" },
            { id: 6, text: 'New Notification 6', seen: false, user: "test-user" },
            { id: 7, text: 'New Notification 7', seen: false, user: "test-user" },
            { id: 8, text: 'New Notification 8', seen: false, user: "test-user" },
            { id: 9, text: 'New Notification 9', seen: false, user: "test-user" },
            { id: 122, text: 'New Notification 122', seen: false, user: "test-user" },
            { id: 46, text: 'New Notification W', seen: false, user: "test-user" },
            { id: 18465, text: 'New Notification W', seen: false, user: "test-user" },
            { id: 1541651, text: 'New Notification W', seen: false, user: "test-user" },
            { id: 19856, text: 'New Notification W', seen: false, user: "test-user" },
            { id: 1451, text: 'New Notification W', seen: false, user: "test-user" },
            { id: 15641, text: 'New Notification W', seen: false, user: "test-user" }
        ]
    }

    getLists() {
        return [
            { id: 1, name: "mylist", buyCount: 1 },
            { id: 2, name: "mylist2", buyCount: 3242354 },
            { id: 3, name: "mylist3", buyCount: 123123 },
            { id: 4, name: "mylist4", buyCount: 0 },
            { id: 7, name: "mylist7", buyCount: 0 },
            { id: 8, name: "mylist8", buyCount: 0 },
            { id: 99, name: "mylist99", buyCount: 0 },
            { id: 454, name: "mylist45", buyCount: 0 },
            { id: 4544, name: "mylist4 454", buyCount: 0 },
        ]
    }
}


export const api = new API();