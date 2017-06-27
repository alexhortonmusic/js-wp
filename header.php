<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title><?php bloginfo('name'); ?> <?php if ( is_single() ) { ?> &raquo; Blog Archive <?php } ?> <?php wp_title(); ?></title>
  <script src="https://use.fontawesome.com/022879ddbb.js"></script>
  <link href="https://fonts.googleapis.com/css?family=Lato:300,400,700|Raleway:200,300,700" rel="stylesheet">
  <?php
    $homeURL = "http://localhost/joe-simon/";
  ?>
  <link rel="stylesheet" type="text/css" href="<?php echo $homeURL ?>wp-content/themes/joe-custom/js/plugins/slick-carousel/slick/slick.css"/>
    <!-- Add the new slick-theme.css if you want the default styling -->
    <link rel="stylesheet" type="text/css" href="<?php echo $homeURL ?>wp-content/themes/joe-custom/js/plugins/slick-carousel/slick/slick-theme.css"/>
  <link rel="stylesheet" href="<?php bloginfo('stylesheet_url'); ?>" type="text/css" />

  <?php wp_head(); ?>

</head>
<body>

  <div class='header'>
    <div class='row topbar'>
      <ul class='menu align-right topmenu'>
        <li>
          <a href="#"><i class="fa fa-facebook fa-lg" aria-hidden="true"></i></a>
        </li>
        <li>
          <a href="#"><i class="fa fa-instagram fa-lg" aria-hidden="true"></i></a>
        </li>
        <li>
          <a href="#"><i class="fa fa-youtube-play fa-lg" aria-hidden="true"></i></a>
        </li>
        <!-- <li>
          <a href="#">&bull;&bull;</a>
        </li> -->
      </ul>
    </div>
    <div class='row navbar-logo'>
      <div class='logo'>
        <a href="<?php echo $homeURL ?>">
          <img src="<?php echo $homeURL ?>wp-content/uploads/2017/06/joe.simon_.newlogo.png" alt="Dr Joe Simon Logo">
        </a>
      </div>
      <div class='navigation'>
        <ul class="menu">
          <li><a href="./about">About</a></li>
          <li><a href="http://privatepracticebusinessacademy.com/">Podcast</a></li>
          <li><a href="#">Case Studies</a></li>
          <li><a href="./faq">FAQ</a></li>
        </ul>
      </div>
      <div class='nav-cta-wrap'>
        <a href="#" class='nav-cta cta' id='cta-nav'>
          <div class='btn'>
            <p>SCHEDULE CALL</p>
          </div>
        </a>
      </div>
    </div>
  </div>
