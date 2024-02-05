/*------------------------------------------Top Nav Bar------------------------------------------------*/
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
/*------------------------------------Nav Bar About us page--------------------------------------------*/
function changeNavBar_hist(){
    var about_MONEE = document.getElementById("about-MONEE");
    var history = document.getElementById("history");
    var FAQ = document.getElementById("FAQ");
    var member = document.getElementById("become-a-member");
    var about_header = document.getElementById("about-header");
    var about_content = document.getElementById("about-content");

    var about_info = document.getElementById('about-info');
    about_info.style.height = '520px'

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

    var about_info = document.getElementById('about-info');
    about_info.style.height = '520px'

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

function changeNavBar_FAQ(){
    var about_MONEE = document.getElementById("about-MONEE");
    var history = document.getElementById("history");
    var FAQ = document.getElementById("FAQ");
    var member = document.getElementById("become-a-member");
    var about_header = document.getElementById("about-header");
    var about_content = document.getElementById("about-content");

    var about_info = document.getElementById('about-info');
    about_info.style.height = '1000px'

    history.style.backgroundColor = 'rgba(237,240,241,0)';
    history.style.borderBottom = 'none';

    about_MONEE.style.backgroundColor = 'rgba(237,240,241,0)';
    about_MONEE.style.borderBottom = 'none';

    member.style.backgroundColor = 'rgba(237,240,241,0)';
    member.style.borderBottom = 'none';

    FAQ.style.backgroundColor = 'rgba(255,255,255,0.5)';
    FAQ.style.borderBottom = '2px solid #000000'
    about_header.innerHTML = "<div>FAQ</div>"

    var textContainer = document.createElement("div");

    var lineBreak = document.createElement("br")

    // Create the main content line
    var mainText = document.createElement("div");
    mainText.textContent = "Here are the answers to some of the common questions users have"

    // Create the fine text line
    var qns = document.createElement("div");
    qns.textContent = 'What is MONEE?';
    qns.style.fontSize = '18px';
    qns.style.fontWeight = '500';
    qns.style.paddingBottom = '10px';
    qns.style.textDecoration = 'underline 2px';
    qns.style.paddingTop = '10px';

    var ans = document.createElement("div");
    ans.textContent = 'MONEE is a mobile/web app that allows users to track their finances and can get earn rewards for doing so. This includes, in-game trophy rewards from achievements and real money by exchanging points!'
    ans.style.fontSize = '16px';

    // Append the text lines to the container
    textContainer.appendChild(mainText);
    textContainer.appendChild(lineBreak);
    textContainer.appendChild(qns);
    textContainer.appendChild(ans);

    var qns = document.createElement("div");
    qns.textContent = 'How do I redeem my rewards?';
    qns.style.fontSize = '18px';
    qns.style.fontWeight = '500';
    qns.style.paddingBottom = '10px'
    qns.style.textDecoration = 'underline 2px'

    var ans = document.createElement("div");
    ans.textContent = 'Rewards can be claimed in the rewards shop when you have enough points to exchange for money that you can earn! This can be done on our mobile app or on our website. Be sure to complete your savings goals and achivements to earn more points and earn more money!'
    ans.style.fontSize = '16px';

    textContainer.appendChild(lineBreak);
    textContainer.appendChild(qns);
    textContainer.appendChild(ans);

    about_content.innerHTML = "";
    about_content.appendChild(textContainer);
    
}
