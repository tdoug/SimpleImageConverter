Dropzone.options.uploadform = {
  init: function() {
    this.on("complete", function(file) 
    	{ 
    		$.get('/results', function(data){
    			$('#results').html(data);
    		});
    	});
  }
};