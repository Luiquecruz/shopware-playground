import Plugin from 'src/plugin-system/plugin.class';
import Iterator from 'src/helper/iterator.helper';
import DomAccess from 'src/helper/dom-access.helper';
import ViewportDetection from 'src/helper/viewport-detection.helper';
export default class ProductImgHoverPlugin extends Plugin {

    static options = {
        boxSelector: '.product-box',
        boxImageSelector: '[data-product-img-hover-src]',
        imgSelector: '.product-image',
        srcDataAttribute: 'data-product-img-hover-src',
        srcsetDataAttribute: 'data-product-img-hover-srcset'
    };

    init() {
        this._unlock = true;
        this._els = this.el.querySelectorAll(this.options.boxImageSelector);
        this._registerEvents();
    }
    /**
     * @private
     */
     _registerEvents() {
        Iterator.iterate(this._els, el => {
            if(el) {
                el.addEventListener('mouseenter', this._onHoverImage.bind(this, el));
                el.addEventListener('mouseleave', this._onHoverImage.bind(this, el));
            }
        });
    }

    _onHoverImage(el, event) {

        ProductImgHoverPlugin._stopEvent(event);

        if (!this._isInAllowedViewports()) return;

        const productImage = DomAccess.querySelector(el, this.options.imgSelector);
        const parentProductImage = productImage.parentElement;

        let newImage = parentProductImage.querySelector('.added');

        if (!newImage) {

            if (this._unlock) {

                this._unlock = false;

                newImage = document.createElement('img');
                newImage.classList.add('added', 'product-image');
                
                let src = DomAccess.getDataAttribute(el, this.options.srcDataAttribute);
                //let srcset = DomAccess.getDataAttribute(el, this.options.srcsetDataAttribute); 

                el.classList.add('is-loading');

                newImage.onload = () => {        

                    productImage.classList.add('hide');
                    parentProductImage.append(newImage);

                    el.classList.remove('is-loading');
                    this._unlock = true;

                };

                newImage.setAttribute('src', src);
                //newImage.setAttribute('srcset', srcset);
            }
        }
        else {
            if(event.type === 'mouseenter') {
                productImage.classList.add('hide');
                newImage.classList.remove('hide');
            }
            else {
                productImage.classList.remove('hide');
                newImage.classList.add('hide');
            }
        }
    }
    
    /**
     * prevents the passed event
     *
     * @param {Event} event
     * @private
     */
    static _stopEvent(event) {
        if (event && event.cancelable) {
            event.preventDefault();
            event.stopImmediatePropagation();
        }
    }

    _isInAllowedViewports() {
        return (ViewportDetection.isXL());
    }

    _update() {
        this.init();
    }
}