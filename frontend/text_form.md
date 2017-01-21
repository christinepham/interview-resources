Using a text form, when you hit ‘Enter’ have each item get populated to a list
Each item in the list must also have a ‘Delete’ button that removes it

[JS Fiddle](https://jsfiddle.net/r6Lcyuvq/1/)

```html
Item To Add: 
<input type="text" id="itemName" onkeypress='updateItem(event)'>
<br>
<p>Items Added:</p>
<ul id="itemList"></ul>
```

```javascript
var list = document.getElementById('itemList');
var lastid = 0;

function updateItem(e) {
	if(e.keyCode === 13) {
  	e.preventDefault();
    
   	var itemToAdd = document.getElementById('itemName').value;
    var entry = document.createElement('li');
    entry.appendChild(document.createTextNode(itemToAdd));
    entry.setAttribute('id','item'+lastid);
    entry.setAttribute('data-name',itemToAdd);
    
    //delete button
    var deleteButton = document.createElement('button');
    deleteButton.appendChild(document.createTextNode("remove"));
    deleteButton.setAttribute('onClick','removeItem("'+'item'+lastid+'")');
    entry.appendChild(deleteButton);
    lastid+=1;
    list.appendChild(entry);
  }
   
}


function removeItem(itemid){
    var item = document.getElementById(itemid);
    list.removeChild(item);
}

function getItems(){
    var items = [];
    for(var i=0;i<list.children.length;i++){
        items.push(list.children[i].getAttribute("data-name"));
    }
    return items;
}
```
