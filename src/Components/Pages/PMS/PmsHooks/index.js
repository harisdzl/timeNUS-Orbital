import { useState, useEffect } from 'react'
import { auth, db } from '../../../../firebase';
import { query, onSnapshot, addDoc, orderBy, startAt, endAt, collection, doc, setDoc, Timestamp, where} from 'firebase/firestore';

export const useGroups = () => {
    const [groups, setGroups] = useState([]);

    useEffect(() => {
        const groupsQuery = query(collection(db, 'groups'), where("users", "array-contains", auth.currentUser.uid)) 
        let unsubscribe = onSnapshot(groupsQuery, (snapshot) => {
            const data = snapshot.docs.map((doc) => {
                return {
                    id : doc.id,
                    groupId : doc.get('groupId'),
                    name: doc.get('name'),
                    users : doc.get('users')
                }
            })
            setGroups(data)
        })
        return () => unsubscribe();
    }, [])
    return groups;

}