var toRemove = document.getElementById("toRemove");

begin("puppy");

function searchByValue()
{
    var outer = document.getElementById("outer");
    console.log("outer is ",outer);
    outer.remove();

    var outer = document.createElement("div");
    outer.setAttribute("id", "outer");
    toRemove.appendChild(outer);
    var searchtext = document.getElementById("inp").value;
    console.log("Search is ", searchtext);

    begin(searchtext);
}    

var res;
function begin(searchtext)
{
    fetch(`https://pixabay.com/api/?key=17262018-6f70c20e39fc664a826d27640&q=${searchtext}&image_type=photo`)
    .then((res) => {
    return res.json();
    }).then((res) => {
    console.log('res is now:', res)
    console.log('hits is now:', res.hits)



    
    for(i = 0 ; i < 20; i++)
    {
        console.log(i, "     ",  res.hits[i].likes);
        
        var cont = document.createElement("div");
        cont.setAttribute("id", "cont");

        var img = document.createElement("img");
        img.src = res.hits[i].webformatURL;

    //    console.log(img);
    //    console.log("image is ", img.src);

        cont.appendChild(img);

        var title = document.createElement("div");
        title.textContent = "Photo by " + res.hits[i].user;

        cont.appendChild(title);

        outer.appendChild(cont);

        var cont2 = document.createElement("div");
        cont2.setAttribute("id", "cont2");

        var o1 = document.createElement("div");
        o1.setAttribute("id", "o1");

        var o2 = document.createElement("div");
        o2.setAttribute("id", "o2");

        var i1 = document.createElement("i");
        i1.setAttribute("class", "fa fa-thumbs-up");
        i1.style.fontSize = "24px";

        var text = document.createElement("div");
        text.textContent = res.hits[i].likes;


        o2.appendChild(i1);
        o2.appendChild(text);
        
        o1.appendChild(o2);
        cont2.appendChild(o1);
        cont.appendChild(cont2);


        var o1b = document.createElement("div");
        o1b.setAttribute("id", "o1");

        var o2b = document.createElement("div");
        o2b.setAttribute("id", "o2");

        var i1b = document.createElement("i");
        i1b.setAttribute("class", "fa fa-comment-o");
        i1b.style.fontSize = "24px";

        var textb = document.createElement("div");
        textb.textContent = res.hits[i].comments;

        o2b.appendChild(i1b);
        o2b.appendChild(textb);
        
        o1b.appendChild(o2b);
        cont2.appendChild(o1b);
        cont.appendChild(cont2);

        var o1c = document.createElement("div");
        o1c.setAttribute("id", "o1");

        var o2c = document.createElement("div");
        o2c.setAttribute("id", "o2");

        var i1c = document.createElement("i");
        i1c.setAttribute("class", "fa fa-eye");
        i1c.style.fontSize = "24px";

        var textc = document.createElement("div");
        textc.textContent = res.hits[i].views;

        o2c.appendChild(i1c);
        o2c.appendChild(textc);
        
        o1c.appendChild(o2c);
        cont2.appendChild(o1c);
        cont.appendChild(cont2);

    }
})
    .catch((err) => {
    console.log('err:', err)
    })    
}
