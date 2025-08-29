## Answer the following questions clearly:

## 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

### Ans: 
<table border=1 width="100%" cellpadding="50">
<tr>
    <td >getElementById</td>
    <td > getElementsByClassName</td>
    <td >querySelector / querySelectorAll</td>
 </tr>
    <tr>
    <td>Working with id</td>
    <td>Working with class</td>
    <td>Working with id,class, attribute, pseudo-class and pseudo-element selectors
    </td>
    
 </tr>
  <tr>
    <td>Find Only one element</td>
    <td>Find all elements under the class </td>
    <td>Find the first matching element</td>
    
 </tr>
  <tr>
    <td>Use to Limited requirement </td>
    <td>Use to find similar type value get</td>
    <td>Use in complex css</td>
    
 </tr>
  <tr>
    <td>Very faster</td>
    <td>Slower than (getElementById)</td>
    <td>More slower both of them </td>
    
 </tr>

</table>



##
## 2. How do you create and insert a new element into the DOM?

### Ans: 
      
👉 Looking like this :  

```js
const value = document.createElement("value-id");  
div.innerText = "Hello!";  
document.body.appendChild(div);  

```
##
## 3. What is Event Bubbling and how does it work?
### Ans:
Even Bubbling means anyone click on a child element, first response or runs on that element and then parent will 'bubbles up' then grand paren and so on 

#### Example: click a ---> button (child) ----> then div (parent) ---> then body (root/ grandparent)
##



## 4.What is Event Delegation in JavaScript? Why is it useful?
### Ans: 
In JavaScript , Put one event on a parent and it works for every child element is called event delegation.

why use ? 
- save memory
- easier code
- less code 
- works for new element
##

## 5. What is the difference between preventDefault() and stopPropagation() methods?

### Ans:  
#### preventDefault() : Work on stopping browser default action.
- like - click a link won't response or open.

#### stopPropagation(): Work on stop event from going up ("bubbling")
- like- click a button (child) inner of a div (parent) won't trigger the div's click. 
##

- ## [🌐Live-Link](https://shahidur-rahman18.github.io/assignment-5/)
