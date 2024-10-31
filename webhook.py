from fastapi import FastAPI
app = FastAPI()

@app.post("/submit")
async def submit_item():
    return {"status": 200, "message": "Request received successfully"}
