// Jordan Nakamura
document.getElementById("details").style.display="none";
		eventHandler = function( event ) {
			/* submits the order form when the user clicks the order
			button and replaces it with thank you message and order
			details */
			event.preventDefault(); // prevents order menu from reappearing 
			// if the string "vegan" is found in the special instructions user will be alerted, if not, order details will be shown 
			
			var textArea = document.getElementById('notes').value;
			
			if(textArea.indexOf('vegan') != -1){
			alert('Warning! Cheesecake contains dairy.')
			}else { 
				$(this).hide();
				
				$("#details").show();
				
				//shows special instrucitons typed by user
				var textNotes = document.getElementById("infoNotes");
				var temp1 = document.getElementById('notes').value
				var notes = document.createTextNode(temp1);
				textNotes.appendChild(notes);
				
				//shows quantity selected
				var textQuant = document.getElementById("infoQuantity");
				var temp2 = document.getElementById('quantity').value
				var quantity = document.createTextNode(temp2);
				textQuant.appendChild(quantity);
				
				if(document.getElementById('plain').checked) {// if value is checked then value will be shown in order details
				
					var temp3 = document.getElementById('plain').value
					
				} else if(document.getElementById('cherry').checked) {
				
					var temp3 = document.getElementById('cherry').value
					
				} else if(document.getElementById('chocolate').checked) {
				
					var temp3 = document.getElementById('chocolate').value
					
				} else {
					alert('Please select a topping.') // if no value is checked user will be alerted 
				}
				var textTopping = document.getElementById("infoTopping");
				var topping = document.createTextNode(temp3);
				textTopping.appendChild(topping);
			}
		  }
		
		$(document).ready(function(){
		  $("#form").submit( eventHandler );
		});