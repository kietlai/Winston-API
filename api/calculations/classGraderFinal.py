
def subCats(data):
  for i, t in  enumerate(data["gradeData"]["course"]):
    for k, t in  enumerate(data["gradeData"]["course"][i]):
      for c, t in  enumerate(data["gradeData"]["course"][i][k]["grades"]):
        for z, t in enumerate(data["gradeData"]["course"][i][k]["grades"][c]):
          grade = data["gradeData"]["course"][i][k]["grades"][c][z]["info"]["weightedTopGradeTotal"]/data["gradeData"]["course"][i][k]["grades"][c][z]["info"]["weightedMaxGradeTotal"]
          return grade

#make a unprefered slower version that is the backup