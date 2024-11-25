ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:27700").setExtent([476167.191471, 357831.081085, 479616.558191, 360695.355667]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_BTROWSroutes_1 = new ol.format.GeoJSON();
var features_BTROWSroutes_1 = format_BTROWSroutes_1.readFeatures(json_BTROWSroutes_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:27700'});
var jsonSource_BTROWSroutes_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BTROWSroutes_1.addFeatures(features_BTROWSroutes_1);
var lyr_BTROWSroutes_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BTROWSroutes_1, 
                style: style_BTROWSroutes_1,
                popuplayertitle: "BT ROWS — routes",
                interactive: false,
                title: '<img src="styles/legend/BTROWSroutes_1.png" /> BT ROWS — routes'
            });
var format_BTROWStracks_2 = new ol.format.GeoJSON();
var features_BTROWStracks_2 = format_BTROWStracks_2.readFeatures(json_BTROWStracks_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:27700'});
var jsonSource_BTROWStracks_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BTROWStracks_2.addFeatures(features_BTROWStracks_2);
var lyr_BTROWStracks_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BTROWStracks_2, 
                style: style_BTROWStracks_2,
                popuplayertitle: "BT ROWS — tracks",
                interactive: false,
                title: '<img src="styles/legend/BTROWStracks_2.png" /> BT ROWS — tracks'
            });
var group_MVROWs = new ol.layer.Group({
                                layers: [lyr_BTROWSroutes_1,lyr_BTROWStracks_2,],
                                fold: "open",
                                title: "MV ROWs"});
var group_BASEMAPS = new ol.layer.Group({
                                layers: [lyr_OSMStandard_0,],
                                fold: "open",
                                title: "BASEMAPS"});

lyr_OSMStandard_0.setVisible(true);lyr_BTROWSroutes_1.setVisible(true);lyr_BTROWStracks_2.setVisible(true);
var layersList = [group_BASEMAPS,group_MVROWs];
lyr_BTROWSroutes_1.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_BTROWStracks_2.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_BTROWSroutes_1.set('fieldImages', {'name': '', 'cmt': '', 'desc': '', 'src': '', 'link1_href': '', 'link1_text': '', 'link1_type': '', 'link2_href': '', 'link2_text': '', 'link2_type': '', 'number': '', 'type': '', });
lyr_BTROWStracks_2.set('fieldImages', {'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'Range', 'type': 'TextEdit', });
lyr_BTROWSroutes_1.set('fieldLabels', {'name': 'no label', 'cmt': 'header label - visible with data', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', });
lyr_BTROWStracks_2.set('fieldLabels', {'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', });
lyr_BTROWStracks_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});