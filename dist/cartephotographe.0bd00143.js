// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"photographe.json":[function(require,module,exports) {
module.exports = {
  "photographers": [{
    "name": "Mimi Keel",
    "id": 243,
    "city": "London",
    "country": "UK",
    "tags": ["portrait", "events", "travel", "animals"],
    "tagline": "Voir le beau dans le quotidien",
    "price": 400,
    "portrait": "https://res.cloudinary.com/dx8au0kkp/image/upload/v1633910045/image%20fisheye/Portrait_Nora_swjsma.jpg",
    "alt": "Mimi Keel portrait",
    "pages": "/page/mimikeel.html"
  }, {
    "name": "Ellie-Rose Wilkens",
    "id": 930,
    "city": "Paris",
    "country": "France",
    "tags": ["sport", "architecture"],
    "tagline": "Capturer des compositions complexes",
    "price": 250,
    "portrait": "https://res.cloudinary.com/dx8au0kkp/image/upload/v1633914194/image%20fisheye/Architecture_Horseshoe_dxwmlf.jpg",
    "alt": "Ellie-Rose Wilkens portrait",
    "pages": "/page/elierosewilkens.html"
  }, {
    "name": "Tracy Galindo",
    "id": 82,
    "city": "Montreal",
    "country": "Canada",
    "tags": ["art", "fashion", "events"],
    "tagline": "Photographe freelance",
    "price": 500,
    "portrait": "https://res.cloudinary.com/dx8au0kkp/image/upload/v1633915081/image%20fisheye/Fashion_Urban_Jungle_sum47n.jpg",
    "alt": "Tracy Galindo portrait",
    "pages": "/page/tracygalindo.html"
  }, {
    "name": "Nabeel Bradford",
    "id": 527,
    "city": "Mexico City",
    "country": "Mexico",
    "tags": ["travel", "portrait"],
    "tagline": "Toujours aller de l'avant",
    "price": 350,
    "portrait": "https://res.cloudinary.com/dx8au0kkp/image/upload/v1633915700/image%20fisheye/Travel_Outdoor_Baths_rsdild.jpg",
    "alt": "Nabeel Bradford portrait",
    "pages": "/page/nabeelbradford.html"
  }, {
    "name": "Rhode Dubois",
    "id": 925,
    "city": "Barcelona",
    "country": "Spain",
    "tags": ["sport", "fashion", "events", "animals"],
    "tagline": "Je crée des souvenirs",
    "price": 275,
    "portrait": "https://res.cloudinary.com/dx8au0kkp/image/upload/v1633915914/image%20fisheye/Fashion_Melody_Red_on_Stripes_fwqjmk.jpg",
    "alt": "Rhode Dubois portrait",
    "pages": "/page/rhodedubois.html"
  }, {
    "name": "Marcel Nikolic",
    "id": 195,
    "city": "Berlin",
    "country": "Germany",
    "tags": ["travel", "architecture"],
    "tagline": "Toujours à la recherche de LA photo",
    "price": 300,
    "portrait": "https://res.cloudinary.com/dx8au0kkp/image/upload/v1633916130/image%20fisheye/Travel_Tower_xpigua.jpg",
    "alt": "Marcel Nikolic portrait",
    "pages": "/page/marcelnikolic.html"
  }],
  "media": [{
    "id": 342550,
    "photographerId": 82,
    "image": "https://res.cloudinary.com/dx8au0kkp/image/upload/v1634014781/image%20fisheye/Fashion_Yellow_Beach_joobxs.jpg",
    "alt": "Fashion Yellow Beach",
    "tags": ["fashion"],
    "likes": 62,
    "date": "2011-12-08",
    "price": 55,
    "photoName": "Yellow Beach"
  }, {
    "id": 8520927,
    "photographerId": 82,
    "image": "https://res.cloudinary.com/dx8au0kkp/image/upload/v1634014781/image%20fisheye/Fashion_Urban_Jungle_eds9g2.jpg",
    "alt": "Fashion Urban Jungle",
    "tags": ["fashion"],
    "likes": 11,
    "date": "2011-11-06",
    "price": 55,
    "photoName": "Urban Jungle"
  }, {
    "id": 9025895,
    "photographerId": 82,
    "image": "https://res.cloudinary.com/dx8au0kkp/image/upload/v1634014782/image%20fisheye/Fashion_Pattern_on_Pattern_irddek.jpg",
    "alt": "Fashion Pattern on Pattern",
    "tags": ["fashion"],
    "likes": 72,
    "date": "2013-08-12",
    "price": 55,
    "photoName": "Pattern on Pattern"
  }, {
    "id": 9275938,
    "photographerId": 82,
    "image": "https://res.cloudinary.com/dx8au0kkp/image/upload/v1634014782/image%20fisheye/Event_WeddingGazebo_agaeuy.jpg",
    "alt": "Event WeddingGazebo",
    "tags": ["events"],
    "likes": 69,
    "date": "2018-02-22",
    "price": 55,
    "photoName": "Wedding Gazebo"
  }, {
    "id": 2053494,
    "photographerId": 82,
    "image": "https://res.cloudinary.com/dx8au0kkp/image/upload/v1634014781/image%20fisheye/Event_Sparklers_bwyl9c.jpg",
    "alt": "Event Sparklers",
    "tags": ["events"],
    "likes": 2,
    "date": "2020-05-25",
    "price": 55,
    "photoName": "Sparklers"
  }, {
    "id": 7324238,
    "photographerId": 82,
    "image": "https://res.cloudinary.com/dx8au0kkp/image/upload/v1634014782/image%20fisheye/Event_18thAnniversary_vyol0l.jpg",
    "alt": "Event 18thAnniversary",
    "tags": ["events"],
    "likes": 33,
    "date": "2019-06-12",
    "price": 55,
    "photoName": "18th Anniversary"
  }, {
    "id": 8328953,
    "photographerId": 82,
    "video": "https://res.cloudinary.com/dx8au0kkp/video/upload/v1634014783/image%20fisheye/Art_Wooden_Horse_Sculpture_ggiq7i.mp4",
    "alt": "Art Wooden Horse Sculpture",
    "tags": ["art"],
    "likes": 24,
    "date": "2011-12-08",
    "price": 100,
    "photoName": "Horse Sculpture"
  }, {
    "id": 7502053,
    "photographerId": 82,
    "image": "https://res.cloudinary.com/dx8au0kkp/image/upload/v1634014781/image%20fisheye/Art_Triangle_Man_iovh70.jpg",
    "alt": "Art Triangle Man",
    "tags": ["art"],
    "likes": 88,
    "date": "2007-05-07",
    "price": 55,
    "photoName": "Triangle Man"
  }, {
    "id": 8523492,
    "photographerId": 82,
    "image": "https://res.cloudinary.com/dx8au0kkp/image/upload/v1634014781/image%20fisheye/Art_Purple_light_zrntdb.jpg",
    "alt": "Art Purple light",
    "tags": ["art"],
    "likes": 24,
    "date": "2018-05-05",
    "price": 55,
    "photoName": "Purple light"
  }, {
    "id": 75902334,
    "photographerId": 82,
    "image": "https://res.cloudinary.com/dx8au0kkp/image/upload/v1634014781/image%20fisheye/Art_Mine_zuicvn.jpg",
    "alt": "Art Mine",
    "tags": ["art"],
    "likes": 75,
    "date": "2019-11-25",
    "price": 55,
    "photoName": "Mine"
  }, {
    "id": 73852953,
    "photographerId": 925,
    "image": "https://res.cloudinary.com/dx8au0kkp/image/upload/v1634051443/image%20fisheye/Sport_2000_with_8_qvet0s.jpg",
    "alt": "Sport 2000 with 8",
    "tags": ["sport"],
    "likes": 52,
    "date": "2013-02-30",
    "price": 70,
    "photoName": "2000 with 8"
  }, {
    "id": 92758372,
    "photographerId": 925,
    "image": "https://res.cloudinary.com/dx8au0kkp/image/upload/v1634051443/image%20fisheye/Fashion_Wings_zf1bwd.jpg",
    "alt": "Fashion Wings",
    "tags": ["fashion"],
    "likes": 58,
    "date": "2018-07-17",
    "price": 70,
    "photoName": "Wings"
  }, {
    "id": 32958383,
    "photographerId": 925,
    "image": "https://res.cloudinary.com/dx8au0kkp/image/upload/v1634051444/image%20fisheye/Fashion_Melody_Red_on_Stripes_fb5vhh.jpg",
    "alt": "Fashion Melody Red on Stripes",
    "tags": ["fashion"],
    "likes": 11,
    "date": "2019-08-12",
    "price": 70,
    "photoName": "Red on Stripes"
  }, {
    "id": 928587383,
    "photographerId": 925,
    "image": "https://res.cloudinary.com/dx8au0kkp/image/upload/v1634051443/image%20fisheye/Event_VentureConference_cltmsb.jpg",
    "alt": "Event Venture Conference",
    "tags": ["events"],
    "likes": 2,
    "date": "2019-01-02",
    "price": 70,
    "photoName": "Venture Conference"
  }, {
    "id": 725639493,
    "photographerId": 925,
    "image": "https://res.cloudinary.com/dx8au0kkp/image/upload/v1634051444/image%20fisheye/Sport_Butterfly_ltqmut.jpg",
    "alt": "Sport Butterfly",
    "tags": ["events"],
    "likes": 3,
    "date": "2019-05-20",
    "price": 70,
    "photoName": "Butterfly"
  }, {
    "id": 23394384,
    "photographerId": 925,
    "image": "https://res.cloudinary.com/dx8au0kkp/image/upload/v1634051443/image%20fisheye/Event_KeyboardCheck_shc0al.jpg",
    "alt": "Event Keyboard Check",
    "tags": ["events"],
    "likes": 52,
    "date": "2019-07-18",
    "price": 70,
    "photoName": "Keyboard Check"
  }, {
    "id": 87367293,
    "photographerId": 925,
    "image": "https://res.cloudinary.com/dx8au0kkp/image/upload/v1634051443/image%20fisheye/Event_Emcee_vvhoqt.jpg",
    "alt": "Event Emcee",
    "tags": ["events"],
    "likes": 23,
    "date": "2018-02-22",
    "price": 70,
    "photoName": "Emcee"
  }, {
    "id": 593834784,
    "photographerId": 925,
    "image": "https://res.cloudinary.com/dx8au0kkp/image/upload/v1634051443/image%20fisheye/Animals_Majesty_yx0exg.jpg",
    "alt": "Animals Majesty",
    "tags": ["animals"],
    "likes": 52,
    "date": "2017-03-13",
    "price": 70,
    "photoName": "Majesty"
  }, {
    "id": 83958935,
    "photographerId": 925,
    "video": "https://res.cloudinary.com/dx8au0kkp/video/upload/v1634051445/image%20fisheye/Animals_Puppiness_mxf2tv.mp4",
    "alt": "Animals Puppiness",
    "tags": ["animals"],
    "likes": 52,
    "date": "2016-06-12",
    "price": 70,
    "photoName": "Puppiness"
  }, {
    "id": 394583434,
    "photographerId": 527,
    "video": "https://res.cloudinary.com/dx8au0kkp/video/upload/v1634015702/image%20fisheye/Travel_Rock_Mountains_unvj9c.mp4",
    "alt": "Travel Rock Mountains",
    "tags": ["travel"],
    "likes": 23,
    "date": "2017-03-18",
    "price": 45,
    "photoName": "Rock Mountains"
  }, {
    "id": 343423425,
    "photographerId": 527,
    "image": "https://res.cloudinary.com/dx8au0kkp/image/upload/v1634015700/image%20fisheye/Travel_Outdoor_Baths_t9gjch.jpg",
    "alt": "Travel Outdoor Baths",
    "tags": ["travel"],
    "likes": 101,
    "date": "2017-04-03",
    "price": 45,
    "photoName": "Outdoor Baths"
  }, {
    "id": 73434243,
    "photographerId": 527,
    "image": "https://res.cloudinary.com/dx8au0kkp/image/upload/v1634015701/image%20fisheye/Travel_Road_into_Hill_luwcel.jpg",
    "alt": "Travel Road into Hill",
    "tags": ["travel"],
    "likes": 99,
    "date": "2018-04-30",
    "price": 45,
    "photoName": "Road into Hill"
  }, {
    "id": 23425523,
    "photographerId": 527,
    "image": "https://res.cloudinary.com/dx8au0kkp/image/upload/v1634015702/image%20fisheye/Travel_Bridge_into_Forest_gtjkcm.jpg",
    "alt": "Travel Bridge into Forest",
    "tags": ["travel"],
    "likes": 34,
    "date": "2016-04-05",
    "price": 45,
    "photoName": "Bridge"
  }, {
    "id": 23134513,
    "photographerId": 527,
    "image": "https://res.cloudinary.com/dx8au0kkp/image/upload/v1634015700/image%20fisheye/Travel_Boat_Wanderer_ywc5yv.jpg",
    "alt": "Travel Boat Wanderer",
    "tags": ["travel"],
    "likes": 23,
    "date": "2017-03-18",
    "price": 45,
    "photoName": "Boat Wanderer"
  }, {
    "id": 92352352,
    "photographerId": 527,
    "image": "https://res.cloudinary.com/dx8au0kkp/image/upload/v1634015701/image%20fisheye/Portrait_Sunkissed_tcswxv.jpg",
    "alt": "Portrait Sunkissed",
    "tags": ["portrait"],
    "likes": 66,
    "date": "2018-05-24",
    "price": 45,
    "photoName": "Sunkissed"
  }, {
    "id": 34513453,
    "photographerId": 527,
    "image": "https://res.cloudinary.com/dx8au0kkp/image/upload/v1634015699/image%20fisheye/Portrait_Shaw_e1mbgp.jpg",
    "alt": "Portrait Shaw",
    "tags": ["portait"],
    "likes": 52,
    "date": "2017-04-21",
    "price": 45,
    "photoName": "Shaw"
  }, {
    "id": 23523533,
    "photographerId": 527,
    "image": "https://res.cloudinary.com/dx8au0kkp/image/upload/v1634015700/image%20fisheye/Portrait_Alexandra_y3j1cm.jpg",
    "alt": "Portrait Alexandra",
    "tags": ["portait"],
    "likes": 95,
    "date": "2018-11-02",
    "price": 45,
    "photoName": "Alexandra"
  }, {
    "id": 525834234,
    "photographerId": 527,
    "image": "https://res.cloudinary.com/dx8au0kkp/image/upload/v1634015700/image%20fisheye/Portrait_AfternoonBreak_tt3p5o.jpg",
    "alt": "Portrait Afternoon Break",
    "tags": ["portait"],
    "likes": 25,
    "date": "2019-01-02",
    "price": 45,
    "photoName": "Afternoon Break"
  }, {
    "id": 623534343,
    "photographerId": 243,
    "image": "https://res.cloudinary.com/dx8au0kkp/image/upload/v1633997821/image%20fisheye/Travel_Lonesome_bqd4rs.jpg",
    "alt": "Travel Lonesome",
    "tags": ["travel"],
    "likes": 88,
    "date": "2019-02-03",
    "price": 45,
    "photoName": "Lonesome"
  }, {
    "id": 625025343,
    "photographerId": 243,
    "image": "https://res.cloudinary.com/dx8au0kkp/image/upload/v1633998138/image%20fisheye/Travel_HillsideColor_afow6e.jpg",
    "alt": "Travel HillsideColor",
    "tags": ["travel"],
    "likes": 85,
    "date": "2019-04-03",
    "price": 45,
    "photoName": "Hill side Color"
  }, {
    "id": 2525345343,
    "photographerId": 243,
    "image": "https://res.cloudinary.com/dx8au0kkp/image/upload/v1633997993/image%20fisheye/Portrait_Wednesday_pcozqy.jpg",
    "alt": "Portrait Wednesday",
    "tags": ["portait"],
    "likes": 34,
    "date": "2019-04-07",
    "price": 45,
    "photoName": "Wednesday"
  }, {
    "id": 2523434634,
    "photographerId": 243,
    "image": "https://res.cloudinary.com/dx8au0kkp/image/upload/v1633910045/image%20fisheye/Portrait_Nora_swjsma.jpg",
    "alt": "Portrait Nora",
    "tags": ["portait"],
    "likes": 63,
    "date": "2019-04-07",
    "price": 45,
    "photoName": "Nora"
  }, {
    "id": 398847109,
    "photographerId": 243,
    "image": "https://res.cloudinary.com/dx8au0kkp/image/upload/v1633997828/image%20fisheye/Portrait_Background_mi4dqu.jpg",
    "alt": "Portrait Background",
    "tags": ["portait"],
    "likes": 55,
    "date": "2019-06-20",
    "price": 45,
    "photoName": "Background"
  }, {
    "id": 2534342,
    "photographerId": 243,
    "image": "https://res.cloudinary.com/dx8au0kkp/image/upload/v1633997825/image%20fisheye/Event_SeasideWedding_iscjps.jpg",
    "alt": "Event Seaside Wedding",
    "tags": ["events"],
    "likes": 25,
    "date": "2019-06-21",
    "price": 45,
    "photoName": "Seaside Wedding"
  }, {
    "id": 65235234,
    "photographerId": 243,
    "image": "https://res.cloudinary.com/dx8au0kkp/image/upload/v1633997983/image%20fisheye/Event_PintoWedding_lucjjy.jpg",
    "alt": "Event Pinto Wedding",
    "tags": ["events"],
    "likes": 52,
    "date": "2019-06-25",
    "price": 45,
    "photoName": "Pinto Wedding"
  }, {
    "id": 23523434,
    "photographerId": 243,
    "image": "https://res.cloudinary.com/dx8au0kkp/image/upload/v1633998136/image%20fisheye/Event_BenevidesWedding_bsvvne.jpg",
    "alt": "Event Benevides Wedding",
    "tags": ["events"],
    "likes": 77,
    "date": "2019-06-28",
    "price": 45,
    "photoName": "Benevides Wedding"
  }, {
    "id": 5234343,
    "photographerId": 243,
    "video": "medias/Mimi/Animals_Wild_Horses_in_the_mountains.mp4",
    "alt": "Animals Wild Horses in the mountains",
    "tags": ["animals"],
    "likes": 142,
    "date": "2019-08-23",
    "price": 60,
    "photoName": "Wild Horses"
  }, {
    "id": 95234343,
    "photographerId": 243,
    "image": "medias/Mimi/Animals_Rainbow.jpg",
    "alt": "Animals Rainbow",
    "tags": ["animals"],
    "likes": 59,
    "date": "2019-07-02",
    "price": 60,
    "photoName": "Rainbow"
  }, {
    "id": 52343416,
    "photographerId": 195,
    "image": "medias/Marcel/Travel_Tower.jpg",
    "alt": "Travel Tower",
    "tags": ["travel"],
    "likes": 25,
    "date": "2019-04-03",
    "price": 60,
    "photoName": "Tower"
  }, {
    "id": 2523434,
    "photographerId": 195,
    "image": "medias/Marcel/Travel_SunsetonCanals.jpg",
    "alt": "Travel Sunset on Canals",
    "tags": ["travel"],
    "likes": 53,
    "date": "2019-05-06",
    "price": 60,
    "photoName": "Sunset on Canals"
  }, {
    "id": 95293534,
    "photographerId": 195,
    "image": "medias/Marcel/Travel_OpenMountain.jpg",
    "alt": "Travel Open Mountain",
    "tags": ["travel"],
    "likes": 33,
    "date": "2019-05-12",
    "price": 60,
    "photoName": "Open Mountain"
  }, {
    "id": 356234343,
    "photographerId": 195,
    "image": "medias/Marcel/Travel_Bike_and_Stair.jpg",
    "alt": "Travel Bike and Stair",
    "tags": ["travel"],
    "likes": 53,
    "date": "2019-06-20",
    "price": 60,
    "photoName": "Bike and Stair"
  }, {
    "id": 235234343,
    "photographerId": 195,
    "image": "medias/Marcel/Travel _Adventure_Door.jpg",
    "alt": "Travel Adventure Door",
    "tags": ["travel"],
    "likes": 63,
    "date": "2019-06-26",
    "price": 60,
    "photoName": "Adventure Door"
  }, {
    "id": 6234234343,
    "photographerId": 195,
    "image": "medias/Marcel/Architecure_Contrast.jpg",
    "alt": "Architecure Contrast",
    "tags": ["architecture"],
    "likes": 52,
    "date": "2019-06-30",
    "price": 60,
    "photoName": "Contrast"
  }, {
    "id": 6525666253,
    "photographerId": 195,
    "image": "medias/Marcel/Architecture_On_a_hill.jpg",
    "alt": "Architecture On a hill",
    "tags": ["architecture"],
    "likes": 63,
    "date": "2019-07-20",
    "price": 60,
    "photoName": "On a hill"
  }, {
    "id": 98252523433,
    "photographerId": 195,
    "image": "medias/Marcel/Architecture_Dome.jpg",
    "alt": "Architecture Dome",
    "tags": ["architecture"],
    "likes": 88,
    "date": "2020-01-05",
    "price": 60,
    "photoName": "Dome"
  }, {
    "id": 9259398453,
    "photographerId": 195,
    "video": "medias/Marcel/Architecture_coverr_circle_empty_highway_in_buenos_aires_587740985637.mp4",
    "alt": "Architecture cover circle empty highway in buenos aires",
    "tags": ["architecture"],
    "likes": 57,
    "date": "2020-01-20",
    "price": 65,
    "photoName": "Buenos aires"
  }, {
    "id": 3523523534,
    "photographerId": 195,
    "image": "medias/Marcel/Architecture_Corner_Room.jpg",
    "alt": "Architecture Corner Room",
    "tags": ["architecture"],
    "likes": 54,
    "date": "2020-05-05",
    "price": 60,
    "photoName": "Corner Room"
  }, {
    "id": 952343423,
    "photographerId": 930,
    "video": "medias/Ellie-Rose/Sport_Tricks_in_the_air.mp4",
    "alt": "Sport Tricks in the air",
    "tags": ["sport"],
    "likes": 150,
    "date": "2018-02-30",
    "price": 70,
    "photoName": "Tricks in air"
  }, {
    "id": 235234343,
    "photographerId": 930,
    "image": "medias/Ellie-Rose/Sport_Next_Hold.jpg",
    "alt": "Sport Next Hold",
    "tags": ["sport"],
    "likes": 101,
    "date": "2018-03-05",
    "price": 65,
    "photoName": "Next Hold"
  }, {
    "id": 235343222,
    "photographerId": 930,
    "image": "medias/Ellie-Rose/sport_water_tunnel.jpg",
    "alt": "sport water tunnel",
    "tags": ["sport"],
    "likes": 103,
    "date": "2018-03-10",
    "price": 70,
    "photoName": "water tunnel"
  }, {
    "id": 7775342343,
    "photographerId": 930,
    "image": "medias/Ellie-Rose/Sport_Sky_Cross.jpg",
    "alt": "Sport Sky Cross",
    "tags": ["sport"],
    "likes": 77,
    "date": "2018-04-16",
    "price": 50,
    "photoName": "Sky Cross"
  }, {
    "id": 9253445784,
    "photographerId": 930,
    "image": "medias/Ellie-Rose/Sport_Race_End.jpg",
    "alt": "Sport Race End",
    "tags": ["sport"],
    "likes": 88,
    "date": "2018-04-22",
    "price": 65,
    "photoName": "Race End"
  }, {
    "id": 22299394,
    "photographerId": 930,
    "image": "medias/Ellie-Rose/Sport_Jump.jpg",
    "alt": "Sport Jump",
    "tags": ["sport"],
    "likes": 95,
    "date": "2018-04-27",
    "price": 70,
    "photoName": "Jump"
  }, {
    "id": 3452342633,
    "photographerId": 930,
    "image": "medias/Ellie-Rose/Architecture_White_Light.jpg",
    "alt": "Architecture White Light",
    "tags": ["architecture"],
    "likes": 52,
    "date": "2018-05-03",
    "price": 75,
    "photoName": "White Light"
  }, {
    "id": 939234243,
    "photographerId": 930,
    "image": "medias/Ellie-Rose/Architecture_Water_on_Modern.jpg",
    "alt": "Architecture Water on Modern",
    "tags": ["architecture"],
    "likes": 55,
    "date": "2018-05-10",
    "price": 72,
    "photoName": "Water Modern"
  }, {
    "id": 222959233,
    "photographerId": 930,
    "image": "medias/Ellie-Rose/Architecture_Horseshoe.jpg",
    "alt": "Architecture Horseshoe",
    "tags": ["architecture"],
    "likes": 85,
    "date": "2018-05-15",
    "price": 71,
    "photoName": "Horseshoe"
  }, {
    "id": 965933434,
    "photographerId": 930,
    "image": "medias/Ellie-Rose/Architecture_Cross_Bar.jpg",
    "alt": "Architecture Cross Bar",
    "tags": ["architecture"],
    "likes": 66,
    "date": "2018-05-20",
    "price": 58,
    "photoName": "Cross Bar"
  }, {
    "id": 777723343,
    "photographerId": 930,
    "image": "medias/Ellie-Rose/Architecture_Connected_Curves.jpg",
    "alt": "Architecture Connected Curves",
    "tags": ["architecture"],
    "likes": 79,
    "date": "2018-05-21",
    "price": 80,
    "photoName": "Connected Curves"
  }]
};
},{}],"cartephotographe.js":[function(require,module,exports) {
"use strict";

var _photographe = _interopRequireDefault(require("./photographe.json"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

// liens json et js
var photographes = _photographe.default.photographers;
console.log(photographes); //dom

var photographelist = document.querySelector("#hierarchie");

var _iterator = _createForOfIteratorHelper(photographes),
    _step;

try {
  for (_iterator.s(); !(_step = _iterator.n()).done;) {
    var photographe = _step.value;
    // contenant des photographe ----------------------------¤
    var carte = document.createElement("div");
    carte.classList.add("carte"); //lien lightbox image -----------------------------------¤

    var imagelightbox = document.createElement("a");
    imagelightbox.href = "".concat(photographe.pages); //cadre carte ------------------------------------------¤

    var cadrecarte = document.createElement("div");
    cadrecarte.classList.add("photographe"); //image photographe ------------------------------¤

    var image = document.createElement("img");
    image.src = "".concat(photographe.portrait);
    image.classList.add("photographe__img"); //nom et prenom ---------------------------------¤

    var nom = document.createElement("h2");
    nom.classList.add("photographe__nom");
    nom.innerText = photographe.name; //lieux -----------------------------------------¤

    var lieux = document.createElement("p");
    lieux.classList.add("photographe__localisation");
    lieux.innerText = photographe.city; //slogan ---------------------------------------¤

    var slogan = document.createElement("p");
    slogan.classList.add("photographe__taff");
    slogan.innerText = photographe.tagline; //prix ----------------------------------------¤

    var prix = document.createElement("p");
    prix.classList.add("photographe__prix");
    prix.innerText = "".concat(photographe.price, "\u20AC/jour"); //tags ----------------------------------------¤

    var tags = document.createElement("div");
    tags.classList.add("photographe__filtre");

    var _iterator2 = _createForOfIteratorHelper(photographe.tags),
        _step2;

    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var tag = _step2.value;
        var tagu = document.createElement("a");
        tagu.innerText = "#".concat(tag);
        tagu.href = "#"; // faire la hiérarchie

        tags.appendChild(tagu);
      } //ajout carte photographe au dom 

    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }

    photographelist.appendChild(carte); // hiérarchie pour affichage

    carte.appendChild(imagelightbox);
    carte.appendChild(cadrecarte);
    carte.appendChild(image);
    carte.appendChild(nom);
    carte.appendChild(lieux);
    carte.appendChild(slogan);
    carte.appendChild(prix);
    carte.appendChild(tags); // hiérarchie des elements hmtl dynamique 
    // a pour lien contient div

    imagelightbox.appendChild(cadrecarte); // div contenant carte photographe ..

    cadrecarte.appendChild(image);
    cadrecarte.appendChild(nom);
    cadrecarte.appendChild(lieux);
    cadrecarte.appendChild(slogan);
    cadrecarte.appendChild(prix);
    cadrecarte.appendChild(tags);
  }
} catch (err) {
  _iterator.e(err);
} finally {
  _iterator.f();
}
},{"./photographe.json":"photographe.json"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "53276" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","cartephotographe.js"], null)
//# sourceMappingURL=/cartephotographe.0bd00143.js.map