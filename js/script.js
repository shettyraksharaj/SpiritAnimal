function dropdown() {
  if (document.getElementById('dropdown').style.display == 'inline-block') {
    document.getElementById('dropdown').style.display = 'none';
  }else {
    document.getElementById('dropdown').style.display = 'inline-block';
  }
}

function setdisplay() {
  if (window.innerWidth >= 800) {
    document.getElementById('dropdown').style.display = 'flex';
  }else {
    document.getElementById('dropdown').style.display = 'none';
  }
}

function showpic(n) {
  var pics = document.getElementsByClassName('preview');
  console.log(n);
  if (n > pics.length ) {n = 1;}
  if (n == 0) { n = pics.length;}
  for (var i = 0; i < pics.length; i++) {
    pics[i].style.display = 'none'; }
  pics[n - 1].style.display = 'block';
  document.getElementById('storage').innerHTML = n;
}

function openModal(n) {
  document.getElementById('modal').style.display = 'block';
  showpic(n);
}

function closeModal() {
  document.getElementById('modal').style.display = 'none';
}

function nextpic() {

  showpic(Number(document.getElementById('storage').innerHTML) + 1);
}

function prevpic() {
  showpic(Number(document.getElementById('storage').innerHTML) - 1);
}
