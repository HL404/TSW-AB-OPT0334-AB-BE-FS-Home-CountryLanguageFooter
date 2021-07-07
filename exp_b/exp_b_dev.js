if ('undefined' != typeof TlIqCustm && void 0 === TlIqCustm.languageSelectorFooterPhase2)
	try {
		(TlIqCustm.languageSelectorFooterPhase2 = {
			d_cookie: 'BD_OPT0334_HomeRedesignCountryLanguage_Test_June2021',
			e_cookie: 'BE_OPT0334_HomeRedesignCountryLanguage_Test_June2021',
			o_cookie: 'BO_OPT0334_HomeRedesignCountryLanguage_Test_June2021',
			cookie: 'B_OPT0334_HomeRedesignCountryLanguage_Test_June2021',
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
			changeCSS: function () {
				jQuery('.js-dropdown-wrapper').css({
					border: '1px solid #4A4A4A',
					'border-radius': '3px',
					width: '240px',
					height: '50px',
					padding: '0px',
				});
				jQuery('.js-dropdown-trigger').css({
					'text-align': 'left',
					color: '#4A4A4A',
					'font-size': '12px',
					'font-weight': 'bold',
					padding: '12px 15px',
					'background-color': '#D0DAE0',
					width: '240px',
				});
				jQuery('.aa-language-select-indicator').find('img').css({ 'mix-blend-mode': 'multiply' });
				jQuery('.js-dropdown-panel').css({
					left: '0px',
					'min-width': '240px',
				});
				jQuery('.dropdown-indicator').css({ 'margin-left': '120px' });
			},
			moveSection: function () {
				var countrySelector = jQuery('#countrySelector');

				var div =
					'<div id="languageSelector-footer" class="container" style="margin-bottom: 21px" />';
				jQuery('#aa-footer').prepend(div);

				jQuery('#languageSelector-footer').prepend(countrySelector);

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
							TlIqCustm.languageSelectorFooterPhase2.changeCSS();
							TlIqCustm.languageSelectorFooterPhase2.setCookie(
								TlIqCustm.languageSelectorFooterPhase2.cookie
							);
						},
						function () {}
					);
				}, 500);
			},

			ataMain: function () {
				if (
					TlIqCustm.languageSelectorFooterPhase2.isDesktop() ||
					TlIqCustm.languageSelectorFooterPhase2.isTablet()
				)
					try {
						this.initDomCheck(),
							TlIqCustm.domCheck(this.dom_check)
								? TlIqCustm.languageSelectorFooterPhase2.moveSection()
								: TlIqCustm.languageSelectorFooterPhase2.setCookie(
										TlIqCustm.languageSelectorFooterPhase2.d_cookie
								  );
					} catch (e) {
						TlIqCustm.languageSelectorFooterPhase2.setCookie(
							TlIqCustm.languageSelectorFooterPhase2.e_cookie
						);
					}
			},
		}),
			TlIqCustm.poll(
				function () {
					return jQuery('#countrySelector').length && jQuery('#aa-footer').length;
				},
				function () {
					TlIqCustm.languageSelectorFooterPhase2.ataMain();
				},
				function () {
					(TlIqCustm.languageSelectorFooterPhase2.isDesktop() ||
						TlIqCustm.languageSelectorFooterPhase2.isTablet()) &&
						TlIqCustm.languageSelectorFooterPhase2.setCookie(
							TlIqCustm.languageSelectorFooterPhase2.o_cookie
						);
				}
			);
	} catch (e) {
		(TlIqCustm.languageSelectorFooterPhase2.isDesktop() ||
			TlIqCustm.languageSelectorFooterPhase2.isTablet()) &&
			(TlIqCustm.ckz.cookieValueExists(
				'tgck',
				'BE_OPT0334_HomeRedesignCountryLanguage_Test_June2021',
				'|',
				!1
			) ||
				TlIqCustm.ckz.cookieAppend(
					'tgck',
					'BE_OPT0334_HomeRedesignCountryLanguage_Test_June2021',
					'|'
				));
	}
