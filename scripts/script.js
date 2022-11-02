//
// SELECTING HTML ELEMENTS
//

// Get
const SEARCH_RECORD_INPUT_ELEM = document.getElementById("inputGet1Id");
const SEARCH_RECORD_BUTTON_ELEM = document.getElementById("btnGet1");

// Post
const ADD_NEW_RECORD_NAME_INPUT_ELEM =
  document.getElementById("inputPostNombre");
const ADD_NEW_RECORD_SURNAME_INPUT_ELEM =
  document.getElementById("inputPostApellido");
const ADD_NEW_RECORD_BUTTON_ELE = document.getElementById("btnPost");

// Put
const MODIFY_RECORD_INPUT_ELE = document.getElementById("inputPutId");
const MODIFY_RECORD_BUTTON_ELEM = document.getElementById("btnPut");

// Delete
const DELETE_RECORD_INPUT_ELEM = document.getElementById("inputDelete");
const DELETE_RECORD_BUTTON_ELEM = document.getElementById("btnDelete");

// Results
const RESULTS_ELEM = document.getElementById("results");

//
// EVENT LISTENERS
//

SEARCH_RECORD_BUTTON_ELEM.addEventListener("click", () => {
  //We subtract 1 to start counting from 0 instead of 1
  let recordIdToSearchFor = SEARCH_RECORD_INPUT_ELEM.value - 1;

  //Fetch records from the API
  fetch("https://6362c4f866f75177ea37c61b.mockapi.io/users")
    .then((response) => response.json())
    .then((JSONData) => {
      // If record ID is found
      if (JSONData[recordIdToSearchFor] != undefined) {
        //Show record data in results
        RESULTS_ELEM.innerHTML = `
        ID: ${JSONData[recordIdToSearchFor].id} <br>
        NAME: ${JSONData[recordIdToSearchFor].name} <br>
        LASTNAME: ${JSONData[recordIdToSearchFor].lastname}
        `;
        //If not
      } else {
        //Show message
        RESULTS_ELEM.innerText = "NO RECORDS FOUND";
      }
    });
});
