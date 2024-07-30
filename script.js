(function(){
    var script = {
 "definitions": [{
 "items": [
  {
   "media": "this.panorama_5B054C87_50DC_A0F6_41CE_08F5D16D4DC9",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 0, 1)",
   "camera": "this.panorama_5B054C87_50DC_A0F6_41CE_08F5D16D4DC9_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_4398A866_50FB_E036_41C8_D582FD5C122B",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 1, 2)",
   "camera": "this.panorama_4398A866_50FB_E036_41C8_D582FD5C122B_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_448AFDC9_50DF_E07A_41A0_13D7A0EB7F22",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 2, 3)",
   "camera": "this.panorama_448AFDC9_50DF_E07A_41A0_13D7A0EB7F22_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 3, 4)",
   "media": "this.album_45E3F522_5127_A02E_41CD_E6BEA4899F91",
   "class": "PhotoAlbumPlayListItem",
   "player": "this.MainViewerPhotoAlbumPlayer"
  },
  {
   "media": "this.video_A314BCF5_B7F0_5EF3_41DC_080D9AC7EDC7",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 4, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 4)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 4, 5)",
   "player": "this.MainViewerVideoPlayer",
   "class": "VideoPlayListItem"
  },
  {
   "media": "this.panorama_A4977137_B733_A770_41D6_6AA7CE3A2E94",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 5, 6)",
   "camera": "this.panorama_A4977137_B733_A770_41D6_6AA7CE3A2E94_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_A43476D2_B6D0_ED31_41DB_220FD98D91D9",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 6, 0)",
   "camera": "this.panorama_A43476D2_B6D0_ED31_41DB_220FD98D91D9_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  }
 ],
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "class": "PlayList"
},
{
 "items": [
  {
   "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
   "media": "this.map_A5A9006F_B730_65EF_41DF_C9C092F7EFD0",
   "class": "MapPlayListItem",
   "player": "this.MapViewerMapPlayer"
  }
 ],
 "id": "playList_14FD3590_0406_0F63_4148_250E38AA3440",
 "class": "PlayList"
},
{
 "viewerArea": "this.MainViewer",
 "buttonCardboardView": [
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
  "this.IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270"
 ],
 "buttonToggleHotspots": "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "gyroscopeVerticalDraggingEnabled": true,
 "touchControlMode": "drag_rotation",
 "id": "MainViewerPanoramaPlayer",
 "class": "PanoramaPlayer",
 "displayPlaybackBar": true,
 "buttonToggleGyroscope": "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "mouseControlMode": "drag_acceleration"
},
{
 "id": "ImageResource_AD6F3D61_B6F0_5F10_41E4_9F90E79F90E2",
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_A291E6FD_B6F0_AAF0_41AA_2E56280DCD2F_0_0.jpg",
   "width": 862,
   "class": "ImageResourceLevel",
   "height": 1080
  },
  {
   "url": "media/popup_A291E6FD_B6F0_AAF0_41AA_2E56280DCD2F_0_1.jpg",
   "width": 817,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_A291E6FD_B6F0_AAF0_41AA_2E56280DCD2F_0_2.jpg",
   "width": 408,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ]
},
{
 "id": "ImageResource_A51008E5_B7F0_6510_41BF_2F73EDF56B16",
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_A51018E5_B7F0_6510_41D1_A3DD998C75E4_0_0.jpg",
   "width": 1600,
   "class": "ImageResourceLevel",
   "height": 1280
  },
  {
   "url": "media/popup_A51018E5_B7F0_6510_41D1_A3DD998C75E4_0_1.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 819
  },
  {
   "url": "media/popup_A51018E5_B7F0_6510_41D1_A3DD998C75E4_0_2.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 409
  }
 ]
},
{
 "items": [
  {
   "media": "this.panorama_5B054C87_50DC_A0F6_41CE_08F5D16D4DC9",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "camera": "this.panorama_5B054C87_50DC_A0F6_41CE_08F5D16D4DC9_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_4398A866_50FB_E036_41C8_D582FD5C122B",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "camera": "this.panorama_4398A866_50FB_E036_41C8_D582FD5C122B_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_448AFDC9_50DF_E07A_41A0_13D7A0EB7F22",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "camera": "this.panorama_448AFDC9_50DF_E07A_41A0_13D7A0EB7F22_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "media": "this.album_45E3F522_5127_A02E_41CD_E6BEA4899F91",
   "class": "PhotoAlbumPlayListItem",
   "player": "this.MainViewerPhotoAlbumPlayer"
  },
  {
   "media": "this.video_A314BCF5_B7F0_5EF3_41DC_080D9AC7EDC7",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.mainPlayList, 4, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 4)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "player": "this.MainViewerVideoPlayer",
   "class": "VideoPlayListItem"
  },
  {
   "media": "this.panorama_A4977137_B733_A770_41D6_6AA7CE3A2E94",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "camera": "this.panorama_A4977137_B733_A770_41D6_6AA7CE3A2E94_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_A43476D2_B6D0_ED31_41DB_220FD98D91D9",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 0)",
   "camera": "this.panorama_A43476D2_B6D0_ED31_41DB_220FD98D91D9_camera",
   "end": "this.trigger('tourEnded')",
   "class": "PanoramaPlayListItem"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "id": "ImageResource_AD61CD63_B6F0_5F10_41C6_6C5A2D40A2E5",
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_A192B87E_B6F1_A5F1_41E6_8A3483201FC6_0_0.jpg",
   "width": 2347,
   "class": "ImageResourceLevel",
   "height": 1080
  },
  {
   "url": "media/popup_A192B87E_B6F1_A5F1_41E6_8A3483201FC6_0_1.jpg",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 942
  },
  {
   "url": "media/popup_A192B87E_B6F1_A5F1_41E6_8A3483201FC6_0_2.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 471
  },
  {
   "url": "media/popup_A192B87E_B6F1_A5F1_41E6_8A3483201FC6_0_3.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 235
  }
 ]
},
{
 "rotationY": 0,
 "rotationX": 0,
 "yaw": -0.01,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 127.82,
 "hideDuration": 500,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "id": "popup_A192B87E_B6F1_A5F1_41E6_8A3483201FC6",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_A192B87E_B6F1_A5F1_41E6_8A3483201FC6_0_2.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 471
   }
  ]
 },
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay",
 "pitch": -69.2
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 93.63,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_151E45A3_0406_0EA5_4183_087340FD9DCB",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "viewerArea": "this.MapViewer",
 "id": "MapViewerMapPlayer",
 "class": "MapPlayer",
 "movementMode": "constrained"
},
{
 "rotationY": 0,
 "rotationX": 0,
 "yaw": -155.56,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 8.23,
 "hideDuration": 500,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "id": "popup_A291E6FD_B6F0_AAF0_41AA_2E56280DCD2F",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_A291E6FD_B6F0_AAF0_41AA_2E56280DCD2F_0_1.jpg",
    "width": 817,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay",
 "pitch": -39.97
},
{
 "duration": 5000,
 "label": "003",
 "id": "photo_53DC78B1_5F90_FD87_41CF_3B10ADC4E36F",
 "thumbnailUrl": "media/photo_53DC78B1_5F90_FD87_41CF_3B10ADC4E36F_t.jpg",
 "width": 4000,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/photo_53DC78B1_5F90_FD87_41CF_3B10ADC4E36F.jpg"
   }
  ]
 },
 "class": "Photo",
 "height": 2252
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 71.83,
  "class": "PanoramaCameraPosition",
  "pitch": -34.04
 },
 "id": "panorama_4398A866_50FB_E036_41C8_D582FD5C122B_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "label": "ACCESO BAOLAH",
 "scaleMode": "fit_inside",
 "thumbnailUrl": "media/video_737DD1D7_60B0_8F8B_41C3_B05BD968D9AB_t.jpg",
 "width": 1920,
 "loop": false,
 "id": "video_737DD1D7_60B0_8F8B_41C3_B05BD968D9AB",
 "class": "Video",
 "height": 1080,
 "video": {
  "width": 1280,
  "class": "VideoResource",
  "height": 720,
  "mp4Url": "media/video_737DD1D7_60B0_8F8B_41C3_B05BD968D9AB.mp4"
 }
},
{
 "items": [
  {
   "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
   "media": "this.map_A5A9006F_B730_65EF_41DF_C9C092F7EFD0",
   "class": "MapPlayListItem",
   "player": "this.MapViewerMapPlayer"
  }
 ],
 "id": "playList_14FDE590_0406_0F63_4164_88B9E3158548",
 "class": "PlayList"
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -20.72,
   "yaw": -86.37,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_5B054C87_50DC_A0F6_41CE_08F5D16D4DC9"
  }
 ],
 "hfovMin": "120%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_A4977137_B733_A770_41D6_6AA7CE3A2E94",
 "thumbnailUrl": "media/panorama_A4977137_B733_A770_41D6_6AA7CE3A2E94_t.jpg",
 "label": "15072024 baolah",
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A4977137_B733_A770_41D6_6AA7CE3A2E94_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A4977137_B733_A770_41D6_6AA7CE3A2E94_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A4977137_B733_A770_41D6_6AA7CE3A2E94_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A4977137_B733_A770_41D6_6AA7CE3A2E94_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A4977137_B733_A770_41D6_6AA7CE3A2E94_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A4977137_B733_A770_41D6_6AA7CE3A2E94_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A4977137_B733_A770_41D6_6AA7CE3A2E94_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A4977137_B733_A770_41D6_6AA7CE3A2E94_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A4977137_B733_A770_41D6_6AA7CE3A2E94_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A4977137_B733_A770_41D6_6AA7CE3A2E94_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A4977137_B733_A770_41D6_6AA7CE3A2E94_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A4977137_B733_A770_41D6_6AA7CE3A2E94_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A4977137_B733_A770_41D6_6AA7CE3A2E94_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A4977137_B733_A770_41D6_6AA7CE3A2E94_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A4977137_B733_A770_41D6_6AA7CE3A2E94_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A4977137_B733_A770_41D6_6AA7CE3A2E94_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A4977137_B733_A770_41D6_6AA7CE3A2E94_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A4977137_B733_A770_41D6_6AA7CE3A2E94_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A4977137_B733_A770_41D6_6AA7CE3A2E94_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A4977137_B733_A770_41D6_6AA7CE3A2E94_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A4977137_B733_A770_41D6_6AA7CE3A2E94_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A4977137_B733_A770_41D6_6AA7CE3A2E94_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A4977137_B733_A770_41D6_6AA7CE3A2E94_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A4977137_B733_A770_41D6_6AA7CE3A2E94_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_A4977137_B733_A770_41D6_6AA7CE3A2E94_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_A4B34D80_B737_BF11_41E1_EBA187A55FBE"
 ]
},
{
 "duration": 5000,
 "label": "004",
 "id": "photo_53D74AE6_5F90_FD8D_41D4_0879054D47E5",
 "thumbnailUrl": "media/photo_53D74AE6_5F90_FD8D_41D4_0879054D47E5_t.jpg",
 "width": 4000,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/photo_53D74AE6_5F90_FD8D_41D4_0879054D47E5.jpg"
   }
  ]
 },
 "class": "Photo",
 "height": 2252
},
{
 "fieldOfViewOverlayInsideOpacity": 0.4,
 "maximumZoomFactor": 1.2,
 "initialZoomFactor": 1,
 "id": "map_A5A9006F_B730_65EF_41DF_C9C092F7EFD0",
 "thumbnailUrl": "media/map_A5A9006F_B730_65EF_41DF_C9C092F7EFD0_t.jpg",
 "width": 5907,
 "fieldOfViewOverlayOutsideColor": "#000000",
 "scaleMode": "fit_inside",
 "fieldOfViewOverlayInsideColor": "#FFFFFF",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/map_A5A9006F_B730_65EF_41DF_C9C092F7EFD0.jpeg",
    "width": 3200,
    "class": "ImageResourceLevel",
    "height": 1260
   },
   {
    "url": "media/map_A5A9006F_B730_65EF_41DF_C9C092F7EFD0_lq.jpeg",
    "width": 407,
    "class": "ImageResourceLevel",
    "height": 161,
    "tags": "preload"
   }
  ]
 },
 "fieldOfViewOverlayRadiusScale": 0.3,
 "label": "plano urbanismol",
 "minimumZoomFactor": 0.5,
 "class": "Map",
 "height": 2327,
 "fieldOfViewOverlayOutsideOpacity": 0
},
{
 "label": "Album de Fotos General lotes",
 "thumbnailUrl": "media/album_45E3F522_5127_A02E_41CD_E6BEA4899F91_t.png",
 "playList": "this.album_45E3F522_5127_A02E_41CD_E6BEA4899F91_AlbumPlayList",
 "id": "album_45E3F522_5127_A02E_41CD_E6BEA4899F91",
 "class": "PhotoAlbum"
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_448AFDC9_50DF_E07A_41A0_13D7A0EB7F22"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_4398A866_50FB_E036_41C8_D582FD5C122B",
 "thumbnailUrl": "media/panorama_4398A866_50FB_E036_41C8_D582FD5C122B_t.jpg",
 "label": "BAOLAH03",
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4398A866_50FB_E036_41C8_D582FD5C122B_0/f/0/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4398A866_50FB_E036_41C8_D582FD5C122B_0/f/1/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4398A866_50FB_E036_41C8_D582FD5C122B_0/u/0/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4398A866_50FB_E036_41C8_D582FD5C122B_0/u/1/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4398A866_50FB_E036_41C8_D582FD5C122B_0/r/0/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4398A866_50FB_E036_41C8_D582FD5C122B_0/r/1/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4398A866_50FB_E036_41C8_D582FD5C122B_0/b/0/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4398A866_50FB_E036_41C8_D582FD5C122B_0/b/1/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4398A866_50FB_E036_41C8_D582FD5C122B_0/d/0/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4398A866_50FB_E036_41C8_D582FD5C122B_0/d/1/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4398A866_50FB_E036_41C8_D582FD5C122B_0/l/0/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4398A866_50FB_E036_41C8_D582FD5C122B_0/l/1/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_4398A866_50FB_E036_41C8_D582FD5C122B_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_449BB1AD_50E4_A03A_41CB_163BC49719E4",
  "this.overlay_44790468_50DD_A03A_41A4_E2F5304886EF"
 ]
},
{
 "rotationY": 0,
 "rotationX": 0,
 "yaw": -156.65,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 5.44,
 "hideDuration": 500,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "id": "popup_A1AABB97_B6FF_BB3F_41E3_6DB904E69208",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_A1AABB97_B6FF_BB3F_41E3_6DB904E69208_0_1.jpg",
    "width": 820,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay",
 "pitch": -28.6
},
{
 "duration": 5000,
 "label": "002",
 "id": "photo_5196274E_5F90_F49D_4182_CB8955F4DE02",
 "thumbnailUrl": "media/photo_5196274E_5F90_F49D_4182_CB8955F4DE02_t.jpg",
 "width": 4000,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/photo_5196274E_5F90_F49D_4182_CB8955F4DE02.jpg"
   }
  ]
 },
 "class": "Photo",
 "height": 2252
},
{
 "id": "ImageResource_AD6C7D61_B6F0_5F10_41E0_A0EC6094861B",
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_A1AABB97_B6FF_BB3F_41E3_6DB904E69208_0_0.jpg",
   "width": 865,
   "class": "ImageResourceLevel",
   "height": 1080
  },
  {
   "url": "media/popup_A1AABB97_B6FF_BB3F_41E3_6DB904E69208_0_1.jpg",
   "width": 820,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_A1AABB97_B6FF_BB3F_41E3_6DB904E69208_0_2.jpg",
   "width": 410,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ]
},
{
 "rotationY": 0,
 "rotationX": 0,
 "yaw": -150.03,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 11.37,
 "hideDuration": 500,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "id": "popup_A249D61F_B6F7_ED2F_41E0_528022BD3EA5",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_A249D61F_B6F7_ED2F_41E0_528022BD3EA5_0_1.jpg",
    "width": 846,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay",
 "pitch": -59.77
},
{
 "hfovMax": 130,
 "hfovMin": "120%",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A43476D2_B6D0_ED31_41DB_220FD98D91D9_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A43476D2_B6D0_ED31_41DB_220FD98D91D9_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A43476D2_B6D0_ED31_41DB_220FD98D91D9_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A43476D2_B6D0_ED31_41DB_220FD98D91D9_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A43476D2_B6D0_ED31_41DB_220FD98D91D9_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A43476D2_B6D0_ED31_41DB_220FD98D91D9_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A43476D2_B6D0_ED31_41DB_220FD98D91D9_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A43476D2_B6D0_ED31_41DB_220FD98D91D9_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A43476D2_B6D0_ED31_41DB_220FD98D91D9_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A43476D2_B6D0_ED31_41DB_220FD98D91D9_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A43476D2_B6D0_ED31_41DB_220FD98D91D9_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A43476D2_B6D0_ED31_41DB_220FD98D91D9_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A43476D2_B6D0_ED31_41DB_220FD98D91D9_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A43476D2_B6D0_ED31_41DB_220FD98D91D9_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A43476D2_B6D0_ED31_41DB_220FD98D91D9_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A43476D2_B6D0_ED31_41DB_220FD98D91D9_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A43476D2_B6D0_ED31_41DB_220FD98D91D9_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A43476D2_B6D0_ED31_41DB_220FD98D91D9_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A43476D2_B6D0_ED31_41DB_220FD98D91D9_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A43476D2_B6D0_ED31_41DB_220FD98D91D9_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A43476D2_B6D0_ED31_41DB_220FD98D91D9_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A43476D2_B6D0_ED31_41DB_220FD98D91D9_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A43476D2_B6D0_ED31_41DB_220FD98D91D9_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A43476D2_B6D0_ED31_41DB_220FD98D91D9_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_A43476D2_B6D0_ED31_41DB_220FD98D91D9_t.jpg"
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "label": "BAOLAHVR_8 - Panorama",
 "id": "panorama_A43476D2_B6D0_ED31_41DB_220FD98D91D9",
 "thumbnailUrl": "media/panorama_A43476D2_B6D0_ED31_41DB_220FD98D91D9_t.jpg",
 "partial": false,
 "pitch": 0,
 "class": "Panorama"
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5B054C87_50DC_A0F6_41CE_08F5D16D4DC9"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_448AFDC9_50DF_E07A_41A0_13D7A0EB7F22",
 "thumbnailUrl": "media/panorama_448AFDC9_50DF_E07A_41A0_13D7A0EB7F22_t.jpg",
 "label": "BAOLAH10",
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_448AFDC9_50DF_E07A_41A0_13D7A0EB7F22_0/f/0/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_448AFDC9_50DF_E07A_41A0_13D7A0EB7F22_0/f/1/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_448AFDC9_50DF_E07A_41A0_13D7A0EB7F22_0/u/0/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_448AFDC9_50DF_E07A_41A0_13D7A0EB7F22_0/u/1/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_448AFDC9_50DF_E07A_41A0_13D7A0EB7F22_0/r/0/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_448AFDC9_50DF_E07A_41A0_13D7A0EB7F22_0/r/1/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_448AFDC9_50DF_E07A_41A0_13D7A0EB7F22_0/b/0/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_448AFDC9_50DF_E07A_41A0_13D7A0EB7F22_0/b/1/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_448AFDC9_50DF_E07A_41A0_13D7A0EB7F22_0/d/0/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_448AFDC9_50DF_E07A_41A0_13D7A0EB7F22_0/d/1/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_448AFDC9_50DF_E07A_41A0_13D7A0EB7F22_0/l/0/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_448AFDC9_50DF_E07A_41A0_13D7A0EB7F22_0/l/1/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_448AFDC9_50DF_E07A_41A0_13D7A0EB7F22_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_4778E1D8_5124_A01A_41CA_AADC309ECF03",
  "this.overlay_42D57354_5127_606A_41D3_72DA07852110"
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_448AFDC9_50DF_E07A_41A0_13D7A0EB7F22_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "items": [
  {
   "media": "this.video_737DD1D7_60B0_8F8B_41C3_B05BD968D9AB",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_14FE658F_0406_0F7E_4186_7424BEF02B19, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_14FE658F_0406_0F7E_4186_7424BEF02B19, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
   "player": "this.MainViewerVideoPlayer",
   "class": "VideoPlayListItem"
  }
 ],
 "id": "playList_14FE658F_0406_0F7E_4186_7424BEF02B19",
 "class": "PlayList"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_A4977137_B733_A770_41D6_6AA7CE3A2E94_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "viewerArea": "this.MainViewer",
 "id": "MainViewerPhotoAlbumPlayer",
 "class": "PhotoAlbumPlayer",
 "buttonNext": [
  "this.IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4",
  "this.IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14",
  "this.IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510"
 ],
 "buttonPrevious": [
  "this.IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD",
  "this.IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D",
  "this.IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482"
 ]
},
{
 "label": "001",
 "scaleMode": "fit_inside",
 "thumbnailUrl": "media/video_A314BCF5_B7F0_5EF3_41DC_080D9AC7EDC7_t.jpg",
 "width": 1920,
 "loop": false,
 "id": "video_A314BCF5_B7F0_5EF3_41DC_080D9AC7EDC7",
 "class": "Video",
 "height": 1080,
 "video": {
  "width": 1920,
  "class": "VideoResource",
  "height": 1080,
  "mp4Url": "media/video_A314BCF5_B7F0_5EF3_41DC_080D9AC7EDC7.mp4"
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_4398A866_50FB_E036_41C8_D582FD5C122B"
  },
  {
   "backwardYaw": -86.37,
   "yaw": -20.72,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_A4977137_B733_A770_41D6_6AA7CE3A2E94"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A43476D2_B6D0_ED31_41DB_220FD98D91D9"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_5B054C87_50DC_A0F6_41CE_08F5D16D4DC9",
 "thumbnailUrl": "media/panorama_5B054C87_50DC_A0F6_41CE_08F5D16D4DC9_t.jpg",
 "label": "BAOLAH00",
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5B054C87_50DC_A0F6_41CE_08F5D16D4DC9_0/f/0/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5B054C87_50DC_A0F6_41CE_08F5D16D4DC9_0/f/1/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5B054C87_50DC_A0F6_41CE_08F5D16D4DC9_0/l/0/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5B054C87_50DC_A0F6_41CE_08F5D16D4DC9_0/l/1/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5B054C87_50DC_A0F6_41CE_08F5D16D4DC9_0/u/0/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5B054C87_50DC_A0F6_41CE_08F5D16D4DC9_0/u/1/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5B054C87_50DC_A0F6_41CE_08F5D16D4DC9_0/b/0/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5B054C87_50DC_A0F6_41CE_08F5D16D4DC9_0/b/1/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5B054C87_50DC_A0F6_41CE_08F5D16D4DC9_0/d/0/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5B054C87_50DC_A0F6_41CE_08F5D16D4DC9_0/d/1/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_5B054C87_50DC_A0F6_41CE_08F5D16D4DC9_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5B054C87_50DC_A0F6_41CE_08F5D16D4DC9_0/r/0/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5B054C87_50DC_A0F6_41CE_08F5D16D4DC9_0/r/1/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_438C9FE9_50E4_E03A_41B6_F9332632CDAA",
  "this.overlay_444F87D9_50E5_601A_41D0_0063FBD9DF7E",
  "this.overlay_737F821E_60B0_8CBD_41D5_444E10924A3E",
  "this.overlay_A50E0B0E_B7F0_5B11_41DA_01EC27C260EE",
  "this.overlay_A5E1190A_B7F0_6711_41D8_DF346F304C97",
  "this.popup_A51018E5_B7F0_6510_41D1_A3DD998C75E4",
  "this.overlay_A499E561_B730_AF10_41DB_37A1ADF6CE16",
  "this.overlay_A4EF62C0_B6D1_A510_41DE_912931193D89",
  "this.overlay_A3009236_B6F0_A571_41E0_F3A02B65841B",
  "this.overlay_A3A8CF5E_B6F3_DB30_41E4_14F127F79399",
  "this.overlay_A30EFBBE_B6F1_DB71_41E1_1F15F49BB50C",
  "this.overlay_A37EC30D_B6F0_6B13_41E4_E442D4048AD5",
  "this.popup_A1AABB97_B6FF_BB3F_41E3_6DB904E69208",
  "this.popup_A291E6FD_B6F0_AAF0_41AA_2E56280DCD2F",
  "this.popup_A192B87E_B6F1_A5F1_41E6_8A3483201FC6",
  "this.popup_A249D61F_B6F7_ED2F_41E0_528022BD3EA5"
 ]
},
{
 "displayOriginPosition": {
  "hfov": 165,
  "stereographicFactor": 1,
  "yaw": -0.6,
  "class": "RotationalCameraDisplayPosition",
  "pitch": -90
 },
 "automaticZoomSpeed": 10,
 "displayMovements": [
  {
   "easing": "linear",
   "class": "TargetRotationalCameraDisplayMovement",
   "duration": 1000
  },
  {
   "targetPitch": -32.65,
   "targetStereographicFactor": 0,
   "easing": "cubic_in_out",
   "class": "TargetRotationalCameraDisplayMovement",
   "duration": 3000
  }
 ],
 "initialPosition": {
  "yaw": -0.6,
  "class": "PanoramaCameraPosition",
  "pitch": -32.65
 },
 "id": "panorama_5B054C87_50DC_A0F6_41CE_08F5D16D4DC9_camera",
 "class": "PanoramaCamera",
 "manualRotationSpeed": 2000
},
{
 "rotationY": 0,
 "rotationX": 0,
 "yaw": -101.24,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 66.21,
 "hideDuration": 500,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "id": "popup_A51018E5_B7F0_6510_41D1_A3DD998C75E4",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_A51018E5_B7F0_6510_41D1_A3DD998C75E4_0_1.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 819
   }
  ]
 },
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay",
 "pitch": -40.5
},
{
 "viewerArea": "this.MainViewer",
 "id": "MainViewerVideoPlayer",
 "class": "VideoPlayer",
 "displayPlaybackBar": true
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 159.28,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_1514B5AD_0406_0EBD_418D_C91C0FCC539C",
 "class": "PanoramaCamera",
 "manualRotationSpeed": 2000,
 "initialSequence": {
  "movements": [
   {
    "targetYaw": -0.6,
    "pitchSpeed": 17.06,
    "path": "shortest",
    "targetPitch": -32.65,
    "yawSpeed": 33.25,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_A43476D2_B6D0_ED31_41DB_220FD98D91D9_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "duration": 5000,
 "label": "001",
 "id": "photo_526135AA_5F90_F79A_41C6_FC11339D1BDB",
 "thumbnailUrl": "media/photo_526135AA_5F90_F79A_41C6_FC11339D1BDB_t.jpg",
 "width": 4000,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/photo_526135AA_5F90_F79A_41C6_FC11339D1BDB.jpg"
   }
  ]
 },
 "class": "Photo",
 "height": 2252
},
{
 "id": "ImageResource_A2F207A3_B6F0_6B10_41E0_0D410F7DA62E",
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_A249D61F_B6F7_ED2F_41E0_528022BD3EA5_0_0.jpg",
   "width": 893,
   "class": "ImageResourceLevel",
   "height": 1080
  },
  {
   "url": "media/popup_A249D61F_B6F7_ED2F_41E0_528022BD3EA5_0_1.jpg",
   "width": 846,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_A249D61F_B6F7_ED2F_41E0_528022BD3EA5_0_2.jpg",
   "width": 423,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ]
},
{
 "playbackBarHeadOpacity": 1,
 "playbackBarBottom": 5,
 "toolTipShadowSpread": 0,
 "progressBorderColor": "#FFFFFF",
 "id": "MainViewer",
 "left": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "minHeight": 50,
 "width": "100%",
 "toolTipOpacity": 0.5,
 "shadow": false,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontSize": 13,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarRight": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "toolTipPaddingBottom": 7,
 "paddingRight": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 6,
 "toolTipShadowColor": "#333333",
 "playbackBarProgressBorderRadius": 0,
 "playbackBarBorderRadius": 0,
 "height": "100%",
 "playbackBarHeadBorderRadius": 0,
 "class": "ViewerArea",
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowOpacity": 0,
 "playbackBarBorderSize": 0,
 "transitionMode": "blending",
 "propagateClick": true,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Georgia",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 55,
 "toolTipBackgroundColor": "#000000",
 "toolTipFontColor": "#FFFFFF",
 "borderSize": 0,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "minWidth": 100,
 "playbackBarOpacity": 1,
 "progressHeight": 6,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "top": 0,
 "paddingLeft": 0,
 "displayTooltipInTouchScreens": true,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingTop": 7,
 "toolTipPaddingLeft": 10,
 "progressBorderRadius": 0,
 "toolTipPaddingRight": 10,
 "toolTipDisplayTime": 600,
 "paddingTop": 0,
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "paddingBottom": 0,
 "playbackBarHeadHeight": 15,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "progressBarBorderColor": "#0066FF",
 "transitionDuration": 500,
 "data": {
  "name": "Main Viewer"
 }
},
{
 "data": {
  "name": "--SETTINGS"
 },
 "children": [
  "this.Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
  "this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE"
 ],
 "layout": "absolute",
 "width": 115.05,
 "scrollBarColor": "#000000",
 "id": "Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "borderSize": 0,
 "right": "0%",
 "minWidth": 1,
 "top": "0%",
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "paddingLeft": 0,
 "verticalAlign": "top",
 "height": 641,
 "paddingTop": 0,
 "class": "Container",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "data": {
  "name": "--MENU"
 },
 "children": [
  "this.Image_1B99DD00_16C4_0505_41B3_51F09727447A",
  "this.Container_1B99BD00_16C4_0505_41A4_A3C2452B0288",
  "this.IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270",
  "this.Image_4C5BE71B_513D_601E_41C6_0DF5B2873020"
 ],
 "layout": "absolute",
 "left": "0%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "id": "Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "left",
 "shadow": false,
 "borderSize": 0,
 "right": "0%",
 "backgroundImageUrl": "skin/Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48.png",
 "minWidth": 1,
 "bottom": 0,
 "contentOpaque": false,
 "paddingRight": 0,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "height": 118,
 "paddingTop": 0,
 "class": "Container",
 "backgroundOpacity": 0.64,
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "visible"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "--INFO photo"
 },
 "children": [
  "this.Container_062A782F_1140_E20B_41AF_B3E5DE341773",
  "this.Container_062A9830_1140_E215_41A7_5F2BBE5C20E4"
 ],
 "layout": "absolute",
 "id": "Container_062AB830_1140_E215_41AF_6C9D65345420",
 "left": "0%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "left",
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "right": "0%",
 "borderSize": 0,
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "bottom": "0.02%",
 "contentOpaque": false,
 "paddingRight": 0,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "top": "0%",
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false)",
 "paddingTop": 0,
 "class": "Container",
 "backgroundOpacity": 0.6,
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "visible": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "--INFO photoalbum"
 },
 "children": [
  "this.Container_23F7B7B7_0C0A_6293_4197_F931EEC6FA48",
  "this.Container_23F097B8_0C0A_629D_4176_D87C90BA32B6"
 ],
 "layout": "absolute",
 "id": "Container_23F0F7B8_0C0A_629D_418A_F171085EFBF8",
 "left": "0%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "left",
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "right": "0%",
 "borderSize": 0,
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "bottom": "0%",
 "contentOpaque": false,
 "paddingRight": 0,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "top": "0%",
 "click": "this.setComponentVisibility(this.Container_23F0F7B8_0C0A_629D_418A_F171085EFBF8, false, 0, null, null, false)",
 "paddingTop": 0,
 "class": "Container",
 "backgroundOpacity": 0.6,
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "visible": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "--PANORAMA LIST"
 },
 "children": [
  "this.Container_39A197B1_0C06_62AF_419A_D15E4DDD2528"
 ],
 "layout": "absolute",
 "id": "Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
 "left": "0%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "left",
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "right": "0%",
 "borderSize": 0,
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "bottom": "0%",
 "contentOpaque": false,
 "paddingRight": 0,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "top": "0%",
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)",
 "paddingTop": 0,
 "class": "Container",
 "backgroundOpacity": 0.6,
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "visible": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "--LOCATION"
 },
 "children": [
  "this.Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
  "this.Container_221B3648_0C06_E5FD_4199_FCE031AE003B"
 ],
 "layout": "absolute",
 "id": "Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
 "left": "0%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "left",
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "right": "0%",
 "borderSize": 0,
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "bottom": "0%",
 "contentOpaque": false,
 "paddingRight": 0,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "top": "0%",
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false)",
 "paddingTop": 0,
 "class": "Container",
 "backgroundOpacity": 0.6,
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "visible": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "--FLOORPLAN"
 },
 "children": [
  "this.Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3"
 ],
 "layout": "absolute",
 "id": "Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
 "left": "0%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "left",
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "right": "0%",
 "borderSize": 0,
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "bottom": "0%",
 "contentOpaque": false,
 "paddingRight": 0,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "top": "0%",
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false)",
 "paddingTop": 0,
 "class": "Container",
 "backgroundOpacity": 0.6,
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "visible": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "--PHOTOALBUM + text"
 },
 "children": [
  "this.Container_28215A13_0D5D_5B97_4198_A7CA735E9E0A"
 ],
 "layout": "absolute",
 "id": "Container_2820BA13_0D5D_5B97_4192_AABC38F6F169",
 "left": "0%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "left",
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "right": "0%",
 "borderSize": 0,
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "bottom": "0%",
 "contentOpaque": false,
 "paddingRight": 0,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "top": "0%",
 "click": "this.setComponentVisibility(this.Container_2820BA13_0D5D_5B97_4192_AABC38F6F169, true, 0, null, null, false)",
 "paddingTop": 0,
 "class": "Container",
 "backgroundOpacity": 0.6,
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "visible": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "--PHOTOALBUM"
 },
 "children": [
  "this.Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536"
 ],
 "layout": "absolute",
 "id": "Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
 "left": "0%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "left",
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "right": "0%",
 "borderSize": 0,
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "bottom": "0%",
 "contentOpaque": false,
 "paddingRight": 0,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "top": "0%",
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false)",
 "paddingTop": 0,
 "class": "Container",
 "backgroundOpacity": 0.6,
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "visible": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "--REALTOR"
 },
 "children": [
  "this.Container_06C5DBA5_1140_A63F_41AD_1D83A33F1255",
  "this.Container_06C43BA5_1140_A63F_41A1_96DC8F4CAD2F"
 ],
 "layout": "absolute",
 "id": "Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC",
 "left": "0%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#04A3E1",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "left",
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "right": "0%",
 "borderSize": 0,
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "bottom": "0%",
 "contentOpaque": false,
 "paddingRight": 0,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "top": "0%",
 "click": "this.setComponentVisibility(this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC, false, 0, null, null, false)",
 "paddingTop": 0,
 "class": "Container",
 "backgroundOpacity": 0.6,
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "visible": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0
 ],
 "id": "veilPopupPanorama",
 "left": 0,
 "showEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 350
 },
 "minHeight": 0,
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "right": 0,
 "borderSize": 0,
 "minWidth": 0,
 "bottom": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "backgroundColor": [
  "#000000"
 ],
 "top": 0,
 "paddingTop": 0,
 "class": "UIComponent",
 "backgroundOpacity": 0.55,
 "borderRadius": 0,
 "paddingBottom": 0,
 "visible": false,
 "propagateClick": false,
 "data": {
  "name": "UIComponent3326"
 }
},
{
 "backgroundColorRatios": [],
 "id": "zoomImagePopupPanorama",
 "left": 0,
 "minHeight": 0,
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "right": 0,
 "borderSize": 0,
 "minWidth": 0,
 "bottom": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "backgroundColor": [],
 "top": 0,
 "paddingTop": 0,
 "class": "ZoomImage",
 "backgroundOpacity": 1,
 "borderRadius": 0,
 "paddingBottom": 0,
 "scaleMode": "custom",
 "visible": false,
 "propagateClick": false,
 "data": {
  "name": "ZoomImage3327"
 }
},
{
 "fontFamily": "Arial",
 "backgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "data": {
  "name": "CloseButton3328"
 },
 "layout": "horizontal",
 "id": "closeButtonPopupPanorama",
 "rollOverIconColor": "#666666",
 "showEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 350
 },
 "horizontalAlign": "center",
 "fontSize": "1.29vmin",
 "minHeight": 0,
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "right": 10,
 "borderSize": 0,
 "fontColor": "#FFFFFF",
 "iconColor": "#000000",
 "minWidth": 0,
 "borderColor": "#000000",
 "top": 10,
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "paddingRight": 5,
 "paddingLeft": 5,
 "iconLineWidth": 5,
 "mode": "push",
 "backgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "label": "",
 "iconHeight": 20,
 "shadowBlurRadius": 6,
 "paddingTop": 5,
 "class": "CloseButton",
 "pressedIconColor": "#888888",
 "backgroundOpacity": 0.3,
 "iconBeforeLabel": true,
 "borderRadius": 0,
 "gap": 5,
 "paddingBottom": 5,
 "textDecoration": "none",
 "visible": false,
 "fontStyle": "normal",
 "shadowSpread": 1,
 "cursor": "hand",
 "propagateClick": false,
 "fontWeight": "normal",
 "iconWidth": 20
},
{
 "width": 58,
 "id": "IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "transparencyActive": true,
 "minHeight": 1,
 "horizontalAlign": "center",
 "shadow": false,
 "borderSize": 0,
 "minWidth": 1,
 "maxWidth": 58,
 "iconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0.png",
 "maxHeight": 58,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "mode": "toggle",
 "height": 58,
 "paddingTop": 0,
 "class": "IconButton",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "pressedIconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0_pressed.png",
 "cursor": "hand",
 "propagateClick": true,
 "data": {
  "name": "IconButton FULLSCREEN"
 }
},
{
 "width": 58,
 "id": "IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "transparencyActive": true,
 "minHeight": 1,
 "horizontalAlign": "center",
 "shadow": false,
 "borderSize": 0,
 "minWidth": 1,
 "maxWidth": 58,
 "iconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D.png",
 "maxHeight": 58,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "mode": "toggle",
 "height": 58,
 "paddingTop": 0,
 "class": "IconButton",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "pressedIconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D_pressed.png",
 "cursor": "hand",
 "propagateClick": true,
 "data": {
  "name": "IconButton MUTE"
 }
},
{
 "width": 58,
 "id": "IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "transparencyActive": true,
 "minHeight": 1,
 "horizontalAlign": "center",
 "shadow": false,
 "borderSize": 0,
 "minWidth": 1,
 "maxWidth": 58,
 "iconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB.png",
 "maxHeight": 58,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "mode": "push",
 "height": 58,
 "paddingTop": 0,
 "class": "IconButton",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB_rollover.png",
 "visible": false,
 "cursor": "hand",
 "propagateClick": true,
 "data": {
  "name": "IconButton VR"
 }
},
{
 "cursor": "hand",
 "id": "IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270",
 "width": 100,
 "transparencyActive": true,
 "minHeight": 1,
 "horizontalAlign": "center",
 "shadow": false,
 "borderSize": 0,
 "right": 31,
 "minWidth": 1,
 "maxWidth": 49,
 "iconURL": "skin/IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270.png",
 "maxHeight": 37,
 "bottom": 21,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "mode": "push",
 "height": 75,
 "paddingTop": 0,
 "class": "IconButton",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270_rollover.png",
 "pressedIconURL": "skin/IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270_pressed.png",
 "propagateClick": true,
 "data": {
  "name": "IconButton VR"
 }
},
{
 "width": 58,
 "id": "IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "transparencyActive": true,
 "minHeight": 1,
 "horizontalAlign": "center",
 "shadow": false,
 "borderSize": 0,
 "minWidth": 1,
 "maxWidth": 58,
 "iconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96.png",
 "maxHeight": 58,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "mode": "toggle",
 "height": 58,
 "paddingTop": 0,
 "class": "IconButton",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "pressedIconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96_pressed.png",
 "cursor": "hand",
 "propagateClick": true,
 "data": {
  "name": "IconButton HS "
 }
},
{
 "width": 58,
 "id": "IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "transparencyActive": true,
 "minHeight": 1,
 "horizontalAlign": "center",
 "shadow": false,
 "borderSize": 0,
 "minWidth": 1,
 "maxWidth": 58,
 "iconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A.png",
 "maxHeight": 58,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "mode": "toggle",
 "height": 58,
 "paddingTop": 0,
 "class": "IconButton",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "pressedIconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A_pressed.png",
 "cursor": "hand",
 "propagateClick": true,
 "data": {
  "name": "IconButton GYRO"
 }
},
{
 "playbackBarHeadOpacity": 1,
 "playbackBarBottom": 0,
 "toolTipShadowSpread": 0,
 "progressBorderColor": "#FFFFFF",
 "id": "MapViewer",
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "minHeight": 1,
 "width": "100%",
 "toolTipOpacity": 1,
 "shadow": false,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontSize": 12,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarRight": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "toolTipPaddingBottom": 4,
 "paddingRight": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 6,
 "toolTipShadowColor": "#333333",
 "playbackBarProgressBorderRadius": 0,
 "playbackBarBorderRadius": 0,
 "height": "100%",
 "playbackBarHeadBorderRadius": 0,
 "class": "ViewerArea",
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderSize": 0,
 "transitionMode": "blending",
 "toolTipShadowHorizontalLength": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Arial",
 "toolTipShadowVerticalLength": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "borderSize": 0,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "minWidth": 1,
 "playbackBarOpacity": 1,
 "progressHeight": 6,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "paddingLeft": 0,
 "displayTooltipInTouchScreens": true,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "toolTipBorderSize": 1,
 "toolTipPaddingTop": 4,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "toolTipPaddingRight": 6,
 "toolTipDisplayTime": 600,
 "paddingTop": 0,
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "paddingBottom": 0,
 "playbackBarHeadHeight": 15,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "progressBarBorderColor": "#0066FF",
 "transitionDuration": 500,
 "data": {
  "name": "Floor Plan"
 }
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5B054C87_50DC_A0F6_41CE_08F5D16D4DC9, this.camera_1514B5AD_0406_0EBD_418D_C91C0FCC539C); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Point 02b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.83,
   "image": "this.AnimatedImageResource_A2BB6E1D_B730_BD30_41C0_0035EE24D527",
   "pitch": -28.49,
   "yaw": -86.37,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_A4B34D80_B737_BF11_41E1_EBA187A55FBE",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 12.83,
   "yaw": -86.37,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A4977137_B733_A770_41D6_6AA7CE3A2E94_0_HS_0_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -28.49
  }
 ]
},
{
 "items": [
  {
   "media": "this.photo_526135AA_5F90_F79A_41C6_FC11339D1BDB",
   "camera": {
    "scaleMode": "fit_to_height",
    "duration": 5000,
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "class": "PhotoCameraPosition",
     "y": "0.50"
    },
    "targetPosition": {
     "x": "0.53",
     "zoomFactor": 1.01,
     "class": "PhotoCameraPosition",
     "y": "0.66"
    },
    "easing": "linear",
    "class": "MovementPhotoCamera"
   },
   "class": "PhotoPlayListItem"
  },
  {
   "media": "this.photo_5196274E_5F90_F49D_4182_CB8955F4DE02",
   "camera": {
    "scaleMode": "fit_to_height",
    "duration": 5000,
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "class": "PhotoCameraPosition",
     "y": "0.50"
    },
    "targetPosition": {
     "x": "0.68",
     "zoomFactor": 1.01,
     "class": "PhotoCameraPosition",
     "y": "0.70"
    },
    "easing": "linear",
    "class": "MovementPhotoCamera"
   },
   "class": "PhotoPlayListItem"
  },
  {
   "media": "this.photo_53DC78B1_5F90_FD87_41CF_3B10ADC4E36F",
   "camera": {
    "scaleMode": "fit_to_height",
    "duration": 5000,
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "class": "PhotoCameraPosition",
     "y": "0.50"
    },
    "targetPosition": {
     "x": "0.67",
     "zoomFactor": 1.01,
     "class": "PhotoCameraPosition",
     "y": "0.59"
    },
    "easing": "linear",
    "class": "MovementPhotoCamera"
   },
   "class": "PhotoPlayListItem"
  },
  {
   "media": "this.photo_53D74AE6_5F90_FD8D_41D4_0879054D47E5",
   "camera": {
    "scaleMode": "fit_to_height",
    "duration": 5000,
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "class": "PhotoCameraPosition",
     "y": "0.50"
    },
    "targetPosition": {
     "x": "0.75",
     "zoomFactor": 1.01,
     "class": "PhotoCameraPosition",
     "y": "0.38"
    },
    "easing": "linear",
    "class": "MovementPhotoCamera"
   },
   "class": "PhotoPlayListItem"
  }
 ],
 "id": "album_45E3F522_5127_A02E_41CD_E6BEA4899F91_AlbumPlayList",
 "class": "PhotoPlayList"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Point 02b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 20.27,
   "image": "this.AnimatedImageResource_459251E0_50DD_A02A_41B0_441D5513B810",
   "pitch": -33.44,
   "yaw": 71.4,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_449BB1AD_50E4_A03A_41CB_163BC49719E4",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 20.27,
   "yaw": 71.4,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4398A866_50FB_E036_41C8_D582FD5C122B_0_HS_0_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -33.44
  }
 ]
},
{
 "id": "overlay_44790468_50DD_A03A_41A4_E2F5304886EF",
 "bleaching": 0.7,
 "pitch": 61.35,
 "yaw": -94.9,
 "class": "LensFlarePanoramaOverlay",
 "bleachingDistance": 0.4
},
{
 "id": "overlay_4778E1D8_5124_A01A_41CA_AADC309ECF03",
 "bleaching": 0.71,
 "pitch": 62.14,
 "yaw": 167.11,
 "class": "LensFlarePanoramaOverlay",
 "bleachingDistance": 0.38
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Point 02b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 24.7,
   "image": "this.AnimatedImageResource_474617FD_5125_6015_418C_72703B63E6B5",
   "pitch": -9.99,
   "yaw": -78.21,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_42D57354_5127_606A_41D3_72DA07852110",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 24.7,
   "yaw": -78.21,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_448AFDC9_50DF_E07A_41A0_13D7A0EB7F22_0_HS_0_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -9.99
  }
 ]
},
{
 "id": "IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4",
 "horizontalAlign": "center",
 "transparencyActive": true,
 "minHeight": 70,
 "iconURL": "skin/IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4.png",
 "shadow": false,
 "borderSize": 0,
 "minWidth": 70,
 "maxWidth": 150,
 "width": "12%",
 "maxHeight": 150,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "mode": "push",
 "height": "8%",
 "paddingTop": 0,
 "class": "IconButton",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4_rollover.png",
 "pressedIconURL": "skin/IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4_pressed.png",
 "cursor": "hand",
 "propagateClick": false,
 "data": {
  "name": "IconButton >"
 }
},
{
 "cursor": "hand",
 "id": "IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14",
 "horizontalAlign": "center",
 "transparencyActive": false,
 "minHeight": 50,
 "iconURL": "skin/IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14.png",
 "shadow": false,
 "borderSize": 0,
 "right": 10,
 "minWidth": 50,
 "maxWidth": 60,
 "width": "14.22%",
 "maxHeight": 60,
 "bottom": "20%",
 "verticalAlign": "middle",
 "top": "20%",
 "paddingLeft": 0,
 "mode": "push",
 "paddingRight": 0,
 "paddingTop": 0,
 "class": "IconButton",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14_rollover.png",
 "pressedIconURL": "skin/IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14_pressed.png",
 "propagateClick": false,
 "data": {
  "name": "IconButton >"
 }
},
{
 "cursor": "hand",
 "id": "IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
 "horizontalAlign": "center",
 "transparencyActive": false,
 "minHeight": 50,
 "iconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510.png",
 "shadow": false,
 "borderSize": 0,
 "right": 10,
 "minWidth": 50,
 "maxWidth": 60,
 "width": "14.22%",
 "maxHeight": 60,
 "bottom": "20%",
 "verticalAlign": "middle",
 "top": "20%",
 "paddingLeft": 0,
 "mode": "push",
 "paddingRight": 0,
 "paddingTop": 0,
 "class": "IconButton",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_rollover.png",
 "pressedIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_pressed.png",
 "propagateClick": false,
 "data": {
  "name": "IconButton >"
 }
},
{
 "id": "IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD",
 "horizontalAlign": "center",
 "transparencyActive": true,
 "minHeight": 70,
 "iconURL": "skin/IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD.png",
 "shadow": false,
 "borderSize": 0,
 "minWidth": 70,
 "maxWidth": 150,
 "width": "12%",
 "maxHeight": 150,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "mode": "push",
 "height": "8%",
 "paddingTop": 0,
 "class": "IconButton",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD_rollover.png",
 "pressedIconURL": "skin/IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD_pressed.png",
 "cursor": "hand",
 "propagateClick": false,
 "data": {
  "name": "IconButton <"
 }
},
{
 "cursor": "hand",
 "id": "IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D",
 "left": 10,
 "horizontalAlign": "center",
 "transparencyActive": false,
 "minHeight": 50,
 "iconURL": "skin/IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D.png",
 "shadow": false,
 "borderSize": 0,
 "minWidth": 50,
 "maxWidth": 60,
 "width": "14.22%",
 "maxHeight": 60,
 "bottom": "20%",
 "verticalAlign": "middle",
 "top": "20%",
 "paddingLeft": 0,
 "mode": "push",
 "paddingRight": 0,
 "paddingTop": 0,
 "class": "IconButton",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D_rollover.png",
 "pressedIconURL": "skin/IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D_pressed.png",
 "propagateClick": false,
 "data": {
  "name": "IconButton <"
 }
},
{
 "cursor": "hand",
 "id": "IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
 "left": 10,
 "horizontalAlign": "center",
 "transparencyActive": false,
 "minHeight": 50,
 "iconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482.png",
 "shadow": false,
 "borderSize": 0,
 "minWidth": 50,
 "maxWidth": 60,
 "width": "14.22%",
 "maxHeight": 60,
 "bottom": "20%",
 "verticalAlign": "middle",
 "top": "20%",
 "paddingLeft": 0,
 "mode": "push",
 "paddingRight": 0,
 "paddingTop": 0,
 "class": "IconButton",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_rollover.png",
 "pressedIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_pressed.png",
 "propagateClick": false,
 "data": {
  "name": "IconButton <"
 }
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Point 02b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.39,
   "image": "this.AnimatedImageResource_4324D58D_50FC_E0FA_41BB_1AB1F031069A",
   "pitch": -31.86,
   "yaw": -0.52,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_438C9FE9_50E4_E03A_41B6_F9332632CDAA",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 12.39,
   "yaw": -0.52,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5B054C87_50DC_A0F6_41CE_08F5D16D4DC9_1_HS_1_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -31.86
  }
 ]
},
{
 "id": "overlay_444F87D9_50E5_601A_41D0_0063FBD9DF7E",
 "bleaching": 0.67,
 "pitch": 62.54,
 "yaw": 108.73,
 "class": "LensFlarePanoramaOverlay",
 "bleachingDistance": 0.44
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.setMediaBehaviour(this.playList_14FE658F_0406_0F7E_4186_7424BEF02B19, 0, this.panorama_5B054C87_50DC_A0F6_41CE_08F5D16D4DC9); this.MainViewerVideoPlayer.play()",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.95,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5B054C87_50DC_A0F6_41CE_08F5D16D4DC9_0_HS_6_0.png",
      "width": 53,
      "class": "ImageResourceLevel",
      "height": 32
     }
    ]
   },
   "pitch": -29.92,
   "yaw": -11.16,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_737F821E_60B0_8CBD_41D5_444E10924A3E",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.95,
   "yaw": -11.16,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5B054C87_50DC_A0F6_41CE_08F5D16D4DC9_0_HS_6_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -29.92
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 4); this.MainViewerVideoPlayer.play()",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 5.93,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5B054C87_50DC_A0F6_41CE_08F5D16D4DC9_0_HS_7_0.png",
      "width": 53,
      "class": "ImageResourceLevel",
      "height": 32
     }
    ]
   },
   "pitch": -49.7,
   "yaw": -4.24,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_A50E0B0E_B7F0_5B11_41DA_01EC27C260EE",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 5.93,
   "yaw": -4.24,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5B054C87_50DC_A0F6_41CE_08F5D16D4DC9_0_HS_7_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -49.7
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": true,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_A51018E5_B7F0_6510_41D1_A3DD998C75E4, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBorderSize':0,'paddingLeft':5,'rollOverIconWidth':20,'paddingRight':5,'backgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconColor':'#888888','paddingTop':5,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconWidth':20,'iconColor':'#000000','rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, this.ImageResource_A51008E5_B7F0_6510_41BF_2F73EDF56B16, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Poligon"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 80.29,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5B054C87_50DC_A0F6_41CE_08F5D16D4DC9_0_HS_8_0.png",
      "width": 562,
      "class": "ImageResourceLevel",
      "height": 302
     }
    ]
   },
   "pitch": -40.5,
   "roll": 0,
   "yaw": -101.24,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_A5E1190A_B7F0_6711_41D8_DF346F304C97",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 80.29,
   "yaw": -101.24,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5B054C87_50DC_A0F6_41CE_08F5D16D4DC9_0_HS_8_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 107
     }
    ]
   },
   "pitch": -40.5
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A4977137_B733_A770_41D6_6AA7CE3A2E94, this.camera_151E45A3_0406_0EA5_4183_087340FD9DCB); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Point 02b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.82,
   "image": "this.AnimatedImageResource_A055E1C0_B6D0_6711_41E6_BF6B626E0375",
   "pitch": -28.49,
   "yaw": -20.72,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_A499E561_B730_AF10_41DB_37A1ADF6CE16",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 12.82,
   "yaw": -20.72,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5B054C87_50DC_A0F6_41CE_08F5D16D4DC9_0_HS_9_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -28.49
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Point 02b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 10.61,
   "image": "this.AnimatedImageResource_A05581C0_B6D0_6711_41CC_B4364EC28FB2",
   "pitch": -43.33,
   "yaw": -16.76,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_A4EF62C0_B6D1_A510_41DE_912931193D89",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 10.61,
   "yaw": -16.76,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5B054C87_50DC_A0F6_41CE_08F5D16D4DC9_0_HS_10_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -43.33
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": true,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_A1AABB97_B6FF_BB3F_41E3_6DB904E69208, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBorderSize':0,'paddingLeft':5,'rollOverIconWidth':20,'paddingRight':5,'backgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconColor':'#888888','paddingTop':5,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconWidth':20,'iconColor':'#000000','rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, this.ImageResource_AD6C7D61_B6F0_5F10_41E0_A0EC6094861B, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Poligon"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 23.74,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5B054C87_50DC_A0F6_41CE_08F5D16D4DC9_0_HS_11_0.png",
      "width": 140,
      "class": "ImageResourceLevel",
      "height": 64
     }
    ]
   },
   "pitch": -28.6,
   "roll": 0,
   "yaw": -156.65,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_A3009236_B6F0_A571_41E0_F3A02B65841B",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 23.74,
   "yaw": -156.65,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5B054C87_50DC_A0F6_41CE_08F5D16D4DC9_0_HS_11_1_0_map.gif",
      "width": 70,
      "class": "ImageResourceLevel",
      "height": 32
     }
    ]
   },
   "pitch": -28.6
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": true,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_A291E6FD_B6F0_AAF0_41AA_2E56280DCD2F, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBorderSize':0,'paddingLeft':5,'rollOverIconWidth':20,'paddingRight':5,'backgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconColor':'#888888','paddingTop':5,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconWidth':20,'iconColor':'#000000','rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, this.ImageResource_AD6F3D61_B6F0_5F10_41E4_9F90E79F90E2, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Poligon"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 35.43,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5B054C87_50DC_A0F6_41CE_08F5D16D4DC9_0_HS_12_0.png",
      "width": 213,
      "class": "ImageResourceLevel",
      "height": 106
     }
    ]
   },
   "pitch": -39.97,
   "roll": 0,
   "yaw": -155.56,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_A3A8CF5E_B6F3_DB30_41E4_14F127F79399",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 35.43,
   "yaw": -155.56,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5B054C87_50DC_A0F6_41CE_08F5D16D4DC9_0_HS_12_1_0_map.gif",
      "width": 106,
      "class": "ImageResourceLevel",
      "height": 53
     }
    ]
   },
   "pitch": -39.97
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": true,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_A249D61F_B6F7_ED2F_41E0_528022BD3EA5, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBorderSize':0,'paddingLeft':5,'rollOverIconWidth':20,'paddingRight':5,'backgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconColor':'#888888','paddingTop':5,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconWidth':20,'iconColor':'#000000','rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, this.ImageResource_A2F207A3_B6F0_6B10_41E0_0D410F7DA62E, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Poligon"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 54.62,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5B054C87_50DC_A0F6_41CE_08F5D16D4DC9_0_HS_13_0.png",
      "width": 344,
      "class": "ImageResourceLevel",
      "height": 174
     }
    ]
   },
   "pitch": -59.77,
   "roll": 0,
   "yaw": -150.03,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_A30EFBBE_B6F1_DB71_41E1_1F15F49BB50C",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 54.62,
   "yaw": -150.03,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5B054C87_50DC_A0F6_41CE_08F5D16D4DC9_0_HS_13_1_0_map.gif",
      "width": 172,
      "class": "ImageResourceLevel",
      "height": 87
     }
    ]
   },
   "pitch": -59.77
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": true,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_A192B87E_B6F1_A5F1_41E6_8A3483201FC6, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBorderSize':0,'paddingLeft':5,'rollOverIconWidth':20,'paddingRight':5,'backgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconColor':'#888888','paddingTop':5,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconWidth':20,'iconColor':'#000000','rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, this.ImageResource_AD61CD63_B6F0_5F10_41C6_6C5A2D40A2E5, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Poligon"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 90,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5B054C87_50DC_A0F6_41CE_08F5D16D4DC9_0_HS_14_00005.png",
      "width": 332,
      "class": "ImageResourceLevel",
      "height": 332
     }
    ]
   },
   "pitch": -90,
   "roll": 0,
   "yaw": 0,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_A37EC30D_B6F0_6B13_41E4_E442D4048AD5",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 90,
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5B054C87_50DC_A0F6_41CE_08F5D16D4DC9_0_HS_14_1_5_map.gif",
      "width": 166,
      "class": "ImageResourceLevel",
      "height": 166
     }
    ]
   },
   "pitch": -90
  }
 ]
},
{
 "data": {
  "name": "button menu sup"
 },
 "children": [
  "this.IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329"
 ],
 "layout": "horizontal",
 "width": 110,
 "scrollBarColor": "#000000",
 "id": "Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "borderSize": 0,
 "right": "0%",
 "minWidth": 1,
 "top": "0%",
 "horizontalAlign": "center",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "height": 110,
 "paddingTop": 0,
 "class": "Container",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "visible"
},
{
 "data": {
  "name": "-button set"
 },
 "children": [
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
  "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
  "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
  "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
  "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
  "this.IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
  "this.IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521"
 ],
 "layout": "vertical",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "id": "Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "center",
 "shadow": false,
 "borderSize": 0,
 "right": "0%",
 "minWidth": 1,
 "width": "91.304%",
 "bottom": "0%",
 "contentOpaque": false,
 "paddingRight": 0,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "height": "85.959%",
 "paddingTop": 0,
 "class": "Container",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "gap": 3,
 "paddingBottom": 0,
 "visible": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "id": "Image_1B99DD00_16C4_0505_41B3_51F09727447A",
 "left": "0%",
 "horizontalAlign": "center",
 "minHeight": 1,
 "shadow": false,
 "borderSize": 0,
 "right": "0%",
 "url": "skin/Image_1B99DD00_16C4_0505_41B3_51F09727447A.png",
 "minWidth": 1,
 "maxWidth": 3000,
 "maxHeight": 2,
 "bottom": 11,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "height": 2,
 "paddingTop": 0,
 "class": "Image",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "scaleMode": "fit_outside",
 "propagateClick": true,
 "data": {
  "name": "white line"
 }
},
{
 "data": {
  "name": "-button set container"
 },
 "children": [
  "this.Button_1B998D00_16C4_0505_41AD_67CAA4AAEFE0",
  "this.Button_1B999D00_16C4_0505_41AB_D0C2E7857448",
  "this.Button_1B9A4D00_16C4_0505_4193_E0EA69B0CBB0",
  "this.Button_1B9A5D00_16C4_0505_41B0_D18F25F377C4"
 ],
 "layout": "horizontal",
 "left": "8.62%",
 "width": 1199,
 "scrollBarColor": "#000000",
 "id": "Container_1B99BD00_16C4_0505_41A4_A3C2452B0288",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "borderSize": 0,
 "minWidth": 1,
 "horizontalAlign": "left",
 "bottom": "14.41%",
 "contentOpaque": false,
 "paddingRight": 0,
 "paddingLeft": 30,
 "scrollBarMargin": 2,
 "verticalAlign": "middle",
 "height": 51,
 "paddingTop": 0,
 "class": "Container",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "gap": 3,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "id": "Image_4C5BE71B_513D_601E_41C6_0DF5B2873020",
 "left": "1.04%",
 "horizontalAlign": "left",
 "minHeight": 1,
 "width": "8.225%",
 "shadow": false,
 "borderSize": 0,
 "url": "skin/Image_4C5BE71B_513D_601E_41C6_0DF5B2873020.png",
 "minWidth": 1,
 "maxWidth": 2230,
 "maxHeight": 538,
 "bottom": "19.49%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "paddingLeft": 0,
 "height": "37.288%",
 "paddingTop": 0,
 "class": "Image",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "scaleMode": "fit_inside",
 "propagateClick": false,
 "data": {
  "name": "Image29241"
 }
},
{
 "children": [
  "this.Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
  "this.Container_062A082F_1140_E20A_4193_DF1A4391DC79"
 ],
 "layout": "horizontal",
 "id": "Container_062A782F_1140_E20B_41AF_B3E5DE341773",
 "left": "10%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Global"
 },
 "shadowColor": "#000000",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "left",
 "shadow": true,
 "backgroundColorDirection": "vertical",
 "right": "10%",
 "borderSize": 0,
 "minWidth": 1,
 "shadowVerticalLength": 0,
 "bottom": "5%",
 "contentOpaque": false,
 "paddingRight": 0,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "shadowBlurRadius": 25,
 "top": "5%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadowSpread": 1,
 "overflow": "scroll",
 "backgroundOpacity": 1,
 "shadowOpacity": 0.3,
 "paddingTop": 0,
 "shadowHorizontalLength": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "propagateClick": false,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "data": {
  "name": "Container X global"
 },
 "children": [
  "this.IconButton_062A8830_1140_E215_419D_3439F16CCB3E"
 ],
 "layout": "vertical",
 "left": "10%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "id": "Container_062A9830_1140_E215_41A7_5F2BBE5C20E4",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "right",
 "shadow": false,
 "borderSize": 0,
 "right": "10%",
 "minWidth": 1,
 "bottom": "80%",
 "contentOpaque": false,
 "paddingRight": 20,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "top": "5%",
 "paddingTop": 20,
 "class": "Container",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "visible"
},
{
 "children": [
  "this.Container_23F797B7_0C0A_6293_41A7_EC89DBCDB93F",
  "this.Container_23F027B7_0C0A_6293_418E_075FCFAA8A19"
 ],
 "layout": "horizontal",
 "id": "Container_23F7B7B7_0C0A_6293_4197_F931EEC6FA48",
 "left": "10%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Global"
 },
 "shadowColor": "#000000",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "left",
 "shadow": true,
 "backgroundColorDirection": "vertical",
 "right": "10%",
 "borderSize": 0,
 "minWidth": 1,
 "shadowVerticalLength": 0,
 "bottom": "5%",
 "contentOpaque": false,
 "paddingRight": 0,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "shadowBlurRadius": 25,
 "top": "5%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadowSpread": 1,
 "overflow": "scroll",
 "backgroundOpacity": 1,
 "shadowOpacity": 0.3,
 "paddingTop": 0,
 "shadowHorizontalLength": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "propagateClick": false,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "data": {
  "name": "Container X global"
 },
 "children": [
  "this.IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA"
 ],
 "layout": "vertical",
 "left": "10%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "id": "Container_23F097B8_0C0A_629D_4176_D87C90BA32B6",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "right",
 "shadow": false,
 "borderSize": 0,
 "right": "10%",
 "minWidth": 1,
 "bottom": "80%",
 "contentOpaque": false,
 "paddingRight": 20,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "top": "5%",
 "paddingTop": 20,
 "class": "Container",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "visible"
},
{
 "children": [
  "this.Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
  "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0"
 ],
 "layout": "vertical",
 "id": "Container_39A197B1_0C06_62AF_419A_D15E4DDD2528",
 "left": "15%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Global"
 },
 "shadowColor": "#000000",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "center",
 "shadow": true,
 "backgroundColorDirection": "vertical",
 "right": "15%",
 "borderSize": 0,
 "minWidth": 1,
 "shadowVerticalLength": 0,
 "bottom": "7%",
 "contentOpaque": false,
 "paddingRight": 0,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "shadowBlurRadius": 25,
 "top": "7%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadowSpread": 1,
 "overflow": "visible",
 "backgroundOpacity": 1,
 "shadowOpacity": 0.3,
 "paddingTop": 0,
 "shadowHorizontalLength": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "propagateClick": false,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "children": [
  "this.Container_221C0648_0C06_E5FD_4193_12BCE1D6DD6B",
  "this.Container_221C9648_0C06_E5FD_41A1_A79DE53B3031"
 ],
 "layout": "horizontal",
 "id": "Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
 "left": "10%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Global"
 },
 "shadowColor": "#000000",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "left",
 "shadow": true,
 "backgroundColorDirection": "vertical",
 "right": "10%",
 "borderSize": 0,
 "minWidth": 1,
 "shadowVerticalLength": 0,
 "bottom": "5%",
 "contentOpaque": false,
 "paddingRight": 0,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "shadowBlurRadius": 25,
 "top": "5%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadowSpread": 1,
 "overflow": "scroll",
 "backgroundOpacity": 1,
 "shadowOpacity": 0.3,
 "paddingTop": 0,
 "shadowHorizontalLength": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "propagateClick": false,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "data": {
  "name": "Container X global"
 },
 "children": [
  "this.IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF"
 ],
 "layout": "vertical",
 "left": "10%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "id": "Container_221B3648_0C06_E5FD_4199_FCE031AE003B",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "right",
 "shadow": false,
 "borderSize": 0,
 "right": "10%",
 "minWidth": 1,
 "bottom": "80%",
 "contentOpaque": false,
 "paddingRight": 20,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "top": "5%",
 "paddingTop": 20,
 "class": "Container",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "visible"
},
{
 "data": {
  "name": "Global"
 },
 "children": [
  "this.Container_2F8A7686_0D4F_6B71_41A9_1A894413085C",
  "this.MapViewer"
 ],
 "layout": "vertical",
 "left": "15%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "id": "Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "center",
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "right": "15%",
 "shadow": true,
 "borderSize": 0,
 "minWidth": 1,
 "shadowVerticalLength": 0,
 "bottom": "7%",
 "contentOpaque": false,
 "paddingRight": 0,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "shadowBlurRadius": 25,
 "top": "7%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "overflow": "visible",
 "backgroundOpacity": 1,
 "shadowSpread": 1,
 "paddingTop": 0,
 "shadowHorizontalLength": 0,
 "class": "Container",
 "shadowOpacity": 0.3,
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "propagateClick": false,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "children": [
  "this.Container_28214A13_0D5D_5B97_4193_B631E1496339",
  "this.Container_2B0BF61C_0D5B_2B90_4179_632488B1209E"
 ],
 "layout": "vertical",
 "id": "Container_28215A13_0D5D_5B97_4198_A7CA735E9E0A",
 "left": "15%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Global"
 },
 "shadowColor": "#000000",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "center",
 "shadow": true,
 "backgroundColorDirection": "vertical",
 "right": "15%",
 "borderSize": 0,
 "minWidth": 1,
 "shadowVerticalLength": 0,
 "bottom": "7%",
 "contentOpaque": false,
 "paddingRight": 0,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "shadowBlurRadius": 25,
 "top": "7%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadowSpread": 1,
 "overflow": "visible",
 "backgroundOpacity": 1,
 "shadowOpacity": 0.3,
 "paddingTop": 0,
 "shadowHorizontalLength": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "propagateClick": false,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "children": [
  "this.Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC"
 ],
 "layout": "vertical",
 "id": "Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536",
 "left": "15%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Global"
 },
 "shadowColor": "#000000",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "center",
 "shadow": true,
 "backgroundColorDirection": "vertical",
 "right": "15%",
 "borderSize": 0,
 "minWidth": 1,
 "shadowVerticalLength": 0,
 "bottom": "7%",
 "contentOpaque": false,
 "paddingRight": 0,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "shadowBlurRadius": 25,
 "top": "7%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadowSpread": 1,
 "overflow": "visible",
 "backgroundOpacity": 1,
 "shadowOpacity": 0.3,
 "paddingTop": 0,
 "shadowHorizontalLength": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "propagateClick": false,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "children": [
  "this.Container_06C5ABA5_1140_A63F_41A9_850CF958D0DB",
  "this.Container_06C58BA5_1140_A63F_419D_EC83F94F8C54"
 ],
 "layout": "horizontal",
 "id": "Container_06C5DBA5_1140_A63F_41AD_1D83A33F1255",
 "left": "10%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Global"
 },
 "shadowColor": "#000000",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "left",
 "shadow": true,
 "backgroundColorDirection": "vertical",
 "right": "10%",
 "borderSize": 0,
 "minWidth": 1,
 "shadowVerticalLength": 0,
 "bottom": "5%",
 "contentOpaque": false,
 "paddingRight": 0,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "shadowBlurRadius": 25,
 "top": "5%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadowSpread": 1,
 "overflow": "scroll",
 "backgroundOpacity": 1,
 "shadowOpacity": 0.3,
 "paddingTop": 0,
 "shadowHorizontalLength": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "propagateClick": false,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "data": {
  "name": "Container X global"
 },
 "children": [
  "this.IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81"
 ],
 "layout": "vertical",
 "left": "10%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "id": "Container_06C43BA5_1140_A63F_41A1_96DC8F4CAD2F",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "right",
 "shadow": false,
 "borderSize": 0,
 "right": "10%",
 "minWidth": 1,
 "bottom": "80%",
 "contentOpaque": false,
 "paddingRight": 20,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "top": "5%",
 "paddingTop": 20,
 "class": "Container",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "visible"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_A4977137_B733_A770_41D6_6AA7CE3A2E94_0_HS_0_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 930
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_A2BB6E1D_B730_BD30_41C0_0035EE24D527",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_4398A866_50FB_E036_41C8_D582FD5C122B_0_HS_0_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 930
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_459251E0_50DD_A02A_41B0_441D5513B810",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_448AFDC9_50DF_E07A_41A0_13D7A0EB7F22_0_HS_0_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 930
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_474617FD_5125_6015_418C_72703B63E6B5",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_5B054C87_50DC_A0F6_41CE_08F5D16D4DC9_1_HS_1_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 930
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_4324D58D_50FC_E0FA_41BB_1AB1F031069A",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_5B054C87_50DC_A0F6_41CE_08F5D16D4DC9_0_HS_9_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 930
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_A055E1C0_B6D0_6711_41E6_BF6B626E0375",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_5B054C87_50DC_A0F6_41CE_08F5D16D4DC9_0_HS_10_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 930
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_A05581C0_B6D0_6711_41CC_B4364EC28FB2",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "width": 60,
 "id": "IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329",
 "transparencyActive": true,
 "minHeight": 1,
 "horizontalAlign": "center",
 "shadow": false,
 "borderSize": 0,
 "minWidth": 1,
 "maxWidth": 60,
 "iconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329.png",
 "maxHeight": 60,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "mode": "toggle",
 "height": 60,
 "click": "if(!this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE.get('visible')){ this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, false, 0, null, null, false) }",
 "paddingTop": 0,
 "class": "IconButton",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "pressedIconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329_pressed.png",
 "cursor": "hand",
 "propagateClick": true,
 "data": {
  "name": "image button menu"
 }
},
{
 "width": 58,
 "id": "IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
 "transparencyActive": true,
 "minHeight": 1,
 "horizontalAlign": "center",
 "shadow": false,
 "borderSize": 0,
 "minWidth": 1,
 "maxWidth": 58,
 "iconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC.png",
 "maxHeight": 58,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "mode": "push",
 "height": 58,
 "click": "this.shareTwitter(window.location.href)",
 "paddingTop": 0,
 "class": "IconButton",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC_rollover.png",
 "cursor": "hand",
 "propagateClick": true,
 "data": {
  "name": "IconButton TWITTER"
 }
},
{
 "width": 58,
 "id": "IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521",
 "transparencyActive": true,
 "minHeight": 1,
 "horizontalAlign": "center",
 "shadow": false,
 "borderSize": 0,
 "minWidth": 1,
 "maxWidth": 58,
 "iconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521.png",
 "maxHeight": 58,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "mode": "push",
 "height": 58,
 "click": "this.shareFacebook(window.location.href)",
 "paddingTop": 0,
 "class": "IconButton",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521_rollover.png",
 "cursor": "hand",
 "propagateClick": true,
 "data": {
  "name": "IconButton FB"
 }
},
{
 "fontFamily": "Montserrat",
 "backgroundColorRatios": [
  0
 ],
 "rollOverBackgroundColorRatios": [
  0.01
 ],
 "layout": "horizontal",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "width": 120,
 "data": {
  "name": "Button house info"
 },
 "id": "Button_1B998D00_16C4_0505_41AD_67CAA4AAEFE0",
 "fontSize": 12,
 "minHeight": 1,
 "horizontalAlign": "center",
 "shadow": false,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "minWidth": 1,
 "borderColor": "#000000",
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "mode": "push",
 "pressedBackgroundColorRatios": [
  0
 ],
 "height": 40,
 "label": "PROYECTO",
 "backgroundColor": [
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, true, 0, null, null, false)",
 "iconHeight": 0,
 "shadowBlurRadius": 15,
 "paddingTop": 0,
 "class": "Button",
 "backgroundOpacity": 0,
 "rollOverBackgroundOpacity": 0.8,
 "borderRadius": 0,
 "gap": 5,
 "rollOverShadow": false,
 "paddingBottom": 0,
 "textDecoration": "none",
 "fontStyle": "normal",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "bold",
 "iconWidth": 0,
 "iconBeforeLabel": true
},
{
 "fontFamily": "Montserrat",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "layout": "horizontal",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "width": 130,
 "data": {
  "name": "Button panorama list"
 },
 "id": "Button_1B999D00_16C4_0505_41AB_D0C2E7857448",
 "fontSize": 12,
 "minHeight": 1,
 "horizontalAlign": "center",
 "shadow": false,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "minWidth": 1,
 "borderColor": "#000000",
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "mode": "push",
 "pressedBackgroundColorRatios": [
  0
 ],
 "height": 40,
 "label": "PANORAMA LIST",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, true, 0, null, null, false)",
 "iconHeight": 32,
 "shadowBlurRadius": 15,
 "paddingTop": 0,
 "class": "Button",
 "backgroundOpacity": 0,
 "rollOverBackgroundOpacity": 0.8,
 "borderRadius": 0,
 "gap": 5,
 "paddingBottom": 0,
 "textDecoration": "none",
 "visible": false,
 "fontStyle": "normal",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "bold",
 "iconWidth": 32,
 "iconBeforeLabel": true
},
{
 "fontFamily": "Montserrat",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "layout": "horizontal",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "width": 130,
 "data": {
  "name": "Button floorplan"
 },
 "id": "Button_1B9A4D00_16C4_0505_4193_E0EA69B0CBB0",
 "fontSize": 12,
 "minHeight": 1,
 "horizontalAlign": "center",
 "shadow": false,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "minWidth": 1,
 "borderColor": "#000000",
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "mode": "push",
 "pressedBackgroundColorRatios": [
  0
 ],
 "height": 40,
 "label": "PLANO GENERAL",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, true, 0, null, null, false)",
 "iconHeight": 32,
 "shadowBlurRadius": 15,
 "paddingTop": 0,
 "class": "Button",
 "backgroundOpacity": 0,
 "rollOverBackgroundOpacity": 0.8,
 "borderRadius": 0,
 "gap": 5,
 "paddingBottom": 0,
 "textDecoration": "none",
 "fontStyle": "normal",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "bold",
 "iconWidth": 32,
 "iconBeforeLabel": true
},
{
 "fontFamily": "Montserrat",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "layout": "horizontal",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "width": 112,
 "data": {
  "name": "Button photoalbum"
 },
 "id": "Button_1B9A5D00_16C4_0505_41B0_D18F25F377C4",
 "fontSize": 12,
 "minHeight": 1,
 "horizontalAlign": "center",
 "shadow": false,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "minWidth": 1,
 "borderColor": "#000000",
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "mode": "push",
 "pressedBackgroundColorRatios": [
  0
 ],
 "height": 40,
 "label": "PHOTOALBUM",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, true, 0, null, null, false)",
 "iconHeight": 32,
 "shadowBlurRadius": 15,
 "paddingTop": 0,
 "class": "Button",
 "backgroundOpacity": 0,
 "rollOverBackgroundOpacity": 0.8,
 "borderRadius": 0,
 "gap": 5,
 "paddingBottom": 0,
 "textDecoration": "none",
 "visible": false,
 "fontStyle": "normal",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "bold",
 "iconWidth": 32,
 "iconBeforeLabel": true
},
{
 "backgroundColorRatios": [
  0
 ],
 "data": {
  "name": "-left"
 },
 "children": [
  "this.Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A"
 ],
 "layout": "absolute",
 "id": "Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "center",
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "minWidth": 1,
 "width": "85%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "backgroundColor": [
  "#000000"
 ],
 "height": "100%",
 "paddingTop": 0,
 "class": "Container",
 "backgroundOpacity": 1,
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "-right"
 },
 "children": [
  "this.Container_062A3830_1140_E215_4195_1698933FE51C",
  "this.Container_062A2830_1140_E215_41AA_EB25B7BD381C",
  "this.Container_062AE830_1140_E215_4180_196ED689F4BD"
 ],
 "layout": "vertical",
 "id": "Container_062A082F_1140_E20A_4193_DF1A4391DC79",
 "scrollBarOpacity": 0.51,
 "scrollBarColor": "#0069A3",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "left",
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "minWidth": 460,
 "width": "50%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 50,
 "paddingLeft": 50,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "height": "100%",
 "paddingTop": 20,
 "class": "Container",
 "backgroundOpacity": 1,
 "borderRadius": 0,
 "gap": 0,
 "paddingBottom": 20,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "visible"
},
{
 "id": "IconButton_062A8830_1140_E215_419D_3439F16CCB3E",
 "horizontalAlign": "center",
 "transparencyActive": false,
 "minHeight": 50,
 "iconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E.jpg",
 "shadow": false,
 "borderSize": 0,
 "minWidth": 50,
 "maxWidth": 60,
 "width": "25%",
 "maxHeight": 60,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "mode": "push",
 "height": "75%",
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false)",
 "paddingTop": 0,
 "class": "IconButton",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_rollover.jpg",
 "pressedIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_pressed.jpg",
 "cursor": "hand",
 "propagateClick": false,
 "data": {
  "name": "X"
 }
},
{
 "backgroundColorRatios": [
  0
 ],
 "data": {
  "name": "-left"
 },
 "children": [
  "this.ViewerAreaLabeled_23F787B7_0C0A_6293_419A_B4B58B92DAFC",
  "this.Container_23F7F7B7_0C0A_6293_4195_D6240EBAFDC0"
 ],
 "layout": "absolute",
 "id": "Container_23F797B7_0C0A_6293_41A7_EC89DBCDB93F",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "center",
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "minWidth": 1,
 "width": "85%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "backgroundColor": [
  "#000000"
 ],
 "height": "100%",
 "paddingTop": 0,
 "class": "Container",
 "backgroundOpacity": 1,
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "-right"
 },
 "children": [
  "this.Container_23F017B8_0C0A_629D_41A5_DE420F5F9331",
  "this.Container_23F007B8_0C0A_629D_41A3_034CF0D91203",
  "this.Container_23F047B8_0C0A_629D_415D_F05EF8619564"
 ],
 "layout": "vertical",
 "id": "Container_23F027B7_0C0A_6293_418E_075FCFAA8A19",
 "scrollBarOpacity": 0.51,
 "scrollBarColor": "#0069A3",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "left",
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "minWidth": 460,
 "width": "50%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 50,
 "paddingLeft": 50,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "height": "100%",
 "paddingTop": 20,
 "class": "Container",
 "backgroundOpacity": 1,
 "borderRadius": 0,
 "gap": 0,
 "paddingBottom": 20,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "visible"
},
{
 "id": "IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA",
 "horizontalAlign": "center",
 "transparencyActive": false,
 "minHeight": 50,
 "iconURL": "skin/IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA.jpg",
 "shadow": false,
 "borderSize": 0,
 "minWidth": 50,
 "maxWidth": 60,
 "width": "25%",
 "maxHeight": 60,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "mode": "push",
 "height": "75%",
 "click": "this.setComponentVisibility(this.Container_23F0F7B8_0C0A_629D_418A_F171085EFBF8, false, 0, null, null, false)",
 "paddingTop": 0,
 "class": "IconButton",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA_rollover.jpg",
 "pressedIconURL": "skin/IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA_pressed.jpg",
 "cursor": "hand",
 "propagateClick": false,
 "data": {
  "name": "X"
 }
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "header"
 },
 "children": [
  "this.HTMLText_3918BF37_0C06_E393_41A1_17CF0ADBAB12",
  "this.IconButton_38922473_0C06_2593_4199_C585853A1AB3"
 ],
 "layout": "absolute",
 "id": "Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "left",
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "minWidth": 1,
 "width": "100%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingLeft": 0,
 "verticalAlign": "top",
 "paddingRight": 0,
 "height": 140,
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0",
 "itemLabelFontStyle": "normal",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#04A3E1",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "center",
 "itemLabelHorizontalAlign": "center",
 "shadow": false,
 "itemMode": "normal",
 "itemThumbnailOpacity": 1,
 "itemPaddingRight": 3,
 "itemMaxWidth": 1000,
 "rollOverItemThumbnailShadowColor": "#04A3E1",
 "width": "100%",
 "itemLabelFontFamily": "Montserrat",
 "itemMaxHeight": 1000,
 "selectedItemThumbnailShadowBlurRadius": 16,
 "verticalAlign": "middle",
 "paddingRight": 70,
 "itemBorderRadius": 0,
 "backgroundColor": [
  "#000000"
 ],
 "itemPaddingLeft": 3,
 "itemHorizontalAlign": "center",
 "itemOpacity": 1,
 "itemBackgroundOpacity": 0,
 "selectedItemLabelFontColor": "#04A3E1",
 "itemLabelPosition": "bottom",
 "backgroundOpacity": 0.05,
 "height": "100%",
 "rollOverItemThumbnailShadowBlurRadius": 0,
 "class": "ThumbnailGrid",
 "itemThumbnailBorderRadius": 0,
 "itemPaddingTop": 3,
 "itemBackgroundColor": [],
 "propagateClick": false,
 "itemBackgroundColorRatios": [],
 "itemWidth": 220,
 "selectedItemThumbnailShadowVerticalLength": 0,
 "selectedItemThumbnailShadow": true,
 "itemMinHeight": 50,
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "selectedItemLabelFontWeight": "bold",
 "itemLabelFontWeight": "normal",
 "itemLabelTextDecoration": "none",
 "minWidth": 1,
 "rollOverItemLabelFontColor": "#04A3E1",
 "rollOverItemThumbnailShadow": true,
 "playList": "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "selectedItemThumbnailShadowHorizontalLength": 0,
 "scrollBarMargin": 2,
 "itemLabelFontSize": 14,
 "paddingLeft": 70,
 "itemMinWidth": 50,
 "itemThumbnailScaleMode": "fit_outside",
 "itemVerticalAlign": "top",
 "rollOverItemThumbnailShadowVerticalLength": 0,
 "itemLabelFontColor": "#666666",
 "itemHeight": 156,
 "itemThumbnailHeight": 125,
 "paddingTop": 10,
 "itemBackgroundColorDirection": "vertical",
 "borderRadius": 5,
 "gap": 26,
 "paddingBottom": 70,
 "rollOverItemThumbnailShadowHorizontalLength": 8,
 "itemLabelGap": 7,
 "itemThumbnailShadow": false,
 "itemThumbnailWidth": 220,
 "itemPaddingBottom": 3,
 "backgroundColorRatios": [
  0
 ],
 "data": {
  "name": "ThumbnailList"
 },
 "scrollBarWidth": 10
},
{
 "backgroundColorRatios": [
  0
 ],
 "data": {
  "name": "-left"
 },
 "children": [
  "this.WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA"
 ],
 "layout": "absolute",
 "id": "Container_221C0648_0C06_E5FD_4193_12BCE1D6DD6B",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "center",
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "minWidth": 1,
 "width": "85%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "backgroundColor": [
  "#000000"
 ],
 "height": "100%",
 "paddingTop": 0,
 "class": "Container",
 "backgroundOpacity": 1,
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "-right"
 },
 "children": [
  "this.Container_221C8648_0C06_E5FD_41A0_8247B2B7DEB0",
  "this.Container_221B7648_0C06_E5FD_418B_12E57BBFD8EC",
  "this.Container_221B4648_0C06_E5FD_4194_30EDC4E7D1B6"
 ],
 "layout": "vertical",
 "id": "Container_221C9648_0C06_E5FD_41A1_A79DE53B3031",
 "scrollBarOpacity": 0.51,
 "scrollBarColor": "#0069A3",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "left",
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "minWidth": 400,
 "width": "15%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 50,
 "paddingLeft": 50,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "height": "100%",
 "paddingTop": 20,
 "class": "Container",
 "backgroundOpacity": 1,
 "borderRadius": 0,
 "gap": 0,
 "paddingBottom": 20,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "visible"
},
{
 "id": "IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF",
 "horizontalAlign": "center",
 "transparencyActive": false,
 "minHeight": 50,
 "iconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF.jpg",
 "shadow": false,
 "borderSize": 0,
 "minWidth": 50,
 "maxWidth": 60,
 "width": "25%",
 "maxHeight": 60,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "mode": "push",
 "height": "75%",
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false)",
 "paddingTop": 0,
 "class": "IconButton",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_rollover.jpg",
 "pressedIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_pressed.jpg",
 "cursor": "hand",
 "propagateClick": false,
 "data": {
  "name": "X"
 }
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "header"
 },
 "children": [
  "this.HTMLText_2F8A4686_0D4F_6B71_4183_10C1696E2923",
  "this.IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E"
 ],
 "layout": "absolute",
 "id": "Container_2F8A7686_0D4F_6B71_41A9_1A894413085C",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "left",
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "minWidth": 1,
 "width": "100%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingLeft": 0,
 "verticalAlign": "top",
 "paddingRight": 0,
 "height": 140,
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "header"
 },
 "children": [
  "this.HTMLText_28217A13_0D5D_5B97_419A_F894ECABEB04",
  "this.IconButton_28216A13_0D5D_5B97_41A9_2CAB10DB6CA3"
 ],
 "layout": "absolute",
 "id": "Container_28214A13_0D5D_5B97_4193_B631E1496339",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "left",
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "minWidth": 1,
 "width": "100%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingLeft": 0,
 "verticalAlign": "top",
 "paddingRight": 0,
 "height": 140,
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Container photo"
 },
 "children": [
  "this.ViewerAreaLabeled_281D2361_0D5F_E9B0_41A1_A1F237F85FD7",
  "this.IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D",
  "this.IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14"
 ],
 "layout": "absolute",
 "id": "Container_2B0BF61C_0D5B_2B90_4179_632488B1209E",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "left",
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "minWidth": 1,
 "width": "100%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "paddingLeft": 0,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "height": "100%",
 "paddingTop": 0,
 "class": "Container",
 "backgroundOpacity": 0.3,
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "visible"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Container photo"
 },
 "children": [
  "this.ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
  "this.IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
  "this.IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
  "this.IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1"
 ],
 "layout": "absolute",
 "id": "Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "left",
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "minWidth": 1,
 "width": "100%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "paddingLeft": 0,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "height": "100%",
 "paddingTop": 0,
 "class": "Container",
 "backgroundOpacity": 0.3,
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "visible"
},
{
 "backgroundColorRatios": [
  0
 ],
 "data": {
  "name": "-left"
 },
 "children": [
  "this.Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397"
 ],
 "layout": "absolute",
 "id": "Container_06C5ABA5_1140_A63F_41A9_850CF958D0DB",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "center",
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "minWidth": 1,
 "width": "55%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "backgroundColor": [
  "#000000"
 ],
 "height": "100%",
 "paddingTop": 0,
 "class": "Container",
 "backgroundOpacity": 1,
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "-right"
 },
 "children": [
  "this.Container_06C59BA5_1140_A63F_41B1_4B41E3B7D98D",
  "this.Container_06C46BA5_1140_A63F_4151_B5A20B4EA86A",
  "this.Container_06C42BA5_1140_A63F_4195_037A0687532F"
 ],
 "layout": "vertical",
 "id": "Container_06C58BA5_1140_A63F_419D_EC83F94F8C54",
 "scrollBarOpacity": 0.51,
 "scrollBarColor": "#0069A3",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "left",
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "minWidth": 460,
 "width": "45%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 60,
 "paddingLeft": 60,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "height": "100%",
 "paddingTop": 20,
 "class": "Container",
 "backgroundOpacity": 1,
 "borderRadius": 0,
 "gap": 0,
 "paddingBottom": 20,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "visible"
},
{
 "id": "IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81",
 "horizontalAlign": "center",
 "transparencyActive": false,
 "minHeight": 50,
 "iconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81.jpg",
 "shadow": false,
 "borderSize": 0,
 "minWidth": 50,
 "maxWidth": 60,
 "width": "25%",
 "maxHeight": 60,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "mode": "push",
 "height": "75%",
 "click": "this.setComponentVisibility(this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC, false, 0, null, null, false)",
 "paddingTop": 0,
 "class": "IconButton",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81_rollover.jpg",
 "pressedIconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81_pressed.jpg",
 "cursor": "hand",
 "propagateClick": false,
 "data": {
  "name": "X"
 }
},
{
 "id": "Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A",
 "left": "0%",
 "horizontalAlign": "center",
 "minHeight": 1,
 "width": "100%",
 "shadow": false,
 "borderSize": 0,
 "url": "skin/Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A.png",
 "minWidth": 1,
 "maxWidth": 2000,
 "maxHeight": 1000,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "height": "100%",
 "top": "0%",
 "paddingTop": 0,
 "class": "Image",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "scaleMode": "fit_outside",
 "propagateClick": false,
 "data": {
  "name": "Image"
 }
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Container space"
 },
 "layout": "horizontal",
 "id": "Container_062A3830_1140_E215_4195_1698933FE51C",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "minHeight": 0,
 "horizontalAlign": "right",
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "minWidth": 1,
 "width": "100%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingLeft": 0,
 "verticalAlign": "top",
 "paddingRight": 0,
 "height": 60,
 "backgroundOpacity": 0.3,
 "paddingTop": 20,
 "class": "Container",
 "borderRadius": 0,
 "gap": 0,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Container text"
 },
 "children": [
  "this.HTMLText_062AD830_1140_E215_41B0_321699661E7F",
  "this.Button_062AF830_1140_E215_418D_D2FC11B12C47"
 ],
 "layout": "vertical",
 "id": "Container_062A2830_1140_E215_41AA_EB25B7BD381C",
 "scrollBarOpacity": 0.79,
 "scrollBarColor": "#E73B2C",
 "scrollBarVisible": "rollOver",
 "minHeight": 520,
 "horizontalAlign": "left",
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "minWidth": 100,
 "width": "100%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "paddingLeft": 0,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "height": "100%",
 "paddingTop": 0,
 "class": "Container",
 "backgroundOpacity": 0.3,
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 30,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Container space"
 },
 "layout": "horizontal",
 "id": "Container_062AE830_1140_E215_4180_196ED689F4BD",
 "width": 370,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "minWidth": 1,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingLeft": 0,
 "verticalAlign": "top",
 "paddingRight": 0,
 "height": 40,
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "playbackBarHeadOpacity": 1,
 "playbackBarBottom": 0,
 "toolTipShadowSpread": 0,
 "progressBorderColor": "#FFFFFF",
 "id": "ViewerAreaLabeled_23F787B7_0C0A_6293_419A_B4B58B92DAFC",
 "left": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "minHeight": 1,
 "toolTipOpacity": 1,
 "shadow": false,
 "right": 0,
 "toolTipFontSize": 12,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarRight": 0,
 "playbackBarHeight": 10,
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "toolTipPaddingBottom": 4,
 "paddingRight": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 6,
 "toolTipShadowColor": "#333333",
 "playbackBarProgressBorderRadius": 0,
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "class": "ViewerArea",
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipShadowOpacity": 1,
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipFontStyle": "normal",
 "playbackBarBorderSize": 0,
 "transitionMode": "blending",
 "toolTipShadowHorizontalLength": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Arial",
 "toolTipShadowVerticalLength": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "borderSize": 0,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "minWidth": 1,
 "playbackBarOpacity": 1,
 "progressHeight": 6,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "vrPointerColor": "#FFFFFF",
 "bottom": 0,
 "progressBarOpacity": 1,
 "top": 0,
 "paddingLeft": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "displayTooltipInTouchScreens": true,
 "toolTipPaddingTop": 4,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "toolTipPaddingRight": 6,
 "toolTipDisplayTime": 600,
 "paddingTop": 0,
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "paddingBottom": 0,
 "playbackBarHeadHeight": 15,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "progressBarBorderColor": "#0066FF",
 "transitionDuration": 500,
 "data": {
  "name": "Viewer info 1"
 }
},
{
 "data": {
  "name": "Container arrows"
 },
 "children": [
  "this.IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD",
  "this.Container_23F7D7B7_0C0A_6293_4195_312C9CAEABE4",
  "this.IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4"
 ],
 "layout": "horizontal",
 "left": "0%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "id": "Container_23F7F7B7_0C0A_6293_4195_D6240EBAFDC0",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "left",
 "shadow": false,
 "borderSize": 0,
 "minWidth": 1,
 "width": "100%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "height": "100%",
 "top": "0%",
 "paddingTop": 0,
 "class": "Container",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Container space"
 },
 "layout": "horizontal",
 "id": "Container_23F017B8_0C0A_629D_41A5_DE420F5F9331",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "minHeight": 0,
 "horizontalAlign": "right",
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "minWidth": 1,
 "width": "100%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingLeft": 0,
 "verticalAlign": "top",
 "paddingRight": 0,
 "height": 60,
 "backgroundOpacity": 0.3,
 "paddingTop": 20,
 "class": "Container",
 "borderRadius": 0,
 "gap": 0,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Container text"
 },
 "children": [
  "this.HTMLText_23F067B8_0C0A_629D_41A9_1A1C797BB055",
  "this.Button_23F057B8_0C0A_629D_41A2_CD6BDCDB0145"
 ],
 "layout": "vertical",
 "id": "Container_23F007B8_0C0A_629D_41A3_034CF0D91203",
 "scrollBarOpacity": 0.79,
 "scrollBarColor": "#E73B2C",
 "scrollBarVisible": "rollOver",
 "minHeight": 520,
 "horizontalAlign": "left",
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "minWidth": 100,
 "width": "100%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "paddingLeft": 0,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "height": "100%",
 "paddingTop": 0,
 "class": "Container",
 "backgroundOpacity": 0.3,
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 30,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Container space"
 },
 "layout": "horizontal",
 "id": "Container_23F047B8_0C0A_629D_415D_F05EF8619564",
 "width": 370,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "minWidth": 1,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingLeft": 0,
 "verticalAlign": "top",
 "paddingRight": 0,
 "height": 40,
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "left": "0%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "id": "HTMLText_3918BF37_0C06_E393_41A1_17CF0ADBAB12",
 "scrollBarVisible": "rollOver",
 "minHeight": 100,
 "width": "77.115%",
 "shadow": false,
 "borderSize": 0,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "paddingLeft": 80,
 "height": "100%",
 "top": "0%",
 "paddingTop": 0,
 "class": "HTMLText",
 "backgroundOpacity": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:5.14vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:5.14vh;font-family:'Bebas Neue Bold';\">Panorama list:</SPAN></SPAN></DIV></div>",
 "borderRadius": 0,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "data": {
  "name": "HTMLText54192"
 }
},
{
 "id": "IconButton_38922473_0C06_2593_4199_C585853A1AB3",
 "horizontalAlign": "right",
 "transparencyActive": false,
 "minHeight": 50,
 "iconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3.jpg",
 "shadow": false,
 "borderSize": 0,
 "right": 20,
 "minWidth": 50,
 "maxWidth": 60,
 "width": "100%",
 "maxHeight": 60,
 "verticalAlign": "top",
 "paddingRight": 0,
 "paddingLeft": 0,
 "mode": "push",
 "height": "36.14%",
 "top": 20,
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)",
 "paddingTop": 0,
 "class": "IconButton",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_rollover.jpg",
 "pressedIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_pressed.jpg",
 "cursor": "hand",
 "propagateClick": false,
 "data": {
  "name": "IconButton X"
 }
},
{
 "backgroundColorRatios": [
  0
 ],
 "id": "WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA",
 "left": "0%",
 "minHeight": 1,
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "right": "0%",
 "url": "https://www.google.com/maps/place/Serena+del+Mar/@10.5084025,-75.4676251,906m/data=!3m1!1e3!4m6!3m5!1s0x8ef63b076ca49773:0x8df64626716207d4!8m2!3d10.5056449!4d-75.4726837!16s%2Fg%2F11gbk2z4v5?entry=ttu",
 "borderSize": 0,
 "scrollEnabled": true,
 "minWidth": 1,
 "bottom": "0%",
 "paddingRight": 0,
 "paddingLeft": 0,
 "backgroundColor": [
  "#FFFFFF"
 ],
 "top": "0%",
 "insetBorder": false,
 "paddingTop": 0,
 "class": "WebFrame",
 "backgroundOpacity": 1,
 "borderRadius": 0,
 "paddingBottom": 0,
 "propagateClick": false,
 "data": {
  "name": "WebFrame48191"
 }
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Container space"
 },
 "layout": "horizontal",
 "id": "Container_221C8648_0C06_E5FD_41A0_8247B2B7DEB0",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "minHeight": 0,
 "horizontalAlign": "right",
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "minWidth": 1,
 "width": "100%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingLeft": 0,
 "verticalAlign": "top",
 "paddingRight": 0,
 "height": 60,
 "backgroundOpacity": 0.3,
 "paddingTop": 20,
 "class": "Container",
 "borderRadius": 0,
 "gap": 0,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Container text"
 },
 "children": [
  "this.HTMLText_221B6648_0C06_E5FD_41A0_77851DC2C548",
  "this.Button_221B5648_0C06_E5FD_4198_40C786948FF0"
 ],
 "layout": "vertical",
 "id": "Container_221B7648_0C06_E5FD_418B_12E57BBFD8EC",
 "scrollBarOpacity": 0.79,
 "scrollBarColor": "#E73B2C",
 "scrollBarVisible": "rollOver",
 "minHeight": 520,
 "horizontalAlign": "left",
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "minWidth": 100,
 "width": "100%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "paddingLeft": 0,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "height": "100%",
 "paddingTop": 0,
 "class": "Container",
 "backgroundOpacity": 0.3,
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 30,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Container space"
 },
 "layout": "horizontal",
 "id": "Container_221B4648_0C06_E5FD_4194_30EDC4E7D1B6",
 "width": 370,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "minWidth": 1,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingLeft": 0,
 "verticalAlign": "top",
 "paddingRight": 0,
 "height": 40,
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "left": "0%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "id": "HTMLText_2F8A4686_0D4F_6B71_4183_10C1696E2923",
 "scrollBarVisible": "rollOver",
 "minHeight": 100,
 "width": "77.115%",
 "shadow": false,
 "borderSize": 0,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "paddingLeft": 80,
 "height": "100%",
 "top": "0%",
 "paddingTop": 0,
 "class": "HTMLText",
 "backgroundOpacity": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:5.14vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:5.14vh;font-family:'Bebas Neue Bold';\">FLOORPLAN:</SPAN></SPAN></DIV></div>",
 "borderRadius": 0,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "data": {
  "name": "HTMLText54192"
 }
},
{
 "id": "IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E",
 "horizontalAlign": "right",
 "transparencyActive": false,
 "minHeight": 50,
 "iconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E.jpg",
 "shadow": false,
 "borderSize": 0,
 "right": 20,
 "minWidth": 50,
 "maxWidth": 60,
 "width": "100%",
 "maxHeight": 60,
 "verticalAlign": "top",
 "paddingRight": 0,
 "paddingLeft": 0,
 "mode": "push",
 "height": "36.14%",
 "top": 20,
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false)",
 "paddingTop": 0,
 "class": "IconButton",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_rollover.jpg",
 "pressedIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_pressed.jpg",
 "cursor": "hand",
 "propagateClick": false,
 "data": {
  "name": "IconButton X"
 }
},
{
 "left": "0%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "id": "HTMLText_28217A13_0D5D_5B97_419A_F894ECABEB04",
 "scrollBarVisible": "rollOver",
 "minHeight": 100,
 "width": "77.115%",
 "shadow": false,
 "borderSize": 0,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "paddingLeft": 80,
 "height": "100%",
 "top": "0%",
 "paddingTop": 0,
 "class": "HTMLText",
 "backgroundOpacity": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:5.14vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:5.14vh;font-family:'Bebas Neue Bold';\">PHOTOALBUM:</SPAN></SPAN></DIV></div>",
 "borderRadius": 0,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "data": {
  "name": "HTMLText54192"
 }
},
{
 "id": "IconButton_28216A13_0D5D_5B97_41A9_2CAB10DB6CA3",
 "horizontalAlign": "right",
 "transparencyActive": false,
 "minHeight": 50,
 "iconURL": "skin/IconButton_28216A13_0D5D_5B97_41A9_2CAB10DB6CA3.jpg",
 "shadow": false,
 "borderSize": 0,
 "right": 20,
 "minWidth": 50,
 "maxWidth": 60,
 "width": "100%",
 "maxHeight": 60,
 "verticalAlign": "top",
 "paddingRight": 0,
 "paddingLeft": 0,
 "mode": "push",
 "height": "36.14%",
 "top": 20,
 "click": "this.setComponentVisibility(this.Container_2820BA13_0D5D_5B97_4192_AABC38F6F169, false, 0, null, null, false)",
 "paddingTop": 0,
 "class": "IconButton",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_28216A13_0D5D_5B97_41A9_2CAB10DB6CA3_rollover.jpg",
 "pressedIconURL": "skin/IconButton_28216A13_0D5D_5B97_41A9_2CAB10DB6CA3_pressed.jpg",
 "cursor": "hand",
 "propagateClick": false,
 "data": {
  "name": "IconButton X"
 }
},
{
 "playbackBarHeadOpacity": 1,
 "playbackBarBottom": 0,
 "toolTipShadowSpread": 0,
 "progressBorderColor": "#FFFFFF",
 "id": "ViewerAreaLabeled_281D2361_0D5F_E9B0_41A1_A1F237F85FD7",
 "left": "0%",
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "minHeight": 1,
 "width": "100%",
 "toolTipOpacity": 1,
 "shadow": false,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontSize": 12,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarRight": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "toolTipPaddingBottom": 4,
 "paddingRight": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 6,
 "toolTipShadowColor": "#333333",
 "playbackBarProgressBorderRadius": 0,
 "playbackBarBorderRadius": 0,
 "height": "100%",
 "playbackBarHeadBorderRadius": 0,
 "class": "ViewerArea",
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderSize": 0,
 "transitionMode": "blending",
 "toolTipShadowHorizontalLength": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Arial",
 "toolTipShadowVerticalLength": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "borderSize": 0,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "minWidth": 1,
 "playbackBarOpacity": 1,
 "progressHeight": 6,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "top": "0%",
 "paddingLeft": 0,
 "displayTooltipInTouchScreens": true,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingTop": 4,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "toolTipPaddingRight": 6,
 "toolTipDisplayTime": 600,
 "paddingTop": 0,
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "paddingBottom": 0,
 "playbackBarHeadHeight": 15,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "progressBarBorderColor": "#0066FF",
 "transitionDuration": 500,
 "data": {
  "name": "Viewer photoalbum + text 1"
 }
},
{
 "playbackBarHeadOpacity": 1,
 "playbackBarBottom": 0,
 "toolTipShadowSpread": 0,
 "progressBorderColor": "#FFFFFF",
 "id": "ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
 "left": "0%",
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "minHeight": 1,
 "width": "100%",
 "toolTipOpacity": 1,
 "shadow": false,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontSize": 12,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarRight": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "toolTipPaddingBottom": 4,
 "paddingRight": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 6,
 "toolTipShadowColor": "#333333",
 "playbackBarProgressBorderRadius": 0,
 "playbackBarBorderRadius": 0,
 "height": "100%",
 "playbackBarHeadBorderRadius": 0,
 "class": "ViewerArea",
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderSize": 0,
 "transitionMode": "blending",
 "toolTipShadowHorizontalLength": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Arial",
 "toolTipShadowVerticalLength": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "borderSize": 0,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "minWidth": 1,
 "playbackBarOpacity": 1,
 "progressHeight": 6,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "top": "0%",
 "paddingLeft": 0,
 "displayTooltipInTouchScreens": true,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingTop": 4,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "toolTipPaddingRight": 6,
 "toolTipDisplayTime": 600,
 "paddingTop": 0,
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "paddingBottom": 0,
 "playbackBarHeadHeight": 15,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "progressBarBorderColor": "#0066FF",
 "transitionDuration": 500,
 "data": {
  "name": "Viewer photoalbum 1"
 }
},
{
 "id": "IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1",
 "horizontalAlign": "right",
 "transparencyActive": false,
 "minHeight": 50,
 "iconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1.jpg",
 "shadow": false,
 "borderSize": 0,
 "right": 20,
 "minWidth": 50,
 "maxWidth": 60,
 "width": "10%",
 "maxHeight": 60,
 "verticalAlign": "top",
 "paddingRight": 0,
 "paddingLeft": 0,
 "mode": "push",
 "height": "10%",
 "top": 20,
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false)",
 "paddingTop": 0,
 "class": "IconButton",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_rollover.jpg",
 "pressedIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_pressed.jpg",
 "cursor": "hand",
 "propagateClick": false,
 "data": {
  "name": "IconButton X"
 }
},
{
 "id": "Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397",
 "left": "0%",
 "horizontalAlign": "center",
 "minHeight": 1,
 "width": "100%",
 "shadow": false,
 "borderSize": 0,
 "url": "skin/Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397.jpg",
 "minWidth": 1,
 "maxWidth": 2000,
 "maxHeight": 1000,
 "verticalAlign": "bottom",
 "paddingRight": 0,
 "paddingLeft": 0,
 "height": "100%",
 "top": "0%",
 "paddingTop": 0,
 "class": "Image",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "scaleMode": "fit_outside",
 "propagateClick": false,
 "data": {
  "name": "Image"
 }
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Container space"
 },
 "layout": "horizontal",
 "id": "Container_06C59BA5_1140_A63F_41B1_4B41E3B7D98D",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "minHeight": 0,
 "horizontalAlign": "right",
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "minWidth": 1,
 "width": "100%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingLeft": 0,
 "verticalAlign": "top",
 "paddingRight": 0,
 "height": 60,
 "backgroundOpacity": 0.3,
 "paddingTop": 20,
 "class": "Container",
 "borderRadius": 0,
 "gap": 0,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Container text"
 },
 "children": [
  "this.HTMLText_0B42C466_11C0_623D_4193_9FAB57A5AC33",
  "this.Container_0D9BF47A_11C0_E215_41A4_A63C8527FF9C"
 ],
 "layout": "vertical",
 "id": "Container_06C46BA5_1140_A63F_4151_B5A20B4EA86A",
 "scrollBarOpacity": 0.79,
 "scrollBarColor": "#E73B2C",
 "scrollBarVisible": "rollOver",
 "minHeight": 520,
 "horizontalAlign": "left",
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "minWidth": 100,
 "width": "100%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "paddingLeft": 0,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "height": "100%",
 "paddingTop": 0,
 "class": "Container",
 "backgroundOpacity": 0.3,
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 30,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Container space"
 },
 "layout": "horizontal",
 "id": "Container_06C42BA5_1140_A63F_4195_037A0687532F",
 "width": 370,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "minWidth": 1,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingLeft": 0,
 "verticalAlign": "top",
 "paddingRight": 0,
 "height": 40,
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#04A3E1",
 "id": "HTMLText_062AD830_1140_E215_41B0_321699661E7F",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "width": "100%",
 "shadow": false,
 "borderSize": 0,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "paddingRight": 10,
 "paddingLeft": 10,
 "height": "100%",
 "paddingTop": 0,
 "class": "HTMLText",
 "backgroundOpacity": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:7.76vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.67vh;font-family:'Bebas Neue Bold';\">Lorem ipsum</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.67vh;font-family:'Bebas Neue Bold';\">dolor sit amet</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:3.39vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.39vh;font-family:'Bebas Neue Bold';\">consectetur adipiscing elit. Morbi bibendum pharetra lorem, accumsan san nulla.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:0.77vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></DIV><p STYLE=\"margin:0; line-height:0.77vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\">Integer gravida dui quis euismod placerat. Maecenas quis accumsan ipsum. Aliquam gravida velit at dolor mollis, quis luctus mauris vulputate. Proin condimentum id nunc sed sollicitudin.</SPAN></DIV><p STYLE=\"margin:0; line-height:2.3vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.3vh;font-family:'Bebas Neue Bold';\"><B>Donec feugiat:</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Nisl nec mi sollicitudin facilisis </SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Nam sed faucibus est.</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Ut eget lorem sed leo.</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Sollicitudin tempor sit amet non urna. </SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Aliquam feugiat mauris sit amet.</SPAN></DIV><p STYLE=\"margin:0; line-height:2.3vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.3vh;font-family:'Bebas Neue Bold';\"><B>lorem ipsum:</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.61vh;font-family:'Bebas Neue Bold';\"><B>$150,000</B></SPAN></SPAN></DIV></div>",
 "borderRadius": 0,
 "paddingBottom": 20,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "data": {
  "name": "HTMLText"
 }
},
{
 "fontFamily": "Bebas Neue Bold",
 "backgroundColorRatios": [
  0
 ],
 "data": {
  "name": "Button"
 },
 "layout": "horizontal",
 "id": "Button_062AF830_1140_E215_418D_D2FC11B12C47",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "horizontalAlign": "center",
 "fontSize": "3vh",
 "minHeight": 1,
 "width": "46%",
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "fontColor": "#FFFFFF",
 "minWidth": 1,
 "borderColor": "#000000",
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "mode": "push",
 "pressedBackgroundColorRatios": [
  0
 ],
 "backgroundColor": [
  "#04A3E1"
 ],
 "label": "lorem ipsum",
 "height": "9%",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "class": "Button",
 "backgroundOpacity": 0.7,
 "rollOverBackgroundOpacity": 1,
 "borderRadius": 0,
 "gap": 5,
 "paddingBottom": 0,
 "iconBeforeLabel": true,
 "textDecoration": "none",
 "fontStyle": "normal",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": false,
 "fontWeight": "normal",
 "iconWidth": 32
},
{
 "data": {
  "name": "Container separator"
 },
 "layout": "absolute",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "id": "Container_23F7D7B7_0C0A_6293_4195_312C9CAEABE4",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "left",
 "shadow": false,
 "borderSize": 0,
 "minWidth": 1,
 "width": "80%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "paddingLeft": 0,
 "verticalAlign": "top",
 "height": "30%",
 "paddingTop": 0,
 "class": "Container",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#04A3E1",
 "id": "HTMLText_23F067B8_0C0A_629D_41A9_1A1C797BB055",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "width": "100%",
 "shadow": false,
 "borderSize": 0,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "paddingRight": 10,
 "paddingLeft": 10,
 "height": "100%",
 "paddingTop": 0,
 "class": "HTMLText",
 "backgroundOpacity": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:7.76vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.67vh;font-family:'Bebas Neue Bold';\">Lorem ipsum</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.67vh;font-family:'Bebas Neue Bold';\">dolor sit amet</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:3.39vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.39vh;font-family:'Bebas Neue Bold';\">consectetur adipiscing elit. Morbi bibendum pharetra lorem, accumsan san nulla.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:0.77vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></DIV><p STYLE=\"margin:0; line-height:0.77vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\">Integer gravida dui quis euismod placerat. Maecenas quis accumsan ipsum. Aliquam gravida velit at dolor mollis, quis luctus mauris vulputate. Proin condimentum id nunc sed sollicitudin.</SPAN></DIV><p STYLE=\"margin:0; line-height:2.3vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.3vh;font-family:'Bebas Neue Bold';\"><B>Donec feugiat:</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Nisl nec mi sollicitudin facilisis </SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Nam sed faucibus est.</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Ut eget lorem sed leo.</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Sollicitudin tempor sit amet non urna. </SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Aliquam feugiat mauris sit amet.</SPAN></DIV></div>",
 "borderRadius": 0,
 "paddingBottom": 20,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "data": {
  "name": "HTMLText"
 }
},
{
 "fontFamily": "Bebas Neue Bold",
 "backgroundColorRatios": [
  0
 ],
 "data": {
  "name": "Button"
 },
 "layout": "horizontal",
 "id": "Button_23F057B8_0C0A_629D_41A2_CD6BDCDB0145",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "horizontalAlign": "center",
 "fontSize": "3vh",
 "minHeight": 1,
 "width": "46%",
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "fontColor": "#FFFFFF",
 "minWidth": 1,
 "borderColor": "#000000",
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "mode": "push",
 "pressedBackgroundColorRatios": [
  0
 ],
 "backgroundColor": [
  "#04A3E1"
 ],
 "label": "lorem ipsum",
 "height": "9%",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "class": "Button",
 "backgroundOpacity": 0.7,
 "rollOverBackgroundOpacity": 1,
 "borderRadius": 0,
 "gap": 5,
 "paddingBottom": 0,
 "iconBeforeLabel": true,
 "textDecoration": "none",
 "fontStyle": "normal",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": false,
 "fontWeight": "normal",
 "iconWidth": 32
},
{
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#04A3E1",
 "id": "HTMLText_221B6648_0C06_E5FD_41A0_77851DC2C548",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "width": "100%",
 "shadow": false,
 "borderSize": 0,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "paddingRight": 10,
 "paddingLeft": 10,
 "height": "100%",
 "paddingTop": 0,
 "class": "HTMLText",
 "backgroundOpacity": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:7.76vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.67vh;font-family:'Bebas Neue Bold';\">location</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.86vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.39vh;font-family:'Bebas Neue Bold';\">address line 1</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.39vh;font-family:'Bebas Neue Bold';\">address line 2</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:5.14vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac.</SPAN></DIV></div>",
 "borderRadius": 0,
 "paddingBottom": 20,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "data": {
  "name": "HTMLText"
 }
},
{
 "fontFamily": "Bebas Neue Bold",
 "backgroundColorRatios": [
  0
 ],
 "data": {
  "name": "Button"
 },
 "layout": "horizontal",
 "id": "Button_221B5648_0C06_E5FD_4198_40C786948FF0",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "width": 207,
 "fontSize": 34,
 "minHeight": 1,
 "horizontalAlign": "center",
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "fontColor": "#FFFFFF",
 "minWidth": 1,
 "borderColor": "#000000",
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "backgroundColor": [
  "#04A3E1"
 ],
 "paddingLeft": 0,
 "mode": "push",
 "pressedBackgroundColorRatios": [
  0
 ],
 "paddingRight": 0,
 "label": "lorem ipsum",
 "height": 59,
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0.7,
 "paddingTop": 0,
 "class": "Button",
 "rollOverBackgroundOpacity": 1,
 "borderRadius": 0,
 "gap": 5,
 "paddingBottom": 0,
 "textDecoration": "none",
 "visible": false,
 "fontStyle": "normal",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": false,
 "fontWeight": "normal",
 "iconWidth": 32,
 "iconBeforeLabel": true
},
{
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#04A3E1",
 "id": "HTMLText_0B42C466_11C0_623D_4193_9FAB57A5AC33",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "width": "100%",
 "shadow": false,
 "borderSize": 0,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "paddingLeft": 0,
 "height": "45%",
 "paddingTop": 0,
 "class": "HTMLText",
 "backgroundOpacity": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:7.76vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:5.57vh;font-family:'Bebas Neue Bold';\">real estate agent</SPAN></SPAN></DIV></div>",
 "borderRadius": 0,
 "paddingBottom": 10,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "data": {
  "name": "HTMLText18899"
 }
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "- content"
 },
 "children": [
  "this.Image_0B48D65D_11C0_6E0F_41A2_4D6F373BABA0",
  "this.HTMLText_0B4B0DC1_11C0_6277_41A4_201A5BB3F7AE"
 ],
 "layout": "horizontal",
 "id": "Container_0D9BF47A_11C0_E215_41A4_A63C8527FF9C",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "left",
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "minWidth": 1,
 "width": "100%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "paddingLeft": 0,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "height": "80%",
 "paddingTop": 0,
 "class": "Container",
 "backgroundOpacity": 0.3,
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "id": "Image_0B48D65D_11C0_6E0F_41A2_4D6F373BABA0",
 "horizontalAlign": "left",
 "minHeight": 1,
 "width": "25%",
 "shadow": false,
 "borderSize": 0,
 "url": "skin/Image_0B48D65D_11C0_6E0F_41A2_4D6F373BABA0.jpg",
 "minWidth": 1,
 "maxWidth": 200,
 "maxHeight": 200,
 "verticalAlign": "top",
 "paddingRight": 0,
 "paddingLeft": 0,
 "height": "100%",
 "paddingTop": 0,
 "class": "Image",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "scaleMode": "fit_inside",
 "propagateClick": false,
 "data": {
  "name": "agent photo"
 }
},
{
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#04A3E1",
 "id": "HTMLText_0B4B0DC1_11C0_6277_41A4_201A5BB3F7AE",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "width": "75%",
 "shadow": false,
 "borderSize": 0,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "paddingRight": 10,
 "paddingLeft": 10,
 "height": "100%",
 "paddingTop": 0,
 "class": "HTMLText",
 "backgroundOpacity": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.39vh;font-family:'Bebas Neue Bold';\">john doe</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.97vh;font-family:'Bebas Neue Bold';\">licensed real estate salesperson</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.86vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.86vh;font-family:'Bebas Neue Bold';\">Tlf.: +11 111 111 111</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.86vh;font-family:'Bebas Neue Bold';\">jhondoe@realestate.com</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.86vh;font-family:'Bebas Neue Bold';\">www.loremipsum.com</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:0.77vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:0.77vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:0.77vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></DIV></div>",
 "borderRadius": 0,
 "paddingBottom": 10,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "data": {
  "name": "HTMLText19460"
 }
}],
 "start": "this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A], 'gyroscopeAvailable'); this.syncPlaylists([this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist,this.mainPlayList]); this.playList_14FD3590_0406_0F63_4148_250E38AA3440.set('selectedIndex', 0); if(!this.get('fullscreenAvailable')) { [this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0].forEach(function(component) { component.set('visible', false); }) }",
 "data": {
  "name": "Player468"
 },
 "children": [
  "this.MainViewer",
  "this.Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
  "this.Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48",
  "this.Container_062AB830_1140_E215_41AF_6C9D65345420",
  "this.Container_23F0F7B8_0C0A_629D_418A_F171085EFBF8",
  "this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
  "this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
  "this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
  "this.Container_2820BA13_0D5D_5B97_4192_AABC38F6F169",
  "this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
  "this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC",
  "this.veilPopupPanorama",
  "this.zoomImagePopupPanorama",
  "this.closeButtonPopupPanorama"
 ],
 "layout": "absolute",
 "id": "rootPlayer",
 "mobileMipmappingEnabled": false,
 "vrPolyfillScale": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "minHeight": 20,
 "horizontalAlign": "left",
 "shadow": false,
 "borderSize": 0,
 "backgroundPreloadEnabled": true,
 "minWidth": 20,
 "defaultVRPointer": "laser",
 "buttonToggleFullscreen": "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "scripts": {
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "getKey": function(key){  return window[key]; },
  "registerKey": function(key, value){  window[key] = value; },
  "unregisterKey": function(key){  delete window[key]; },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "existsKey": function(key){  return key in window; },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } }
 },
 "width": "100%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "downloadEnabled": false,
 "paddingLeft": 0,
 "verticalAlign": "top",
 "height": "100%",
 "paddingTop": 0,
 "class": "Player",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "buttonToggleMute": "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "mouseWheelEnabled": true,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "visible",
 "desktopMipmappingEnabled": false
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
