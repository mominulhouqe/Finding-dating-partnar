


const loadUser =() => {
    fetch('https://randomuser.me/api/?gender=female')
    .then(res => res.json())
    .then(data => display(data));
}


const display = users => {

// get gender
    const genderTag = document.getElementById('gender');
    genderTag.innerHTML = users.results[0].gender;

    // get Name
    const name = document.getElementById('name');
    name.innerHTML = users.results[0].name.title + ' '+ users.results[0].name.first + ' '+ users.results[0].name.last;
    // get img
    const image = document.getElementById('img');
    image.innerHTML = `
    <h4>Country Name : ${users.results[0].location.country} </h4>
    <h5 >Email : ${users.results[0].email} </h5>
    <h5 >Call : ${users.results[0].phone} </h5>
    
   <img src="${users.results[0].picture.large}" />
    `;



     



}

loadUser();