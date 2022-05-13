import Plugin from 'src/plugin-system/plugin.class';
import PluginManager from 'src/plugin-system/plugin.manager';
import Debouncer from 'src/helper/debouncer.helper';
import ViewportDetection from 'src/helper/viewport-detection.helper';

export default class MainNavigationStickyPlugin extends Plugin {

    static options = {
        scrollDebounceTime: 10,
        visiblePos: 250,
        visibleCls: 'show',
        navParentContainer: '.nav-main',
        navContainer: '#mainNavigation'
    };

    init() {

        this.navParentContainer = document.body.querySelector(this.options.navParentContainer);
        this.navContainer = this.navParentContainer.querySelector(this.options.navContainer);

        const mainNavigation = document.body.querySelector('#mainNavigation');
        this.scrollY = (mainNavigation) ? mainNavigation.getBoundingClientRect().top : this.options.visiblePos;

        this._assignDebouncedOnScrollEvent();
        this._registerEvents();
    }

    _registerEvents() {
        document.addEventListener('scroll', this._debouncedOnScroll, false);
        window.addEventListener('DOMContentLoaded', (event) => {
            if(window.scrollY > 0) {
                this.scrollY =  window.scrollY + this.scrollY;
            }
            this._toggleVisibility();
        });
    }

    /**
     * debounce is required to ensure the callback gets executed when scrolling ends
     *
     * @return {Function}
     * @private
     */
    _assignDebouncedOnScrollEvent() {
        this._debouncedOnScroll = Debouncer.debounce(this._toggleVisibility.bind(this), this.options.scrollDebounceTime);
    }

    /**
     * toggle show header floating scroll
     *
     * @private
     */
    _toggleVisibility() {
        
        if (!this._isInAllowedViewports()) return;

        if (window.scrollY > this.scrollY) {
            if(!this.el.classList.contains(this.options.visibleCls)) {
                let stickyNav = this.navContainer.cloneNode(true);
                this.el.append(stickyNav);
                this.el.classList.add(this.options.visibleCls);
                PluginManager.initializePlugin('FlyoutMenu', '[data-flyout-menu]');
            }
        } else {
            this.el.innerHTML = '';
            this.el.classList.remove(this.options.visibleCls);
        }
    }

    _isInAllowedViewports() {
        return (ViewportDetection.isXL());
    }
}