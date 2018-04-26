function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  let changeMe = document.querySelectorAll('.ranked-list li')
  for(let i=0; i<changeMe.length; i++) {
    changeMe[i].innerHTML = parseInt(changeMe[i].innerHTML) + n
  }
}

function deepestChild() {
  let node = document.getElementById('grand-node');
  let next = node.children[0]
  while (next) {
    node = next
    next = node.children[0]
  }

  return node
}
