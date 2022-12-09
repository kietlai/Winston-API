from typing import Union
from fastapi import FastAPI, requests
from pydantic import BaseModel

class Item(BaseModel):
  gradeData: dict
  


app = FastAPI()



@app.get('/item/')
async def read_root(): 
  pass