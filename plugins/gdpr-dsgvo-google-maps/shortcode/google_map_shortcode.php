<?php

//:shortcode for load google map on click
//:start
add_shortcode( 'google_map_click_load', 'google_map_shortcode_code' );

function google_map_shortcode_code()
{ 	
	ob_start();      
	?>
	<style type="text/css">
		.ocgml_map_link {
		    margin: 0 auto;
		    width: 100%;
		    text-align: center;
		}
		p.ocgml_sub_text {
		    font-size: 12px;
		}
		.ocgml_main {
		    padding: 10px;
		    border: 1px solid #ccc;
		}
		.ocgml_map_display iframe {
		    width: 100%;
		}
	</style>
	<div class="ocgml_main">
		<div class="ocgml_content">
			<div class="ocgml_map_link">
				<h4 style="margin:0 0 15px;padding:0;text-decoration:underline;cursor:pointer;" id="ocgml_show_map"><?php echo get_option('ocgml_title'); ?></h4>
				<?php echo get_option('ocgml_sub_title'); ?>
			</div>
			<div class="ocgml_map_display" style="display: none">
				<?php echo get_option('ocgml_option_name');?>
				
			</div>
		</div>
	</div>
	<script type="text/javascript">
		jQuery( document ).ready(function() {
		    jQuery( "#ocgml_show_map" ).click(function() {
			   jQuery( ".ocgml_map_display" ).show();
			   jQuery(".ocgml_map_link").hide();
			});
		});
	</script>
	<?php
	return $var = ob_get_clean();
}
//:End