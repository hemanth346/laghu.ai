import React from "react";

var __html = require('./text_classify.html');
var template = { __html: __html };

var TextClassifier = React.createClass({
  render: function() {
    return(
      <div dangerouslySetInnerHTML={template} />
    );
  }
});

export default TextClassifier;

const TextClassifier = () => {
    return (
    <>
<h1 align="middle" >Train a text classifer on your custom data</h1>
<h3>
  Please Note: 
</h3>
  <li>1. Number of class labels are restricted to 2 </li>
  <br>
  <li>2. Please only upload csv files with 2 columns </li>
  <br>
  <li>3. First column should be target variable, 2nd column should be text to train on </li>
  <br>   


<div id="textdata">

    <h1>File Upload</h1>
    <form id="trainingData" method ="POST"  enctype= "multipart/form-data" name = 'trainingData' action = "/classify/text" >
    
    <p>Upload csv file : </p>
    <p><input type="file" name="textfile" multiple action="csv/*"></p>
    <p><input type="submit" value="Submit"></p>
</form>

</div>
    </>
    )
    }