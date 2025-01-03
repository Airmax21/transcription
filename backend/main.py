import os
from fastapi import FastAPI
from dotenv import load_dotenv
from fastapi.middleware.cors import CORSMiddleware
import api.transcription.routes

load_dotenv()

DEBUG = os.getenv('DEBUG')
TITLE = os.getenv('APP_NAME')
VERSION = os.getenv('VERSION')

app = FastAPI(
    title=TITLE,
    version=VERSION,
    debug=DEBUG
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
    allow_credentials=True
)

app.include_router(api.transcription.routes.router)