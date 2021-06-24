/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let domainname = [];
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let suffix = [".com", ".us", ".net", ".io"];

  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        for (let l = 0; l < suffix.length; l++) {
          domainname.push(pronoun[i] + adj[j] + noun[k] + suffix[l]);
        }
      }
    }
  }
  console.log(domainname);

  let html_element = document.querySelector("#web_display");

  for (let i = 0; i < domainname.length; i++) {
    html_element.innerHTML += "<li>" + domainname[i] + "</li>";
  }
  //   html_element.innerHTML = domainname;
};
