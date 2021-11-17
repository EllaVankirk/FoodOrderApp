# Notes for FoodApp

## Use filename.module.css (only supported with create-react-app). Using modular css prevents scoping issues. React will give each class its own unique name upon compiling so that there will be no conflicts.

## HEADER COMPONENT:
   - [ ] The header displays an app name and a cart.
   - [ ] The cart button is created in a separate component, and then called(?) in the Header component.
   - [ ] The cart button is made out of an icon, some text/badge and a quantity

## MealItemForm and Input component:
   - [ ] Make sure you look at the two components side by side! It becomes more clear what is happening.

   - [ ] We create an input component so that it is styled and reusable. We could make it so that we can choose the kinds of input, but we haven't in this case.
   - [ ] In the Input component, the htmlFor is just the JS equivalent/replacement of 'for'. Here it is looking at our input object and setting the html for as 'amount'.
   - [ ] in the <input {...props.input}> we take and then use it to set up the usual html settings we want, in this example setting a minimum and maximum, and amount to increment and a default.
   - [ ] We could call <Input /> anywhere and as long as it's an <input> type we're using, configure it to whatever we want. 