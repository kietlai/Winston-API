import express from 'express';
import PocketBase from 'pocketbase';

const pb = new PocketBase('http://127.0.0.1:8090/');

const application = express();
application.use(express.json());
 
application.post('/PBWrite', async function(req, res){
    let data = {
        "name": req.body["name"],
        "title": "savedData",
        "q1": req.body["q1"],
        "q2": req.body["q2"],
        "q3": req.body["q3"],
        "q4": req.body["q4"],
        "final": req.body["final"]
    };
    const record = await pb.collection('posts').create(data);
    res.send("1");
    res.end();
});

application.post('/PBRead', async function(req, res){
    const record1 = await pb.collection('posts').getFirstListItem('name="'+req.body["name"]+'"', {
        expand: 'relField1,relField2.subRelField',
    });
    const record2 = await pb.collection('posts').getOne(record1["id"], {
        expand: 'relField1,relField2.subRelField',
    });
    
    if(req.body["q"] == 5){
        res.send(record2["final"]);
        res.end();
    }else{
        res.send(record2['q'+req.body["q"]]);
        res.end();
    }
});

application.post('/PBEdit', async function(req, res){
    let record1 = await pb.collection('posts').getFirstListItem('name="'+req.body["name"]+'"', {
        expand: 'relField1,relField2.subRelField',
    });
    if(req.body["mode"] == 1){
        if(req.body["add"][5] == 5){
            record1["final"]["perc"].push(req.body["add"][7])
            record1["final"]["class"].push(req.body["add"][6])
            let data = {
                "final": record1["final"]
            }
            const record2 = await pb.collection('posts').update(record1["id"], data);
            res.send('5');
            res.end();
            return
        }

        record1["q"+req.body["add"][5]]["fgrade"].push(req.body["add"][1])
        record1["q"+req.body["add"][5]]["gGrade"].push(req.body["add"][0])
        record1["q"+req.body["add"][5]]["name"].push(req.body["add"][3])
        record1["q"+req.body["add"][5]]["redo"].push(req.body["add"][2])
        record1["q"+req.body["add"][5]]["weight"].push(req.body["add"][4])
        record1["q"+req.body["add"][5]]["class"].push(req.body["add"][6])

        if("q"+req.body["add"][5] == "q1"){
            let data = {
                "q1": record1["q"+req.body["add"][5]]
            }
            const record2 = await pb.collection('posts').update(record1["id"], data);
        }else if("q"+req.body["add"][5] == "q2"){
            let data = {
                "q2": record1["q"+req.body["add"][5]]
            }
            const record2 = await pb.collection('posts').update(record1["id"], data);
        }else if("q"+req.body["add"][5] == "q3"){
            let data = {
                "q3": record1["q"+req.body["add"][5]]
            }
            const record2 = await pb.collection('posts').update(record1["id"], data);
        }else if("q"+req.body["add"][5] == "q4"){
            let data = {
                "q4": record1["q"+req.body["add"][5]]
            }
            const record2 = await pb.collection('posts').update(record1["id"], data);
        }
        
        res.send('1');
        res.end();
    }else if(req.body["mode"] == 2){
        if(req.body["add"][5] == 5){
            record1["final"]["perc"] = req.body["mod"][8]
            record1["final"]["class"] = req.body["mod"][7]
            let data = {
                "final": record1["final"]
            }
            const record2 = await pb.collection('posts').update(record1["id"], data);
            res.send('5');
            res.end();
            return
        }

        record1["q"+req.body["mod"][6]]["fgrade"][req.body["mod"][0]-1] = req.body["mod"][2];
        record1["q"+req.body["mod"][6]]["gGrade"][req.body["mod"][0]-1] = req.body["mod"][1];
        record1["q"+req.body["mod"][6]]["name"][req.body["mod"][0]-1] = req.body["mod"][4];
        record1["q"+req.body["mod"][6]]["redo"][req.body["mod"][0]-1] = req.body["mod"][3];
        record1["q"+req.body["mod"][6]]["weight"][req.body["mod"][0]-1] = req.body["mod"][5];
        record1["q"+req.body["mod"][6]]["class"][req.body["mod"][0]-1] = req.body["mod"][7];

        if("q"+req.body["add"][5] == "q1"){
            let data = {
                "q1": record1["q"+req.body["add"][5]]
            }
            const record2 = await pb.collection('posts').update(record1["id"], data);
        }else if("q"+req.body["add"][5] == "q2"){
            let data = {
                "q2": record1["q"+req.body["add"][5]]
            }
            const record2 = await pb.collection('posts').update(record1["id"], data);
        }else if("q"+req.body["add"][5] == "q3"){
            let data = {
                "q3": record1["q"+req.body["add"][5]]
            }
            const record2 = await pb.collection('posts').update(record1["id"], data);
        }else if("q"+req.body["add"][5] == "q4"){
            let data = {
                "q4": record1["q"+req.body["add"][5]]
            }
            const record2 = await pb.collection('posts').update(record1["id"], data);
        }
        
        res.send('2');
        res.end();
    }else if(req.body["mode"] == 3){
        await pb.collection('posts').delete(record1["id"]);
        res.send("3");
        res.end();
    }else{
        console.log('err: mode call '+req.body["mode"]+' is not an option')
        res.send();
        res.end();
    }
});
 
application.listen(8080, function(){
    console.log("Application initialized.");
});