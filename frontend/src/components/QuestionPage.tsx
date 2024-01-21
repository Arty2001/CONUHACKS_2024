import React, { useEffect, useState } from "react";

interface QuestionPageProps {
  page: number;
}

function QuestionPage({ page }: QuestionPageProps) {
  return (
    <div style={{ marginTop: "50px", width: "100%" }}>
      <div
        style={{
          display: "flex",
          width: "600px",
          height: 5,
          alignSelf: "center",
          margin: "auto",
        }}
      >
        <div
          style={{
            backgroundColor: page > 0 ? "green" : "grey",
            flexGrow: 1,
            margin: "0 5px",
            borderRadius: "10px",
            boxShadow: page === 1 ? "0 0 10px rgba(0, 255, 0, 0.5)" : "none",
          }}
        ></div>
        <div
          style={{
            backgroundColor: page > 1 ? "green" : "grey",
            flexGrow: 1,
            margin: "0 5px",
            borderRadius: "10px",
            boxShadow: page === 2 ? "0 0 10px rgba(0, 255, 0, 0.5)" : "none",
          }}
        ></div>
        <div
          style={{
            backgroundColor: page > 2 ? "green" : "grey",
            flexGrow: 1,
            margin: "0 5px",
            borderRadius: "10px",
            boxShadow: page === 3 ? "0 0 10px rgba(0, 255, 0, 0.5)" : "none",
          }}
        ></div>
        <div
          style={{
            backgroundColor: page > 3 ? "green" : "grey",
            flexGrow: 1,
            margin: "0 5px",
            borderRadius: "10px",
            boxShadow: page === 4 ? "0 0 10px rgba(0, 255, 0, 0.5)" : "none",
          }}
        ></div>
        <div
          style={{
            backgroundColor: page > 4 ? "green" : "grey",
            flexGrow: 1,
            margin: "0 5px",
            borderRadius: "10px",
            boxShadow: page === 5 ? "0 0 10px rgba(0, 255, 0, 0.5)" : "none",
          }}
        ></div>
        <div
          style={{
            backgroundColor: page > 5 ? "green" : "grey",
            flexGrow: 1,
            margin: "0 5px",
            borderRadius: "10px",
            boxShadow: page === 6 ? "0 0 10px rgba(0, 255, 0, 0.5)" : "none",
          }}
        ></div>
      </div>
    </div>
  );
}
export default QuestionPage;
