document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendari');  

    var calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: 'dayGridMonth',

      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,listWeek'
      },

      locale:"es",

      dateClick:function(info){
        $("#evento").modal("show");
      }
    });

    calendar.render();
  });