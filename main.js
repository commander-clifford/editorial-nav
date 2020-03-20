window.onload = function() {
  // HACK: this is a bit of a hack way to render initial state, but serves its purpose for this demo
  document.getElementsByClassName('navigation__link')[0].click();
};

window.onresize = function(){
  // rerun slider movment when screen size changes
  let activeLink = document.getElementsByClassName('navigation__link--active')[0];
  handleSliderMovement(activeLink);
};

// Establish the constant variable/elements

// assign the Root element
const root = document.getElementById("root");

// Create navigation element to house the nav list
const navigation = document.createElement('nav');
navigation.setAttribute('id','navigation');
navigation.setAttribute('class','navigation');

// Create articles to house the tabs content
const articles = document.createElement('article');
articles.setAttribute('id','articles');
articles.setAttribute('class','articles');

// Create an un-ordered list to house the navigation list
const navigationList = document.createElement('ul');
navigationList.setAttribute('id','navigation__list');
navigationList.setAttribute('class','navigation__list');

// Create the nav items array, then loop through array to build each nav/list item
const listItems = navigationData.cities;
listItems.forEach(renderNavigationList);
listItems.forEach(renderContentTabs);

// Create slider indicator
const slider = document.createElement('div');
slider.setAttribute('id', 'slider');
slider.setAttribute('class', 'slider');



// Build HTML elements

// function to build a list item
function renderNavigationList(element, index, arr) {
  let li = document.createElement('li');
  li.setAttribute('class','navigation__item navigation__item--'+element.section);
  let a = document.createElement('a');
  a.setAttribute('class','navigation__link navigation__link--'+element.section);
  a.innerHTML = a.innerHTML + element.label;
  a.addEventListener("click", () => {handleNavigation( element )});
  li.appendChild(a);
  navigationList.appendChild(li);
}
navigationList.appendChild(slider);
navigation.appendChild(navigationList);

// Create the article sections
function renderContentTabs(element, index, arr) {
  let section = document.createElement('section');
  section.setAttribute('class','section section--'+element.section);
  section.setAttribute('id','section--'+element.section);

  let sectionHead = document.createElement('div');
  sectionHead.setAttribute('class','section__head');

  let sectionBody = document.createElement('div');
  sectionHead.setAttribute('class','section__body');

  let title = document.createElement('h1');
  title.setAttribute('class', 'title');
  title.innerHTML = title.innerHTML + element.label;

  let desc = document.createElement('p');
  desc.setAttribute('class', 'desc');
  desc.innerHTML = desc.innerHTML + element.desc;

  let time = document.createElement('div');
  time.setAttribute('id', 'time');
  time.setAttribute('class', 'time');
  // time.innerHTML = time.innerHTML + 'Local Time: ' + handleCalculatedTime(element);

  handleCalculatedTime(element, time);

  sectionHead.appendChild(title);
  sectionHead.appendChild(desc);
  sectionHead.appendChild(time);

  section.appendChild(sectionHead);
  section.appendChild(sectionBody);

  articles.appendChild(section);
}
root.appendChild(navigation);
root.appendChild(articles);


// Handle display data and interactions

// dynamic time
function handleCalculatedTime(element, time) {
  let d = new Date();
  let utc = d.getTime() + (d.getTimezoneOffset() * 60000);
  let nd = new Date(utc + (3600000*element.UTCoffset));

  // let lnd = nd.toLocaleString(element.lcid);

  let hh = nd.getHours();
  let m = nd.getMinutes();
  let s = nd.getSeconds();

  let dd = "AM";
  let h = hh;
  if (h >= 12) {
    h = hh - 12;
    dd = "PM";
  }
  if (h == 0) {
    h = 12;
  }
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  // Show time and date localized - I decided not to do this
  // time.innerHTML = 'Local Time: ' + lnd;

  // show only time (as requested)
  time.innerHTML = 'Local Time: ' + h +':'+ m +':'+ s + ' ' + dd;

  setTimeout(function(){ handleCalculatedTime(element, time) }, 1000);
}

// parent nav function
function handleNavigation(element) {
  if(window.pageYOffset > 128){window.scrollTo(0,128)}
  let self = event.target; // Safari only: compatability issues may happen here
  let parent = event.target.parentNode; // Safari only: compatability issues may happen here
  let city = element;
  handleSliderMovement(parent);
  handleClassToggles(self);
  handleTabsToggle(city);
}

// handle slider movement to active link
function handleSliderMovement(parent) {
  let offsetWidth = (parent.offsetWidth)+'px';
  let offsetLeft = (parent.offsetLeft)+'px';
  slider.style.width = offsetWidth;
  slider.style.left = offsetLeft;
}

// toggle active classes
function handleClassToggles(self) {
  let links = document.getElementsByClassName('navigation__link');
  for (var i = 0; i < links.length; i++) {
    links[i].classList.remove('navigation__link--active');
  }
  self.classList.add('navigation__link--active');
}

// toggle between content tabs
function handleTabsToggle(city) {
  let sections = document.getElementsByClassName('section');
  for (var i = 0; i < sections.length; i++) {
    sections[i].classList.remove('section--active');
  }
  let activeSection = document.getElementById('section--'+city.section);
  activeSection.classList.add('section--active');
}
