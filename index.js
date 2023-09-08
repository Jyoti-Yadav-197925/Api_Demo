const BASE_URL = "https://jsonplaceholder.typicode.com";

//GET METHOD
const getData = async (endPoint) => {
  const mainMethod = {
    method: "GET",
    headers: {
      "Context-type": "application/json, Charset=UTF-8",
    },
  };
  try {
    const response = await fetch(`${BASE_URL}${endPoint}`, mainMethod);
    const data = await response.json();
    console.log("status:", response.status);
    console.log("data for get i.e to read: ", data);
  } catch (e) {
    throw e;
  }
};

// CREATE METHOD
const createData = async (endPoint, dataforCreate) => {
  const mainMethod = {
    method: "POST",
    headers: {
      "Content-type": "application/json; Charset=UTF-8",
    },
    body: JSON.stringify(dataforCreate),
  };
  try {
    const response = await fetch(`${BASE_URL}${endPoint}`, mainMethod);
    const data = await response.json();
    console.log("status:", response.status);
    console.log("data for get i.e to read: ", data);
  } catch (e) {
    throw e;
  }
};

// UPDATE METHOD
const insertData = async (endPoint, dataforInsert) => {
  const mainMethod = {
    method: "PUT",
    headers: {
      "Content-type": "application/json; Charset=UTF-8",
    },
    body: JSON.stringify(dataforInsert),
  };
  try {
    const response = await fetch(`${BASE_URL}${endPoint}`, mainMethod);
    const data = await response.json();
    console.log("Status code: ", response.status);
    console.log("Data has been Inserted", data);
  } catch (e) {
    throw e;
  }
};

// UPDATE METHOD

const updateData = async (endPoint, dataforUpdate) => {
  const mainMethod = {
    method: "PATCH",
    headers: {
      "Content-type": "application/json; Charset=UTF-8",
    },
    body: JSON.stringify(dataforUpdate),
  };
  try {
    const response = await fetch(`${BASE_URL}${endPoint}`, mainMethod);
    const data = await response.json();
    console.log("Status-Code", response.status);
    console.log("Data has been Updated: ", data);
  } catch (e) {
    throw e;
  }
};

//DELETE METHOD
const deleteData = async (endPoint) => {
  const mainMethod = {
    method: "DELETE",
    headers: {
      "Content-type": "application/json; Charset=UTF-8",
    },
  };
  try {
    const response = await fetch(`${BASE_URL}${endPoint}`, mainMethod);
    const data = await response.json();
    console.log("Status-Code: ", response.status);
    console.log("Data has been deleted: ", data);
  } catch (e) {
    throw e;
  }
};

// Testing:

// getData("/posts");                                       // GET METHOD:

// createData("/posts",{
//     userId: 151,
//     title:"Aaaa Bbbbb Ccccc Dddddd for create",
//     body:"Xxxxx Yyyyy Zzzzzz for create Method",
// });                                                // CREATE METHOD

// insertData("/posts/99",{
//     userId:10,
//     id:99,
//     title:"Merry Christmas",
//     body:"Lighting a treeeeeeeeeeeeeeeeeeeee",
// });                                                   // UPSERT: -INSERT METHOD

// updateData("/posts/99",{
//     body:"Penguin lives in a Icey Land",
// })                                                   // UPSERT: -UPDATE METHOD

// deleteData("/posts/99");                             // DELETE METHOD
