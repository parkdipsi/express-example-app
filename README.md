# Simple Formulir Back-end App!
This repository is intended as a resource for the `BootCamp CC#1 GDSC Telkom University` 
> GDSC Telkom University Core Team

## General
This APIs was developed using:
- Node.Js v18.13.0
- Express v4.18.2
- Supabase PostgreSQL

### How to run this APIs
- Clone this project to your GCP project’s repository
```bash
git clone https://github.com/hiskandaryps/express-example-app
``` 
- Install all the required depedencies
```bash
npm install
``` 
- Provide the required data for the `.env` file, that consist of : `SUPABASE_URL`, `SUPABASE_KEY`, `PORT`
- Run the back-end application
```bash
npm start
``` 
## APIs Documentation
<details>
<summary>getAllComplaints</summary>
Request:

- Method: `GET`
- Endpoint: `/v1/forms/complaints`
- Body: `none`

Response:
```json
{
    "code": 200,
    "message": null,
    "data": [
        {
            "id": id,
            "nama": "name",
            "kelas": "class",
            "fakultas": "faculty",
            "jurusan": "major",
            "keluhan": "complaint",
            "inserted_at": "timestamp"
        }, etc...
    ]
}
```
</details>
<details>
<summary>getComplaintById</summary>
Request:

- Method: `GET`
- Endpoint: `/v1/forms/complaints?id={id}`
- Body: `none`

Response:
```json
{
    "code": 200,
    "message": null,
    "data": [
        {
            "id": id,
            "nama": "name",
            "kelas": "class",
            "fakultas": "faculty",
            "jurusan": "major",
            "keluhan": "complaint",
            "inserted_at": "timestamp"
        }
    ]
}
```
</details>
<details>
<summary>postComplaint</summary>
Request:

- Method: `POST`
- Endpoint: `/v1/forms/complaints`
- Body:
```json
{
    "nama": "your name",
    "kelas": "your class",
    "fakultas": "your faculty",
    "jurusan": "your major",
    "keluhan": "your complaint"
}
```

Response:
```json
{
    "code": 201,
    "message": "complaint created",
    "data": {
        "id": id,
        "nama": "your name",
        "kelas": "your class",
        "fakultas": "your faculty",
        "jurusan": "your major",
        "keluhan": "your complaint",
        "inserted_at": "timestamp"
    }
}
```
</details>
<details>
<summary>putDataById</summary>
Request:

- Method: `PUT`
- Endpoint: `/v1/forms/complaints?id={id}`
- Body:
```json
{
    "nama": "your name",
    "kelas": "your class",
    "fakultas": "your faculty",
    "jurusan": "your major",
    "keluhan": "your complaint"
}
```

Response:
```json
{
    "code": 200,
    "message": null,
    "data": {
        "id": id,
        "nama": "your name",
        "kelas": "your class",
        "fakultas": "your faculty",
        "jurusan": "your major",
        "keluhan": "your complaint",
        "inserted_at": "timestamp"
    }
}
```
</details>
<details>
<summary>deleteDataById</summary>
Request:

- Method: `DELETE`
- Endpoint: `/v1/forms/complaints?id={id}`
- Body: `none`

Response:
```json
{
    "code": 200,
    "message": "complaint deleted",
    "data": {
        "id": id,
        "nama": "name",
        "kelas": "class",
        "fakultas": "faculty",
        "jurusan": "major",
        "keluhan": "complaint",
        "inserted_at": "timestamp"
    }
}
```
</details>
