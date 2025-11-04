const express = require("express")
const app = express()
const PORT = 8000

const userRoute = require(`./routes/user.routes`)
const attendanceRoute = require(`./routes/attendance.routes`)
const authRoute = require(`./routes/auth.routes`)

app.use(`/user`, userRoute)
app.use(`/attendance`, attendanceRoute)
app.use(`/auth`, authRoute)

app.listen(8000, () => {
    console.log(`Server of UKL runs on port ${PORT}`)
})