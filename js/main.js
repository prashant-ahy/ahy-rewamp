$(document).ready(function(){
  $("#say-hey").submit(function(e){
    var url = "mail/say-hey.php"; // the script where you handle the form input.
    //console.log($("#say-hey").serialize());

    var securityValue = $("#say-hey input[name='answer']").val();
    if(securityValue != 4){
      alert("sorry need to work hard on your maths");
      return false;
    }

    $("button.say-hey").find("span").text("sending...");
    $("button.say-hey").css("background", "#ec2d7e");
    $("button.say-hey").prop("disabled", true);

    $.ajax({
           type: "POST",
           url: url,
           data: $("#say-hey").serialize(), // serializes the form's elements.
           success: function(data)
           {
             if(data){
               $("button.say-hey").find("span").text("Thanks!.");
             }
             else
             {
                alert(data);
                $("button.say-hey").find("span").text("send");
                $("button.say-hey").css("background", "#000");
                $("button.say-hey").prop("disabled", false);
             }
             setTimeout(function(){
               $("button.say-hey").find("span").text("send");
               $("button.say-hey").prop("disabled", false);
               $("button.say-hey").css("background", "#000");
             },10000);
           }
         });

    e.preventDefault();
  });

  $("#hire-us").submit(function(e){
    var url = "mail/hire-us.php"; // the script where you handle the form input.
    $("button.hire-us").find("span").text("sending...");
    $("button.hire-us").css("background", "#ec2d7e");
    $("button.hire-us").prop("disabled", true);

    var securityValue = $("#hire-us input[name='answer']").val();
    if(securityValue != 4){
      alert("sorry need to work hard on your maths");
      return false;
    }

    $.ajax({
           type: "POST",
           url: url,
           data: $("#hire-us").serialize(), // serializes the form's elements.
           success: function(data)
           {
             if(data){
               $("button.hire-us").find("span").text("Thanks!.");
             }
             else
             {
                alert(data);
                $("button.hire-us").find("span").text("send");
                $("button.hire-us").css("background", "#000");
                $("button.hire-us").prop("disabled", false);
             }
             setTimeout(function(){
               $("button.hire-us").find("span").text("send");
               $("button.hire-us").prop("disabled", false);
               $("button.hire-us").css("background", "#000");
             },10000);
           }
         });

    e.preventDefault();
  });

});


/*validate Contact form starts*/
  function security(input){
    if(input.value != 4){
        input.setCustomValidity("sorry need to work hard on your maths");
    }else{
        input.setCustomValidity('');
    }
    return true;
  }
/*Validate Contact form ends*/
