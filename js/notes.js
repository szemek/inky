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

Note.render = function(collection){
  collection.forEach(function(note){
    template = $('#template').html();
    note_element = template.replace('{{ data-id }}', note['id']);
    note_element = note_element.replace('{{ header }}', note['header']);
    note_element = note_element.replace('{{ content }}', note['content']);
    $('#notes').append(note_element);
  });
}

$(document).ready(function(){
  $('#notes').on('click', '.note h1, .note p', function(){
    $('[contenteditable=true]').removeAttr('contenteditable');
    $(this).attr('contenteditable', 'true');
  });

  $('#notes').on('click', '.note button', function(){
    note_element = $(this).parent();
    id = note_element.attr('data-id');
    header = note_element.find('h1').text();
    content = note_element.find('p').text();
    note = new Note(id, header, content);
    note.save();
  });

  Note.render(Note.all());
});
