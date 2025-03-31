//Initialization of packages
require("dotenv").config();
const express = require("express");
const { mongoose} = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json()); // Allow JSON body
app.use(cors()); // Allow frontend requests

//Database connection
mongoose
.connect(process.env.MONGO_URL)
.then(() => console.log("MongoDB connected"))
.catch((err) => console.log(err));

// Define User Schema
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
});
  
const User = mongoose.model("User", userSchema);

//1. CREATE a new user
app.post("/api/users", async (req, res) => {
try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json(user);
} catch (error) {
    res.status(400).json({ error: error.message });
}
});

//2. READ all users
app.get("/api/users", async (req, res) => {
try {
    const users = await User.find();
    res.json(users);
} catch (error) {
    res.status(500).json({ error: error.message });
}
});

//3. UPDATE a user by ID
app.put("/api/users/:id", async (req, res) => {
try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json(user);
} catch (error) {
    res.status(400).json({ error: error.message });
}
});

//4. DELETE a user by ID
app.delete("/api/users/:id", async (req, res) => {
try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json({ message: "User deleted successfully" });
} catch (error) {
    res.status(500).json({ error: error.message });
}
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));