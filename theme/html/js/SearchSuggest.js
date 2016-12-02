// JScript File
var maxDivId,currentDivId,strOriginal;
var urlroot = '/'; 

function getXmlHttpRequestObject() 
{	
    if (window.XMLHttpRequest) 
    {
        return new XMLHttpRequest();	
    } 
    else if(window.ActiveXObject) 
    {
        return new ActiveXObject("Microsoft.XMLHTTP");	
    }
    else
    {
        alert("Your Browser Sucks!\nIt's about time to upgrade don't you think?");	
      }
}
//Our XmlHttpRequest object to get the auto suggestvar 
searchReq = getXmlHttpRequestObject();
//Called from keyup on the search textbox.//Starts the AJAX request.
function searchSuggest(e) 
{

     var key = window.event ? e.keyCode : e.which;
     
      if (key==40 || key==38)
      {
       //scrolldiv(key); 
      }
      else {
          
      if (searchReq.readyState == 4 || searchReq.readyState == 0) {
         
        var str = escape(document.getElementById('txtSearch').value);
            
        strOriginal = str;
        searchReq.open("GET", '/Result.aspx?search=' + str, true);		
        searchReq.onreadystatechange = handleSearchSuggest;
        searchReq.send(null);

        //alert(str);
       	}		
       	
      } 	
      
      
       	
}
//Called when the AJAX response is returned.
function handleSearchSuggest()
 {
  if (searchReq.readyState == 4) 
      {
          var ss = document.getElementById('search_suggest');
          ss.innerHTML = '';
          var str = searchReq.responseText.split("~");
         
          if(str.length > 1)
          {
           
          	for(i=0; i < str.length - 1; i++) 
          	{
          	//Build our element string.  This is cleaner using the DOM, but			
          	//IE doesn't support dynamically added attributes.
       
          	   maxDivId=i;
          	   currentDivId=-1;
          	   var suggest =  '<div ';
          	       suggest += 'id=div'+ i;  
          	       suggest += '  '
          	       //suggest += 'onmouseover="javascript:suggestOver(this);" ';
          	       //suggest += 'onmouseout="javascript:suggestOut(this);" ';
          	       //suggest += 'onclick="javascript:setSearch(this.innerHTML);" ';
          	       
          	       suggest += 'class="suggest_link">' + str[i] + '</div>';
          	       ss.innerHTML += suggest;
          	       ss.style.visibility='visible';
          	}	
           }
           else	
          	{
          	
          	    ss.style.visibility='hidden';
          	}
       }
       
 }
 
 //Mouse over function
 function suggestOver(div_value) 
 {	div_value.className = 'suggest_link_over';
   
 }


 function searchRedirect() {
    var str = escape(document.getElementById('txtSearch').value);    
    var url = urlroot + "search.aspx?k=" + str;         
    window.location.href = url;
}




//-------------------------------

