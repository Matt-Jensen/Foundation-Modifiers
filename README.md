Foundation-Modifiers
====================

A treasure chest of .-utility-classes that modify, extend and supercharge the classes and global variables provided by [Zurb's Foundation For Sites](http://foundation.zurb.com). This is an opinionated SCSS project devoted to developer productivity and maintaining design consistency.


## Setup

__Requires: [Zurb Foundation!](http://foundation.zurb.com) (For Sites)__

In order to include Foundation-Modifiers in your SCSS project first include Foundation in your main SCSS file.
	
	@import: "foundation";

Now below this you can include foundation-modifiers:
	
	@import: "foundation-modifiers/modifiers";


## Project Structure

Using a lot of Foundation's conventions so variables used in the package are defined in `components/_global.scss`.  The _functions.scss file is included by the individual component files that require it.

This project isn't large so just poke around or tweet me [@madmattican](http://twitter.com/madmattican) if you have questions / comments.


## Foundation-Modifier's Variable Reference

*General:*
    
    $rem-base-val
    $scaled-rem-base-val

*Vertical Heights Baselines:*
    
    $xsmall-baseline-val
    $xsmall-baseline
    $small-baseline-val
    $small-baseline
    $default-baseline-val
    $default-baseline
    $large-baseline-val
    $large-baseline
    $xlarge-baseline-val
    $xlarge-baseline
    $xxlarge-baseline-val
    $xxlarge-baseline

*Associate Media Queries to Baselines:*
	
	$mediaQueries
	$baselineRefs

*Font Families:*
	
	$sans-serif-font-family
	$sans-serif-font-style
	$sans-serif-font-weight

	$serif-font-family
	$serif-font-style
	$serif-font-weight

*Type Sizes:*
	
	$font-size-xlarge-val
	$font-size-xlarge
	$font-size-large-val
	$font-size-large
	$font-size-base-val
	$font-size-base
	$font-size-small-val
	$font-size-small
	$font-size-xsmall-val
	$font-size-xsmall
	$scaled-font-size-xlarge-val
	$scaled-font-size-xlarge
	$scaled-font-size-large-val
	$scaled-font-size-large
	$scaled-font-size-base-val
	$scaled-font-size-base
	$scaled-font-size-small-val
	$scaled-font-size-small
	$scaled-font-size-xsmall-val
	$scaled-font-size-xsmall

*Additional Colors:*
	
	$white-color
	$black-color
	$gray
	$gray-90
	$gray-80
	$gray-70
	$gray-60
	$gray-50
	$gray-40
	$gray-30
	$gray-20
	$gray-10


<!-- ## Vertical Height Baselines -->

<!-- This is probably the most important part of Foundation-Modifiers -->
