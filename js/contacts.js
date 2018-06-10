// Gregory Manov
// JQuery

function addSkill(idName, skillsCode) {
  $( idName ).before(function() {
      $(this).attr('data-content', skillsCode);
  });
}
