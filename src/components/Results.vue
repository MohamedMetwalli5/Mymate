<template>
  <div id="container">
    <h1 id="title" onclick="window.location.href='/';">Mymate</h1>
    <div id="sub-container">
      <ul id="list">
        <li>Coffee</li>
        <li>Tea</li>
        <li>Milk</li>
      </ul>
    </div>
    <div id="footer">
      <img
        id="header-image"
        src="../assets/Celebration.png"
        alt="failed to load"
      />
      <img
        id="header-image"
        src="../assets/Celebration.png"
        alt="failed to load"
      />
      <img
        id="header-image"
        src="../assets/Celebration.png"
        alt="failed to load"
      />
      <img class="image" src="../assets/Friends.svg" alt="failed to load" />
      <img class="image" src="../assets/Cycling.svg" alt="failed to load" />
      <img class="image" src="../assets/Playing.svg" alt="failed to load" />
      <img class="image" src="../assets/Walking.svg" alt="failed to load" />
    </div>
  </div>
</template>

<script>
// import db from "@/fb";
export default {
  name: "Results",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.image {
  height: 30%;
  width: 20%;
}
#header-image {
  width: 33%;
  height: 150px;
}
#container {
  position: absolute;
  min-height: 100%;
  width: 100%;
  background: rgb(243, 212, 36);
}
#title {
  font-size: 5em;
  color: rgb(255, 255, 255);
  margin-left: auto;
  margin-top: 1px;
  font-family: "Yanone Kaffeesatz", cursive;
  text-shadow: 0px 0px 0 rgb(231, 231, 231), 1px 0px 0 rgb(216, 216, 216),
    2px 0px 0 rgb(202, 202, 202), 3px 0px 0 rgb(187, 187, 187),
    4px 0px 0 rgb(173, 173, 173), 5px 0px 0 rgb(158, 158, 158),
    6px 0px 0 rgb(144, 144, 144), 7px 0px 6px rgba(0, 0, 0, 0.6),
    7px 0px 1px rgba(0, 0, 0, 0.5), 0px 0px 6px rgba(0, 0, 0, 0.2);
  z-index: 11;
  top: 0;
  -webkit-animation: jump 2s infinite;
  -moz-animation: jump 2s infinite;
  -o-animation: jump 2s infinite;
  -ms-animation: jump 2s infinite;
  animation: jump 2s infinite;
  cursor: pointer;
}
#sub-comtainer {
  /* margin-top: 100px; */
  /* padding: 100px; */
  /* display: flex; */
  /* justify-content: center; */
  /* align-items: center; */
}
#list {
  background: rgb(94, 133, 243);
  list-style-type: none;
  border-radius: 30px;
  min-width: 80%;
  width: 80%;
  margin: auto;
}
li {
  height: 50px;
  width: 70%;
  margin: auto;
  color: rgb(0, 0, 0);
  font-size: 2em;
}
</style>
