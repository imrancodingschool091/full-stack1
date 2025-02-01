import axios from "axios";
import { useEffect, useState } from "react";

function UsersList() {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
  

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:8080/api/user");
                setUsers(response.data.users);
                setIsLoading(false);
            } catch (error) {
                alert("Error fetching data: " + error.message);
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:8080/api/user/${id}`);
            setUsers(users.filter((user) => user._id !== id));
            alert("User deleted successfully");
        } catch (error) {
            alert("Error deleting user: " + error.message);
        }
    };

 

    return (
        <div className="p-5">
            <button className="bg-red-600 text-white-800 px-4 py-1 mr-2">Delete all</button>

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
                            {users.map((user, index) => (
                                <tr key={index} className="hover:bg-gray-50">
                                    <td className="border border-gray-300 p-2 text-center">{index + 1}</td>
                                    <td className="border border-gray-300 p-2 text-center">{user.username}</td>
                                    <td className="border border-gray-300 p-2 text-center">{user.age}</td>
                                    <td className="border border-gray-300 p-2 text-center">{user.city}</td>
                                    <td className="border border-gray-300 p-2 text-center">{user.phone}</td>
                                    <td className="border border-gray-300 p-2 text-center">
                                        
                                        <button
                                            className="bg-red-600 text-white-800 px-4 py-1 mr-2"
                                            onClick={() => handleDelete(user._id)}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>   
                            ))}
                        </tbody>
                    </table>
                </div>
            )}


<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>

         
        </div>
    );
}

export default UsersList;
