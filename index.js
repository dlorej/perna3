const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const pool = require("./db");
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

if (process.env.NODE_ENV === "production") {
    //server static content
    //npm run build
    app.use(express.static(path.join(__dirname, "client/build")));
}

app.get("/getall", async (req, res) => {
    try {
        const allTodos = await pool.query("SELECT * FROM todo");
        console.log(allTodos, allTodos.rows);
        // res.json(allTodos.rows);
        res.text("hello");
    } catch (err) {
        console.error(err.message);
    }
});

app.listen(PORT, () => {
    console.log(`Server is starting on port ${PORT}`);
});
