import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await fetch("http://localhost/ART_CRAFT_DB/api/login.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setMessage("✅ Login successful! Redirecting...");
        localStorage.setItem("user", JSON.stringify(data.user));

        setTimeout(() => {
          navigate("/admin");
        }, 1500);
      } else {
        setMessage("❌ " + (data.message || "Invalid credentials"));
      }
    } catch (err) {
      setMessage("❌ Something went wrong! Make sure the server is running.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#faf9f6] flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        {/* Logo / Brand */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-serif italic font-medium text-zinc-900 tracking-wide">
            Sennelier & Son
          </h1>
          <p className="text-amber-700 mt-2 text-sm tracking-widest">EST. 1998</p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-10 border border-zinc-100">
          <h2 className="text-3xl font-serif italic text-center mb-8 text-zinc-900">
            Admin Login
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-zinc-600 mb-2">Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="admin@sennelier.lk"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-4 border border-zinc-200 rounded-2xl focus:outline-none focus:border-amber-600 transition-colors"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-zinc-600 mb-2">Password</label>
              <input
                type="password"
                name="password"
                placeholder="••••••••"
                value={formData.password}
                onChange={handleChange}
                className="w-full p-4 border border-zinc-200 rounded-2xl focus:outline-none focus:border-amber-600 transition-colors"
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-zinc-900 hover:bg-black text-white py-4 rounded-2xl font-medium text-lg transition-all disabled:opacity-70 mt-4"
            >
              {loading ? "Signing in..." : "Sign In"}
            </button>
          </form>

          {message && (
            <p className={`text-center mt-6 text-sm font-medium ${message.includes("✅") ? "text-green-700" : "text-red-600"}`}>
              {message}
            </p>
          )}

          <div className="text-center mt-8 text-sm text-zinc-500">
            Need access? Contact the administrator
          </div>
        </div>

        {/* Footer Note */}
        <p className="text-center text-xs text-zinc-400 mt-8">
          © Sennelier & Son — Art Materials
        </p>
      </div>
    </div>
  );
};

export default Login;