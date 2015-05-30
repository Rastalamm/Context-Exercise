//Context Sample
var nigel = {
  name : 'nigel',
  ride : function(dest) {
    console.log(this.name, 'is riding to', dest);
  }
};

(function() {
  var constantine = {
    name : 'constantine'
  };

  var judah = {
    name : 'judah'
  };

  nigel.ride.call( judah, 'ala moana');
  nigel.ride.apply( constantine, ['kahala']);
  var justRide = nigel.ride.bind( constantine );
  justRide('waikiki');
  justRide('ala moana');
  justRide('china town');
})();
