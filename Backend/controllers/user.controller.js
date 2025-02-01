import { User } from "../models/user.model.js";

// Get all users
export const getUsers = async (req, res) => {
  try {
    let users = await User.find();
    if (!users.length) {
      return res.status(404).json({ message: "No users found" });
    }
    res.status(200).json({ message: "Users retrieved successfully!", users });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// Get a user by ID
export const getUserById = async (req, res) => {
  try {
    let { id } = req.params;
    let user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ message: "User retrieved successfully!", user });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// Create a new user
export const createUser = async (req, res) => {
  try {
    let { username, age, city, phone } = req.body;

   

    let newUser = new User({ username, age, city, phone });
    await newUser.save();

    res.status(201).json({ message: "User created successfully!", user: newUser });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// Update a user by ID
export const updateUser = async (req, res) => {
  try {
    let { id } = req.params;
    let { username, age, city, phone } = req.body;

    let updatedUser = await User.findByIdAndUpdate(
      id,
      { username, age, city, phone },
      { new: true, runValidators: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ message: "User updated successfully!", user: updatedUser });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// Delete a user by ID
export const deleteUserById = async (req, res) => {
  try {
    let { id } = req.params;
    let deletedUser = await User.findByIdAndDelete(id);

    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ message: "User deleted successfully!", user: deletedUser });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// Delete all users
export const deleteUsers = async (req, res) => {
  try {
    let result = await User.deleteMany();

    if (result.deletedCount === 0) {
      return res.status(404).json({ message: "No users to delete" });
    }

    res.status(200).json({ message: "All users deleted successfully!" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
