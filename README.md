# q3stuff

  Data-binding
    What does ng-model do?
      Binds the view with the model. Specifically with input, select, textarea fields
    
    What is "dirty checking"?
      A way that angular checks for changes on a model (in this case the scope object)
      It checks whether a value has been changed that hasn't been synchronized across the app
      
    Find a way to set the initial value of "name" as "BoJack" (without writing a controller).
      
    What are those {{ }} expressions? Are they Handlebars?
      No not handlebars, it's how angular does data binding. They can evaluate expressions, 
      but essentially takes the contents and looks at the scope object then displays the inner stuff (can evaluate)
      
    Explain what two-way data binding is.
      It's a way for real-time updates using either the model or the view
      
    BONUS: Research the $digest loop
      This is angular's version of the event loop.
        Has 2 components: 
          $watch list
          $evalAsync list
          
