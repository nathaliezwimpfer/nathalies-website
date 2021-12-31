let submitBtn = document.querySelector('.submit-btn');

submitBtn.addEventListener('click', addFunctionality);
// not working yet!
submitBtn.addEventListener('keyup', addFunctionality);

function addFunctionality() {
  let list = document.getElementById('list');
  let input = document.getElementById('todo-input');
  let li = document.createElement('li');
  let spanDiv = document.createElement('div');
  let textDiv = document.createElement('div');
  let span1 = document.createElement('span');
  let span2 = document.createElement('span');

  if (input.value === '') {
    alert('You must type a todo task.')
  } else {
    //Create Li and put it into Ul
    li.setAttribute('id', input.value);
    list.appendChild(li);
    //Create text div and put it into Li
    textDiv.setAttribute('id', input.value + 'textdiv');
    textDiv.appendChild(document.createTextNode(input.value));
    li.appendChild(textDiv);
    //Create span div and put it into Li
    spanDiv.setAttribute('id', input.value + 'spandiv');
    li.appendChild(spanDiv);
    //Create two spans and put them into span div - setting attributes don't seem to be necessary?!
    //span1.setAttribute('id', input.value + 'check');
    //span1.setAttribute('class','check');
    span1.appendChild(document.createTextNode('🔲'));
    spanDiv.appendChild(span1);
    //span2.setAttribute('id', input.value + 'remove');
    span2.setAttribute('class','remove');
    span2.appendChild(document.createTextNode('✖️'));
    spanDiv.appendChild(span2);

    input.value = '';
  };
  //Remove item when clicking on x
  span2.addEventListener('click', function() {
    list.removeChild(li);
  });
  //Toggle checked off item
  span1.addEventListener('click', function() {
    if (span1.innerHTML === '🔲') {
      span1.innerHTML = '✔️';
      textDiv.classList.add('done-text');
      li.style.backgroundColor = '#cff1d6';
    } else {
      span1.innerHTML = '🔲';
      textDiv.classList.remove('done-text');
      li.style.backgroundColor = '#FCF9E3';
    }
  });
};
