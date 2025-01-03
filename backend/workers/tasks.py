import whisper
from .celery_app import celery_app

@celery_app.task(name='tasks.transcribe_audio_task')
def transcribe_audio_task(audio_path: str) -> str:
    model = whisper.load_model('base')

    audio = whisper.load_audio(audio_path)
    audio = whisper.pad_or_trim(audio)

    mel = whisper.log_mel_spectrogram(audio,n_mels=model.dims.n_mels).to(model.device)

    _, probs = model.detect_language(mel)
    print(f"Detected language: {max(probs, key=probs.get)}")

    options = whisper.DecodingOptions()
    result = whisper.decode(model, mel, options)

    return(result.text)