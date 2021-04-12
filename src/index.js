const messages = [
    "Ana",
    "Luis",
    "Carolina",
    "Paula",
    "Valeria",
    "Diego",
    "Laura",
    "Jose"
];

const randomMsg = () => {
    const message = messages[Math.floor(Math.random()*messages.length)];
    console.log(message);
}

module.exports = {randomMsg};
