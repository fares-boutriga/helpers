const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Serve static files (if needed)
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html'); // Create index.html later
});

// Socket.IO connection
io.on('connection', (socket) => {
    console.log('A user connected');

    // Listen for messages
    socket.on('chat message', (msg) => {
        io.emit('chat message', msg); // Emit message to all clients
    });

    // Handle disconnection
    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});

// Start the server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
