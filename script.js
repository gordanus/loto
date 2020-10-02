$(document).ready(function () {

  var students = [];
  var oldMonstersArr = [];
  var imgArr = ['monsters/01.jpg', 'monsters/02.jpg', 'monsters/03.jpg', 'monsters/04.jpg', 'monsters/05.jpg', 'monsters/06.jpg', 'monsters/07.jpg', 'monsters/08.jpg', 'monsters/09.jpg', 'monsters/10.jpg', 'monsters/11.jpg', 'monsters/12.jpg', 'monsters/13.jpg', 'monsters/14.jpg', 'monsters/15.jpg', 'monsters/16.jpg', 'monsters/17.jpg', 'monsters/18.jpg', 'monsters/19.jpg', 'monsters/20.jpg', 'monsters/21.jpg', 'monsters/22.jpg', 'monsters/23.jpg', 'monsters/24.jpg'];


  function getRandomImage(imgAr) {
    var num = Math.floor(Math.random() * imgAr.length);
    var imgStr = imgAr[num];
    return imgStr;
  };


  $('#dodaj').click(function () {
    var name = $('#name').val();
    if (name === "") {
      alert("Polje ne može ostati prazno");
      $('#name').focus();
      return false;
    }

    $('#second').append(`<input type='button' style='margin: 3px;' class='btn btn-secondary btn-lg' value=${name} onclick='removeStudent(this)'>`);
    students.push(name);
    $('#name').val('').focus();
    // console.log(students);
  });

  $('#spin').click(function () {
    if (students.length < 1) {
      alert("Unesite polaznike");
      $('#name').focus();
      return false;
    }
    var monsterImage = getRandomImage(imgArr);
    oldMonstersArr.push(monsterImage);
    var randomStudent = students[Math.floor(Math.random() * students.length)];

    if(oldMonstersArr.includes(monsterImage)){
      monsterImage = getRandomImage(imgArr);
    }
    //  console.log(randomStudent);

    $('.loader').show(300);
    $('#second').html(`
        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-body text-center">
              <img src="${monsterImage}" style="width:15em;">
              <p><h4>Za izradu zadatka je izabran polaznik</h4><h2>${randomStudent}</h2></p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Zatvori</button>
            </div>
          </div>
        </div>
      </div>`);
    setTimeout(function () {
      $('.loader').hide(200);
      $('#exampleModal').modal('show');
    }, 3000);

  });




});