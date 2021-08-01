<template>
  <div id="container">
    <h1 id="title" onclick="window.location.href='/';">Mymate</h1>
    <div id="sub-container">
      <!-- <v-btn
        type="button"
        value="Submit"
        class="submit"
        @click="getUsersList()"
        color="light-black"
        >Get users</v-btn
      > -->
      <ul id="users-list" ref="usersListRef">
        <!-- <li class="user">Ahmed</li> -->
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
import db from "@/fb";
export default {
  name: "Results",
  props: {
    msg: String,
  },
  methods: {
    renderUsers(doc) {
      let li = document.createElement("li");
      let name = document.createElement("span");
      let phone = document.createElement("span");
      let gender = document.createElement("span");
      let city = document.createElement("span");
      let button = document.createElement("button");

      //////////////////////////

      li.setAttribute("data-id", doc.id);
      name.textContent = doc.data().name;
      phone.textContent = doc.data().phone;
      gender.textContent = doc.data().gender;
      city.textContent = doc.data().city;
      button.textContent = "Contact";

      li.appendChild(name);
      li.appendChild(phone);
      li.appendChild(gender);
      li.appendChild(city);
      li.appendChild(button);

      //////////////////////////////////////////////////////// styling the list children
      li.style.color = "rgb(255, 255, 255)";
      li.style.fontSize = "25px";
      li.style.padding = "20px";
      li.style.background = "rgb(91, 163, 245)";
      li.style.position = " relative";
      li.style.borderBottom = "solid";
      li.style.borderBottomWidth = "1px";
      li.style.borderBottomColor = "rgb(38, 113, 199)";
      li.style.height = "100%";
      li.style.borderRadius = "20px";
      name.style.display = "block";
      name.style.color = "#9B03F8";
      name.style.fontFamily = "'Brush Script MT',cursiv";
      name.style.fontSize = "45px";
      phone.style.display = "block";
      gender.style.display = "block";
      city.style.display = "inline-block";
      button.style.background = "#22FBF3";
      button.style.color = "#F80303";
      button.style.cssFloat = "right";
      button.style.minHeight = "100%";
      button.style.padding = "8px";
      button.style.borderRadius = "30px";
      button.style.marginBottom = "10px";
      button.style.display = "block";

      ///////////////////////////////////////////////////////
      li.className = "user";
      const usersList = this.$refs.usersListRef;
      usersList.appendChild(li);
    },
    getUsersList() {
      db.collection("gym")
        .get()
        .then((snapshot) => {
          snapshot.docs.forEach((doc) => {
            this.renderUsers(doc);
          });
        });
    },
  },
  beforeMount() {
    this.getUsersList();
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
  min-width: 320px;
  border-bottom: 10px solid #f3f3f3;
  border-radius: 51px;
  padding-bottom: 15px;
  display: inline-block;
  font-size: 5em;
  color: rgb(255, 255, 255);
  margin-left: 40%;
  margin-top: 1px;
  margin-bottom: 40px;
  font-family: "Yanone Kaffeesatz", cursive;
  text-shadow: 0px 0px 0 rgb(231, 231, 231), 1px 0px 0 rgb(216, 216, 216),
    2px 0px 0 rgb(202, 202, 202), 3px 0px 0 rgb(187, 187, 187),
    4px 0px 0 rgb(173, 173, 173), 5px 0px 0 rgb(158, 158, 158),
    6px 0px 0 rgb(144, 144, 144), 7px 0px 6px rgba(0, 0, 0, 0.6),
    7px 0px 1px rgba(0, 0, 0, 0.5), 0px 0px 6px rgba(0, 0, 0, 0.2);
  z-index: 11;
  top: 0;
  cursor: pointer;
}
#sub-comtainer {
  /* margin-top: 100px; */
  /* padding: 100px; */
  /* display: flex; */
  /* justify-content: center; */
  /* align-items: center; */
}

ul {
  list-style-type: none;
  padding: 40px;
  border-radius: 25px;
}

.user {
  padding: 20px;
  background: rgb(91, 163, 245);
  font-size: 25px;
  color: rgb(255, 255, 255);
  position: relative;
  border-bottom: 1px solid rgb(38, 113, 199);
  height: 100%;
  border-radius: 20px;
}

li:nth-child(even) {
  padding: 20px;
  background: rgb(71, 149, 238);
}

li .user span {
  display: block;
}

li .user span:nth-child(2) {
  font-size: 25px;
  margin-top: 6px;
  color: #999;
}
</style>
