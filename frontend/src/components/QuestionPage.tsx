import React, { useEffect, useState } from 'react';

interface QuestionPageProps{
    page: number
}

function QuestionPage({page}: QuestionPageProps){
    return (
        <div style={{display:'flex' , width:'100%',height: 5}}>
            <div style={{backgroundColor: page > 0 ? "black" : 'red', flexGrow:1}}>
            </div>
            <div style={{backgroundColor: page > 2 ? "black" : 'red', flexGrow:1}}>
            </div>
            <div style={{backgroundColor: page > 1 ? "black" : 'red', flexGrow:1}}>
            </div>
            <div style={{backgroundColor: page > 2 ? "black" : 'red', flexGrow:1}}>
            </div>
        </div>
    )
}
export default QuestionPage;