import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
// import { storage } from "../../firebase/config.js";
// import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
// import { collection, addDoc } from "firebase/firestore";
// import { db } from "../../firebase/config";
// import '../Create/Create.css';

const Create = () => {
  const navigate = useNavigate(); 
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);
  const [nameError, setNameError] = useState("");
  const [categoryError, setCategoryError] = useState("");
  const [priceError, setPriceError] = useState("");

//   const handleImageUpload = async () => {
//     if (!image) {
//       console.error("No image selected");
//       return;
//     }

//     const storageRef = ref(storage, `product-images/${image.name}`);

//     try {
//       await uploadBytes(storageRef, image);
//       console.log("Image uploaded successfully");
//     } catch (error) {
//       console.error("Error uploading image:", error);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     let isValid = true;

//     // Validate name
//     if (!/^[a-zA-Z\s]+$/.test(name)) {
//       setNameError("Please enter a valid name (only characters allowed)");
//       isValid = false;
//     } else {
//       setNameError("");
//     }

//     // Validate category
//     if (!/^[a-zA-Z\s]+$/.test(category)) {
//       setCategoryError("Please enter a valid category (only characters allowed)");
//       isValid = false;
//     } else {
//       setCategoryError("");
//     }

//     // Validate price
//     if (!/^\d+$/.test(price)) {
//       setPriceError("Please enter a valid price (only numbers allowed)");
//       isValid = false;
//     } else {
//       setPriceError("");
//     }

//     if (isValid) {
//       // Upload image to Firebase Storage
//       await handleImageUpload();

//       // Get the download URL of the uploaded image
//       const storageRef = ref(storage, `product-images/${image.name}`);
//       const imageUrl = await getDownloadURL(storageRef);
//       console.log("Download URL:", imageUrl);
//       // Store product data in Firestore
//       try {
//         await addDoc(collection(db, "products"), {
//           name,
//           category,
//           price,
//           imageUrl,
//         });
//         console.log("Product added successfully");
//         navigate('/');
//       } catch (error) {
//         console.error("Error adding product:", error);
//       }
//     }
//   };
return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white border border-black p-6 rounded-md shadow-md">
        <h1 className="text-center font-bold mb-4">Create Product</h1>
        <form>
          <div className="mb-4">
            <label htmlFor="name">Product Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              className="border border-gray-300 rounded-md p-2 w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="category">Category:</label>
            <input
              type="text"
              id="category"
              name="category"
              className="border border-gray-300 rounded-md p-2 w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="price">Price:</label>
            <input
              type="text"
              id="price"
              name="price"
              className="border border-gray-300 rounded-md p-2 w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="image">Product Image:</label>
            <input
              type="file"
              id="image"
              className="border border-gray-300 rounded-md p-2 w-full"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-900 text-white font-bold rounded-md py-2 hover:bg-white hover:text-blue-900 border-2 border-blue-900"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
export default Create;
