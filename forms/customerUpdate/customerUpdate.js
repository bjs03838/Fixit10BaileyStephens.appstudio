customerUpdate.onshow=function(){
        let query = "SELECT DISTINCT name FROM customer"
    req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=bjs03838&pass=BaileyBIA8!&database=bjs03838&query=" + query)
  if (req1.status == 200) { 
        results = JSON.parse(req1.responseText)
    if (results.length == 0)
        NSB.MsgBox("There are no names of that type.") 
    else {        
        var message = ""
        for (i = 0; i <= results.length - 1; i++)
            message = message + results[i][0] + "\n"
        txtResults1.value = message
      } 
  }
}
btnUpdateSubmit.onclick=function(){
  var newName = inptNewName.value
    var oldName = inptOldName.value
    var query = "UPDATE customer SET name =" + '"' + newName + '"' + " WHERE name = " + '"' + oldName + '"'
      req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=bjs03838&pass=BaileyBIA8!&database=BaileyBIA8!&query=" + query)
      if (req1.status == 200) { 
        if (req1.responseText == 500) 
            NSB.MsgBox("You have updated the name: " + newName)
            var message = ""
        for (i = 0; i <= results.length - 1; i++)
            message = message + results[i][0] + "\n"
        txtResults2.value = message
} 
}  
}
