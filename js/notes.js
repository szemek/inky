var Note = function(header, content){
  this.header = header;
  this.content = content;
}

$(document).ready(function(){
  $('#notes').each(function(){
    var viewModel = {
      notes: [
        new Note("Hello", "World!"),
        new Note("Hello", "You!")
      ],
      showRenderTimes: ko.observable(false)
    };

    ko.applyBindings(viewModel);
  });
});
