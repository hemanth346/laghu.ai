import React from "react";

var __html = require('./image_classify.html');
var template = { __html: __html };

var ImgClassifier = React.createClass({
  render: function() {
    return(
      <div dangerouslySetInnerHTML={template} />
    );
  }
});

export default ImgClassifier;
