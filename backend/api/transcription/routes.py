import os
from fastapi import APIRouter, Depends, HTTPException, UploadFile, status
from workers.tasks import transcribe_audio_task

router = APIRouter(prefix='/transcription', tags=['Transcription'])

UPLOAD_DIR = 'uploads/'
os.makedirs(UPLOAD_DIR, exist_ok=True)

@router.post('/')
async def transcription_audio(file: UploadFile):
    file_path = os.path.join(UPLOAD_DIR, file.filename)
    with open(file_path, 'wb') as buffer:
        buffer.write(await file.read())
    
    task = transcribe_audio_task.delay(file_path)

    return {'task_id': task.id, 'message': 'Transcription in progress'}

@router.get('/task-status/{task_id}')
def get_task_status(task_id: str):
    task_result = transcribe_audio_task.AsyncResult(task_id)
    if task_result.state == 'PENDING':
        return {'status':'Task is pending'}
    elif task_result.state == 'SUCCESS':
        return {'status': 'Task completed', 'result': task_result.result}
    else:
        return {'status': 'Task is still processing'}