const usher_email = document.querySelector("input");
const submitBtn = document.querySelector("button");
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const msg = document.querySelector("#warningMsg");

function matchingRegrex(){
  if(!usher_email.value.match(emailRegex)){
    usher_email.className = 'error';
    return;
  }
  else {
    usher_email.className = 'success';
  }
};

function feedback(usher_email){
  
  document.querySelector(".content_container").innerHTML = `
        <div id="feedback_container">
          <div class="feedback_container_body">
            <h1><img src="icon-list.svg" /></h1>
            <h2 id="thanks_heading">Thanks for Subscribing!</h2>
            <p>A confirmation email has been sent to <b>${usher_email.value ?
            usher_email.value : "Error in signing in"}</b>. Please open it and click the button
            inside to confirm your subscription.</p>
        </div>
        <a href="index.html"><button type="submit">Dismiss message</button></a>
        </div>`;
}

usher_email.addEventListener("keyup", matchingRegrex);

submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  
  if(!usher_email.value || !usher_email.value.match(emailRegex)){
    msg.innerHTML = 'valid email required!';
    msg.style.color = 'red';
    return;
  }
  else {
    msg.innerHTML = '';
    feedback(usher_email);
  }
});
