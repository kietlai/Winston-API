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
 
application.listen(8080, function(){
    console.log("Application initialized.");
});