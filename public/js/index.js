var socket = io();

socket.on('connect', function () {
    console.log('Connected to server');

    socket.emit('createMessage', {
        from: 'Bob',
        text: 'some text here'
    });
});

socket.on('disconnect', function () {
    console.log('Disonnected from server');
});

socket.on('newMessage', function (message) {
    console.log('New message', message);
});
