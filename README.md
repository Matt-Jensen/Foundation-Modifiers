Foundation-Modifiers
====================

A long list of BEM inspired class modifiers to extend the functionality of Foundation

More detailed instructions and examples are in the pipeline.

Until then just include these scss files AFTER the Foundation scss files and functions as such:
`@import: "foundation"`;

`// Now you can include the -modifiers`
`@import: "foundation-modifiers/modifiers";`

Using a lot of Foundation's conventions so variables used in the package are defined in `components/_global.scss`.  The _functions.scss file is included by the individual component files that require it.

This project isn't large so just poke around or tweet me @madmattican if you have questions / comments.