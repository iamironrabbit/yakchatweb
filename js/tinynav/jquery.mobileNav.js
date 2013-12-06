/*
 * jQuery.mobileNav - Transform your main navigation into a select object for mobile browsers
 * Copyright © 2012 Vincent Bianciotto - http://www.celavi.fr
 * Dual licensed under MIT and GPL.
 * Date: 3/11/2012
 * @author Vincent Bianciotto
 * @version 0.1
 */
 
(function($){
  $.fn.mobileNav = function(options) {
  
    var defaults = {
      classNav: 'mobile-nav',
      idNav: 'mobile-nav',
      container: $('.header nav'),
      label: 'Navigation'
    };
    
    var options = $.extend(defaults, options);
  	var nav = $(this);

  	// Create <select> object
    var selectNav = $('<select />', {id: options.idNav, class: options.classNav});
  	
    // Else if just append <select> to the container 
  	options.container.append(selectNav);

  	// Populate nav items in <select>
  	nav.find('a').each(function(){
      var textNav = $(this).text();
      var valueNav = $(this).attr('href');
      var optionNav = $('<option />', {
        value: valueNav,
        text: textNav
      })
      
      selectNav.append(optionNav)
  	});

    // Prepend label  	
  	selectNav.prepend('<option value="label">Navigation</option>');
  	
  	// Actions on change <select>
  	selectNav.change(function(){
      currentValue = $(this).attr('value');
      
      // Get window location on each option except for label
      if(currentValue != 'label'){
        window.location = $(this).val();
        // Remove all selected attr on option children
        $('option').removeAttr('selected');
        // Set current option selected
        $('option[value='+currentValue+']').attr('selected', 'selected');
      }
  	});
  
  };
})(jQuery);