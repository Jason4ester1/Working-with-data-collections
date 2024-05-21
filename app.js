function parseCSV(csvString) {
     let rows = csvString.split("\n");
      for (let i = 0; i < rows.length; i++) {
         let cells = rows[i].split(",");
          console.log(cells[0], cells[1], cells[2], cells[3]);
      }
  }
      //PART - 1
  //let csvData = ID,Name,Occupation,Age;\n42,Bruce,Knight,41;\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master, 58;\n98,Bill,Doctor’s Assistant,26



    //PART - 2 
  // let csvData = [["ID","Name","Occupation","Age"],
   //              ["42","Bruce","Knight","41"],
      //          ["57","Bob","Fry Cook","19"],
         //       ["63","Blaine","Quiz Master","58"],
          //      ["98","Bill","Doctor’s" ,"Assistant","26"]]
          
     // PART - 3 
        //let csvData = [{ id: "42", name: "Bruce", occupation: "knight", age: "41"},
            //     { id: "57", name: "Bob", occupation: "Fry Cook", age: "19"},
              //   { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58"},
                // { id: "98", name: "Bill", occupation: "Doctor's Assistant", age: "26" }]
 
 //    PART - 4    
               // csvData.pop();
               // csvData.push({id: "48", name: "Barry", occupation: "Runner",age: "25"})
               // csvData.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" })
          
      // PART - 5
          //let csvData = ID,Name,Occupation,Age;\r42,Bruce,Knight,41;\r57,Bob,Fry Cook,19\r63,Blaine,Quiz Master, 58;\r98,Bill,Doctor’s Assistant,26

          
          
               console.log(csvData);

