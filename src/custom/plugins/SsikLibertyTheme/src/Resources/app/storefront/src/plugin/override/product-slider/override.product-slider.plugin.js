import ProductSliderPlugin from 'src/plugin/slider/product-slider.plugin';
import SliderSettingsHelper from 'src/plugin/slider/helper/slider-settings.helper';

export default class ProductSliderOverride extends ProductSliderPlugin {
    init() {
        super.init();
    }

    _getSettings(viewport) {
        this._overrideItem(viewport);
    }

    _overrideItem(viewport) {
        this._sliderSettings = SliderSettingsHelper.getViewportSettings(this.options.slider, viewport);
    }
}