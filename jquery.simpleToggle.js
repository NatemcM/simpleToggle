(function ( $ ) {
	
	$.fn.simpleToggle = function ( options ) {
		
		var defaults = $.extend ({
			// Set defualts for active class and animate class
			activeClass: "active",
			animateClass: "animated", // Based on CSS Animate
			trigger: "click"
		}, options );
		
		return this.on(defaults.trigger, this, function (e) 
		{
			event.preventDefault(); // Prevent the default action firing 
			
			var toggleEle 			= $(this).data('toggle'); 			// Element to toggle
			var toggleClass 			= $(this).data('toggle-class'); 		// Class to add/ remove
			var toggleAnimate 		= $(this).data('toggle-animate');
			
			 // Check if there is a data-toggle-class
			if ( $(this).attr( 'data-toggle-class' ) ) 
			{
				// If so, add these classes to the activator 
				var activate = defaults.activeClass + ' ' + toggleClass;
			}
			
			else 
			{
				// Otherwise just set the active class
				var activate = defaults.activeClass;
			}
			
			// Check for the | char, if found return true
			function checkForSecondaryAnimation() 
			{
				if (toggleAnimate.indexOf('|') === -1 ) 
				{
					return false;
				} 
				
				else 
				{
					return true;
				}
			}
	

			if ( ! $(toggleEle).hasClass(defaults.activeClass) ) 
			{
		   
				if ( $(this).attr('data-toggle-animate') ) 
				{
				
					if(checkForSecondaryAnimation()) 
					{
						var secondaryAnimation = toggleAnimate.split('|');
						toggleAnimate = secondaryAnimation[0];	
	
					}
									
						$(toggleEle).addClass(defaults.animateClass + ' ' + toggleAnimate + ' ' + activate).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () 
						{
							$(this).removeClass(toggleAnimate + ' ' + defaults.animateClass);
						});
					} 
					else 
					{
						$(toggleEle).addClass(activate);
					}
				} 
				
				else
				{
		
					if ( $(this).attr('data-toggle-animate') ) 
					{
						
						if(checkForSecondaryAnimation()) 
						{
							var secondaryAnimation = toggleAnimate.split('|');
							toggleAnimate = secondaryAnimation[1];	
						}
							
						$(toggleEle).addClass(defaults.animateClass + ' ' + toggleAnimate).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () 
						{
							$(this).removeClass(toggleAnimate + ' ' + activate + ' ' + defaults.animateClass);
						});
					}
					
					else 
					{
						$(toggleEle).removeClass(activate);
					}	
				}
		});
	};
	
} ( jQuery ));