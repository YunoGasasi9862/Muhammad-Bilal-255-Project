
 var NameArray=['.F','.O','.R','.S', '.P', '.O2', '.K','.E','.N']; //yayay worked!!
 var selected=false;
 var index;
 var letter=false;
 var className;
$(function()
{

  var Array=InitialPosition();
  //shuffle for the first time
 
  $(window).resize(function()  //for resizing as well, so the letters accomodate
  {
     Array=InitialPosition();
     
  });

  $(".icon").click(function()
  {
      if(selected)
      {
          $(this).effect("shake", {times:1, distance:3}, 200);
      }else{

        shuffle(Array);

      }
  })

  checkClick();
 
   





});

function shuffle(values)
{
  var Temp=[];
    
  for(var i=0; i<values.length; i++)
  {
    Temp[i]=values[i];  //shuffling worked!!
  }
   for(var i=0; i<values.length; i++)
   {
      var Random= Math.floor(Math.random() * Temp.length);

       $(`${NameArray[i]}`).css("top", Temp[Random][0]);
       $(`${NameArray[i]}`).css("left", Temp[Random][1]);
       Temp.splice(Random,1);


   }
}

function InitialPosition()
{
  
  var height= $("#Circle").height();
  var radius=height/2;
  radius=radius-18;
  var XYValues=[];
   var increment=40;

  for(var i=0; i<NameArray.length; i++)
  {
      XYValues.push([radius * Math.cos(i * increment * ((Math.PI)/180)), 
       radius* Math.sin(i * increment*((Math.PI)/180))]);
  }

  for(var i=0; i<XYValues.length; i++)
  {
    $(`${NameArray[i]}`).css("top", XYValues[i][0]);
    $(`${NameArray[i]}`).css("left", XYValues[i][1]);

  }

  return XYValues;
 
}

function checkClick()
{

      for(var i=0; i<NameArray.length; i++)
      {
        $(`${NameArray[i]}`).click(function()
        {
               
              selected=true;
              var height= $(this).height();
              height=height;
              $(this).css("background", "#6600CC");
              $(this).css("border-radius", `${height}px`);
              $(this).css("font-size", "20px").css("user-select", "none");
              className=$(this).attr("class");

                  if(!$("span").hasClass(`.${$(this).attr("class")}`))  //yaya did it!
                  {
                    $(".LetterSelectedArea").append(`<span class=.${$(this).
                      attr("class")}>${$(this).text()}</span>`).width("280px")
                      .css("visibility","visible");
                    
                    
                      $("span").css("border-radius", "300px").width("10px").animate({width: 300});
                      $("span").css("margin-right", "2px");
                   
                  }

               
            
           
             
              letter=true;
              if(letter)
              {
                $(`.${className}`).click(function(){
      
                   $(this).stop(true).effect("shake", {times:1, distance:35, direction:"up"}, 300);
                   $(this).css("user-select", "none");
                  letter=false;
            
                });
              }
               
              
        });
      }  
   
}