const burger = document.getElementById("burger");
const nav = document.getElementById("navigation");
const ul = document.getElementById("list");
const bar1 = document.getElementsByClassName('bar1')[0];
const bar2 = document.getElementsByClassName('bar2')[0];
const bar3 = document.getElementsByClassName('bar3')[0];
const links = document.getElementsByTagName("a");
burger.onclick = () => {
  nav.classList.toggle('navOn');
  ul.classList.toggle('ulOn');
  bar1.classList.toggle('bar1-animation');
  bar2.classList.toggle('bar2-animation');
  bar3.classList.toggle('bar3-animation');
}
for (var link of links) {
  
    if (link['href'] == location.href) {
      link.classList.add("underline");
    }
    else { link.classList.remove("underline"); }
  
}
alert('the purpose of this domo is animating a menu button manually\n use mobile view please !')