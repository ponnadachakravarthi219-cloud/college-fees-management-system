import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import "./Fees.css";

function Fees() {
  const navigate = useNavigate();

  const [fees, setFees] = useState([]);
  const [search, setSearch] = useState("");

  const [form, setForm] = useState({
    rollNo: "",
    name: "",
    totalFee: "",
    paidFee: "",
    paymentDate: "",
  });

  useEffect(() => {
    fetchFees();
  }, []);

  const fetchFees = async () => {
    try {
      const res = await api.get("/fees");
      setFees(res.data);
    } catch (err) {
      console.log(err);
      alert("Failed to fetch fee records");
    }
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const addFee = async (e) => {
    e.preventDefault();

    if (
      !form.rollNo ||
      !form.name ||
      !form.totalFee ||
      !form.paidFee ||
      !form.paymentDate
    ) {
      alert("Please fill all fields");
      return;
    }

    try {
      await api.post("/fees", form);

      alert("Fee Saved Successfully");

      fetchFees();

      setForm({
        rollNo: "",
        name: "",
        totalFee: "",
        paidFee: "",
        paymentDate: "",
      });
    } catch (err) {
      console.log(err);
      alert("Failed to save fee");
    }
  };

  const deleteFee = async (id) => {
    if (!window.confirm("Delete this fee record?")) return;

    try {
      await api.delete(`/fees/${id}`);
      alert("Fee Deleted");
      fetchFees();
    } catch (err) {
      console.log(err);
      alert("Failed to delete fee");
    }
  };

  const filteredFees = fees.filter(
    (item) =>
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.rollNo.toLowerCase().includes(search.toLowerCase())
  );

  const totalCollection = useMemo(() => {
    return fees.reduce((sum, item) => sum + Number(item.paidFee), 0);
  }, [fees]);

  return (
    <div className="fees-page">

      <h1>Fees Management</h1>

      <div className="summary-card">
        <h2>Total Collection</h2>
        <h3>₹ {totalCollection.toLocaleString()}</h3>
      </div>

      <button
        className="back-btn"
        onClick={() => navigate("/dashboard")}
      >
        ← Back to Dashboard
      </button>

      <form className="fees-form" onSubmit={addFee}>

        <input
          type="text"
          name="rollNo"
          placeholder="Roll Number"
          value={form.rollNo}
          onChange={handleChange}
        />

        <input
          type="text"
          name="name"
          placeholder="Student Name"
          value={form.name}
          onChange={handleChange}
        />

        <input
          type="number"
          name="totalFee"
          placeholder="Total Fee"
          value={form.totalFee}
          onChange={handleChange}
        />

        <input
          type="number"
          name="paidFee"
          placeholder="Paid Amount"
          value={form.paidFee}
          onChange={handleChange}
        />

        <input
          type="date"
          name="paymentDate"
          value={form.paymentDate}
          onChange={handleChange}
        />

        <button type="submit">
          Save Fee
        </button>

      </form>

      <input
        className="search-box"
        type="text"
        placeholder="Search by Name or Roll Number"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <table>

        <thead>
          <tr>
            <th>Roll No</th>
            <th>Name</th>
            <th>Total Fee</th>
            <th>Paid</th>
            <th>Pending</th>
            <th>Status</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>

          {filteredFees.length === 0 ? (
            <tr>
              <td colSpan="8">No Fee Records Found</td>
            </tr>
          ) : (
            filteredFees.map((item) => (
              <tr key={item._id}>

                <td>{item.rollNo}</td>

                <td>{item.name}</td>

                <td>₹ {item.totalFee}</td>

                <td>₹ {item.paidFee}</td>

                <td>₹ {item.pendingFee}</td>

                <td>
                  <span
                    className={
                      item.pendingFee === 0
                        ? "paid"
                        : "pending"
                    }
                  >
                    {item.pendingFee === 0 ? "Paid" : "Pending"}
                  </span>
                </td>

                <td>{item.paymentDate}</td>

                <td>
                  <button
                    className="delete-btn"
                    onClick={() => deleteFee(item._id)}
                  >
                    Delete
                  </button>
                </td>

              </tr>
            ))
          )}

        </tbody>

      </table>

    </div>
  );
}

export default Fees;