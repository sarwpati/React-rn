import React from "react";
import ReactDOM from "react-dom/client";


function App(){ 
    return( 
        <>

            <div
              className="middle"
              style={{ display: "flex", flexWrap: "wrap" }}
            > 
                <Card offer="10-40%off" cloth="sari"/>
                <Card offer="10-40%off" cloth="pajama"/>
                <Card offer="10-45%off" cloth="kurta"/>
                <Card offer="15-40%off" cloth="suit"/>
                <Card offer="17-80%off" cloth="blesure"/>
                <Card offer="10-40%off" cloth="hoodi"/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>

            

        </>
    )
};

const ROOT = ReactDOM.createRoot(
    document.getElementById("root")
);

ROOT.render(<App />);