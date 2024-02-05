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

function changeNavBar_hist(){
    var about_MONEE = document.getElementById("about-MONEE");
    var history = document.getElementById("history");
    var FAQ = document.getElementById("FAQ");
    var member = document.getElementById("become-a-member");
    var about_header = document.getElementById("about-header");
    var about_content = document.getElementById("about-content");

    about_MONEE.style.backgroundColor = 'rgba(237,240,241,0)';
    about_MONEE.style.borderBottom = 'none';

    FAQ.style.backgroundColor = 'rgba(237,240,241,0)';
    FAQ.style.borderBottom = 'none';

    member.style.backgroundColor = 'rgba(237,240,241,0)';
    member.style.borderBottom = 'none';

    history.style.backgroundColor = 'rgba(255,255,255,0.5)';
    history.style.borderBottom = '2px solid #000000'
    about_header.innerHTML = "<div>History</div>"

    // Create a container div for the text lines
    var textContainer = document.createElement("div");

    // Create the main content line
    var mainText = document.createElement("div");
    mainText.textContent = "MONEE was founded on 11 Jan 2024 when they were assigned to do the IP assignment. They spent 3 tireless weeks to complete what was required for the 5 modules. Having to self-learn new concepts to make their ideas come to life in the app and website.";

    // Create the fine text line
    var fineText = document.createElement("div");
    fineText.textContent = '(Definitely did not make use of ChatGPT for help :D)';
    fineText.style.fontSize = '5px';

    // Append the text lines to the container
    textContainer.appendChild(mainText);
    textContainer.appendChild(fineText);

    about_content.innerHTML = "";
    about_content.appendChild(textContainer);
    
}

function changeNavBar_MONEE(){
    var about_MONEE = document.getElementById("about-MONEE");
    var history = document.getElementById("history");
    var FAQ = document.getElementById("FAQ");
    var member = document.getElementById("become-a-member");
    var about_header = document.getElementById("about-header");
    var about_content = document.getElementById("about-content");

    history.style.backgroundColor = 'rgba(237,240,241,0)';
    history.style.borderBottom = 'none';

    FAQ.style.backgroundColor = 'rgba(237,240,241,0)';
    FAQ.style.borderBottom = 'none';

    member.style.backgroundColor = 'rgba(237,240,241,0)';
    member.style.borderBottom = 'none';

    about_MONEE.style.backgroundColor = 'rgba(255,255,255,0.5)';
    about_MONEE.style.borderBottom = '2px solid #000000'
    about_header.innerHTML = "<div>About MONEE</div>"

    about_content.innerHTML = "MONEE was founded by two students from Ngee Ann Poly, Kevin and Kai Koon. As a two man team, they created MONEE as a way for users to be able to make better financial decisions while also being rewarded for doing so. The main goal that we have is for users to be more mindful of their expenses so that they can save more money.    "
}
