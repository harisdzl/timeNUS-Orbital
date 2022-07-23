import React, {useContext} from 'react';
import { Table } from 'react-bootstrap';
import { DashboardContext } from '../../../Context/DashboardContext';
import TableRowComponent from './TableRowComponent';

export default function ModuleSummary() {
    const { dashboard } = useContext(DashboardContext); 
    console.log(dashboard)
    // const moduleSummary = [
    //     { module : "cs2030", 
    //     lecture : "Mon - 10-12", 
    //     tutorials : "Wed (REC), Fri (LAB)", 
    //     grading : "Weekly Labs - 10%, Individual Project - 10%, PA1 - 15%, PA2 - 20%, Class Part - 5%, Final Exam - 40%", 
    //     midterms : "PA-1 (28/02/2022), PA-2 (04/04/22)",
    //     finals : "30/04/2022"
    //     }
    // ]

    const handleClick = (e) => {
        e.preventDefault();
    }
  return (
    <div className='ModuleSummary'>
         <Table bordered hover>
            <thead>
                <tr>
                    <th>Module</th>
                    <th>Lecture</th>
                    <th>Tutorial</th>
                    <th>Midterms</th>
                    <th>Finals</th>

                </tr>
            </thead>
            <tbody>
                {
                dashboard.map((module) => 
                    <TableRowComponent 
                        item={module}
                        key={module.id}
                    />
                )}
            </tbody>
         </Table>
    </div>
  )
}
