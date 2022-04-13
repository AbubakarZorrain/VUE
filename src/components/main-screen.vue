<template>
  <div class="nav">
    <div class="rectangle"></div>
    <div class="small-rectangle"></div>
    <div class="home-btn">Home</div>
    <div class="service-btn">Services</div>
    <div class="work-btn">How it works</div>
    <div class="contact-btn">Contact Later</div>
  </div>
  <div class="first-block">
    <div class="welcome-to-future">Welcome to the Future</div>
    <div class="mobile-payment-tip">Mobile payments at your finger tips</div>
    <div class="vancash">
      Vencash is the fast, safe, social way to pay and get paid. Join more than
      65million people who use the Venmo app today. From monthly bills to
      special.
    </div>
    <div>
      <input
        type="email"
        class="join-waitlist"
        placeholder="Enter your email"
      />
      <button class="input-rectangle">
        <span class="input_rectangle_button">Join the Waitlist</span>
      </button>
      <p class="join-waitlist-value"></p>
    </div>
    <div class="left_rectangle_for_phone">
      <div class="eclispe"></div>
      <div class="circle_for_left_rectangle"></div>
      <img class="for_phone_image" src="../assets/phone_image.png" />
    </div>
  </div>
  <div class="block2">
    <div class="leftSide">
      <img class="second_block" src="../assets/block2.png" />

      <div class="rightSide">
        <div class="PaymentText">Pakistan’s First Social Payment Platform</div>
      </div>
    </div>
  </div>
  <div class="block3">
    <p class="PayFriends">Pay your Friends</p>
    <p class="payFriendText">
      Vencash is the fast, safe, social way to pay and get paid. Join more than
      65million people who use the Venmo app today. From monthly bills to
      special.
    </p>
    <img src="../assets/block3.png" class="block3Img" alt="" />
  </div>
  <div class="block4">
    <div class="splitBill">Split the Bill</div>
    <div class="textBill">
      Vencash is the fast, safe, social way to pay and get paid. Join more than
      65million people who use the Venmo app today. From monthly bills to
      special.
    </div>
    <img src="../assets/block4.1.png" class="block4One" alt="" />
    <img src="../assets/block4.2.png" class="block4One" alt="" />
  </div>
  <div class="block5">
    <img src="../assets/block5.png" alt="" />
    <div class="block5Heading">payments made social and fun</div>
    <div class="block5Text">
      Vencash is the fast, safe, social way to pay and get paid. Join more than
      65million people who use the Venmo app today. From monthly bills to
      special.
    </div>
  </div>
  <div class="block6Start">
    <img class="block6" src="../assets/block6B.png" />
    <img src="../assets/block6.png" class="block6Img" alt="" />
  </div>

  <div class="block7">
    <div class="howVencashWorks">How Vencash works</div>
    <div class="selectAmount">Select amount</div>
    <div class="selectAmountDetails">
      Vencash is the fast, safe,social way to pay and get paid. Join more than
    </div>
    <div class="block7BackBox"></div>
    <div class="block7Img"></div>
  </div>
  <div class="block8">
    <div class="block8BackBox"></div>
    <div class="block8Img"></div>
    <div class="selectRecipient">Select Receipent</div>
    <div class="selectRecipientDetails">
      Vencash is the fast, safe,social way to pay and get paid. Join more than
    </div>
  </div>
  <div class="block9">
    <div class="block9Heading">Send money</div>
    <div class="block9Details">
      Vencash is the fast, safe,social way to pay and get paid. Join more than
    </div>
    <div class="block9BackBox"></div>
    <div class="block9Img"></div>
  </div>
  <div class="block10">
    <div class="block10Heading">We are disrupting the payments 
landscape in Paksitan</div>
<div class="block10MidSocial"></div>
<div class="block10Img"></div>
<div class="block10UpperSocial"></div>
<div class="block10LastSocial"></div>
<div class="block10LeftBlock"></div>
<div class="block10LeftHeading">Get in touch</div>
<form method="POST">
<div class="block10Email">Enter your Email</div>
<input type="email" class="block10EmailInput" required>
<div class="block10Name">Enter your Name</div>
<input type="text" class="block10NameInput" required>
<div class="block10Message">Message</div>
<textarea type="text" class="block10MessageInput" required></textarea>
<button class="block10Button">
  Send
</button>
</form>
<div class="block10SecondImg"></div>
  </div>
</template>

<script>
// import { MDBNavbar } from 'mdb-vue-ui-kit';
export default {
  // components: { MDBNavbar },
};
</script>
<style>
.first-block {
  /* Rectangle 77 */

  position: absolute;
  width: 100%;
  height: 826px;
  left: 0px;
  top: 132px;

  background: rgba(241, 255, 253, 0.4);
}
.nav {
  position: absolute;
  width: 100%;
  height: 132px;
  /* left: 0px; */
  top: 0px;
  background: #ffffff;
}
.rectangle {
  /* Rectangle 38 */

  position: absolute;
  width: 15.04px;
  height: 48.15px;
  left: 86px;
  top: 58.36px;

  background: linear-gradient(180deg, #26baa4 0%, rgba(2, 191, 166, 0.4) 100%);
  transform: rotate(-25deg);
}
.small-rectangle {
  /* Rectangle 37 */

  position: absolute;
  width: 15.19px;
  height: 14.94px;
  left: 118.25px;
  top: 61.11px;

  background: linear-gradient(
    153.33deg,
    #506bf9 16.72%,
    rgba(80, 107, 249, 0.38) 146.37%
  );
  border-radius: 50px 0px 50px 50px;
  transform: rotate(9.88deg);
}
.home-btn {
  /* Home */

  position: absolute;
  width: 60px;
  height: 32px;
  left: 728px;
  top: 70px;

  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 32px;
  /* identical to box height, or 160% */

  color: #011b17;
}
.service-btn {
  /* Services */

  position: absolute;
  width: 83px;
  height: 32px;
  left: 860px;
  top: 70px;

  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 32px;
  /* identical to box height, or 160% */

  color: #011b17;
}
.work-btn {
  /* How it works? */

  position: absolute;
  width: 134px;
  height: 32px;
  left: 1015px;
  top: 70px;

  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 32px;
  /* identical to box height, or 160% */

  color: #011b17;
}
.contact-btn {
  /* Contact Later */

  position: absolute;
  width: 136px;
  height: 32px;
  left: 1221px;
  top: 70px;

  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 32px;
  /* identical to box height, or 160% */

  color: #011b17;
}
.welcome-to-future {
  position: absolute;
  width: 277px;
  height: 20px;
  left: 20px;
  top: 269px;

  font-family: "Nexa";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 20px;
  /* identical to box height */

  letter-spacing: 0.01em;
  text-transform: uppercase;

  color: #26baa4;
}
.mobile-payment-tip {
  /* Mobile payments at your finger tips */
  position: absolute;
  width: 545px;
  height: 96px;
  left: 20px;
  top: 305px;
  font-family: "Nexa";
  font-style: normal;
  font-weight: 900;
  font-size: 48px;
  line-height: 48px;
  text-transform: uppercase;
  /* 2nd color */
  color: #403d56;
}
.vancash {
  position: absolute;
  width: 578px;
  height: 96px;
  left: 20px;
  top: 425px;

  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 32px;
  /* or 160% */

  /* Body color */

  color: #616161;
}
.join-waitlist {
  position: absolute;
  width: 515px;
  height: 48px;
  left: 20px;
  top: 592px;

  background: #ffffff;
  border-right-color: #526cf9;
  border-left-color: #2abda7;
  border-top-color: #526cf9;
  border-bottom-color: #2abda7;
  border-radius: 5px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 32px;
  /* identical to box height, or 200% */

  /* color: #a0d6ce; */
}
::placeholder {
  /* position: absolute; */
  width: 130px;
  height: 32px;
  left: 6px;
  top: 600px;
  text-align: center;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 32px;
  /* identical to box height, or 200% */

  color: #a0d6ce;
}
.input-rectangle {
  position: absolute;
  width: 170px;
  height: 48px;
  left: 455px;
  top: 592px;

  /* Gradient 01111 */

  background: linear-gradient(278.15deg, #2abda7 13%, #526cf9 85.85%);
  box-shadow: 2px 28px 30px -16px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
}
.input-rectangle .input_rectangle_button {
  /* position: absolute; */
  width: 126px;
  height: 32px;
  left: 477px;
  top: 600px;

  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 32px;
  /* identical to box height, or 200% */

  color: white;
}
.left_rectangle_for_phone {
  position: absolute;
  width: 777px;
  height: 476px;
  left: 620px;
  top: 245px;

  background: #ddfffa;
  border-radius: 339.5px;
}
.circle_for_left_rectangle {
  position: absolute;
  width: 168px;
  height: 168px;
  left: 50px;
  top: 320px;
  border-radius: 50%;
  background: #354492;
}
.eclispe {
  position: absolute;
  width: 40px;
  height: 40px;
  left: 458px;
  top: 35px;
  border-radius: 50%;
  background: #354492;
}
.for_phone_image {
  position: absolute;
  width: 810px;
  height: 552px;
  left: -100px;
  top: -50px;
  /* background: url("../assets/phone_image.png"); */
}
.second_block {
  position: absolute;
  width: 540px;
  height: 461px;
  left: 158px;
  top: 1084px;

  /* background: url("../assets/second_block_image.png"); */
}
.PaymentText {
  position: absolute;
  width: 457px;
  height: 153px;
  left: 769px;
  top: 1138px;

  font-family: "Nexa";
  font-style: normal;
  font-weight: 900;
  font-size: 48px;
  line-height: 107%;
  /* or 51px */

  text-transform: uppercase;

  color: #26baa4;
}
.block3 {
  position: absolute;
  width: 100%;
  height: 727px;
  left: 1px;
  top: 1589px;

  background: #f8fffe;
}

.PayFriends {
  position: absolute;
  width: 421px;
  height: 42px;
  left: 52px;
  top: 182px;

  font-family: "Nexa";
  font-style: normal;
  font-weight: 900;
  font-size: 42px;
  line-height: 42px;
  /* identical to box height */

  text-transform: uppercase;

  color: #26baa4;
}
.payFriendText {
  position: absolute;
  width: 520px;
  height: 96px;
  left: 42px;
  top: 250px;

  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 32px;
  /* or 178% */

  /* Body color */

  color: #616161;
}
.block3Img {
  position: absolute;
  width: 596px;
  height: 628px;
  left: 700px;
}
/* .block4{
    position: absolute;
  width: 100%;
  height: 727px;
  left: 1px;
  top: 2289px;

  background: #f8fffe;
} */
.splitBill {
  position: absolute;
  width: 320px;
  height: 42px;
  left: 560px;
  top: 2489px;

  font-family: "Nexa";
  font-style: normal;
  font-weight: 900;
  font-size: 42px;
  line-height: 42px;
  /* identical to box height */

  text-transform: uppercase;

  color: #26baa4;
}
.textBill {
  position: absolute;
  width: 555px;
  height: 96px;
  left: 442px;
  top: 2600px;

  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 32px;
  /* or 178% */

  text-align: center;

  /* Body color */

  color: #616161;
}
.block4One {
  position: absolute;
  width: 1000px;
  height: 541.76px;
  left: 200px;
  top: 2736.82px;

  background: #ddfffa;
  border-radius: 339.5px;
}
.block5 {
  position: absolute;
  width: 560px;
  height: 727px;
  left: 106px;
  top: 3494px;
}
.block5Heading {
  position: absolute;
  width: 563px;
  height: 84px;
  left: 602px;
  top: 300px;

  font-family: "Nexa";
  font-style: normal;
  font-weight: 900;
  font-size: 42px;
  line-height: 42px;
  text-transform: uppercase;

  color: #26baa4;
}
.block5Text {
  position: absolute;
  width: 578px;
  height: 96px;
  left: 602px;
  top: 400px;

  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 32px;
  /* or 160% */

  /* Body color */

  color: #616161;
}
.block6 {
  position: absolute;
  width: 100%;
  height: 1330.5px;
  left: 0px;
  top: 4035px;
}
.block6Img {
  position: absolute;
  width: 890px;
  height: 950px;
  left: 270px;
  top: 4255px;
}
.howVencashWorks {
  position: absolute;
  width: 583px;
  height: 48px;
  left: 428px;
  top: 5504px;

  font-family: "Nexa";
  font-style: normal;
  font-weight: 900;
  font-size: 48px;
  line-height: 48px;
  /* identical to box height */

  text-transform: uppercase;

  color: #434343;
  background: -webkit-linear-gradient(#2abda7, #526cf9);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.selectAmount {
  position: absolute;
  width: 317px;
  height: 36px;
  left: 296px;
  top: 5912px;

  font-family: "Nexa";
  font-style: normal;
  font-weight: 900;
  font-size: 36px;
  line-height: 36px;
  /* identical to box height */

  text-transform: uppercase;

  /* 2nd color */

  color: #26baa4;
}
.selectAmountDetails {
  position: absolute;
  width: 310px;
  height: 96px;
  left: 296px;
  top: 5972px;

  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 32px;
  /* or 160% */

  /* Body color */

  color: #616161;
}
.block7BackBox {
  position: absolute;
  width: 387px;
  height: 463px;
  left: 900px;
  top: 5900px;

  background: linear-gradient(
    287.21deg,
    rgba(42, 189, 167, 0.9) 27.37%,
    rgba(82, 108, 249, 0.9) 106.48%
  );
  box-shadow: 25px 56px 60px rgba(0, 0, 0, 0.1);
  border-radius: 20px 20px 50px 50px;
  transform: matrix(-1, 0, 0, 1, 0, 0);
}
.block7Img {
  position: absolute;
  width: 317px;
  height: 668px;
  left: 935px;
  top: 5679px;

  background: url("../assets/block7.png");
}
.block8BackBox {
  position: absolute;
  width: 387px;
  height: 463px;
  left: 182px;
  top: 6595px;

  background: linear-gradient(
    287.21deg,
    rgba(42, 189, 167, 0.9) 27.37%,
    rgba(82, 108, 249, 0.9) 106.48%
  );
  box-shadow: 25px 56px 60px rgba(0, 0, 0, 0.1);
  border-radius: 20px 20px 50px 50px;
  transform: matrix(-1, 0, 0, 1, 0, 0);
}
.block8Img {
  position: absolute;
  width: 317px;
  height: 653px;
  left: 217px;
  top: 6391px;

  background: url("../assets/block8.png");
}
.selectRecipient {
  position: absolute;
  width: 317px;
  height: 36px;
  left: 842px;
  top: 6687px;

  font-family: "Nexa";
  font-style: normal;
  font-weight: 900;
  font-size: 36px;
  line-height: 36px;
  /* identical to box height */

  text-transform: uppercase;

  /* 2nd color */

  color: #26baa4;
}
.selectRecipientDetails {
  position: absolute;
  width: 310px;
  height: 96px;
  left: 842px;
  top: 6757px;

  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 32px;
  /* or 160% */

  /* Body color */

  color: #616161;
}
.block9Heading {
  position: absolute;
  width: 252px;
  height: 36px;
  left: 292px;
  top: 7473px;

  font-family: "Nexa";
  font-style: normal;
  font-weight: 900;
  font-size: 36px;
  line-height: 36px;
  /* identical to box height */

  text-transform: uppercase;

  /* 2nd color */

  color: #26baa4;
}
.block9Details {
  position: absolute;
  width: 310px;
  height: 96px;
  left: 292px;
  top: 7533px;

  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 32px;
  /* or 160% */

  /* Body color */

  color: #616161;
}
.block9BackBox {
  position: absolute;
  width: 387px;
  height: 463px;
  left: 900px;
  top: 7339px;

  background: linear-gradient(
    287.21deg,
    rgba(42, 189, 167, 0.9) 27.37%,
    rgba(82, 108, 249, 0.9) 106.48%
  );
  box-shadow: 25px 56px 60px rgba(0, 0, 0, 0.1);
  border-radius: 20px 20px 50px 50px;
  transform: matrix(-1, 0, 0, 1, 0, 0);
}
.block9Img {
  position: absolute;
  width: 317px;
  height: 638px;
  left: 935px;
  top: 7148px;

  background: url("../assets/block9.png");
}
.block10{
  position: absolute;
width: 100%;
height: 930px;
left: 0px;
top: 8013px;

background: #DDFFFA;
/* transform: matrix(-1, 0, 0, 1, 0, 0); */
}
.block10Heading{
  position: absolute;
width: 709px;
height: 126px;
left: 365px;
top: 70px;
/* transform: matrix(-1, 0, 0, 1, 0, 0); */
font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 42px;
line-height: 63px;
text-align: center;

/* 2nd color */

color: #403D56;

}
.block10MidSocial{
  position: absolute;
width: 400px;
height: 100px;
left: 81px;
top: 500px;
  background: url("../assets/Social.png");
}
.block10Img{
  position: absolute;
width: 410px;
height: 633px;
left: 95px;
top: 280px;

background: url("../assets/block10.png");
}
.block10UpperSocial{
  position: absolute;
width: 400px;
height: 100px;
left: 0px;
top: 300px;
  background: url("../assets/Social.png");
}
.block10LastSocial{
  position: absolute;
width: 400px;
height: 100px;
left: 115px;
top: 700px;
  background: url("../assets/Social.png");
}
.block10LeftBlock{
  
position: absolute;
width: 862px;
height: 600px;
left: 556px;
top: 280px;

background: #FFFFFF;
border: 4px solid #26BAA4;
box-shadow: 17px 18px 60px rgba(0, 0, 0, 0.25);
}
.block10LeftHeading{
  position: absolute;
width: 258px;
height: 63px;
left: 640px;
top: 300px;

font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 42px;
line-height: 63px;
/* identical to box height */


/* 2nd color */

color: #403D56;
}
.block10Email{
  position: absolute;
width: 130px;
height: 32px;
left: 640px;
top: 380px;

font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 32px;
/* identical to box height, or 200% */


/* Text field title color */

color: #747474;

}
.block10EmailInput{
  
position: absolute;
width: 458px;
height: 56px;
left: 640px;
top: 420px;

background: #FAFAFA;
border-radius: 5px
}
.block10Name{
  position: absolute;
width: 130px;
height: 32px;
left: 640px;
top: 480px;

font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 32px;
/* identical to box height, or 200% */


/* Text field title color */

color: #747474;

}
.block10NameInput{
  
position: absolute;
width: 458px;
height: 56px;
left: 640px;
top: 520px;

background: #FAFAFA;
border-radius: 5px
}
.block10Message{
  position: absolute;
width: 130px;
height: 32px;
left: 620px;
top: 590px;

font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 32px;
/* identical to box height, or 200% */


/* Text field title color */

color: #747474;

}
.block10MessageInput{
  
position: absolute;
width: 458px;
height: 156px;
left: 640px;
top: 620px;

background: #FAFAFA;
border-radius: 5px
}
.block10Button{
  position: absolute;
width: 114px;
height: 46px;
left: 987px;
top: 800px;
color:white;
background: #26BAA4;
}
.block10SecondImg{
  
position: absolute;
width: 115.56px;
height: 212.08px;
left: 1231px;
top: 500px;

background: url("../assets/block10.2.png");
}
</style>