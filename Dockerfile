FROM python:3.10.11-slim-buster

RUN mkdir app
WORKDIR /app

COPY . .

RUN pip install --upgrade pip
RUN pip install -r requirements.txt
RUN python3 manage.py makemigrations

CMD ["python3", "manage.py", "runserver","0.0.0.0:8000"]