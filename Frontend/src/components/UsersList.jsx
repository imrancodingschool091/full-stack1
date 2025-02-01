import axios from "axios";
import { useEffect, useState } from "react";

function UsersList() {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("https://full-stack1-6.onrender.com/api/user");
                setUsers(response.data.users || []); // Ensure users is an array
            } catch (error) {
                console.error("Error fetching data:", error);
                alert("Error fetching data: " + error.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    const handleDelete = async (id) => {
        try {
            await axios.delete(`https://full-stack1-6.onrender.com/api/user/${id}`);
            setUsers((prevUsers) => prevUsers.filter((user) => user._id !== id));
            alert("User deleted successfully");
        } catch (error) {
            console.error("Error deleting user:", error);
            alert("Error deleting user: " + error.message);
        }
    };

    const handleDeleteAll = async () => {
        try {
            await axios.delete("https://full-stack1-6.onrender.com/api/user");
            setUsers([]); // Clear users without page reload
            alert("All data has been deleted");
        } catch (error) {
            console.error("Error deleting users:", error);
            alert("Error deleting users: " + error.message);
        }
    };

    return (
        <div className="p-5">
            <button className="bg-red-600 text-white px-4 py-1 mr-2" onClick={handleDeleteAll}>
                Delete All
            </button>

            {isLoading ? (
                <div className="text-center text-lg font-semibold text-gray-700">Loading...</div>
            ) : (
                <div className="overflow-x-auto">
                    <table className="w-full border border-gray-300 mt-5">
                        <thead>
                            <tr className="bg-gray-100 text-center">
                                <th className="border border-gray-300 p-2">SR.NO</th>
                                <th className="border border-gray-300 p-2">UserName</th>
                                <th className="border border-gray-300 p-2">Age</th>
                                <th className="border border-gray-300 p-2">City</th>
                                <th className="border border-gray-300 p-2">Phone</th>
                                <th className="border border-gray-300 p-2">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.length > 0 ? (
                                users.map((user, index) => (
                                    <tr key={user._id} className="hover:bg-gray-50">
                                        <td className="border border-gray-300 p-2 text-center">{index + 1}</td>
                                        <td className="border border-gray-300 p-2 text-center">{user.username}</td>
                                        <td className="border border-gray-300 p-2 text-center">{user.age}</td>
                                        <td className="border border-gray-300 p-2 text-center">{user.city}</td>
                                        <td className="border border-gray-300 p-2 text-center">{user.phone}</td>
                                        <td className="border border-gray-300 p-2 text-center">
                                            <button
                                                className="bg-red-600 text-white px-4 py-1 mr-2"
                                                onClick={() => handleDelete(user._id)}
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="6" className="text-center p-4 text-gray-500">
                                        No users found.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}

export default UsersList;
