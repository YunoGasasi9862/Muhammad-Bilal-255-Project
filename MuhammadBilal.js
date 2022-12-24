
 var NameArray=['.F','.O','.R','.S', '.P', '.O2', '.K','.E','.N']; //yayay worked!!
 var Words =['.W1  div > div', '.W2  div > div', '.W3  div > div', '.W4  div > div',
              '.W5  div > div','.W6  div > div'];

var background =['.W1  div', '.W2  div', '.W3  div', '.W4  div ',
'.W5  div','.W6  div'];
var SelectedWords=[];
var Main=['.W1','.W2', '.W3', '.W4',
'.W5','.W6'];
var ActualWords=[];
var OverlapWords=['.SameO', '.SameE', '.SameP', '.SameS', '.SSameO']
 var selected=false;
 var index;
 var letter=false;
 var className;
 var Visible=false;
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
  $("#Circle").contextmenu(function(e)
  {
    e.preventDefault();
    
    let letter='';
    $(".LetterSelectedArea").children().each(function()
    {
       letter+= `${$(this).text()}`;
     ;
       
    })

    for(var num=0; num<ActualWords.length; num++)
       {
        if(letter===ActualWords[num])
        {

          var count=$(background[num]).children().length;
          var Array=[];
            
          $(background[num]).children().each(function()
          {

            if($(this).attr("class")!=="undefined")
            {
              Array.push($(this).attr("class"));

            }
          })

          var results= results = Array.filter(element => { //using lamba expression to remove undefined values
            return element !== undefined;
          });
          
          for(var k=0; k<results.length; k++)
          {
       
                  $(`.${results[k]}`).css("opacity", "1").css("color", "white").css("background", "#884c07");  
                        
                 console.log(results[k]);
          }
           
          $(Words[num]).css("opacity", "1").css("color", "white");
          $(background[num]).css("background", "#884c07");

          for(var i=0; i<SelectedWords.length; i++)
          {
            $(`${SelectedWords[i]}`).css("background", "0");
            selected=false;
            
          }
          $(".LetterSelectedArea").children().each(function()
          {   
            $(this).fadeOut(function()
            {
                   $(this).remove();
            }).finish();
          }); 

          
         
        }else{

          $(".LetterSelectedArea").children().each(function()
          {   
            $(this).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100, function()
            {
                   $(this).remove();

            });
          

          });  

          for(var i=0; i<SelectedWords.length; i++)
          {
            $(`${SelectedWords[i]}`).css("background", "0");
            selected=false;
          }


        }
       }

  });
  $(".Bulb").click(function()
  {

        if(!Visible)
        {
          for(var i=0; i<Words.length; i++)
          {


            $(`${Words[i]}`).each(function()
            {
              
              var opacity=Number($(this).css("opacity"));
             
              if(opacity!==1)
              {
                $(this).css({opacity:.6});

              }
             
            })
               
                 
               
          }

          Visible=true;

        }else{

          for(var i=0; i<Words.length; i++)
          {
            
            $(`${Words[i]}`).each(function()
            {
              
              var opacity=Number($(this).css("opacity"));
             
              if(opacity!==1)
              {
                $(`${Words[i]}`).css({opacity:0});

              }
             
            })

                
               
          }
          Visible=false;
        }
         
  });


 

  checkClick();
  
  
   
  GetAllTheWords();




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

function GetAllTheWords()
{

  for(var num=0; num<Words.length; num++)
  {
   
      ActualWords[num]=$(Words[num]).text();

     
  }
   

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
                    //SelectedWords[i]=$(this).text();
                    var word="."+$(this).attr("class");
                    SelectedWords.push(word); 
             

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