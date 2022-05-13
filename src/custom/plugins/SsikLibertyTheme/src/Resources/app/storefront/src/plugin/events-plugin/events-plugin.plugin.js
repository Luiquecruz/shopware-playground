import Plugin from 'src/plugin-system/plugin.class';
import Iterator from 'src/helper/iterator.helper';

export default class EventsPlugin extends Plugin {

    static options = {
        baseSliderSelector:     '[data-base-slider]',
        productSliderSelector:  '[data-product-slider]'
    };

    init() {
        const elProductSlider = document.querySelector(this.options.productSliderSelector);
        const elBaseSlider = document.querySelector(this.options.baseSliderSelector);

        if (elProductSlider) {
            const productSlider = window.PluginManager.getPluginInstanceFromElement(elProductSlider, 'ProductSlider');
            productSlider.$emitter.subscribe('afterInitSlider', this.onAfterInitProductSlider(this));
        }

        if (elBaseSlider) {
            const baseSlider = window.PluginManager.getPluginInstanceFromElement(elBaseSlider, 'BaseSlider');
            baseSlider.$emitter.subscribe('afterInitSlider', this.onAfterInitBaseSlider(this));
        }       
    }

    onAfterInitProductSlider() {
        const allProductSliders = document.body.querySelectorAll(this.options.productSliderSelector);

        if (allProductSliders.length > 0) Iterator.iterate(allProductSliders, slider => {
            slider.classList.remove('loading');
        });
    }

    onAfterInitBaseSlider() {
        const allBaseSliders = document.body.querySelectorAll(this.options.baseSliderSelector);

        if (allBaseSliders.length > 0) Iterator.iterate(allBaseSliders, slider => {
            slider.classList.remove('loading');
        });
    }
}