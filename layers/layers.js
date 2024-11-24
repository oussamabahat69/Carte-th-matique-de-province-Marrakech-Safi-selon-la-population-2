var wms_layers = [];


        var lyr_ESRIShadedRelief_0 = new ol.layer.Tile({
            'title': 'ESRI Shaded Relief',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Shaded_Relief/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_Province_Marrakech_Safi_1 = new ol.format.GeoJSON();
var features_Province_Marrakech_Safi_1 = format_Province_Marrakech_Safi_1.readFeatures(json_Province_Marrakech_Safi_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Province_Marrakech_Safi_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Province_Marrakech_Safi_1.addFeatures(features_Province_Marrakech_Safi_1);
var lyr_Province_Marrakech_Safi_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Province_Marrakech_Safi_1, 
                style: style_Province_Marrakech_Safi_1,
                popuplayertitle: "Province_Marrakech_Safi",
                interactive: true,
    title: 'Province_Marrakech_Safi<br />\
    <img src="styles/legend/Province_Marrakech_Safi_1_0.png" />  YOUSSOUFIA 246098<br />\
    <img src="styles/legend/Province_Marrakech_Safi_1_1.png" />  REHAMNA 345772<br />\
    <img src="styles/legend/Province_Marrakech_Safi_1_2.png" /> CHICHAOUA 378932<br />\
    <img src="styles/legend/Province_Marrakech_Safi_1_3.png" /> ESSAOUIRA 425449<br />\
    <img src="styles/legend/Province_Marrakech_Safi_1_4.png" /> EL KELAA DES SRAGHNA 560075<br />\
    <img src="styles/legend/Province_Marrakech_Safi_1_5.png" /> AL HAOUZ 642171<br />\
    <img src="styles/legend/Province_Marrakech_Safi_1_6.png" /> SAFI 719299<br />\
    <img src="styles/legend/Province_Marrakech_Safi_1_7.png" /> MARRAKECH 1560704<br />'
        });
var format_Limite_Maroc_2 = new ol.format.GeoJSON();
var features_Limite_Maroc_2 = format_Limite_Maroc_2.readFeatures(json_Limite_Maroc_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Limite_Maroc_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Limite_Maroc_2.addFeatures(features_Limite_Maroc_2);
var lyr_Limite_Maroc_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Limite_Maroc_2, 
                style: style_Limite_Maroc_2,
                popuplayertitle: "Limite_Maroc",
                interactive: true,
                title: '<img src="styles/legend/Limite_Maroc_2.png" /> Limite_Maroc'
            });
var format_Chef_Lieu_3 = new ol.format.GeoJSON();
var features_Chef_Lieu_3 = format_Chef_Lieu_3.readFeatures(json_Chef_Lieu_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Chef_Lieu_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Chef_Lieu_3.addFeatures(features_Chef_Lieu_3);
var lyr_Chef_Lieu_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Chef_Lieu_3, 
                style: style_Chef_Lieu_3,
                popuplayertitle: "Chef_Lieu",
                interactive: true,
                title: 'Chef_Lieu'
            });

lyr_ESRIShadedRelief_0.setVisible(true);lyr_Province_Marrakech_Safi_1.setVisible(true);lyr_Limite_Maroc_2.setVisible(true);lyr_Chef_Lieu_3.setVisible(true);
var layersList = [lyr_ESRIShadedRelief_0,lyr_Province_Marrakech_Safi_1,lyr_Limite_Maroc_2,lyr_Chef_Lieu_3];
lyr_Province_Marrakech_Safi_1.set('fieldAliases', {'fid': 'fid', 'Code_Provi': 'Code_Provi', 'Nom_Provin': 'Nom_Provin', 'Data_Devoir_Carte_Thematique — Data_provinces_Code_Provi': 'Data_Devoir_Carte_Thematique — Data_provinces_Code_Provi', 'Data_Devoir_Carte_Thematique — Data_provinces_Nom_Provin': 'Data_Devoir_Carte_Thematique — Data_provinces_Nom_Provin', 'Data_Devoir_Carte_Thematique — Data_provinces_Area': 'Data_Devoir_Carte_Thematique — Data_provinces_Area', 'Data_Devoir_Carte_Thematique — Data_provinces_Population_2024': 'Data_Devoir_Carte_Thematique — Data_provinces_Population_2024', 'Data_Devoir_Carte_Thematique — Data_provinces_Chef lieu': 'Data_Devoir_Carte_Thematique — Data_provinces_Chef lieu', 'Data_Devoir_Carte_Thematique — Data_provinces_lat': 'Data_Devoir_Carte_Thematique — Data_provinces_lat', 'Data_Devoir_Carte_Thematique — Data_provinces_long': 'Data_Devoir_Carte_Thematique — Data_provinces_long', });
lyr_Limite_Maroc_2.set('fieldAliases', {'fid': 'fid', });
lyr_Chef_Lieu_3.set('fieldAliases', {'fid': 'fid', 'Code_Provi': 'Code_Provi', 'Nom_Provin': 'Nom_Provin', 'Area': 'Area', 'Population_2024': 'Population_2024', 'Chef lieu': 'Chef lieu', 'lat': 'lat', 'long': 'long', 'Data_Devoir_Carte_Thematique — Data_provinces_Code_Provi': 'Data_Devoir_Carte_Thematique — Data_provinces_Code_Provi', 'Data_Devoir_Carte_Thematique — Data_provinces_Nom_Provin': 'Data_Devoir_Carte_Thematique — Data_provinces_Nom_Provin', 'Data_Devoir_Carte_Thematique — Data_provinces_Area': 'Data_Devoir_Carte_Thematique — Data_provinces_Area', 'Data_Devoir_Carte_Thematique — Data_provinces_Population_2024': 'Data_Devoir_Carte_Thematique — Data_provinces_Population_2024', 'Data_Devoir_Carte_Thematique — Data_provinces_Chef lieu': 'Data_Devoir_Carte_Thematique — Data_provinces_Chef lieu', 'Data_Devoir_Carte_Thematique — Data_provinces_lat': 'Data_Devoir_Carte_Thematique — Data_provinces_lat', 'Data_Devoir_Carte_Thematique — Data_provinces_long': 'Data_Devoir_Carte_Thematique — Data_provinces_long', 'Province_Marrakech_Safi_Code_Provi': 'Province_Marrakech_Safi_Code_Provi', 'Province_Marrakech_Safi_Nom_Provin': 'Province_Marrakech_Safi_Nom_Provin', 'Province_Marrakech_Safi_Data_Devoir_Carte_Thematique — Data_provinces_Code_Provi': 'Province_Marrakech_Safi_Data_Devoir_Carte_Thematique — Data_provinces_Code_Provi', 'Province_Marrakech_Safi_Data_Devoir_Carte_Thematique — Data_provinces_Nom_Provin': 'Province_Marrakech_Safi_Data_Devoir_Carte_Thematique — Data_provinces_Nom_Provin', 'Province_Marrakech_Safi_Data_Devoir_Carte_Thematique — Data_provinces_Area': 'Province_Marrakech_Safi_Data_Devoir_Carte_Thematique — Data_provinces_Area', 'Province_Marrakech_Safi_Data_Devoir_Carte_Thematique — Data_provinces_Population_2024': 'Province_Marrakech_Safi_Data_Devoir_Carte_Thematique — Data_provinces_Population_2024', 'Province_Marrakech_Safi_Data_Devoir_Carte_Thematique — Data_provinces_Chef lieu': 'Province_Marrakech_Safi_Data_Devoir_Carte_Thematique — Data_provinces_Chef lieu', 'Province_Marrakech_Safi_Data_Devoir_Carte_Thematique — Data_provinces_lat': 'Province_Marrakech_Safi_Data_Devoir_Carte_Thematique — Data_provinces_lat', 'Province_Marrakech_Safi_Data_Devoir_Carte_Thematique — Data_provinces_long': 'Province_Marrakech_Safi_Data_Devoir_Carte_Thematique — Data_provinces_long', 'auxiliary_storage_labeling_positionx': 'auxiliary_storage_labeling_positionx', 'auxiliary_storage_labeling_positiony': 'auxiliary_storage_labeling_positiony', });
lyr_Province_Marrakech_Safi_1.set('fieldImages', {'fid': 'TextEdit', 'Code_Provi': 'TextEdit', 'Nom_Provin': 'TextEdit', 'Data_Devoir_Carte_Thematique — Data_provinces_Code_Provi': 'TextEdit', 'Data_Devoir_Carte_Thematique — Data_provinces_Nom_Provin': 'TextEdit', 'Data_Devoir_Carte_Thematique — Data_provinces_Area': 'TextEdit', 'Data_Devoir_Carte_Thematique — Data_provinces_Population_2024': 'Range', 'Data_Devoir_Carte_Thematique — Data_provinces_Chef lieu': 'TextEdit', 'Data_Devoir_Carte_Thematique — Data_provinces_lat': 'TextEdit', 'Data_Devoir_Carte_Thematique — Data_provinces_long': 'TextEdit', });
lyr_Limite_Maroc_2.set('fieldImages', {'fid': 'TextEdit', });
lyr_Chef_Lieu_3.set('fieldImages', {'fid': 'Hidden', 'Code_Provi': 'Hidden', 'Nom_Provin': 'TextEdit', 'Area': 'TextEdit', 'Population_2024': 'Range', 'Chef lieu': 'TextEdit', 'lat': 'Hidden', 'long': 'Hidden', 'Data_Devoir_Carte_Thematique — Data_provinces_Code_Provi': 'Hidden', 'Data_Devoir_Carte_Thematique — Data_provinces_Nom_Provin': 'Hidden', 'Data_Devoir_Carte_Thematique — Data_provinces_Area': 'Hidden', 'Data_Devoir_Carte_Thematique — Data_provinces_Population_2024': 'Hidden', 'Data_Devoir_Carte_Thematique — Data_provinces_Chef lieu': 'Hidden', 'Data_Devoir_Carte_Thematique — Data_provinces_lat': 'Hidden', 'Data_Devoir_Carte_Thematique — Data_provinces_long': 'Hidden', 'Province_Marrakech_Safi_Code_Provi': 'Hidden', 'Province_Marrakech_Safi_Nom_Provin': 'Hidden', 'Province_Marrakech_Safi_Data_Devoir_Carte_Thematique — Data_provinces_Code_Provi': 'Hidden', 'Province_Marrakech_Safi_Data_Devoir_Carte_Thematique — Data_provinces_Nom_Provin': 'Hidden', 'Province_Marrakech_Safi_Data_Devoir_Carte_Thematique — Data_provinces_Area': 'Hidden', 'Province_Marrakech_Safi_Data_Devoir_Carte_Thematique — Data_provinces_Population_2024': 'Hidden', 'Province_Marrakech_Safi_Data_Devoir_Carte_Thematique — Data_provinces_Chef lieu': 'Hidden', 'Province_Marrakech_Safi_Data_Devoir_Carte_Thematique — Data_provinces_lat': 'Hidden', 'Province_Marrakech_Safi_Data_Devoir_Carte_Thematique — Data_provinces_long': 'Hidden', 'auxiliary_storage_labeling_positionx': 'Hidden', 'auxiliary_storage_labeling_positiony': 'Hidden', });
lyr_Province_Marrakech_Safi_1.set('fieldLabels', {'fid': 'no label', 'Code_Provi': 'no label', 'Nom_Provin': 'no label', 'Data_Devoir_Carte_Thematique — Data_provinces_Code_Provi': 'no label', 'Data_Devoir_Carte_Thematique — Data_provinces_Nom_Provin': 'no label', 'Data_Devoir_Carte_Thematique — Data_provinces_Area': 'no label', 'Data_Devoir_Carte_Thematique — Data_provinces_Population_2024': 'no label', 'Data_Devoir_Carte_Thematique — Data_provinces_Chef lieu': 'no label', 'Data_Devoir_Carte_Thematique — Data_provinces_lat': 'no label', 'Data_Devoir_Carte_Thematique — Data_provinces_long': 'no label', });
lyr_Limite_Maroc_2.set('fieldLabels', {'fid': 'no label', });
lyr_Chef_Lieu_3.set('fieldLabels', {'Nom_Provin': 'inline label - always visible', 'Area': 'inline label - always visible', 'Population_2024': 'inline label - always visible', 'Chef lieu': 'inline label - always visible', });
lyr_Chef_Lieu_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});