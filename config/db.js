const mongoose = require('mongoose');

const mongoURI = "mongodb+srv://bloodapp:03412286205@cluster0-fpmk3.mongodb.net/test?retryWrites=true&w=majority";


mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', true);
mongoose.set('useCreateIndex', true);

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

module.exports = mongoose;