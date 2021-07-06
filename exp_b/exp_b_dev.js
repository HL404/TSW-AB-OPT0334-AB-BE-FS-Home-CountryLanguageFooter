if ('undefined' != typeof TlIqCustm && void 0 === TlIqCustm.countryLanguageSelector)
	try {
		(TlIqCustm.countryLanguageSelector = {
			d_cookie: 'BD_OPT0310_HomeRedesignCountryLanguage_Test_Mar2021',
			e_cookie: 'BE_OPT0310_HomeRedesignCountryLanguage_Test_Mar2021',
			o_cookie: 'BO_OPT0310_HomeRedesignCountryLanguage_Test_Mar2021',
			cookie: 'B_OPT0310_HomeRedesignCountryLanguage_Test_Mar2021',
			setCookie: function (e) {
				TlIqCustm.ckz.cookieValueExists('tgck', e, '|', !1) ||
					TlIqCustm.ckz.cookieAppend('tgck', e, '|');
			},
			dom_check: [],
			loop: 0,
			loop_max: 10,
			initDomCheck: function () {
				this.dom_check.push(jQuery('body')),
					this.dom_check.push(jQuery('#countrySelector')),
					this.dom_check.push(jQuery('#aa-footer'));
			},
			isTablet: function () {
				return 'undefined' != typeof $device && !0 === $device.tablet;
			},
			isDesktop: function () {
				return 'undefined' != typeof $device && !0 === $device.desktop;
			},

			moveSection: function () {
				// jQuery('#aa-footer > div.container > div.social').attr('Style', 'margin-top:20px'),
				// 	jQuery('#aa-footer > div.container > div.left').attr('Style', 'margin-top:20px'),

				// <div id="language-selector" data-behavior="dropdown-wrapper" class="js-dropdown-wrapper">
				//     <a href="#" data-behavior="dropdown-trigger" class="js-dropdown-trigger">
				//         <span class="aa-language-select-indicator">
				//             <img alt="United States" src="/content/images/chrome/rebrand/aa-icons-flags-sprite.png">
				//         </span>
				//         English
				//         <img alt="Click to change language and/or country / region" src="/content/images/chrome/rebrand/down-arrow.png" class="dropdown-indicator">
				//     </a>
				// </div>
				// <div data-behavior="dropdown-panel" style="display: none;" class="js-dropdown-panel">

				//     jQuery('#splashForm')
				// </div>

				// <script>
				//     function deleteBackCall() {
				//         window.history.pushState("", "", '/homePage.do');
				//     }
				// </script>

				//     </li>
				var temp =
					'<li id="countrySelector" class="menu-item-utility is-hidden-mobile   js-dropdown" data-behavior="dropdown">';
				temp +=
					'<div id="    " data-behavior="dropdown-wrapper" class="js-dropdown-wrapper" style="border: 1px solid rgb(0, 70, 127); border-radius: 3px; width: 195px; padding: 0px;">';
				temp +=
					'<a href="#" data-behavior="dropdown-trigger" class="js-dropdown-trigger" style="text-align: left; color: rgb(0, 70, 127); font-size: 12px; font-weight: bold; padding: 10px 15px; background-color: transparent; width: 195px;">';
				temp +=
					'<span class="aa-language-select-indicator" style="width: calc(22px); height: calc(18px); border-radius: 3px; margin-right: 10px;">';
				temp +=
					'<img alt="United States" src="/content/images/chrome/rebrand/aa-icons-flags-sprite.png" style="margin-top: -3.5px; margin-left: -151px;">';
				temp += '</span>';
				temp += 'English';
				temp +=
					'<img alt="Click to change language and/or country / region" src="/content/images/chrome/rebrand/down-arrow.png" class="dropdown-indicator" style="margin: 7px 3px; padding: 0px; float: right; width: 10px;">';
				temp += '</a>';
				temp += '</div>';
				temp +=
					'<div data-behavior="dropdown-panel" style="display: none;" class="js-dropdown-panel">';

				temp += '</div>';
				jQuery('.js-dropdown-panel').append(jQuery('#splashForm'));
				temp += '</li>';

				var countrySelector = jQuery('#countrySelector');
				jQuery('.js-dropdown-wrapper').css({
					border: '1px solid rgb(0, 70, 127)',
					'border-radius': '3px',
					width: '240px',
					height: '50px',
					padding: '0px',
				});
				jQuery('.js-dropdown-trigger').css({
					'text-align': 'left',
					color: 'rgb(0, 70, 127)',
					'font-size': '12px',
					'font-weight': 'bold',
					padding: '10px 15px',
					'background-color': 'transparent',
					width: '195px',
				});

				jQuery('#aa-footer').prepend('<hr style="margin-top:40px;">');
				jQuery('#aa-footer').prepend('<hr style="margin-top:40px;">');
				jQuery('#aa-footer').prepend(jQuery('js-dropdown-panel'));
				jQuery('#aa-footer').prepend(temp), jQuery('.js-dropdown-panel').remove();
				jQuery('#aa-footer').prepend(countrySelector),
					setTimeout(function () {
						TlIqCustm.poll(
							function () {
								return (
									'195px' !==
									jQuery(
										'li#countrySelector a.js-dropdown-trigger[data-behavior="dropdown-trigger"]'
									).css('width')
								);
							},
							function () {
								// TlIqCustm.countryLanguageSelector.changeCSS(),
								TlIqCustm.countryLanguageSelector.setCookie(
									TlIqCustm.countryLanguageSelector.cookie
								);
							},
							function () {}
						);
					}, 500);
			},

			ataMain: function () {
				if (
					TlIqCustm.countryLanguageSelector.isDesktop() ||
					TlIqCustm.countryLanguageSelector.isTablet()
				)
					try {
						this.initDomCheck(),
							TlIqCustm.domCheck(this.dom_check)
								? TlIqCustm.countryLanguageSelector.moveSection()
								: TlIqCustm.countryLanguageSelector.setCookie(
										TlIqCustm.countryLanguageSelector.d_cookie
								  );
					} catch (e) {
						TlIqCustm.countryLanguageSelector.setCookie(TlIqCustm.countryLanguageSelector.e_cookie);
					}
			},
		}),
			TlIqCustm.poll(
				function () {
					return (
						jQuery('#countrySelector').length &&
						jQuery('#aa-footer > div.container > div.social').length
					);
				},
				function () {
					TlIqCustm.countryLanguageSelector.ataMain();
				},
				function () {
					(TlIqCustm.countryLanguageSelector.isDesktop() ||
						TlIqCustm.countryLanguageSelector.isTablet()) &&
						TlIqCustm.countryLanguageSelector.setCookie(TlIqCustm.countryLanguageSelector.o_cookie);
				}
			);
	} catch (e) {
		(TlIqCustm.countryLanguageSelector.isDesktop() ||
			TlIqCustm.countryLanguageSelector.isTablet()) &&
			(TlIqCustm.ckz.cookieValueExists(
				'tgck',
				'BE_OPT0310_HomeRedesignCountryLanguage_Test_Mar2021',
				'|',
				!1
			) ||
				TlIqCustm.ckz.cookieAppend(
					'tgck',
					'BE_OPT0310_HomeRedesignCountryLanguage_Test_Mar2021',
					'|'
				));
	}
