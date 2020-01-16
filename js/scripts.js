$(document).ready(function(){
    $("#animalForm").submit(function(){
    var choice = $("select#animalChoice").val();

    if (choice === "Dog") {
        $(".dogInfo").show();
        $(".catInfo").hide();
        $(".pigINfo").hide();
        } else if (choice === "Cat") {
            $(".catInfo").show();
            $(".dogInfo").hide();
            $(".pigINfo").hide();
        } else if (choice === "Pig") {
            $(".pigInfo").show();
            $(".dogInfo").hide();
            $(".catINfo").hide();
        }
        console.log(choice)
event.preventDefault();
    })
});

