// this is for second idea dynamically showing
// var skillSection = $('#skills');

// var frontEnd = $('#front-end');
// var backEnd = $('#back-end');
// var other = $('#other');

// function frontEndSkills() {

//     var skillArray = ['HTML5', 'CSS', 'Bootstrap', 'Javascript', 'JQuery', 'AJAX']
//     var frontSkillCard = $('<div class="card bg-light">');
//     var headingOne = $('<div class="card-header">');
//     var listFront = $('<ul class="list-group list-group-flush">');

//     headingOne.text('Front End Skills: ');
//     headingOne.appendTo(frontSkillCard);
//     listFront.appendTo(frontSkillCard);

//         for(var i=0; i < skillArray[i].length; i++) {
//             var lineFront = $('<li class="list-group-item">');
//             lineFront.text(skillArray[i]);
//             lineFront.appendTo(listFront);
//         }

//     frontSkillCard.appendTo(skillSection);
// }
// function backEndSkills() {
//     var backSkillArray = ['Node.js'];
//     var backSkillCard = $('<div class="card bg-light">');
//     var headingTwo = $('<div class="card-header">');
//     var listBack = $('<ul class="list-group list-group-flush">');

//     headingTwo.text('Back End Skills: ');
//     headingTwo.appendTo(backSkillCard);
//     listBack.appendTo(backSkillCard);

//         for(var i=0; i < backSkillArray.length; i++) {
//             var lineBack = $('<li class="list-group-item">');
//             lineBack.text(backSkillArray[i]);
//             lineBack.appendTo(listBack);
//         }
        
//     backSkillCard.appendTo(skillSection);

// }
// function otherSkills() {
//     var otherSkillArray = [];
//     var otherSkillCard = $('<div class="card bg-light">');
//     var headingThree = $('<div class="card-header">');
//     // var listOther = $('<ul class="list-group list-group-flush">');

//     headingThree.text('More To Come!')
//     headingThree.appendTo(otherSkillCard);

//     // for(var i=0; i < backSkillArray.length; i++) {
//     //     var lineBack = $('<li class="list-group-item">');
//     //     lineBack.text(backSkillArray[i]);
//     //     lineBack.appendTo(listBack);
//     // }
    
//     otherSkillCard.appendTo(skillSection);

// }


// $(document).ready(function() {
//     frontEnd.on('click', function(event) {
//         event.preventDefault();
//         frontEndSkills();
//     })
    
//     backEnd.on('click', function(event) {
//         event.preventDefault();
//         console.log('heyhey');
//         backEndSkills();
//     })
    
//     other.on('click', function(event) {
//         event.preventDefault();
//         console.log('heyhey');
//         otherSkills();
//     })

//   });