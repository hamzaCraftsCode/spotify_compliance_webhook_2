from fastapi import FastAPI
app = FastAPI()

@app.post("/submit")
async def submit_item():
    return '''
        <h1>Connect your Shopify store</h1>
    '''
    # return {"status": 200, "message": "Request received successfully"}
