// Helper to get hash from end of URL or generate a random one.
function getExampleRef() {
  var ref = firebase.database().ref();
  var hash = window.location.hash.replace(/#/g, '');
  if (hash) {
    ref = ref.child(hash);
  } else {
    ref = ref.push(); // generate unique location.
    window.location = window.location + '#' + ref.key; // add it as a hash to the URL.
  }
  if (typeof console !== 'undefined') {
    console.log('Firebase data: ', ref.toString());
  }
  return ref;
}

function initFirepad() {
  //// Initialize Firebase.
  //// TODO: replace with your Firebase project configuration.
  var config = {
    apiKey: "AIzaSyC_JdByNm-E1CAJUkePsr-YJZl7W77oL3g",
    authDomain: "firepad-tests.firebaseapp.com",
    databaseURL: "https://firepad-tests.firebaseio.com"
  };
  firebase.initializeApp(config);
  //// Get Firebase Database reference.
  var firepadRef = getExampleRef();
  //// Create CodeMirror (with lineWrapping on).
  var codeMirror = CodeMirror(document.getElementById('firepad-container'), { lineWrapping: true });
  //// Create Firepad (with rich text toolbar and shortcuts enabled).
  var firepad = Firepad.fromCodeMirror(
    firepadRef,
    codeMirror,
    { richTextToolbar: true,
      richTextShortcuts: true});
  //// Initialize contents.
  firepad.on('ready', function() {
    if (firepad.isHistoryEmpty()) {
      firepad.setHtml($('#article_rendered_description').val());
    }
  });
  firepad.on('synced', function(isSynced) {
    $('#article_raw_description').val(firepad.getText());
    $('#article_rendered_description').val(firepad.getHtml());
    // isSynced will be false immediately after the user edits the pad,
    // and true when their edit has been saved to Firebase.
  });
}
