var ratedItemsEl = $('#ratedItems');

function allStorage() {
        var values = [],
            keys = Object.keys(localStorage),
            i = keys.length;
    
        while ( i-- ) {
            values.push( localStorage.getItem(keys[i]) );
        }
        console.log(keys+values);
        //return values;

        function showRatings(){
            for (let index = 0; index < keys.length; index++) {
                ratedItemsEl.append('<li>'+keys[index]+'&nbsp &nbsp &nbsp <b>Rating:</b> '+values[index]+'</li>');
                //ratedItemsEl.append(values[index]);
                
            }
            
        }
        showRatings();
        
}
    
allStorage();