// import { Input } from "./Input";
// import { Link } from "react-router-dom";
// import { useState } from "react";

// export default function RequestAcc() {
//   const register = (event) => {
//     event.preventDefault();
//     let data = {
//       cms_id: inputCms,
//     };

//     fetch("http://localhost:3000/api/request/register", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(data)
//     }).then((response) => {
//       if (response.status === 200) {
//         alert("Request sent successfully");
//       } else {
//         response.json().then((data) => {
//           alert(data.errors[0].msg);
//         }
//         );
//       }
//     }
//     );
//   };
//   const [inputCms, setInputCms] = useState('');
//   const changeCms = (event) => {
//     setInputCms(event.target.value);
//   }


//   const cms = {
//     name: "cms",
//     type: "number",
//     placeholder: "000000",
//     req: true,
//     onChange: changeCms,
//   }

//   return (
//     <div className="w-full rounded-lg md:mt-0 sm:max-w-md xl:p-0 bg-gray-800 border-gray-700">
//       <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
//         <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl text-white">
//           Request account from Hostel Manager
//         </h1>
//         <form className="space-y-4 md:space-y-6" onSubmit={register}>
//           <Input field={cms} />
//           <button
//             type="submit"
//             className="w-full text-white hover:bg-blue-700 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-blue-600 focus:ring-blue-800"
//           >
//             Request
//           </button>
//           <p className="text-sm font-light text-gray-400">
//             Already have an account?{" "}
//             <Link
//               to="/auth"
//               className="font-medium hover:underline text-blue-500"
//             >
//               Sign In
//             </Link>
//           </p>
//         </form>
//       </div>
//     </div>
//   );
// }

import { Input } from "./Input";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function RequestAcc() {
  const [formData, setFormData] = useState({
    cms_id: '',
    name: '',
    contact: '',
    father: '',
    dob: '',
    email: '',
    address: '',
    department: '',
    course: '',
    branch: '',
  });

  const register = (event) => {
    event.preventDefault();
    let data = {
      cms_id: formData.cms_id,
      name: formData.name,
      contact: formData.contact,
      father: formData.father,
      dob: formData.dob,
      email: formData.email,
      address: formData.address,
      department: formData.department,
      course: formData.course,
      branch: formData.branch,
    };

    fetch("http://localhost:3000/api/request/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data)
    }).then((response) => {
      if (response.status === 200) {
        alert("Request sent successfully");
      } else {
        response.json().then((data) => {
          alert(data.errors[0].msg);
        });
      }
    });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const fields = [
    { name: "Registration ID", type: "text", placeholder: "XXXXXXXXX", req: true },
    { name: "Name", type: "text", placeholder: "Your Name", req: true },
    { name: "Contact", type: "tel", placeholder: "Contact Number", req: true },
    { name: "Father", type: "text", placeholder: "Father's Name", req: true },
    { name: "DOB", type: "date", placeholder: "Date of Birth", req: true },
    { name: "Email", type: "email", placeholder: "Your Email", req: true },
    { name: "Address", type: "text", placeholder: "Your Address", req: true, row: true },
    { name: "Department", type: "text", placeholder: "Your Department", req: true },
    { name: "Course", type: "text", placeholder: "Your Course", req: true },
    { name: "Branch", type: "text", placeholder: "Your Branch", req: true },
  ];

  return (
    <div className="w-full rounded-lg md:mt-0 sm:max-w-3xl xl:p-0 bg-gray-800 border-gray-700">
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
        <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl text-white">
          Request account from Hostel Manager
        </h1>
        <form className="space-y-4 md:space-y-6" onSubmit={register}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {fields.map((field) => (
              <div key={field.name} className={field.row ? 'col-span-full' : ''}>
                <label className="block text-sm font-medium text-gray-300">{field.name}</label>
                {field.row ? (
                  <textarea
                    placeholder={field.placeholder}
                    required={field.req}
                    value={formData[field.name.toLowerCase()]}
                    onChange={handleChange}
                    name={field.name.toLowerCase()}
                    className="w-full h-24 px-4 py-2 rounded-lg bg-gray-700 text-gray-300 border border-gray-600 focus:outline-none focus:border-blue-600"
                  />
                ) : (
                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    required={field.req}
                    value={formData[field.name.toLowerCase()]}
                    onChange={handleChange}
                    name={field.name.toLowerCase()}
                    className="w-full px-4 py-2 rounded-lg bg-gray-700 text-gray-300 border border-gray-600 focus:outline-none focus:border-blue-600"
                  />
                )}
              </div>
            ))}
          </div>
          <button
            type="submit"
            className="w-full text-white hover:bg-blue-700 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-blue-600 focus:ring-blue-800"
          >
            Request
          </button>
          <p className="text-sm font-light text-gray-400">
            Already have an account?{" "}
            <Link
              to="/auth"
              className="font-medium hover:underline text-blue-500"
            >
              Sign In
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}