function changeTrackFeature(){
    var tracK_button = document.getElementById("track-button");
    var plan_button = document.getElementById("plan-button");
    var collab_button = document.getElementById("collab-button");
    var name = document.getElementById("feature-name");
    var section = document.getElementById("main-desc");
    var img = document.getElementById("feature-img");

    tracK_button.style.backgroundColor = "#009444";
    plan_button.style.backgroundColor='rgba(156, 156, 156,1)';
    collab_button.style.backgroundColor='rgba(156, 156, 156,1)';
    name.innerHTML = "<div>Track</div>";
    section.innerHTML = "<div>Track your spendings, savings and financial goals</div>";

    img.src = "blank.jpg"


}

function changePlanFeature(){
    var tracK_button = document.getElementById("track-button");
    var plan_button = document.getElementById("plan-button");
    var collab_button = document.getElementById("collab-button");
    var name = document.getElementById("feature-name");
    var section = document.getElementById("main-desc");
    var img = document.getElementById("feature-img");

    tracK_button.style.backgroundColor = "";
    plan_button.style.backgroundColor='';
    collab_button.style.backgroundColor='rgba(156, 156, 156,1)';
    name.innerHTML = "<div>Plan</div>";
    section.innerHTML = "<div>Get down to the nitty gritty of planning your finance</div>";

    img.src = "pikachu.png"
    
}

function changeCollabFeature(){
    var tracK_button = document.getElementById("track-button");
    var plan_button = document.getElementById("plan-button");
    var collab_button = document.getElementById("collab-button");
    var name = document.getElementById("feature-name");
    var section = document.getElementById("main-desc");
    var img = document.getElementById("feature-img");

    tracK_button.style.backgroundColor = "";
    plan_button.style.backgroundColor='rgba(156, 156, 156,1)';
    collab_button.style.backgroundColor='#009444';
    name.innerHTML = "<div>Collaborate</div>";
    section.innerHTML = "<div>Add friends and collaborate with them in finanicial goals</div>";

    img.src = "jett.jpeg"
    
}

function changeColour(){
    var about = document.getElementById("about-us");

    
}


