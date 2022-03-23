const eventsPath = './script/json/events.json';

document.addEventListener('DOMContentLoaded', function() {
  let events;
  fetch(eventsPath)
  .then(response => response.json())
  .then(function (data) {
    events = data;
    console.log(events);
  });

  var calendarEl = document.getElementById('cal');
  var calendar = new FullCalendar.Calendar(calendarEl, {
    headerToolbar: {
      left: '',
      center: 'title',
      right: ''
    },
    initialDate: '2022-04-01',
    initialView: 'dayGridMonth',
    events: eventsPath,
    buttonIcons: false,
    navLinks: false,
    businessHours: true,
    locale: 'ja'
  });
  calendar.render();
});