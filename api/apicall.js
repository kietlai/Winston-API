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
                "name": [],
                "class": []
            },
            "q2": {
                "gGrade": [],
                "fgrade": [],
                "weight": [],
                "redo": [],
                "name": [],
                "class": []
            },
            "q3": {
                "gGrade": [],
                "fgrade": [],
                "weight": [],
                "redo": [],
                "name": [],
                "class": []
            },
            "q4": {
                "gGrade": [],
                "fgrade": [],
                "weight": [],
                "redo": [],
                "name": [],
                "class": []
            },
            "final": {
                "perc": [],
                "class": []
            }
        }),
        // Adding headers to the request - important, for some reason :(
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then(response => response.json())
    .then(json => console.log(json));
}

function PBRead(z, q, c){
    fetch("http://127.0.0.1:8080/PBRead", {
        method: "post",
        body: JSON.stringify({
            "name": z,
            "q": q,
            "c": c
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then(response => response.json())
    .then(json => console.log(json));
}

function PBEdit(w, m, n, mx, gg, tf, ttl, kg, q, c, f){
    fetch("http://127.0.0.1:8080/PBEdit", {
        method: "post",
        body: JSON.stringify({
            "name": w,
            //1 = add, 2 = mod, 3 = del - assignments
            "mode": m,
            "add": [gg, mx, tf, ttl, kg, q, c, f],
            "mod": [n, gg, mx, tf, ttl, kg, q, c, f],
            "del": n
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then(response => response.json())
    .then(json => console.log(json));
}

//PBEdit("greg"/*name*/, 1/*mode*/, null/*asignment number*/, 200/*max grade*/, 198/*given Grade*/, false/*redo true falase*/, "Test U4"/*assignment name*/, 3/*weight*/, 1/*quarter*/, 1/*class#*/, 78/*final%*/) //add
//PBEdit("greg"/*name*/, 2/*mode*/, 2/*asignment number*/, 200/*max grade*/, 178/*given Grade*/, false/*redo true falase*/, "Test U4"/*assignment name*/, 3/*weight*/, 5/*quarter*/, 2/*class#*/, 79/*final%*/) //mod
//PBEdit("nate"/*name*/, 3/*mode*/) //del

//edit details: name, edit mode, assignment number, max grade, given grade, redo true false, assignment title, weight(7 or 3), quarter(if 5 final), class number, final

//PBRead("greg"/*name*/, 4/*quarter*/, 1/*class#*/)
PBWrite("greg"/*name*/)