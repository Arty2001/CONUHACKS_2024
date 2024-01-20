import React, { useEffect, useState } from 'react';

interface QuestionPageProps{
    page: number
}

function QuestionPage({page}: QuestionPageProps){
    return (
        <div style={{display:'flex' , width:'100%',height: 5, alignSelf: 'flex-start'}}>
            <div style={{backgroundColor: page > 0 ? "green" : 'grey', flexGrow:1, margin: '0 5px'}}>
                <h2> Page 1 of 4</h2>
            </div>
            <div style={{backgroundColor: page > 1 ? "green" : 'grey', flexGrow:1, margin: '0 5px'}}>
            </div>
            <div style={{backgroundColor: page > 2 ? "green" : 'grey', flexGrow:1, margin: '0 5px'}}>
            </div>
            <div style={{backgroundColor: page > 3 ? "green" : 'grey', flexGrow:1, margin: '0 5px'}}>
            </div>
        </div>
    )
}
export default QuestionPage;