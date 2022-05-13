import Plugin from 'src/plugin-system/plugin.class';
import DomAccess from 'src/helper/dom-access.helper';
import DeviceDetection from 'src/helper/device-detection.helper';



export default class BuyWidgetQuantityPlugin extends Plugin {

    static options = {
       minus: '.js-buy-widget-quantity-minus',
       plus: '.js-buy-widget-quantity-plus',
       value: '.js-buy-widget-quantity-value',

       form: 'form',
       select: 'select'
    };

    init() {

        this._plus  = DomAccess.querySelector(this.el, this.options.plus);
        this._minus = DomAccess.querySelector(this.el, this.options.minus);
        this._value = DomAccess.querySelector(this.el, this.options.value);

        this._registerEvents();
    }

    _registerEvents() {

        const event = (DeviceDetection.isTouchDevice()) ? 'touchstart' : 'click';

        this._plus.addEventListener(event, this._onQuantity.bind(this, true));
        this._minus.addEventListener(event, this._onQuantity.bind(this));

    }

    _onQuantity(event, increase = false) {
        const stepDirection = increase ? 'stepUp' : 'stepDown';
        
        try {
            this._value[stepDirection]();
        } catch(e) {
            console.log('_onQuantity catch');
        }

        const form = this._value.closest(this.options.form);
        
        if(form) {

            const select = form.querySelector(this.options.select);

            if (select) {
                select.value = this._value.value;
                this._value.closest('.offcanvas-cart')  ? select.dispatchEvent(new Event('change')) : form.dispatchEvent(new Event('change'));
            }
        }
    }
}