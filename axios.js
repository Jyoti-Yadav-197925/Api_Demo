const axios = require("axios");

const BASE_URL = "https://jsonplaceholder.typicode.com";

// GET METHOD
const getData = async (endPoint) => {
  const mainMethods = {
    method: "GET",
    url: `${BASE_URL}${endPoint}`,
    headers: {
      "Content-type": "application/json; Charset=UTF-8",
    },
  };
  try {
    const response = await axios(mainMethods);
    const data = response.data;
    console.log("Status-Code: ", data);
    console.log("Get data has been made ", data);
  } catch (e) {
    throw e;
  }
};

// CREATE METHOD
const createData = async (endPoint, toCreateData) => {
  const mainMethods = {
    method: "POST",
    url: `${BASE_URL}${endPoint}`,
    headers: {
      "Content-type": "application/json; Charset=UTF-8",
    },
    data: toCreateData,
  };
  try {
    const response = await axios(mainMethods);
    const data = response.data;
    console.log("Data has been created: ", data);
  } catch (e) {
    throw e;
  }
};

// UPDATE METHOD
const insertData = async (endPoint, dataforInsert) => {
  const mainMethod = {
    method: "PUT",
    url: `${BASE_URL}${endPoint}`,
    headers: {
      "Content-type": "application/json; Charset=UTF-8",
    },
    data: dataforInsert,
  };
  try {
    const response = await axios(mainMethod);
    const data = response.data;
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
    url: `${BASE_URL}${endPoint}`,
    headers: {
      "Content-type": "application/json; Charset=UTF-8",
    },
    data: dataforUpdate,
  };
  try {
    const response = await axios(mainMethod);
    const data = await response.data;
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
    url: `${BASE_URL}${endPoint}`,
    headers: {
      "Content-type": "application/json; Charset=UTF-8",
    },
  };
  try {
    const response = await axios(mainMethod);
    const data = await response.data;
    console.log("Status-Code: ", response.status);
    console.log("Data has been deleted: ", data);
  } catch (e) {
    throw e;
  }
};

// Testing:

// getData("/comments");                                        // GET METHOD

// createData("/comments",{
//     postId:1,
//     name:"Stanley Casano",
//     email:"stanley@gmail.com",
//     body:"Xxxxx Yyyyy Zzzzzz for create Method",
// });                                                          // CREATE METHOD

// insertData("/comments/99",{
//     postId:10,
//     name:"Cristopher Zen",
//     email:"christ@gmail.com",
//     body:"Lighting a treeeeeeeeeeeeeeeeeeeee",
// });                                                          //UPSERT: -INSERT METHOD

// updateData("/comments/99",{
//     body:"Penguin lives in a Icey Land",
// })                                                           // UPSERT: -UPDATE METHOD

// deleteData("/comments/99");                                  // DELETE METHOD
