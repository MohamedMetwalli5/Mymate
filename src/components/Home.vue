<template>
  <div id="container">
    <h1 id="title" onclick="window.location.href='/';">Mymate</h1>
    <div id="sub-container">
      <button class="category">
        <button class="results-list" onclick="window.location.href='/results';">
          Show results
        </button>
        <h1 class="sub-title">Walking 🚶</h1>
        <form class="form" id="add-walking-form">
          <input
            class="text-box"
            type="text"
            id="walk-name"
            value=""
            ref="walkingNameRef"
            placeholder=" Enter your name"
            required="true"
          />
          <input
            class="text-box"
            type="text"
            name="phone-number"
            ref="walkingPhoneRef"
            value=""
            placeholder=" Enter your phone number"
            required="true"
          />
          <select class="gender" name="gender" ref="walkingGenderRef">
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          <select class="city" name="city" ref="walkingCityRef">
            <option value="Alexandria">Alexandria</option>
            <option value="Cairo">Cairo</option>
            <option value="Sharm El Sheikh">Sharm El Sheikh</option>
            <option value="Hurghada">Hurghada</option>
            <option value="Aswan">Aswan</option>
            <option value="Luxor">Luxor</option>
          </select>
          <!-- <input
            type="button"
            value="Submit"
            class="submit"
            @click="
              setCategory('walking');
              addPerson();
            "
          /> -->
          <v-btn
            type="button"
            value="Submit"
            class="submit"
            :loading="loading[0]"
            @click="
              setCategory('walking');
              addPerson();
            "
            color="light-green"
            >Submit</v-btn
          >
        </form>
      </button>
      <button class="category">
        <button class="results-list" onclick="window.location.href='/results';">
          Show results
        </button>
        <h1 class="sub-title">Cycling 🚴</h1>
        <form class="form" id="add-cycling-form">
          <input
            class="text-box"
            type="text"
            id="cycling-name"
            ref="cyclingNameRef"
            name="name"
            value=""
            placeholder=" Enter your name"
            required
          />
          <input
            class="text-box"
            type="text"
            name="phone-number"
            ref="cyclingPhoneRef"
            value=""
            placeholder=" Enter your phone number"
            required
          />
          <select class="gender" name="gender" ref="cyclingGenderRef">
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          <select class="city" name="city" ref="cyclingCityRef">
            <option value="Alexandria">Alexandria</option>
            <option value="Cairo">Cairo</option>
            <option value="Sharm El Sheikh">Sharm El Sheikh</option>
            <option value="Hurghada">Hurghada</option>
            <option value="Aswan">Aswan</option>
            <option value="Luxor">Luxor</option>
          </select>
          <!-- <input
            type="button"
            value="Submit"
            class="submit"
            @click="
              setCategory('cycling');
              addPerson();
            "
          /> -->
          <v-btn
            type="button"
            value="Submit"
            class="submit"
            :loading="loading[1]"
            @click="
              setCategory('cycling');
              addPerson();
            "
            color="light-green"
            >Submit</v-btn
          >
        </form>
      </button>
      <button class="category">
        <button class="results-list" onclick="window.location.href='/results';">
          Show results
        </button>
        <h1 class="sub-title">Gym 🏋️</h1>
        <form class="form" id="add-gym-form">
          <input
            class="text-box"
            type="text"
            id="gym-name"
            ref="gymNameRef"
            name="name"
            value=""
            placeholder=" Enter your name"
            required
          />
          <input
            class="text-box"
            type="text"
            name="phone-number"
            ref="gymPhoneRef"
            value=""
            placeholder=" Enter your phone number"
            required
          />
          <select class="gender" name="gender" ref="gymGenderRef">
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          <select class="city" name="city" ref="gymCityRef">
            <option value="Alexandria">Alexandria</option>
            <option value="Cairo">Cairo</option>
            <option value="Sharm El Sheikh">Sharm El Sheikh</option>
            <option value="Hurghada">Hurghada</option>
            <option value="Aswan">Aswan</option>
            <option value="Luxor">Luxor</option>
          </select>
          <!-- <input
            type="button"
            value="Submit"
            class="submit"
            @click="
              setCategory('gym');
              addPerson();
            "
          /> -->
          <v-btn
            type="button"
            value="Submit"
            class="submit"
            :loading="loading[2]"
            @click="
              setCategory('gym');
              addPerson();
            "
            color="light-green"
            >Submit</v-btn
          >
        </form>
      </button>
      <button class="category">
        <button class="results-list" onclick="window.location.href='/results';">
          Show results
        </button>
        <h1 class="sub-title">Esport 🎮</h1>
        <form class="form" id="add-esport-form">
          <input
            class="text-box"
            type="text"
            id="esport-name"
            ref="esportNameRef"
            name="name"
            value=""
            placeholder=" Enter your name"
            required
          />
          <input
            class="text-box"
            type="text"
            name="phone-number"
            ref="esportPhoneRef"
            value=""
            placeholder=" Enter your phone number"
            required
          />
          <select class="gender" name="gender" ref="esportGenderRef">
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          <select class="city" name="city" ref="esportCityRef">
            <option value="Alexandria">Alexandria</option>
            <option value="Cairo">Cairo</option>
            <option value="Sharm El Sheikh">Sharm El Sheikh</option>
            <option value="Hurghada">Hurghada</option>
            <option value="Aswan">Aswan</option>
            <option value="Luxor">Luxor</option>
          </select>
          <!-- <input
            type="button"
            value="Submit"
            class="submit"
            @click="
              setCategory('esport');
              addPerson();
            "
          /> -->
          <v-btn
            type="button"
            value="Submit"
            class="submit"
            :loading="loading[3]"
            @click="
              setCategory('esport');
              addPerson();
            "
            color="light-green"
            >Submit</v-btn
          >
        </form>
      </button>
      <button class="category">
        <button class="results-list" onclick="window.location.href='/results';">
          Show results
        </button>
        <h1 class="sub-title">Shopping 🛍️</h1>
        <form class="form" id="add-shopping-form">
          <input
            class="text-box"
            type="text"
            id="shopping-name"
            ref="shoppingNameRef"
            name="name"
            value=""
            placeholder=" Enter your name"
            required
          />
          <input
            class="text-box"
            type="text"
            name="phone-number"
            ref="shoppingPhoneRef"
            value=""
            placeholder=" Enter your phone number"
            required
          />
          <select class="gender" name="gender" ref="shoppingGenderRef">
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          <select class="city" name="city" ref="shoppingCityRef">
            <option value="Alexandria">Alexandria</option>
            <option value="Cairo">Cairo</option>
            <option value="Sharm El Sheikh">Sharm El Sheikh</option>
            <option value="Hurghada">Hurghada</option>
            <option value="Aswan">Aswan</option>
            <option value="Luxor">Luxor</option>
          </select>
          <!-- <input
            type="button"
            value="Submit"
            class="submit"
            @click="
              setCategory('shopping');
              addPerson();
            "
          /> -->
          <v-btn
            type="button"
            value="Submit"
            class="submit"
            :loading="loading[4]"
            @click="
              setCategory('shopping');
              addPerson();
            "
            color="light-green"
            >Submit</v-btn
          >
        </form>
      </button>
      <button class="category">
        <button class="results-list" onclick="window.location.href='/results';">
          Show results
        </button>
        <h1 class="sub-title">Studying 📚</h1>
        <form class="form" id="add-studying-form">
          <input
            class="text-box"
            type="text"
            id="studying-name"
            ref="studyingNameRef"
            name="name"
            value=""
            placeholder=" Enter your name"
            required
          />
          <input
            class="text-box"
            type="text"
            name="phone-number"
            ref="studyingPhoneRef"
            value=""
            placeholder=" Enter your phone number"
            required
          />
          <select class="gender" name="gender" ref="studyingGenderRef">
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          <select class="city" name="city" ref="studyingCityRef">
            <option value="Alexandria">Alexandria</option>
            <option value="Cairo">Cairo</option>
            <option value="Sharm El Sheikh">Sharm El Sheikh</option>
            <option value="Hurghada">Hurghada</option>
            <option value="Aswan">Aswan</option>
            <option value="Luxor">Luxor</option>
          </select>
          <!-- <input
            type="button"
            value="Submit"
            class="submit"
            @click="
              setCategory('studying');
              addPerson();
            "
          /> -->
          <v-btn
            type="button"
            value="Submit"
            class="submit"
            :loading="loading[5]"
            @click="
              setCategory('studying');
              addPerson();
            "
            color="light-green"
            >Submit</v-btn
          >
        </form>
      </button>
    </div>
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
</template>

<script>
import db from "@/fb";
export default {
  name: "Home",
  props: {
    msg: String,
  },
  data() {
    return {
      category: "",
      loading: [false, false, false, false, false, false],
    };
  },
  methods: {
    setCategory(categoryType) {
      this.category = categoryType;
    },
    addPerson() {
      if (
        this.category == "walking" &&
        this.$refs.walkingNameRef.value.length > 0 &&
        this.$refs.walkingPhoneRef.value.length > 0
      ) {
        this.loading[0] = true;
        const person = {
          name: this.$refs.walkingNameRef.value,
          phone: this.$refs.walkingPhoneRef.value,
          gender: this.$refs.walkingGenderRef.value,
          city: this.$refs.walkingCityRef.value,
        };
        db.collection("walking")
          .add(person)
          .then(() => {
            console.log("Added a person in the category of walking");
            this.loading[0] = false;
          });
      } else if (
        this.category == "cycling" &&
        this.$refs.cyclingNameRef.value.length > 0 &&
        this.$refs.cyclingPhoneRef.value.length > 0
      ) {
        this.loading[1] = true;
        const person = {
          name: this.$refs.cyclingNameRef.value,
          phone: this.$refs.cyclingPhoneRef.value,
          gender: this.$refs.cyclingGenderRef.value,
          city: this.$refs.cyclingCityRef.value,
        };
        db.collection("cycling")
          .add(person)
          .then(() => {
            console.log("Added a person in the category of cycling");
            this.loading[1] = false;
          });
      } else if (
        this.category == "gym" &&
        this.$refs.gymNameRef.value.length > 0 &&
        this.$refs.gymPhoneRef.value.length > 0
      ) {
        this.loading[2] = true;
        const person = {
          name: this.$refs.gymNameRef.value,
          phone: this.$refs.gymPhoneRef.value,
          gender: this.$refs.gymGenderRef.value,
          city: this.$refs.gymCityRef.value,
        };
        db.collection("gym")
          .add(person)
          .then(() => {
            console.log("Added a person in the category of gym");
            this.loading[2] = false;
          });
      } else if (
        this.category == "esport" &&
        this.$refs.esportNameRef.value.length > 0 &&
        this.$refs.esportPhoneRef.value.length > 0
      ) {
        this.loading[3] = true;
        const person = {
          name: this.$refs.esportNameRef.value,
          phone: this.$refs.esportPhoneRef.value,
          gender: this.$refs.esportGenderRef.value,
          city: this.$refs.esportCityRef.value,
        };
        db.collection("esport")
          .add(person)
          .then(() => {
            console.log("Added a person in the category of esport");
            this.loading[3] = false;
          });
      } else if (
        this.category == "shopping" &&
        this.$refs.shoppingNameRef.value.length > 0 &&
        this.$refs.shoppingPhoneRef.value.length > 0
      ) {
        this.loading[4] = true;
        const person = {
          name: this.$refs.shoppingNameRef.value,
          phone: this.$refs.shoppingPhoneRef.value,
          gender: this.$refs.shoppingGenderRef.value,
          city: this.$refs.shoppingCityRef.value,
        };
        db.collection("shopping")
          .add(person)
          .then(() => {
            console.log("Added a person in the category of shopping");
            this.loading[4] = false;
          });
      } else if (
        this.category == "studying" &&
        this.$refs.studyingNameRef.value.length > 0 &&
        this.$refs.studyingPhoneRef.value.length > 0
      ) {
        this.loading[5] = true;
        const person = {
          name: this.$refs.studyingNameRef.value,
          phone: this.$refs.studyingPhoneRef.value,
          gender: this.$refs.studyingGenderRef.value,
          city: this.$refs.studyingCityRef.value,
        };
        db.collection("studying")
          .add(person)
          .then(() => {
            console.log("Added a person in the category of studying");
            this.loading[5] = false;
          });
      }
    },
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
  min-width: 100%;
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
.category {
  padding: 0.8em;
  background: rgb(75, 154, 245);
  border: solid;
  border-color: rgb(80, 158, 247);
  border-radius: 30px;
  width: 47%;
  font-size: 1em;
  margin-left: 1vw;
  margin-right: 1vw;
  margin-bottom: 1vw;
  cursor: auto;
}
/* .category:hover {
  background: rgb(115, 175, 243);
} */
.form {
  float: left;
  display: inline;
}
.sub-title {
  font-size: 2.5em;
  cursor: auto;
}
.text-box {
  height: 30%;
  width: 30%;
  float: left;
  border-radius: 25px;
  margin-right: 1em;
  font-size: 1.5em;
  background: rgb(238, 233, 241);
}
.gender {
  padding-left: 8px;
  float: left;
  height: 28%;
  font-size: 25px;
  border-radius: 20px;
  background: rgb(238, 189, 189);
  margin-right: 1em;
  cursor: pointer;
}
.city {
  padding-left: 8px;
  max-width: 90%;
  float: left;
  height: 30%;
  font-size: 25px;
  border-radius: 20px;
  background: rgb(210, 157, 241);
  cursor: pointer;
}
.submit {
  padding: 8px;
  max-width: 70%;
  border-radius: 30px;
  border-color: yellowgreen;
  background: rgb(153, 207, 45);
  height: 30%;
  font-size: 25px;
  float: right;
  cursor: pointer;
}
.submit:hover {
  background: rgb(173, 224, 69);
}
.results-list {
  padding: 8px;
  margin-top: 20px;
  margin-bottom: 20px;
  float: right;
  border-radius: 25px;
  height: 50px;
  background: red;
  font-weight: bold;
  font-size: 1em;
  cursor: pointer;
}
.results-list:hover {
  background: rgb(212, 65, 65);
}
</style>
