from fastapi import FastAPI

app = FastAPI()
@app.get("/")
def read_root():
    return {"Message": "BMS APi is running on FatAPI"}