function scrollbg() {
    var navhead = document.getElementById('navhead');
    var sup = document.getElementById('sup');
    var scrollvalue = window.scrollY;
    var media=window.matchMedia("(max-width : 750px)");
   if (scrollvalue < 50 ) {
            navhead.classList.remove('sticky');
            sup.style.opacity = "0";
        } else {
            navhead.classList.add('sticky');
            sup.style.opacity = "1";
        }
    
    
}
window.addEventListener('scroll', scrollbg)

var berger=document.getElementById('berger');
var r =document.querySelector('.vresp');
var a=document.querySelector('.nav-list');
var hrespafter=document.querySelector('.hrespafter');
berger.addEventListener('click',(e)=>{
    e.preventDefault();
    hrespafter.classList.toggle('hrespafter');
    a.classList.toggle('nav-list');
    r.classList.toggle('vresp');
})

const forme=document.querySelector('#forme');
const text=document.querySelector('#text');
const email=document.querySelector('#mail');
const dob=document.querySelector('#dob');
const msg=document.querySelector('#msg');
const mobile=document.querySelector('#mobile');
async function send(e){
        e.preventDefault();
            // console.log(email.value,password.value);
        try { const result= await firebase.auth().createUserWithEmailAndPassword(email.value,dob.value)
            // createUserCollection(result.user);
            console.log(result)}
            catch(err){
                console.log(err);
            }
            text.value = "";
            msg.value = "";
            mail.value = "";
            dob.value = "";
            mobile.value = "";
        }

    // function createUserCollection(user){
    //     firebase.firestore.collection('users')
    //     .doc(firebase.auth().uid)
    //     .set({
    //         uid:user.uid,
    //         name:forme["name"].value,
    //         email:forme["mail"].value,
    //         phone:forme["mobile"].value,
    //         speciality:forme["msg"].value,
    //     })
    // }


    // firebase.database().ref("user").set({
    //     name: "Dharmveer"
    // })