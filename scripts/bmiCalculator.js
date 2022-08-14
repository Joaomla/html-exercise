function changeUnits()
{
    document.getElementById("h_units").innerHTML = "in.";
    document.getElementById("w_units").innerHTML = "lbs";
}

function calculateBMI()
{
    var h = document.getElementById("h").value/100;
    var w = document.getElementById("w").value;

    console.log(h);
    console.log(w);

    if( h <= 0 )
    {
        alert("Height value is not valid!");
        return;
    }

    if( w <= 0 )
    {
        alert("Weight Value is not valid!");
        return;
    }

    var bmi = ( w/(h*h) ).toFixed(2);

    var result = document.getElementById("result");

    if( bmi < 17 )
    {
        result.innerHTML = "Your BMI is " + bmi + ". You are severely underweight."
        return;
    }

    if( bmi < 18.5 )
    {
        result.innerHTML = "Your BMI is " + bmi + ". You are underweight."
        return;
    }

    if( bmi < 25 )
    {
        result.innerHTML = "Your BMI is " + bmi + ". You have normal weight."
        return;
    }

    if( bmi < 30 )
    {
        result.innerHTML = "Your BMI is " + bmi + ". You are overweight."
        return;
    }

    if( bmi < 35 )
    {
        result.innerHTML = "Your BMI is " + bmi + ". You are considered obese."
        return;
    }

    if( bmi < 40 )
    {
        result.innerHTML = "Your BMI is " + bmi + ". You are considered severly obese."
        return;
    }
    
    // default is obese
    result.innerHTML = "Your BMI is " + bmi + ". You are considered morbidly obese."
    
}

document.getElementById("units").value = "metric"