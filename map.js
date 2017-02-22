// キャンパスの要素を取得する
var canvas1 = document.getElementById( 'map-canvas-1' ) ;
var canvas2 = document.getElementById( 'map-canvas-2' ) ;
var canvas3 = document.getElementById( 'map-canvas-3' ) ;

// 中心の位置座標を指定する
var latlng = new google.maps.LatLng( 40.5084391 , 141.486009,17 );

// 地図のオプションを設定する
var mapOptions = {
	zoom: 15 ,			// ズーム値
	center: latlng ,	// 中心座標 [latlng]
};

// [canvas]に、[mapOptions]の内容の、地図のインスタンス([map])を作成する
var map1 = new google.maps.Map( canvas1, mapOptions ) ;
var map2 = new google.maps.Map( canvas2, mapOptions ) ;
var map3 = new google.maps.Map( canvas3, mapOptions ) ;