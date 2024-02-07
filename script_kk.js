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
    mainText.textContent = "MONEE was founded on 11 Jan 2024 by two students from Ngee Ann Poly, Kevin and Kai Koon when they were assigned to do the IP assignment. As a two man team, they created MONEE as a way for users to be able to make better financial decisions while \
    also being rewarded for doing so. They spent 3 tireless weeks to complete what was required for the 5 modules. Having to self-learn new concepts to make their ideas come to life in the app and website.";

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

document.getElementById("submitBtn").addEventListener("click", function(){
    const APIKey = '65c0ff3d73f36e84d400b571';
    const apiUrl = `https://kevkoon-3a02.restdb.io/rest/contact`;
    
    let userField = document.getElementById("InputUser").value;
    let emailField = document.getElementById("InputEmail").value;
    let passwordField = document.getElementById("InputPassword").value;
    let phoneNumber = document.getElementById("InputNumber").value;
    let incomeField = document.getElementById("InputIncome").value;
  
    let jsondata = {
      "username" : userField,
      "email" : emailField,
      "password" : passwordField,
      "phonenumber" : phoneNumber,
      "income" : incomeField,
    }
  
    let settings = {
      method: "POST", //[cher] we will use post to send info
      headers: {
        "Content-Type": "application/json",
        "x-apikey": APIKey,
        "Cache-Control": "no-cache"
      },
      body: JSON.stringify(jsondata),
    };
    console.log(jsondata);
    let settings2 = {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        "x-apikey": APIKey,
        "Cache-Control": "no-cache"
      },
    }
    var settings3 = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "x-apikey": APIKey,
        "Cache-Control": "no-cache"
      },
      body: JSON.stringify(jsondata)
    }

    const response = fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-apikey": APIKey
      },
      body: JSON.stringify(jsondata)
    })
    console.log(response.jsondata)

    const response2 = fetch(apiUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-apikey": APIKey
      },
    })
    console.log(response2.jsondata)
})

function lottieanimation(){
    
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

    about_content.innerHTML = "MONEE is a financial tracker that helps you to plan out your finances just by following the steps on our mobile app or website. MONEE was created with the intent of allowing users to be more mindful of their expenses and save more to combat inflation. We believe that everyone can make smart financial decisions once they learn and make it a habit to do so."
}

function changeNavBar_FAQ(){
    var about_MONEE = document.getElementById("about-MONEE");
    var history = document.getElementById("history");
    var FAQ = document.getElementById("FAQ");
    var member = document.getElementById("become-a-member");
    var about_header = document.getElementById("about-header");
    var about_content = document.getElementById("about-content");

    var about_info = document.getElementById('about-info');
    about_info.style.height = '900px'

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

    var mainText = document.createElement("div");
    mainText.textContent = "Here are the answers to some of the common questions users have asked"

    //Qns 1
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

    textContainer.appendChild(mainText);
    textContainer.appendChild(lineBreak);
    textContainer.appendChild(qns);
    textContainer.appendChild(ans);

    //Qns 2
    var qns = document.createElement("div");
    qns.textContent = 'How do I redeem my rewards?';
    qns.style.fontSize = '18px';
    qns.style.fontWeight = '500';
    qns.style.paddingBottom = '10px'
    qns.style.paddingTop = '10px';
    qns.style.textDecoration = 'underline 2px'

    var lineBreak = document.createElement("br")
    
    var ans = document.createElement("div");
    ans.textContent = 'Rewards can be claimed in the rewards shop when you have enough points to exchange for money that you can earn! This can be done on our mobile app or on our website. Be sure to complete your savings goals and achivements to earn more points and earn more money!'
    ans.style.fontSize = '16px';

    textContainer.appendChild(lineBreak);
    textContainer.appendChild(qns);
    textContainer.appendChild(ans);
    
    //Qns 3
    var qns = document.createElement("div");
    qns.textContent = 'How is MONEE any different from other apps?';
    qns.style.fontSize = '18px';
    qns.style.fontWeight = '500';
    qns.style.paddingBottom = '10px'
    qns.style.paddingTop = '10px'
    qns.style.textDecoration = 'underline 2px'

    var lineBreak = document.createElement("br")

    var ans = document.createElement("div");
    ans.textContent = 'In other finance apps, you are not rewarded for completing your savings goals. However, in MONEE, you can earn rewards for your efforts when you reach your goals. This makes saving money more fun and enjoyable and can help you to save more money! :D'
    ans.style.fontSize = '16px';
    
    textContainer.appendChild(lineBreak);   
    textContainer.appendChild(qns);
    textContainer.appendChild(ans);    

    about_content.innerHTML = "";
    about_content.appendChild(textContainer);

    //Qns 4
    var qns = document.createElement("div");
    qns.textContent = 'How do I become a member of MONEE?';
    qns.style.fontSize = '18px';
    qns.style.fontWeight = '500';
    qns.style.paddingBottom = '10px'
    qns.style.paddingTop = '10px'
    qns.style.textDecoration = 'underline 2px'

    var lineBreak = document.createElement("br")

    var ans = document.createElement("div");
    ans.textContent = 'Download our mobile app and sign up there or you can use the web version to create and account too. Highly recommended to download the mobile app so that you can keep track of your finances on the go, anytime and anywhere. Once your account is created, you are now a member of MONEE. So... Welcome to MONEE!!!'
    ans.style.fontSize = '16px';
    
    textContainer.appendChild(lineBreak);   
    textContainer.appendChild(qns);
    textContainer.appendChild(ans);    

    about_content.innerHTML = "";
    about_content.appendChild(textContainer);
}

function changeNavBar_member(){
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

    about_MONEE.style.backgroundColor = 'rgba(237,240,241,0)';
    about_MONEE.style.borderBottom = 'none';

    member.style.backgroundColor = 'rgba(255,255,255,0.5)';
    member.style.borderBottom = '2px solid #000000'
    about_header.innerHTML = "<div>Becoming a member</div>"

    var textContainer = document.createElement("div");

    var lineBreak = document.createElement("br")
    var mainText = document.createElement("div")
    var subText = document.createElement("div")

    mainText.textContent = "Create an account on this website or download the mobile app to create an account. It's that simple. So what are you waiing for? Be a member of MONEE today!"
    subText.textContent = "For any inquiries, you may contact our hotline at +65 6555 2856 or email us at monee@gmail.com.sg. We are open from Monday to Friday, 9am - 7pm."

    textContainer.appendChild(mainText);
    textContainer.appendChild(lineBreak);
    textContainer.appendChild(subText);

    about_content.innerHTML = "";
    about_content.appendChild(textContainer);
}

