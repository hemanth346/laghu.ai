var idx = 2

function addNewClass()
{
	if(idx<5)
	{
	idx++;
	var form = document.getElementById("trainingData");
	var cls_id = 'cls_' + idx
	var cfiles_id = 'cfiles_' + idx
	
	// form.innerHTML  += '<p>Class label #'+ idx + ': <input type="text" label="' + cls_id + '" name="' + cls_id + '" ></p>';
	form.innerHTML  += '<p>Class label #'+ idx + ': <input type="text" id="'+ cls_id + '" label="' + cls_id + '" name="' + cls_id + '" ></p>';
	form.innerHTML  += '<p><input type="file" id="'+ cls_id + '" label="' + cfiles_id + '" name="' + cfiles_id + '" multiple action="image/*" ></p> <hr>';
}

else
{
	alert("Restricted upto 5 classes only...")
}

}


function verifyFileSelection(){
	 
	for( var i=1; i<idx; i++)
	{
		let ele = document.getElementById("cls_"+i).value;//'txt'+i.toString()).value;

		console.log("hello: " +ele);

		console.log(i);
		if( ele === "")
		{
			alert("invalid class entry");
			return false;
		}
			
		else
			console.log("success");
  
  return true;

	}
	
	// console.log(ele.files.length); // logs number of files selected
}


function verifyClassname()
{
	var clsList = []
	for( var i=1; i<idx; i++)
	{
		let ele = document.getElementById("cls_"+i).value;
		if (clsList.includes(ele) == true)
			{
				alert("No two class can have the same name ")
				return false;
			}
		clsList.push(ele);

		console.log("Everything is set");

	}
return true;
}


function verifyNumFiles(){
	for( var i=1; i<idx; i++)
	{
	let ele = document.getElementById("cfiles_"+i);
	if(ele.files.length < 1 )
		{
			alert("Minimum 10 Files required for each class");
			return false;
		}
	if(ele.files.length >100)
	{
		alert(" Not more than 100 files please");
		return false;
	}
}
return true;
}


function VerifyAddUpload()
{
	if (verifyFileSelection() == true)
	if(verifyClassname() == true)
	  if(verifyNumFiles() == true)
		  {
			  alert("Everything is set for upload");
			  var form = document.getElementById("trainingData");
			  form.innerHTML += ' <div align="middle" > <button type="button" margin: 0 auto style="font-size: 18px;" class = "buttonadd" onclick="verifyData()"> Upload to S3 and start training</button> </div>'
		  }
}

function UploadData()
{
				 document.trainingData.submit();
}