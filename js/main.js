// Arjun Prakash
// Word Munch
// 07.27.12

function Word( word, location ) {
	this.wordString = word;
	this.count = 1;
	this.locationList = [];
	this.locationList[0] = location;

	this.addLocation = function( newLocation ) {

		this.locationList.push( newLocation );
		this.count = this.count + 1;

	} 
}

function WordList( wordArray ) {

	this.wordMatch = wordArray;
	this.usedWords = [];

	this.process = function() {

		for ( var i = 0; i < this.wordMatch.length; i++ ) {
			
			if ( this.usedWords ) {
				
				var inArray = false;
				
				for ( var j = 0; j < this.usedWords.length; j++ ) { 

					if ( this.wordMatch[i] === this.usedWords[j].wordString ) {

						this.usedWords[j].addLocation( i );
						inArray = true;

					}


				}

				if ( inArray == false ) {

					var newWord = new Word( this.wordMatch[i], i );
					this.usedWords.push( newWord );

				}


			} else {

				var newWord = new Word( this.wordMatch[i], i );
				this.usedWords.push( newWord );
			
			}

			console.log( this.wordMatch[i] );
		
		}

	}

	this.readList = function() {

		for ( var i = 0; i < this.usedWords.length; i++ ) {

			console.log( this.usedWords[i].wordString );
			console.log( this.usedWords[i].count );
			console.log( this.usedWords[i].locationList );
			console.log( "" );

		} 
	}


}

readStream = function ( str ) {

	var wordRegex = /\s*\s|\W\s*\s|\W$/;
	var wordMatches = str.split( wordRegex );

	
	var wordList = new WordList( wordMatches );

	wordList.process();

	console.log( wordMatches );
	console.log( "" );

	wordList.readList();


}


var string01 = "Bacon is awesome! Sometimes, in the morning is best. I’ll have bacon on toast for breakfast."

readStream( string01 );





