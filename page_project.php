<!DOCTYPE html>
<html lang="en">
<head>
  <title>โครงการวิจัย การเผยแพร่สารสนเทศ โครงการวิจัย ภาคตะวันออกเฉียงเหนือ</title>
  <link href="images/logo-inverse.png" rel="icon">
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

  <link href="https://fonts.googleapis.com/css?family=Amatic+SC:400,700|Work+Sans:300,400,700" rel="stylesheet">
  <link rel="stylesheet" href="fonts/icomoon/style.css">

  <link rel="stylesheet" href="css/bootstrap.min.css">
  <link rel="stylesheet" href="css/magnific-popup.css">
  <link rel="stylesheet" href="css/jquery-ui.css">
  <link rel="stylesheet" href="css/owl.carousel.min.css">
  <link rel="stylesheet" href="css/owl.theme.default.min.css">
  <link rel="stylesheet" href="css/bootstrap-datepicker.css">
  <link rel="stylesheet" href="css/animate.css">

  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/mediaelement@4.2.7/build/mediaelementplayer.min.css">
  <link href="https://fonts.googleapis.com/css?family=Kanit:200,300,400&display=swap" rel="stylesheet">
  <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">

  <link rel="stylesheet" href="fonts/flaticon/font/flaticon.css">
  <link rel="stylesheet" href="fonts/pe-icon-7-stroke/dist/pe-icon-7-stroke.css">
  <link rel="stylesheet" href="css/aos.css">

  <link rel="stylesheet" href="css/style.css">
  <link rel="stylesheet" href="css/uikit/uikit.min.css">

</head>
<body>

  <div class="site-wrap">

    <div class="site-mobile-menu">
      <div class="site-mobile-menu-header">
        <div class="site-mobile-menu-close mt-3">
          <span class="icon-close2 js-menu-toggle"></span>
        </div>
      </div>
      <div class="site-mobile-menu-body"></div>
    </div> <!-- .site-mobile-menu -->
    
    
    <div class="site-navbar-wrap js-site-navbar bg-white">

      <div class="container">
        <div class="site-navbar bg-light">
          <div class="py-1">
            <div class="row align-items-center">
              <div class="col-2">
                <img src="images/sg_logo.jpg" alt="" style="width: 40px;">
                <img src="images/it_logo.png" alt="" style="width: 50px;">
                <img src="images/msu_loho.png" alt="" style="width: 50px;">
              </div>
              <div class="col-10">
                <nav class="site-navigation text-right" role="navigation">
                  <div class="container">
                    <div class="d-inline-block d-lg-none ml-md-0 mr-auto py-3">
                      <a href="#" class="site-menu-toggle js-menu-toggle text-black">
                        <i class="pe-7s-menu"></i>
                      </a>
                    </div>
                    
                    <ul class="site-menu js-clone-nav d-none d-lg-block calpadding">
                      <li><a href="index.html">หน้าแรก</a></li>
                      <li><a href="index2.html">เกี่ยวกับโครงการ</a></li>
                      <li class="active"><a href="index3.html">โครงการวิจัย สกว.</a></li>
                      <li><a href="index4.html">กิจกรรม</a></li>
                      <li><a href="indexMedia.html">สื่อเผยแพร่</a></li>
                      <li><a href="connect.html">ติดต่อเรา</a></li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- เนื้อหาหน้าเว็ป -->
    <div class="site-section">
      <div class="container">
        
        <div class="row">
          <div class="col-md-12 mx-auto text-center mb-5 mt-5 section-heading">
            <h2 class="mb-5" id="nameproject">
              <?php
                function createJSON()
                {
                  include 'dbconnect.php';
                  $nameproject = $_GET["nameproject"];
                  $sql = "SELECT * FROM `data_project` Where name_project = '$nameproject' ";
                  $query = mysqli_query($conn,$sql);
                  if (!$query) {
                    printf("Error: %s\n", $conn->error);
                    exit();
                  }
                  $result = mysqli_fetch_array($query,MYSQLI_ASSOC);
                  mysqli_close($conn);

                  return json_encode($result);
                }

                $jsonCode = createJSON();
                $jsonDecode = json_decode($jsonCode, true);

                echo $jsonDecode['name_project']."<br/>";
                // echo $jsonDecode['head_project']."<br/>";
                // echo $jsonDecode['year_project']."<br/>";
                // echo $jsonDecode['pass_project']."<br/>";
                // echo $jsonDecode['problem_project']."<br/>";
                // echo $jsonDecode['object_project']."<br/>";
                // echo $jsonDecode['result_project']."<br/>";
                // echo $jsonDecode['result_use_project']."<br/>";
                // echo $jsonDecode['conclude_project']."<br/>";
                // echo $jsonDecode['type_project']."<br/>";
              ?>
            </h2>
          </div>
        </div>
        
            <div class="row">
                <div class="col-md-12 text-center mb-3 section-heading section-headingedit">
                  <h4 class="mb-3 mt-3">ชื่อโครงการ:</h4>
                  <p> <?php echo $jsonDecode['name_project']?> </p>
                </div>
            </div>

            <div class="row">
                <div class="col-md-12 text-center mb-3 section-heading section-headingedit">
                    <h4 class="mb-3 mt-3">ประเภทโครงการ:</h4>
                    <p> <?php echo $jsonDecode['type_project']?> </p>
                </div>
            </div>

            <div class="row">
                <div class="col-md-12 text-center mb-3 section-heading section-headingedit">
                    <h4 class="mb-3 mt-3">ชื่อหัวหน้าทีมวิจัย:</h4>
                    <p> <?php echo $jsonDecode['head_project']?> </p>
                </div>
            </div>

            <div class="row">
                <div class="col-md-12 text-center mb-3 section-heading section-headingedit">
                    <h4 class="mb-3 mt-3">ปีที่พิมพ์:</h4>
                    <p> <?php echo $jsonDecode['year_project']?> </p>
                </div>
            </div>

            <div class="row">
                <div class="col-md-12 text-center mb-3 section-heading section-headingedit">
                    <h4 class="mb-3 mt-3">รหัสวิจัย สกว.:</h4>
                    <p> <?php echo $jsonDecode['pass_project']?> </p>
                </div>
            </div>

            <div class="row">
                <div class="col-md-12 text-center mb-3 section-heading section-headingedit">
                    <h4 class="mb-3 mt-3">ปัญหาการวิจัย:</h4>
                    <p> <?php echo $jsonDecode['problem_project']?> </p>
                </div>
            </div>

            <div class="row">
                <div class="col-md-12 text-center mb-3 section-heading section-headingedit">
                    <h4 class="mb-3 mt-3">วัตถุประสงค์:</h4>
                    <p> <?php echo $jsonDecode['object_project']?> </p>
                </div>
            </div>

            <div class="row">
                <div class="col-md-12 text-center mb-3 section-heading section-headingedit">
                    <h4 class="mb-3 mt-3">ผลการวิจัย:</h4>
                    <p> <?php echo $jsonDecode['result_project']?> </p>
                </div>
            </div>

            <div class="row">
                <div class="col-md-12 text-center mb-3 section-heading section-headingedit">
                    <h4 class="mb-3 mt-3">ผลการวิเคราะห์นำไปใช้ประโยชน์:</h4>
                    <p> <?php echo $jsonDecode['result_use_project']?> </p>
                </div>
            </div>

            <div class="row">
                <div class="col-md-12 text-center mb-3 section-heading section-headingedit">
                    <h4 class="mb-3 mt-3">สรุปผลจากการสนทนากลุ่ม:</h4>
                    <p> <?php echo $jsonDecode['conclude_project']?> </p>
                </div>
            </div>


        </div> 

        
      </div>
    </div> 
  </div>


  <div class="py-3 quick-contact-info">
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <div>
            <h2><span class="icon-room"></span>ที่อยู่</h2>
            <p class="mb-0">คณะวิทยาการสารสนเทศ มหาวิทยาลัยมหาสารคาม<br> ตำบลขามเรียง อำเภอกันทรวิชัย <br> จังหวัดมหาสารคาม 44150 </p>
          </div>
        </div>
        <div class="col-md-4">
          <div>
            <h2><span class="icon-clock-o"></span>โทร</h2>
            <p class="mb-0">0-4375-4359<br>
              ภายใน 5177,5311<br>
            </p>
          </div>
        </div>
        <div class="col-md-4">
          <h2><span class="icon-comments"></span>ต่อต่อ</h2>
          <p class="mb-0">Email: info@yoursite.com <br> </p>
        </div>
      </div>
    </div>
  </div>

</div>



        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
        <script src="js/jquery-migrate-3.0.1.min.js"></script>
        <script src="js/jquery-ui.js"></script>
        <script src="js/popper.min.js"></script>
        <script src="js/bootstrap.min.js"></script>
        <script src="js/owl.carousel.min.js"></script>
        <script src="js/jquery.stellar.min.js"></script>
        <script src="js/jquery.countdown.min.js"></script>
        <script src="js/jquery.magnific-popup.min.js"></script>
        <script src="js/bootstrap-datepicker.min.js"></script>
        <script src="js/aos.js"></script>

        <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>

        <script src="js/main.js"></script>
        <script src="js/animation.js"></script>
        <script src="BN_Page_project.js"></script>
      </body>
      </html>

    