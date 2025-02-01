import { useState } from "react";
import axios from "axios";

function CreateUser() {
  const [user, setUser] = useState({
    username: "",
    age: "",
    city: "",
    phone: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Fix: Moved this to the top

    try {
      let response = await axios.post("https://full-stack1-6.onrender.com/api/user", user);
      if (response.data?.message) {
        alert(response.data.message);
      }
    } catch (error) {
      alert(error.response?.data?.message || error.message);
    }

    setUser({ username: "", age: "", city: "", phone: "" });
  };

  return (
    <form className="px-2 py-2 my-2 mx-2 w-[560px]" onSubmit={handleSubmit}>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Username"
          name="username"
          value={user.username}
          onChange={handleInput}
          required
        />
      </div>
      <div className="mb-3">
        <input
          type="number"
          className="form-control"
          placeholder="Age"
          name="age"
          value={user.age}
          onChange={handleInput}
          required
        />
      </div>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="City"
          name="city"
          value={user.city}
          onChange={handleInput}
          required
        />
      </div>
      <div className="mb-3">
        <input
          type="tel"
          className="form-control"
          placeholder="Phone"
          name="phone"
          value={user.phone}
          onChange={handleInput}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

export default CreateUser;
