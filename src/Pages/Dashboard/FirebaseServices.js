import firebase from '../../base';

export default class FirebaseService {
    static getDataList = (nodePath, callback, size = 10) => {

        let query = firebase.database.ref(nodePath)
                                   .limitToLast(size);        
            query.on('value', dataSnapshot => {
                let items = [];
                
                dataSnapshot.forEach(childSnapshot => {
                    let item = childSnapshot.val();
                    item['key'] = childSnapshot.key;
                    items.push(item);
            });
            callback(items);
        });

        return query;
    };

}