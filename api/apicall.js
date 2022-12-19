import fetch from "node-fetch";

function PBWrite(u){
    fetch("http://127.0.0.1:8080/PBWrite", {
        
        // Adding method type
        method: "post",

        // Adding body or contents to send
        body: JSON.stringify({
            "name": u,
            "q1": {
                "gGrade": [],
                "fgrade": [],
                "weight": [],
                "redo": [],
                "name": []
            },
            "q2": {
                "gGrade": [],
                "fgrade": [],
                "weight": [],
                "redo": [],
                "name": []
            },
            "q3": {
                "gGrade": [],
                "fgrade": [],
                "weight": [],
                "redo": [],
                "name": []
            },
            "q4": {
                "gGrade": [],
                "fgrade": [],
                "weight": [],
                "redo": [],
                "name": []
            },
            "final": []
        }),
        // Adding headers to the request - important, for some reason :(
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then(response => response.json())
    .then(json => console.log(json));
}

function PBRead(z, q){
    fetch("http://127.0.0.1:8080/PBRead", {
        method: "post",
        body: JSON.stringify({
            "name": z,
            "q": q
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then(response => response.json())
    .then(json => console.log(json));
}

PBRead("greg", 1)
//PBWrite("jim")

//read - name, quarter#
//write - name