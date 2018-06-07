var snippets = [];
$(document).ready(function() {
  $('.setSnippet').on('click', function() {
    let textAreaValue = $('.textArea').val();
    let textFieldValue = $('.textField').val();
    localStorage.setItem('myFormTextData', textFieldValue);
    $('.textField').val('');
    localStorage.setItem('myFormSnippetData', textAreaValue);
    $('.textArea').val('');
 // Save array of snippets in localStorage:
    var individualSnippet= {};
    individualSnippet[textFieldValue] = textAreaValue;
    snippets.push(individualSnippet);
    let retrieveCurrentSnippetArrStr = localStorage.getItem('snippetsArray');
    if (retrieveCurrentSnippetArrStr === '') {
      retrieveCurrentSnippetArrStr = '[]';
    }
    let retrieveCurrentSnippetArr = JSON.parse(retrieveCurrentSnippetArrStr);
    localStorage.setItem('snippetsArray', JSON.stringify(retrieveCurrentSnippetArr.concat(individualSnippet)));
  });
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
//Ignore this:
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