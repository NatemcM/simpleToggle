# Simple Toggle 
A simple jQuery plugin inspired by Gumby Framework toggle/switch plugin. It allows you to create toggles by specifying data attributes in the trigger element. This is my first jQuery plugin, and as such, is probably riddled with mistakes, bugs and issues. 

## Using Simple Toggle
The easiest way to use simpleToggle is to define a `data-toggle` attribute with the class or id of the target element  

	<a href="#" class="toggle" data-toggle=".dropdown">Trigger Element</a>
	
Call the plugin on the `.toggle` class

	$('.toggle').simpleToggle();

The above code will toggle the visibility of the `.dropdown` element by adding an `active` class. Meaning in your stylesheet you need to hide the target element using either `visibility: hidden` or `display: none` and create an `active` class with either `visibility: visible` or `display: block` (depending on how you like to hide things). 

## Adding Animation 
Straight of the bat simpleToggle is designed to work with CSS Animate, CSS Animate is an amazing stylesheet by [Daniel Eden](https://daneden.me/) (you can download CSS Animate [here](https://daneden.github.io/animate.css/)). 

Simply define the `data-toggle-animate` attribute with one of CSS Animates classes 

	<a href="#" class="toggle" data-toggle=".dropdown" data-toggle-animate="slideInUp">Trigger Element</a>
	
If your trigger element is used to both show and hide the target element you can define the hide animation using a `|` character 

	<a href="#" class="toggle" data-toggle=".dropdown" data-toggle-animate="slideInUp | slideOutDown">Trigger Element</a>
	
### Something to note
The plugin will automatically remove the animation classes upon completion of the animation, this is to allow the secondary animation to be called without causing issues. The code use to remove these classes is taken directly from Daniels CSS Animate demo page. (Thanks Daniel)

## Adding Additional Classes 
If you need to add any additional classes to the target element you can define them using the `data-toggle-class` attribute 

	<a href="#" class="toggle" data-toggle=".dropdown" data-toggle-animate="slideInUp | slideOutDown" data-toggle-class="one two three">Trigger Element</a>
	
## Options 
There are three different options for simpleToggle 

- trigger: The trigger event, default is `click`, you can use `mouseenter` etc. If you are using some form of jQuery mobile, I would recommend using `tap` that way you get rid of the 300ms delay on phones.
- activeClass: The active class, default is `active`, change this to your active class i.e. `show`, `display` etc
- animateClass: By default CSS Animate needs the `animated` class to be added to the element, if you are using your own animations you can just use `false` or `null` to remove the `animated` class, or change it to meet your own needs 

##Version

0.0.1 (alpha)

- First iteration of plugin 
- Support for CSS Animate features  