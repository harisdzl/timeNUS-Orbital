import React from 'react';
import Navbar from '../../Navbar/Navbar';
import { Avatar } from '@mui/material';
import { Card, Container, Row } from 'react-bootstrap';
import CenteredContainer from '../../CenteredContainer';
import { query, onSnapshot, addDoc, orderBy, startAt, endAt, collection, doc, setDoc, getDoc, where} from 'firebase/firestore';
import './styles.css';
import { auth, db } from '../../../firebase';
import { useState } from 'react';
import { useEffect } from 'react';


const Profile = () => {
    const [course, setCourse] = useState("");
    const [username, setUsername] = useState("");
    const queryUser = query(collection(db, 'users'), where("uID", "==", auth.currentUser.uid));
    const unsubscribe = onSnapshot(queryUser, (querySnapshot) => {
        querySnapshot.forEach((doc) => {
            const course = doc.data().course;
            const userName = doc.data().username;
            setCourse(course)
            setUsername(userName)
        })
    })

    const email = auth.currentUser.email;
  return (
    <>
        <div>
            <Navbar />
        </div>
        <div className='Profile'>
            <div className='title'>
                <h1>
                    Profile Details
                </h1>
            </div>
            <div className='details'>
                <h3>
                    Username: {username}
                </h3>
                <h3>
                    Email: {email}
                </h3>
                <h3>
                    Course: {course}
                </h3>
            </div>
        </div>
    </>
  )
}

export default Profile;