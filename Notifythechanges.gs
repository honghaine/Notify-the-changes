function onEdit(e) { 
  var sName = e.source.getActiveSheet().getSheetName();  
  if(sName == "New Format Template") { // change name of this sheet
    var user = Session.getActiveUser().getEmail();
    var value;
    var oldCell; 
    var mA1 = e.range.getA1Notation().split(":")[0];
    var time = new Date();    
    if(typeof(e.range.getValue()) == 'string'||e.value == 'string') {
      var aCell = e.source.getRange(mA1);
      value = aCell.getValue();
      var form = "'" + aCell.getFormula();
      oldCell = e.oldValue; 
      var data = [mA1, time, user, value, oldCell];
    if (value != oldCell) {
      e.source.getSheetByName("Recent_Changes").appendRow(data); // any changes will be imported in here
    }     
    }   
  }
}