import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api",
  headers: { "Content-Type": "application/json" },
});

// Error handler
const handleError = (error, msg) => {
  throw error.response?.data || { message: msg };
};

// ✅ APPOINTMENT API
export const appointmentAPI = {
  createAppointment: (data) =>
    api
      .post("/appointments", data)
      .then((res) => res.data)
      .catch((err) => handleError(err, "Failed to submit appointment")),

  getAppointments: () =>
    api
      .get("/appointments")
      .then((res) => res.data)
      .catch((err) => handleError(err, "Failed to fetch appointments")),

  getAppointmentById: (id) =>
    api
      .get(`/appointments/${id}`)
      .then((res) => res.data)
      .catch((err) => handleError(err, "Failed to fetch appointment")),

  updateAppointment: (id, data) =>
    api
      .put(`/appointments/${id}`, data)
      .then((res) => res.data)
      .catch((err) => handleError(err, "Failed to update appointment")),

  deleteAppointment: (id) =>
    api
      .delete(`/appointments/${id}`)
      .then((res) => res.data)
      .catch((err) => handleError(err, "Failed to delete appointment")),
};

// ✅ CONTACTS API
export const contactAPI = {
  create: (data) =>
    api
      .post("/contacts", data)
      .then((res) => res.data)
      .catch((err) => handleError(err, "Failed to submit contact form")),

  getAll: () =>
    api
      .get("/contacts")
      .then((res) => res.data)
      .catch((err) => handleError(err, "Failed to fetch contacts")),

  getById: (id) =>
    api
      .get(`/contacts/${id}`)
      .then((res) => res.data)
      .catch((err) => handleError(err, "Failed to fetch contact")),

  updateStatus: (id, status) =>
    api
      .put(`/contacts/${id}`, { status })
      .then((res) => res.data)
      .catch((err) => handleError(err, "Failed to update contact status")),

  delete: (id) =>
    api
      .delete(`/contacts/${id}`)
      .then((res) => res.data)
      .catch((err) => handleError(err, "Failed to delete contact")),
};

export default api;
