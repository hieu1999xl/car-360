const HOTSPOTS_CONFIG = [
  {
    positions: [
      { imageIndex: 1, xCoord: 50, yCoord: 50 },
			{ imageIndex: 2, yCoord: 55 },
			{ imageIndex: 3, yCoord: 60 },
			{ imageIndex: 4, yCoord: 65 },
			{ imageIndex: 5, yCoord: 70 },
			{ imageIndex: 6, yCoord: 75 }
    ],
    variant: {
      title: "1"
    }
  },
	{
    positions: [
      { imageIndex: 7, xCoord: 75, yCoord: 50 },
			{ imageIndex: 8, yCoord: 55 },
			{ imageIndex: 9, yCoord: 60 },
			{ imageIndex: 10, yCoord: 65 },
			{ imageIndex: 11, yCoord: 70 },
			{ imageIndex: 12, yCoord: 75 }
    ],
    variant: {
      title: "2"
    }
  },
	{
    positions: [
      { imageIndex: 13, xCoord: 100, yCoord: 50 },
			{ imageIndex: 14, yCoord: 55 },
			{ imageIndex: 15, yCoord: 60 },
			{ imageIndex: 16, yCoord: 65 },
			{ imageIndex: 17, yCoord: 70 },
			{ imageIndex: 18, yCoord: 75 }
    ],
    variant: {
      title: "3"
    }
  },
	{
    positions: [
      { imageIndex: 19, xCoord: 125, yCoord: 50 },
			{ imageIndex: 20, yCoord: 55 },
			{ imageIndex: 21, yCoord: 60 },
			{ imageIndex: 22, yCoord: 65 },
			{ imageIndex: 23, yCoord: 70 },
			{ imageIndex: 24, yCoord: 75 }
    ],
    variant: {
      title: "4"
    }
  },
	{
    positions: [
      { imageIndex: 25, xCoord: 150, yCoord: 50 },
			{ imageIndex: 26, yCoord: 55 },
			{ imageIndex: 27, yCoord: 60 },
			{ imageIndex: 28, yCoord: 65 },
			{ imageIndex: 29, yCoord: 70 },
			{ imageIndex: 30, yCoord: 75 }
    ],
    variant: {
      title: "5"
    }
  },
	{
    positions: [
      { imageIndex: 31, xCoord: 175, yCoord: 50 },
			{ imageIndex: 32, yCoord: 55 },
			{ imageIndex: 33, yCoord: 60 },
			{ imageIndex: 34, yCoord: 65 },
			{ imageIndex: 35, yCoord: 70 },
			{ imageIndex: 36, yCoord: 75 }
    ],
    variant: {
      title: "6"
    }
  }
];

window.CI360.addHotspots("hotspot-example", HOTSPOTS_CONFIG);

const container360 = window.CI360._viewers.filter(x => x.id === 'hotspot-example')[0]
var playing = false
const playButton = document.querySelector("[data-360-id='play']")
const stopButton = document.querySelector("[data-360-id='stop']")

playButton.addEventListener("click", function(){
	if( playing == true ) return
	playing = true
	container360.play(150)
})

stopButton.addEventListener("click", function(){
	playing = false
	container360.stop()
})


$('body').on('dblclick', function() {
});

var count = 0;

$('body').on('dblclick', function() {

    //console.log(viewer.getPosition());
    var myInfospot = new PANOLENS.Infospot( 700, "https://cdn2.iconfinder.com/data/icons/button-v1/30/13-512.png", true);
  // myInfospot.material.color.set( 0xf6ac30 );

     let clickedPos = viewer.getPosition();
    myInfospot.position.set(clickedPos.x * -1, clickedPos.y, clickedPos.z);
    myInfospot.addHoverText("DAMAGE",count);
    myInfospot.onClick(console.warn("HALA MADRID",clickedPos.x * -1, clickedPos.y, clickedPos.z))
  myInfospot.addEventListener('click', function(event){console.warn(event.target)})
    panorama.add( myInfospot );
    myInfospot.name=count
     panorama.toggleInfospotVisibility(true);
  count=++count;
  viewer.autoHideInfospot = false;
    viewer.autoHideInfospot = true;
});

PANOLENS.Viewer.prototype.getPosition = function () {
	var intersects, point, panoramaWorldPosition, outputPosition;
	intersects = this.raycaster.intersectObject( this.panorama, true );

	if ( intersects.length > 0 ) {
		point = intersects[0].point;
		panoramaWorldPosition = this.panorama.getWorldPosition();

		// Panorama is scaled -1 on X axis
		outputPosition = new THREE.Vector3(
			-(point.x - panoramaWorldPosition.x).toFixed(2),
			(point.y - panoramaWorldPosition.y).toFixed(2),
			(point.z - panoramaWorldPosition.z).toFixed(2)
		);
	}
  
	return outputPosition;
};

