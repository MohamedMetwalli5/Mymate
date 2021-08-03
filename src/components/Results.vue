<template>
  <div id="container">
    <h1 id="title" onclick="window.location.href='/';">Mymate</h1>
    <div id="sub-container">
      <div id="sorting-filtering-bar">
        <select class="sorting-filtering-box" name="sorting">
          <option value="" @click="setSortingOption('')">Sort 🔻</option>
          <option value="name-sorting" @click="setSortingOption('name')">
            name
          </option>
          <option value="age-sorting" @click="setSortingOption('age')">
            age
          </option>
        </select>
        <select class="sorting-filtering-box" name="filtering">
          <option value="">Filter 🔻</option>
          <option value="gender-filtering">gender</option>
          <option value="city-filtering">city</option>
        </select>
      </div>
      <ul id="users-list" ref="usersListRef"></ul>
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
  data() {
    return {
      shownCategory: "studying",
      sortingOption: "",
      filteringOption: "",
    };
  },
  methods: {
    setSortingOption(value) {
      this.sortingOption = value;
      console.log("this.sortingOption");
    },
    setFilteringOption(value) {
      this.filteringOption = value;
    },
    renderUsers(doc) {
      let li = document.createElement("li");
      let name = document.createElement("span");
      let phone = document.createElement("span");
      let age = document.createElement("span");
      let gender = document.createElement("span");
      let city = document.createElement("span");
      let button = document.createElement("button");
      let a = document.createElement("a");

      let linkText = document.createTextNode("Contact 💬");
      a.appendChild(linkText);
      a.style.color = "#000000";
      a.style.textDecoration = "none";
      a.href =
        "https://api.whatsapp.com/send?phone=" +
        doc.data().phone +
        "&text=" +
        "Hi, do you want to contact for the " +
        this.shownCategory +
        " mate ?";
      document.body.appendChild(a);

      li.setAttribute("data-id", doc.id);
      name.textContent = doc.data().name;
      phone.textContent = "📞 " + doc.data().phone;
      age.textContent = "🎂 " + doc.data().age;
      let genderCheck = doc.data().gender;
      if (genderCheck == "Male") {
        gender.textContent = "👨 " + doc.data().gender;
      } else {
        gender.textContent = "👩 " + doc.data().gender;
      }
      city.textContent = "📍 " + doc.data().city + ", Egypt";
      button.textContent = "";

      button.appendChild(a);
      li.appendChild(name);
      li.appendChild(phone);
      li.appendChild(age);
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
      name.style.fontSize = "50px";
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
      if (this.sortingOption == "" && this.filteringOption == "") {
        db.collection(this.shownCategory)
          .get()
          .then((snapshot) => {
            snapshot.docs.forEach((doc) => {
              this.renderUsers(doc);
            });
          });
      } else if (this.sortingOption == "name" || this.sortingOption == "age") {
        db.collection(this.shownCategory)
          .orderBy(this.sortingOption)
          .get()
          .then((snapshot) => {
            snapshot.docs.forEach((doc) => {
              this.renderUsers(doc);
            });
          });
      }
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
  background-position-x: fixed;
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

#sorting-filtering-bar {
  margin: auto;
  padding: 20px;
  background: rgb(34, 206, 0);
  font-size: 25px;
  color: rgb(255, 255, 255);
  position: relative;
  border-bottom: 1px solid rgb(38, 113, 199);
  height: 100%;
  width: 90%;
  border-radius: 20px;
}
.sorting-filtering-box {
  background: rgb(245, 166, 75);
  width: 120px;
  min-height: 100%;
  border-radius: 30px;
  padding: 10px;
  margin-right: 120px;
  cursor: pointer;
}
.sorting-filtering-box:hover {
  background: rgb(245, 178, 102);
}
</style>
