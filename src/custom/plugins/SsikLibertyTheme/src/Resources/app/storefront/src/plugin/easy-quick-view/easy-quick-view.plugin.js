import Plugin from 'src/plugin-system/plugin.class';
import EasyQuickModalUtil from './easy-quick-modal.util';
import PluginManager from 'src/plugin-system/plugin.manager';
import DomAccess from 'src/helper/dom-access.helper';

const URL = '/easy-quickview';

export default class EasyQuickViewPlugin extends Plugin {

    static options = {
        elParentSelector: '.cms-listing-col',
        elSelector: '[data-easy-quick]',
        classBtnLeaf: 'btn-leaf',
        style: {
            class: 'easy-quickview',
            position: 'modal-dialog-centered'
        }
    };
    
    init() {
        this._easyQuickModal;
        this._registerEvents();
    }

    /**
     * @private
     */
    _registerEvents() {
        this.el.addEventListener('click', this._onClick.bind(this));
    }

    /**
     * @private
     */
    _onClick(event) {
        event.preventDefault();

        try {
            const productId = this.el.dataset.easyQuick;
            const url = `${URL}/${productId}`;    

            const style = this.options.style;

            this._easyQuickModal = new EasyQuickModalUtil(url, this._callback.bind(this), true, style);

            this._easyQuickModal.open(() => {});
            this._modal = this._easyQuickModal.getModal();

        } catch (error) {}
        
    }

    /**
     * Callback After Load Content Modal
     * @private
     */
    _callback() {
        this._prepareLeaf(); 
        this._addEventShoppingBtn();
        PluginManager.initializePlugins();
    }

    _addEventShoppingBtn() {
        const btn = DomAccess.querySelector(this._modal, '.btn-buy');
        if(btn) {
            btn.addEventListener('click', this._close.bind(this));
        }
    }

    _close() {
        $(this._modal).modal('hide');
    }

    _prepareLeaf() {

        const modalBody = DomAccess.querySelector(this._modal, '.modal-body');

        const btnPrev = document.createElement('button');
        const btnNext = document.createElement('button');

        btnPrev.classList.add(this.options.classBtnLeaf, 'prev');
        btnNext.classList.add(this.options.classBtnLeaf, 'next');
        
        modalBody.prepend(btnPrev);
        modalBody.prepend(btnNext);

        if(!this._parent) {
            this._parent = this.el.closest(this.options.elParentSelector);            
        } 
        
        if(DomAccess.isNode(this._parent)) {
            const prev = this._parent.previousElementSibling;
            const next = this._parent.nextElementSibling;
    
            prev ? btnPrev.dataset.easyQuickPrev = DomAccess.querySelector(prev, this.options.elSelector).dataset.easyQuick : btnPrev.style.display = 'none';
            next ? btnNext.dataset.easyQuickNext = DomAccess.querySelector(next, this.options.elSelector).dataset.easyQuick : btnNext.style.display = 'none';
    
            btnPrev.addEventListener('click', this._updateModalContent.bind(this, btnPrev.dataset.easyQuickPrev));
            btnNext.addEventListener('click', this._updateModalContent.bind(this, btnNext.dataset.easyQuickNext));
        } 
        else {
            btnPrev.style.display = 'none';
            btnNext.style.display = 'none';
        }
    }

    /**? 
     * _updateModalContent after Leaf
     * @private
    */
    _updateModalContent(productId) {
       
        const url = `${URL}/${productId}`;
        const el = document.body.querySelector(`[data-easy-quick="${productId}"]`);

        if(el) {
            this._parent = el.closest(this.options.elParentSelector);
        }

        this._easyQuickModal.updateContent(this._modal, url, this._callback.bind(this));
    }
}