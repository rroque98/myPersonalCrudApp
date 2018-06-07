var snippets = [];
// Store values in local storage:
$(document).ready(function() {
  // localStorage.setItem('snippetsArray', JSON.stringify([]));
  $('.setSnippet').on('click', function() {
    let textAreaValue = $('.textArea').val();
    let textFieldValue = $('.textField').val();
    // $('debug').text(textAreaValue);
    localStorage.setItem('myFormTextData', textFieldValue);
    $('.textField').val('');
    localStorage.setItem('myFormSnippetData', textAreaValue);
    $('.textArea').val('');
    //create an array that is stored in local storage --> snippetArray

    //
    var individualSnippet= {};
    individualSnippet[textFieldValue] = textAreaValue;
    snippets.push(individualSnippet);
    let retrieveCurrentSnippetArrStr = localStorage.getItem('snippetsArray');
    if (retrieveCurrentSnippetArrStr === '') {
      retrieveCurrentSnippetArrStr = '[]';
    }
    let retrieveCurrentSnippetArr = JSON.parse(retrieveCurrentSnippetArrStr);
    localStorage.setItem('snippetsArray', JSON.stringify(retrieveCurrentSnippetArr.concat(individualSnippet)));
    // get value of current snippetArray.
    //after you click on set snippet
      // this should concat the current snippetArray value with the snippet.
    // each time you clikc on set Item, it will add the current snippets as a string
    //if current stored snippet array value === ''
      // set current stored snippet array to []
    // else concat currentSnippetArray with indiv snippet
  });
// Retrieve previously saved snippet from local storage:
  // $('.getSnippet').on('click', function() {
  // 	// let retrieveData = localStorage.getItem('myFormTextData');
  // 	// $('.retrievedSnippetName').text(retrieveData);
  // 	// let retrieveSnippetData = localStorage.getItem('myFormSnippetData');
  // 	// $('.debug').text(retrieveSnippetData);

  //   let saved = JSON.parse(localStorage.getItem('snippetsArray'));
  //   let previousSnip = saved[saved.length - 1];
  //   for (var sName in previousSnip) {
  //     $('.debug').append('<div><pre class="codeName">' + sName + '</pre><pre class="codeContents">' + previousSnip[sName] + '</pre></div>');

  //   }
  	// savedSnippets.forEach(function(snip) {
  	//   for (var snipName in snip) {
   //      $('.debug').append('<div><pre class="codeName">' + snipName + '</pre><pre class="codeContents">' + snip[snipName] + '</pre></div>');
  	//   }

  // });
// Display all snippets:
  $('.getAllSnippets').on('click', function() {
  	let savedSnippets = JSON.parse(localStorage.getItem('snippetsArray'));
  	savedSnippets.forEach(function(snip) {
  	  for (var snipName in snip) {
        $('.debug').append('<div><pre class="codeName">' + snipName + '</pre><pre class="codeContents shadow-lg">' + snip[snipName] + '</pre></div>');
  	  }
  	});
  });
// Search button functionality:
  $('.findButton').on('click', function() {
  	let searchInput = $('.searchField').val();
  	let savedSnips = JSON.parse(localStorage.getItem('snippetsArray'));
  	savedSnips.forEach(function(indSnip) {
  	  for (var name in indSnip) {
  	    if (name === searchInput) {
          $('.debug').replaceWith('<div><pre class="codeName">' + name + '</pre><pre class="codeContents shadow-lg">' + indSnip[name] + '</pre></div>')
  	    }
  	  }
  	});
  });
});

  // $('.setData').on('click', function() {
  //   let textFieldValue = $('.textField').val();
  //   // console.log(textFieldValue);
  //   $('debug').text(textFieldValue);
  //   localStorage.setItem('myFormTextData', textFieldValue);
  //   $('.textField').val('');
  // });
  // $('.getData').on('click', function() {
  // 	let retrieveData = localStorage.getItem('myFormTextData');
  // 	$('.debug').text(retrieveData);
  // });
  // $('.textField').on('keyup', function() {
  // 	let textFieldValue = $('.textField').val();
  // });