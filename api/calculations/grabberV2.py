import json

#Build below is the class grader
def grabber(data):
  #grabs all of the data and reduces down and checks
  #loops to get the data
  for i, t in  enumerate(data["gradeData"]["course"]):
    for k, t in  enumerate(data["gradeData"]["course"][i]):
      for c, t in  enumerate(data["gradeData"]["course"][i][k]["grades"]):
        for z, t in enumerate(data["gradeData"]["course"][i][k]["grades"][c]):
          for l, t in enumerate(data["gradeData"]["course"][i][k]["grades"][c][z]["work"]):

            #Adds to lists

            data["gradeData"]["course"][i][k]["grades"][c][z]["info"]["topGrade"].append(data["gradeData"]["course"][i][k]["grades"][c][z]["work"][l]["gGrade"])
            data["gradeData"]["course"][i][k]["grades"][c][z]["info"]["maxGrade"].append(data["gradeData"]["course"][i][k]["grades"][c][z]["work"][l]["fGrade"])
            
            #Fixes all data for top
            if (isinstance(data["gradeData"]["course"][i][k]["grades"][c][z]["work"][l]["gGrade"], int)):
              data["gradeData"]["course"][i][k]["grades"][c][z]["work"][l]["wGivenGrade"] = data["gradeData"]["course"][i][k]["grades"][c][z]["work"][l]["gGrade"]*data["gradeData"]["course"][i][k]["grades"][c][z]["info"]["weight"]
              

            elif(isinstance(data["gradeData"]["course"][i][k]["grades"][c][z]["work"][l]["gGrade"], bool)):
              data["gradeData"]["course"][i][k]["grades"][c][z]["work"][l]["wGivenGrade"] = False

            #Fixes all data for buttom
            if (isinstance(data["gradeData"]["course"][i][k]["grades"][c][z]["work"][l]["fGrade"], int)):
              data["gradeData"]["course"][i][k]["grades"][c][z]["work"][l]["wFullGrade"] = data["gradeData"]["course"][i][k]["grades"][c][z]["work"][l]["fGrade"]*data["gradeData"]["course"][i][k]["grades"][c][z]["info"]["weight"]
              

            elif(isinstance(data["gradeData"]["course"][i][k]["grades"][c][z]["work"][l]["gGrade"], bool)):
              data["gradeData"]["course"][i][k]["grades"][c][z]["work"][l]["wFullGrade"] = False
            
            #Adds more data for weighted things
            data["gradeData"]["course"][i][k]["grades"][c][z]["info"]["weightedTopGrade"].append(data["gradeData"]["course"][i][k]["grades"][c][z]["work"][l]["wGivenGrade"])
            data["gradeData"]["course"][i][k]["grades"][c][z]["info"]["weightedMaxGrade"].append(data["gradeData"]["course"][i][k]["grades"][c][z]["work"][l]["wFullGrade"])
            
            print(l, t)
          print(data["gradeData"]["course"][i][k]["grades"][c][z]["info"]["weightedMaxGrade"])
          print(data["gradeData"]["course"][i][k]["grades"][c][z]["info"]["weightedTopGrade"])
  return data


