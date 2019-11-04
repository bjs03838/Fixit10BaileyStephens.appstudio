let custData = []

customerDelete.onshow=function(){
  let query = "SELECT DISTINCT name FROM customer"
req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=bjs03838&pass=BaileyBIA8!&database=bjs03838&query=" + query)
    if (req1.status == 200) {
            custResults = JSON.parse(req1.responseText)
            for (i=0; i < custData.length; i++)
            custResults = custResults + custData[i][1] + "\n"
            txtCustQueryDelete.value = custResults
  }
}

btnSubmitDelete.onclick=function(){
  let custDelete = inptUserCustDelete.value
  let success = false
  for (i = 0; i < custData.length; i++) {
    if (custDelete == custData[i][1])
      success = true
}
if (req1.status == 200) {
  let customerDel = "DELETE FROM customer WHERE name = " + '"' + custDelete + '"'
  req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=bjs03838&pass=BaileyBIA8!&database=bjs03838&query=" + customerDel)
    txtResults.value = "You have deleted " + custDelete
}
}
