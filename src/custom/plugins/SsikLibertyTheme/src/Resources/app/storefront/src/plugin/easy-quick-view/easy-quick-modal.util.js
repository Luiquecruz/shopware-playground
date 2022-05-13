import PseudoModalUtil from 'src/utility/modal-extension/pseudo-modal.util';
import HttpClient from 'src/service/http-client.service';
import ElementLoadingIndicatorUtil from 'src/utility/loading-indicator/element-loading-indicator.util';
import DomAccess from 'src/helper/dom-access.helper';

export default class EasyQuickModalUtil extends PseudoModalUtil {
    constructor(
            url, 
            callback = null, 
            useBackdrop = true, 
            style = {class: '', position:''}
        ) {
        super();
        this._url = url;
        this._callback = callback;
        this._useBackdrop = useBackdrop;
        this._client = new HttpClient();
        this._style = style;
    }


    /**
     * This method can be used to update a modal's content.
     * A callback may be provided, for example to re-initialise all plugins once
     * the markup is changed.
     *
     * @param {string} content
     * @param {function} callback
     */
    updateContent(modal, url, callback) {

        const client = new HttpClient();
        const modalContent = DomAccess.querySelector(modal, '.modal-body');

        modalContent.innerHTML = '';
        ElementLoadingIndicatorUtil.create(modalContent);

        const cb = (response) => {

            ElementLoadingIndicatorUtil.remove(modalContent);
            modalContent.innerHTML = response   
            if (typeof callback === 'function') {
                callback();
            }
        };

        client.get(url, EasyQuickModalUtil.executeCallback.bind(this, cb));   
    }

   
    /**
     * insert a temporarily needed wrapper div
     * with the response's html content
     *
     * @returns {HTMLElement}
     *
     * @private
     */
    _create() {
        this._modalMarkupEl = DomAccess.querySelector(document, this._templateSelector);
        this._createModalWrapper();
        
        if(this._style.class) {
            this._modalWrapper.classList.add(this._style.class);
        }

        ElementLoadingIndicatorUtil.create(this._modalWrapper);

        this._modal = this._createModalMarkup();

        if(this._style.position) {
            const dialog = DomAccess.querySelector(this._modal, '.modal-dialog');
            dialog.classList.add(this._style.position);
        }

        this._$modal = $(this._modal);

        document.body.insertAdjacentElement('beforeend', this._modalWrapper);
    }

    /**
     * creates the modal markup if
     * it's not existing already
     *
     * @returns {HTMLElement}
     *
     * @private
     */
    _createModalMarkup() {
        const modal = DomAccess.querySelector(this._modalWrapper, '.modal', false);

        if (modal) {
           
            return modal;
        }

        const content = this._modalWrapper.innerHTML;
        this._modalWrapper.innerHTML = this._modalMarkupEl.innerHTML;

        this._setModalContent(content);

        const cb = (response) => {

            ElementLoadingIndicatorUtil.remove(this._modalWrapper);
            this._setModalContent(response);    

            // if a callback function is being injected execute it after opening the Modal
            if (typeof this._callback === 'function') {
                this._callback();
            }

            setTimeout(this._open.bind(this), this._delay);
        };

        this._client.get(this._url, EasyQuickModalUtil.executeCallback.bind(this,cb));   

       
        return DomAccess.querySelector(this._modalWrapper, '.modal');
    }

    /**
     * Executes the given callback
     * and initializes all plugins
     *
     * @param {function} cb
     * @param {string} response
     */
     static executeCallback(cb, response) {
        if (typeof cb === 'function') {
            cb(response);
        }
        // window.PluginManager.initializePlugins();
    }
}
