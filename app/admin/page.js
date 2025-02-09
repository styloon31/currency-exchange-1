
"use client";
import { useState, useEffect } from "react";
import {
  doc,
  getDoc,
  setDoc,
  updateDoc,
  deleteField,
  collection,
  getDocs,
  addDoc,
  deleteDoc,
} from "firebase/firestore"; // Firestore imports
import { db, auth } from "../firebase";
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import Link from "next/link";
import Swal from "sweetalert2";

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [exchangeRates, setExchangeRates] = useState({});
  const [blogs, setBlogs] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newCurrency, setNewCurrency] = useState({
    code: "",
    buyRate: "",
    sellRate: "",
    symbol: "",
    flag: "",
  });
  const [newBlog, setNewBlog] = useState({
    title: "",
    content: "",
  });
  const [activeTab, setActiveTab] = useState("exchangeRates");


  // Fetch exchange rates from Firestore
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    });

    const fetchExchangeRates = async () => {
      try {
        const docRef = doc(db, "exchange-rates", "rates");
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const rates = docSnap.data();
          setExchangeRates(rates);
        } else {
          console.error("No rates found in Firestore.");
        }
      } catch (error) {
        console.error("Error fetching exchange rates:", error);
      }
    };

    const fetchBlogs = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "blogs"));
        const blogList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setBlogs(blogList);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchExchangeRates();
    fetchBlogs();
    return () => unsubscribe();
  }, []);


  // Handle password authentication
  const handleLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
  
      if (user.email !== process.env.NEXT_PUBLIC_ALLOWED_EMAIL) {
        await signOut(auth); // Sign out if email is not allowed
        Swal.fire({
          icon: "error",
          title: "Access Denied",
          text: "You are not allowed to log in.",
        });
        return;
      }
  
      Swal.fire({
        icon: "success",
        title: "Login Successful",
        text: `Welcome ${user.email}!`,
      });
      setIsAuthenticated(true);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Login Failed",
        text: "Wrong email or password!",
      });
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
  };

  // Handle updating exchange rates
  const handleUpdate = async (currencyCode, updatedRate) => {
    try {
      const docRef = doc(db, "exchange-rates", "rates");
      const updatedRates = { ...exchangeRates, [currencyCode]: updatedRate };
      await setDoc(docRef, updatedRates, { merge: true });
      setExchangeRates(updatedRates);
      alert("Exchange rate updated successfully!");
    } catch (error) {
      console.error("Error updating exchange rate:", error);
    }
  };

  // Handle adding a new currency
  const handleAddCurrency = async () => {
    if (
      !newCurrency.code ||
      !newCurrency.buyRate ||
      !newCurrency.sellRate ||
      !newCurrency.symbol ||
      !newCurrency.flag
    ) {
      alert("All fields are required for a new currency!");
      return;
    }

    try {
      const docRef = doc(db, "exchange-rates", "rates");
      const updatedRates = {
        ...exchangeRates,
        [newCurrency.code]: {
          buyRate: parseFloat(newCurrency.buyRate),
          sellRate: parseFloat(newCurrency.sellRate),
          symbol: newCurrency.symbol,
          flag: newCurrency.flag,
        },
      };

      await setDoc(docRef, updatedRates);
      setExchangeRates(updatedRates);
      setNewCurrency({
        code: "",
        buyRate: "",
        sellRate: "",
        symbol: "",
        flag: "",
      });
      setShowAddModal(false);
      alert("New currency added successfully!");
    } catch (error) {
      console.error("Error adding new currency:", error);
    }
  };

  // Handle deleting a currency
  const handleDelete = async (currencyCode) => {
    try {
      const docRef = doc(db, "exchange-rates", "rates");
      await updateDoc(docRef, {
        [currencyCode]: deleteField(),
      });

      const updatedRates = { ...exchangeRates };
      delete updatedRates[currencyCode];
      setExchangeRates(updatedRates);

      alert(`${currencyCode} has been deleted successfully!`);
    } catch (error) {
      console.error("Error deleting currency:", error);
      alert("Failed to delete the currency. Please try again.");
    }
  };

  // Handle adding a new blog
  const handleAddBlog = async () => {
    if (!newBlog.title || !newBlog.content) {
      alert("Title and content are required for a new blog!");
      return;
    }

    // Create an ID-safe version of the title (removing special characters, spaces, etc.)
    const blogId = newBlog.title
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9-]/g, "");

    try {
      const docRef = doc(db, "blogs", blogId); // Specify document ID
      await setDoc(docRef, newBlog); // Use setDoc instead of addDoc

      setBlogs([...blogs, { id: blogId, ...newBlog }]);
      setNewBlog({ title: "", content: "" });
      alert("Blog added successfully!");
    } catch (error) {
      console.error("Error adding blog:", error);
      alert("Failed to add blog. Try again.");
    }
  };

  // Handle deleting a blog
  const handleDeleteBlog = async (blogId) => {
    try {
      await deleteDoc(doc(db, "blogs", blogId));
      setBlogs(blogs.filter((blog) => blog.id !== blogId));
      alert("Blog deleted successfully!");
    } catch (error) {
      console.error("Error deleting blog:", error);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
        <div className="bg-white p-8 shadow-lg rounded-xl w-11/12 sm:w-96">
          <h1 className="text-2xl font-semibold mb-4 text-gray-700">
            Admin Login
          </h1>
          <input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
          />
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
          />
          <button
            onClick={handleLogin}
            className="w-full px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
          >
            Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
            Admin Panel
          </h1>
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
          >
            Logout
          </button>
        </div>

        <div className="flex justify-center space-x-4 mb-6">
          <button
            onClick={() => setActiveTab("exchangeRates")}
            className={`px-4 py-2 rounded-lg ${
              activeTab === "exchangeRates"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            Manage Exchange Rates
          </button>
          <button
            onClick={() => setActiveTab("blogs")}
            className={`px-4 py-2 rounded-lg ${
              activeTab === "blogs"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            Manage Blogs
          </button>
        </div>

        {activeTab === "exchangeRates" && (
          <div>
            <div className="mb-10 overflow-x-auto">
              <h2 className="text-xl font-semibold mb-6 text-gray-700">
                Existing Rates
              </h2>
              <table className="w-full border-collapse border border-gray-200 text-sm">
                <thead>
                  <tr className="bg-gray-100 text-gray-700">
                    <th className="border px-4 sm:px-6 py-3 text-left">
                      Currency
                    </th>
                    <th className="border px-4 sm:px-6 py-3 text-left">
                      Buy Rate
                    </th>
                    <th className="border px-4 sm:px-6 py-3 text-left">
                      Sell Rate
                    </th>
                    <th className="border px-4 sm:px-6 py-3 text-left">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {Object.keys(exchangeRates).map((currency) => (
                    <tr key={currency} className="hover:bg-gray-50">
                      <td className="border px-4 sm:px-6 py-4 font-medium">
                        {currency}
                      </td>
                      <td className="border px-4 sm:px-6 py-4">
                        <input
                          type="number"
                          defaultValue={exchangeRates[currency]?.buyRate}
                          onChange={(e) =>
                            setExchangeRates({
                              ...exchangeRates,
                              [currency]: {
                                ...exchangeRates[currency],
                                buyRate: parseFloat(e.target.value),
                              },
                            })
                          }
                          className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                        />
                      </td>
                      <td className="border px-4 sm:px-6 py-4">
                        <input
                          type="number"
                          defaultValue={exchangeRates[currency]?.sellRate}
                          onChange={(e) =>
                            setExchangeRates({
                              ...exchangeRates,
                              [currency]: {
                                ...exchangeRates[currency],
                                sellRate: parseFloat(e.target.value),
                              },
                            })
                          }
                          className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                        />
                      </td>
                      <td className="border px-4 sm:px-6 py-4 flex space-x-2">
                        <button
                          onClick={() =>
                            handleUpdate(currency, exchangeRates[currency])
                          }
                          className="px-4 py-2 bg-gradient-to-r from-[#FC8E06] to-[#FEBC3E] text-white rounded-lg hover:bg-green-600 transition"
                        >
                          Save
                        </button>
                        <button
                          onClick={() => handleDelete(currency)}
                          className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="flex justify-end">
              <button
                onClick={() => setShowAddModal(true)}
                className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition shadow-md"
              >
                Add New Currency
              </button>
            </div>

            {showAddModal && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <div className="bg-white rounded-lg p-6 w-11/12 sm:w-full max-w-lg shadow-lg">
                  <h2 className="text-xl sm:text-2xl font-bold mb-6 text-gray-800">
                    Add New Currency
                  </h2>
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      handleAddCurrency();
                    }}
                    className="space-y-4"
                  >
                    <input
                      type="text"
                      placeholder="Currency Code (e.g., USD)"
                      value={newCurrency.code}
                      onChange={(e) =>
                        setNewCurrency({ ...newCurrency, code: e.target.value })
                      }
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                      type="number"
                      placeholder="Buy Rate"
                      value={newCurrency.buyRate}
                      onChange={(e) =>
                        setNewCurrency({
                          ...newCurrency,
                          buyRate: e.target.value,
                        })
                      }
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                      type="number"
                      placeholder="Sell Rate"
                      value={newCurrency.sellRate}
                      onChange={(e) =>
                        setNewCurrency({
                          ...newCurrency,
                          sellRate: e.target.value,
                        })
                      }
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                      type="text"
                      placeholder="Symbol (e.g., $)"
                      value={newCurrency.symbol}
                      onChange={(e) =>
                        setNewCurrency({
                          ...newCurrency,
                          symbol: e.target.value,
                        })
                      }
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                      type="text"
                      placeholder="Flag URL (e.g. https://flagcdn.com/au.svg)"
                      value={newCurrency.flag}
                      onChange={(e) =>
                        setNewCurrency({ ...newCurrency, flag: e.target.value })
                      }
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                    />
                    <div className="flex justify-end space-x-4">
                      <button
                        type="button"
                        onClick={() => setShowAddModal(false)}
                        className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
                      >
                        Add
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}
          </div>
        )}

        {activeTab === "blogs" && (
          <div>
            <h2 className="text-xl font-semibold mb-6 text-gray-700">
              Manage Blogs
            </h2>
            <div className="mb-6">
              <ul className="space-y-4">
                {blogs.map((blog) => (
                  <li
                    key={blog.id}
                    className="bg-gray-100 p-4 rounded-lg shadow-md flex justify-between items-center"
                  >
                    <div>
                      <Link href={`/blog/${blog.id}`}>
                        <h3 className="text-lg font-semibold text-blue-500 cursor-pointer hover:underline">
                          {blog.title}
                        </h3>
                      </Link>
                      <p className="text-gray-600">{blog.content}</p>
                    </div>
                    <button
                      onClick={() => handleDeleteBlog(blog.id)}
                      className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h2 className="text-lg font-bold mb-4 text-gray-800">
                Add New Blog
              </h2>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleAddBlog();
                }}
                className="space-y-4"
              >
                <input
                  type="text"
                  placeholder="Blog Title"
                  value={newBlog.title}
                  onChange={(e) =>
                    setNewBlog({ ...newBlog, title: e.target.value })
                  }
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                />
                <textarea
                  placeholder="Blog Content"
                  value={newBlog.content}
                  onChange={(e) =>
                    setNewBlog({ ...newBlog, content: e.target.value })
                  }
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  rows="4"
                ></textarea>
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
                  >
                    Add Blog
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
