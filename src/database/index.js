'use strict';
const _ = require('lodash');
const db = require('./db.js');


// UTILS
//----------------
// This is a mock db call that waits for # milliseconds and returns
const mockDBCall = (dataAccessMethod) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(dataAccessMethod());
        }, 500);
    });
};

// MOCK DB CALLS
//----------------
const getUsers = () => {
    const dataAccessMethod = () => _.map(db.usersById, userInfo => userInfo)
    return mockDBCall(dataAccessMethod);
};

const getItems = () => {
    const dataAccessMethod = () => {
        const itemArray = Object.values(db.itemsOfUserByUsername).join().split(',')
        const items = [...new Set(itemArray)]
        return items
    }
    return mockDBCall(dataAccessMethod);
};

const getListOfAgesOfUsersWith = (item) => {
    const dataAccessMethod = () => {
        // should return objects array: [{age:12, count:1}, {age:18, count:1}]
        let listOfAgesOfUserWithItem = []
        // step 1: get user/age pairs array
        const user_age = Object.values(db.usersById)

        // step 2: create dictionary and make item name as key
        const itemsWithAgeCount = {}
        for (let i of Object.entries(db.itemsOfUserByUsername)) {
            const [username, items] = i
            items.map((item) => {
                if (itemsWithAgeCount.hasOwnProperty(item)) {
                    itemsWithAgeCount[item].push(username)
                } else {
                    itemsWithAgeCount[item] = [username]
                }
            })
        }

        // step 3: add age/count pairs as item's value
        for (let i of Object.entries(itemsWithAgeCount)) {
            const [item, users] = i
            users.map((user, index) => {
                const [userWithAge] = user_age.filter(ele => ele.username === user)
                itemsWithAgeCount[item][index] = {
                    age: userWithAge.age
                }
            })
        }

        // count age and add the count as new property
        for (let i in itemsWithAgeCount) {
            itemsWithAgeCount[i] = itemsWithAgeCount[i].reduce(function (acc, item) {
                let found = false;
                for (var i = 0; i < acc.length; i++) {
                    if (acc[i].age === item.age) {
                        found = true;
                        acc[i].count++;
                    }
                }
                if (!found) {
                    item.count = 1;
                    acc.push(item);
                }
                return acc;
            }, [])
        }

        // step 4: convert object to object array then return
        // return data sample: [ {carrot: [{age: 18, count: 1}]}, ... ]
        const resultData = Object.entries(itemsWithAgeCount).map(([key, value]) => ({
            [key]: value
        }));
        console.log('Data ready');

        return resultData;

    }
    return mockDBCall(dataAccessMethod);
}

module.exports = {
    getUsers,
    getItems,
    getListOfAgesOfUsersWith
};