new Vue({
el: '#schedule',
data: {
	thursdaySessions: [
		{"name": "Opening", "date": "2020-11-26T13:00:00.000+01:00"},
		{"name": "Session 1", "date": "2020-11-26T14:00:00.000+01:00"},
		{"name": "Coffee Break", "date": "2020-11-26T16:00:00.000+01:00"},
		{"name": "Session 2", "date": "2020-11-26T17:00:00.000+01:00"},
		{"name": "Dinner", "date": "2020-11-26T19:00:00.000+01:00"},
		{"name": "Session 3", "date": "2020-11-26T20:00:00.000+01:00"},
		{"name": "🎉 Socialising 🧀", "date": "2020-11-26T22:00:00.000+01:00"},
	],
	fridaySessions: [
		{"name": "Opening", "date": "2020-11-27T13:00:00.000+01:00"},
		{"name": "Session 4", "date": "2020-11-27T14:00:00.000+01:00"},
		{"name": "Coffee Break", "date": "2020-11-27T16:00:00.000+01:00"},
		{"name": "Session 5", "date": "2020-11-27T17:00:00.000+01:00"},
		{"name": "Dinner", "date": "2020-11-27T19:00:00.000+01:00"},
		{"name": "Session 6", "date": "2020-11-27T20:00:00.000+01:00"},
		{"name": "🎉 Socialising", "date": "2020-11-27T22:00:00.000+01:00"},
	]
},
computed: {
	localThursdaySessions: function() {
		return this.thursdaySessions.map(function (session) {
			var s = session;
			s.cransMontanaTime = luxon.DateTime.fromISO(s.date, { zone: "Europe/Zurich" }).toLocaleString(luxon.DateTime.TIME_24_SIMPLE);
			s.localTime = luxon.DateTime.fromISO(s.date).toLocaleString(luxon.DateTime.DATETIME_SHORT);
			return s;
		});
	},
	localFridaySessions:  function() {
		return this.fridaySessions.map(function (session) {
			var s = session;
			s.cransMontanaTime = luxon.DateTime.fromISO(s.date, { zone: "Europe/Zurich" }).toLocaleString(luxon.DateTime.TIME_24_SIMPLE);
			s.localTime = luxon.DateTime.fromISO(s.date).toLocaleString(luxon.DateTime.DATETIME_SHORT);
			return s;
		});
	}
}
});