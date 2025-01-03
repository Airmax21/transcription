# Transcription

## **Your AI-Assist Audio Text**

## Requirements

1. Python v3.12 / newer
2. Node v20 / newer
3. Redis Server
4. Docker (Optional)

## Install

### Backend

- Move directory to directory backend

```bash
cd backend
```

- Create new python environment

```bash
python3 -m venv <environ>
```

- Activate environment

```bash
#Linux
source <environ>/bin/activate

#Windows
.\<environ>\Scripts\activate.bat
```

- Install all dependency with python

```bash
pip install -r requirements.txt
```

- Copy .env.example to .env

```bash
cp .env.example .env
```

- Set env
- Run Celery Worker

```bash
celery -A workers.celery_app worker --loglevel=info
```

- Run Backend Services

```bash
uvicorn main:app
```

### Frontend

- Move directory to directory frontend

```bash
cd frontend
```

- Install all dependency

```bash
npm install
```

- Build App

```bash
npm run build
```

- Run app

```bash
npm run start
```

## Tech Stack

- FastApi (Backend)
- Next.JS (Frontend)
- Antd (Components)
- Redux (State Management)
- Redis (Celery Worker)