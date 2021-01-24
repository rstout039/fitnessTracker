const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use(express.static("public"));
app.use(morgan("tiny"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/fitness_tracker", {
    useNewUrlParser:true,
    useCreateIndex:true, 
    useUnifiedTopology:true,
    useFindAndModify:false
});

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

app.listen(PORT, function(){
    console.log("Listening on port %s. Visit https://localhost:%s in your browser", PORT, PORT);
});