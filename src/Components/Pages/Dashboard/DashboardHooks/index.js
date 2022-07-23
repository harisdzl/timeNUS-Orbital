import { collection, onSnapshot, query, where } from 'firebase/firestore';
import React, {useState, useEffect} from 'react'
import { auth, db } from '../../../../firebase';


export const useDashboard = () => {
    const [dashboard, setDashboard] = useState([]);

    useEffect(() => {
        const dashboardQuery = query(collection(db, 'dashboard'), where("userUID", "==", auth.currentUser.uid)) 
        let unsubscribe = onSnapshot(dashboardQuery, (snapshot) => {
            const data = snapshot.docs.map((doc) => {
                return {
                    id : doc.id,
                    userUID : auth.currentUser.uid, 
                    module : doc.get('module'),
                    lecture : doc.get('lecture'),
                    tutorial : doc.get('tutorial'),
                    midterms : doc.get('midterms'), 
                    finals : doc.get('finals')
                }
            })
            setDashboard(data)
        })
        return () => unsubscribe();
    }, [])
    return dashboard;
}