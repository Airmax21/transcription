import os
from dotenv import load_dotenv
from celery import Celery

load_dotenv()

BROKER = os.getenv('BROKER')

celery_app = Celery(
    'transcription_worker',
    broker=BROKER,
    backend=BROKER
)


celery_app.autodiscover_tasks(["workers.tasks.transcribe_audio_task"])
# celery_app.conf.task_routes = {
#     "tasks.transcribe_audio_task": {"queue": "transcription"},
# }