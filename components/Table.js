import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Table = ({ taskName }) => {
  const [data, setData] = useState([
    { id: 1, name: "Health Camp", date: new Date(1998, 0, 1) },
    { id: 2, name: "Skill Development Workshop", date: new Date(1993, 5, 15) },
    { id: 3, name: "Blood Donation Camp", date: new Date(1988, 8, 22) },
    {
      id: 4,
      name: "Education for Underprivileged Children",
      date: new Date(1998, 0, 1),
    },
    { id: 5, name: "Women Empowerment Program:", date: new Date(1998, 0, 1) },
    {
      id: 6,
      name: "Environmental Awareness Campaign",
      date: new Date(1998, 0, 1),
    },
  ]);
  const [newData, setNewData] = useState({ name: "", date: new Date() });
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === "date") {
      setSelectedDate(value);
      setNewData((prevData) => ({ ...prevData, [name]: value }));
    } else {
      setNewData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  //   add when Admin is logged in

  //   const handleAddData = () => {
  //     setData([
  //       ...data,
  //       { id: data.length + 1, name: newData.name, date: selectedDate },
  //     ]);
  //     setNewData({ name: "", date: new Date() });
  //   };

  //   const handleDeleteData = (id) => {
  //     setData(data.filter((item) => item.id !== id));
  //   };

  return (
    <div className="p-4">
      <h1 className="text-lg mb-4 font-bold">{taskName}</h1>
      <table className="border-collapse border w-full">
        <thead>
          <tr>
            <th className="p-2 border">S.NO</th>
            <th className="p-2 border">Name of {taskName}</th>
            <th className="p-2 border">Date</th>
            {/* <th className="p-2 border">Action</th> */}
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td className="p-2 border">{item.id}</td>
              <td className="p-2 border">{item.name}</td>
              <td className="p-2 border">{item.date.toLocaleDateString()}</td>
              {/* <td className="p-2 border">
                <button
                  className="bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded"
                  onClick={() => handleDeleteData(item.id)}
                >
                  Delete
                </button>
              </td> */}
            </tr>
          ))}
        </tbody>
      </table>

      {/* hidden when admin is logged in */}
      {/* <div className="mt-4">
        <h2 className="text-md mb-2 font-bold">Add New Data</h2>
        <div className="flex flex-col sm:flex-row">
          <input
            className="border p-2 mb-2 sm:mr-2"
            type="text"
            name="name"
            value={newData.name}
            onChange={handleInputChange}
            placeholder="Name"
          />
          <DatePicker
            className="border p-2 mb-2 sm:mr-2"
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            placeholderText="Date"
            name="date"
            dateFormat="dd/MM/yyyy"
          />
          <button
            className="bg-green-500 hover:bg-green-700 text-white py-1 px-2 rounded"
            onClick={handleAddData}
          >
            Add
          </button>
        </div>
      </div> */}
    </div>
  );
};

export default Table;
