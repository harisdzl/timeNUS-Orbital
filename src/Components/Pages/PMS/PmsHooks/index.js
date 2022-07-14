import { useState, useEffect } from 'react'
import { auth, db } from '../../../../firebase';
import { EditorState, convertToRaw, convertFromRaw } from 'draft-js';
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
                    users : doc.get('users'),
                }
            })
            setGroups(data)
        })
        return () => unsubscribe();
    }, [])
    return groups;
}

// export const useFilteredGroups = (groups, selectedGroup) => {
//     const [filteredGroups, setFilteredGroups] = useState([]);

//     useEffect( () => {
//         let data;
//         data = groups.filter( group => group.groupId === selectedGroup)
//         setFilteredGroups(data)
//     }, [groups, selectedGroup])
//     return filteredGroups;
// }

export const useLinks = (selectedGroup) => {
    const [links, setLinks] = useState([]);

    useEffect( () => {
        const linksQuery = query(collection(db, 'links'), where("groupId", "==", selectedGroup)) 
        let unsubscribe = onSnapshot(linksQuery, (snapshot) => {
            const data = snapshot.docs.map((doc) => {
                return {
                    id : doc.id,
                    groupId : doc.get('groupId'),
                    users : doc.get('users'),
                    name : doc.get('name'),
                    link : doc.get('link')
                }
            })
            setLinks(data)
        })
        return () => unsubscribe();
    }, [selectedGroup])
    return links;

}

export const useAgenda = (selectedGroup) => {
    const [agendas, setAgendas] = useState([]);

    useEffect(() => {
        const agendaQuery = query(collection(db, 'agendas'), where("groupId", "==", selectedGroup));
        let unsubscribe = onSnapshot(agendaQuery, (snapshot) => {
            const data = snapshot.docs.map( (doc) => {
                return {
                    id : doc.id,
                    groupId : doc.get('groupId'),
                    editorState : doc.get('editorState')
                }
            })
            setAgendas(data)
        })
        return () => unsubscribe();
    }, [selectedGroup])
    return agendas;
}


