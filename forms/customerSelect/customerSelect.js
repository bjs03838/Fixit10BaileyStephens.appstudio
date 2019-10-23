let allPetData = []   // so this variable is global

customerSelect.onshow=function(){
     // get all the data from the database when program loads
      let query = "SELECT DISTINCT state FROM customer"
    req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=bjs03838&pass=BIA375&database=bjs03838&query=" + query)

    if (req1.status == 200) { //transit worked.
            allPetData = JSON.parse(req1.responseText)
            console.log("parsed result in onshow:  " + allPetData)
    } else {
        // transit error
        NSB.MsgBox("Error: " + req1.status);
    }  
}
s