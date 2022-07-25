import React from 'react';


const SemesterProgressBar = () => {
    const SEMESTER_DAYS = 126;
    let indexDay = 0;
    let currentDay = new Date("2022-06-01");
    
    while (currentDay.getDate() !== new Date().getDate()) {
        currentDay.setDate(currentDay.getDate() + 1)
        indexDay += 1; 
    }

    let percentageDay = ((indexDay/SEMESTER_DAYS)*100).toFixed(1)
    
    
  return (
    <div className='SemesterProgressBar'>
        <div className='Percentage-value'>
            <h1>
                Semester Progress
            </h1>
            <div className='SemesterProgressBar-value'>
                <h1>
                    {
                        percentageDay
                    }
                    %
                </h1>
            </div>

        </div>
    </div>
  )
}



export default SemesterProgressBar;
