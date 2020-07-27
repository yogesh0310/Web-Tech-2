document.querySelector('#submit').addEventListener("click",displayEntry);
var sec1=document.getElementById("s1");
var sec2=document.getElementById("s2");
var sec3=document.getElementById("s3");
sec1.style.display="block";
  let row=1;
        function displayEntry() {
        	
        	var regName = /^[a-zA-Z]+ [a-zA-Z]+$/
        	var regPh=/^([0|\+[0-9]{1,5})?([7-9][0-9]{9})$/;
        	var regEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            var t=new Date();
            var time=t.getTime();
            console.log(time);
            var fn=document.getElementById("fname").value;
            var mn=document.getElementById("mname").value;
            var ln=document.getElementById("lname").value;
            var email=document.getElementById("email_id").value;
            var mobile=document.getElementById("mob").value;
            var add=document.getElementById("add").value;
            var institute=document.getElementById("iname").value; 
            var gender=document.querySelectorAll('input[type="radio"]');
            var events=document.querySelectorAll('input[type="checkbox"]');
            var sel=document.getElementById("dept");
            //console.log(sel);
            var opt=sel.options[sel.selectedIndex];
            var d=new Date();
            var time=d.toLocaleTimeString();
            let selectedValue;
            for (const gen of gender) {
                if (gen.checked) {
                    selectedValue = gen.id;
                    break;
                }
            }
            console.log(events);
            let eventdetails="";
            for (const e of events) {
                if (e.checked) {
                    eventdetails =eventdetails + " "+e.name;
                }
            }
            if (!fn || !mn || !ln || !email || !institute || !add|| !events || !mobile) {
                alert('Please fill all details');
                return;
            }
            var display=document.getElementById("display");
            var newrow=display.insertRow(row);
            var cell1=newrow.insertCell(0);
            var cell2=newrow.insertCell(1);
            var cell3=newrow.insertCell(2);
            var cell4=newrow.insertCell(3);
            var cell5=newrow.insertCell(4);
            var cell6=newrow.insertCell(5);
            var cell7=newrow.insertCell(6);
            var cell8=newrow.insertCell(7);
            var cell9=newrow.insertCell(8);
            var cell10=newrow.insertCell(9);
            var cell11=newrow.insertCell(10);
            if (fn.length < 3) {
            		alert('Enter valid first name');
            }
            else if (mn.length < 3) {
            	alert('Enter valid middle name');	
            }
            else if (ln.length < 3) {
            	alert('Enter valid last name');	
            }
            else if(!regPh.test(mobile)){
            	alert('Enter valid mobile number');
            }
            else if(!regEmail.test(email))
            {
            	alert("Enter valid email_id");
            }
            else if(add.length<5){
            	alert("Enter full address");
            }
            else if(institute.length<15)
            {
            	alert("Enter full name of institute.");
            }
            else{
            	cell1.innerHTML=time;
	            cell2.innerHTML=fn;
	            cell3.innerHTML=mn;
	            cell4.innerHTML=ln;
	            cell5.innerHTML=mobile;
	            cell6.innerHTML=email;
	            cell7.innerHTML=institute;
	            cell8.innerHTML=add;
	            cell9.innerHTML=opt.value;
	            cell10.innerHTML=selectedValue;
	            cell11.innerHTML=eventdetails;

	            row++;
	            alert("Your registration is done successfully");
        		
            }
            document.getElementById('fname').value='';
            document.getElementById('mname').value='';
            document.getElementById('lname').value='';
            document.getElementById('iname').value='';
            document.getElementById('mob').value='';
            document.getElementById('email_id').value='';
            document.getElementById('add').value='';
           
            
            
            //var f1=document.getElementById('f1');
            //f1.reset();
            

        }
    
        function disp(e) {
        
            if (e=='1') 
            {
                
                    sec1.style.display="block";
                    sec2.style.display="none";  
                    sec3.style.display="none";
            }
            else if(e == '2')
            {
                    sec2.style.display="block";
                    sec1.style.display="none";  
                    sec3.style.display="none";
            }
            else
            {
                    sec3.style.display="block";
                    sec1.style.display="none";  
                    sec2.style.display="none";
                
            }
        }
