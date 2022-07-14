import React, {useState} from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import { PencilSquare } from 'react-bootstrap-icons';
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState, convertToRaw, convertFromRaw, ContentState} from 'draft-js';
import { collection, query, where, getDocs, setDoc, doc, getDoc, onSnapshot } from 'firebase/firestore';
import { db } from '../../../firebase';
import { useContext } from 'react';
import { PmsContext } from '../../../Context/PmsContext';
import { useEffect } from 'react';
import { useDocumentOnce } from 'react-firebase-hooks/firestore'
import { convertToObject } from 'typescript';
import { data } from 'autoprefixer';


const EditAgenda = () => {
    //CONTEXTS

    const { selectedGroup, agendas, selectedGroupId } = useContext(PmsContext);
    
    //STATES
    const [text, setText] = useState("");
    const [editorState, setEditorState] = useState(EditorState.createEmpty());

    const getAgenda = () => {
        for (let i = 0; i < agendas.length; i++) {
            if (agendas[i] === undefined) {
                continue;
            }
            if (agendas[i].groupId === selectedGroup && agendas[i] !== undefined) {
                const snapshot = agendas[i];
                return snapshot 
            }
        }
    }

    

    const snapshot = getAgenda();

    useEffect( () => {
        if (snapshot !== undefined && snapshot.editorState !== undefined) {
            setEditorState(
                EditorState.createWithContent(
                    convertFromRaw(
                        snapshot.editorState
                    )
                )
            )
        }

    }, [snapshot !== undefined])


    const onEditorStateChange = (editorState) => {
      setEditorState(editorState);
      const agendaRef = collection(db, 'agendas');
      const agendaQuery = query(agendaRef, where("groupId", "==", selectedGroup))
      getDocs(agendaQuery).then((querySnapshot) => {
        querySnapshot.forEach( (doc) => {
              setDoc(doc.ref, {
                  editorState : convertToRaw(editorState.getCurrentContent())
              }, {
                merge : true
              })
          })
      })
    }



  return (
    <div className='EditAgenda'>
        <Editor 
            editorState={editorState}
            onEditorStateChange={onEditorStateChange}
            toolbarClassName="flex stick top-0 z-50 !justify-center mx-auto"
            editorClassName='mt-3 p-3 bg-white shadow-md max-w-5xl mx-auto mb-12 border'
        />
    </div>
  )
}



export default EditAgenda;