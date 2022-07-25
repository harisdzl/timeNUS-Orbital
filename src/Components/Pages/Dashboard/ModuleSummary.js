import React, {useContext} from 'react';
import { Table } from 'react-bootstrap';
import { DashboardContext } from '../../../Context/DashboardContext';
import TableRowComponent from './TableRowComponent';

export default function ModuleSummary() {
    const { dashboard } = useContext(DashboardContext); 

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
