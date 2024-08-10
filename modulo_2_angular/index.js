const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const user1 = {
    id:1,
    name: 'Fernando',
}

const user2 = {
    id:2,
    name:'cacau2'
}
let last_id = 2
let users = [user1, user2]
const port = 3002

app.get("/", (req, res) => {
    res.send({message: "why'ru here? "})
});


app.get("/users", (req, res) => {
res.send(users);
});

app.post("/users", (req, res) => {
    const data = req.body;

    new_user_id = users.length + 1
    const new_user = {
        id: new_user_id,
        ...data
    }; 
    users.push(new_user)
    res.status(200)
    res.send(users)
})

app.put('/users/:id', (req, res) => {
    const id = +req.params.id
    const name = req.body.name
    const userIndex = users.findIndex(user => user.id == id)

    if (userIndex !== -1) {
        users[userIndex].name = name
        res.status(200).send({user: users[userIndex]});
    }
    res.status(401).send({ message: "User not found" });

}) 

app.delete('/users/:id', (req, res) => {
    const id = +req.params.id
    if (id){
        users =users.filter(user => user.id !== id)
        res.status(200).send(users)
    }
    res.status(401).send({ message: "User not found" });
})
app.listen(port);
console.log(`server listen in: ${port}`);