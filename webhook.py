from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

class Item(BaseModel):
    name: str
    description: str = None

@app.post("/submit")
async def submit_item(item: Item):
    return {"status": 200, "message": "Request received successfully"}
