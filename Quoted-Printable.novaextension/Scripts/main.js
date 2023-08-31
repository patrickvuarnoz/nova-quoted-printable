// Require quoted-printable
const quotedPrintable = require('../Vendor/quoted-printable/quoted-printable-1.0.1.js');



exports.activate = function() {
  // Noop
}



exports.deactivate = function() {
  // Noop
}



// Invoked by the 'encode' command
nova.commands.register('quoted-printable.encode', (editor) => {
  var selectedRanges = editor.selectedRanges.reverse();
  editor.edit(function(e) {
    for (var range of selectedRanges) {
      var text = editor.getTextInRange(range);
      var newText = quotedPrintable.encode(text);
      e.delete(range);
      e.insert(range.start, newText);
    }
  });
});



// Invoked by the 'decode' command
nova.commands.register('quoted-printable.decode', (editor) => {
    var selectedRanges = editor.selectedRanges.reverse();
    editor.edit(function(e) {
      for (var range of selectedRanges) {
        var text = editor.getTextInRange(range);
        var newText = quotedPrintable.decode(text);
        e.delete(range);
        e.insert(range.start, newText);
      }
    });
});
