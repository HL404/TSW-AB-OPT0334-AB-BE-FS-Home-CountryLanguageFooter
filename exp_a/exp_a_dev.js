if (typeof TlIqCustm !== 'undefined') {
	//add relevant files to git
	
	//create the child object if does not exist
	if(typeof TlIqCustm.ChangeFlightsPhaseTwo === 'undefined'){

		try {

			TlIqCustm.ChangeFlightsPhaseTwo = {
	
	
				d_cookie: 'AD_OPT0337_ChangeResUITweak_ChangeTripAndText_June2021',
				e_cookie: 'AE_OPT0337_ChangeResUITweak_ChangeTripAndText_June2021',
				o_cookie: 'AO_OPT0337_ChangeResUITweak_ChangeTripAndText_June2021',
	
				cookie: 'A_OPT0337_ChangeResUITweak_ChangeTripAndText_June2021',
	
				setCookie: function (cookie) {
					if (!TlIqCustm.ckz.cookieValueExists('tgck', cookie, '|', false)) {
						TlIqCustm.ckz.cookieAppend('tgck', cookie, '|');
					}
				},
	
	
				//the dom check array
				dom_check: [],
	
				//push objects to the dom check array
				initDomCheck: function () {
					this.dom_check.push(jQuery('body'));
					this.dom_check.push(jQuery('#aa-footer'));
				},
	
				//build content if needed
				ataPrep: function () {
                    
				},


                aa: function(){

                    var dropdown = ''
                    // dropdown += ''
                    // dropdown += '<form name="form1" id="form1" action="/action_page.php">'
                    // dropdown += '<select name="subject" id="subject">'
                    // dropdown += '<option value="" selected="selected">'
                    // dropdown += '<img alt="United States" src="/content/images/chrome/rebrand/aa-icons-flags-sprite.png">English'
                    // dropdown += '</option>'
                    // dropdown += '<option value="">Spanish</option>'
                    // dropdown += '<option value="">French</option>'
                    // dropdown += '</select>'
                    // dropdown += '</form>'


                    
                    jQuery('#aa-footer').append(dropdown)
                    
                },


				//main 
				ataMain: function () {
					try {
	
						this.initDomCheck();
						if (TlIqCustm.domCheck(this.dom_check)) {
							//do stuff

                            

							this.setCookie(this.cookie);
						}
						else {
							TlIqCustm.ChangeFlightsPhaseTwo.setCookie(TlIqCustm.ChangeFlightsPhaseTwo.d_cookie);
						}
	
	
					}
	
					catch (e) {
						TlIqCustm.ChangeFlightsPhaseTwo.setCookie(TlIqCustm.ChangeFlightsPhaseTwo.e_cookie);
	
						console.log('ata_failure');
	
						console.log("error object:");
						console.log(e);
						console.log();
	
						console.log("error object toString():");
						console.log("\t" + e.toString());
	
						console.log();
						console.log("error object attributes: ");
						console.log('\tname: ' + e.name + ' message: ' + e.message + ' at: ' + e.at + ' text: ' + e.text);
	
						console.log();
						console.log("error object stack: ");
						console.log(e.stack);
	
					}
				}
			};
	
			TlIqCustm.ChangeFlightsPhaseTwo.ataPrep();
			
			TlIqCustm.poll(
				function () {
					//return the page load confirmation conditional
					return jQuery('#aa-footer').length > 0;
				},
				function () {
					//execute main function upon success
					TlIqCustm.ChangeFlightsPhaseTwo.ataMain();
				},
				function () {
					//otherwise log OOO cookie on failure
					TlIqCustm.ChangeFlightsPhaseTwo.setCookie(TlIqCustm.ChangeFlightsPhaseTwo.o_cookie);
				}
			);
	
	
		}
	
		catch (e) {
			//use the hard coded error cookie value here, in place of 'error_cookie'
			if (!TlIqCustm.ckz.cookieValueExists('tgck', 'AE_OPT0337_ChangeResUITweak_ChangeTripAndText_June2021', '|', false)) {
				TlIqCustm.ckz.cookieAppend('tgck', 'AE_OPT0337_ChangeResUITweak_ChangeTripAndText_June2021', '|');
			}
	
			console.log('ata_failure');
	
			console.log("error object:");
			console.log(e);
			console.log();
	
			console.log("error object toString():");
			console.log("\t" + e.toString());
	
			console.log();
			console.log("error object attributes: ");
			console.log('\tname: ' + e.name + ' message: ' + e.message + ' at: ' + e.at + ' text: ' + e.text);
	
			console.log();
			console.log("error object stack: ");
			console.log(e.stack);
	
		}

	}
	
}

