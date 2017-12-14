  function date_time(id) {
        date = new Date;
        year = date.getFullYear();
        month = date.getMonth();
        months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'Jully', 'August', 'September', 'October', 'November', 'December');
        d = date.getDate();
        day = date.getDay();
        days = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');
        days = new Array('Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat');
        h = date.getHours();
		m = date.getMinutes();
		am_pm = "";
        if(h<10)
        {
                h = "0"+h;
        }
		if(h>12)
		{
				am_pm = "PM";
		}
		if(h<12)
		{
		 		am_pm = "AM";
		}		
		if(h==12 && m==0)
		{
		 		am_pm =	"NOON";	
		}
		if(h==12 && m>0)
		{
		 		am_pm = "PM";
		}
		if(h>12)
		{
		 		h = h - 12;
		}
        if(m<10)
        {
                m = "0"+m;
        }
        s = date.getSeconds();
        if(s<10)
        {
                s = "0"+s;
        }
		monthString = (month + 1).toString();
		if(month+1 < 10)
		{
		 		monthString = "0" + (month+1); 
		}
		dayString = d.toString();
		if(d<10)
		{
		 		dayString = "0" + d;
		}
        dateResult = ''+monthString+'/'+dayString+'/'+year+' '+days[day]+"&nbsp;&nbsp;&nbsp;&nbsp;"+h+':'+m+':'+s+' '+am_pm;
        document.getElementById(id).innerHTML = dateResult;
        setTimeout('date_time("'+id+'");','5000');
        return true;
}