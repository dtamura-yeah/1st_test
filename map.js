// �L�����p�X�̗v�f���擾����
var canvas1 = document.getElementById( 'map-canvas-1' ) ;
var canvas2 = document.getElementById( 'map-canvas-2' ) ;
var canvas3 = document.getElementById( 'map-canvas-3' ) ;

// ���S�̈ʒu���W���w�肷��
var latlng = new google.maps.LatLng( 40.5084391 , 141.486009,17 );

// �n�}�̃I�v�V������ݒ肷��
var mapOptions = {
	zoom: 15 ,			// �Y�[���l
	center: latlng ,	// ���S���W [latlng]
};

// [canvas]�ɁA[mapOptions]�̓��e�́A�n�}�̃C���X�^���X([map])���쐬����
var map1 = new google.maps.Map( canvas1, mapOptions ) ;
var map2 = new google.maps.Map( canvas2, mapOptions ) ;
var map3 = new google.maps.Map( canvas3, mapOptions ) ;