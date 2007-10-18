var states = {
'WA' : [new GLatLng(48.400032, -124.628906), new GLatLng(45.828800, -123.925781), new GLatLng(46.134171, -117.158203), new GLatLng(48.980217, -117.158203), new GLatLng(48.922501, -123.046875), new GLatLng(48.224674, -123.134766), new GLatLng(48.400032, -124.628906)],
'OR' : [new GLatLng(42.032974, -124.277344), new GLatLng(42.098221, -116.982422), new GLatLng(46.073231, -116.982422), new GLatLng(45.706181, -123.837891), new GLatLng(42.032974, -124.277344)],
'CA' : [new GLatLng(32.620869, -117.246094), new GLatLng(32.768799, -114.873047), new GLatLng(34.452217, -114.433594), new GLatLng(39.027718, -119.794922), new GLatLng(41.967659, -119.970703), new GLatLng(42.032974, -124.365234), new GLatLng(39.639538, -123.837891), new GLatLng(35.029995, -120.673828), new GLatLng(33.651207, -117.773438), new GLatLng(32.620869, -117.246094)],
'ID' : [new GLatLng(42.163403, -116.982422), new GLatLng(42.098221, -111.005859), new GLatLng(44.653023, -111.269531), new GLatLng(44.402393, -112.939453), new GLatLng(45.521744, -114.082031), new GLatLng(45.460133, -114.697266), new GLatLng(46.619263, -114.433594), new GLatLng(47.989922, -116.191406), new GLatLng(49.037868, -116.103516), new GLatLng(48.922501, -117.158203), new GLatLng(42.163403, -116.982422)],
'NE' : [new GLatLng(34.307144, -114.433594), new GLatLng(35.960224, -114.697266), new GLatLng(36.315125, -111.972656), new GLatLng(37.020100, -111.093750), new GLatLng(37.090240, -113.994141), new GLatLng(41.902279, -114.169922), new GLatLng(41.967659, -119.794922), new GLatLng(39.027718, -119.794922), new GLatLng(34.307144, -114.433594)],
'MN' : [new GLatLng(48.980217, -104.062500), new GLatLng(45.089035, -104.062500), new GLatLng(45.151054, -111.181641), new GLatLng(44.527843, -111.093750), new GLatLng(44.402393, -113.027344), new GLatLng(45.583290, -114.082031), new GLatLng(45.336700, -114.873047), new GLatLng(46.739861, -114.433594), new GLatLng(47.219566, -116.103516), new GLatLng(49.037868, -116.015625), new GLatLng(48.980217, -104.062500)],
'TX' : [new GLatLng(36.315125, -103.007812), new GLatLng(36.456635, -100.107422), new GLatLng(34.524662, -100.019531), new GLatLng(33.724339, -96.855469), new GLatLng(33.797409, -95.537109), new GLatLng(33.504761, -93.955078), new GLatLng(30.751278, -93.691406), new GLatLng(30.600094, -92.988281), new GLatLng(28.459032, -96.943359), new GLatLng(26.902477, -97.734375), new GLatLng(25.641525, -97.119141), new GLatLng(26.588528, -99.404297), new GLatLng(27.994402, -99.755859), new GLatLng(29.764378, -101.425781), new GLatLng(29.764378, -102.744141), new GLatLng(28.767658, -103.095703), new GLatLng(29.611670, -104.501953), new GLatLng(30.524412, -105.117188), new GLatLng(32.026707, -106.611328), new GLatLng(32.175613, -102.919922), new GLatLng(36.315125, -103.007812)],
'ND' : [new GLatLng(48.922501, -97.207031), new GLatLng(45.828800, -96.591797), new GLatLng(46.012222, -104.150391), new GLatLng(49.095451, -104.062500), new GLatLng(48.922501, -97.207031)],
'MT' : [new GLatLng(43.452919, -96.416016), new GLatLng(43.516689, -91.318359), new GLatLng(43.961189, -91.230469), new GLatLng(44.902576, -92.900391), new GLatLng(45.644768, -92.900391), new GLatLng(46.437859, -92.109375), new GLatLng(47.931065, -92.373047), new GLatLng(49.037868, -95.185547), new GLatLng(49.037868, -97.294922), new GLatLng(47.040180, -96.328125), new GLatLng(43.452919, -96.416016)],
'SD' : [new GLatLng(43.068890, -103.974609), new GLatLng(42.940338, -98.437500), new GLatLng(42.553082, -96.328125), new GLatLng(45.951149, -96.503906), new GLatLng(46.073231, -104.062500), new GLatLng(43.068890, -103.974609)],
'LA' : [new GLatLng(33.137550, -93.867188), new GLatLng(33.284618, -91.230469), new GLatLng(32.101189, -90.878906), new GLatLng(30.751278, -91.757812), new GLatLng(31.128199, -89.648438), new GLatLng(29.152161, -89.033203), new GLatLng(29.382175, -91.757812), new GLatLng(29.993002, -93.779297), new GLatLng(33.137550, -93.867188)],
'AZ' : [new GLatLng(32.546814, -115.092773), new GLatLng(31.278551, -110.961914), new GLatLng(31.316101, -109.072266), new GLatLng(37.055176, -109.379883), new GLatLng(37.020100, -111.181641), new GLatLng(36.244274, -112.060547), new GLatLng(35.995785, -114.609375), new GLatLng(34.379711, -114.389648), new GLatLng(32.546814, -115.092773)],
'NM' : [new GLatLng(31.353638, -108.940430), new GLatLng(31.353638, -108.105469), new GLatLng(31.840233, -108.149414), new GLatLng(31.989443, -106.567383), new GLatLng(32.212803, -102.919922), new GLatLng(36.985004, -103.007812), new GLatLng(37.020100, -109.116211), new GLatLng(31.353638, -108.940430)],
'CO' : [new GLatLng(40.913513, -102.172852), new GLatLng(36.985004, -102.084961), new GLatLng(37.055176, -109.116211), new GLatLng(41.046219, -109.116211), new GLatLng(40.913513, -102.172852)],
'KS' : [new GLatLng(40.010788, -102.041016), new GLatLng(40.010788, -94.921875), new GLatLng(39.402245, -95.009766), new GLatLng(38.822590, -94.526367), new GLatLng(36.985004, -94.746094), new GLatLng(37.090240, -102.084961), new GLatLng(40.010788, -102.041016)],
'NV' : [new GLatLng(43.068890, -104.106445), new GLatLng(43.036777, -98.437500), new GLatLng(42.553082, -96.416016), new GLatLng(39.943436, -95.273438), new GLatLng(40.178871, -102.172852), new GLatLng(40.979897, -102.084961), new GLatLng(41.013065, -104.150391), new GLatLng(43.068890, -104.106445)],
'FL' : [new GLatLng(30.259068, -87.539062), new GLatLng(30.977610, -87.583008), new GLatLng(31.052935, -85.034180), new GLatLng(30.600094, -81.474609), new GLatLng(29.535231, -81.298828), new GLatLng(26.824072, -80.024414), new GLatLng(25.125393, -80.507812), new GLatLng(26.115986, -81.782227), new GLatLng(27.605671, -82.749023), new GLatLng(28.806173, -82.617188), new GLatLng(30.145126, -83.891602), new GLatLng(30.031055, -84.550781), new GLatLng(29.688053, -85.209961), new GLatLng(30.334953, -86.264648), new GLatLng(30.259068, -87.539062)],
'MS' : [new GLatLng(34.921970, -88.110352), new GLatLng(30.334953, -88.461914), new GLatLng(30.221102, -89.516602), new GLatLng(31.203405, -89.736328), new GLatLng(31.015280, -91.538086), new GLatLng(31.690783, -91.538086), new GLatLng(32.212803, -91.010742), new GLatLng(33.760883, -91.186523), new GLatLng(34.957996, -90.175781), new GLatLng(34.921970, -88.110352)],
'GA' : [new GLatLng(34.957996, -85.693359), new GLatLng(32.287132, -84.946289), new GLatLng(31.690783, -85.166016), new GLatLng(31.015280, -85.034180), new GLatLng(30.713505, -81.606445), new GLatLng(32.175613, -80.859375), new GLatLng(33.284618, -81.826172), new GLatLng(34.597042, -83.144531), new GLatLng(35.101933, -83.276367), new GLatLng(34.957996, -85.693359)],
'SC' : [new GLatLng(33.870415, -78.574219), new GLatLng(34.813805, -79.672852), new GLatLng(35.029995, -81.035156), new GLatLng(35.281502, -82.529297), new GLatLng(34.885929, -83.276367), new GLatLng(32.249973, -80.815430), new GLatLng(33.027088, -79.409180), new GLatLng(33.468109, -79.057617), new GLatLng(33.870415, -78.574219)],
'NC' : [new GLatLng(36.633163, -75.893555), new GLatLng(36.562599, -81.606445), new GLatLng(36.102375, -82.265625), new GLatLng(35.532227, -83.496094), new GLatLng(35.101933, -84.375000), new GLatLng(34.994003, -83.100586), new GLatLng(35.317368, -82.397461), new GLatLng(34.849876, -79.497070), new GLatLng(33.760883, -78.530273), new GLatLng(34.849876, -76.948242), new GLatLng(35.532227, -75.805664), new GLatLng(36.633163, -75.893555)],
'VA' : [new GLatLng(36.562599, -83.891602), new GLatLng(37.474850, -82.045891), new GLatLng(37.361427, -81.760254), new GLatLng(37.300270, -81.430656), new GLatLng(37.474850, -80.288078), new GLatLng(38.591114, -79.639893), new GLatLng(38.419167, -79.420166), new GLatLng(38.634037, -79.189453), new GLatLng(38.822590, -79.024658), new GLatLng(38.779781, -78.815918), new GLatLng(39.436192, -78.299561), new GLatLng(39.121536, -77.871094), new GLatLng(39.308800, -77.684326), new GLatLng(38.754082, -76.948242), new GLatLng(38.341648, -77.387688), new GLatLng(37.892189, -76.113281), new GLatLng(37.622932, -76.376953), new GLatLng(37.361427, -76.289062), new GLatLng(37.265308, -76.508781), new GLatLng(36.976227, -76.223145), new GLatLng(37.011326, -75.827637), new GLatLng(36.650791, -75.959473), new GLatLng(36.562599, -83.891602)],
'AL' : [new GLatLng(34.957996, -88.154297), new GLatLng(34.994003, -85.649414), new GLatLng(32.324276, -84.946289), new GLatLng(31.653381, -85.078125), new GLatLng(31.015280, -84.946289), new GLatLng(30.939924, -87.583008), new GLatLng(30.448673, -87.495117), new GLatLng(30.448673, -88.505859), new GLatLng(34.957996, -88.154297)],
'OK' : [new GLatLng(33.651207, -94.526367), new GLatLng(35.532227, -94.482422), new GLatLng(36.914764, -94.790039), new GLatLng(37.055176, -102.919922), new GLatLng(36.244274, -102.963867), new GLatLng(36.491974, -100.063477), new GLatLng(34.488449, -100.107422), new GLatLng(33.687782, -96.635742), new GLatLng(33.651207, -94.526367)],
'AK' : [new GLatLng(36.597889, -94.570312), new GLatLng(36.562599, -90.175781), new GLatLng(35.853439, -90.395508), new GLatLng(36.031330, -89.648438), new GLatLng(33.797409, -91.142578), new GLatLng(33.284618, -91.230469), new GLatLng(33.100746, -93.911133), new GLatLng(33.614620, -94.042969), new GLatLng(33.724339, -94.526367), new GLatLng(35.924644, -94.526367), new GLatLng(36.597889, -94.570312)],
'MO' : [new GLatLng(40.613953, -91.450195), new GLatLng(39.808537, -91.494141), new GLatLng(38.719807, -90.219727), new GLatLng(36.633163, -89.033203), new GLatLng(36.031330, -89.736328), new GLatLng(35.924644, -90.483398), new GLatLng(36.703659, -90.131836), new GLatLng(36.597889, -94.790039), new GLatLng(39.027718, -94.482422), new GLatLng(39.436192, -94.921875), new GLatLng(39.977119, -94.833984), new GLatLng(40.111691, -95.405273), new GLatLng(40.647305, -95.493164), new GLatLng(40.613953, -91.450195)],
'TN' : [new GLatLng(36.527294, -89.121094), new GLatLng(36.527294, -81.738281), new GLatLng(34.957996, -84.550781), new GLatLng(35.101933, -90.439453), new GLatLng(36.527294, -89.121094)],
'UT' : [new GLatLng(41.967659, -114.038086), new GLatLng(37.125286, -114.082031), new GLatLng(37.090240, -109.072266), new GLatLng(41.013065, -109.116211), new GLatLng(41.046219, -111.225586), new GLatLng(42.032974, -111.093750), new GLatLng(41.967659, -114.038086)],
'WY' : [new GLatLng(41.145569, -111.181641), new GLatLng(40.979897, -103.974609), new GLatLng(45.058002, -104.194336), new GLatLng(45.151054, -111.093750), new GLatLng(41.145569, -111.181641)],
'IL' : [new GLatLng(37.020100, -89.208984), new GLatLng(38.925228, -90.175781), new GLatLng(39.842285, -91.538086), new GLatLng(40.580585, -91.406250), new GLatLng(41.112469, -90.966797), new GLatLng(41.508575, -91.142578), new GLatLng(41.771313, -90.219727), new GLatLng(42.130821, -90.131836), new GLatLng(42.455887, -90.615234), new GLatLng(42.553082, -87.890625), new GLatLng(41.705730, -87.451172), new GLatLng(39.130058, -87.670898), new GLatLng(38.719807, -87.495117), new GLatLng(38.065392, -88.022461), new GLatLng(37.090240, -88.505859), new GLatLng(37.020100, -89.208984)],
'KY' : [new GLatLng(37.544579, -82.045898), new GLatLng(38.134556, -82.661133), new GLatLng(38.616871, -82.661133), new GLatLng(38.719807, -83.452148), new GLatLng(38.822590, -84.418945), new GLatLng(39.164143, -84.902344), new GLatLng(38.134556, -85.869141), new GLatLng(37.857506, -87.187500), new GLatLng(37.857506, -88.198242), new GLatLng(37.055176, -88.505859), new GLatLng(37.090240, -89.165039), new GLatLng(36.527294, -89.033203), new GLatLng(36.527294, -83.803711), new GLatLng(37.544579, -82.045898)],
'IN' : [new GLatLng(39.164143, -84.814453), new GLatLng(41.738529, -84.858398), new GLatLng(41.804077, -86.572266), new GLatLng(41.541477, -87.583008), new GLatLng(39.232254, -87.714844), new GLatLng(38.719807, -87.495117), new GLatLng(37.961521, -88.198242), new GLatLng(37.857506, -87.011719), new GLatLng(38.238178, -85.957031), new GLatLng(39.164143, -84.814453)],
'IA' : [new GLatLng(43.484814, -96.416016), new GLatLng(42.455887, -96.416016), new GLatLng(40.613953, -95.537109), new GLatLng(40.613953, -91.406250), new GLatLng(41.211723, -90.966797), new GLatLng(41.574360, -91.098633), new GLatLng(41.804077, -90.175781), new GLatLng(42.195969, -90.219727), new GLatLng(42.747013, -91.010742), new GLatLng(43.516689, -91.318359), new GLatLng(43.484814, -96.416016)],
'WI' : [new GLatLng(46.830135, -92.065430), new GLatLng(46.649437, -90.351562), new GLatLng(45.859413, -87.934570), new GLatLng(45.182037, -87.583008), new GLatLng(45.429298, -86.923828), new GLatLng(44.245197, -87.670898), new GLatLng(42.585445, -87.978516), new GLatLng(42.423458, -90.659180), new GLatLng(42.811523, -91.098633), new GLatLng(43.961189, -91.318359), new GLatLng(44.809120, -92.812500), new GLatLng(45.675484, -92.900391), new GLatLng(46.377254, -92.153320), new GLatLng(46.830135, -92.065430)],
'MI' : [new GLatLng(41.804077, -86.660156), new GLatLng(42.455887, -86.176758), new GLatLng(43.675819, -86.484375), new GLatLng(44.840290, -86.132812), new GLatLng(45.828800, -85.034180), new GLatLng(45.182037, -83.320312), new GLatLng(44.370987, -83.452148), new GLatLng(43.929550, -83.891602), new GLatLng(44.150681, -82.968750), new GLatLng(42.908161, -82.265625), new GLatLng(42.326061, -83.276367), new GLatLng(41.934978, -83.276367), new GLatLng(41.738529, -83.979492), new GLatLng(41.804077, -86.660156)],
'OH' : [new GLatLng(38.376114, -82.661133), new GLatLng(38.582527, -82.221680), new GLatLng(39.002110, -82.056885), new GLatLng(39.740986, -80.859375), new GLatLng(40.363289, -80.595703), new GLatLng(42.098221, -80.507812), new GLatLng(41.475658, -82.309570), new GLatLng(41.804077, -83.891602), new GLatLng(41.705730, -85.034180), new GLatLng(39.027718, -84.726562), new GLatLng(38.376114, -82.661133)],
'WV' : [new GLatLng(39.842285, -80.771484), new GLatLng(39.732536, -80.507812), new GLatLng(39.707188, -79.508057), new GLatLng(39.698734, -78.244629), new GLatLng(38.814030, -78.804932), new GLatLng(38.822590, -79.024658), new GLatLng(38.444984, -79.398193), new GLatLng(38.599701, -79.683838), new GLatLng(37.474857, -80.244141), new GLatLng(37.309013, -81.474609), new GLatLng(37.483578, -82.045898), new GLatLng(38.125916, -82.650146), new GLatLng(38.350273, -82.628174), new GLatLng(38.444984, -82.287598), new GLatLng(38.993572, -82.056885), new GLatLng(39.842285, -80.771484)],
'MD' : [new GLatLng(38.479397, -75.146484), new GLatLng(38.548164, -75.761719), new GLatLng(39.673370, -75.849609), new GLatLng(39.774769, -77.958984), new GLatLng(39.478607, -78.299561), new GLatLng(39.172661, -77.882080), new GLatLng(39.334297, -77.673340), new GLatLng(38.822590, -76.948242), new GLatLng(38.341656, -77.387695), new GLatLng(37.892197, -76.113281), new GLatLng(36.809284, -76.113281), new GLatLng(38.479397, -75.146484)],
'PA' : [new GLatLng(42.326061, -79.936523), new GLatLng(41.967659, -79.628906), new GLatLng(42.130821, -75.366211), new GLatLng(41.409775, -74.750977), new GLatLng(40.580585, -75.234375), new GLatLng(40.111691, -74.750977), new GLatLng(39.673370, -75.893555), new GLatLng(39.757881, -80.562744), new GLatLng(42.000324, -80.507812), new GLatLng(42.326061, -79.936523)],
'NY' : [new GLatLng(44.980343, -73.322754), new GLatLng(45.058002, -74.772949), new GLatLng(44.182205, -76.333008), new GLatLng(43.500751, -76.223145), new GLatLng(43.229195, -77.453613), new GLatLng(43.389084, -78.046875), new GLatLng(43.261208, -79.189453), new GLatLng(42.811523, -78.815918), new GLatLng(42.163403, -79.760742), new GLatLng(41.951321, -79.541016), new GLatLng(42.081917, -75.344238), new GLatLng(41.376808, -74.816895), new GLatLng(41.062786, -73.937988), new GLatLng(40.497093, -74.289551), new GLatLng(40.563896, -73.575439), new GLatLng(40.996483, -71.784668), new GLatLng(41.178654, -72.290039), new GLatLng(41.004776, -72.674561), new GLatLng(40.855370, -73.718262), new GLatLng(40.996483, -73.652344), new GLatLng(42.666283, -73.322754), new GLatLng(43.644028, -73.300781), new GLatLng(44.087585, -73.454590), new GLatLng(44.980343, -73.322754)],
'DE' : [new GLatLng(38.822590, -75.135498), new GLatLng(39.436192, -75.476074), new GLatLng(39.876019, -75.498047), new GLatLng(39.673370, -75.937500), new GLatLng(38.513786, -75.717773), new GLatLng(38.462193, -75.025635), new GLatLng(38.822590, -75.135498)],
'NJ' : [new GLatLng(40.513798, -74.311523), new GLatLng(41.062786, -73.959961), new GLatLng(41.376808, -74.772949), new GLatLng(40.613953, -75.234375), new GLatLng(40.195660, -74.816895), new GLatLng(39.825413, -75.498047), new GLatLng(39.487083, -75.541992), new GLatLng(38.993572, -74.860840), new GLatLng(39.520992, -74.311523), new GLatLng(40.245991, -73.959961), new GLatLng(40.513798, -74.311523)],
'VT' : [new GLatLng(42.763145, -72.641602), new GLatLng(42.795403, -73.366699), new GLatLng(43.659924, -73.344727), new GLatLng(44.182205, -73.520508), new GLatLng(45.026951, -73.366699), new GLatLng(45.026951, -71.433105), new GLatLng(44.699898, -71.652832), new GLatLng(44.433781, -71.652832), new GLatLng(44.276672, -71.960449), new GLatLng(43.628124, -72.399902), new GLatLng(42.763145, -72.641602)],
'NH' : [new GLatLng(42.940338, -70.817871), new GLatLng(43.357140, -70.905762), new GLatLng(45.274887, -71.191406), new GLatLng(45.274887, -71.411133), new GLatLng(44.731125, -71.674805), new GLatLng(44.418087, -71.652832), new GLatLng(44.245197, -72.092285), new GLatLng(43.508720, -72.421875), new GLatLng(42.755081, -72.608643), new GLatLng(42.650124, -71.323242), new GLatLng(42.940338, -70.817871)],
'MA' : [new GLatLng(42.795403, -73.344727), new GLatLng(42.730873, -72.575684), new GLatLng(42.674358, -71.257324), new GLatLng(42.827641, -71.059570), new GLatLng(43.020714, -70.883789), new GLatLng(42.642040, -70.675049), new GLatLng(42.358543, -71.015625), new GLatLng(42.261047, -70.784912), new GLatLng(41.934978, -70.543213), new GLatLng(41.828644, -69.938965), new GLatLng(41.672913, -69.960938), new GLatLng(41.401535, -70.268555), new GLatLng(41.335575, -70.751953), new GLatLng(41.590797, -71.015625), new GLatLng(42.049294, -71.499023), new GLatLng(42.057449, -73.432617), new GLatLng(42.795403, -73.344727)],
'CT' : [new GLatLng(42.016651, -71.806641), new GLatLng(41.335575, -71.828613), new GLatLng(41.269550, -72.971191), new GLatLng(40.996483, -73.652344), new GLatLng(42.065605, -73.454590), new GLatLng(42.016651, -71.806641)],
'RI' : [new GLatLng(41.327328, -71.817627), new GLatLng(41.450962, -71.059570), new GLatLng(41.705730, -71.147461), new GLatLng(42.041134, -71.466064), new GLatLng(42.016651, -71.806641), new GLatLng(41.664703, -71.784668), new GLatLng(41.327328, -71.817627)]
}; 
