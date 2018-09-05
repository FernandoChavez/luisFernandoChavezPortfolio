$(document).ready(function(){
  //PORTFOLIO CONTAINER
  //Code parallax en las pestañas del portfolio
  $( ".filter" ).click(function() {
    setTimeout(function(){
      $(window).trigger('resize.px.parallax');
    }, 700);
  });


  const project = function (name, category, kindProject, modalId, date, urlImageMini, urlImage, urlLogoProject, urlProject, description) {
    this.name = name;
    this.category = category;
    this.kindProject = kindProject;
    this.modalId = modalId;
    this.date = date;
    this.urlImageMini = urlImageMini;
    this.urlImage = urlImage;
    this.urlLogoProject = urlLogoProject;
    this.urlProject = urlProject;
    this.description = description;
  }

  const bicentenario = new project( "Instituto Bicentenario Web Site", "Web App", "web", "bicentenarioArea", "April 2018", "img/portfolios/web/bicentenario.jpg", "img/portfolios/normal/bicentenario.JPG", "img/logos/html.png", "http://www.bicentenario.edu.mx/",
     "<p class='content_aboutMe'>Web page about Instituto Bicentenario. An School located in Tepic, Nayarit Where offert good plans for concluded High School "+
    "with the online and faces options. <br><br>"+
     "-Bootstrap 4<br>"+
     "-PHP in backend<br>"+
     "-Javascript ES6 in Frontend<br>"+
     "-Jquery Vlidator<br>"+
     "-Git with github<br><br><br></p>");


  const budgetCalculator = new project( "Budge Calculator", "Web App", "web", "budgeCalculatorArea", "January 2018", "img/portfolios/web/budge.jpg", "img/portfolios/normal/budge.jpg", "img/logos/html.png", "",
     "<p class='content_aboutMe'>Javascript Project than let us to calculate budget in real time: Adding incomes and adding expenses. "+
                "The total percentage and the total in money. This project was a project practice where there was programed using next topics: <br><br>"+
                "-Objects<br>"+
                "-Functions<br>"+
                "-Modules<br>"+
                "-Closure<br>"+
                "-Events<br><br><br></p>");


  const diceGame = new project( "Rockwell", "Web App", "web", "diceGameArea", "February 2018", "img/portfolios/web/dice.jpg", "img/portfolios/normal/dice.PNG", "img/logos/html.png", "",
  "This is a game with dice to 2 players. Inthe the game be the rules. The personal project was focus directly with javascript");


  const rockwell = new project( "Rockwell", "Web Support", "web", "rockwellArea", "January 2016", "img/portfolios/web/rockwell.jpg", "img/portfolios/normal/rockwell.jpg", "img/logos/html.png", "",
     "<p class='content_aboutMe'> Project from Rockwell Automation Enterprise whose responsability are of java support L2. Another of my main responsabilities are the solution of diferents issues, requested their throught to  ticket administrator called 'Service Now' and comunicate ofte with people with people from differents part of the world.<br><br></p>");


  const heroVsEmperor = new project( "Hero vs Emperor", "AMV", "video", "herovsemperorArea", "January 2016", "img/portfolios/video/herovsemperor.jpg", "img/portfolios/normal/heroVsEmperor.jpg", "img/logos/youtube.png", "https://www.youtube.com/watch?v=5VAyn6PPVtM",
    "<p class='content_aboutMe'>This is an AMV from One Punch Man anime, described the last saga of the Season 1: The Lord Boros Saga. The intention of this AMV isrelate the saga with a trailer style, with english and spanish subtitles. <br><br>"+
         "Anime: One Punch Man<br>"+
         "Song: To glory - Two Step from Hell<br>"+
         "Software: Sony Vegas & Adobe Photoshop<br>"+
         "<br></p>");


  const lofmaiv = new project( "Lord of the Monado Arts IV", "Combo/Highlight Video", "video", "lotmaivArea", "September 2016", "img/portfolios/video/LOTMAIV.jpg", "img/portfolios/normal/LOTMAIV.jpg", "img/logos/youtube.png", "https://www.youtube.com/watch?v=FSlrPIPDxMo",
    "<p class='content_aboutMe'>This is the fourth part of Lord od the Monado Arts Saga, a combo/highlight video with Shulk; character from 'Xenoblade Chronicles' in the game 'Super Smash Bros for WiiU' Here be a small"+
            "compilation where now were added good moves in stream and some techs like: wavebounce and b monado reverse. <br><br>"+
            "Game: Super Smash Bros for Wii U<br>"+
            "Music: Uncontrollable (Tyrant Theme) -feat. Mika Kobayashi, mpi - Xenoblade Chronicles X OST; Sono chi no sadame - Jojo´s Bizarre Adventure OP 1<br>"+
            "Software: Sony Vegas & Adobe Photoshop<br>"+
            "<br><br></p>");


  const hestiags = new project( "HestiaGS", "Web Site", "web", "hestiagsArea", "September 2016 - March 2017", "img/portfolios/web/hestiags.jpg", "img/portfolios/normal/hestiags.jpg", "img/logos/html.png", "http://www.credixthrust.com/Zeus/Hestia/Aspen/Carlota",
    "<p class='content_aboutMe'>Web platform that manage, buy and rent of immovable of a condominium in Queretaro.<br><br>"+
            "-Java programming in Web Area (Servlets, JSP)<br>"+
            "-Creation of pdfs documents using itext library and Java<br>"+
            "-Programming using client lenguages (Javascript), Cascading Style Sheets (CSS3) and plugins (Jquery, Bootstrap, validator, REcaptcha, datepicker bootstrap, Notify)<br>"+
            "-Creation of Database queries using a SGBD (PostgreSQL)<br>"+
            "-Use of ATLASSIAN Technologies (Jira, Bitbucket)<br>"+
            "-Using Git with Bitbucket<br>"+
            "-Test of Webs plataforms with support of Imacro tool<br>"+
         "</p>");


  const lotmaiii = new project( "Lord of the Monado Arts III", "Combo/Highlight Video", "video", "lotmaiiiArea", "February 2016", "img/portfolios/video/LOTMAIII.jpg", "img/portfolios/normal/LOTMAIII.jpg", "img/logos/youtube.png",
     "https://www.youtube.com/watch?v=dheUuxLEhcA",
    "<p class='content_aboutMe'>This is the third part of Lord od the Monado Arts Saga, a combo/higlhlight video with Shulk; character from 'Xenoblade Chronicles' in the game 'Super Smash Bros for WiiU' Here be a small"+
            "compilation. Here be more of good moves with a rhythmic editing. <br><br>"+
         "Game: Super Smash Bros for Wii U<br>"+
         "Music: Under Night In-Birth OST: Scraper Sky High(Hyde's Theme); Mono X / Xenoblade Chronicles X<br>"+
         "Software: Sony Vegas, Adobe After Effects & Adobe Photoshop<br>"+
         "<br><br></p>");


  const fuerzadonloge = new project( "FuerzaDON logo", "Logo", "logos", "fuerzadonArea", "April 2015", "img/portfolios/logo/FuerzaDONLoge.jpg", "img/portfolios/normal/profile1.png", "img/logos/editor.png", "",
    "<p class='content_aboutMe'>This is the first logo that represented tothe Super Smash Bros Player 'FuerzaDON', showing the Shulk´s silhouette"+
            "like his main symbol. <br><br>"+
          "</p>");


  const demetergs = new project( "DemeterGS", "Web Plarform", "web", "demetergsArea", "Oct 2015 – May 2016", "img/portfolios/web/demeter.jpg", "img/portfolios/normal/Demeter.jpg", "img/logos/html.png", "",
    "<p class='content_aboutMe'>Web Platform for 'FIRA' costumer that control the management, buy and sell of cane. Here were used java with servlets in "+
                "backend and javascrip ES5 in frontEnd</p>");


  const lotmaii = new project( "Lord of the Monado Arts II", "Combo/Highlight Video", "video", "lotmaiiArea", "November 2015", "img/portfolios/video/LOTMAII.jpg", "img/portfolios/normal/LOTMAII.jpg", "img/logos/youtube.png", "https://www.youtube.com/watch?v=UPiInShnLiA",
    "<p class='content_aboutMe'>This is the second part of Lord od the Monado Arts Saga, a combo/higlhlight video with Shulk; character from 'Xenoblade Chronicles' in the game 'Super Smash Bros for WiiU' Here be a small"+
            "compilation.<br><br>"+
         "Game: Super Smash Bros for Wii U<br>"+
         "Music: Mechanical Rhythm (Xenoblade Chronicles) / GaMetal; Hero - One Punch Man OP<br>"+
         "Software: Sony Vegas, Adobe After Effects & Adobe Photoshop<br>"+
         "</p>");


  const telecable = new project( "Telecable Site", "Web Site", "web", "telecableArea", "April 2015", "img/portfolios/web/telecable.jpg", "img/portfolios/normal/telecable.jpg", "img/logos/html.png", "http://www.telecablelzc.com.mx/",
    "<p class='content_aboutMe'>Make a Web Site for Telecable Lzc, a local TV and Internet Company, showing his catalog channels and Internet packages, with a streaming section of Nuestravision Channel."+
            "This was made with the support of the Content Management System “WordPress” and “Adobe Photoshop”.<br><br></p>");


  const lotma = new project( "Lord of the Monado Arts", "Combo/Highlight video", "video", "lotmaArea", "July 2015", "img/portfolios/video/LOTMA.jpg", "img/portfolios/normal/LOTMAI.jpg", "img/logos/youtube.png", "https://www.youtube.com/watch?v=W20eL54_gBk",
    "<p class='content_aboutMe'>This is the First part of Lord od the Monado Arts Saga, a combo/higlhlight video with Shulk; character from 'Xenoblade Chronicles' in the game 'Super Smash Bros for WiiU' Here be a small"+
            "compilation. This video is the most long in duration because was made for 1 year of good moves recordings <br><br>"+
         "Game: Super Smash Bros for Wii U<br>"+
         "Music: Disciple Month / Lord of the Elements - DjtheSdotcom<br>"+
         "Software: Sony Vegas, Adobe After Effects & Adobe Photoshop<br>"+
         "<br><br></p>");


  const oky = new project( "Oky", "Tutorial Video", "video", "okyArea", "April 2015", "img/portfolios/video/OKY.jpg", "img/portfolios/normal/oky.png", "img/logos/youtube.png", "",
    "<p class='content_aboutMe'>This is a tutorial about how one can to play this app for android. <br><br>"+
         "Software: Sony Vegas & Adobe Photoshop<br>"+
         "<br><br></p>");

  const myProjects = {bicentenario, budgetCalculator, diceGame, rockwell, heroVsEmperor, lofmaiv, hestiags, lotmaiii, fuerzadonloge, demetergs, lotmaii, telecable, lotma, oky};

  $.ajax({
      async:false,
      cache:false,
      success:  function(respuesta){
        //Porfolio Mini Banners
        for( var index in myProjects ){
          $("#portfoliolist").append(
            "<div data-toggle='modal' data-target='#"+myProjects[index].modalId+"' class='portfolio "+myProjects[index].kindProject+" mix_all' data-cat='"+myProjects[index].kindProject+"' style=' display: inline-block; opacity: 1;'>"+
              "<div class='portfolio-wrapper box_portfolio'>"+
                "<img src='"+myProjects[index].urlImageMini+"' alt='' />"+
                "<div class='label'>"+
                  "<div class='label-text'>"+
                    "<a class='text-title'>"+myProjects[index].name+"</a>"+
                    "<span class='text-category'>"+myProjects[index].category+"</span>"+
                  "</div>"+
                  "<div class='label-bg'></div>"+
                "</div>"+
              "</div>"+
            "</div>"
          );

          let linkProject;
          if(myProjects[index].urlProject==""){
            linkProject = "<i class='fa fa-link fa-lg-5' aria-hidden='true'></i><span>:  Private or not available</span><br>";
          }
          else{
            linkProject = "<i class='fa fa-link fa-lg-5' aria-hidden='true'></i><span> :<a href='"+myProjects[index].urlProject+"' target='_blank'>  Go to the Project</a></span><br>";
          }
          //Portfolio Modals
          $("#portfolioModals").append(
            "<div class='modal fade' id='"+myProjects[index].modalId+"' tabindex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'>"+
              "<div class='modal-dialog modal-lg'>"+
                "<div class='modal-content contactBackground'>"+
                  "<div class='modal-header headerModalPortfolio'>"+
                    "<div class='imageMonadoArt'><img src='"+myProjects[index].urlLogoProject+"' width='85' height='85' class='d-inline-block align-top'></div>"+
                    "<h3 class='modal-title titleModalSmash' id='exampleModalLabel'>"+myProjects[index].name+"</h3>"+
                    "<i class='fa fa-calendar fa-lg-5' aria-hidden='true'></i><span> :  "+myProjects[index].date+"</span><br>"+
                    linkProject+
                  "</div>"+
                  "<div class='modal-body imageContainer'>"+
                    "<div><img class='img-responsive imageCenter' src='"+myProjects[index].urlImage+"' alt='Oky'></div>"+
                    "<br>"+
                    "<div class='information_project'>"+
                      "<p class='content_aboutMe'>"+myProjects[index].description+""+
                     "<br><br></p>"+
                    "</div>"+
                    "<br>"+
                    "<button type='button' class='btn btn-primary' data-dismiss='modal'>Close</button>"+
                  "</div>"+
                "</div>"+
              "</div>"+
            "</div>"
          );
        }

        //Animation scrollrevealAnimations
        window.sr = ScrollReveal();
        sr.reveal('.box_portfolio', {  duration: 1000 }, 80);

        //Animation hover portfolio
        $(function () {
         var filterList = {
           init: function () {

             // MixItUp plugin
             // http://mixitup.io
             $('#portfoliolist').mixitup({
               targetSelector: '.portfolio',
               filterSelector: '.filter',
               effects: ['fade'],
               easing: 'snap',
               // call the hover effect
               onMixEnd: filterList.hoverEffect()
             });
           },
           hoverEffect: function () {
             // Simple parallax effect
             $('#portfoliolist .portfolio').hover(
               function () {
                 $(this).find('.label').stop().animate({bottom: 0}, 200, 'easeOutQuad');
                 $(this).find('img').stop().animate({top: -30}, 500, 'easeOutQuad');
               },
               function () {
                 $(this).find('.label').stop().animate({bottom: -40}, 200, 'easeInQuad');
                 $(this).find('img').stop().animate({top: 0}, 300, 'easeOutQuad');
               }
             );
           }
         };
         // Run the show!
         filterList.init();
       });
      }
  });


  //NOTABLE SHULK PLAYERS PICTURES
  const player = function (nick, monadoArt, modalId,  urlImage) {
    this.nick = nick;
    this.monadoArt= monadoArt;
    this.modalId=modalId;
    this.urlImage=urlImage;
  }

  const arts = ["img/logos/jumpLoge.png", "img/logos/speedLoge.png", "img/logos/shieldLoge.png", "img/logos/busterLoge.png", "img/logos/smashLoge.png"];

  const artryuu = new player("Artryuu", arts[0], "bannerArtryuu", "https://i.imgur.com/rYpnLMm.png")
  const catalyst = new player("Catalyst", arts[3], "bannerCatalyst", "https://i.imgur.com/Dum13xu.png")
  const coyors = new player("Coyors", arts[4], "bannerCoyors", "https://i.imgur.com/XSKGVaR.png")
  const darkwolf = new player("Darkwolf", arts[1], "bannerDarkwolf", "https://i.imgur.com/hVqbslO.png")
  const dragonbrain = new player("Dragonbrain", arts[2], "bannerDragonbrain", "https://i.imgur.com/HdyZiaa.png")
  const erico9001 = new player("Erico9001", arts[3], "bannerErico9001", "https://i.imgur.com/BPoFbKD.png")
  const fuerzadon = new player("FuerzaDON", arts[4], "bannerFuerzadon", "https://i.imgur.com/nXjdx9L.png")
  const getshulked = new player("GetShulked", arts[0], "bannerGetShulked", "https://i.imgur.com/iTuKapJ.png")
  const jerm = new player("Jerm", arts[1], "bannerJerm", "https://i.imgur.com/ecqWuH9.png")
  const kome = new player("Kome", arts[2], "bannerKome", "https://i.imgur.com/Mx9DtLo.png")
  const kurage = new player("Kurage", arts[3], "bannerKurage", "https://i.imgur.com/gWne9Rt.png")
  const m = new player("M", arts[1], "bannerM", "https://i.imgur.com/tUdjVQD.png")
  const masonomace = new player("Masonomace", arts[4], "bannerMasonomace", "https://i.imgur.com/pPhTvO5.png")
  const nicko = new player("Nicko", arts[0], "bannerNicko", "https://i.imgur.com/mqMnLQq.png")
  const ow1bbs = new player("Ow1BBs", arts[3], "bannerOw1BBs", "https://i.imgur.com/hwYZqZ5.png")
  const paradigm = new player("Paradimg", arts[1], "bannerParadigm", "https://i.imgur.com/YVwDUvz.png")
  const scarhi = new player("Scarhi", arts[2], "bannerScarhi", "https://i.imgur.com/Q5G8EA8.png")
  const soronie = new player("Soronie", arts[3], "bannerSoronie", "https://i.imgur.com/d6gYgzJ.png")
  const sparknomad = new player("SparkNomad", arts[4], "bannerSparkNomad", "https://i.imgur.com/qNRFAxa.png")
  const tremendodude = new player("Tremendo Dude", arts[0], "bannerTremendoDude", "https://i.imgur.com/gY3E81F.png")
  const tru4 = new player("Tru4", arts[1], "bannerTru4", "https://i.imgur.com/UGHh6cQ.png")
  const xmas = new player("Xmas", arts[2], "bannerXmas", "https://i.imgur.com/X2J9FFe.png")

  var shulkPlayers = { artryuu, catalyst, coyors, darkwolf, dragonbrain, erico9001, fuerzadon, getshulked, jerm, kome, kurage,
    m, masonomace, nicko, ow1bbs,  paradigm, scarhi, soronie, sparknomad, tremendodude, tru4, xmas};


  //Adding banners in notables shulks section
  for( var index in shulkPlayers )
  {
    $("#notableShulks").append("<img class='cardPicture img-fluid' data-toggle='modal' data-target='#"+shulkPlayers[index].modalId+"' alt='"+shulkPlayers[index].nick+"' src='"+shulkPlayers[index].urlImage+"'>");

      // Adding modals for each notable shulk

      $("#bannersNotablesShulks").append(
        "<div class='modal fade' id='"+shulkPlayers[index].modalId+"' tabindex='-1' role='dialog' aria-labelledby='myLargeModalLabel' aria-hidden='true'>"+
          "<div class='modal-dialog modal-lg'>"+
            "<div class='modal-content contactBackground'>"+
              "<div class='modal-header headerModalSmash'>"+
                "<div class='imageMonadoArt'><img src='"+shulkPlayers[index].monadoArt+"' width='100' height='100' class='d-inline-block align-top'></div>"+
                "<h3 class='modal-title titleModalSmash' id='exampleModalLabel'>"+shulkPlayers[index].nick+"</h3>"+
              "</div>"+
              "<div class='modal-body imageContainer'>"+

                "<div class=''><img class='img-responsive imageCenter' src='"+shulkPlayers[index].urlImage+"' alt='picture of a header'></div>"+

                "<br>"+
                "<button type='button' class='btn btn-primary' data-dismiss='modal'>Close</button>"+
              "</div>"+
            "</div>"+
          "</div>"+
        "</div>");
  }



//  FUERZADON PICTURES SECTION


const banner = function (idPicture, urlBanner, author, nickname, urlpicture, monadoArts, email, twitter, urlTwitter, facebook, urlFacebook, urlPage) {
  this.idPicture = idPicture;
  this.urlBanner = urlBanner;
  this.author = author;
  this.nickname = nickname;
  this.urlpicture = urlpicture;
  this.monadoArts = monadoArts;
  this.email = email;
  this.twitter = twitter;
  this.urlTwitter = urlTwitter;
  this.facebook = facebook;
  this.urlFacebook = urlFacebook;
  this.urlPage = urlPage;
}

const fuerzadonBanner1 = new banner( "banner1", "img/FuerzaDON/banner.jpg", "GRECIA HERRERA", "Soulflee", "img/FuerzaDON/banner.jpg", arts[0], "gtgsoulflee@gmail.com", "@soulflee", "https://twitter.com/Soulflee", "", "", "http://soulflee.carbonmade.com")
const fuerzadonBanner2 = new banner( "banner2", "img/FuerzaDON/bannerTrio.jpg", "CINDY", "Cindygraphs", "img/FuerzaDON/trio.jpg", arts[1], "", "", "", "Cindy Craws", "https://www.facebook.com/cindygraphs", "")
const fuerzadonPR1 = new banner( "pr1", "img/FuerzaDON/bannerFuerzaDONPlace.jpg", "MYXO", "", "img/FuerzaDON/fuerzadonPlacing.PNG", arts[2], "", "@NG_Myxo", "https://twitter.com/NG_Myxo", "", "", "http://myxodv.tumblr.com/")
const fuerzadonLogo = new banner( "logo", "img/FuerzaDON/bannerLoge1.jpg", "LUIS FERNANDO CHAVEZ MORALES", "FuerzaDON", "img/FuerzaDON/logoProfile.png", arts[3], "FuerzaDON@hotmail.com", "@TheFuerzaDON", "https://twitter.com/TheFuerzaDON", "", "", "")
const fuerzadonLogo2 = new banner( "logo2", "img/FuerzaDON/logoDON3.jpg", "GRECIA HERRERA", "Soulflee", "img/FuerzaDON/profile2.jpg", arts[4], "gtgsoulflee@gmail.com", "@soulflee", "https://twitter.com/Soulflee", "", "", "http://soulflee.carbonmade.com")

const fuerzadonPictures={fuerzadonBanner1, fuerzadonBanner2, fuerzadonPR1, fuerzadonLogo, fuerzadonLogo2};

  let contBanner=0, slideActive="", indicatorFDONPictures="";
  let facebook="", twitter="", page="", nickname="", email="";

  for(var index in fuerzadonPictures){

    //How many points should to be, depending of among of pictures
    if(contBanner==0){
      slideActive="<div class='item slides active'>";
      indicatorFDONPictures="<li data-target='#bs-carousel' data-slide-to='"+contBanner+++"' class='active'></li>";
    }else{
      slideActive="<div class='item slides'>";
      indicatorFDONPictures="<li data-target='#bs-carousel' data-slide-to='"+contBanner+++"'></li>";
    }

    //Add pointer
    $("#indicatorFDONPictures").append(
      indicatorFDONPictures
    );

    //Add picture
    $("#bannerFuerzaDONPictures").append(
      slideActive+
        "<a href='#' data-toggle='modal' data-target='#"+fuerzadonPictures[index].idPicture+"'><img class='img-fluid' src='"+fuerzadonPictures[index].urlBanner+"' alt='picture of a header'></a>"+
      "</div>"
    );

    facebook="";
    twitter="";
    page="";
    email="";
    nickname="";

    if(fuerzadonPictures[index].facebook!=""){
      facebook= "<i class='fa fa-facebook fa-lg' aria-hidden='true'></i><span> :  <a href='"+fuerzadonPictures[index].urlFacebook+"' target='_blank'>"+fuerzadonPictures[index].facebook+"</a></span><br>";
    }

    if(fuerzadonPictures[index].twitter!=""){
      twitter= "<i class='fa fa-twitter fa-lg' aria-hidden='true'></i><span> :  <a href='"+fuerzadonPictures[index].urlTwitter+"' target='_blank'>"+fuerzadonPictures[index].twitter+"</a></span><br>";
    }

    if(fuerzadonPictures[index].urlPage!=""){
      page= "<i class='fa fa-globe fa-lg' aria-hidden='true'></i><span> :  <a href='"+fuerzadonPictures[index].urlPage+"' target='_blank'>Web Page</a></span><br>";
    }

    if(fuerzadonPictures[index].email!=""){
      email="<i class='fa fa-envelope fa-lg' aria-hidden='true'></i><span> :  "+fuerzadonPictures[index].email+"</span><br>";
    }

    if(fuerzadonPictures[index].nickname!=""){
      nickname= "<i class='fa fa-user fa-lg' aria-hidden='true'></i><span> :  "+fuerzadonPictures[index].nickname+"</span><br>";
    }


    $("#modalsBanners").append(
      "<div class='modal fade' id='"+fuerzadonPictures[index].idPicture+"' tabindex='-1' role='dialog' aria-labelledby='myLargeModalLabel' aria-hidden='true'>"+
        "<div class='modal-dialog modal-lg'>"+
          "<div class='modal-content contactBackground'>"+
            "<div class='modal-header headerModalSmash'>"+
              "<div class='imageMonadoArt'><img src='img/logos/speedLoge.png' width='100' height='100' class='d-inline-block align-top' alt=''></div>"+
                "<h3 class='modal-title titleModalSmash' id='exampleModalLabel'>"+fuerzadonPictures[index].author+"</h3>"+
                nickname+
                twitter+
                facebook+
                email+
                page+
            "</div>"+
            "<div class='modal-body imageContainer'>"+
              "<div class=''><img class='img-responsive imageCenter' src='"+fuerzadonPictures[index].urlpicture+"' alt='picture of a header'></div>"+
              "<br>"+
              "<button type='button' class='btn btn-primary' data-dismiss='modal'>Close</button>"+
            "</div>"+
          "</div>"+
        "</div>"+
      "</div>"
    );
  }



  // SKILLS SECTION

  const skills = function (name, colorTitle, colorBar, years, divSkill) {
    this.name = name;
    this.colorTitle= colorTitle;
    this.colorBar=colorBar;
    this.years=years;
    this.divSkill=divSkill;
  }

  //LENGUAGES
  const java = new skills("Java", "e60000", "4d79ff", 2.5, "#languagesDiv")
  const php = new skills("PHP", "000000", "7070db", 2, "#languagesDiv")
  const javascript = new skills("Javascript", "14141f", "cc9900", 3, "#languagesDiv")
  const python = new skills("Python", "3385ff", "ffd11a", 0.5, "#languagesDiv")

  //FRAMEWORKS
  const jquery = new skills("JQuery", "17202a", "5499c7",3, "#frameworksDiv")
  const bootstrap = new skills("Bootstrap", "8e44ad", "fbfcfc", 3, "#frameworksDiv")
  const reactjs = new skills("ReactJS", "17202a", "85c1e9", 0.5, "#frameworksDiv")
  const nodejs = new skills("NodeJS", "17202a", "1d8348", 0.5, "#frameworksDiv")

  //DBMS
  const postgresql = new skills("PostgreSQL", "17202a", "2980b9", 2, "#dbmsDiv")
  const mysql = new skills("MySQL", "2980b9", "f5b041", 2.5, "#dbmsDiv")
  const mongodb = new skills("MongoDB", "17202a", "1d8348", 0.5, "#dbmsDiv")

  //WEB TECHNOLOGIES
  const html5 = new skills("HTML5", "17202a", "d35400", 3, "#webTechDiv")
  const css3 = new skills("CSS3", "17202a", "2980b9", 3, "#webTechDiv")
  const ajax = new skills("AJAX", "5499c7", "fbfcfc", 2.5, "#webTechDiv")
  const netbeans = new skills("Netbeans", "1f618d ", "5dade2", 2, "#webTechDiv")
  const eclipse = new skills("Eclipse", "302384", "f39c12", 1, "#webTechDiv")
  const wordpress = new skills("Wordpress", " 21618c", "fbfcfc", 0.5, "#webTechDiv")
  const jqueryValidator = new skills("Jquery Validator", "17202a", "5499c7", 2, "#webTechDiv")
  const git = new skills("Git", "ee3b0e", "fbfcfc", 3, "#webTechDiv")
  const github = new skills("Github", "17202a", "fbfcfc", 1, "#webTechDiv")
  const bitbucket = new skills("Bitbucket", "154360", "fbfcfc", 2, "#webTechDiv")
  const imacro = new skills("IMacro", "d35400", "2e86c1", 2, "#webTechDiv")
  const jira = new skills("Jira", "154360", "fbfcfc", 2, "#webTechDiv")
  const serviceNow = new skills("ServiceNow", "e22525", "fbfcfc", 1, "#webTechDiv")
  const emmet = new skills("Emmet", "17202a", "47b625", 2, "#webTechDiv")


  //SAVE EACH SKILL IN THEIR RESPECTIVE ARRAY OF SKILLS
  const languages = {java, python, javascript, php};
  const frameworks = {jquery, reactjs, bootstrap, nodejs }
  const dbms = {postgresql, mysql, mongodb}
  const webTechs = {html5, css3, ajax, netbeans, eclipse, wordpress, jqueryValidator, git, github, bitbucket, imacro, jira, serviceNow, emmet}
  const allSkills = {languages, frameworks, dbms, webTechs}
  const maxYears=3;


  //ADD SKILL BARS TO DIVSKILL
  for(var kindSkill in allSkills){
    for(var skill in allSkills[kindSkill]){
      allSkills[kindSkill][skill].calcPercentageExp = () => { return allSkills[kindSkill][skill].years / maxYears *100 };
      $(allSkills[kindSkill][skill].divSkill).append(
        "<div class='skillbar clearfix ' data-percent='"+allSkills[kindSkill][skill].calcPercentageExp()+"%'>"+
          "<div class='skillbar-title' style='background: #"+allSkills[kindSkill][skill].colorTitle+";'><span>"+allSkills[kindSkill][skill].name+"</span></div>"+
          "<div class='skillbar-bar' style='background: #"+allSkills[kindSkill][skill].colorBar+";'></div>"+
          "<div class='skill-bar-percent'>"+allSkills[kindSkill][skill].years+" years</div>"+
        "</div>"
      );
    };
  };

});
