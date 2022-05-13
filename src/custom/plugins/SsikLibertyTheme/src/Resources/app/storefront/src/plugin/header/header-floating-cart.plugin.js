import Plugin from 'src/plugin-system/plugin.class';
import DomAccess from 'src/helper/dom-access.helper';
import Iterator from 'src/helper/iterator.helper';

export default class HeaderFloatingCartPlugin extends Plugin {

    static options = {
        cart: '.header-main .header-cart',
        cartUpdateSelector: '.js-cart-update',
        info: '.header-cart-btn-wrapper'
    }

    init() {

        this._cart = document.body.querySelector(this.options.cart);
        this._updateCarts = document.body.querySelectorAll(this.options.cartUpdateSelector);

        if(!this._cart || !this._updateCarts) return;

        this._registerEvents();
    }

    _registerEvents() {
        const observer = new MutationObserver(this._updateFloatCartInfo.bind(this));
        observer.observe(this._cart, {
            childList: true,
            subtree: true
        });

    }

    _updateFloatCartInfo() {
        
        const info = DomAccess.querySelector(this._cart, this.options.info);
        Iterator.iterate(this._updateCarts, el => {
            el.innerHTML = info.outerHTML;
        });
    } 
}