<?php

//create option settings 

function ocgml_register_settings() {
   add_option( 'ocgml_option_name', '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59522.08986486067!2d72.81541119999999!3d21.186969599999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f5f3b387bb5%3A0x261e733c27afa7d2!2sSarthana+Nature+Park+And+Zoo!5e0!3m2!1sen!2sin!4v1561352496792!5m2!1sen!2sin" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>');
  add_option( 'ocgml_title', 'Load Google Maps Now');
  add_option( 'ocgml_sub_title', 'The Google <a href="https://policies.google.com/privacy?hl=en">Privacy Policy</a> applies.');
  register_setting( 'ocgml_options_group', 'ocgml_option_name');
  register_setting( 'ocgml_options_group', 'ocgml_title' );
  register_setting( 'ocgml_options_group', 'ocgml_sub_title');
}
add_action( 'admin_init', 'ocgml_register_settings' );

// create page 
function ocgml_register_options_page() {
  add_options_page('GDPR / DSGVO Google Maps', 'GDPR / DSGVO Google Maps', 'manage_options', 'ocgml', 'ocgml_options_page');
}
add_action('admin_menu', 'ocgml_register_options_page');

function ocgml_options_page(){
  ?>
  <div class="wrap">
  <?php screen_icon(); ?>
  <h1>GDPR / DSGVO Google Maps Settings</h1>
  <p style="font-size: 14px;"><u>use this shortcode to insert the map to the page or post:</u>  <strong>[google_map_click_load]</strong></p>
  <form method="post" action="options.php">
  <?php settings_fields( 'ocgml_options_group' ); ?>
  <table class="form-table">
      <tr valign="top">
  <th scope="row"><label for="ocgml_title">Add Title</label></th>
  <td>
    <input type="text" id="ocgml_title" name="ocgml_title" class="regular-text" value="<?php echo get_option('ocgml_title'); ?>">
  </td>
  </tr>
        <tr>
  <th scope="row"><label for="ocgml_sub_title">Add Sub Title</label></th>
  <td>
        <textarea id="ocgml_sub_title" rows="5" name="ocgml_sub_title" class="regular-text"><?php echo get_option('ocgml_sub_title'); ?></textarea>
  </td>
  </tr>
  <tr>
  <th scope="row"><label for="ocgml_option_name">Add GDPR / DSGVO Google Maps iframe</label></th>
  <td>
    <textarea id="ocgml_option_name" rows="10" name="ocgml_option_name" class="regular-text"><?php echo get_option('ocgml_option_name'); ?></textarea>
  </td>
  </tr>
  </table>
  <?php  submit_button(); ?>
  </form>
  </div>
<?php
}