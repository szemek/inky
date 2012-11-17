var Note = function(id, header, content){
  this.id = id;
  this.header = header;
  this.content = content;

  this.save = function(){
    var storage = window['localStorage'];
    storage[this.id] = JSON.stringify(this);
  }
}

Note.all = function(){
  var storage = window['localStorage'];
  collection = [];

  for(key in storage){
    item = JSON.parse(storage[key]);
    note = new Note(key, item['header'], item['content']);
    collection.push(note)
  }

  return collection;
}

$(document).ready(function(){
  $('.note').on('click', 'h1, p', function(){
    $('[contenteditable=true]').removeAttr('contenteditable');
    $(this).attr('contenteditable', 'true');
  });

  $('.note button').on('click', function(){
    note_element = $(this).parent();
    id = note_element.attr('data-id');
    header = note_element.find('h1').text();
    content = note_element.find('p').text();
    note = new Note(id, header, content);
    note.save();
  });
});
