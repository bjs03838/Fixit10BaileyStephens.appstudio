let allCustomerData = []   // so this variable is global

customerSelect.onshow=function(){
     // get all the data from the database when program loads
      let query = "SELECT DISTINCT state FROM customer"
    req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=bjs03838&pass=BaileyBIA8!&database=bjs03838&query=" + query)
      if (req1.status == 200) { //transit worked.
        results = JSON.parse(req1.responseText)
        //stateQuery.value = results
        if (results.length == 0)
          NSB.MsgBox("There are no customers from that State")
        else {        
        let message = ""
        for (i = 0; i <= results.length - 1; i++)
            message = message + results[i][0] + "\n"
        stateQuery.value = message
      } 
      
  } else
        //transit error - Handle that with an error message.
        NSB.MsgBox("Error code: " + req1.status)
}


btnSearch.onclick=function(){
    let check = inptUserState.value
    let query = "SELECT * FROM customers WHERE state = " + '"' + check + '"'  
    req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=bjs03838&pass=BaileyBIA8!&database=bjs03838&query=" + query)

    if (req1.status == 200) { //transit worked.
        results = JSON.parse(req1.responseText)
      if (results.length == 0)
        NSB.MsgBox("There are no pets of that type.")
      else {        
        // output the names of all the dogs
        let message = ""
        for (i = 0; i <= results.length - 1; i++)
            message = message + results[i][0] + "\n"
        customerResults.value = message
      } 
      
  } else
        //transit error - Handle that with an error message.
        NSB.MsgBox("Error code: " + req1.status)
}
