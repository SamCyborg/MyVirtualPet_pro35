class Form{
    constructor(){
        var title = createElement('h1');
        title.html("Let's share a little !!!");
        title.position(10,130);
        var input = createInput("your name");
        var input2 = createInput("pet's name");
        var button = createButton('enter');
        var greetings = createElement('h3');
        var greetings2 = createElement('h3');
        var greetings3 = createElement('h3');
        var greetings4 = createElement('h3');
        var greetings5 = createElement('h3');
        input.position(50,190);
        input2.position(50,230);
        button.position(140,270);
        button.mousePressed(function(){
             title.hide();
             input.hide();
             input2.hide();
             button.hide();
             var yourName = input.value();
             var name = input2.value();
             greetings.html("We're glad to meet your cutiee doggo, " + name + ".");
             greetings.position(10,160);
             greetings2.html("Thank you for choosing DOGGO.CO " + yourName + "!");
             greetings2.position(3,190);
             greetings3.html("We'll give your poochies lots of nibbles, ");
             greetings3.position(10,220);
             greetings4.html("along with loads of love and care !");
             greetings4.position(10,250);
             greetings5.html("- Doggo.co team");
             greetings5.position(130,310);
        })
    }
}