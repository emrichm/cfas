				jQuery(document).ready(function ($){
					
						jQuery(".services_content").click(function(event) {
							event.preventDefault();
							var tab = jQuery(this).attr("data-tab");
									//console.log(tab);
									if(tab)  {  
									if ( jQuery( ".content_"+tab ).hasClass( "dsgvoaio_hide" )){

										jQuery(".content_"+tab).show(300);
										jQuery( ".content_"+tab ).removeClass( "dsgvoaio_hide" );
										jQuery( this ).addClass( "dsgvoaio_toggled" );
									} else{
										jQuery(".content_"+tab).hide(300);
										jQuery( ".content_"+tab ).addClass( "dsgvoaio_hide" );
										jQuery( this ).removeClass( "dsgvoaio_toggled" );
									}
									
									} 
								
						});	
						
						
						
					  var allPanels = jQuery('#dsgvooptions > .dsgvooptionsinner').hide();
					  
					  var allPanelsTog = jQuery('#dsgvooptions > .dsgvoheader a');
						
					  jQuery('#dsgvooptions > h2.dsgvoheader > a').click(function() {
						  
						var state = jQuery(this).parent().next().css('display');
						
						if (state == "none") {
							allPanels.slideUp();
							allPanelsTog.removeClass('dsgvoaio_toggled');
							jQuery(this).parent().next().slideDown();
							jQuery(this).addClass('dsgvoaio_toggled');
						} else {
							allPanels.slideUp();
							allPanelsTog.removeClass('dsgvoaio_toggled');
						}
						
						return false;
						
					  });


			jQuery(":checkbox").change(function () {
				
				if (this.name == "show_policy") {
					if(jQuery(this).is(":checked"))  {  
						jQuery(".showonnoticeon").show(300);
					} else {
						jQuery(".showonnoticeon").hide(300);
					}
				}					
				
				if (this.name == "use_facebookcomments") {
					if(jQuery(this).is(":checked"))  {
						jQuery(".facebookcommentswrap").show(300);
						} else {
							jQuery(".facebookcommentswrap").hide(300);
							}
							}
							
							
				if (this.name == "show_servicecontrol") {
					if(jQuery(this).is(":checked"))    {
						jQuery(".servicecontrolwrap").show(300);
					} else {
						jQuery(".servicecontrolwrap").hide(300);	
					}
				}								
									
				if (this.name == "show_rejectbtn") {
					if(jQuery(this).is(":checked"))    {
						jQuery(".rejectbtnwrap").show(300);
						//jQuery('.fbpixelid').prop('required',true);
					} else {
						jQuery(".rejectbtnwrap").hide(300);	
						//jQuery('.fbpixelid').prop('required',false);
					}
				}	
							if (this.name == "use_facebooklike") {
								if(jQuery(this).is(":checked"))  {
									jQuery(".facebooklikewrap").show(300);
									} else {
										jQuery(".facebooklikewrap").hide(300);
										}
										}
										if (this.name == "use_fbpixel") {
											if(jQuery(this).is(":checked"))    {
												jQuery(".fbpixelwrap").show(300);
												jQuery('.fbpixelid').prop('required',true);
											} else {
												jQuery(".fbpixelwrap").hide(300);
												jQuery('.fbpixelid').prop('required',false);
											}
										}
							if (this.name == "use_ga") {
								if(jQuery(this).is(":checked"))  {
									jQuery(".gawrap").show(300);
									jQuery('.gaid').prop('required',true);
								} else {
									jQuery(".gawrap").hide(300);
									jQuery('.gaid').prop('required',false);
								}
							}

							if (this.name == "use_piwik") {
								if(jQuery(this).is(":checked"))  {
									jQuery(".piwikwrap").show(300);
									jQuery('.piwik_host').prop('required',true);
									jQuery('.piwik_siteid').prop('required',true);
								} else {
									jQuery(".piwikwrap").hide(300);
									jQuery('.piwik_host').prop('required',false);
									jQuery('.piwik_siteid').prop('required',false);
								}
							}
							
							if (this.name == "use_gtagmanager") {
								if(jQuery(this).is(":checked"))  {
									jQuery(".gtagmanagerwrap").show(300);
									jQuery('.gtagmanagerid').prop('required',true);
								} else {
									jQuery(".gtagmanagerwrap").hide(300);
									jQuery('.gtagmanagerid').prop('required',false);
								}
							}	

							if (this.name == "use_shareaholic") {
								if(jQuery(this).is(":checked"))  {
									jQuery(".shareaholicwrap").show(300);
									jQuery('.shareaholicsiteid').prop('required',true);
								} else {
									jQuery(".shareaholicwrap").hide(300);
									jQuery('.shareaholicsiteid').prop('required',false);
								}
							}							
							
							if (this.name == "use_vgwort") {
								if(jQuery(this).is(":checked"))  {
									jQuery(".vgwortwrap").show(300);
								} else {
									jQuery(".vgwortwrap").hide(300);
								}
							}							
							
							if (this.name == "use_twitter") {
								if(jQuery(this).is(":checked"))    {
									jQuery(".twitterwrap").show(300);
									jQuery('.twitterusername').prop('required',true);
								} else {
									jQuery(".twitterwrap").hide(300);
									jQuery('.twitterusername').prop('required',false);
								}
							}
							if (this.name == "use_youtube") {
								if(jQuery(this).is(":checked"))    {
									jQuery(".youtubewrap").show(300);
								} else {
									jQuery(".youtubewrap").hide(300);
								}
							}
							if (this.name == "use_linkedin") {
								if(jQuery(this).is(":checked"))    {
									jQuery(".linkedinwrap").show(300);
								} else {
									jQuery(".linkedinwrap").hide(300);
								}
							}
							if (this.name == "use_addthis") {
								if(jQuery(this).is(":checked"))    {
									jQuery(".addthiswrap").show(300);
									jQuery('.addthisid').prop('required',true);
								} else {
									jQuery(".addthiswrap").hide(300);
									jQuery('.addthisid').prop('required',false);
								}
							}
						});
						
							jQuery( document ).on( 'click', '.dsgvo_delete_ip_adresses', function(event) {
								event.preventDefault();
								var post_id = jQuery(this).data('id');
									jQuery.ajax({
										type: "POST",
										url: ajaxurl,
										data: { action: 'dsgvo_delete_usr_ip' , param: 'st1' }
									  }).done(function( msg ) {
										  console.log(msg);
											 alert( msg.response );
									 });
							});					  
						
					});	