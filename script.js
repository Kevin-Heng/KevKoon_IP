function changeTrackFeature(){
    var tracK_button = document.getElementById("track-button");
    var plan_button = document.getElementById("plan-button");
    var collab_button = document.getElementById("collab-button");
    var name = document.getElementById("feature-name");

    tracK_button.style.backgroundColor = "#009444";
    plan_button.style.backgroundColor='rgba(156, 156, 156,1)';
    collab_button.style.backgroundColor='rgba(156, 156, 156,1)';
    name.innerHTML = "<div>Track</div>";
    
}

function changePlanFeature(){
    var tracK_button = document.getElementById("track-button");
    var plan_button = document.getElementById("plan-button");
    var collab_button = document.getElementById("collab-button");
    var name = document.getElementById("feature-name");

    tracK_button.style.backgroundColor = "";
    plan_button.style.backgroundColor='';
    collab_button.style.backgroundColor='rgba(156, 156, 156,1)';
    name.innerHTML = "<div>Plan</div>";
    
}

function changeCollabFeature(){
    var tracK_button = document.getElementById("track-button");
    var plan_button = document.getElementById("plan-button");
    var collab_button = document.getElementById("collab-button");
    var name = document.getElementById("feature-name");

    tracK_button.style.backgroundColor = "";
    plan_button.style.backgroundColor='rgba(156, 156, 156,1)';
    collab_button.style.backgroundColor='#009444';
    name.innerHTML = "<div>Collaborate</div>";
    
}