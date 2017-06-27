<?php


  function wpb_adding_scripts() {

    wp_enqueue_script('joe_js', get_template_directory_uri() . '/js/joe-custom.js', array('jquery'),'06272017', true);

    // logic stopped from running in js file, for now
    // wp_enqueue_script('dwell_hoods', get_template_directory_uri() . '/js/dwell-hoods.js', array('jquery'),'05102017', true);
    //
    // wp_enqueue_script('dwell_featuredprops', get_template_directory_uri() . '/js/dwell-featuredprops.js', array('jquery'),'05172017', true);

  }

  // enqueues scripts
  if( !is_admin() ) {
    add_action( 'wp_enqueue_scripts', 'wpb_adding_scripts' );
  }




?>
