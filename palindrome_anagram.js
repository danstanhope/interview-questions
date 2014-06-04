var SI = window.SI = window.SI || {};

SI = {
	isPalindrome : function(string){
		var arr = string.replace(/\s/g,'').toLowerCase().split(''), 
			len = Math.floor(arr.length/2),
			cmp, 
			counter = 0;

		for(var i = 0; i < len; i++){
			cmp = arr.length - (i + 1);

			if(arr[i] === arr[cmp]){
				counter++;
				
				if(counter === len){
					return true;
				}				
			}
		}

		return false;
	},
	isAnagram : function(string1, string2){
		var arr1 = string1.replace(/\s/g,'').toLowerCase().split(''),
			arr2 = string2.replace(/\s/g,'').toLowerCase().split('');

		if(arr1.length !== arr2.length)
			return false;	

		arr1 = arr1.sort();
		arr2 = arr2.sort();

		for(var i = 0; i < arr1.length; i++){
			
			if(arr1[i] !== arr2[i])
				return false;
		}	

		return true;
	}
};

SI.isPalindrome("tacocat");
//returns true;

SI.isPalindrome("radar");
//returns true;

SI.isPalindrome("anna");
//returns true;

SI.isPalindrome("A but tuba");
//returns true;

SI.isPalindrome("pickles");
//returns false;

SI.isAnagram("pickles", "pickles");
//returns true;

SI.isAnagram("A gentleman", "Elegant man");
//returns true;

SI.isAnagram("Dormitory", "dirty room");
//returns true;


