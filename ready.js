module.exports = (client) => {
    client.user.setPresence({
        game: {
            name: "Counting down..."
        }
    });
};
