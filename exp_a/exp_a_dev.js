if ('undefined' != typeof TlIqCustm && void 0 === TlIqCustm.languageSelectorFooterPhase2)
	try {
		(TlIqCustm.languageSelectorFooterPhase2 = {
			d_cookie: 'AD_OPT0334_HomeRedesignCountryLanguage_Control_June2021',
			e_cookie: 'AE_OPT0334_HomeRedesignCountryLanguage_Control_June2021',
			o_cookie: 'AO_OPT0334_HomeRedesignCountryLanguage_Control_June2021',
			cookie: 'A_OPT0334_HomeRedesignCountryLanguage_Control_June2021',
			setCookie: function (e) {
				TlIqCustm.ckz.cookieValueExists('tgck', e, '|', !1) ||
					TlIqCustm.ckz.cookieAppend('tgck', e, '|');
			},
			dom_check: [],
			loop: 0,
			loop_max: 10,
			initDomCheck: function () {
				this.dom_check.push(jQuery('body'));
			},
			isTablet: function () {
				return 'undefined' != typeof $device && !0 === $device.tablet;
			},
			isDesktop: function () {
				return 'undefined' != typeof $device && !0 === $device.desktop;
			},

			ataMain: function () {
				if (
					TlIqCustm.languageSelectorFooterPhase2.isDesktop() ||
					TlIqCustm.languageSelectorFooterPhase2.isTablet()
				)
					try {
						this.initDomCheck(),
							TlIqCustm.domCheck(this.dom_check)
								? TlIqCustm.languageSelectorFooterPhase2.setCookie(
										TlIqCustm.languageSelectorFooterPhase2.cookie
								  )
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
					return true;
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
				'AE_OPT0334_HomeRedesignCountryLanguage_Control_June2021',
				'|',
				!1
			) ||
				TlIqCustm.ckz.cookieAppend(
					'tgck',
					'AE_OPT0334_HomeRedesignCountryLanguage_Control_June2021',
					'|'
				));
	}
