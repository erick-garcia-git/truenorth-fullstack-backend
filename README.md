### TRUE NORTH BACKEND

```
Tested in node v8.4.0
1. npm install
2. rename env file to .env: 
3. npm run dev ( server will start listening to port 4000 )
4. npx pm2 logs index ( this will show you the logs of the server )

GET /tasks 
GET /tasks?quantity=6
PUT /tasks
{
  id: "mongo id generated in get request",
  title: "task title to mark as completed"
}
```
