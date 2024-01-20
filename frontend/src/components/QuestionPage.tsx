import React, { useEffect, useState } from 'react';

interface QuestionPageProps{
    page: number
}

function QuestionPage({page}: QuestionPageProps){
    return (
        <div style={{width:'100%'}}>
            <h2 style={{ marginLeft: '10px' }}>{page} of 4</h2>
        <div style={{display:'flex' , width:'100%',height: 5, alignSelf: 'flex-start'}}>
            <div 
            style={{backgroundColor: page > 0 ? "green" : 'grey', flexGrow:1, margin: '0 5px', borderRadius: '10px', boxShadow: page === 1 ? '0 0 10px rgba(0, 255, 0, 0.5)' : 'none'}}>
            {/* <h2> Page 1 of 4</h2> */}
            </div>
            <div style={{backgroundColor: page > 1 ? "green" : 'grey', flexGrow:1, margin: '0 5px', borderRadius: '10px', boxShadow: page === 2 ? '0 0 10px rgba(0, 255, 0, 0.5)' : 'none'}}>
            {/* <h2> Page 2 of 4</h2> */}
            </div>
            <div style={{backgroundColor: page > 2 ? "green" : 'grey', flexGrow:1, margin: '0 5px', borderRadius: '10px', boxShadow: page === 3 ? '0 0 10px rgba(0, 255, 0, 0.5)' : 'none'}}>
            {/* <h2> Page 3 of 4</h2> */}
            </div>
            <div style={{backgroundColor: page > 3 ? "green" : 'grey', flexGrow:1, margin: '0 5px', borderRadius: '10px', boxShadow: page === 4 ? '0 0 10px rgba(0, 255, 0, 0.5)' : 'none'}}>
            {/* <h2> Page 4 of 4</h2> */}
            </div>
            <div style={{backgroundColor: page > 3 ? "green" : 'grey', flexGrow:1, margin: '0 5px', borderRadius: '10px', boxShadow: page === 4 ? '0 0 10px rgba(0, 255, 0, 0.5)' : 'none'}}>
            {/* <h2> Page 4 of 4</h2> */}
            </div>
        </div>
        </div>
    )
}
export default QuestionPage;