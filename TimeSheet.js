var timeIn = [ "monIn", "tueIn", "wedIn", "thuIn", "friIn", "satIn", "sunIn" ];
var timeOut = [ "monOut", "tueOut", "wedOut", "thuOut", "friOut", "satOut", "sunOut" ];
var totalDay = [ "totalMon", "totalTue", "totalWed", "totalThu", "totalFri", "totalSat", "totalSun" ];
var grandTotal = 0;
var timeInLen = timeIn.length;
var timeOutLen = timeOut.length;
var totalDayLen = totalDay.length;
  
function computeTime() {
// Compute the time between the in time and out time for each day.
//	  alert ("begin computeTime");
	  var timeInString;
	  var timeOutString;
	  var dtIn;
	  var dtOut;
	  var hoursWorked;
	  var hoursWorkedRounded;
	  for(i = 0; i < timeInLen; i++)
	  {
	    timeInString = document.getElementById(timeIn[i]).value
		timeOutString = document.getElementById(timeOut[i]).value;
		if ((timeInString !== null && timeInString != "")  && (timeOutString !== null && timeOutString != "")) {
             dtIn = new Date(timeInString);		
             dtOut = new Date(timeOutString);
             hoursWorked = Date.dateDiff('h', dtIn.getTime(), dtOut.getTime());
             hoursWorkedRound = Math.round(hoursWorked * 100) / 100;
             document.getElementById(totalDay[i]).innerHTML=(hoursWorkedRound+" "+"Hours");
			 grandTotal = grandTotal + hoursWorkedRound;
			 grandTotal = Math.round(grandTotal * 100) / 100;		 
        }//if//			 
	  }//for//
	  document.getElementById("grandTotal").innerHTML=(grandTotal+" "+"Hours");
	  document.getElementById("hoursWorked").value=grandTotal;
	  grandTotal = 0;
	}//function//
	
	// datepart: 'y', 'm', 'w', 'd', 'h', 'n', 's'
	// where 'w' is a week, 'd' a day, 'h' hours, 'n' for minutes, and 's' for seconds
	// Find the difference between the dates.
    Date.dateDiff = function(datepart, fromdate, todate) {	
      datepart = datepart.toLowerCase();	
      var diff = todate - fromdate;	
      var divideBy = { w:604800000, 
                       d:86400000, 
                       h:3600000, 
                       n:60000, 
                       s:1000 };	
  
      //return Math.floor( diff/divideBy[datepart]);
	  return (diff/divideBy[datepart]);
    }

function reset() {
	  //Initialize all input fields
	  //alert("reset top");

	  for(i = 0; i < timeInLen; i++)
	  {
	    document.getElementById(timeIn[i]).value = "";
	  }//for//
	  for(i = 0; i < timeOutLen; i++)
	  {
	    document.getElementById(timeOut[i]).value = "";
	  }//for//
	  for(i = 0; i < totalDayLen; i++)
	  {
	    document.getElementById(totalDay[i]).innerHTML = "0";
	  }
	  document.getElementById("hoursWorked").value=0;
	  document.getElementById("totalToPay").innerHTML = "0";
	  document.getElementById("tueResetDate").value = "";
	  document.getElementById("friResetDate").value = "";
	  document.getElementById("totalToPay").innerHTML = "0";
	  document.getElementById("rateOfPay").value=15;
	  //alert("reset bottom");
	}//reset//
	  
function reset2() {
	// Initialize all date input fields from tue to thu to the starting date incrementing 1 day for each field.
//	  alert("reset2 top");

	  var tueResetDate = document.getElementById("tueResetDate").value;
	  var resetDate;
	  var resetDateMilliseconds;
      if (tueResetDate !== null && tueResetDate != "") {
          resetDate = new Date(tueResetDate);
		  resetDateMilliseconds = resetDate.getTime();		
        }//if//			 
	  
	  var dateString = getDayString(resetDateMilliseconds);
//alert(dateString);
      dateString = fixDateString(dateString);	  
	  for(i = 1; i < 4; i++)
	  {
	    document.getElementById(timeIn[i]).value = dateString;
	    document.getElementById(timeOut[i]).value = dateString;
        // 86400000 milliseconds in a day
		resetDateMilliseconds = resetDateMilliseconds + 86400000;
		dateString = getDayString(resetDateMilliseconds);
		dateString = fixDateString(dateString);		
	  }//for//
	  //document.getElementById(timeIn[0]).value = dateString;
	  //document.getElementById(timeOut[0]).value = dateString; 
	  
	  for(i = 0; i < totalDayLen; i++)
	  {
	    document.getElementById(totalDay[i]).innerHTML = "0";
	  }
	  //alert("reset2 bottom");
	}//reset2//
	
function reset3() {
	// Initialize all date input fields from tue to thu to the starting date incrementing 1 day for each field. 	
//	  alert("reset3 top");

	  var friResetDate = document.getElementById("friResetDate").value;
	  var resetDate;
	  var resetDateMilliseconds;
      if (friResetDate !== null && friResetDate != "") {
          resetDate = new Date(friResetDate);
		  resetDateMilliseconds = resetDate.getTime();		
        }//if//			 
	  
	  var dateString = getDayString(resetDateMilliseconds);
	  dateString = fixDateString(dateString);
	  for(i = 4; i < 7; i++)
	  {
	    document.getElementById(timeIn[i]).value = dateString;
	    document.getElementById(timeOut[i]).value = dateString;
        // 86400000 milliseconds in a day
		resetDateMilliseconds = resetDateMilliseconds + 86400000;
		dateString = getDayString(resetDateMilliseconds);
		dateString = fixDateString(dateString);		
	  }//for//
	  document.getElementById(timeIn[0]).value = dateString;
	  document.getElementById(timeOut[0]).value = dateString; 
	  
	  for(i = 0; i < totalDayLen; i++)
	  {
	    document.getElementById(totalDay[i]).innerHTML = "0";
	  }
	  //alert("reset2 bottom");
	}//reset3//	
	
function getDayString(milliseconds)
	{
//	  alert("getDayString Begin");
	  var dateFullYear;
	  var dateDay;
	  var dateDayString;
	  var dateMonth;
	  var dateMonthString;
	  var dateString;
	  var nextDayMilliseconds;
	  
      var resetDate = new Date(milliseconds);
	 
	  nextDayMilliseconds = milliseconds;
	   
	  dateFullYear = resetDate.getFullYear();
	  
	  nextDayMilliseconds = nextDayMilliseconds + 86400000;
	  resetDate = new Date(nextDayMilliseconds);
	  
	  dateDay = resetDate.getDate();
	  
	  dateDayString;
	  dateDayString = dateDay.toString();
	  if(dateDay.toString().length < 2)
	  {
	     dateDayString='0'+dateDay.toString();
      }
	  
	  dateMonth = resetDate.getMonth() + 1;
	  dateMonthString = dateMonth.toString();
	  if(dateMonth.toString().length < 2)
	  {
	    dateMonthString = '0'+dateMonth.toString();
      }
//	  alert("getDayString Begin"); 
	  return dateString = dateFullYear+'-'+dateMonth+'-'+dateDayString+'T00:00';
	}
function computeTotal()
	{
//	  alert("begin computeTotal");
	  var hoursWorked = document.getElementById("hoursWorked").value;
	  var rateOfPay = document.getElementById("rateOfPay").value;
	  var totalPay;
	  if(isNaN(hoursWorked) || isNaN(rateOfPay))
	  {
	    ;
	  }
	  else
	  {
//	    alert(hoursWorked+" "+isNaN(rateOfPay)+" "+(hoursWorked * rateOfPay));
		totalPay = hoursWorked * rateOfPay;
//		alert(totalPay);
		totalPay = Math.round(totalPay * 100) / 100;
		document.getElementById("totalToPay").innerHTML = ("=  $"+totalPay);
	//	alert(totalPay);
	  }
	}
function fixDateString(dateString)
	{
      var dateParts = dateString.split("-");
	  var dateYear = dateParts[0];
	  var dateMonth = dateParts[1];
	  var dateDayTime = dateParts[2].split("T");
	  var dateDay = dateDayTime[0];
	  var dateTime = dateDayTime[1];
	 // alert(dateYear+' '+dateMonth+' '+dateDay+' '+dateTime);
	 // Pad the month with leading zero if 1 is not present
	  if(dateMonth.length < 2) {
	     dateMonth = '0'+dateMonth.toString();
	  }
	  // Pad the day with leading zero if 1 is not present
      if(dateDay.length < 2) {
	     dateDay = '0'+dateDay.toString();
	  }	  
	  return dateString = dateYear+'-'+dateMonth+'-'+dateDay+'T'+dateTime;	
	}