import HeaderFloatingCart from './plugin/header/header-floating-cart.plugin';
//import EventsPlugin from './plugin/events-plugin/events-plugin.plugin';
import BuyWidgetQuantity from './plugin/widget/buy-widget-quantity.plugin';
import EasyQuickView from './plugin/easy-quick-view/easy-quick-view.plugin';
import ProductImgHoverPlugin from './plugin/product-img-hover/product-img-hover.plugin';

import MainNavigationSticky from './plugin/navigation/main-navigation-sticky.plugin';

//import ProductSliderOverride from './plugin/override/product-slider/override.product-slider.plugin';

const PluginManager = window.PluginManager;

//PluginManager.register('EventsPlugin', EventsPlugin);
PluginManager.register('MainNavigationSticky', MainNavigationSticky, '[data-header-floating]');
PluginManager.register('HeaderFloatingCart', HeaderFloatingCart, 'body');
PluginManager.register('BuyWidgetQuantityPlugin', BuyWidgetQuantity, '[data-buy-widget-quantity]');
PluginManager.register('EasyQuickView', EasyQuickView, '[data-easy-quick]');
PluginManager.register('ProductImgHoverPlugin', ProductImgHoverPlugin, '[data-product-img-hover]');

//override
//PluginManager.override('ProductSlider', ProductSliderOverride, '[data-product-slider]');

if (module.hot) {
    module.hot.accept();
}


const footerNewsletterMail = document.body.querySelector('#footerNewsletterMail');
if(footerNewsletterMail) {
    footerNewsletterMail.addEventListener('click', () => {
        const newsletterCaptcha = document.body.querySelector('#newsletter-captcha');
        if(newsletterCaptcha) {
            newsletterCaptcha.classList.add('show');
        }
    });
}