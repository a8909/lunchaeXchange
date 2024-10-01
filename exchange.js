const update = document.querySelector("#join");
const createAccount = document.getElementById("create-account");
const logIn = document.getElementById("login-button");
const Home = document.getElementById("home");
const Trading = document.getElementById("trading");
const Review = document.getElementById("review");
const More = document.getElementById("more");
const newAccount = document.getElementById("return-signIn");
const tradingNews = document.getElementById("trade");
const tradingNews_2 = document.getElementById("trade2");
const tradingNews_3 = document.getElementById("trade3");
const tradingNews_4 = document.getElementById("trade4");
const loginButton = document.getElementById("loginButton");
const chatInput = document.getElementById("chatPage");
const password = document.getElementById("pwds");
const email = document.getElementById("email");
const errorMessage = document.querySelector('.error-message');
const target = "_blank";
const ButtonsNavigator = {
    button1: "https://wa.me/c/2349090397455",
    button2: "signup.html",
    button3: "login.html"
};
logIn.addEventListener("click", control);

function control() {
    const action = confirm("Make sure you partake in the BULL-RUN cashout coming up soon this december; with 100% guidline offered by LunchaeXchange....");
    if (action) {
        logIn.onclick = Window(ButtonsNavigator.button3, target);
    } else {
        const execute = "User cancelled opening the new window";
        console.log(execute);
    }

}


function create() {
    createAccount.onclick = Window(ButtonsNavigator.button2, target);
}

function updateButton() {
    const Location = ButtonsNavigator.button1;
    update.onclick = Window(Location, target);
}



function Window(url, targets) {
    return window.open(url, targets);
}

function submitButton(e) {
    e.preventDefault();
}




const tradingArrays = [{
    name: "Bolu shobola",
    username: "@boluOfLagos_",
    content: "Bitcoin as specified by technical analysis will hit $50,000 by february, 2024...",
    // image: "image/bitcoin.png"
},
{
    name: "Samuel Balogun",
    username: "@sammyMultiply_",
    content: "Tips to begin cryptocurrency and build your wallet (professional course)",
    // image: "image/bitcoin.png"
},
{
    name: "Segun Elegbede",
    username: "@segunCrypto",
    content: "Guide on how to minimize your loos and maximize your profit!!",
    // image: "image/bitcoin.png"
},
{
    name: "LunchExchange",
    username: "@lunchaExchange",
    content: "Crypto trading platform, we teach, guide, mentor and build you to become a qualify crypto trader..",
    // image: "image/bitcoin.png"
}];

const mailArray = ["boluwatifeshobola#gmail.com", "bols@gmail.com", "codes@gmail.com"]
// JsonTrade = JSON.stringify(tradingArrays);
// console.log(JsonTrade);   here json need to be parsed not stringify
let tradingForms = {
    News: [...tradingArrays],
    reviews: null,
    requiredPasscode: "luncha",
    gmail: "luncha@gmail.com",
    mails: [...mailArray]

};



const tradingUpdates = (trades) => {
    const tradingHTML = trades.map((tradeUpdates) => {
        return `<li id= "trade-name">${tradeUpdates.name}</li>
    <li id= "trade-username">${tradeUpdates.username}</li>
    <li id= "trade-content">${tradeUpdates.content}</li>
    <img src=${tradeUpdates.image} alt="photos">`
    });
    // tradingNews.innerHTML = tradingHTML[tradingUpdates];
    // tradingNews_2.innerHTML = tradingHTML[1];
    // tradingNews_3.innerHTML = tradingHTML[2];
    // tradingNews_4.innerHTML = tradingHTML[3];
    console.log(tradingHTML);


};
isLoggedin = false;
tradingUpdates(tradingForms?.News);

const onLogin = () => {
    const check = password.value;
    const checkMatch = tradingForms.requiredPasscode;
    const address = email.value;
    const mailCheck = tradingForms.gmail;
    supply = "checking..."
    request = "Invalid Password"

    if (check == checkMatch && address == mailCheck ) {
        isLoggedin = true;
        if(isLoggedin){
            loginButton.innerText = supply;
        }
        loginButton.onclick = Window("https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures-v8/learn-basic-string-and-array-methods-by-building-a-music-player/step-28", target)
        isLoggedin = false
    } else {
        function authenticator(event) { 
            console.log(errorMessage);
            event.preventDefault(); }
        loginButton.addEventListener("submit", authenticator);
        return false;
    };
};

loginButton.addEventListener("click", onLogin);






class MyAuth {
    constructor(email, passcode) {
        this.email = email,
            this.passcode = passcode

    }
    get passphrase() {
        return this.passcode
    }
}

const anotherAut = new MyAuth("bols@gmai.com", "5mith");
console.log(anotherAut.passphrase);
update.addEventListener("click", updateButton);
createAccount.addEventListener("click", create);

