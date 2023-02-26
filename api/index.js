import express from "express"; //import express framework
import postRoutes from "./routes/posts.js"
import authRoutes from "./routes/auth.js"
import userRoutes from "./routes/users.js"

const app = express() // Creating an instance of the express application

app.use(express.json()) //middleware to parse incoming requests with JSON payloads

app.use("/api/posts", postRoutes)
app.use("/api/auth", authRoutes)
app.use("/api/users", userRoutes)

app.listen(8800, () =>  { 
    console.log("connected")
})