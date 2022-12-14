const Q1 = "A";
const Q2 = "A";
const Q3 = "A";
const Q4 = "A";

const FG = "A";

function GCalculate (FQ1, FQ2, FQ3, FQ4, FFG){
    const Added = FQ1 + FQ2 + FQ3 + FQ4;
    let pointVal = 0;

    const aq = (Added.split("A").length - 1)*12;
    const bq = (Added.split("B").length - 1)*9;
    const cq = (Added.split("C").length - 1)*6;
    const dq = (Added.split("D").length - 1)*3;
    pointVal = pointVal + aq + bq + cq + dq

    if(FFG === "A"){
        pointVal += 8
    }else if(FFG === "B"){
        pointVal += 6
    }else if(FFG === "C"){
        pointVal += 4
    }else if(FFG === "D"){
        pointVal += 2
    }

    if(pointVal <= 7){
        return "E"
    }else if(pointVal <= 22){
        return "D"
    }else if(pointVal <= 35){
        return "C"
    }else if(pointVal <= 49){
        return "B"
    }
    
    return "A"
    
}

//export to frontend using function> GCalculate (Q1, Q2, Q3, Q4, FG)
//console.log(GCalculate (Q1, Q2, Q3, Q4, FG))
throw new Error(GCalculate (Q1, Q2, Q3, Q4, FG))